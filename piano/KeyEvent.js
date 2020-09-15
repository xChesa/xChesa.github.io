document.addEventListener("keypress", function(event) {
    let keys = ["KeyA", "KeyS", "KeyD", "KeyF", "KeyG", "KeyH", "KeyJ", "KeyW", "KeyE", "KeyT", "KeyY", "KeyU"]

    if (keys.includes(event.code)) {
        let note = new Audio("assets\\notes\\" + event.key.toUpperCase() + ".mp3");
        note.play();
    }
})
