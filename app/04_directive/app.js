(function() {
	'use strict';

	// Create a new module
	// 		  angular.module(name, [requires], [configFn]);
	var app = angular.module('myApp', []); 

	//New directives are created by using the .directive function.
	app.directive('myFirstDirective', function() {
		return {
			restrict: 'EAC', // Permet de définir comment la déclaration de la directive doit se faire dans le code HTML
			//'E' pour element
			//'A' pour attribut
			//'C' pour classe.
			
			templateUrl: 'my_template.html', // Permet de remplacer le contenu d'un élément par un template
			//si définie à true, la directive supprimera le contenu original 
			//et le rendra disponible pour le réinsérer à l'intérieur du template 
			//en utilisant la directive ng-transclude
			transclude: true 
		};
	});
})();
