
var my_name = prompt('請問您的名字是?');

var password = 123456;
var input;
var count=0;
var limit=3;
var out_limit=false;
if(my_name == "陳羽暄" ){
    out_limit=false;
}
else{
while (password!= input && !out_limit){
    count++;
    if(count<=limit){
        input=prompt("輸入密碼");
        //alert("請再輸入一次");
    }
    else{
        out_limit=true;
    }
}}
if(out_limit){
    alert("密碼超出輸入次數");
    location.href= password + ".html";

}
else{
   alert("歡迎"+my_name +"到此網頁 ，願你心想事成!" ); 

}

