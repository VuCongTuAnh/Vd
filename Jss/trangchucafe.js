
const listImages = document.querySelector('.list-images')
const imgs = document.getElementsByTagName('img')
current = 0

setInterval(() => {
    current ++
    let width = imgs[0].offsetWidth
    listImages.style.transfrom = `translatesX(${width * -1}px)`
}, 4000)