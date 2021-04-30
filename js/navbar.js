const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('nav');

hamburger.addEventListener('click', () => {
	nav.classList.toggle('show');
	hamburger.classList.toggle('white');
})