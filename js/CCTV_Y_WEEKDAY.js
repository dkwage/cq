// 합계를 계산하고 업데이트하는 함수
function updateTotalMembers() {
  const dorm1Total =
    parseInt(document.getElementById("dorm1Total").value, 10) || 0;
  const dorm2Total =
    parseInt(document.getElementById("dorm2Total").value, 10) || 0;
  const totalMembers = dorm1Total + dorm2Total;
  document.getElementById("totalMembers").value = totalMembers;

  const vacation1 =
    parseInt(document.getElementById("vacation1").value, 10) || 0;

  const vacation2 =
    parseInt(document.getElementById("vacation2").value, 10) || 0;

  const dorm1Exceptions = vacation1;
  document.getElementById("dorm1Exceptions").value = dorm1Exceptions;

  const dorm2Exceptions = vacation2;
  document.getElementById("dorm2Exceptions").value = dorm2Exceptions;

  const exceptions = vacation1 + vacation2;
  document.getElementById("exceptions").value = exceptions;

  const vacationTotal = exceptions;
  document.getElementById("vacationTotal").value = vacationTotal;

  const currentMembers = totalMembers - exceptions;
  document.getElementById("currentMembers").value = currentMembers;

  const dorm1Current = dorm1Total - vacation1;
  document.getElementById("dorm1Current").value = dorm1Current;

  const dorm2Current = dorm2Total - vacation2;
  document.getElementById("dorm2Current").value = dorm2Current;

  const dorm1Saji =
    parseInt(document.getElementById("dorm1Saji").value, 10) || 0;
  const dorm1Chedan =
    parseInt(document.getElementById("dorm1Chedan").value, 10) || 0;
  const dorm1NightShift =
    parseInt(document.getElementById("dorm1NightShift").value, 10) || 0;
  const dorm1CCTV =
    parseInt(document.getElementById("dorm1CCTV").value, 10) || 0;
  const dorm1Duty =
    parseInt(document.getElementById("dorm1Duty").value, 10) || 0;
  const dorm1Sleeping =
    dorm1Current -
    dorm1Saji -
    dorm1Chedan -
    dorm1NightShift -
    dorm1CCTV -
    dorm1Duty;
  document.getElementById("dorm1Sleeping").value = dorm1Sleeping;

  const dorm2Saji =
    parseInt(document.getElementById("dorm2Saji").value, 10) || 0;
  const dorm2Chedan =
    parseInt(document.getElementById("dorm2Chedan").value, 10) || 0;
  const dorm2NightShift =
    parseInt(document.getElementById("dorm2NightShift").value, 10) || 0;
  const dorm2CCTV =
    parseInt(document.getElementById("dorm2CCTV").value, 10) || 0;
  const dorm2Duty =
    parseInt(document.getElementById("dorm2Duty").value, 10) || 0;
  const dorm2Sleeping =
    dorm2Current -
    dorm2Saji -
    dorm2Chedan -
    dorm2NightShift -
    dorm2CCTV -
    dorm2Duty;
  document.getElementById("dorm2Sleeping").value = dorm2Sleeping;

  const sleepingInDorm = dorm1Sleeping + dorm2Sleeping;
  document.getElementById("sleepingInDorm").value = sleepingInDorm;
}

// 입력 필드 값이 변경될 때마다 합계 업데이트
document
  .getElementById("dorm1Total")
  .addEventListener("input", updateTotalMembers);
document
  .getElementById("dorm2Total")
  .addEventListener("input", updateTotalMembers);

document
  .getElementById("vacation1")
  .addEventListener("input", updateTotalMembers);

document
  .getElementById("vacation2")
  .addEventListener("input", updateTotalMembers);

document
  .getElementById("dorm1Saji")
  .addEventListener("input", updateTotalMembers);
document
  .getElementById("dorm1Chedan")
  .addEventListener("input", updateTotalMembers);
document
  .getElementById("dorm1NightShift")
  .addEventListener("input", updateTotalMembers);
document
  .getElementById("dorm1CCTV")
  .addEventListener("input", updateTotalMembers);
