import { useRef, useEffect } from 'react'
import * as THREE from 'three'

// Generate a set of morph target positions from a base sphere
function genMorphTargets(basePos, count) {
  const targets = []
  const stride = 3
  const vlen = basePos.length

  for (let t = 0; t < count; t++) {
    const arr = new Float32Array(vlen)
    for (let i = 0; i < vlen; i += stride) {
      const x = basePos[i], y = basePos[i + 1], z = basePos[i + 2]
      const len = Math.sqrt(x * x + y * y + z * z)
      const nx = x / len, ny = y / len, nz = z / len

      // Different shapes per target
      const phase = (t / count) * Math.PI * 2
      const distortion = 1 + 0.6 * Math.sin(i * 0.3 + phase) + 0.4 * Math.cos(i * 0.7 + phase * 1.5)
      const twist = 1 + 0.3 * Math.sin(i * 0.1 + t * 1.2)

      arr[i] = nx * len * distortion * twist
      arr[i + 1] = ny * len * distortion * (1 + 0.2 * Math.sin(i * 0.05 + t))
      arr[i + 2] = nz * len * distortion * (1 + 0.15 * Math.cos(i * 0.08 + t * 0.7))
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

    // ---- Scene Setup ----
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(50, W / H, 0.1, 500)
    camera.position.set(0, 0, 35)

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })
    renderer.setSize(W, H)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.setClearColor(0x000000, 0)
    container.appendChild(renderer.domElement)

    // ---- Particle Constellation ----
    const COUNT = 280
    const posArr = new Float32Array(COUNT * 3)
    const velArr = []
    const BASE_SIZE = 0.18

    for (let i = 0; i < COUNT; i++) {
      const radius = 6 + Math.random() * 28
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(2 * Math.random() - 1)
      posArr[i * 3] = radius * Math.sin(phi) * Math.cos(theta)
      posArr[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta)
      posArr[i * 3 + 2] = radius * Math.cos(phi)
      velArr.push({
        x: (Math.random() - 0.5) * 0.004,
        y: (Math.random() - 0.5) * 0.004,
        z: (Math.random() - 0.5) * 0.004,
        phase: Math.random() * Math.PI * 2
      })
    }

    const ptGeo = new THREE.BufferGeometry()
    ptGeo.setAttribute('position', new THREE.BufferAttribute(posArr, 3))

    const ptMat = new THREE.PointsMaterial({
      color: '#84cc16',
      size: BASE_SIZE,
      transparent: true,
      opacity: 0.5,
      blending: THREE.AdditiveBlending,
      sizeAttenuation: true,
      depthWrite: false
    })
    const points = new THREE.Points(ptGeo, ptMat)
    scene.add(points)

    // ---- Connecting Lines ----
    const lineMat = new THREE.LineBasicMaterial({
      color: '#84cc16',
      transparent: true,
      opacity: 0.06,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    })
    const lineGeo = new THREE.BufferGeometry()
    const linePos = new Float32Array(COUNT * 3 * 2) // max pairs
    lineGeo.setAttribute('position', new THREE.BufferAttribute(linePos, 3))
    lineGeo.setDrawRange(0, 0)
    const lines = new THREE.LineSegments(lineGeo, lineMat)
    scene.add(lines)

    // ---- Morphing Central Mesh ----
    const morphBase = new THREE.SphereGeometry(2.5, 20, 20)
    const basePos = morphBase.attributes.position.array.slice()
    const morphTargets = genMorphTargets(basePos, 8)

    const morphMat = new THREE.MeshBasicMaterial({
      color: '#84cc16',
      transparent: true,
      opacity: 0.08,
      wireframe: true,
      depthWrite: false
    })
    const morphMesh = new THREE.Mesh(morphBase, morphMat)
    scene.add(morphMesh)

    // Solid inner version
    const morphMat2 = new THREE.MeshBasicMaterial({
      color: '#84cc16',
      transparent: true,
      opacity: 0.03,
      depthWrite: false
    })
    const morphMesh2 = new THREE.Mesh(morphBase.clone(), morphMat2)
    morphMesh2.scale.set(0.85, 0.85, 0.85)
    scene.add(morphMesh2)

    // ---- Scroll-driven ----
    let scrollNorm = 0
    const onScroll = () => {
      const docEl = document.documentElement
      scrollNorm = window.scrollY / (docEl.scrollHeight - window.innerHeight)
    }
    window.addEventListener('scroll', onScroll, { passive: true })

    // ---- Mouse state ----
    let mx = 0, my = 0
    let targetMX = 0, targetMY = 0

    // ---- Animation ----
    let frame
    const clock = new THREE.Clock()
    const linePosArr = lineGeo.attributes.position.array

    const animate = () => {
      frame = requestAnimationFrame(animate)
      const t = clock.getElapsedTime()

      // Smooth mouse
      targetMX += ((mouse?.current?.[0] ?? 0) - targetMX) * 0.04
      targetMY += ((mouse?.current?.[1] ?? 0) - targetMY) * 0.04

      // ---- Particles ----
      const pPos = points.geometry.attributes.position.array
      const spread = 1 + scrollNorm * 0.6

      for (let i = 0; i < COUNT; i++) {
        const i3 = i * 3
        // Orbital drift
        pPos[i3] += velArr[i].x + Math.sin(t * 0.3 + velArr[i].phase) * 0.002 + targetMX * 0.001
        pPos[i3 + 1] += velArr[i].y + Math.cos(t * 0.4 + velArr[i].phase) * 0.002 + targetMY * 0.001
        pPos[i3 + 2] += velArr[i].z

        // Enforce boundary
        const x = pPos[i3], y = pPos[i3 + 1], z = pPos[i3 + 2]
        const dist = Math.sqrt(x * x + y * y + z * z)
        const limit = 30 * spread
        if (dist > limit) {
          pPos[i3] *= 0.98
          pPos[i3 + 1] *= 0.98
          pPos[i3 + 2] *= 0.98
        }
      }
      points.geometry.attributes.position.needsUpdate = true

      // Particle size reacts to scroll + mouse
      const sizeFactor = 1 + scrollNorm * 1.5 + Math.abs(targetMX) * 0.3
      ptMat.size = BASE_SIZE * sizeFactor

      // ---- Lines ----
      const connectDist = 6 + scrollNorm * 4 + Math.abs(targetMX) * 2
      let idx = 0
      for (let i = 0; i < COUNT; i++) {
        const i3 = i * 3
        for (let j = i + 1; j < COUNT; j++) {
          const j3 = j * 3
          const dx = pPos[i3] - pPos[j3]
          const dy = pPos[i3 + 1] - pPos[j3 + 1]
          const dz = pPos[i3 + 2] - pPos[j3 + 2]
          const dist = Math.sqrt(dx * dx + dy * dy + dz * dz)
          if (dist < connectDist && idx < linePosArr.length / 3 - 3) {
            linePosArr[idx * 3] = pPos[i3]
            linePosArr[idx * 3 + 1] = pPos[i3 + 1]
            linePosArr[idx * 3 + 2] = pPos[i3 + 2]
            linePosArr[(idx + 1) * 3] = pPos[j3]
            linePosArr[(idx + 1) * 3 + 1] = pPos[j3 + 1]
            linePosArr[(idx + 1) * 3 + 2] = pPos[j3 + 2]
            idx += 2
          }
        }
      }
      lineGeo.setDrawRange(0, idx)
      lineGeo.attributes.position.needsUpdate = true

      // Line opacity pulses with music-like rhythm
      lineMat.opacity = 0.04 + scrollNorm * 0.08 + Math.sin(t * 0.5) * 0.02

      // ---- Morphing Mesh ----
      const morphIndex = Math.floor(scrollNorm * (morphTargets.length - 1))
      const morphFrac = (scrollNorm * (morphTargets.length - 1)) % 1
      const current = morphTargets[morphIndex]
      const next = morphTargets[Math.min(morphIndex + 1, morphTargets.length - 1)]
      const morphPos = morphMesh.geometry.attributes.position.array

      for (let i = 0; i < morphPos.length; i++) {
        morphPos[i] = current[i] + (next[i] - current[i]) * morphFrac
      }
      morphMesh.geometry.attributes.position.needsUpdate = true
      morphMesh2.geometry.attributes.position.array.set(morphPos)
      morphMesh2.geometry.attributes.position.needsUpdate = true

      // Rotate morph mesh
      const rotSpeed = 0.12 + scrollNorm * 0.2
      morphMesh.rotation.x = t * rotSpeed + targetMY * 0.3
      morphMesh.rotation.y = t * rotSpeed * 1.3 + targetMX * 0.3
      morphMesh2.rotation.x = t * rotSpeed + 0.5 + targetMY * 0.3
      morphMesh2.rotation.y = t * rotSpeed * 1.3 + 0.5 + targetMX * 0.3

      // Morph mesh scale pulses with scroll
      const pulse = 1 + Math.sin(t * 0.8) * (0.05 + scrollNorm * 0.1)
      morphMesh.scale.set(pulse, pulse, pulse)

      // Morph opacity reacts to scroll
      morphMat.opacity = 0.06 + scrollNorm * 0.1
      morphMat2.opacity = 0.02 + scrollNorm * 0.04

      // ---- Camera ----
      const camDist = 35 - scrollNorm * 8
      camera.position.x = Math.sin(t * 0.04) * (2 + scrollNorm * 3) + targetMX * 2
      camera.position.y = Math.cos(t * 0.06) * (1.5 + scrollNorm * 2) + targetMY * 2
      camera.position.z = camDist
      camera.lookAt(0, 0, 0)

      renderer.render(scene, camera)
    }
    animate()

    // ---- Resize ----
    const resize = () => {
      const w = container.clientWidth
      const h = container.clientHeight
      camera.aspect = w / h
      camera.updateProjectionMatrix()
      renderer.setSize(w, h)
    }
    window.addEventListener('resize', resize)

    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', resize)
      renderer.dispose()
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement)
      }
    }
  }, [mouse])

  return (
    <div
      ref={containerRef}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 0,
        pointerEvents: 'none'
      }}
    />
  )
}
