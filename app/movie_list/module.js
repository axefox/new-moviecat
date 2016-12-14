(function(angular){
    angular.module("moviecat.movie_list",["ngRoute"])
        .config(["$routeProvider",function($routeProvider){
            $routeProvider.when("/:type/:page?",{
                templateUrl:"movie_list/view.html",
                controller:"movie_listController"
            })
        }])
        .controller("movie_listController",["$scope","$routeParams","$route","itcast",
            function($scope,$routeParams,$route,itcast){
                var count=5;
                $scope.pagenow=$routeParams.page||1
                var start=($scope.pagenow-1)*5
                itcast.JSONP("https://api.douban.com/v2/movie/"+$routeParams.type,{
                    count:count,
                    start:start
                },function(data){
                    console.log(data)
                    $scope.data=data
                    $scope.total=data.total
                    $scope.totalpages=Math.ceil($scope.total/count)
                    $scope.$apply()
                })
                $scope.goPage=function(page){
                    console.log(page)
                    if(page==0|| page>$scope.totalpages){
                        return
                    }
                    $route.updateParams({page:page});
                }
        }])
})(angular)