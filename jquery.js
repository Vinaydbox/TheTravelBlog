$.get("url",function(status, data){
    console.log(data);
});

$.post("url",data,function(xhr,status,responseText){
    console.log(responseText);
})