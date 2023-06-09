// 전역 변수
var errmsg = "";
var errfld = null;

// 필드 검사
function check_field(fld, msg) {
	if ((fld.value = trim(fld.value)) == "")
		error_field(fld, msg);
	else
		clear_field(fld);

}

// 필드 오류 표시
function error_field(fld, msg) {
	if (msg != "")
		errmsg += msg + "\n";
	if (!errfld) errfld = fld;
	//fld.style.background = "#BDDEF7";
}

// 필드를 깨끗하게
function clear_field(fld) {
	//fld.style.background = "#FFFFFF";
}

function trim(s) {
	var t = "";
	var from_pos = to_pos = 0;

	for (i = 0; i < s.length; i++) {
		if (s.charAt(i) == ' '){

		} else {
			from_pos = i;
			break;
		}
	}

	for (i = s.length; i >= 0; i--) {
		if (s.charAt(i - 1) == ' ') {

		} else {
			to_pos = i;
			break;
		}
	}

	t = s.substring(from_pos, to_pos);
	//				alert(from_pos + ',' + to_pos + ',' + t+'.');
	return t;
}

// 자바스크립트로 PHP의 number_format 흉내를 냄
// 숫자에 , 를 출력
function number_format(data) {

	var tmp = '';
	var number = '';
	var cutlen = 3;
	var comma = ',';
	var i;

	len = data.length;
	mod = (len % cutlen);
	k = cutlen - mod;
	for (i = 0; i < data.length; i++) {
		number = number + data.charAt(i);

		if (i < data.length - 1) {
			k++;
			if ((k % cutlen) == 0) {
				number = number + comma;
				k = 0;
			}
		}
	}

	return number;
}

function number_format2(data)//형태추가
{

	var tmp = '';
	var number = '';
	var cutlen = 3;
	op = data.split(".");

	data = op[0];


	var comma = ',';
	var i;

	len = data.length;
	mod = (len % cutlen);
	k = cutlen - mod;
	for (i = 0; i < data.length; i++) {
		number = number + data.charAt(i);

		if (i < data.length - 1) {
			k++;
			if ((k % cutlen) == 0) {
				number = number + comma;
				k = 0;
			}
		}
	}

	return (number + "." + op[1]);
}

// 새 창
function popup_window(url, winname, opt) {
	window.open(url, winname, opt);
}


// 폼메일 창
function popup_formmail(url) {
	opt = 'scrollbars=yes,width=417,height=385,top=10,left=20';
	popup_window(url, "wformmail", opt);
}

function popup_formmail2(url, width2, height2) {
	opt = 'scrollbars=yes,width=' + width2 + ',height=' + height2 + ',top=10,left=20';
	popup_window(url, "wformmail", opt);
}

// , 를 없앤다.
function no_comma(data) {
	var tmp = '';
	var comma = ',';
	var i;

	for (i = 0; i < data.length; i++) {
		if (data.charAt(i) != comma)
			tmp += data.charAt(i);
	}
	return tmp;
}

// 삭제 검사 확인
function del(href) {
	if (confirm("한번 삭제한 자료는 복구할 방법이 없습니다.\n\n정말 삭제하시겠습니까?")) {
		document.location.href = encodeURI(href);
	}
}

// 쿠키 입력
function set_cookie(name, value, expirehours, domain) {
	var today = new Date();
	today.setTime(today.getTime() + (60 * 60 * 1000 * expirehours));
	document.cookie = name + "=" + escape(value) + "; path=/; expires=" + today.toGMTString() + ";";
	if (domain) {
		document.cookie += "domain=" + domain + ";";
	}
}

// 쿠키 얻음
function get_cookie(name) {
	var find_sw = false;
	var start, end;
	var i = 0;

	for (i = 0; i <= document.cookie.length; i++) {
		start = i;
		end = start + name.length;

		if (document.cookie.substring(start, end) == name) {
			find_sw = true
			break
		}
	}

	if (find_sw == true) {
		start = end + 1;
		end = document.cookie.indexOf(";", start);

		if (end < start)
			end = document.cookie.length;

		return document.cookie.substring(start, end);
	}
	return "";
}

// 쿠키 지움
function delete_cookie(name) {
	var today = new Date();

	today.setTime(today.getTime() - 1);
	var value = get_cookie(name);
	if (value != "")
		document.cookie = name + "=" + value + "; path=/; expires=" + today.toGMTString();
}

var last_id = null;

function menu(id) {
	if (id != last_id) {
		if (last_id != null)
			document.getElementById(last_id).style.display = "none";
		document.getElementById(id).style.display = "block";
		last_id = id;
	} else {
		document.getElementById(id).style.display = "none";
		last_id = null;
	}
}

