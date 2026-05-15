export default class HandGestureView {
    #handsCanvas = document.querySelector('#hands')
    #canvasContext = this.#handsCanvas.getContext('2d')
    #fingerLookupIndexes
    constructor({ fingerLookupIndexes }) {
        this.#handsCanvas.width = window.innerWidth
        this.#handsCanvas.height = window.innerHeight
        this.#fingerLookupIndexes = fingerLookupIndexes
    }

    clearCanvas() {
        this.#handsCanvas.width = window.innerWidth
        this.#handsCanvas.height = window.innerHeight
        this.#canvasContext.clearRect(0, 0, this.#handsCanvas.width, this.#handsCanvas.height)
    }

    clickOnElement(x, y) {
        const element = document.elementFromPoint(x, y)
        if(!element) return;
    
        const rect = element.getBoundingClientRect()
        const event = new MouseEvent('click', {
          view: window,
          bubbles: true,
          cancelable: true,
          clientX: rect.left + x,
          clientY: rect.top + y
        })
    
        element.dispatchEvent(event)
      }
    
    drawResults(hands) {
        for (const { keypoints, handedness } of hands) {
            if (!keypoints) continue

            this.#canvasContext.fillStyle = handedness === "Left" ? "rgb(44, 212, 103)" : "rgb(44, 212, 103)"
            this.#canvasContext.strokeStyle = "white"
            this.#canvasContext.lineWidth = 8
            this.#canvasContext.lineJoin = "round"

            // Mapeia os pontos do vídeo para o tamanho da tela
            const scaledKeypoints = keypoints.map(point => ({
                ...point,
                x: (point.x / 640) * window.innerWidth,
                y: (point.y / 480) * window.innerHeight
            }))

            this.#drawJoints(scaledKeypoints)
            this.#drawFingersAndHoverElements(scaledKeypoints)
        }
    }
    #drawJoints(keypoints) {
        for (const { x, y } of keypoints) {
            this.#canvasContext.beginPath()
            const newX = x
            const newY = y
            const radius = 10 // Aumentado para visibilidade no mobile
            const startAngle = 0
            const endAngle = 2 * Math.PI
      
            this.#canvasContext.arc(newX, newY, radius, startAngle, endAngle)
            this.#canvasContext.fill()
        }

    }
   
    #drawFingersAndHoverElements(keypoints) {
        const fingers = Object.keys(this.#fingerLookupIndexes)
    for (const finger of fingers) {
      const points = this.#fingerLookupIndexes[finger].map(
        index => keypoints[index]
      )
      const region = new Path2D()
      // [0] é a palma da mao (wrist)
      const [{ x, y }] = points
      region.moveTo(x, y)
      for(const point of points) {
        region.lineTo(point.x, point.y)
      }
      this.#canvasContext.stroke(region)
        }
    }
    loop(fn) {
        requestAnimationFrame(fn)
    }
    scrollPage(top) {
        scroll({
            top,
            behavior: "smooth"

        })
    }
}

