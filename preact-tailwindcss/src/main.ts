import { showUI, on } from '@create-figma-plugin/utilities'

export default function () {
  showUI({
    height: 240,
    width: 240
  })

  on('create-frame-with-button', function () {
    console.log('create-frame-with-button')
    // Create a frame
    const frame = figma.createFrame()
    frame.name = 'Dark Frame with Button'
    frame.resize(300, 120)
    frame.fills = [{ type: 'SOLID', color: { r: 0.1, g: 0.1, b: 0.1 } }]
    frame.x = 100
    frame.y = 100

    // Create a button (rectangle)
    const button = figma.createRectangle()
    button.resize(180, 48)
    button.cornerRadius = 8
    button.fills = [{ type: 'SOLID', color: { r: 0.15, g: 0.15, b: 0.15 } }]
    button.x = 60
    button.y = 36

    // Create text node
    figma.loadFontAsync({ family: 'Inter', style: 'Regular' }).then(() => {
      const text = figma.createText()
      text.characters = 'Button'
      text.fontSize = 20
      text.fills = [{ type: 'SOLID', color: { r: 1, g: 1, b: 1 } }]
      // Center the text on the button
      text.x = button.x + (button.width - text.width) / 2
      text.y = button.y + (button.height - text.fontSize) / 2

      frame.appendChild(button)
      frame.appendChild(text)
      figma.currentPage.appendChild(frame)
      figma.viewport.scrollAndZoomIntoView([frame])
    })
  })
}
