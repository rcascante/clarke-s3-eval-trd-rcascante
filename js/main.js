var page = document.querySelector('.lateral-menu');
var openMenu = page.querySelector('.open-button');
var closeButton = page.querySelector('.close-button');

// Functions
function openNavMenu() {
	page.classList.add('open-nav-menu');
};

function closeNavMenu() {
	page.classList.remove('open-nav-menu');
};


// ADD EVENT LISTENER
openMenu.addEventListener('click', openNavMenu);
closeButton.addEventListener('click', closeNavMenu);
