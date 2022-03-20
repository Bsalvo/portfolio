window.Images = {
    profile: [
        'sem_corte.jpg',
        'com_corte.jpg',
    ]
}
const setImageProfile = () => {
    let size = Images.profile.length
    let rand = Math.floor(Math.random() * size)
    let profileImage = document.getElementById('profile-image')
    profileImage.src = `imgs/profile/${Images.profile[rand]}`
    profileImage.style.opacity = 1
}