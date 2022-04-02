const DEFAULT_FORM_STYLE = {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px'
}
export default class Form {
    #name
    #action
    #class
    #style
    #inputs = []
    #formEl
    #rendered = false
    #parent

    constructor(options) {
        this.#name = options.name
        this.#action = options.action
        this.#class = options.class ?? undefined
        this.#style = options.style ?? undefined

        this.#formEl = document.createElement('form')
        this.#formEl.setAttribute('action', this.#action)
        this.#formEl.setAttribute('name', this.#name)
        css(this.#formEl, { ...DEFAULT_FORM_STYLE, ...this.#style?.form })
        if (options.parent) {
            this.parent = options.parent
        }
        if (options.inputs) {
            this.setInputs(options.inputs)
        }
    }

    set parent(value) {
        let el = document.querySelector(value)
        if (el) {
            el.append(this.#formEl)
            this.#parent = el
            this.#rendered = true
        } else {
            console.error('Elemento que o form deveria ser renderizado não existe')
        }
    }

    setInputs(value) {
        value.map(input => {
            input.parent = this.#formEl
            let styling = { group: undefined, label: undefined, input: undefined }
            styling.group = { ...this.#style?.group, ...input.style?.group }
            styling.label = { ...this.#style?.label, ...input.style?.label }
            styling.input = { ...this.#style?.input, ...input.style?.input }
            input.style = styling
            this.#inputs.push(new Input(input))
        })
    }

    validate() {
        this.#inputs.map(input => {
            input.validate
        })
    }

    kill(){
        this.#formEl.remove()
    }

}

const DEFAULT_INPUT_GROUP_STYLE = {
    display: 'flex',
    flexDirection: 'column',
    gap: '5px'
}
const DEFAULT_INPUT_LABEL = {
    fontSize: '16px'
}
const DEFAULT_INPUT = {
    borderRadius: '.2em',
    padding: '.3em'
}
class Input {
    #value
    #name
    #class
    #style
    #validation
    #parent
    #inputEl
    #labelEl
    #smallEl
    #labelText
    #type
    #rendered = false
    #placeholder

    constructor(options) {
        this.#name = options.name
        this.#parent = options.parent
        this.#style = options.style
        this.agroup(options.label, options.type)
        this.placeholder = options?.placeholder
        this.value = options.value
        this.validation = options.validation
    }

    set label(value) {
        this.#labelText = value
        let label = document.createElement('label')
        label.setAttribute('for', this.#name)
        label.textContent = this.#labelText
        css(label, { ...DEFAULT_INPUT_LABEL, ...this.#style?.label })
        this.#labelEl = label

    }

    set input(value) {
        this.#type = value
        let el = document.createElement('input')
        el.setAttribute('type', this.#type)
        el.setAttribute('name', this.#name)
        css(el, { ...DEFAULT_INPUT, ...this.#style?.input })
        el.addEventListener('change', e => {
            this.#value = el.value
        })
        this.#inputEl = el
        let small = document.createElement('small')
        this.#smallEl = small
    }

    set placeholder(value) {
        if (!value) return
        this.#placeholder = value
        this.#inputEl.placeholder = this.#placeholder
    }

    set value(value) {
        if (!value) return
        this.#value = value
        this.#inputEl.value = this.#value
    }

    set validation(value) {
        if (!value) return
        this.#validation = new Validator(value)
    }

    agroup(label, type) {
        if (label) {
            this.label = label
        }
        this.input = type ?? 'text'
        let div = document.createElement('div')
        css(div, { ...DEFAULT_INPUT_GROUP_STYLE, ...this.#style?.group })
        div.append(this.#labelEl, this.#inputEl, this.#smallEl)
        this.#parent.append(div)
        this.#rendered = true
    }

    get validate() {
        this.#validation.validate(this.#inputEl, this.#smallEl)
    }


}

class Validator {
    #type
    #message

    constructor(options) {
        this.#type = options.type
        this.#message = options.message
    }

    validate(input, small) {
        if (this.#type == 'required') {
            if (input.value.length == 0) {
                input.style.borderSize = '1px'
                input.style.borderColor = '#B00020'
                small.textContent = this.#message
                small.style.color = '#B00020'
            }
        }
    }

}

const css = (el, style) => {
    let keys = Object.keys(style)
    keys.map((value) => {
        el.style[value] = style[value]
    })
}
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))