function textarea_decrease(id, row) {
	if (document.getElementById(id).rows - row > 0)
		document.getElementById(id).rows -= row;
}

function textarea_original(id, row) {
	document.getElementById(id).rows = row;
}

function textarea_increase(id, row) {
	document.getElementById(id).rows += row;
}

// 글숫자 검사
function check_byte(content, target) {
	var i = 0;
	var cnt = 0;
	var ch = '';
	var cont = content.indexOf("#") > 0
		? document.getElementById(content).value
		: $("." + content).val();

	for (i = 0; i < cont.length; i++) {
		ch = cont.charAt(i);
		if (escape(ch).length > 4) {
			cnt += 2;
		} else {
			cnt += 1;
		}
	}
	// 숫자를 출력
	if (target) {
		document.getElementById(target).innerHTML = cnt;
	}

	return cnt;
}

// 문자 갯수 검사
function check_characters(content, target) {
	var charactersValue = document.getElementById(content).value;
	var charactersLength = charactersValue.length;
	if (target) {
		document.getElementById(target).innerHTML = charactersLength;
	}

	return charactersLength;

}

// 문자 갯수 제한
function limit_characters(target, maxByte) {
	var inputString = target.value;
	var inputString2 = "";
	var inputStringLength = inputString.length;

	if (inputStringLength > maxByte) {
		inputStringLength = maxByte;
		inputString2 = inputString.substr(0, inputStringLength);
		target.value = inputString2;
		limit_characters(target, maxByte);
	} else {
		if (document.getElementById('byte')) {
			document.getElementById('byte').innerText = inputStringLength;
		}
	}
}

// 브라우저에서 오브젝트의 왼쪽 좌표
function get_left_pos(obj) {
	var parentObj = null;
	var clientObj = obj;
	//var left = obj.offsetLeft + document.body.clientLeft;
	var left = obj.offsetLeft;

	while ((parentObj = clientObj.offsetParent) != null) {
		left = left + parentObj.offsetLeft;
		clientObj = parentObj;
	}

	return left;
}

// 브라우저에서 오브젝트의 상단 좌표
function get_top_pos(obj) {
	var parentObj = null;
	var clientObj = obj;
	//var top = obj.offsetTop + document.body.clientTop;
	var top = obj.offsetTop;

	while ((parentObj = clientObj.offsetParent) != null) {
		top = top + parentObj.offsetTop;
		clientObj = parentObj;
	}

	return top;
}

function flash_movie(src, ids, width, height, wmode) {
	var wh = "";
	if (parseInt(width) && parseInt(height))
		wh = " width='" + width + "' height='" + height + "' ";
	return "<object classid='clsid:d27cdb6e-ae6d-11cf-96b8-444553540000' codebase='http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,0,0' " + wh + " id=" + ids + "><param name=wmode value=" + wmode + "><param name=movie value=" + src + "><param name=quality value=high><embed src=" + src + " quality=high wmode=" + wmode + " type='application/x-shockwave-flash' pluginspage='http://www.macromedia.com/shockwave/download/index.cgi?p1_prod_version=shockwaveflash' " + wh + "></embed></object>";
}

function obj_movie(src, ids, width, height, autostart) {
	var wh = "";
	if (parseInt(width) && parseInt(height))
		wh = " width='" + width + "' height='" + height + "' ";
	if (!autostart) autostart = false;
	return "<embed src='" + src + "' " + wh + " autostart='" + autostart + "'></embed>";
}

function doc_write(cont) {
	document.write(cont);
}

var win_password_lost = function (href) {
	window.open(href, "win_password_lost", "left=50, top=50, width=617, height=330, scrollbars=1");
}

$(document).ready(function () {
	$("#login_password_lost, #ol_password_lost").click(function () {
		win_password_lost(this.href);
		return false;
	});
});

/**
 * 포인트 창
 **/
var win_point = function (href) {
	var new_win = window.open(href, 'win_point', 'left=100,top=100,width=600, height=600, scrollbars=1');
	new_win.focus();
}

/**
 * 쪽지 창
 **/
var win_memo = function (href) {
	var new_win = window.open(href, 'win_memo', 'left=100,top=100,width=620,height=500,scrollbars=1');
	new_win.focus();
}

/**
 * 메일 창
 **/
var win_email = function (href) {
	var new_win = window.open(href, 'win_email', 'left=100,top=100,width=600,height=580,scrollbars=0');
	new_win.focus();
}

/**
 * 자기소개 창
 **/
