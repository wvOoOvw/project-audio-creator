import React from 'react'

import Imitation from './utils.imitation'

function App() {
  const canvasRef = React.useRef()

  const ImageRef = React.useRef(new Image())

  const viewRef = React.useRef([])

  const loop = () => {
    requestAnimationFrame(() => {
      const context = canvasRef.current.getContext('2d')

      context.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height)

      // if (ImageRef.current.src) {
      //   context.drawImage(ImageRef.current, 0, 0, canvasRef.current.width, canvasRef.current.height)
      // }

      viewRef.current.forEach(i => {
        const x = i.x
        const y = i.y
        const radius = i.radius

        context.beginPath()
        context.arc(x, y, radius, 0, Math.PI * 2)
        context.fillStyle = Imitation.state.theme.palette.primary.main
        context.fill()

        i.radius = i.radius - i.radiusMax / 120

        if (i.radius === 0 || i.radius < 0.1) viewRef.current = viewRef.current.filter(i_ => i_ !== i)
      })

      loop()
    })
  }

  React.useEffect(() => {
    loop()
  }, [])

  // React.useEffect(() => {
  //   fetch(`https://picsum.photos/800/800`)
  //     .then(res => res.blob())
  //     .then(blob => {
  //       const reader = new FileReader()
  //       reader.onload = (event) => ImageRef.current.src = event.target.result
  //       reader.readAsDataURL(blob)
  //     })
  // }, [])

  React.useEffect(() => {
    if (Imitation.state.canvasAnimation === 0) return

    const min = Math.min(canvasRef.current.width, canvasRef.current.height)

    const radius = Math.random() * min * 0.1 + min * 0.05
    const radiusMax = radius
    const x = Math.random() * (canvasRef.current.width - radius) + radius / 2
    const y = Math.random() * (canvasRef.current.height - radius) + radius / 2

    const view = { x, y, radius, radiusMax }

    viewRef.current.push(view)
  }, [Imitation.state.canvasAnimation])

  return <canvas style={{ position: 'absolute', zIndex: -1, top: 0, left: 0, width: '100%', height: '100%' }} width={canvasRef.current ? canvasRef.current.offsetWidth : 0} height={canvasRef.current ? canvasRef.current.offsetHeight : 0} ref={el => canvasRef.current = el}></canvas>
}

export default Imitation.withBindRender(App, state => [state.canvasAnimation])