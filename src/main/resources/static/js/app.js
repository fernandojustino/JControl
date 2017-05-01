//Criação do modulo principal da aplicacao
var appCliente = angular.module("appCliente",[]);


//Criacao de Controles
appCliente.controller("indexController", function($scope, $http){

	$scope.clientes=[];
	$scope.cliente={};
	
	$scope.carregarClientes = function() {
		$http({method:'GET', url:'http://localhost:8080/clientes'})
		.then(function(response){
			$scope.clientes=response.data;
			console.log('Data response ' + response.data);
		}, function(response){
			console.log(response.data);
			console.log(response.status);
		});
	};
	
	$scope.salvarCliente = function() {
		$http({method:"POST", url:'http://localhost:8080/clientes', data:$scope.cliente})
		.then(function(response){
			$scope.clientes.push(response.data);
		}, function(response){
			console.log(response.data);
			console.log(response.status);
		});
	};
	
	$scope.excluirCliente = function(cliente) {
		console.log("Estou aqui"); 
		$http({method:"DELETE", url:'http://localhost:8080/clientes/'+cliente.id})
		.then(function(response){
			console.log("Estou aqui II");
			for (i=0; i < $scope.clientes ; i++){
				if($scope.clientes[i].id == cliente.id) {
					console.log("encontrei"); 
					$scope.clientes.splice(i, 1);     
					break;
				}
			}  
		}, function(response){
			console.log(response.data);
			console.log(response.status);
		});
	} ;
	  
	$scope.alterarCliente = function(cli) {
		$scope.cliente = cli; 
	}
	
	$scope.carregarClientes();
	
});
