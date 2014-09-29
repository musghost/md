'use strict';

/**
 * @ngdoc function
 * @name manocoolApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the manocoolApp
 */
	angular.module('manocoolApp')
	.controller('MainCtrl', function ($scope, $location, $timeout) {
		$scope.selected = undefined;
		$scope.states = [
			{ title: 'Plan de trabajo', id:'plan-trabajo' },
			{ title: 'Explorar nuevo', id: 'explorar-nuevo' },
			{ title: 'Panel de externos', id: 'panel-externos' },
			{ title: 'Vista rápida de tareas', id: 'vista-rapida' },
			{ title: 'Revisión rápida', id: 'revision-rapida' },
			{ title: 'Línea del tiempo', id: 'linea-tiempo' },
			{ title: 'Consulta de tiempos', id: 'consulta-tiempos' },
			{ title: 'Consulta de gastos', id: 'consulta-gastos' },
			{ title: 'Balance', id: 'balance' },
			{ title: 'SCRUM nuevo', id: 'scrum' },
			{ title: 'Disponibilidad', id: 'disponible' },
			{ title: 'Fechas comprometidas', id: 'fechas-comprimetidas' },
			{ title: 'Archivos', id: 'archivos' },
			{ title: 'Minutas', id: 'minutas'}
		];
		$scope.selectedItem = function($item){
			$location.path('/report/' + $item.id );
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
	});