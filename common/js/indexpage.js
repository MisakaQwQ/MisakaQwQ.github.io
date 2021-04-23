var app = angular.module('pageApp', []);
app.controller('pageCtrl', function($scope,$http) {
    $scope.details = null;
    $scope.useroff = false;
	$scope.myalert = false;
	$scope.VideoChend = 0;
    $scope.title= "基于岭南医学特色的中医四诊虚拟仿真实验教学项目";
    $scope.lastName= "Doe";
	$scope.topup = false;
    $scope.tagBtns = [
		{"name":"项目描述","sign":"describe"},
        {"name":"血细胞分析","sign":"bloodcell",
			"child":[{"name":"结构仿真","sign":"structure"},
				     {"name":"管路仿真","sign":"pipe"},
					 {"name":"电路仿真","sign":"circuit"},
					 {"name":"光路仿真","sign":"light"}]},
        {"name":"流式细胞分析","sign":"flowcyto"},
		{"name":"电解质分析","sign":"electrolytic"}
    ];
	$scope.teshu = [
	    {"name":"项目团队","sign":"team"},
	    {"name":"项目描述","sign":"describe"},
	    {"name":"网络要求","sign":"network"},
	    {"name":"技术架构","sign":"technology"},
	    {"name":"管理平台","sign":"manage"},
	    {"name":"服务计划","sign":"serve"},
	    {"name":"进入实验说明","sign":"enter"}
	];
	this.$onInit = function(){
		if($scope.token!=null){
			var data = {
				"token":$scope.token, 
				"issuerId":"100400"
			}
			$http.post('http://47.94.128.81/ilab-x-test/users/authenticate-token', data, null).then(function(json){			    
					$scope.username = json.data.dis;
					$scope.useroff = true;
			}, function(){
				     $("#myAlert").css("display","block")
					function refreshCount() {
					    $("#myAlert").alert('close');
					}
					var t1=window.setTimeout(refreshCount, 1000 * 5);
			});
		}else{
			$scope.useroff = false;    
			
		}
	}
			
	function getQueryString(name) {
		var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
		var r = encodeURI(window.location.search).substr(1).match(reg);
		if (r != null) return unescape(r[2]); return null;
	};
	$scope.token = getQueryString("token");
	
	function UrlDel(url,parameter){
		var urlparts = url.split('?');
		if(urlparts.length >= 2) {
			var prefix = encodeURIComponent(parameter) + '=';
			var pars = urlparts[1].split(/[&;]/g);
			for(var i = pars.length; i-- > 0;) {
				if(pars[i].lastIndexOf(prefix, 0) !== -1) {
					pars.splice(i, 1);
				}
			}

			return urlparts[0] + (pars.length > 0 ? '?' + pars.join('&') : '');
		}
		return url;
	};
	$scope.gotest = function(str){
		if($scope.token!=null){
			window.open(str+"?token="+$scope.token);                
		}else{
			window.open(str);
		}
	}	
	$scope.exit = function (){
		var local =  UrlDel(window.location.href,"token");
		history.replaceState(null,null,local);
		history.go(0)
	}

    $scope.btnsVariable = 0;
	$scope.optsVariable = -1;
    $scope.initialize = function(url){
        $http({
            method: 'GET',
            url: './data/'+url+".json"
        }).then(function successCallback(response) {
               $scope.details = response.data.data;
            }, function errorCallback(response) {

        });
    };  
	$scope.initialize("describe");
    $scope.tagBtn = function(index,sign){
    	  $scope.optsVariable = -1;
          $scope.btnsVariable = index;
          $scope.initialize(sign);
		  var parent = $("iframe").parent(".index-page-content-introduce").find(".morebox").find(".more-btn");
		  $("iframe").attr("height",'290px');
		  $("iframe").attr("scrolling","no");
		  $("iframe").attr('sign',false)
		if ($scope.details.length == 1) {
			$("iframe").attr("onload",'this.height=this.contentWindow.document.body.scrollHeight');
		}
		  parent.removeClass("more-btn-up");
    };
	$scope.optBtn = function(btnindex,optindex,sign){
		$scope.optsVariable = optindex;
		$scope.btnsVariable = btnindex;
		$scope.initialize(sign);
		var parent = $("iframe").parent(".index-page-content-introduce").find(".morebox").find(".more-btn");
		$("iframe").attr("height",'290px');
		$("iframe").attr("scrolling","no");
		$("iframe").attr('sign',false)
		if ($scope.details.length == 1) {
			$("iframe").attr("onload",'this.height=this.contentWindow.document.body.scrollHeight');
		}
		parent.removeClass("more-btn-up");
	};
	$scope.showiframe = function(id){
		var ifr = document.getElementById(id);
		var sign = ifr.getAttribute("sign");
		var parent = $("#"+id).parent(".index-page-content-introduce").find(".morebox").find(".more-btn");
		var bHeight = ifr.contentWindow.document.body.scrollHeight;
		var dHeight = ifr.contentWindow.document.documentElement.scrollHeight;
		if(sign=="false"){
			ifr.height = dHeight;
			ifr.scrolling = "no"
			ifr.setAttribute('sign',true);
			parent.addClass("more-btn-up");
		}else{
			ifr.height = '290px';
			ifr.scrolling = "no"
			ifr.setAttribute('sign',false);
			parent.removeClass("more-btn-up");
		}
	};
	$scope.VideoTab = function(num){
		$scope.VideoChend = num;
		var src = num==0 ? "common/video/show.mp4" : "common/video/guide.mp4";
		$("#video").attr("src",src);
		var video = document.getElementById("video");
		video.play();
	};
})
  .config(function ($qProvider) {
       $qProvider.errorOnUnhandledRejections(false);
    })
  .config(function($sceProvider) {
     $sceProvider.enabled(false);
  })