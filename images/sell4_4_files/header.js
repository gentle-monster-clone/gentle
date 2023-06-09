(function() {
	// 디바이스 정보 Class 추가
	const userAgent = navigator.userAgent.toLowerCase();
	const htmlElement = document.querySelector('html');

    if (/macintosh/i.test(userAgent)) {
        htmlElement.setAttribute('data-device','mac');
    }else if (/iphone/i.test(userAgent)) {
		htmlElement.setAttribute('data-device','ios');
    } else if (/windows/i.test(userAgent)) {
		htmlElement.setAttribute('data-device','windows');
    } else if (/android/i.test(userAgent)) {
		htmlElement.setAttribute('data-device','android');
    };
	
    if (/kakaotalk/i.test(userAgent)) {
		htmlElement.setAttribute('data-browser','kakkotalk');
    } else if (/chrome/i.test(userAgent) || /crios/i.test(userAgent)) {
		htmlElement.setAttribute('data-browser','chrome');
	} else if (/version/i.test(userAgent)) {
		htmlElement.setAttribute('data-browser','safari');
	}
	// 현재 페이지 Class 추가
	(function(){
		var currentPage = window.location.pathname.split('/').splice(0,4);
		currentPage = currentPage.filter(function(currentValue){
			return currentValue !== '';
		});
		currentPage.map(function(currentValue, index){
			if (currentValue.indexOf('php')) {
				currentValue = currentValue.replace('.php', '');
			};
			if (currentValue.indexOf('stories') >= 0) {
				currentPage[index+1] = 'stories-detail'
			}
			htmlElement.classList.add('page--'+ currentValue);
		})
		if (currentPage.length === 1 || currentPage.length === 0) {		
			htmlElement.classList.add('page--main');
		}
	})()
	
})();

const cssVarHeaderHeight = () => {
	// header 높이 세팅
	const headerWrapEl = document.querySelector('.n-header-wrap')
	const headerContEl = document.querySelector('.n-header-container')
	const headerCateEl = document.querySelector('.jsCate')
	const headerContTopEl = document.querySelector('.jsContTop')
	document.documentElement.style.setProperty('--header', `${headerWrapEl.clientHeight}px`)
	document.documentElement.style.setProperty('--currentHeader', `${Math.max(0,headerContEl.clientHeight + headerContEl.getBoundingClientRect().top)}px`)
	document.documentElement.style.setProperty('--headerOffsetTop', `${Math.max(0, headerContEl.getBoundingClientRect().top)}px`)
	if (headerCateEl && headerContTopEl) {
		document.documentElement.style.setProperty('--headerCont', `${headerCateEl.clientHeight + headerContTopEl.clientHeight}px`)
	}
}

// us notice popup
const noticePopup = () => {
	const jsNoticeSlideEl = document.querySelector('.jsNoticeSlide')
	var isNotClosed = !(sessionStorage.length && sessionStorage.getItem('close') === 'yes') ;
	if (document.querySelectorAll('.notice-slide__item').length && isNotClosed) {
		document.querySelector('.notice-popup').style.display = 'block'
		if (jsNoticeSlideEl.querySelectorAll('.swiper-slide').length > 1) {
			const slideNavEl =  `
				<div class="notice-slide__nav notice-slide__nav--prev jsNoticePrev"></div>
				<div class="notice-slide__nav notice-slide__nav--next jsNoticeNext"></div>
			`;
			jsNoticeSlideEl.insertAdjacentHTML('beforeend', slideNavEl);
			var noticeSlide = new Swiper('.jsNoticeSlide', {
				speed: 600,
				loop: true,
				autoplay: {
					delay: 3000,
					disableOnInteraction: false,
				},
				navigation: {
					nextEl: '.jsNoticeNext',
					prevEl: '.jsNoticePrev'
				}
			});
		}
	}

	if (document.querySelector('.notice-popup').style.display !== 'none') {
		document.querySelector('.jsNHeaderWrap').classList.add('has-noti')
	} else {
		document.querySelector('.jsNHeaderWrap').classList.remove('has-noti')
	}
	$('.notice-popup .btn-popup-close').on('click', function() {
		document.querySelector('.notice-popup').style.display = 'none'
		document.querySelector('.jsNHeaderWrap').classList.remove('has-noti')
		sessionStorage.setItem('close', 'yes')
		cssVarHeaderHeight()
	});
}

