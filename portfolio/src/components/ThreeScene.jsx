import { useRef, useEffect } from 'react'
import * as THREE from 'three'

function genMorphTargets(basePos, count) {
  const targets = []
  const stride = 3
  const vlen = basePos.length
  for (let t = 0; t < count; t++) {
    const arr = new Float32Array(vlen)
    for (let i = 0; i < vlen; i += stride) {
      const x = basePos[i], y = basePos[i + 1], z = basePos[i + 2]
      const len = Math.sqrt(x * x + y * y + z * z) || 1
      const nx = x / len, ny = y / len, nz = z / len
      const phase = (t / count) * Math.PI * 2
      const distortion = 1 + 0.8 * Math.sin(i * 0.3 + phase) + 0.5 * Math.cos(i * 0.7 + phase * 1.5)
      const twist = 1 + 0.4 * Math.sin(i * 0.1 + t * 1.2)
      arr[i] = nx * len * distortion * twist
      arr[i + 1] = ny * len * distortion * (1 + 0.3 * Math.sin(i * 0.05 + t))
      arr[i + 2] = nz * len * distortion * (1 + 0.2 * Math.cos(i * 0.08 + t * 0.7))
    }
    targets.push(arr)
  }
  return targets
}

export default function ThreeScene({ mouse }) {
  const containerRef = useRef(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const W = container.clientWidth
    const H = container.clientHeight

    // ---- Scene ----
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(50, W / H, 0.1, 500)
    camera.position.set(0, 0, 35)

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })
    renderer.setSize(W, H)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.setClearColor(0x000000, 0)
    container.appendChild(renderer.domElement)

    // ---- Galaxy Vortex Particles ----
    const COUNT = 400
    const posArr = new Float32Array(COUNT * 3)
    const burstDir = new Float32Array(COUNT * 3)
    const particleData = []

    for (let i = 0; i < COUNT; i++) {
      const arm = Math.floor(Math.random() * 4)
      const armAngle = (arm / 4) * Math.PI * 2
      const radius = 4 + Math.random() * 26
      const angle = armAngle + radius * 0.3 + (Math.random() - 0.5) * 0.8
      const spread = (Math.random() - 0.5) * 4 * (1 + radius * 0.05)

      const x = Math.cos(angle) * radius + spread
      const z = Math.sin(angle) * radius + spread
      const y = (Math.random() - 0.5) * 2 * (1 + radius * 0.08)

      posArr[i * 3] = x
      posArr[i * 3 + 1] = y
      posArr[i * 3 + 2] = z

      // Pre-calculate burst direction (fixed per particle, not per frame)
      burstDir[i * 3] = (Math.random() - 0.5) * 2
      burstDir[i * 3 + 1] = (Math.random() - 0.5) * 2
      burstDir[i * 3 + 2] = (Math.random() - 0.5) * 2

      particleData.push({
        orbitSpeed: 0.1 + Math.random() * 0.3,
        orbitRadius: radius,
        orbitOffset: angle,
        yPhase: Math.random() * Math.PI * 2
      })
    }

    const ptGeo = new THREE.BufferGeometry()
    ptGeo.setAttribute('position', new THREE.BufferAttribute(posArr, 3))

    const ptMat = new THREE.PointsMaterial({
      color: '#84cc16',
      size: 0.18,
      transparent: true,
      opacity: 0.5,
      blending: THREE.AdditiveBlending,
      sizeAttenuation: true,
      depthWrite: false
    })
    const points = new THREE.Points(ptGeo, ptMat)
    scene.add(points)

    // ---- Connection Lines ----
    const lineMat = new THREE.LineBasicMaterial({
      color: '#84cc16',
      transparent: true,
      opacity: 0.04,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    })
    const lineGeo = new THREE.BufferGeometry()
    const maxLines = 300
    const linePos = new Float32Array(maxLines * 2 * 3)
    lineGeo.setAttribute('position', new THREE.BufferAttribute(linePos, 3))
    lineGeo.setDrawRange(0, 0)
    const lines = new THREE.LineSegments(lineGeo, lineMat)
    scene.add(lines)

    // ---- Central Morphing Mesh ----
    const morphBase = new THREE.SphereGeometry(2.8, 20, 20)
    const basePos = morphBase.attributes.position.array.slice()
    const morphTargets = genMorphTargets(basePos, 10)

    const wireMat = new THREE.MeshBasicMaterial({
      color: '#84cc16',
      transparent: true,
      opacity: 0.1,
      wireframe: true,
      depthWrite: false
    })
    const morphMesh = new THREE.Mesh(morphBase, wireMat)
    scene.add(morphMesh)

    const solidMat = new THREE.MeshBasicMaterial({
      color: '#a3e635',
      transparent: true,
      opacity: 0.04,
      depthWrite: false
    })
    const solidMesh = new THREE.Mesh(morphBase.clone(), solidMat)
    solidMesh.scale.set(0.8, 0.8, 0.8)
    scene.add(solidMesh)

    // ---- Orbiting Shapes (grouped for rotation) ----
    const orbitColors = ['#84cc16', '#a3e635', '#65a30d', '#bef264']
    const orbitGeos = [
      new THREE.OctahedronGeometry(0.4),
      new THREE.DodecahedronGeometry(0.35),
      new THREE.IcosahedronGeometry(0.3),
      new THREE.TetrahedronGeometry(0.45)
    ]
    const orbitGroup = new THREE.Group()
    scene.add(orbitGroup)
    const orbitMeshes = []

    for (let i = 0; i < 8; i++) {
      const mat = new THREE.MeshBasicMaterial({
        color: orbitColors[i % orbitColors.length],
        transparent: true,
        opacity: 0.2,
        wireframe: i % 2 === 0
      })
      const mesh = new THREE.Mesh(orbitGeos[i % orbitGeos.length], mat)
      const r = 5 + Math.random() * 3
      const a = (i / 8) * Math.PI * 2
      mesh.userData = { radius: r, angle: a, speed: 0.15 + Math.random() * 0.2 }
      mesh.position.set(Math.cos(a) * r, (Math.random() - 0.5) * 3, Math.sin(a) * r)
      orbitGroup.add(mesh)
      orbitMeshes.push(mesh)
    }

    // ---- Scroll ----
    let scrollNorm = 0
    const onScroll = () => {
      const de = document.documentElement
      const maxScroll = de.scrollHeight - window.innerHeight
      scrollNorm = maxScroll > 0 ? Math.min(window.scrollY / maxScroll, 1) : 0
    }
    window.addEventListener('scroll', onScroll, { passive: true })

    // ---- Click Burst ----
    let burstPower = 0
    const onClick = () => { burstPower = 0.8 }
    window.addEventListener('click', onClick)

    // ---- Anim ----
    let frame
    const clock = new THREE.Clock()
    const linePosArr = lineGeo.attributes.position.array
    let targetMX = 0, targetMY = 0

    const animate = () => {
      frame = requestAnimationFrame(animate)
      const t = clock.getElapsedTime()

      // Smooth mouse
      const mx = mouse?.current?.[0] ?? 0
      const my = mouse?.current?.[1] ?? 0
      targetMX += (mx - targetMX) * 0.04
      targetMY += (my - targetMY) * 0.04

      // Decay burst (exponential)
      burstPower *= 0.96
      if (burstPower < 0.001) burstPower = 0

      // ---- Galaxy Particles ----
      const pPos = points.geometry.attributes.position.array
      const spreadFactor = 1 + scrollNorm * 0.6

      for (let i = 0; i < COUNT; i++) {
        const i3 = i * 3
        const d = particleData[i]
        const angle = d.orbitOffset + t * d.orbitSpeed * (0.5 + scrollNorm * 0.2)
        const radius = d.orbitRadius * spreadFactor

        // Base orbital position
        const bx = Math.cos(angle) * radius
        const bz = Math.sin(angle) * radius
        const by = Math.sin(t * 0.3 + d.yPhase) * 1.5 * spreadFactor

        // Burst adds smooth offset along pre-calculated direction
        const burstStr = burstPower * 20
        pPos[i3] = bx + burstDir[i3] * burstStr
        pPos[i3 + 1] = by + burstDir[i3 + 1] * burstStr
        pPos[i3 + 2] = bz + burstDir[i3 + 2] * burstStr
      }
      points.geometry.attributes.position.needsUpdate = true
      ptMat.size = 0.15 + scrollNorm * 0.15 + burstPower * 0.4

      // ---- Lines ----
      const connectDist = 5 + scrollNorm * 3 + burstPower * 5
      let idx = 0
      const step = 3 // check every 3rd particle for perf
      for (let i = 0; i < COUNT; i += step) {
        for (let j = i + step; j < COUNT; j += step) {
          if (idx >= maxLines * 2) break
          const i3 = i * 3, j3 = j * 3
          const dx = pPos[i3] - pPos[j3]
          const dy = pPos[i3 + 1] - pPos[j3 + 1]
          const dz = pPos[i3 + 2] - pPos[j3 + 2]
          if (dx * dx + dy * dy + dz * dz < connectDist * connectDist) {
            const li = idx * 3
            linePosArr[li] = pPos[i3]
            linePosArr[li + 1] = pPos[i3 + 1]
            linePosArr[li + 2] = pPos[i3 + 2]
            linePosArr[li + 3] = pPos[j3]
            linePosArr[li + 4] = pPos[j3 + 1]
            linePosArr[li + 5] = pPos[j3 + 2]
            idx += 2
          }
        }
      }
      lineGeo.setDrawRange(0, idx)
      lineGeo.attributes.position.needsUpdate = true
      lineMat.opacity = 0.02 + scrollNorm * 0.05 + burstPower * 0.08

      // ---- Central Morph ----
      const morphIndex = Math.min(Math.floor(scrollNorm * (morphTargets.length - 1)), morphTargets.length - 2)
      const morphFrac = (scrollNorm * (morphTargets.length - 1)) % 1
      const cur = morphTargets[morphIndex]
      const nxt = morphTargets[morphIndex + 1]
      const mp = morphMesh.geometry.attributes.position.array

      for (let i = 0; i < mp.length; i++) {
        mp[i] = cur[i] + (nxt[i] - cur[i]) * morphFrac
      }
      morphMesh.geometry.attributes.position.needsUpdate = true
      solidMesh.geometry.attributes.position.array.set(mp)
      solidMesh.geometry.attributes.position.needsUpdate = true

      const rotSpd = 0.1 + scrollNorm * 0.2
      morphMesh.rotation.x = t * rotSpd + targetMY * 0.3
      morphMesh.rotation.y = t * rotSpd * 1.3 + targetMX * 0.3
      solidMesh.rotation.x = t * rotSpd + 0.3 + targetMY * 0.3
      solidMesh.rotation.y = t * rotSpd * 1.3 + 0.3 + targetMX * 0.3

      const pulse = 1 + Math.sin(t * 0.6 + burstPower * 3) * (0.05 + scrollNorm * 0.08 + burstPower * 0.2)
      morphMesh.scale.set(pulse, pulse, pulse)

      wireMat.opacity = 0.05 + scrollNorm * 0.1 + burstPower * 0.15
      solidMat.opacity = 0.02 + scrollNorm * 0.04 + burstPower * 0.06
      wireMat.color.setHSL(0.25 - scrollNorm * 0.08, 0.7, 0.4 + burstPower * 0.1)
      solidMat.color.setHSL(0.25 - scrollNorm * 0.08, 0.7, 0.45 + burstPower * 0.1)

      // ---- Orbit Group ----
      orbitGroup.rotation.y = t * 0.05
      orbitGroup.rotation.x = Math.sin(t * 0.03) * 0.1 + targetMY * 0.1
      orbitGroup.rotation.z = Math.cos(t * 0.04) * 0.05 + targetMX * 0.1

      for (const mesh of orbitMeshes) {
        mesh.rotation.x = t * 0.6
        mesh.rotation.y = t * 0.8
        const s = 1 + Math.sin(t * 0.4 + mesh.userData.angle) * 0.2 + burstPower * 0.3
        mesh.scale.setScalar(s)
        mesh.material.opacity = 0.15 + scrollNorm * 0.15 + burstPower * 0.2
      }

      // ---- Camera ----
      const camDist = 35 - scrollNorm * 6 - burstPower * 1
      camera.position.x = Math.sin(t * 0.03) * (1 + scrollNorm * 2) + targetMX * 2
      camera.position.y = Math.cos(t * 0.05) * (1 + scrollNorm * 2) + targetMY * 2
      camera.position.z = Math.max(camDist, 20)
      camera.lookAt(0, 0, 0)

      renderer.render(scene, camera)
    }
    animate()

    const resize = () => {
      const w = container.clientWidth, h = container.clientHeight
      if (w === 0 || h === 0) return
      camera.aspect = w / h
      camera.updateProjectionMatrix()
      renderer.setSize(w, h)
    }
    window.addEventListener('resize', resize)

    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('click', onClick)
      window.removeEventListener('resize', resize)
      renderer.dispose()
      if (container.contains(renderer.domElement)) container.removeChild(renderer.domElement)
    }
  }, [mouse])

  return (
    <div
      ref={containerRef}
      style={{ position: 'fixed', inset: 0, zIndex: 0, pointerEvents: 'none' }}
    />
  )
}
