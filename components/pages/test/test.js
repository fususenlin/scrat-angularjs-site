'use strict';

require.load("http://cdn.bootcss.com/bootstrap/3.2.0/css/bootstrap.min.css", {
    type: "css"
});

function LetterCtrl($scope) {
    $scope.welcome = "欢迎";
    console.log("yes");
}


module.exports = ['$scope', LetterCtrl]