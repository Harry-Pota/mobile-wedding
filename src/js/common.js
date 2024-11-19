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

for (let i = 1; i <= 20; i++) {
  swiperDivsion += `<div class="swiper-slide"><img id="swiper-image${i}" src="./public/assets/swiper_image${i}.jpeg" alt="swiper_image${i}" height="auto"/></div>`;
}

function clickEvent (e) {
  const $className = e.nextSibling.nextSibling.className;

  if($(`.${$className}`).css("display") == "none") {
    $(`.${$className}`).slideDown();
  } else {
    $(`.${$className}`).slideUp();
  }
}

// 축하의 마음 전하기
let groomsAccount = "";
let brideAccount = "";


const groomsAccountInfos = [
  {name: "신랑 최은호", className: "groomAccount", account: "농협 821094-56-013826", phoneNum: "010-9559-3525"},
  {name: "부) 최명규", className: "groomAccountF", account: "신한은행 110-543-320411", phoneNum: "010-2849-2285"},
  {name: "모) 이연순", className: "groomAccountM", account: "카카오뱅크 3333-19-9692101", phoneNum: "010-4542-2285"}
];

const brideAccountInfos = [
  {name: "신부 김해니", className: "_brideAccount", account: "신한은행 110-476-947623", phoneNum: "010-5174-0677"},
  {name: "부) 김진광", className: "_brideAccountF", account: "국민은행 217-24-0125-056", phoneNum: "010-5087-0678"},
  {name: "모) 김영미", className: "_brideAccountM", account: "국민은행 217-21-0458-402", phoneNum: "010-5063-0674"}
];

groomsAccountInfos.forEach((rendor) => (
    groomsAccount += `
    <div class="account-name" onclick="clickEvent(this)" style="${!rendor.name.includes("신랑") && "padding-left: 2rem"}">
      ${rendor.name}
    </div>
    <div class=${rendor.className} style="display: none; height: auto; border: 1px solid black">
       <!-- 계좌번호 -->
      <div
       style="${!rendor.name.includes("신랑") ? "padding: 0.5rem 0.5rem 0.5rem 2rem" : "padding: 0.5rem 0.5rem 0.5rem 1rem"}"
       onclick="copyAccount(this)"
      >${rendor.account}</div>
      <hr style="margin: 0"/>
      <!-- 전화번호 -->
      <div onclick="location.href='sms:${rendor.phoneNum}'"
           style="${!rendor.name.includes("신랑") ? "padding: 0.5rem 0.5rem 0.5rem 2rem" : "padding: 0.5rem 0.5rem 0.5rem 1rem"}"
      >
        ${rendor.phoneNum}
      </div>
    </div>
 `
))

brideAccountInfos.forEach((rendor) => (
  brideAccount += `
    <div class="account-name" onclick="clickEvent(this)" style="${!rendor.name.includes("신부") && "padding-left: 2rem"}">
      ${rendor.name}
    </div>
    <div class=${rendor.className} style="display: none; height: auto; border: 1px solid black">
       <!-- 계좌번호 -->
      <div
       style="${!rendor.name.includes("신부") ? "padding: 0.5rem 0.5rem 0.5rem 2rem" : "padding: 0.5rem 0.5rem 0.5rem 1rem"}"
       onclick="copyAccount(this)"
      >${rendor.account}</div>
      <hr style="margin: 0"/>
      <!-- 전화번호 -->
      <div onclick="location.href='sms:${rendor.phoneNum}'"
           style="${!rendor.name.includes("신부") ? "padding: 0.5rem 0.5rem 0.5rem 2rem" : "padding: 0.5rem 0.5rem 0.5rem 1rem"}"
      >
        ${rendor.phoneNum}
      </div>
    </div>
 `
))

// 계좌번호 복사 Function
function copyAccount(e) {
  const $account = e.innerText;

  const textArea = document.createElement("textarea");
  textArea.value =  $account;
  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();
  try {
    document.execCommand('copy');
  } catch (err) {
    console.error('Unable to copy to clipboard', err);
  }
  document.body.removeChild(textArea);

  window.alert("복사되었습니다.");
};

$(".swiper-wrapper").append(swiperDivsion);
$(".grooms").append(groomsAccount);
$(".brides").append(brideAccount);

$(".main-name.left").text(weddingInfo.bride.name);
$(".main-name.right").text(weddingInfo.groom.name);
$(".main-wedding-date").text(weddingInfo.date);
$(".main-wedding-venu").text(weddingInfo.venu);
$(".location-info").text(weddingInfo.venu);
$(".location-info-address").text(weddingInfo.address);

