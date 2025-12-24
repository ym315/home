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



    //바닐라 스크롤Y / 제이커리는 scrollTop   
    function menuScroll(){
        var winHeight = $(window).height(),
            top = $(window).scrollTop(),
            headerHeight = $('.sub_common').height();

            if(top > winHeight/4){
                $('aside').show();
                $('header').addClass("active");
                // $('header').css("background","rgba(255,255,255,1)");
                if ($('header').hasClass('active')) {
                    $('.menu-trigger span').css('background', '#000');
                    console.log('헤더테스트')
                } 
                $('.main-menu > li').addClass('change');
                $('#logo').attr('src', './img/logo_black.svg');
                // $('.head h1 i').addClass('active');                
                $('a.menu-trigger span').css('background','#000')

                // $('.head nav>ul li ul').addClass('on');
               
            }else{
                $('aside').hide();
                // $('header').css("background","transparent");
                $('header').removeClass("active");
                $('.main-menu > li').removeClass('change');
                $('#logo').attr('src', './img/logo_white.svg');
                // $('.head h1 i').removeClass('active');

                $('.head nav>ul li ul').removeClass('on');
                $('a.menu-trigger span').css('background','#fff')
               
            }

                //footer-drop down
                // $(function () {
                //     const $dropdown = $('.dropdown');
                //     const $toggle = $('.dropdown-toggle');

                //     $toggle.on('click', function (e) {
                //         e.stopPropagation();
                //         $dropdown.toggleClass('active');
                //     });

                //     $(document).on('click', function () {
                //         $dropdown.removeClass('active');
                //     });
                // });

                $(function () {
                    const $dropdown = $('.dropdown');
                    const $toggle = $('.dropdown-toggle');

                    // 버튼 클릭
                    $toggle.on('click', function (e) {
                        // console.log($(this).closest('.dropdown').length);
                        e.preventDefault();
                        e.stopPropagation();
                        e.stopImmediatePropagation();
                        const $current = $(this).closest('.dropdown');

                        //  드롭다운 닫기
                        $dropdown.not($current).removeClass('active');
                        // 현재 토글
                        $current.toggleClass('active');
                    });

                    // 바깥 클릭 시 닫기
                    $(document).on('click', function () {
                        $dropdown.removeClass('active');
                    });

                    // 드롭다운 내부 클릭 시 닫히지 않게
                    $('.dropdown-content').on('click', function (e) {
                        e.stopPropagation();
                    });
                });

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