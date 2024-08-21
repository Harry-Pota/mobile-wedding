const weddingInfo = {
  bride: {
    name: "해니",
    father: "김진광",
    mother: "김영미",
  },
  groom: {
    name: "은호",
    father: "최명규",
    mother: "이연순",
  },
  date: "2025.03.22 SAT PM 12:00",
  venu: "파티움하우스 3F 파티움홀",
};

const userAgent = navigator.userAgent.toLowerCase(); //userAgent 값 얻기
const mobileOs = {
  myMobileOs: "",
};

if (userAgent.match("android") != null) {
  //안드로이드 일때 처리
  mobileOs.myMobileOs = "android";
} else if (userAgent.indexOf("iphone") > -1 || userAgent.indexOf("ipod") > -1) {
  //IOS 일때 처리
  mobileOs.myMobileOs = "ios";
} else if (userAgent.indexOf("ipad") > -1) {
  mobileOs.myMobileOs = "ipad";
} else {
  //아이폰, 안드로이드 외 처리
  mobileOs.myMobileOs = "etc";
}

// width 계산
const bodyWidth = window.document.body.clientWidth;

if (mobileOs.myMobileOs === "etc") {
  document.querySelector("#main-img").style.width = bodyWidth / 3.5 + "px";
} else {
  document.querySelector("#main-img").style.width = bodyWidth + "px";
}

document.querySelector(".main-name.left").innerText = weddingInfo.bride.name;
document.querySelector(".main-name.right").innerText = weddingInfo.groom.name;
document.querySelector(".main-wedding-date").innerText = weddingInfo.date;
document.querySelector(".main-wedding-venu").innerText = weddingInfo.venu;
