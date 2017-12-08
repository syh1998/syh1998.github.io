var swiper = new Swiper('.swiper-container', {
    //设置滑动方向
    direction: 'vertical',
    // 向右的按钮
    navigation: {
        nextEl: '.swiper-button-next',
    },
    //设置分页小按钮
    pagination: {
        el: '.swiper-pagination',
        //设置小按钮是否可以点击
        clickable: true,
    },
    //Swiper4.x animate动画插件引入
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