document
  .getElementById("dorm1Duty")
  .addEventListener("input", updateTotalMembers);

document
  .getElementById("dorm2Saji")
  .addEventListener("input", updateTotalMembers);
document
  .getElementById("dorm2Chedan")
  .addEventListener("input", updateTotalMembers);
document
  .getElementById("dorm2NightShift")
  .addEventListener("input", updateTotalMembers);
document
  .getElementById("dorm2CCTV")
  .addEventListener("input", updateTotalMembers);
document
  .getElementById("dorm2Duty")
  .addEventListener("input", updateTotalMembers);

function generateAndCopyText() {
  // 선택된 시간을 가져옵니다.
  const hours = document.getElementById("timeSelect").value;

  // 합계를 최신 상태로 업데이트
  updateTotalMembers();

  let text = `3포대 ${hours}시 인원 보고
  
    1. 총원 : ${document.getElementById("totalMembers").value}명
        가. 1생활관 : ${document.getElementById("dorm1Total").value}명
        나. 2생활관 : ${document.getElementById("dorm2Total").value}명
  
    2. 열외(주둔지에 없는 인원) : ${document.getElementById("exceptions").value}명
        가. 총괄 : 휴가 ${document.getElementById("vacationTotal").value}명`;
  
  text += `
        나. 1생활관 : ${document.getElementById("dorm1Exceptions").value}명`;
  if (document.getElementById("vacation1").value != 0) {
    text += `
            * 휴가 ${document.getElementById("vacation1").value}명`;
  }
  
  text += `
        다. 2생활관 : ${document.getElementById("dorm2Exceptions").value}명`;
  if (document.getElementById("vacation2").value != 0) {
    text += `
            * 휴가 ${document.getElementById("vacation2").value}명`;
  }
  
  text += `
  
    3. 현재원 장소별 현황 : ${document.getElementById("currentMembers").value}명 중 ${document.getElementById("sleepingInDorm").value}명 생활관 취침
        가. 1생활관 : ${document.getElementById("dorm1Current").value}명 중 ${document.getElementById("dorm1Sleeping").value}명 취침
        *`;
  
  if (document.getElementById("dorm1Saji").value != 0) {
    text += ` 사지방 ${document.getElementById("dorm1Saji").value}명,`;
  }
  if (document.getElementById("dorm1Chedan").value != 0) {
    text += ` 체단 ${document.getElementById("dorm1Chedan").value}명,`;
  }
  if (document.getElementById("dorm1NightShift").value != 0) {
    text += ` 불침번 ${document.getElementById("dorm1NightShift").value}명,`;
  }
  if (document.getElementById("dorm1CCTV").value != 0) {
    text += ` CCTV ${document.getElementById("dorm1CCTV").value}명,`;
  }
  if (document.getElementById("dorm1Duty").value != 0) {
    text += ` 당직 ${document.getElementById("dorm1Duty").value}명`;
  }
  
  text += `
        나. 2생활관 : ${document.getElementById("dorm2Current").value}명 중 ${document.getElementById("dorm2Sleeping").value}명 취침
        *`;
  
  if (document.getElementById("dorm2Saji").value != 0) {
    text += ` 사지방 ${document.getElementById("dorm2Saji").value}명,`;
  }
  if (document.getElementById("dorm2Chedan").value != 0) {
    text += ` 체단 ${document.getElementById("dorm2Chedan").value}명,`;
  }
  if (document.getElementById("dorm2NightShift").value != 0) {
    text += ` 불침번 ${document.getElementById("dorm2NightShift").value}명,`;
  }
  if (document.getElementById("dorm2CCTV").value != 0) {
    text += ` CCTV ${document.getElementById("dorm2CCTV").value}명,`;
  }
  if (document.getElementById("dorm2Duty").value != 0) {
    text += ` 당직 ${document.getElementById("dorm2Duty").value}명`;
  }
  
  navigator.clipboard.writeText(text).then(() => {
    alert("문장이 클립보드에 복사되었습니다.");
  });
}