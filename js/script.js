const signInContainer = document.querySelector(".container-signIn");
const signUpContainer = document.querySelector(".container-signUp");
const toggleContainer = document.querySelector(".toggle-container");
const togglePanalRight = document.querySelector(".toggle-panal-right");
const togglePanalLeft = document.querySelector(".toggle-panal-left");
//* Buttons 
const signUpBtnForTogglePanal = document.getElementById("togleSignUpBtn");
const signInBtnForTogglePanal = document.getElementById("toggleSignInBtn");

window.onload = function() {
    toggleContainer.style.animation = "none";
}

signUpBtnForTogglePanal.addEventListener('click', () => {
    signInContainer.classList.add("active");
    signUpContainer.classList.add("active");
    signUpContainer.style.cssText = "transform: translateX(121%);";
    toggleContainer.style.animation = "moveToggleContainer 1s linear forwards";
    toggleContainer.classList.add("active");
    togglePanalRight.classList.add("active");
    togglePanalLeft.classList.add("active");
});
signInBtnForTogglePanal.addEventListener('click', () => {
    signInContainer.classList.remove("active");
    signUpContainer.classList.remove("active");
    signUpContainer.style.cssText = "transform: translateX(0%);";
    toggleContainer.classList.remove("active");
    toggleContainer.style.animation = "moveBackToggleContainer 1s linear forwards";
    togglePanalRight.classList.remove("active");
    togglePanalLeft.classList.remove("active");
});