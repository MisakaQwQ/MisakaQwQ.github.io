var app = angular.module('pageApp', []);
app.controller('pageCtrl', function($scope,$http) {
    $scope.VideoTab = function(num){
        $scope.VideoChend = num;
        var src;
        if(num == 0)
        {   src = "principle.mp4"}
        else if(num == 1)
        {
            src = "k.mp4";
        }
        else if(num == 2)
        {
            src = "aspirate.mp4";
        }
        else if(num == 3)
        {
            src = "wash.mp4";
        }
        $("#video").attr("src",src);
        var video = document.getElementById("video");
        video.play();
    };
})