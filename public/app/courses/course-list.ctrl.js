angular.module('courses').controller('courseList',
    function($scope) {

        $scope.courses = myCourse.query();

    });
