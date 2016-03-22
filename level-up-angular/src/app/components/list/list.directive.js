(function(){
    angular
        .module('levelUpAngular')
        .directive('appList', Directive);
    function Directive(){
        return{
            restrict:'E',
            templateUrl:'app/components/list/list.view.html',
            controller: TestController
        }
    }
    function TestController($scope){
        console.log('hello my list!');
    }
})();