

// 쇼핑몰 기능 추가 전 고객 안내관련 alert 창
/*        $(function(){
            alert("쇼핑몰 개편중이므로 일부 메뉴 사용 불가입니다 :) 더 똑똑해질 스타일셀러를 위해 조금만 기다려주세요! ");
        })*/



// 시간 카운트 관련 js

  let timeDiv = document.querySelectorAll('.timerBox .settingTime');
  let timeArray=[];

        //현재 시간 및 설정시간 설정
  timeDiv.forEach((elem, i)=>{
     setInterval(() => {
        const nowTime = new Date().getTime();
        const endTime = new Date(elem.innerText).getTime();
        const diff = endTime - nowTime;


        //시간 관련 변수들

        let diffDay = Math.floor(diff / (1000*60*60*24)); //day
        let diffHour = Math.floor((diff / (1000*60*60)) % 24); //100이하 hour
        let nodayHour = Math.floor((diff / (1000*60*60))); //hour
        let diffMin = Math.floor((diff / (1000*60)) % 60); //minutes
        let diffSec = Math.floor(diff / 1000 % 60); //seconds

        //각 시간 영역이 10이하 될때
        if(nodayHour < 10 && nodayHour > 0 ){ nodayHour = '0'+nodayHour;}
        if(diffHour < 10  && diffHour > 0 ){ diffHour = '0'+diffHour; }
        if(diffMin < 10   && diffMin > 0 ){ diffMin = '0'+diffMin; }
        if(diffSec < 10   && diffSec > 0 ){ diffSec = '0'+diffSec; }


        if(nodayHour<=0){ nodayHour = '00';}
        if(diffHour<=0){ diffHour = '00'; }
        if(diffMin<=0){ diffMin = '00'; }
        if(diffSec<=0){ diffSec = '00'; }

        if(nodayHour>=100){
        	document.querySelectorAll('.d-day-day')[i].innerText = diffDay +'일';
        	document.querySelectorAll('.d-day-hour')[i].innerText = diffHour +':';
        	document.querySelectorAll('.d-day-min')[i].innerText = diffMin +':';
        	document.querySelectorAll('.d-day-sec')[i].innerText = diffSec;
        }else{
        	document.querySelectorAll('.d-day-hour')[i].innerText = nodayHour +':';
        	document.querySelectorAll('.d-day-min')[i].innerText = diffMin +':';
        	document.querySelectorAll('.d-day-sec')[i].innerText = diffSec;
        }
    }, 1000);

 });