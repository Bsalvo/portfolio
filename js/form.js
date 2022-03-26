export default class Form{
    #name
    #action
    #class
    #css
    #formEl
    #rendered = false
    #parent

    constructor(options){
        this.#name = options.name
        this.#action = options.action 
        this.#class = options.class ?? undefined
        this.#css = options.css ?? undefined

        this.#formEl = document.createElement('form')
        this.#formEl.setAttribute('action',this.#action)
        this.#formEl.setAttribute('name',this.#name)
        if(options.el){
            let el = document.querySelector(options.el)
            if(el){
                this.#parent = el
                el.append(this.#formEl)
                this.#rendered = true
            } else {
                console.error('Elemento que o form deveria ser renderizado não existe')
            }
        }
    }
}

class Input{
    #name
    #class
    #css
    #rendered = false
    #parent
    #type
    #validation
    #label
    #labelEl

    constructor(options){
        this.#name = options.name
        this.#parent = options.parent
        this.#type = options.type = 'text'
        this.#label = options.label ?? undefined
        
        if(this.#label){
            let label = document.createElement('label')
            label.setAttribute('for',this.#name)
            label.textContent = this.#label
            this.#labelEl = label
        }


    }


}