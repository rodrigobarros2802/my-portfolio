//Mudando o Background
let banner = document.querySelector('.banner');
let dayNight = document.querySelector('.dayNight');

dayNight.onclick = function() {
    banner.classList.toggle('night');
}

//Mudando os nomes
let typingText = new Typed("#name", {
    strings : ["Rodrigo", "Coder", "Developer"],
    loop : true,
})