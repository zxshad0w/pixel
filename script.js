let btn = document.querySelector(".btn")
let button = document.querySelector('.zag')


button.addEventListener('click', function() {
    location.reload();
});

btn.addEventListener('click', function(){
    btn.style.transform = 'scale(1.2)'; // Увеличиваем кнопку
    
    setTimeout(() => {
        btn.style.transform = 'scale(1)'; // Возвращаем к исходному размеру
        }, 200);
})
