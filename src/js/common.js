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
  address: "( 수원시 팔달구 효원로 289 )",
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
  $("#main-img").css("width", `${bodyWidth / 3.5}px`);
  $("swiper").css("width", `${bodyWidth / 3.5}px`);
} else {
  $("#main-img").css("width", `${bodyWidth}px`);
  $("swiper").css("width", `${bodyWidth}px`);
}

let swiperDivsion = "";

for (let i = 0; i <= 2; i++) {
  swiperDivsion += `<div class="swiper-slide"><img id="swiper-image${
    i + 1
  }" src="./public/assets/swiper_image${i + 1}.jpeg" alt="swiper_image${
    i + 1
  }" height="auto"/></div>`;
}

$(".swiper-wrapper").append(swiperDivsion);

$(".main-name.left").text(weddingInfo.bride.name);
$(".main-name.right").text(weddingInfo.groom.name);
$(".main-wedding-date").text(weddingInfo.date);
$(".main-wedding-venu").text(weddingInfo.venu);
$(".location-info").text(weddingInfo.venu);
$(".location-info-address").text(weddingInfo.address);
