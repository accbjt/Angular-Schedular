(function(){
	"use strict";
	
	angular
		.module("schedulerApp")
		.controller("JobsListController", ['$scope','$http','$localStorage', JobsListController]);

	function JobsListController($scope, $http, $localStorage){
		var vm = this;

		vm.$storage = $localStorage;

		// setup inCart local storage if it doesn't exist
		if(!vm.$storage.jobs){
			vm.$storage.jobs = {};
		}

		vm.jobs = vm.$storage.jobs;

		vm.addJob = function(){
			debugger
		}
	};

}());