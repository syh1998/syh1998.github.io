var swiper = new Swiper('.swiper-container', {
    direction: 'vertical',
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },
    navigation: {
        nextEl: '.swiper-button-next'
    },
    on:{
        init: function(){
            swiperAnimateCache(this); //隐藏动画元素
            swiperAnimate(this); //初始化完成开始动画
        },
        slideChangeTransitionEnd: function(){
            swiperAnimate(this); //每个slide切换结束时也运行当前slide动画
        }
    }
});
var mp3=document.querySelector("#mp3");
var mp3Btn=document.querySelector("#mp3Btn");
mp3Btn.onclick = function () {
    if (mp3.paused) {
        mp3Btn.style.animationPlayState = 'running';
        mp3.play();
    } else {
        mp3Btn.style.animationPlayState = 'paused';
        mp3.pause();
    }
};

function emailCheck () {
    var emailStr=document.all.form1.email.value;
    var emailPat=/^(.+)@(.+)$/;
    var matchArray=emailStr.match(emailPat);
    if (matchArray==null) {
        alert("电子邮件地址必须包括 ( @ 和 . )");
        return false;
    }
    return true;
}


function checkPhone(){
    var phone = document.getElementById('uid').value;
    if(!(/^1[34578]\d{9}$/.test(phone))){
        return document.getElementById('uidt').innerHTML = '请输入正确的手机号';
        return false;
    }    else{return document.getElementById('uidt').innerHTML = 'ok';}
}