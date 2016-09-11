/**
 * Created by 志鹏 on 2016/8/9.
 */
$(document).ready(function(){
    $("#Popup").hide();
    $("#confirmPsd").bind('input propertychange',function () {
        var userPsd=$("#userPsd").val();
        var confirmPsd=$("#confirmPsd").val();
         if(confirmPsd!=userPsd){
             $("#Popup").show();
         }else {
             $("#Popup").hide();
        }

    })
    $("#tologin").on("click",function () {
        window.open('login.html');
    })


})