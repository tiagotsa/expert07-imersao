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
                width: 640,
                height: 480,
                frameRate: {
                    ideal: 30
                },
                facingMode: "user"
            }
        }

        const stream = await navigator.mediaDevices.getUserMedia(videoConfig)
        const camera = new Camera()
        camera.video.srcObject = stream

        // Debug camera preview
        camera.video.height = 120
        camera.video.width = 160
        camera.video.style.position = 'fixed'
        camera.video.style.top = '0'
        camera.video.style.right = '0'
        camera.video.style.zIndex = '1000'
        camera.video.style.transform = 'scaleX(-1)' // Mirror
        camera.video.style.border = '1px solid white'
        camera.video.style.borderRadius = '10px'
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