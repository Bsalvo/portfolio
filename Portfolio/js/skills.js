window.Skills = {
    Preset : [
        {label:'PHP', value:'100'},
        {label:'CakePHP', value:'100'},
        {label:'Javascript', value:'100'},
        {label:'Jquery', value:'100'},
        {label:'Bootstrap', value:'100'},
    ],
    setProgressSkillValue : (value, el) => {
        if(typeof el === 'undefined'){
            let progressElements = document.querySelectorAll('.progress-skill')
            progressElements.map(progress => {
                progress.style.width = `${value}%`
            })
        } else {
            el.style.width = `${value}%`
        }
    },
    setSkill : (skill,index) => {
        let div = document.createElement("div")
        div.style.opacity = 0
        div.style.transition = `.8s`
        let label = document.createElement("label")
        label.innerHTML = skill.label
        let progress = document.createElement('div')
        progress.classList.add("progress-skill")
        div.append(label,progress);
        let skillsElem = document.querySelector('.skills')
        skillsElem.append(div)
        let time = (typeof index === 'undefined') ? 100 : 100 * index
        setTimeout(function(){
            div.style.opacity = 1
            Skills.setProgressSkillValue(skill.value,progress)
        },time);
    }
}