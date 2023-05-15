const prevButton = document.querySelectorAll('.prev');
const nextButton = document.querySelectorAll('.next');
const carousel = document.querySelector('.carousel');
const brand = document.querySelector('.brand');
// const nextBtn = document.querySelector('.next-button');
// const prevBtn = document.querySelector('.prev-button');

let index = 0;

$('.next-button').on('click', function() {
    $('.flex').animate({
      scrollLeft: '+=96'
    }, 'fast');
  });
  
  $('.prev-button').on('click', function() {
    $('.flex').animate({
      scrollLeft: '-=96'
    }, 'fast');
  });
  



$(document).ready(function() {

    for (const next of nextButton) {
        next.addEventListener('click', function(event) {
          // 다음 버튼 클릭 이벤트 리스너 등록
      
          const carousel = this.parentNode.previousElementSibling.previousElementSibling;
          // 현재 next 버튼의 부모 노드의 이전 두 개의 형제 요소인 캐러셀 요소를 가져옵니다.
      
          let index = carousel.getAttribute('data-index') || 0;
          // 캐러셀 요소의 data-index 속성 값을 가져옵니다. 없으면 기본값은 0으로 설정합니다.
      
          index = parseInt(index, 10);
          // 가져온 index 값을 정수로 변환합니다.
      
          if (index === 7) return;
          // index 값이 7인 경우 동작을 중지합니다. (마지막 이미지인 경우)
      
          index += 1;
          // index 값을 1 증가시킵니다.
      
          carousel.setAttribute('data-index', index);
          // 캐러셀 요소의 data-index 속성 값을 업데이트합니다.
      
          console.log(event.target);
          console.log(carousel);
          carousel.style.transform = `translate3d(-${100 * index}%, 0, 0)`;
          // 캐러셀을 이동시키기 위해 transform 속성을 설정합니다.
        });
      }
      
      for (const prev of prevButton) {
        prev.addEventListener('click', function(event) {
          // 이전 버튼 클릭 이벤트 리스너 등록
      
          const carousel = this.parentNode.previousElementSibling;
          // 현재 prev 버튼의 부모 노드의 이전 형제 요소인 캐러셀 요소를 가져옵니다.
      
          let index = carousel.getAttribute('data-index') || 0;
          // 캐러셀 요소의 data-index 속성 값을 가져옵니다. 없으면 기본값은 0으로 설정합니다.
      
          index = parseInt(index, 10);
          // 가져온 index 값을 정수로 변환합니다.
      
          if (index === 0) return;
          // index 값이 0인 경우 동작을 중지합니다. (첫 번째 이미지인 경우)
      
          index -= 1;
          // index 값을 1 감소시킵니다.
      
          carousel.setAttribute('data-index', index);
          // 캐러셀 요소의 data-index 속성 값을 업데이트합니다.
      
          console.log(event.target);
          console.log(carousel);
          carousel.style.transform = `translate3d(-${100 * index}%, 0, 0)`;
          // 캐러셀을 이동시키기 위해 transform 속성을 설정합니다.
        });
      }
      

    // for(const prev of prevButton) {
    //     prev.addEventListener('click', (event) => {
    //         if (index === 0) return;
    //         index -= 1;
    //         console.log(event.target)
    //         const btn = event.target
    //         const carousel = btn.parentNode.previousElementSibling;
    //         console.log(carousel);
    //         carousel.style.transform = `translate3d(-${100 * index}%, 0, 0)`;
    //     })
    //     }

    // for(const prev of prevButton) {
    //     prev.addEventListener('click', function(event) {
    //         const carousel = btn.parentNode.previousElementSibling;
    //         let index = carousel.getAttribute('data-index')
            
    //         if (index === 0) return;
    //         index -= 1;

    //         carousel.setAttribute('data-index', index);

    //         console.log(event.target)
    //         console.log(carousel);
    //         carousel.style.transform = `translate3d(-${100 * index}%, 0, 0)`;
    //     })
    //     }

    // for(const next of nextButton) {
    //     next.addEventListener('click', (event) => {
    //         if (index === 7) return;
    //         index += 1;
    //         console.log(event.target)
    //         const btn = event.target
    //         const carousel = btn.parentNode.previousElementSibling.previousElementSibling;
    //         console.log(carousel);
    //         carousel.style.transform = `translate3d(-${100 * index}%, 0, 0)`;
    //     })
    // }

    // for (const next of nextButton) {
    //     next.addEventListener('click', function(event) {
    //       const carousel = this.parentNode.previousElementSibling.previousElementSibling;
    //       let index = carousel.getAttribute('data-index') || 0; // 캐러셀 요소의 현재 인덱스 값 가져오기
    //       index = parseInt(index, 10); // 정수로 변환
      
    //       if (index === 7) return;
    //       index += 1;
          
    //       carousel.setAttribute('data-index', index); // 캐러셀 요소의 인덱스 값 업데이트
          
    //       console.log(event.target);
    //       console.log(carousel);
    //       carousel.style.transform = `translate3d(-${100 * index}%, 0, 0)`;
    //     });
    //   }
      
    
    
    $('.sell-text3').click(function() {
      $(this).toggleClass('clicked');
    });
  });

  $(document).ready(function() {
    $('.carousel-wrapper').on('mouseenter', function() {
      $(this).find('.next-img').css('opacity', '1');
    });
  
    $('.carousel-wrapper').on('mouseleave', function() {
      $(this).find('.next-img').css('opacity', '0');
    });
  });


  $(document).ready(function() {
    $('.carousel-wrapper').on('mouseenter', function() {
      $(this).find('.prev-img').css('opacity', '1');
    });
  
    $('.carousel-wrapper').on('mouseleave', function() {
      $(this).find('.prev-img').css('opacity', '0');
    });
  });