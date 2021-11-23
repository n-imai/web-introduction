document.addEventListener('DOMContentLoaded', function () {
    const hero = new HeroSlider('.swiper-container');
    hero.start();

    const cb = function (el, inview) {
        if(inview) {
            const ta = new TweenTextAnimation(el);
            ta.animate();
        }
    }

    const so = new ScrollObserver('.tween-animate-title', cb);
    const _inviewAnimation = (el ,inview) => {
      if(inview){
          el.classList.add('inview');
      }else{
          el.classList.add('inview')
      }
    }
    const so2 = new ScrollObserver('.cover-slide', _inviewAnimation);
});
