


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
sec3 -> 마우스 휠 이벤트 (#sec3img -> oevrflos:heddon)
#####################################################*/




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



// $(function () {


//     let card1 = $("#sec5 .sec5_card_wapper .sec5_card:nth-of-type(1)");
//     let card2 = $("#sec5 .sec5_card_wapper .sec5_card:nth-of-type(3)");
//     let card3 = $("#sec5 .sec5_card_wapper .sec5_card:nth-of-type(5)");
//     let card4 = $("#sec5 .sec5_card_wapper .sec5_card:nth-of-type(7)");

//     let hover_1 = $("#sec5 .sec5_card_wapper .sec5_card_hover:nth-of-type(2)");
//     let hover_2 = $("#sec5 .sec5_card_wapper .sec5_card_hover:nth-of-type(4)");
//     let hover_3 = $("#sec5 .sec5_card_wapper .sec5_card_hover:nth-of-type(6)");
//     let hover_4 = $("#sec5 .sec5_card_wapper .sec5_card_hover:nth-of-type(8)");

//     let hide_elements1 = $("#sec5 .sec5_card_wapper .sec5_card:nth-of-type(1) .sec5_card_title,#sec5 .sec5_card_wapper .sec5_card:nth-of-type(1) .sec5_card_seller");
//     let hide_elements2 = $("#sec5 .sec5_card_wapper .sec5_card:nth-of-type(3) .sec5_card_title,#sec5 .sec5_card_wapper .sec5_card:nth-of-type(3) .sec5_card_seller");
//     let hide_elements3 = $("#sec5 .sec5_card_wapper .sec5_card:nth-of-type(5) .sec5_card_title,#sec5 .sec5_card_wapper .sec5_card:nth-of-type(5) .sec5_card_seller");
//     let hide_elements4 = $("#sec5 .sec5_card_wapper .sec5_card:nth-of-type(7) .sec5_card_title,#sec5 .sec5_card_wapper .sec5_card:nth-of-type(7) .sec5_card_seller");

 
//     let open_btn = $(".sec5_open_btn");
//     let close_btn = $(".sec5_close_btn");


//     hover_1.hide();
//     hover_2.hide();
//     hover_3.hide();
//     hover_4.hide();



//     function it(card, hover, hideElements) {
//         hover.show();
//         hideElements.hide();
//     }

//     function handleCardLeave(hover, hideElements) {
//         hover.hide();
//         hideElements.show();
//     }

//     function bindCardEvents(card, hover, hideElements) {
//         card.add(hover).on("mouseover", function () {
//             handleCardHover(card, hover, hideElements);
//         }).on("mouseleave", function () {
//             handleCardLeave(hover, hideElements);
//         });
//     }

//     function updateHoverState() {
//         if (window.innerWidth < 767) {
//             // Enable hover and disable button functionality
//             card1.off("mouseover mouseleave");
//             hover_1.hide();
//             hide_elements1.show();
//         } else {
//             // Disable hover and enable button functionality
//             bindCardEvents(card1, hover_1, hide_elements1);
//         }
//     }

//     updateHoverState();

//     $(window).on('resize', function () {
//         updateHoverState();
//     });

//     open_btn1.click(function () {
//         hover_1.show();
//     });

//     close_btn1.click(function () {
//         hover_1.hide();
//     });
// });


// $(function(){

//     let card1 = $("#sec5 .sec5_card_wapper .sec5_card:nth-of-type(1)");
//     let card2 = $("#sec5 .sec5_card_wapper .sec5_card:nth-of-type(3)");
//     let card3 = $("#sec5 .sec5_card_wapper .sec5_card:nth-of-type(5)");
//     let card4 = $("#sec5 .sec5_card_wapper .sec5_card:nth-of-type(7)");

//     let hover_1 = $("#sec5 .sec5_card_wapper .sec5_card_hover:nth-of-type(2)");
//     let hover_2 = $("#sec5 .sec5_card_wapper .sec5_card_hover:nth-of-type(4)");
//     let hover_3 = $("#sec5 .sec5_card_wapper .sec5_card_hover:nth-of-type(6)");
//     let hover_4 = $("#sec5 .sec5_card_wapper .sec5_card_hover:nth-of-type(8)");

//     let hide_elements1 = $("#sec5 .sec5_card_wapper .sec5_card:nth-of-type(1) .sec5_card_title,#sec5 .sec5_card_wapper .sec5_card:nth-of-type(1) .sec5_card_seller");
//     let hide_elements2 = $("#sec5 .sec5_card_wapper .sec5_card:nth-of-type(3) .sec5_card_title,#sec5 .sec5_card_wapper .sec5_card:nth-of-type(3) .sec5_card_seller");
//     let hide_elements3 = $("#sec5 .sec5_card_wapper .sec5_card:nth-of-type(5) .sec5_card_title,#sec5 .sec5_card_wapper .sec5_card:nth-of-type(5) .sec5_card_seller");
//     let hide_elements4 = $("#sec5 .sec5_card_wapper .sec5_card:nth-of-type(7) .sec5_card_title,#sec5 .sec5_card_wapper .sec5_card:nth-of-type(7) .sec5_card_seller");


//     let open_btn = $(".sec5_open_btn");
//     let close_btn = $(".sec5_close_btn");

//     hover_1.hide();
//     hover_2.hide();
//     hover_3.hide();
//     hover_4.hide();



//     open_btn.eq(0).click(function(){

//         hover_1.show();
//     })
//     close_btn.eq(0).click(function(){

//         hover_1.hide();
//     })


//     open_btn.eq(1).click(function(){

//         hover_2.show();
//     })
//     close_btn.eq(1).click(function(){

//         hover_2.hide();
//     })


//     open_btn.eq(2).click(function(){

//         hover_3.show();
//     })
//     close_btn.eq(2).click(function(){

//         hover_3.hide();
//     })


//     open_btn.eq(3).click(function(){

//         hover_4.show();
//     })
//     close_btn.eq(3).click(function(){

//         hover_4.hide();
//     })



// });



// $(document).ready(function () {
//     let isHoverEnabled = true;

//     function updateHoverState() {
//         if (window.innerWidth <= 767) {
//             isHoverEnabled = false;
//         } else {
//             isHoverEnabled = true;
//         }
//     }

//     function handleCardHover(card, hover, hideElements) {
//         if (isHoverEnabled) {
//             hover.show();
//             hideElements.hide();
//         }
//     }

//     function handleCardLeave(hover, hideElements) {
//         hover.hide();
//         hideElements.show();
//     }

//     let card1 = $("#sec5 .sec5_card_wapper .sec5_card:nth-of-type(1)");
//     let card2 = $("#sec5 .sec5_card_wapper .sec5_card:nth-of-type(3)");
//     let card3 = $("#sec5 .sec5_card_wapper .sec5_card:nth-of-type(5)");
//     let card4 = $("#sec5 .sec5_card_wapper .sec5_card:nth-of-type(7)");

//     let hover_1 = $("#sec5 .sec5_card_wapper .sec5_card_hover:nth-of-type(2)");
//     let hover_2 = $("#sec5 .sec5_card_wapper .sec5_card_hover:nth-of-type(4)");
//     let hover_3 = $("#sec5 .sec5_card_wapper .sec5_card_hover:nth-of-type(6)");
//     let hover_4 = $("#sec5 .sec5_card_wapper .sec5_card_hover:nth-of-type(8)");

//     let hide_elements1 = $("#sec5 .sec5_card_wapper .sec5_card:nth-of-type(1) .sec5_card_title, #sec5 .sec5_card_wapper .sec5_card:nth-of-type(1) .sec5_card_seller");
//     let hide_elements2 = $("#sec5 .sec5_card_wapper .sec5_card:nth-of-type(3) .sec5_card_title, #sec5 .sec5_card_wapper .sec5_card:nth-of-type(3) .sec5_card_seller");
//     let hide_elements3 = $("#sec5 .sec5_card_wapper .sec5_card:nth-of-type(5) .sec5_card_title, #sec5 .sec5_card_wapper .sec5_card:nth-of-type(5) .sec5_card_seller");
//     let hide_elements4 = $("#sec5 .sec5_card_wapper .sec5_card:nth-of-type(7) .sec5_card_title, #sec5 .sec5_card_wapper .sec5_card:nth-of-type(7) .sec5_card_seller");

//     let open_btn = $(".sec5_open_btn");
//     let close_btn = $(".sec5_close_btn");

//     hover_1.hide();
//     hover_2.hide();
//     hover_3.hide();
//     hover_4.hide();



//     updateHoverState();

//     $(window).on('resize', function () {
//         updateHoverState();
//     });

//     card1.add(hover_1).on("mouseover", function () {
//         handleCardHover(card1, hover_1, hide_elements1);
//     }).on("mouseleave", function () {
//         handleCardLeave(hover_1, hide_elements1);
//     });



//     card2.add(hover_2).on("mouseover", function () {
//         handleCardHover(card2, hover_2, hide_elements2);
//     }).on("mouseleave", function () {
//         handleCardLeave(hover_2, hide_elements2);
//     });

//     card3.add(hover_3).on("mouseover", function () {
//         handleCardHover(card3, hover_3, hide_elements3);
//     }).on("mouseleave", function () {
//         handleCardLeave(hover_3, hide_elements3);
//     });



//     card4.add(hover_4).on("mouseover", function () {
//         handleCardHover(card4, hover_4, hide_elements4);
//     }).on("mouseleave", function () {
//         handleCardLeave(hover_4, hide_elements4);
//     });





// });





