'use strict';

/**
 * @ngdoc function
 * @name manocoolApp.controller:RevisionrapidaCtrl
 * @description
 * # RevisionrapidaCtrl
 * Controller of the manocoolApp
 */
angular.module('manocoolApp')
	.directive('mdList', function(){
		return {

		};
	})
	.controller('RevisionrapidaCtrl', function ($scope, $timeout) {
		$scope.format = 'dd-MMMM-yyyy';
		$scope.dt = new Date();
		$scope.calendars = [false, false];
		$scope.open = function($event, calendar) {
			$event.preventDefault();
			$event.stopPropagation();
			$scope.calendars[calendar] = true;
		};

		$scope.selected = undefined;
		$scope.states = [
			{ title: 'Aeroméxico Cargo Mtto [amcargomtto]', id:'project'},
			{ title: 'aeromexico.com [AM]', id:'aeromexico'},
			{ title: 'Alder Koten Rediseño de Sitio [AK_WEB]', id:'project'},
			{ title: 'Anastasia II [anastasia_dos]', id:'project'},
			{ title: 'aristeguinoticias.com [aristeguiweb]', id:'project'},
			{ title: 'Aristos Mantenimiento [aristos_mtto]', id:'project'},
			{ title: 'Aristos sitio web [aristos]', id:'project'},
			{ title: 'BDD Fundacion Pro Niños IAP [bdd_fundacion]', id:'project'},
			{ title: 'Bissu [bissu]', id:'project'},
			{ title: 'Bixva Mercado de Servicios [bixva]', id:'project'},
			{ title: 'CalCtose Web Site [calctose]', id:'project'}
		];
		$scope.selectedItem = function($item){
			console.log($item.id);
		};
		$scope.myObject = {
			hola: 'mundo'
		};
		$scope.list = [];
		$scope.isShow = true;
		$scope.addItem = function () {
			$scope.animation = 'scale-fade';
			$scope.list = [];
			var tout = function () {
					$scope.list.push({ title : 'item' });
				};
			for (var i = 0; i < 6; i++) {
				$timeout(tout , 40 * i);
			}
		};
		$scope.removeItem = function (item) {
			var index = $scope.list.indexOf(item);
			$scope.list.remove(index);
		};
	});
