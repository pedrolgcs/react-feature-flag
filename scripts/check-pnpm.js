#!/usr/bin/env node
/* eslint-disable @typescript-eslint/no-var-requires */
const { execSync } = require('child_process')

function getMajor(version) {
  return version.split('.')[0]
}

try {
  const version = execSync('pnpm --version').toString().trim()
  const major = getMajor(version)

  if (major !== '9') {
    console.error(
      `\n🚨 Este projeto requer pnpm v9.x, mas você está usando v${version}.\n` +
        `   Instale a versão correta ou habilite o Corepack:\n\n` +
        `   corepack enable\n` +
        `   corepack install\n`,
    )
    process.exit(1)
  }
} catch (err) {
  console.error('❌ Não consegui verificar a versão do pnpm. Está instalado?')
  process.exit(1)
}
