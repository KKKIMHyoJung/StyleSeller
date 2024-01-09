


/* #############################################
sec1 -> .hamBtn | 모바일 화면시 햄버거 버튼 활성화
################################################*/
$(function(){

    let xBtn = $(".xBtn");
    let hamBtn = $(".hamBtn");
    let hamburger = $("#hamburger");

    hamburger.hide();

    hamBtn.click(function(){
        hamburger.show();
        hamBtn.hide();
        $("body").addClass("hidden_content");
    });

    xBtn.click(function(){
        hamburger.hide();
        hamBtn.show();
        $("body").removeClass("hidden_content");
    });


    let main1 = $("#main1");
    let main2 = $("#main2");
    let main1Btn = $(".moveBtn1");
    let main2Btn = $(".moveBtn2");
    let purpleBox = $(".purpleBox");
    

    main2.hide();

    main1Btn.click(function(){
        main2.show();
        main1.hide();
        purpleBox.addClass("purpleani");

    });

    main2Btn.click(function(){
        main2.hide();
        main1.show();

    });
})





/* ##################################################
sec3 -> 글씨 토글
#####################################################*/

$(function(){
    let text_btn = $(".sec3_txt_header");
    let show_txt = $(".sec3_txt_pupletxt");
    let show_txt2 = $(".sec3_txt_txt");
    let show_circle = $(".sec3_circles .sec3circle");

    show_txt.eq(1).hide();
    show_txt.eq(2).hide();
    show_txt2.eq(1).hide();
    show_txt2.eq(2).hide();
    show_circle.hide();


    text_btn.eq(0).click(function(){
        show_txt.eq(0).show();
        show_txt2.eq(0).show(); 

        show_txt.eq(1).hide();
        show_txt2.eq(1).hide();  
        show_circle.hide();  
        show_txt.eq(2).hide();
        show_txt2.eq(2).hide();

        text_btn.eq(0).addClass("active_toggle");        

        text_btn.eq(1).removeClass("active_toggle");
        text_btn.eq(2).removeClass("active_toggle");

    })
    
    text_btn.eq(1).click(function(){
        show_txt.eq(1).show();
        show_txt2.eq(1).show();  
        show_circle.show();

        show_txt.eq(0).hide();
        show_txt2.eq(0).hide(); 
        show_txt.eq(2).hide();
        show_txt2.eq(2).hide();

        text_btn.eq(1).addClass("active_toggle");

        text_btn.eq(0).removeClass("active_toggle");
        text_btn.eq(2).removeClass("active_toggle");

    })

    text_btn.eq(2).click(function(){
        show_txt.eq(2).show();
        show_txt2.eq(2).show();

        show_txt.eq(0).hide();
        show_txt2.eq(0).hide();  
        show_circle.hide();  
        show_txt.eq(1).hide();
        show_txt2.eq(1).hide();  

        text_btn.eq(2).addClass("active_toggle");

        text_btn.eq(0).removeClass("active_toggle");
        text_btn.eq(1).removeClass("active_toggle");        
    })

})


/* #############################################
sec4 -> 숫자 카운트 애니메이션
################################################*/



$(document).ready(function () {

    function animateCounter(element, targetCount) {
        $({ count: 0 }).animate(
        {
            count: targetCount,
        },
        {
            duration: 2000,
            easing: 'swing',
            step: function () {
                element.text(Math.floor(this.count));
            },
            complete: function () {
                element.text(targetCount);
            },
        }
        );
    }

    function checkScroll() {
        // 현재 스크롤 위치
        var scrollPosition = $(window).scrollTop();

        // #sec4 요소의 상단 위치
        var targetPosition = $('#sec4').offset().top;

        // #sec4의 상단 위치에 도달하면 애니메이션 실행
        if (scrollPosition >= targetPosition) {
            const targetElement = $('.sec4_count');
            const targetCount1 = 12600;
            animateCounter(targetElement, targetCount1);

            const targetElement2 = $('.sec4_count:eq(1)');
            const targetCount2 = 320;
            animateCounter(targetElement2, targetCount2);

            const targetElement3 = $('.sec4_count:last');
            const targetCount3 = 943;
            animateCounter(targetElement3, targetCount3);

        }
    }

    // 스크롤 이벤트를 감지하여 checkScroll 함수 호출
    $(window).on('scroll', checkScroll);

    // 초기 로드시 한 번 체크
    checkScroll();
});




/* ##################################################
sec5 -> card 호버
#####################################################*/



