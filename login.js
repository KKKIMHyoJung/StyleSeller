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






  let agree2 = document.getElementById('agree2');
  let agree3 = document.getElementById('agree3');
  



  if(agree2.checked == false || agree3.checked == false ) {
    alert("약관에 모두 동의해주세요");
  }



}