'use strict';

angular.module("appModule")
    .controller('mainCtrl', function($scope, $http){
        console.log("main controller loaded!");

        $scope.textField = "";
        $scope.weightField = -1;

        // Normally, data like this would be stored in a database, and this controller would issue an http:get request for it.
        $scope.data = [];

        $scope.getPets = function(){
            $http.get('api/pets').success(function(pets) {
                $scope.data = pets;
            });
        };

        $scope.getPets();

        $scope.addData = function(){
            if($scope.textField.length >= 1 && $scope.weightField >= 0) {
                $http.post('api/pets', {text: $scope.textField, number: $scope.weightField}).success(function(){
                    $scope.getPets();
                });
                $scope.textField = "";
                $scope.weightField = -1;
            }
        };

        $scope.removeData = function(index){
            $http.delete('/api/pets/' + $scope.data[index]._id).success(function(){
                $scope.getPets();
            });
        };

        $scope.cat = function(str1, str2){
            return str1 + str2;
        };

        $scope.itemsInGradeList = function(){
            return $scope.data.length;
        };

        $scope.heaviestPet = function(){
            if($scope.data.length == 0){
                return "No Data";
            }else{
                var largestPet = $scope.data[0].number;
                var petName = $scope.data[0].text;
                angular.forEach($scope.data, function(item){
                    if(item.number > largestPet){
                        largestPet = item.number;
                        petName = item.text;
                    }
                });
                return petName+" "+largestPet;
            }
        }

    });