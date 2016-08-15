angular.module("app.directives.contactCard", [])
    .directive("contactCard", function () {
        return {
            restrict: "EA", //E = element, A = attribute, C = class, M = comment
            scope: {
                contact: "=",
                //myData: "=data",
                title: "="
            },
            replace: true,
            //template: "<h1>{{ contact.name }}</h1>",
            templateUrl: "templates/contactCard.html",
            controller: function ($scope, $interval) {

                console.log($scope.contact);

                $interval(function () {
                    console.log("interval");
                }, 1000);

            },
            link: function (scope, element, attrs) {
                console.log(attrs.id); // GET ID

                element.on("click", function (e) {
                    alert("CLICK");
                    //console.log(e);
                });
            }
        };
    });