let menuBurger = document.querySelector('.menuBurger'),
basculant =  document.querySelector('.basculant')

basculant.addEventListener('click', function (event) {
menuBurger.classList.toggle('active')
})