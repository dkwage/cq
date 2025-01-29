function updateTotalMembers() {
  const totalMembers =
    parseInt(document.getElementById("totalMembers").value, 10) || 0;

  const CQ = parseInt(document.getElementById("CQ").value, 10) || 0;

  const vacation = parseInt(document.getElementById("vacation").value, 10) || 0;

  const CCTV = parseInt(document.getElementById("CCTV").value, 10) || 0;

  const sleepOver =
    parseInt(document.getElementById("sleepOver").value, 10) || 0;

  const exceptions = CQ + vacation + CCTV + sleepOver;
  document.getElementById("exceptions").value = exceptions;

  const currentMembers = totalMembers - exceptions;
  document.getElementById("currentMembers").value = currentMembers;

  const phoneTotal = totalMembers;
  document.getElementById("phoneTotal").value = phoneTotal;

  const phoneCurrent = totalMembers - CQ - vacation - sleepOver;
  document.getElementById("phoneCurrent").value = phoneCurrent;
}
document.getElementById("CQ").addEventListener("input", updateTotalMembers);

document
  .getElementById("vacation")
  .addEventListener("input", updateTotalMembers);

document.getElementById("CCTV").addEventListener("input", updateTotalMembers);

document
  .getElementById("sleepOver")
  .addEventListener("input", updateTotalMembers);

function generateAndCopyText() {
  // 합계를 최신 상태로 업데이트
  updateTotalMembers();

   let text = `3포대 저녁점호 결과보고
  
    1. 인원현황
    - 총원 : ${document.getElementById("totalMembers").value}명
    - 열외 : ${document.getElementById("exceptions").value}명
    - 열외내용 :`;
  
  if (document.getElementById("CQ").value != 0) {
    text += ` 당직 ${document.getElementById("CQ").value}명,`;
  }
  if (document.getElementById("vacation").value != 0) {
    text += ` 휴가 ${document.getElementById("vacation").value}명,`;
  }
  if (document.getElementById("CCTV").value != 0) {
    text += ` CCTV ${document.getElementById("CCTV").value}명,`;
  }
  if (document.getElementById("sleepOver").value != 0) {
    text += ` 외박 ${document.getElementById("sleepOver").value}명`;
  }
  
  // Remove trailing comma if present
  text = text.replace(/,\s*$/, '');
  
  text += `
    - 현재원 : ${document.getElementById("currentMembers").value}명
  
    2. 휴대폰 제출 - ${document.getElementById("phoneTotal").value}대 중 ${document.getElementById("phoneCurrent").value}대 제출 완료
  - 비콘 등록 양호
  - USIM칩 확인 양호
  
  3. 건강상태 특이사항 없음
  
  그 외 특이사항 없습니다!`;
  
  navigator.clipboard.writeText(text).then(() => {
    alert("문장이 클립보드에 복사되었습니다.");
  });
}
