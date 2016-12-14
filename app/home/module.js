/**
 * Created by Administrator on 2016/12/14.
 */
(function(angular){
    angular.module("moviecat.home",["ngRoute"])
        .config(["$routeProvider",function($routeProvider){
            $routeProvider.when("/home_page",{
                templateUrl:"home/view.html"
            })
        }])
})(angular)