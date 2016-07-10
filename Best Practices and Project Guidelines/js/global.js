
/*
 * Keep Table of Contents position fixed on scroll
*/
window.addEventListener('scroll', function() {
	if (window.scrollY > 150 || window.pageYOffset > 150 ) {
		document.getElementsByTagName('nav')[0].style.position = 'fixed';
	} else {
		document.getElementsByTagName('nav')[0].style.position = '';
	}
});
