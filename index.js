let btn = document.querySelector(".btn")
let button = document.querySelector('.zag')
const colors = ['#4CAF50', '#FF5733', '#33C1FF', '#FF33A8'];
let currentIndex = 0;

button.addEventListener('click', function() {
    location.reload();
});

btn.addEventListener('click', function(){
    btn.style.transform = 'scale(1.2)'; // Увеличиваем кнопку
    currentIndex = (currentIndex + 1) % colors.length;
    btn.style.backgroundColor = colors[currentIndex];

    setTimeout(() => {
        btn.style.transform = 'scale(1)'; // Возвращаем к исходному размеру
        }, 200);
})
