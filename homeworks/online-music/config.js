/**
 * Created by Ngo Thanh Tung on 3/13/2016.
 */

/*
 1. ngRoute is a module developed by the Angular.js team which was earlier part of the Angular core.
 2. ui-router is a framework which was made outside the Angular.js project to improve and enhance routing capabalities.
 Description:
 1. ui-router allows for nested views and multiple named views. This is very useful with larger app where you may have pages that inherit from other sections.
 2. ui-router allows for you to have strong-type linking between states based on state names. Change the url in one place will update every link to that state when you build your links with ui-sref. Very useful for larger projects where URLs might change.
 3. There is also the concept of the decorator which could be used to allow your routes to be dynamically created based on the URL that is trying to be accessed. This could mean that you will not need to specify all of your routes before hand.
 4. states allow you to map and access different information about different states and you can easily pass information between states via $stateParams.
 5. You can easily determine if you are in a state or parent of a state to adjust UI element (highlighting the navigation of the current state) within your templates via $state provided by ui-router which you can expose via setting it in $rootScope on run.

 P/s: In essence, ui-router is ngRouter with more features, under the sheets it is quite different. These additional features are very useful for larger applications.
*/
var app = angular.module('aptech', [
    'ui.router',
]);

function config($stateProvider, $urlRouterProvider, $locationProvider) {
    $urlRouterProvider.otherwise("/home");
    $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: 'views/home.html',
            controller: 'HomeController as home',
            data: { pageTitle: 'HOME' }
        })
        .state('detail', {
            url: '/detail/:id',
            templateUrl: 'views/detail.html',
            controller: 'DetailController as detail',
            data: { pageTitle: 'ABOUT' }
        })
        .state('about', {
            url: '/about?name',
            templateUrl: 'views/about.html',
            controller: 'AboutController as about',
            data: { pageTitle: 'ABOUT' }
        })
        .state('json', {
            url: '/json',
            templateUrl: 'views/json.html',
            controller: 'JsonController as json',
            data: { pageTitle: 'JSON' }
        });

    //$locationProvider.html5Mode(true);
}

app.config(config);