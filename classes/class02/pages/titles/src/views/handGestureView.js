export default class HandGestureView {
    loop(fn) {
        requestAnimationFrame(fn)
    }
    scrollPage(top) {
        scroll({
            top,
            behavion: "smooth"

        })
    }
}