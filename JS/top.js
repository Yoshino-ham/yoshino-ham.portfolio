// トップへ戻るボタン

$(function(){
    const topBtn=$(".page-top")
    topBtn.on("click",function(){
        console.log("ボタンが押されました")
        $("body,html").animate({scrollTop:0})
    });

    $(window).scroll(function(){
        if($(this).scrollTop()>100){
            topBtn.fadeIn(500); 
        }else{ 
            topBtn.fadeOut(500)
        }
    });
});
