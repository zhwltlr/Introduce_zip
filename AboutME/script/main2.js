window.onload = function () {
  // QNA hideANs
  let $ans = document.querySelectorAll(".ans");
  let $ques = document.querySelectorAll(".ques");

  for (let i = 0; i < 6; i++) {
    $ques[i].addEventListener("mouseover", function () {
      document.querySelector(".hideAns" + (i + 1)).style.marginTop = "-320px";
      $ans[i].style.marginTop = "0px";
    });
  }
  for (let i = 0; i < 6; i++) {
    $ques[i].addEventListener("mouseout", function () {
      document.querySelector(".hideAns" + (i + 1)).style.marginTop = "320px";
      $ans[i].style.marginTop = "0px";
    });
  }
  // 만약 rotateY 값이 0이면 mouseover 작동하지 않게 하기

  // TMI conText mouserover
  let $tques = document.querySelectorAll(".tques");
  let $conText = document.querySelectorAll(".conText");

  for (let i = 0; i < 3; i++) {
    $tques[i].addEventListener("mouseover", function () {
      $conText[i].classList.add("active");
    });
    $tques[i].addEventListener("mouseout", function () {
      $conText[i].classList.remove("active");
    });
  }

  // TMI hobby mouserover
  document.querySelector(".hobbyQ").addEventListener("mouseover", function (e) {
    e.target.style.background = "rgba(0,0,0,0.5)";
    e.target.style.color = "#fff";
    e.target.innerText = "영상편집 or 영화관 가서 영화보기!";
  });

  document.querySelector(".hobbyQ").addEventListener("mouseout", function (e) {
    e.target.style.background = "#b9dfb8";
    e.target.style.color = "black";
    e.target.innerText = "취미는요...";
  });

  // TMI food mouserover
  document.querySelector(".foodQ").addEventListener("mouseover", function (e) {
    e.target.innerText = "Danger... 달달한 거 좋아합니다";
  });

  document.querySelector(".foodQ").addEventListener("mouseout", function (e) {
    e.target.innerText = "좋아하는 음식은요...";
  });

  // 기능 추가 2가지
  // QNA
  const cellCount = 6;
  let i = 0;
  const rotateC = function () {
    const angle = (i / cellCount) * -360;
    document.querySelector(
      ".QNABox"
    ).style.transform = `translateZ(-500px) rotateY(${angle}deg)`;
  };

  document.querySelector(".prev").addEventListener("click", function () {
    i--;
    rotateC();
  });
  document.querySelector(".next").addEventListener("click", function () {
    i++;
    rotateC();
  });

  // progress-bar
  window.addEventListener("scroll", function () {
    let myScroll = document.documentElement.scrollTop;
    let hei = document.querySelector("#main").clientHeight;
    let hei2 = document.documentElement.clientHeight;
    let height = hei - hei2;
    console.log(hei, hei2, myScroll);
    let bar = (myScroll / height) * 100;

    document.querySelector(".bar").style.width = bar + "%";
  });
};
