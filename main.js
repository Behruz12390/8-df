let a = document.querySelector('.a')
let b = document.querySelector('.q')
let c = document.querySelector('.c')
a.addEventListener('click', () => {
    b.innerHTML = ++b.innerHTML
})
c.addEventListener('click', () => {
    b.innerHTML = --b.innerHTML
})
