/**
 * Created by IlyaLitvinov on 18.03.16.
 */
(function () {
  'use strict';

  angular
    .module('levelUpAngular')
    .service('toDoModel', ToDoModel);

  function ToDoModel ($http, $q) {
    console.log('Service enabled!');
    var items = [];

    debugger;


    this.getAllItems = function () {
      return $http({
          method: 'GET',
          url: 'http://localhost:4001/fruites'
        }).then(function (response) {
          return response.data;
        }, function (reject) {
          console.log(reject);
        });
    };
      this.sendData = function(newData){
          return $http({
              method:'POST',
              url: 'http://localhost:4001/fruites',
              data:{fruite:newData}
          }).then(function(response){
             return response.data;
          },function(reject){
              console.log(regect);
          })
      };
      
      this.deleteItem = function(id){
         return $http({
             method:'DELETE',
             url:'http://localhost:4001/fruites/'+id,
         }).then(function(response){
              return response.data;
          },function(reject){
              console.log(regect);
          }) 
      };
  }


})();
