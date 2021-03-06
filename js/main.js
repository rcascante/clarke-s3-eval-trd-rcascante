
/* ----------------
HAMBURGUER
---------------- */

// DEFINING VARIABLES
var page = document.querySelector('.lateral-menu');
var openMenu = page.querySelector('.open-button');
var closeButton = page.querySelector('.close-button');

// FUNCTIONS
function openNavMenu() {
	page.classList.add('open-nav-menu');
};

function closeNavMenu() {
	page.classList.remove('open-nav-menu');
};


// ADD EVENT LISTENER
openMenu.addEventListener('click', openNavMenu);
closeButton.addEventListener('click', closeNavMenu);


/* ----------------
JSON & AJAX
---------------- */
var html = '';
var totalReasons = '';
var containerReasons = document.querySelector('.grid-container');
var moreReasonsButton = document.querySelector('.more-button');
moreReasonsButton.addEventListener('click', getMoreReasons);

function getMoreReasons() {
	var request = new XMLHttpRequest();
	request.open('GET', 'https://three-random-reasons-izwfjpgbqm.now.sh/');
	request.addEventListener('load', loadReasons);

	function loadReasons() {
		var response = request.responseText;
		var responseJSON = JSON.parse(response);


		for (var i = 0; i < responseJSON.reasons.length; i += 1) {
			html += '<div class="row"><h3 class="third-title">' + responseJSON.reasons[i].title + '</h3><p>'+ responseJSON.reasons[i].description + '</p></div>';
			totalReasons = containerReasons.innerHTML + html;
		}
		 containerReasons.innerHTML = totalReasons;
	}
	request.send();
}
