(function() {
	'use strict'; // The "use strict" directive is new in JavaScript 1.8.5 (ECMAScript version 5), une IIFE
	//The purpose of "use strict" is to indicate that the code should be executed in "strict mode".
	//With strict mode, you can not use undeclared variables.
	// for exemple :
	// "use strict";
	// x = 3.14; -> This will cause an error (x is not defined)
	
	console.log('Hello World!');

	for (var i = 0; i < 10; i++) {
		setTimeout(function() {	console.log('i=' + i); }, 1000);
	}

	for (var i = 0; i < 10; i++) {
		(function(j) {
			setTimeout(function() { console.log('i=' + j); }, 1000);
		})(i);
	}
	
})();


