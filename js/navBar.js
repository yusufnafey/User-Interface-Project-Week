class Overlay {
    constructor(element) {
        this.element = element

        this.button = this.element.querySelector(".navButton")
        
        this.content = this.element.querySelector(".navContent")

        this.button.addEventListener("click", ()=> {
            this.toggleContent(event);
        } )
    }

    toggleContent() {
        this.content.classList.toggle("navHidden")
    }
}

let overlay = document.querySelectorAll(".overlay")
overlay = Array.from(overlay).map(overlay => new Overlay(overlay))

// nav button switch
let navButton = document.querySelector(".navButton")

navButton.addEventListener("click", () => {
    navButton.classList.toggle("navButtonToggle")
})

// navButton.addEventListener("click", () => {
//     navButton.src = "img/nav-hamburger.png"
// })