const setHeaderPosition = () => {
	const staticPages = ['page--main', 'page--stories-detail']
	const categoryScroll = () => {
		// Scroll Up&Down
		var lastScroll = 0;
		var noticePopup = $('.notice-popup');
		var headerWrap = $('.jsNHeaderWrap');
		var header = $('.jsNHeader');
		var categoryWrap = $('.jsCateWrap');
		var headerSearch = $('.jsSearchTop');
		var contTop = $('.page--shop .jsContTop, .page--styles .jsContTop');
		var cutLine, headerHeight, cateHeight, posDown;
		var filterCount = $('.jsSelectedCount');

		function fixWrapScroll() {
			var getScrollTop = $(window).scrollTop();
			headerHeight = parseInt(window.getComputedStyle(header.children()[0]).height);
			cateHeight = categoryWrap.children().outerHeight();
			posDown = headerHeight + cateHeight;
			cutLine = headerWrap.innerHeight() + cateHeight;
			if (getScrollTop === 0 && lastScroll === 0) {
				header.css('height', '')
				categoryWrap.css('height', '');
			}
			// scroll down
			if (getScrollTop >= lastScroll) {
				if (!$('html').hasClass('search-on')) {
					if (getScrollTop >= cutLine) {
						header.css('height', headerHeight)
						categoryWrap.css('height', cateHeight);
						header.children()[0].style.cssText = `
							position: fixed;
							top: 0;
							padding-bottom: 1px;
							box-sizing: content-box;
							-webkit-transform: translateY(-${posDown}px);
							transform: translateY(-${posDown}px);
						`
						// $('.jsCate').addClass('fixed pos-up');
						categoryWrap.children()[0].style.cssText = `
							position: fixed;
							top: ${headerHeight}px;
							z-index: 10;
							-webkit-transform: translateY(-${posDown}px);
							transform: translateY(-${posDown}px); 
						`

						headerSearch.addClass('pos-up');
						if (contTop[0]) {
							contTop[0].style.cssText = `
								position: fixed;
								top: 0;
								-webkit-transform: translateY(0);
								transform: translateY(0);
							`
						}
					}

				}

				// scroll up
			} else {
				if (!$('html').hasClass('search-on')) {
					if (getScrollTop <= noticePopup[0].clientHeight) {
						/*if (noticePopup.length > 0 || noticePopup.css('display') !== 'none') {
							$('.notice-popup').css('opacity', 1);
						}*/
						header.children().attr('style', '');
						categoryWrap.children().attr('style', '')
						/*headerWrap.attr('style', 'padding-top:' + headerHeight + 'px');*/
						header.children().removeClass('add-duration');
						categoryWrap.children().removeClass('add-duration');
						headerSearch.removeClass('fixed add-duration pos-up pos-down');
						if (contTop[0]) {
							contTop[0].style.cssText = '';
							contTop.removeClass('add-duration')
						}
					}
					if (getScrollTop >= cutLine) {
						// header.css('height', headerHeight)
						header.children()[0].style.webkitTransform = 'translateY(0)';
						header.children()[0].style.transform = 'translateY(0)';
						// categoryWrap.css('height', cateHeight);
						categoryWrap.children()[0].style.webkitTransform = 'translateY(0)';
						categoryWrap.children()[0].style.transform = 'translateY(0)';
						headerSearch.removeClass('pos-up').addClass('add-duration');
						header.children().removeClass('pos-up').addClass('add-duration');
						categoryWrap.children().removeClass('pos-up').addClass('add-duration');
						headerSearch.attr('style', '').addClass('add-duration pos-down');
						if (contTop[0]) {
							contTop.addClass('add-duration')
							contTop[0].style.cssText = `
								position: fixed;
								top: 0;
								-webkit-transform: translateY(${posDown}px);
								transform: translateY(${posDown}px);
							`
						}
					}
				}
			}
			lastScroll = getScrollTop;
		}

		$(window).on('resize scroll', fixWrapScroll)
	}
	/*
	if (document.querySelector('.jsCateWrap')) {
		// 카테고리(.jsCateWrap)가 있는 경우 - static에서 화면 위로 올릴 경우 노출
		 categoryScroll()
	} else if (!staticPages.filter((elem) => document.documentElement.classList.contains(elem)).length) {
		// staticPages를 제외한 전체 페이지 - 항상 sticky
		document.querySelector('.jsNHeaderWrap').classList.add('sticky')
	}
	*/
	if (!staticPages.filter((elem) => document.documentElement.classList.contains(elem)).length) {
		// staticPages를 제외한 전체 페이지 - 항상 sticky
		document.querySelector('.jsNHeaderWrap').classList.add('sticky')
	}
}

const eventLocationPopup = () => {
	var changeLocator = document.querySelector('.jsLocatorPopup');
	if (changeLocator) {
		var modal = new GMComponents.Modal(changeLocator);
		$('.jsLocator').on('click', function() {
			modal.open();
		});
	}
	var regionText = $('#od_region option:selected').text();
	$('.region_text > span').text(regionText);
	$('.region_select_box').click(function() {
		$("#od_region").focus();
	});
	$("#od_region").click(function() {
		var currentRegionText = $('#od_region option:selected').text();
		$('.region_text > span').text(currentRegionText);
	});
	$("#od_region").change(function() {
		var currentRegionText = $('#od_region option:selected').text();
		$('.region_text > span').text(currentRegionText);
	});

	// header position change
	$('#change_header_position').click(function() {
		$('.n-header-container').css('position', 'fixed');
	})
}

noticePopup();

document.addEventListener('DOMContentLoaded', function() {
	// header 높이 체크
	cssVarHeaderHeight();
	// header 포지셔닝
	setHeaderPosition();
	// 국가 변경 팝업
	eventLocationPopup()

	window.addEventListener('resize', debounce(cssVarHeaderHeight))
	window.addEventListener('scroll', function() {
		cssVarHeaderHeight()
		debounce(cssVarHeaderHeight)()
	})
})
