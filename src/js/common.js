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
  //
  // if($(`.${$className}`).css("display") == "none") {
  //   $(`.${$className}`).slideDown();
  // } else {
  //   $(`.${$className}`).slideUp();
  // }
}

// 축하의 마음 전하기
var groomsAccount = "";
var brideAccount = "";


const groomsAccountInfos = [
  {name: "최은호", className: "groomAccount", account: "농협 821094-56-013826", phoneNum: "010-9559-3525"},
  {name: "최명규", className: "groomAccountF", account: "신한은행 110-543-320411", phoneNum: "010-2849-2285"},
  {name: "이연순", className: "groomAccountM", account: "카카오뱅크 3333-19-9692101", phoneNum: "010-4542-2285"}
];

const brideAccountInfos = [
  {name: "김해니", className: "_brideAccount", account: "신한은행 110-476-947623", phoneNum: "010-5174-0677"},
  {name: "김진광", className: "_brideAccountF", account: "국민은행 217-24-0125-056", phoneNum: "010-5087-0678"},
  {name: "김영미", className: "_brideAccountM", account: "국민은행 217-21-0458-402", phoneNum: "010-5063-0674"}
];

groomsAccount += `<div class="account-name" onclick="clickEvent(this)">신랑측 계좌번호</div>`
brideAccount += `<div class="account-name" onclick="clickEvent(this)">신부측 계좌번호</div>`

groomsAccountInfos.forEach((rendor,i) => {
  groomsAccount += `
  <div class="groomFamilyInfo" style="display: none; height: auto;">
     <!-- 계좌번호 -->
    <div style="display: flex; justify-content: start; align-items: center; padding: 0.5rem 0.5rem 0.5rem 1rem" >
    <span>${rendor.account}</span>
    <span style="margin-left: auto;" >
      <button style="border: 0; border-radius: 10px; color: black; background: #eeeeee; padding: 0.4rem 0.8rem" onclick="copyAccount(this)">복사</button>
    </span>
    </div>
     <!-- 이름 -->
     <div style="display: flex; justify-content: start; align-items: center; padding: 0.5rem 0.5rem 0.5rem 1rem">${rendor.name}</div>
     ${i !== groomsAccountInfos.length - 1 ? "<hr style='margin: 0'/>" : ""}
  </div>
`
});

brideAccountInfos.forEach((rendor,i) => (
  brideAccount += `
   <div class="brideFamilyInfo" style="display: none; height: auto;">
     <!-- 계좌번호 -->
    <div style="display: flex; justify-content: start; align-items: center; padding: 0.5rem 0.5rem 0.5rem 1rem" >
    <span>${rendor.account}</span>
    <span style="margin-left: auto;" >
      <button style="border: 0; border-radius: 10px; color: black; background: #eeeeee; padding: 0.4rem 0.8rem" onclick="copyAccount(this)">복사</button>
    </span>
    </div>
     <!-- 이름 -->
     <div style="display: flex; justify-content: start; align-items: center; padding: 0.5rem 0.5rem 0.5rem 1rem">${rendor.name}</div>
     ${i !== brideAccountInfos.length - 1 ? "<hr style='margin: 0'/>" : ""}
  </div>
`
));

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

  alertModal("계좌번호가 복사되었습니다.");
};

// alert modal
function alertModal(title) {
  alertHtml = '';

  alertHtml += '<div id="modalBack"></div>';
  alertHtml += '<div class="modal">';
  alertHtml += '<div class="modal_content">';
  alertHtml += '<div class="modal_content_body">' + title + '</div>';
  alertHtml += '<hr style="margin-bottom: 25px"/>';
  alertHtml += '<div class="modal_content_button"><div id="modal_submit" onclick="hideModal()">확인</div></div>';
  alertHtml += '</div>';
  alertHtml += '</div>';

  $('body').append(alertHtml);
  $('#modalBack').css({
    'width': window.document.body.clientWidth, 'height': $(document).height() * 1.2
    , 'top': '0', 'left': '0', 'right': '0', 'bottom': '0'
    , 'backgroundColor': '#000000', 'opacity': '0.4'
    , 'position': 'fixed'
    , 'z-index': '998'
    , 'overflow': 'hidden'
    , 'touch-action': 'none'
  });

  $(".modal").css({
    'position': 'fixed',
    'width': window.document.body.clientWidth / 1.5,
    'height': $(document).height() / 30,
    'backgroundColor': '#FFFFFF',
    'top': '40%',
    'left': '16%',
    'border-radius': '30px',
    'z-index': '999',
    'overflow': 'hidden',
    'touch-action': 'none',
  });

  const modalHeight = $('.modal').css({})[0].attributes[1].nodeValue.split(';')[2].replace(/[^.0-9]/g, '').split('.')[0];

  $(".modal_content_body").css({
    'margin': `${modalHeight / 4}px 0`,
    'font-size': modalHeight / 9,
    'text-align': 'center',
    'line-height': 'auto',
    'font-weight': '400',
    'font-style': 'normal',
    'font-family': '"Gowun Dodum", sans-serif',
    'overflow': 'hidden',
    'touch-action': 'none',
  });

  $("#modal_submit").css({
    'font-weight': 'bolder',
    'color': '#6042F9',
    'position': 'absolute',
    'bottom': '1rem',
    'text-align': 'center',
    'width': '100%',
    'font-size': '1rem',
    'overflow': 'hidden',
    'touch-action': 'none'
  });
};

function hideModal() {
  $("#modalBack, .modal").remove();
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

