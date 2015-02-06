/**
 * Created by lemke164 on 2/6/15.
 */
'use strict';

//=== Testing mainCtrl =============================================
describe('Testing controller: gpaCtrl', function() {

    // load the controller's module
    beforeEach(module('appModule'));

    var gpaCtrl, scope;

    // Initialize the controller and mock scope.
    beforeEach(inject(function ($controller, $rootScope) {
        scope = $rootScope.$new();
        gpaCtrl = $controller('gpaCtrl', {
            $scope: scope
        });
    }));

    it('should return a number', function () {
        expect(scope.gradeNumber("A")).toEqual(4);
    })

    it('should return correct GPA', function () {
        scope.data1 = [
        {grade: "A", credits: 4}
    ]
        expect(scope.data1.totalGPA()).toEqual(4);
    })


})