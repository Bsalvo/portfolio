import Mandalas from './mandalas.js'
import TypeEffect from './typeEffect.js'
const timeout = ms => new Promise(resolve => setTimeout(resolve,ms))
const mandala = new Mandalas('mandalas')
setImageProfile()
Skills.Preset.forEach(Skills.setSkill)
const presentationList = [
    'Dev.',
    'Front S2',
    'Back S2',
    'Full Stack',
    'crud\'s e api\'s',
    'Entusiasta',
    'return name',
    'Bruno Salvo',
]
const presentation = new TypeEffect('presentation',presentationList)

const btn_add_petala = document.getElementById("mandala_add_petela")
const setPetalas = async () => {
    for (let i = 0; i < 30; i++) {
        await timeout(300)
        btn_add_petala.click()
    }
}
setPetalas()





