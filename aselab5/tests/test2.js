describe ('myController',function(){
	
	beforeEach(module('stockWatch.controllers'));
	var $controller;
	beforeEach(inject(function(_$controller_){
		$controller=_$controller_;
	}));
	describe('companyname',function(){
		it('Tests companyname function of myController', function(){
			var $scope={};
			var controller=$controller('myController',{$scope:$scope});
			var company='IBM';
			
			expect($scope.companyname(company)).toEqual('IBM');
		});
	});
});