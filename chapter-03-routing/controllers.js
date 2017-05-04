/**
 * Created by softech on 3/13/16.
 */

app
    .controller("MainController", MainController)
    .controller("HomeController", HomeController)
    .controller("AboutController", AboutController)
    .controller("JsonController", JsonController);


// Controller Functions
function MainController($scope) {
    $scope.$on('load', function () {
        $scope.loading = true;
    });

    $scope.$on('unload', function () {
        $scope.loading = false;
    })
}

function HomeController() {
    this.subTitle = "This is home";
    console.log( this.subTitle);
}

function AboutController() {
    this.subTitle = "This is about"
    console.log( this.subTitle);
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