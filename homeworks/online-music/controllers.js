/**
 * Created by softech on 3/13/16.
 */

app
    .controller("MainController", MainController)
    .controller("HomeController", HomeController)
    .controller("DetailController", DetailController)
    .controller("AboutController", AboutController)
    .controller("JsonController", JsonController);


// Controller Functions
function MainController($scope) {
    $scope.$on('load', function () {
        $scope.loading = true;
    });

    $scope.$on('unload', function () {
        $scope.loading = false;
    });

    $scope.play = function(song) {
        $scope.selectedSong = song;

        var player = $("#music-player")[0];
        player.src = song.mp3Url;

        player.play();

    };
}

function HomeController($http, $scope) {
    this.subTitle = "This is home";

    $http.get("json/songs.json").then(function (response) {
        $scope.songs = response.data;
    });

}

function DetailController($scope, $stateParams, $http) {
    this.subTitle = "This is detail";
    var id = $stateParams.id;
    console.log(id);

    $http.get("json/songs.json").then(function (response) {
        var data = response.data;

        data.forEach(function (item, index) {
            if (item.id == id) {
                $scope.selectedSong = item;
                // stop the loop
                return false;
            }
        });
    });

}

function AboutController() {
    this.subTitle = "This is about"
    console.log(this.subTitle);
}

function JsonController($http, $scope) {
    $scope.$emit("load");
    $http
        .get("https://ames.edu.vn/OnlineEducation/api/OnlineEducationApi/GetReadingBooks?level=A")
        .then(function (response) {
            $scope.books = response.data;
            $scope.$emit("unload");
        });
}