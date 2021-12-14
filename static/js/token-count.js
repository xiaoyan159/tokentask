$(function() {
	  getToken();
  
    //任务列表
    function getToken(){
    		console.log(window.location)
        axios.post(url = 'http://localhost/first/getTokenCount', withCredentials = true, headers = {
            "Access-Control-Allow-Origin": "*"
        }).then(function(result){
            //console.log(result.data);
            count = result.data;
			console.log("count==",count);
            $("#tokenCountValue").text("token个数："+count);
        })
        .catch(error => console.log(error));    
        // $("#tokenCountValue").text("token个数：");
    }
    
});