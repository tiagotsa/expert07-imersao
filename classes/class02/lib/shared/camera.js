export default class Camera {
    constructor() {
        this.video = document.createElement('video')
    }

    static async init() {
        if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
            throw new Error(
                `Browser API navigator.mediaDevices.getUserMedia not available`
            )
        }
        const videoConfig = {
            audio: false,
            video: {
                width: globalThis.screen.availWidth,
                height: globalThis.screen.availHeight,
                frameRate: {
                    ideal: 60
                },
                facingMode: "user"
            }
        }

        const stream = await navigator.mediaDevices.getUserMedia(videoConfig)
        const camera = new Camera()
        camera.video.srcObject = stream

        
        camera.video.height = 240
        camera.video.width = 320
        camera.video.style.position = 'fixed'
        camera.video.style.top = '0'
        camera.video.style.right = '0'
        camera.video.style.zIndex = '1000'
        camera.video.style.transform = 'scaleX(-1)' // Espelhar a imagem
        camera.video.style.border = '2px solid red' // Borda para debug
        document.body.append(camera.video)

        await new Promise((resolve) => {
            camera.video.onloadedmetadata = () => {
                resolve(camera.video)
            }
        })
        camera.video.play()

        return camera
    }


}