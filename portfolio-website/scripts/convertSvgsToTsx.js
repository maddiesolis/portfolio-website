/**
 * Converts SVG files in the public/icons directory to TSX components in the src/components/icons directory.
 *
 * For each SVG file:
 * 1. Modifies the SVG content to make attributes compatible with React.
 * 2. Uses the svgColor variable for stroke color.
 * 3. Wraps the SVG content in a React functional component.
 * 4. Writes the component to a new TSX file in the output directory.
 * 5. Deletes the original SVG file.
 */

import fs from 'fs/promises'
import path from 'path'
import { glob } from 'glob'

const svgDir = 'public/svg'
const outputDir = 'src/components/svgs'

// Ensure the output directory exists
await fs.mkdir(outputDir, { recursive: true })

const svgFiles = await glob(`${svgDir}/**/*.svg`)

for (const filePath of svgFiles) {
  const content = await fs.readFile(filePath, 'utf-8')

  const fileName = path.basename(filePath, '.svg')

  const jsxContent = content
    .replace(/<svg[^>]*>/, match => {
      const viewBoxMatch = match.match(/viewBox="([^"]*)"/) // Capture the viewBox attribute
      const viewBox = viewBoxMatch ? `viewBox="${viewBoxMatch[1]}" ` : '' // Extract the viewBox value if it exists

      return `<svg width="100%" height="100%" ${viewBox} xmlns="http://www.w3.org/2000/svg" fill="none" xmlns:xlink="http://www.w3.org/1999/xlink" {...props}>`
    })
    .replace(/<\?xml.*\?>/, '')
    .replace(/xmlns:xlink="http:\/\/www\.w3\.org\/1999\/xlink"/g, '')
    .replace(/<svg/, `<svg`)
    .replace('</svg>', '</svg>')
    .replace(/\sstroke="([^"]*)"/g, ' stroke={svgColor}') // Use svgColor variable
    .replace(/\sstroke-width="([^"]*)"/g, ' strokeWidth="$1"')
    .replace(/\sstroke-linecap="([^"]*)"/g, ' strokeLinecap="$1"')
    .replace(/viewBox="([^"]*)"/g, 'viewBox="$1"') // Preserve the original viewBox attribute

  const tsxContent = `import React from 'react';
  import { svgColor } from '@/globalVariables'
  
  const ${fileName.charAt(0).toUpperCase() + fileName.slice(1)}Svg: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    ${jsxContent}
  );
  
  export default ${fileName.charAt(0).toUpperCase() + fileName.slice(1)}Svg;
  `

  const tsxFilePath = path.join(
    outputDir,
    `${fileName.charAt(0).toUpperCase() + fileName.slice(1)}Svg.tsx`
  )
  await fs.writeFile(tsxFilePath, tsxContent, 'utf-8')
  await fs.unlink(filePath)
}

console.log(
  `Converted ${svgFiles.length} SVG files to TSX components and removed original SVG files.`
)
