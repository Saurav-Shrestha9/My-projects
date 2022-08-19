const hamburgerMenu = document.getElementById('menu');
const navigation = document.getElementById('navigation');
const exit = document.getElementById('exit');

hamburgerMenu.addEventListener('click', () =>{
    navigation.style.transform = "translateX(0%)";
    navigation.style.transition = "transform 0.5s ease-in-out";
    // navigation.classList.add("show-nav");
})

exit.addEventListener('click', () =>{
    // navigation.style.display = "none";
    navigation.style.transform = "translateX(100%)";
})