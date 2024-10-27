document.addEventListener("mousemove", function(event) {
    let windowWidth = window.innerWidth;
    let mouseX = event.clientX;

    let percentage = mouseX / windowWidth;

    let dashOffset = 32000 - (percentage * 32000);

    document.querySelector(".logo-path svg path").style.strokeDashoffset = dashOffset;
});

const threadGraphic = document.querySelector('.thread-graphic');
const linePath = document.querySelector('.line-path');

  threadGraphic.addEventListener('mouseover', () => {
    linePath.style.display = 'block';
  });

  threadGraphic.addEventListener('mouseout', () => {
    linePath.style.display = 'none';
  });

  function currentDate (){
    var date = new Date();
    var year = date.getFullYear();
    var month = String(date.getMonth() + 1).padStart(2, '0');
    var day = String(date.getDate()).padStart(2, '0');;

    var formattedDate = year + "." + month + "." + day;
  
    // 날짜에 7일 더하기
    date.setDate(date.getDate() + 7);
    var newMonth = String(date.getMonth() + 1).padStart(2, '0');
    var newDay = String(date.getDate()).padStart(2, '0');
    
    // 7일 후 날짜 출력
    var formattedDatePlus7 = newMonth + "." + newDay;
    
    // 결과 출력
    document.getElementById("date").innerHTML = formattedDate + "<br>" +"-" + formattedDatePlus7;
}


currentDate();