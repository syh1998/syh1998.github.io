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

function validate_email(field,alerttxt)
{
    with (field)
    {
        apos=value.indexOf("@");
        dotpos=value.lastIndexOf(".");
        if (apos<1||dotpos-apos<2)
        {alert(alerttxt);return false}
        else {return true}
    }
}

function validate_form(thisform)
{
    with (thisform)
    {
        if (validate_email(email,"Not a valid e-mail address!")==false)
        {email.focus();return false}
    }
}
