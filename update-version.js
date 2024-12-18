import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const packageFilePath = path.join(__dirname, 'package.json')

const readJsonFile = filePath => {
  const rawData = fs.readFileSync(filePath)
  return JSON.parse(rawData.toString())
}

const writeJsonFile = (filePath, data) => {
  const jsonString = JSON.stringify(data, null, 2)
  fs.writeFileSync(filePath, jsonString)
}

const updateVersion = version => {
  const versionParts = version.split('.').map(Number)
  versionParts[2] += 1
  if (versionParts[2] >= 10) {
    versionParts[2] = 0
    versionParts[1] += 1
  }
  if (versionParts[1] >= 10) {
    versionParts[1] = 0
    versionParts[0] += 1
  }
  return versionParts.join('.')
}

const packageData = readJsonFile(packageFilePath)
const newVersion = updateVersion(packageData.version)
packageData.version = newVersion
writeJsonFile(packageFilePath, packageData)

console.log('Version updated to:', newVersion)
