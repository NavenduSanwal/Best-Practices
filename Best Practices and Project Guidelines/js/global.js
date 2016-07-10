/*
 * Keep Table of Contents position fixed on scroll
 */
window.addEventListener('scroll', function() {
	if (window.scrollY > 150 || window.pageYOffset > 150) {
		document.getElementsByTagName('nav')[0].style.position = 'fixed';
	} else {
		document.getElementsByTagName('nav')[0].style.position = '';
	}
});

/*
 * Template for code examples
 */
var template = document.getElementById('code-example'),
	holder = document.querySelectorAll('.holder'),
	clone, badCodeSrc, goodCodeSrc, badTitle, goodTitle,
	i = 0,
	l = holder.length,
	tabSpace = '	';

for (; i < l; i++) {
	clone = template.content.cloneNode(true);

	badCodeSrc = holder[i].querySelector('code.bad');
	goodCodeSrc = holder[i].querySelector('code.good');

	clone.querySelector('.bad .title').innerHTML  = badCodeSrc.title || 'Bad';
	clone.querySelector('.good .title').innerHTML = goodCodeSrc.title || 'Good';
	clone.querySelector('.bad code').innerHTML    = badCodeSrc.innerHTML;
	clone.querySelector('.good code').innerHTML   = goodCodeSrc.innerHTML;

	holder[i].innerHTML = '';
	holder[i].appendChild(clone);
}