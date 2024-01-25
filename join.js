$(function(){
  // Selecting elements
  let hoverLink = $(".hover-li .nav-big-a");
  let img = $(".hover-img");


  hoverLink.eq(0).hover(
    function(){

      img.eq(0).css("display", "block");
    },
    function(){

      img.eq(0).css("display", "none");
    }
  );


  hoverLink.eq(1).hover(
    function(){

      img.eq(1).css("display", "block");
    },
    function(){

      img.eq(1).css("display", "none");
    }
  );




  hoverLink.eq(2).hover(
    function(){

      img.eq(2).css("display", "block");
    },
    function(){

      img.eq(2).css("display", "none");
    }
  );




  hoverLink.eq(3).hover(
    function(){

      img.eq(3).css("display", "block");
    },
    function(){

      img.eq(3).css("display", "none");
    }
  );


});





function selectAll(selectAll)  {
  const checkboxes 
  = document.querySelectorAll('input[type="checkbox"]');
  
  checkboxes.forEach((checkbox) => {
    checkbox.checked = selectAll.checked
  })


}


function checkForm() {




  if(!frm.id.value) {
    frm.id.focus();
    alert("아이디를 입력해 주십시오.");

    return false;

  }



  if(!frm.pw.value) {
    frm.pw.focus();
    alert("비밀번호를 입력해 주십시오.");

    return false;
  }


  if(!frm.pw_check.value) {
    frm.pw_check.focus();
    alert("비밀번호 확인을 입력해 주십시오.");

    return false;

  }


  if(frm.pw_check.value != frm.pw.value) {
    frm.pw_check.focus();
    alert("입력한 비밀번호를 다시 확인해주세요");

    return false;
  }


  if(!frm.name.value) {
    frm.name.focus();
    alert("이름을 입력해 주십시오.");

    return false;
  }



  if(!frm.phone.value) {
    frm.phone.focus();
    alert("전화번호를 입력해 주십시오.");

    return false;
  }






  let agree1 = document.getElementById('agree1');
  let agree2 = document.getElementById('agree2');
  



  if(agree1.checked == false || agree2.checked == false ) {
    alert("약관에 모두 동의해주세요");
  }


}


