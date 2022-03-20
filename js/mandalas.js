export default class Mandalas{
    #mandalaElem

    constructor(element){
        this.mandala = element
        this.controller()
    }

    controller(){
        let add_button = document.createElement("i")
        add_button.setAttribute("title","Adicionar Pétala")
        add_button.classList.add("fas","fa-plus")

        let remove_button = document.createElement("i")
        remove_button.setAttribute("title","Remover Pétala")
        remove_button.classList.add("fas","fa-minus")

        let controller = document.createElement("div")
        controller.classList.add("controller")

        controller.append(add_button,remove_button)
        this.#mandalaElem.append(controller)
    }

    // Utilizada para passagem de parâmetros através de objetos 
    update(options){
        Object.entries(options).forEach(([key,value]) => {
            this[key] = value
        }) 
    }

    set mandala(value){
        this.#mandalaElem = document.getElementById(value)
        this.#mandalaElem.classList.add("mandalas")
    }
}