$(function () {

    let cards = [];
    let hovers = [];
    let hideElements = [];

    for (let i = 1; i <= 4; i++) {
        cards[i] = $(`#sec5 .sec5_card_wapper .sec5_card:nth-of-type(${2 * i - 1})`);
        hovers[i] = $(`#sec5 .sec5_card_wapper .sec5_card_hover:nth-of-type(${2 * i})`);
        hideElements[i] = $(`#sec5 .sec5_card_wapper .sec5_card:nth-of-type(${2 * i - 1}) .sec5_card_title, #sec5 .sec5_card_wapper .sec5_card:nth-of-type(${2 * i - 1}) .sec5_card_seller`);
    }


    let openBtns = $(".sec5_open_btn");
    let closeBtns = $(".sec5_close_btn");


    for (let i = 1; i <= 4; i++) {
        hovers[i].hide();
    }

    function handleCardHover(card, hover, hideElements) {
        hover.show();
        hideElements.hide();
    }


    function handleCardLeave(hover, hideElements) {
        hover.hide();
        hideElements.show();
    }


    function bindCardEvents(card, hover, hideElements) {
        card.add(hover).on("mouseover", function () {
            handleCardHover(card, hover, hideElements);
        }).on("mouseleave", function () {
            handleCardLeave(hover, hideElements);
        });
    }

    function updateHoverState() {
        let isHoverEnabled = window.innerWidth > 767;

        for (let i = 1; i <= 4; i++) {
            if (isHoverEnabled) {
                bindCardEvents(cards[i], hovers[i], hideElements[i]);
            } else {
                cards[i].off("mouseover mouseleave");
                hovers[i].hide();
                hideElements[i].show();
            }
        }
    }


    updateHoverState();

    $(window).on('resize', function () {
        updateHoverState();
    });


    openBtns.each(function (index) {
        $(this).click(function () {
            hovers[index + 1].show();
        });
    });

    closeBtns.each(function (index) {
        $(this).click(function () {
            hovers[index + 1].hide();
        });
    });
});


/* ##################################################
sec9
#####################################################*/
$(function () {
    let questionOpenBtn = $("#sec9 .sec9_FAQ .sec9_FAQ_wrapper .sec9_contetns");
    let answer = $("#sec9 .sec9_FAQ .sec9_FAQ_wrapper .answer");

    answer.hide();

    questionOpenBtn.click(function () {
        let index = questionOpenBtn.index(this);
        answer.eq(index).toggle();
    });
});



/* ##################################################
sec9
#####################################################*/


document.addEventListener('DOMContentLoaded', function () {
  var cardWrapper = document.querySelector('#sec7 .sec7_card_wrapper');


  cardWrapper.addEventListener('mouseenter', function () {
    cardWrapper.style.animationPlayState = 'paused';
});


  cardWrapper.addEventListener('mouseleave', function () {
    cardWrapper.style.animationPlayState = 'running';
});
});




/* ##################################################
스크롤테스트
#####################################################*/





$(window).scroll(function(){
        // 스크롤이 페이지 하단에 도달하면
      if ($(this).scrollTop() > 2000) {
        $('.sec3_1st_img').fadeIn();        
      } 
    });








function graph_ani() {
    var scroll_po_graph = $(window).scrollTop();
    var scrollPosition_graph = $('#sec6').offset().top;

    if (scroll_po_graph >= scrollPosition_graph) {
        $("#sec6 .graph-section:nth-of-type(2) .graph-grid .graph-bar:nth-of-type(1) .inner-bar").css("animation-play-state", "running");
        $("#sec6 .graph-section:nth-of-type(2) .graph-grid .graph-bar:nth-of-type(2) .inner-bar").css("animation-play-state", "running");
        $("#sec6 .graph-section:nth-of-type(2) .graph-grid .graph-bar:nth-of-type(3) .inner-bar").css("animation-play-state", "running");
        $("#sec6 .graph-section:nth-of-type(3) .graph-grid .graph-bar:nth-of-type(1) .inner-bar").css("animation-play-state", "running");
        $("#sec6 .graph-section:nth-of-type(3) .graph-grid .graph-bar:nth-of-type(2) .inner-bar").css("animation-play-state", "running");
        $("#sec6 .graph-section:nth-of-type(3) .graph-grid .graph-bar:nth-of-type(3) .inner-bar").css("animation-play-state", "running");
    }
}


$(window).scroll(function () {
    graph_ani();
});