var win_profile = function (href) {
	var new_win = window.open(href, 'win_profile', 'left=100,top=100,width=620,height=510,scrollbars=1');
	new_win.focus();
}

/**
 * 스크랩 창
 **/
var win_scrap = function (href) {
	var new_win = window.open(href, 'win_scrap', 'left=100,top=100,width=600,height=600,scrollbars=1');
	new_win.focus();
}

/**
 * 홈페이지 창
 **/
var win_homepage = function (href) {
	var new_win = window.open(href, 'win_homepage', '');
	new_win.focus();
}

/**
 * 우편번호 창
 **/
var win_zip = function (href) {
	var new_win = window.open(href, 'win_zip', 'width=616, height=760, scrollbars=1');
	new_win.focus();
}

/*
var win_zip_new = function(href) { 
    if(typeof daum === 'undefined'){ 
        alert("다음 juso.js 파일이 로드되지 않았습니다."); 
        return false; 
    }
	

    var url_to_array = function(url) { 
        var request = []; 
        var pairs = url.substring(url.indexOf('?') + 1).split('&'); 
        for (var i = 0; i < pairs.length; i++) { 
            var pair = pairs[i].split('='); 
            request[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1]); 
        } 
        return request; 
    } 

    var param = url_to_array(href), 
        frm_name = param['frm_name'], 
        frm_addr1 = param['frm_addr1'], 
        frm_addr2 = param['frm_addr2'], 
        frm_addr3 = param['frm_addr3'], 
        frm_zip1 = param['frm_zip1'], 
        frm_zip2 = param['frm_zip2'], 
        frm_jibeon = param['frm_jibeon'], 
        of = document[frm_name]; 

    new daum.Postcode({ 
        oncomplete: function(data) { 
            // 팝업에서 검색결과 항목을 클릭했을때 실행할 코드를 작성하는 부분. 
            // 우편번호와 주소 정보를 해당 필드에 넣고, 커서를 상세주소 필드로 이동한다. 
            of[frm_zip1].value = data.postcode1; 
            of[frm_zip2].value = data.postcode2; 
            of[frm_addr1].value = data.address1; 
            of[frm_addr2].value = ""; 
            of[frm_addr3].value = ""; 

            if( data.addressType == "R" ){  //도로명이면 
                of[frm_addr3].value = data.address2; 
            } 
            if(of[frm_jibeon] !== undefined){ 
                of[frm_jibeon].value = data.addressType; 
            } 

            of[frm_addr2].focus(); 
        } 
    }).open(); 
} */

var win_zip_new_zip = function (href) {
	if (typeof daum === 'undefined') {
		alert("다음 juso.js 파일이 로드되지 않았습니다.");
		return false;
	}


	var url_to_array = function (url) {
		var request = [];
		var pairs = url.substring(url.indexOf('?') + 1).split('&');
		for (var i = 0; i < pairs.length; i++) {
			var pair = pairs[i].split('=');
			request[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1]);
		}
		return request;
	}

	var param = url_to_array(href),
		frm_name = param['frm_name'],
		frm_addr1 = param['frm_addr1'],
		frm_addr2 = param['frm_addr2'],
		frm_addr3 = param['frm_addr3'],
		frm_zip1 = param['frm_zip1'],
		frm_zip2 = param['frm_zip2'],
		frm_jibeon = param['frm_jibeon'],
		of = document[frm_name];

	new daum.Postcode({
		oncomplete: function (data) {
			// 팝업에서 검색결과 항목을 클릭했을때 실행할 코드를 작성하는 부분.
			// 우편번호와 주소 정보를 해당 필드에 넣고, 커서를 상세주소 필드로 이동한다.


			var fullAddr = data.address; // 최종 주소 변수
			var extraAddr = ''; // 조합형 주소 변수

			if (data.addressType == "R") {  //도로명이면
				//법정동명이 있을 경우 추가한다.
				if (data.bname !== '') {
					extraAddr += data.bname;
				}
				// 건물명이 있을 경우 추가한다.
				if (data.buildingName !== '') {
					extraAddr += (extraAddr !== '' ? ', ' + data.buildingName : data.buildingName);
				}
				// 조합형주소의 유무에 따라 양쪽에 괄호를 추가하여 최종 주소를 만든다.
				fullAddr += (extraAddr !== '' ? ' (' + extraAddr + ')' : '');
			}

			if (of[frm_jibeon] !== undefined) {
				of[frm_jibeon].value = fullAddr;
			}

			of[frm_zip1].value = data.zonecode;
			//of[frm_zip2].value = data.postcode2;
			of[frm_addr1].value = fullAddr;
			of[frm_addr2].value = "";
			//of[frm_addr3].value = "";


			of[frm_addr2].focus();
		}
	}).open();
}
/**
 * 새로운 비밀번호 분실 창 : 101123
 **/
