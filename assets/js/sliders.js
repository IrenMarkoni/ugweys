!(function (e) {
  var s = {};
  function i(a) {
    if (s[a]) return s[a].exports;
    var l = (s[a] = { i: a, l: !1, exports: {} });
    return e[a].call(l.exports, l, l.exports, i), (l.l = !0), l.exports;
  }
  (i.m = e),
    (i.c = s),
    (i.d = function (e, s, a) {
      i.o(e, s) || Object.defineProperty(e, s, { enumerable: !0, get: a });
    }),
    (i.r = function (e) {
      "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (i.t = function (e, s) {
      if ((1 & s && (e = i(e)), 8 & s)) return e;
      if (4 & s && "object" == typeof e && e && e.__esModule) return e;
      var a = Object.create(null);
      if ((i.r(a), Object.defineProperty(a, "default", { enumerable: !0, value: e }), 2 & s && "string" != typeof e))
        for (var l in e)
          i.d(
            a,
            l,
            function (s) {
              return e[s];
            }.bind(null, l)
          );
      return a;
    }),
    (i.n = function (e) {
      var s =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return i.d(s, "a", s), s;
    }),
    (i.o = function (e, s) {
      return Object.prototype.hasOwnProperty.call(e, s);
    }),
    (i.p = ""),
    i((i.s = 2));
})([
  ,
  ,
  function (e, s, i) {
    e.exports = i(3);
  },
  function (e, s) {
    if ($(".main-banner__wrap").length) {
      let e = 0,
        s = !1;
      $(".main-banner__wrap .swiper-pagination").hover(
        function () {
          s = !0;
        },
        function () {
          s = !1;
        }
      ),
        new Swiper(".main-banner__wrap", {
          speed: 0,
          autoplay: { delay: 5e3 },
          disableOnInteraction: !1,
          centeredSlides: !1,
          watchSlidesProgress: !0,
          virtualTranslate: !0,
          loop: !0,
          pagination: { el: ".main-banner__pagination", clickable: !0 },
          on: {
            init: function (s) {
              (e = s.realIndex), s.slides[s.activeIndex].classList.add("_full"), (s.slides[s.activeIndex].style.zIndex = 2);
              for (let e = 0; e < s.slides.length; e++) s.slides[s.realIndex] !== s.slides[e] && s.slides[e].classList.add("forward"), (s.slides[e].querySelector(".main-banner__slide-block").style.minWidth = s.size + "px"), (s.slides[e].querySelector(".main-banner__img, .main-banner__slide-block").style.height = s.height + "px");
            },
            realIndexChange: function (i) {
              let a = (e + 1 === i.slides.length - 2 && 0 === i.realIndex) || (i.realIndex > e && 1 === Math.abs(e - i.realIndex));
              s && (a = !0);
              for (let e = 0; e < i.slides.length; e++) i.slides[e].classList.remove("_animate"), i.slides[e].classList.remove("_full"), i.slides[e].removeAttribute("style");
              if (
                (a
                  ? i.realIndex + 1 === i.slides.length - 2
                    ? (i.slides.forEach((e, s) => {
                        s < i.realIndex + 1 && (e.classList.remove("forward"), e.classList.add("backward"));
                      }),
                      i.slides[1].classList.remove("backward"),
                      i.slides[1].classList.add("forward"),
                      i.slides[i.realIndex + 1].classList.add("_animate"),
                      i.slides[i.realIndex].classList.add("_full"))
                    : 0 === i.realIndex
                    ? (i.slides.forEach((e, s) => {
                        s < i.realIndex + 1 ? (e.classList.remove("forward"), e.classList.add("backward")) : s >= i.realIndex && (e.classList.add("forward"), e.classList.remove("backward"));
                      }),
                      i.slides[i.slides.length - 3].classList.remove("forward"),
                      i.slides[i.slides.length - 3].classList.add("backward"),
                      i.slides[i.slides.length - 2].classList.add("_full"),
                      i.slides[i.realIndex + 1].classList.add("_animate"))
                    : (i.realIndex,
                      i.slides.forEach((e, s) => {
                        s < i.realIndex + 1 ? (e.classList.remove("forward"), e.classList.add("backward")) : s >= i.realIndex + 1 && (e.classList.add("forward"), e.classList.remove("backward"));
                      }),
                      i.slides[i.realIndex].classList.add("_full"),
                      i.slides[i.realIndex + 1].classList.add("_animate"))
                  : 0 === i.realIndex
                  ? (i.slides.forEach((e, s) => {
                      s > i.realIndex + 1 && (e.classList.add("forward"), e.classList.remove("backward"));
                    }),
                    i.slides[i.slides.length - 2].classList.remove("forward"),
                    i.slides[i.slides.length - 2].classList.add("backward"),
                    i.slides[i.realIndex + 2].classList.add("_full"),
                    i.slides[i.realIndex + 1].classList.add("_animate"))
                  : (i.realIndex,
                    i.slides.length,
                    i.slides.forEach((e, s) => {
                      s <= i.realIndex + 1 ? (e.classList.remove("forward"), e.classList.add("backward")) : s > i.realIndex + 1 && (e.classList.add("forward"), e.classList.remove("backward"));
                    }),
                    i.slides[i.realIndex + 2].classList.add("_full"),
                    i.slides[i.realIndex + 1].classList.add("_animate")),
                console.log(i.realIndex, e),
                s)
              )
                for (let s = 0; s < i.slides.length; s++) i.slides[s].classList.remove("backward"), i.slides[s].classList.remove("_full"), i.slides[s].classList.add("forward"), 0 === i.realIndex && e === i.slides.length - 3 ? i.slides[0].classList.add("_full") : i.realIndex === i.slides.length - 2 && 0 === e ? i.slides[i.slides.length - 1].classList.add("_full") : 1 === i.realIndex && 0 === e ? i.slides[1].classList.add("_full") : i.slides[e + 1].classList.add("_full");
              e = i.realIndex;
            },
            resize: function (e) {
              for (let s = 0; s < e.slides.length; s++) (e.slides[s].querySelector(".main-banner__slide-block").style.minWidth = e.size + "px"), (e.slides[s].querySelector(".main-banner__img, .main-banner__slide-block").style.height = e.height + "px");
            },
          },
        });
    }
    if ($(".main-recommend__slider").length) {
      function i(e) {
        $(".main-recommend__inner.act  .main-recommend__slider").hasClass("swiper-initialized") || new Swiper(".main-recommend__inner.act  .main-recommend__slider", { speed: 400, slidesPerView: 1.5, spaceBetween: 15, navigation: { nextEl: ".main-recommend__inner.act[data-id='" + e + "'] .main-recommend-next", prevEl: ".main-recommend__inner.act[data-id='" + e + "'] .main-recommend-prev" }, breakpoints: { 1100: { slidesPerView: 4, spaceBetween: 30 }, 700: { slidesPerView: 3, spaceBetween: 20 }, 500: { slidesPerView: 2 } } });
      }
      i($(".main-recommend__inner.act").attr("data-id")),
        $(document).on("click", ".main-recommend__top-item", function (e) {
          const s = Number($(this).attr("data-id"));
          $(".main-recommend__top-item").removeClass("act"),
            $(this).addClass("act"),
            $(".main-recommend__inner").removeClass("act").hide(),
            $(".main-recommend__inner[data-id=" + s + "]")
              .addClass("act")
              .show();
          for (let e = 0; e < $(".main-recommend__slider").length; e++) {
            console.log($(".main-recommend__slider").swiper);
            for (let e = 0; e < $(".main-recommend__slider").length; e++) console.log($(".main-recommend__slider")[e].swiper);
          }
          i(s);
        });
    }
    if (
      ($(".cart-modal__slider-inner").length && new Swiper(".cart-modal__slider-inner", { speed: 400, slidesPerView: 1, navigation: { nextEl: ".cart-modal-next", prevEl: ".cart-modal-prev" }, pagination: { el: ".cart-modal__slider-pagination", clickable: !0 } }),
      $(".product-similar__slider").length && new Swiper(".product-similar__slider", { speed: 400, slidesPerView: 1.5, spaceBetween: 15, navigation: { nextEl: ".product-similar-next", prevEl: ".product-similar-prev" }, breakpoints: { 1100: { slidesPerView: 4, spaceBetween: 30 }, 700: { slidesPerView: 3, spaceBetween: 20 }, 500: { slidesPerView: 2 } } }),
      $(".product-viewed__slider").length && new Swiper(".product-viewed__slider", { speed: 400, slidesPerView: 1.5, spaceBetween: 15, navigation: { nextEl: ".product-viewed-next", prevEl: ".product-viewed-prev" }, breakpoints: { 1100: { slidesPerView: 4, spaceBetween: 30 }, 700: { slidesPerView: 3, spaceBetween: 20 }, 500: { slidesPerView: 2 } } }),
      $(".product-main__auxiliary-slider").length)
    ) {
      const e = new Swiper(".product-main__auxiliary-slider", { speed: 400, spaceBetween: 10, direction: "vertical", mousewheel: { enabled: !0, sensitivity: 2 }, breakpoints: { 1200: { slidesPerView: 5 }, 1e3: { slidesPerView: 4 } }, navigation: { nextEl: ".product-main__auxiliary-next", prevEl: ".product-main__auxiliary-prev" } });
      $(document).on("click", ".product-main__auxiliary-slider .swiper-slide", function () {
        $(".product-main__auxiliary-slider .swiper-slide").removeClass("active"), $(this).addClass("active");
        for (let s = 0; s < e.slides.length; s++) e.slides[s].classList.contains("active") && $(".product-main__basic-slider")[0].swiper.slideTo(s);
      });
    }
    $(".product-main__basic-slider").length && new Swiper(".product-main__basic-slider", { speed: 400, slidesPerView: 1, spaceBetween: 10, effect: "fade", enable: !1, pagination: { el: ".product-main__basic-slider-pagination", clickable: !0 } }), $(".product-main__params-slider").length && new Swiper(".product-main__params-slider", { speed: 400, slidesPerView: "auto", spaceBetween: 5, navigation: { prevEl: ".product-main__params-prev", nextEl: ".product-main__params-next" } });
  },
]);


// for (let i = 0; i < auxiliarySlider.slides.length; i++) auxiliarySlider.slides[i].classList.contains("active") &&  
//     $(".product-main__basic-slider")[0].swiper.slideTo(i);
  
