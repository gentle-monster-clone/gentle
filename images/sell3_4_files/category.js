var cateSlide, cateHeight;

$('.jsCategory').addClass('on');

document.querySelector('.jsCategory').addEventListener('keyup', (e) => {
	if (e.keyCode === 9 && e.target.classList.contains('category__link')) {
		// if (window.innerWidth < 1024) {
		// 	const idx = Array.from(document.querySelectorAll('.jsCategory .category__item')).indexOf(e.target.parentNode)
		// 	if (cateSlide) {
		// 		cateSlide.slideTo(idx)
		// 	}
		// }
	}
})

// note: pc 에서 9개 미만은 미설정 되어있으나 모바일에서 나와야하므로 강제 처리
if ($(window).width() < 768) {
    $('.category--list .category__container').addClass('swiper-container')
    $('.category__list').addClass('swiper-wrapper')
}

// Category Slide : ON
function cateSlideOn() {
    cateSlide = new Swiper('.jsCategory', {
		slidesPerView: 9,
        navigation: {
            nextEl: '.jsCateNext',
            prevEl: '.jsCatePrev',
        },
		watchSlidesVisibility: true,
        breakpoints: {
            1024: {
				slidesPerView: 'auto',
                freeMode: true
            }
        }
    });

	function setTabindex() {
		if (cateSlide) {
			// if (window.innerWidth >= 1024) {
				cateSlide.el.querySelectorAll('.swiper-slide').forEach((elem) => {
					// note: swiper-slide-visible 이 prev 에도 찍히는 이슈
					if (
						elem.classList.contains('swiper-slide-visible') &&
						!elem.classList.contains('swiper-slide-prev') &&
						elem.getBoundingClientRect().left >= 0 &&
						elem.getBoundingClientRect().left + elem.getBoundingClientRect().width <= window.innerWidth
					) {
						elem.querySelector('.category__link').removeAttribute('tabindex')
					} else {
						elem.querySelector('.category__link').setAttribute('tabindex', '-1')
					}
				})
			// } else {
			// 	cateSlide.el.querySelectorAll('.swiper-slide').forEach((elem) => {
			// 		elem.querySelector('.category__link').removeAttribute('tabindex')
			// 	})
			// }
		}
	}
	setTabindex()
	cateSlide.on('transitionEnd', (e, idx) => {
		// note: setTimeout 안할 시 타 클래스가 변경되기 전 데이터로 들어가므로 주의
		setTimeout(setTabindex)
	})


}

// Category Slide : OFF
function cateSlideOff() {
    if(cateSlide) {
        cateSlide.destroy();
        cateSlide = undefined;
        $('.jsCategory').removeClass('swiper-container').end().find('.category__list').removeClass('swiper-wrapper').end().find('.category__item').removeClass('swiper-slide');
    }
}

// Category Slide : Break Point
function breakPointCateSlide(currentPath) {
    var breakPoint = $('.jsCategory').data('break');
    if($(window).width() <= breakPoint) {
        if(!cateSlide) cateSlideOn();
        // if($('.category').hasClass('category--list')) cateRecogStories(currentPath);
		if ($('.category').hasClass('category--story')) cateRecogStories();
    } else {
        cateSlideOff();
    }
}

function setCateDummy() {
    cateHeight = $('.jsCateWrap').outerHeight();
    $('.jsCateDummy').height(cateHeight);
}

// Category Slide : Recognize current story page
function cateRecogStories(currentPath) {
    var getIdx;
    var thisStory = currentPath;
    $('.category__item').each(function() {
        var getStory = $(this).find('.category__link').attr('href').split('/').pop();
        switch(thisStory) {
            case getStory :
                getIdx = $(this).index();
                break;
            case 'index.php' :
                getIdx = 0;
                break;
            case 'index_renew2021.php' :
                getIdx = 0;
                break;
        }
    });
    cateSlide.slideTo(getIdx,300);
    $('.category__item').removeClass('current').eq(getIdx).addClass('current');
}
