
'use strict';

angular.module('appModule')
    .controller('gpaCtrl', function($scope){
      console.log("gpaCalc.js loaded!");

        $scope.data1 = [];

        $scope.getGPA = function(){
            $http.get('api/pets').success(function(pets) {
                $scope.data1 = pets;
            });
        };

        $scope.getGPA();

        $scope.addGradeData = function(){
            if($scope.gradeField.length >= 1 && $scope.creditField > 0 && $scope.creditField) {
                $http.post('api/pets', {grade: $scope.gradeField, credits: $scope.creditField}).success(function(){
                    $scope.getGPA();
                });
                $scope.gradeField = "";
                $scope.creditField = 0;
            }
        };

        $scope.removeGradeData = function(index){
            $http.delete('/api/pets/' + $scope.data1[index]._id).success(function(){
                $scope.getGPA();
            });
        };

        $scope.itemsInList = function(){
            return $scope.data1.length;
        };

        $scope.gradeNumber = function(grade){
            if(grade == "A" || grade == 'a'){
                return 4;
            }
            else if(grade == "B" || grade == 'b'){
                return 3;
            }
            else if(grade == "C" || grade == 'c'){
                return 2;
            }
            else if(grade == "D" || grade == 'd'){
                return 1;
            }
            else if (grade == "F" || grade == 'f'){
                return 0;
            }
        };

        $scope.totalGPA = function(){
            var GPA = 0;
            var numerator = 0;
            var denominator = 0;
            for (var i=0; i < $scope.data.length; i++){
                var tempGrade = $scope.gradeNumber($scope.data[i].text);
                numerator = numerator + (tempGrade * $scope.data[i].number);
                denominator = (denominator + parseInt($scope.data[i].number));
            }
            GPA = (numerator / denominator);

            if($scope.data.length == 0){
                return "  No Data Added";
            }
            else{
                return GPA;
            }
        }




    });