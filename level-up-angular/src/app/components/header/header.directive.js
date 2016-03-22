(function(){
    angular
        .module('levelUpAngular')
        .directive('appHeader', Directive);
    function Directive(){
        return{
            restrict:'E',
            templateUrl:'app/components/header/header.view.html',
            controller: TestController
        }
    }
    function TestController($scope){
        console.log('hello!');
    }
})();