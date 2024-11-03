function updateTotalMembers() {
  const totalMembers =
    parseInt(document.getElementById("totalMembers").value, 10) || 0;

  const CQ = parseInt(document.getElementById("CQ").value, 10) || 0;

  const vacation = parseInt(document.getElementById("vacation").value, 10) || 0;

  const vehicle = parseInt(document.getElementById("vehicle").value, 10) || 0;

  const CCTV = parseInt(document.getElementById("CCTV").value, 10) || 0;

  const sleepOver =
    parseInt(document.getElementById("sleepOver").value, 10) || 0;

  const preCQ = parseInt(document.getElementById("preCQ").value, 10) || 0;

  const preCCTV = parseInt(document.getElementById("preCCTV").value, 10) || 0;

  const exceptions =
    CQ + vacation + vehicle + CCTV + sleepOver + preCQ + preCCTV;
  document.getElementById("exceptions").value = exceptions;

  const currentMembers = totalMembers - exceptions;
  document.getElementById("currentMembers").value = currentMembers;
}
document.getElementById("CQ").addEventListener("input", updateTotalMembers);

document
  .getElementById("vacation")
  .addEventListener("input", updateTotalMembers);

document
  .getElementById("vehicle")
  .addEventListener("input", updateTotalMembers);

document.getElementById("CCTV").addEventListener("input", updateTotalMembers);

document
  .getElementById("sleepOver")
  .addEventListener("input", updateTotalMembers);

document.getElementById("preCQ").addEventListener("input", updateTotalMembers);

document
  .getElementById("preCCTV")
  .addEventListener("input", updateTotalMembers);

function generateAndCopyText() {
  // 합계를 최신 상태로 업데이트
  updateTotalMembers();

  const text = `3포대 아침점호 결과보고

- 총원 : ${document.getElementById("totalMembers").value}명
- 열외 : ${document.getElementById("exceptions").value}명
- 열외내용 : 당직 ${document.getElementById("CQ").value}명, 휴가 ${
    document.getElementById("vacation").value
  }명, 배차 ${document.getElementById("vehicle").value}명, CCTV ${
    document.getElementById("CCTV").value
  }명, 외박 ${document.getElementById("sleepOver").value}명, 당직준비 ${
    document.getElementById("preCQ").value
  }명, 근무교대 ${document.getElementById("preCCTV").value}명
- 현재원 : ${document.getElementById("currentMembers").value}명 이상없습니다.`;

  navigator.clipboard.writeText(text).then(() => {
    alert("문장이 클립보드에 복사되었습니다.");
  });
}
