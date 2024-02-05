let sign = document.querySelector('.sign');
let popup = document.querySelector('.popup');
let popup_form = document.querySelector('.popup_form');

sign.addEventListener('click', () => {
    popup.classList.add('active')
    popup_form.classList.add('active')
})

popup.addEventListener('click', () => {
    popup.classList.remove('active')
    popup_form.classList.remove('active')
})