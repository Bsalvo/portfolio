const default_time_letter = 30
const default_time_word = 1000
const timeout = ms => new Promise(resolve => setTimeout(resolve,ms))
export default class typeEffect {
    #element
    #text
    #count = 0

    constructor(idElem,textElem){
        this.#element = document.getElementById(idElem)
        this.update(textElem)
    }

    async typewrite() {
        this.#element.textContent = ''
        for(let i = this.#count; i < this.#text.length; i++){
            await timeout(default_time_letter)
            this.#element.textContent = this.#element.textContent + this.#text.charAt(i)
            this.#count = i
        }
        this.#count = 0
    }

    async update(values){
        for(let i = 0; i < values.length; i++){
            this.#text = values[i]
            let timeNeeded = (default_time_letter * this.#text.length) + default_time_word
            this.typewrite()
            await timeout(timeNeeded)
        }
        
    }
}
