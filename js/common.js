$(document).ready(function(){
//start    
    $('header').load('menu.html header > div',header);
    $('footer').load('menu.html footer>div');
    $('aside').load('menu.html aside');   

    function header(){
            $('.menu-trigger').on('click',function(e){
                e.preventDefault();        
                $(this).toggleClass('active');
                $('.hover_menu').toggleClass('active');
                if ($('.hover_menu').hasClass('active')) {
                    $('.menu-trigger span').css('background', '#000');
                console.log('내부테스트');
                } else {
                    $('.menu-trigger span').css('background', '#fff');
                }
                $('body').toggleClass('active');   
            });

            

    }
    console.log('test 1');    

    //바닐라 스크롤Y / 제이커리는 scrollTop   
    function menuScroll(){
        var winHeight = $(window).height(),
            top = $(window).scrollTop(),
            headerHeight = $('.sub_common').height();

            if(top > winHeight/3){
                $('aside').show();
                $('header').addClass("active");
                // $('header').css("background","rgba(255,255,255,1)");
                if ($('header').hasClass('active')) {
                    $('.menu-trigger span').css('background', '#000');
                    console.log('헤더테스트')
                } 
                $('.main-menu > li').addClass('change');
                $('.head h1 i').css("background-position","-387px -0px")
                $('a.menu-trigger span').css('background','#000')

                // $('.head nav>ul li ul').addClass('on');
               
            }else{
                $('aside').hide();
                // $('header').css("background","transparent");
                $('header').removeClass("active");
                $('.main-menu > li').removeClass('change');
                $('.head h1 i').css("background-position","-190px -0px")
                $('.head nav>ul li ul').removeClass('on');
                $('a.menu-trigger span').css('background','#fff')

               
            }
    }
    $(window).on('scroll',menuScroll);        
    //스크롤

    // $(document).on("mouseenter", ".main-menu > li", function () {
    //     const $li = $(this);
    //     const $submenu = $li.children(".sub-menu");

    //     if ($submenu.length) {
    //         // $li.addClass('open');
    //         $li
    //     }
    // });

    // $(document).on("mouseleave", ".main-menu > li", function () {
    //     $(this).removeClass("open");
    // });
$(document).on("mouseenter", ".main-menu > li", function () {
    const $submenu = $(this).children(".sub-menu");
    if ($submenu.length) {
        $submenu.stop(true, true)
            .css({ opacity: 0, display: "block" })
            .animate({ opacity: 1 }, 150);
    }
});

$(document).on("mouseleave", ".main-menu > li", function () {
    const $submenu = $(this).children(".sub-menu");
    if ($submenu.length) {
        $submenu.stop(true, true)
            .animate({ opacity: 0 }, 150, function () {
                $submenu.css("display", "none");
            });
    }
});

    
//end    
})