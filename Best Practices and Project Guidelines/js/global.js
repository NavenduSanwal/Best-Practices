var MYAPP = MYAPP || {}; 
MYAPP.menu = document.getElementsByTagName('nav');


/*
 * Keep Table of Contents position fixed on scroll
 */
window.addEventListener('scroll', function() {
	if (window.innerWidth > 768 && (window.scrollY > 150 || window.pageYOffset > 150)) {
		MYAPP.menu[0].classList.add('posFixed');
	} else {
		MYAPP.menu[0].classList.remove('posFixed');
	}
});


/*
 * Fucntion to identify support for HTML Templates
 */
var supportsTemplate = function() {
	return 'content' in document.createElement('template');
};
/*
 * Function to display message for non-support of templates
 */
var doesNotSupportTemplate = function(holder) {
	var errNode = document.createElement('li'),
		errorMsg = "Abandon All Hope! Looks like the author has committed the cardinal sin of not providing fallback for templates!!! Open this page in a latest browser and  do PRAY for his soul.";
	errNode.textContent = errorMsg,
	errNode.className = 'sin';
	document.querySelector('nav ul').appendChild(errNode.cloneNode(true));
	for (i = 0, l = holder.length; i < l; i++) {
		holder[i].insertBefore(errNode.cloneNode(true), holder[i].firstChild);
	}
};

/*
 * Template for code examples
 */
/*var renderCodeTemplate = function () {
	var holder = document.querySelectorAll('.holder');
	if (!supportsTemplate()) {
		doesNotSupportTemplate(holder);
	} else {
		var template = document.getElementById('code-example'),
			//holder = document.querySelectorAll('.holder'),
			clone, badCodeSrc, goodCodeSrc, badTitle, goodTitle,
			i = 0,
			l = holder.length,
			tabSpace = '	';

		for (; i < l; i++) {
			clone = template.content.cloneNode(true);

			badCodeSrc = holder[i].querySelector('code.bad');
			goodCodeSrc = holder[i].querySelector('code.good');

			clone.querySelector('.bad .title').innerHTML = badCodeSrc.title || 'Bad';
			clone.querySelector('.good .title').innerHTML = goodCodeSrc.title || 'Good';
			clone.querySelector('.bad code').innerHTML = badCodeSrc.innerHTML;
			clone.querySelector('.good code').innerHTML = goodCodeSrc.innerHTML;

			holder[i].innerHTML = '';
			holder[i].appendChild(clone);
		}
	}
}();*/

/*
 * Registering a custom element for code-block
 */

var codeProto = Object.create(HTMLElement.prototype);

/* Adding Elements methods */
codeProto.foo = function() {
	alert('foo called()');
};
codeProto.createdCallback = function() {
	var shadow = this.createShadowRoot(),
		template = document.getElementById('code-example'),
		clone = document.importNode(template.content, true),
		badCodeSrc = this.querySelector('code.bad'),
		goodCodeSrc = this.querySelector('code.good');

	badCodeSrc && (clone.querySelector('.bad .title').innerHTML = badCodeSrc.title || 'Bad');
	goodCodeSrc && (clone.querySelector('.good .title').innerHTML = goodCodeSrc.title || 'Good');

	shadow.appendChild(clone);
	//this.innerHTML = '';
	//
	// line numbers
	// syntax highlighter
	// no support for template
	// remove whitespace
	// dots
	

	this.addEventListener('dblclick', function() {
		console.log('thanks');
		var dots = this.querySelectorAll('.dot'),
			len = dots.length || 0,
			i = 0;

		for (; i < len; i++) {
			dots[i].classList.toggle('invisible');
		}
 	});
};

var codeSnippet = document.registerElement('code-block', {
	prototype: codeProto
});