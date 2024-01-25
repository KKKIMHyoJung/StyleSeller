


/* #############################################
sec1 -> .hamBtn | 모바일 화면시 햄버거 버튼 활성화 및 purpleani(퍼플박스 클릭시 main1/2 전환)
################################################*/


$(function(){

    // 햄버거 메뉴와 관련된 요소 초기화
    let xBtn = $(".xBtn");
    let hamBtn = $(".hamBtn");
    let hamburger = $("#hamburger");

    hamburger.hide();

    // 햄버거 메뉴 열기 이벤트 핸들러
    hamBtn.click(function(){
        hamburger.show();
        hamBtn.hide();
        $("body").addClass("hidden_content");
    });

    // 햄버거 메뉴 닫기 이벤트 핸들러
    xBtn.click(function(){
        hamburger.hide();
        hamBtn.show();
        $("body").removeClass("hidden_content");
    });


    // 메인 콘텐츠와 관련된 요소 초기화
    let main1 = $("#main1");
    let main2 = $("#main2");
    let main1Btn = $(".moveBtn1");
    let main2Btn = $(".moveBtn2");
    let purpleBox = $(".purpleBox");

    main2.hide();

    // 메인1에서 메인2로 전환하는 이벤트 핸들러
    main1Btn.click(function(){
        main2.show();
        main1.hide();
        purpleBox.addClass("purpleani");
    });

    // 메인2에서 메인1로 전환하는 이벤트 핸들러
    main2Btn.click(function(){
        main2.hide();
        main1.show();
    });

});


/* ##################################################
sec3 -> 글씨 토글
#####################################################*/



$(function () {
    let text_btn = $(".sec3_txt_header"); //text header -> 클릭 버튼 역할
   
    // text_btn 클릭에 따른 노출 요소들
    let show_txt = $(".sec3_txt_pupletxt");
    let show_txt2 = $(".sec3_txt_txt");
    let show_circle = $(".sec3_circles .sec3circle");


    //초반 전체 숨김
    const hideAll = () => {
        show_txt.hide();
        show_txt2.hide();
        show_circle.hide();
        text_btn.removeClass("active_toggle");
    };

    hideAll(); // 초기 상태에서 모든 것을 숨김



    text_btn.eq(0).addClass("active_toggle"); // 초기 상태에서 첫 번째 버튼에 클래스 추가 => 사용자 동작 유도 위함
     // 초기 상태에서 첫 번째 텍스트를 보여줌
    show_txt.eq(0).show();
    show_txt2.eq(0).show();



    // n번째 text_btn 클릭시 해당 요소 펼쳐지고 다른 요소 숨겨짐
    text_btn.click(function () {
        const index = text_btn.index($(this));

        hideAll();

        show_txt.eq(index).show();
        show_txt2.eq(index).show();

        if (index === 1) {
            show_circle.show();
        }
        
        text_btn.eq(index).addClass("active_toggle");

    });



});





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
            duration: 2000,  //최종 소요시간 설정 2초로 설정함
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
section4 모달 스크립트
#####################################################*/



const modal = document.querySelector('.modal'); //modal class
const btnOpenPopup = document.querySelector('.btn-open-popup'); //모달 오픈 버튼
const btnClosePopup = document.querySelector('.btn-close-popup'); //모달 닫기 => iframe 영역 밖, esc 입력시 닫는 것으로 설정함


btnOpenPopup.addEventListener('click', () => {
    modal.style.display = 'block';
});

btnClosePopup.addEventListener('click', () => {
    modal.style.display = 'none';
});



//외부영역 클릭시 모달 닫기
$(document).mouseup(function (e){
    if($(".modal").has(e.target).length === 0){
        $(".modal").hide();
    }
});




//esc 입력시 모달닫기
$(document).keydown(function(e){

    var code = e.keyCode || e.which;
 
    if (code == 27) { 
        $('.modal').hide();
    }
});







/* ##################################################
sec5 -> card 호버
#####################################################*/

