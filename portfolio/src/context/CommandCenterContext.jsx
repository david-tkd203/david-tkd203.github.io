import React, { createContext, useContext, useState, useCallback } from 'react';
import { audioManager } from '../utils/AudioManager';

/**
 * CommandCenterContext
 * Manage section access control and terminal commands
 * Architecture: State-based access control with regex command parsing
 */
const CommandCenterContext = createContext();

export const CommandCenterProvider = ({ children }) => {
  const [deployedSections, setDeployedSections] = useState({
    ABOUT: false,
    PROJECTS: false,
    SKILLS: false
  });

  const [commandHistory, setCommandHistory] = useState([
    '> SYSTEM INITIALIZED - AWAITING COMMANDS...',
    '> Type "help" for available commands'
  ]);

  /**
   * Execute command with regex pattern matching
   * Supports:
   * - run deploy --section [SECTION_NAME]
   * - run deploy --global
   * - help
   * - clear
   */
  const executeCommand = useCallback((cmd) => {
    const trimmedCmd = cmd.trim();
    let response = '';

    // Regex patterns
    const sectionPattern = /^run deploy --section ([A-Z_]+)$/i;
    const globalPattern = /^run deploy --global$/i;
    const helpPattern = /^help$/i;
    const clearPattern = /^clear$/i;

    // Match section deploy
    if (sectionPattern.test(trimmedCmd)) {
      const match = trimmedCmd.match(sectionPattern);
      const sectionName = match[1].toUpperCase();

      if (sectionName in deployedSections) {
        setDeployedSections((prev) => ({
          ...prev,
          [sectionName]: true
        }));
        response = `[OK] DECRYPTING SECTION: ${sectionName}...`;
        audioManager.playScan();
      } else {
        response = `[ERROR] SECTION "${sectionName}" NOT FOUND`;
        audioManager.playGlitch();
      }
    }
    // Match global deploy
    else if (globalPattern.test(trimmedCmd)) {
      setDeployedSections((prev) => ({
        ABOUT: true,
        PROJECTS: true,
        SKILLS: true
      }));
      response = '[WARNING] GLOBAL OVERRIDE INITIATED... All sections unlocked.';
      audioManager.playScan();
      audioManager.playBeep();
    }
    // Help command
    else if (helpPattern.test(trimmedCmd)) {
      response = `┌─────────────────────────────────────────┐
│      COMANDOS DISPONIBLES - v1.0        │
└─────────────────────────────────────────┘

[1] run deploy --section ABOUT
    → Desbloquea la sección ABOUT

[2] run deploy --section PROJECTS
    → Desbloquea la sección PROJECTS

[3] run deploy --section SKILLS
    → Desbloquea la sección SKILLS

[4] run deploy --global
    → Desbloquea TODAS las secciones

[5] clear
    → Limpia el historial de terminal

[6] help
    → Muestra este mensaje

┌─────────────────────────────────────────┐
│   💡 Tip: Usa InfoHub (botón flotante)  │
│      para desbloquear sin comandos      │
└─────────────────────────────────────────┘`;
      audioManager.playClick();
    }
    // Clear command
    else if (clearPattern.test(trimmedCmd)) {
      setCommandHistory(['> TERMINAL CLEARED']);
      audioManager.playClick();
      return null; // Signal to clear without adding to history
    }
    // Unknown command
    else {
      response = `[ERROR] COMANDO NO RECONOCIDO: "${trimmedCmd}"\nEscribe "help" para ver comandos disponibles.`;
      audioManager.playGlitch();
    }

    return response;
  }, [deployedSections]);

  const addCommandToHistory = useCallback((command, response) => {
    setCommandHistory((prev) => [
      ...prev,
      `> ${command}`,
      ...(response ? [response] : [])
    ]);
  }, []);

  const clearHistory = useCallback(() => {
    setCommandHistory(['> TERMINAL CLEARED']);
  }, []);

  return (
    <CommandCenterContext.Provider
      value={{
        deployedSections,
        commandHistory,
        executeCommand,
        addCommandToHistory,
        clearHistory
      }}
    >
      {children}
    </CommandCenterContext.Provider>
  );
};

/**
 * Hook to consume CommandCenterContext
 */
export const useCommandCenter = () => {
  const context = useContext(CommandCenterContext);
  if (!context) {
    throw new Error('useCommandCenter must be used within CommandCenterProvider');
  }
  return context;
};
