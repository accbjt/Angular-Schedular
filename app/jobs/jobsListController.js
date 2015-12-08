(function(){
	"use strict";
	
	angular
		.module("schedulerApp")
		.controller("JobsListController", ['$scope','$http','$localStorage', JobsListController]);

	function JobsListController($scope, $http, $localStorage){
		var vm = this;

		$http.get('Jobs.json').success(function(data) {
   		vm.jobs = data.jobs;
   		debugger
		});

		vm.$storage = $localStorage;

		// setup inCart local storage if it doesn't exist
		if(!vm.$storage.jobs){
			vm.$storage.jobs = {};
		}

	};

}());