$(function () {


    // 카드, 호버, 숨겨진 엘리먼트 배열 초기화
    let cards = [];
    let hovers = [];
    let hideElements = [];

    // 카드, 호버, 숨겨진 엘리먼트에 대한 jQuery 객체 초기화
    for (let i = 1; i <= 4; i++) {
        cards[i] = $(`#sec5 .sec5_card_wapper .sec5_card:nth-of-type(${2 * i - 1})`);
        hovers[i] = $(`#sec5 .sec5_card_wapper .sec5_card_hover:nth-of-type(${2 * i})`);
        hideElements[i] = $(`#sec5 .sec5_card_wapper .sec5_card:nth-of-type(${2 * i - 1}) .sec5_card_title, #sec5 .sec5_card_wapper .sec5_card:nth-of-type(${2 * i - 1}) .sec5_card_seller`);
    }

    // 열기 및 닫기 버튼 초기화
    let openBtns = $(".sec5_open_btn");
    let closeBtns = $(".sec5_close_btn");

    // 호버 상태 초기화
    for (let i = 1; i <= 4; i++) {
        hovers[i].hide();
    }

    // 카드에 마우스 오버 및 리브 이벤트 처리
    function handleCardHover(card, hover, hideElements) {
        hover.show();
        hideElements.hide();
    }

    // 카드에서 마우스 떠날 때 이벤트 처리
    function handleCardLeave(hover, hideElements) {
        hover.hide();
        hideElements.show();
    }

    // 카드 이벤트 바인딩
    function bindCardEvents(card, hover, hideElements) {
        card.add(hover).on("mouseover", function () {
            handleCardHover(card, hover, hideElements);
        }).on("mouseleave", function () {
            handleCardLeave(hover, hideElements);
        });
    }

    // 화면 크기에 따른 호버 상태 업데이트
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


    // 초기화
    updateHoverState();

    // 창 크기 변경 시 호버 상태 업데이트
    $(window).on('resize', function () {
        updateHoverState();
    });

    // 열기 버튼 이벤트 처리
    openBtns.each(function (index) {
        $(this).click(function () {
            hovers[index + 1].show();
        });
    });

    // 닫기 버튼 이벤트 처리
    closeBtns.each(function (index) {
        $(this).click(function () {
            hovers[index + 1].hide();
        });
    });
});



/* ##################################################
section6 그래프 애니메이션
#####################################################*/

function graph_ani() {

    // 현재 스크롤 위치
    var scroll_po_graph = $(window).scrollTop();


    // 그래프 섹션의 상단 위치
    var scrollPosition_graph = $('#sec6').offset().top;


    // 현재 스크롤 위치가 그래프 섹션의 상단 위치를 넘어갈 경우
    if (scroll_po_graph >= scrollPosition_graph) {

        // 각 그래프 바에 대해 애니메이션 실행
        $("#sec6 .graph-section:nth-of-type(2) .graph-grid .graph-bar:nth-of-type(1) .inner-bar").css("animation-play-state", "running");
        $("#sec6 .graph-section:nth-of-type(2) .graph-grid .graph-bar:nth-of-type(2) .inner-bar").css("animation-play-state", "running");
        $("#sec6 .graph-section:nth-of-type(2) .graph-grid .graph-bar:nth-of-type(3) .inner-bar").css("animation-play-state", "running");
        $("#sec6 .graph-section:nth-of-type(3) .graph-grid .graph-bar:nth-of-type(1) .inner-bar").css("animation-play-state", "running");
        $("#sec6 .graph-section:nth-of-type(3) .graph-grid .graph-bar:nth-of-type(2) .inner-bar").css("animation-play-state", "running");
        $("#sec6 .graph-section:nth-of-type(3) .graph-grid .graph-bar:nth-of-type(3) .inner-bar").css("animation-play-state", "running");
    }
}



// 스크롤 도달시 애니메이션 실행
$(window).scroll(function () {
    graph_ani();
});




/* ##################################################
sec7
#####################################################*/


// DOMContentLoaded 이벤트가 발생하면 실행될 함수
document.addEventListener('DOMContentLoaded', function () {

    // 카드 래퍼 엘리먼트 가져오기
    var cardWrapper = document.querySelector('#sec7 .sec7_card_wrapper');

    // 카드 래퍼에 마우스가 들어갔을 때 발생하는 이벤트 핸들러
    cardWrapper.addEventListener('mouseenter', function () {
        // 애니메이션 일시 정지
        cardWrapper.style.animationPlayState = 'paused';
    });

    // 카드 래퍼에서 마우스가 나왔을 때 발생하는 이벤트 핸들러
    cardWrapper.addEventListener('mouseleave', function () {
        // 애니메이션 재생
        cardWrapper.style.animationPlayState = 'running';
    });

});



/* ##################################################
sec9
#####################################################*/


$(function () {
    // 질문 오픈 버튼과 대답 엘리먼트를 선택
    let questionOpenBtn = $("#sec9 .sec9_FAQ .sec9_FAQ_wrapper");
    let answer = $("#sec9 .sec9_FAQ .sec9_FAQ_wrapper .answer");

    // 초기에 모든 답변 숨기기
    answer.hide();

    // 질문 오픈 버튼에 클릭 이벤트 핸들러 등록
    questionOpenBtn.click(function () {
        // 클릭된 버튼의 인덱스 찾기
        let index = questionOpenBtn.index(this);
        // 해당 인덱스의 답변 토글
        answer.eq(index).toggle();
    });
});



