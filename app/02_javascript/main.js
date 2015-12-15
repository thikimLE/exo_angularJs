(function() {
	/* jshint -W003, -W038 */
	'use strict';

	console.log('Hello World!');

	var Animal = function() {
		this.eat = function() {
			console.log('miam miam slurp slurp...');
		};
	};

	Animal.prototype.sleep = function() {
		console.log('rzzzzzzzzz...');
	};

	var Cat = function() {
		this.speak = function() {
			console.log('miaou');
		};
	};
	Cat.prototype = new Animal();

	var garfield = new Cat();
	garfield.speak();
	garfield.sleep();
	garfield.eat();

	function myTest() {
		x = 25;
		console.log('x=' + x);

		if (true) {
			var x;
			console.log('x=' + x);
			x = 32;
			console.log('x=' + x);
		}
		console.log('x=' + x);
		x += 1;
		console.log('x=' + x);
	}

	myTest();
	
	i = 5;

	for (var i = 0; i < 3; i++) {
		console.log(i);
	}

	function myTest2(a, b, c) {
		console.log('start');
		console.log(a, b, c);
		console.log(arguments);
		console.log(arguments[3]);
		console.log(typeof arguments);
		Array.prototype.forEach.call(arguments, function(n, i) { console.log(n, i); });
	}

	myTest2(1);
	myTest2(1, 3, 12);
	myTest2(1, 3, 12, 14);
	var x = [1, 12, 3];
	console.log(x);
	x.forEach(function(n, i) { console.log(n, i); });

	/* jshint +W003, +W038 */

})();



