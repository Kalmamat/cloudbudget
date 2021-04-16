document.querySelector('.header__btn').addEventListener('click' ,() => {
    document.querySelector('.header__btn').classList.toggle('active')
    document.querySelector('.navbar').classList.toggle('active')
})
// header_menu_item это класс который в ссылках меню.
// Нужен для закрытия при клике на них
document.querySelectorAll('.header__navbar-links').forEach( (oneLink) => {
    // oneLink это имя одной ссылки меню. Придумываем сами название
    oneLink.addEventListener('click', () => {
        document.querySelector('.header__btn').classList.remove('active')
        document.querySelector('.navbar').classList.remove('active')
    })
})