import Mandalas from './mandalas.js'
import TypeEffect from './typeEffect.js'
import Form from './form.js'
const timeout = ms => new Promise(resolve => setTimeout(resolve, ms))
//const mandala = new Mandalas('mandalas')
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
const presentation = new TypeEffect('presentation', presentationList)
const inputs = [
    { name: 'email', label: 'Email', type: 'email', placeholder: 'Qual seu email?', validation: { type: 'required' } },
    { name: 'senha', label: 'Senha', type: 'password', placeholder: 'Qual sua senha?', validation: { type: 'required' } },
]
const sandboxForm = new Form({ name: 'sandbox', action: 'google.com.br', parent: '#sandboxForm', inputs: inputs });
window.teste = sandboxForm


// const btn_add_petala = document.getElementById("mandala_add_petela")
// const setPetalas = async () => {
//     for (let i = 0; i < 30; i++) {
//         await timeout(300)
//         btn_add_petala.click()
//     }
// }
// setPetalas()