win_password_lost = function (href) {
	var new_win = window.open(href, 'win_password_lost', 'width=617, height=330, scrollbars=1');
	new_win.focus();
}

/**
 * 설문조사 결과
 **/
var win_poll = function (href) {
	var new_win = window.open(href, 'win_poll', 'width=616, height=500, scrollbars=1');
	new_win.focus();
}

/**
 * 스크린리더 미사용자를 위한 스크립트 - 지운아빠 2013-04-22
 * alt 값만 갖는 그래픽 링크에 마우스오버 시 title 값 부여, 마우스아웃 시 title 값 제거
 **/
$(function () {
	$('a img').mouseover(function () {
		$a_img_title = $(this).attr('alt');
		$(this).attr('title', $a_img_title);
	}).mouseout(function () {
		$(this).attr('title', '');
	});
});

/**
 * 텍스트 리사이즈
 **/
function font_resize(id, rmv_class, add_class) {
	var $el = $("#" + id);

	$el.removeClass(rmv_class).addClass(add_class);

	set_cookie("ck_font_resize_rmv_class", rmv_class, 1, g5_cookie_domain);
	set_cookie("ck_font_resize_add_class", add_class, 1, g5_cookie_domain);
}


$(function () {
	$(".win_point").click(function () {
		win_point(this.href);
		return false;
	});

	$(".win_memo").click(function () {
		win_memo(this.href);
		return false;
	});

	$(".win_email").click(function () {
		win_email(this.ref);
		return false;
	});

	$(".win_scrap").click(function () {
		win_scrap(this.href);
		return false;
	});

	$(".win_profile").click(function () {
		win_profile(this.ref);
		return false;
	});

	$(".win_homepage").click(function () {
		win_homepage(this.ref);
		return false;
	});

	$(".win_zip_find").click(function () {
		win_zip(this.href);
		return false;
	});


	$(".win_password_lost").click(function () {
		win_password_lost(this.href);
		return false;
	});

	/*
	$(".win_poll").click(function() {
		win_poll(this.href);
		return false;
	});
	*/

	// 사이드뷰
	var sv_hide = false;
	$(".sv_member, .sv_guest").click(function () {
		$(".sv").removeClass("sv_on");
		$(this).closest(".sv_wrap").find(".sv").addClass("sv_on");
	});

	$(".sv, .sv_wrap").hover(
		function () {
			sv_hide = false;
		},
		function () {
			sv_hide = true;
		}
	);

	$(".sv_member, .sv_guest").focusin(function () {
		sv_hide = false;
		$(".sv").removeClass("sv_on");
		$(this).closest(".sv_wrap").find(".sv").addClass("sv_on");
	});

	$(".sv a").focusin(function () {
		sv_hide = false;
	});

	$(".sv a").focusout(function () {
		sv_hide = true;
	});

	// 셀렉트 ul
	var sel_hide = false;
	$('.sel_btn').click(function () {
		$('.sel_ul').removeClass('sel_on');
		$(this).siblings('.sel_ul').addClass('sel_on');
	});

	$(".sel_wrap").hover(
		function () {
			sel_hide = false;
		},
		function () {
			sel_hide = true;
		}
	);

	$('.sel_a').focusin(function () {
		sel_hide = false;
	});

	$('.sel_a').focusout(function () {
		sel_hide = true;
	});

	$(document).click(function () {
		if (sv_hide) { // 사이드뷰 해제
			$(".sv").removeClass("sv_on");
		}
		if (sel_hide) { // 셀렉트 ul 해제
			$('.sel_ul').removeClass('sel_on');
		}
	});

	$(document).focusin(function () {
		if (sv_hide) { // 사이드뷰 해제
			$(".sv").removeClass("sv_on");
		}
		if (sel_hide) { // 셀렉트 ul 해제
			$('.sel_ul').removeClass('sel_on');
		}
	});

	$("textarea#wr_content[maxlength]").on("keyup change", function () {
		var str = $(this).val()
		var mx = parseInt($(this).attr("maxlength"))
		if (str.length > mx) {
			$(this).val(str.substr(0, mx));
			return false;
		}
	});
});



// 22년도 IT부문 IT개발본부 프론트엔드팀 common JS
const twoDigits = (variable) => { 
	return String('0' + (variable)).slice(-2);
}

const dateFormatKR = (dateStr) => {
	const date = new Date(dateStr)
	return `${date.getFullYear()}년 ${twoDigits(date.getMonth()+1)}월 ${twoDigits(date.getDate())}일`
}