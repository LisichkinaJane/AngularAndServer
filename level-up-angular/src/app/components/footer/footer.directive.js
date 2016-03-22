(function(){
    angular
        .module('levelUpAngular')
        .directive('appFooter', Directive);
    function Directive(){
        return{
            restrict:'E',
            templateUrl:'app/components/footer/footer.view.html',
            controller: TestController
        }
    }
    function TestController($scope){
        console.log('hello footer!');
    }
})();