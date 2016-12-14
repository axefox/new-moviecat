/**
 * Created by Administrator on 2016/12/14.
 */
(function(angular){
    angular.module("moviecat.jsonp",[])
        .service("itcast",["$window",function($window){
            var doc=$window.document;
            this.JSONP=function(url,params,callback){
                url+="?";
                for(var k in params){
                    url+=k+"="+params[k]+"&";
                }
                var fnName="itcast_jsonp_"+Date.now()
                url+="callback="+fnName;
                $window[fnName]=function(data){
                    callback(data)
                    doc.body.removeChild(script)
                    delete $window[fnName]
                }
                var script=doc.createElement("script")
                script.src=url;
                doc.body.appendChild(script);
            }
        }])
})(angular)