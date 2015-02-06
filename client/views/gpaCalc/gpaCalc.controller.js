/**
 * Created by lemke164 on 2/6/15.
 */
'use strict';

angular.module('appModule')
    .controller('gpaCtrl', function($scope){

        'use strict';

        console.log("main.js loaded!");

        $scope.data = [];

        $scope.getGPA = function(){
            $http.get('api/pets').success(function(pets) {
                $scope.data = pets;
            });
        };

        $scope.getGPA();

        $scope.addData = function(){
            if($scope.gradeField.length >= 1 && $scope.creditField > 0 && $scope.creditField) {
                $http.post('api/pets', {text: $scope.gradeField, number: $scope.creditField}).success(function(){
                    $scope.getGPA();
                });
                $scope.gradeField = "";
                $scope.creditField = 0;
            }
        };

        $scope.removeData = function(index){
            $http.delete('/api/pets/' + $scope.data[index]._id).success(function(){
                $scope.getGPA();
            });
        };

        $scope.itemsInList = function(){
            return $scope.data.length;
        };





    });