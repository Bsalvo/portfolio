export default class Mandalas{
    #mandalaElem
    add_Petela
    #petalas
    #view

    constructor(element){
        this.mandala = element
        this.#petalas = []
        this.add_Petela = this.addPetala.bind(this)
        this.#view = document.createElement("div")
        this.#view.classList.add("view")
        this.controller()
    }

    addPetala(){
        let petala = new Petala()
        let qntPetalas = this.#petalas.length
        this.#petalas.push(petala)
        this.#view.append(petala.add(qntPetalas))
    }

    controller(){
        let add_button = document.createElement("i")
        add_button.setAttribute("title","Adicionar Pétala")
        add_button.setAttribute("id","mandala_add_petela")
        add_button.classList.add("fas","fa-plus")
        add_button.addEventListener("click",this.add_Petela)

        let remove_button = document.createElement("i")
        remove_button.setAttribute("title","Remover Pétala")
        remove_button.classList.add("fas","fa-minus")
        
        let controller = document.createElement("div")
        controller.classList.add("controller")

        controller.append(add_button,remove_button)
        this.#mandalaElem.append(controller)

        this.#mandalaElem.append(this.#view)
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

class Petala{
    #petalaElem
    #wasInserted = false
    constructor(){
        this.#petalaElem = document.createElement("div")
        this.#petalaElem.classList.add("petala")
    }

    add(qnt){
        if(this.#wasInserted) return
        this.#wasInserted = true
        this.#petalaElem.style.setProperty('--rotate',`${qnt * 10}deg`)
        this.#petalaElem.style.setProperty('--scale',`${Math.random()}`)
        return this.#petalaElem
    }
}
