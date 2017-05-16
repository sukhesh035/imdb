var app = angular.module("iMDB",['ui.router']);

app.controller("movieConteroller",function($scope, $http){

    $scope.searchMovie = function(){
        $http.post("http://www.omdbapi.com/?t="+$scope.movieName).then(function(res){
            $scope.currentMovie = res.data;
            console.log($scope.currentMovie);
        });
    };




});
app.config(function($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise('/showMovies');
    $stateProvider.state('showMovies',{
        url:'/showMovies',
        templateUrl:"templates/moviesView.html"
    });
});