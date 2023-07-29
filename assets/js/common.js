!(function (e) {
  var t = {};
  function i(n) {
    if (t[n]) return t[n].exports;
    var r = (t[n] = { i: n, l: !1, exports: {} });
    return e[n].call(r.exports, r, r.exports, i), (r.l = !0), r.exports;
  }
  (i.m = e),
    (i.c = t),
    (i.d = function (e, t, n) {
      i.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n });
    }),
    (i.r = function (e) {
      "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (i.t = function (e, t) {
      if ((1 & t && (e = i(e)), 8 & t)) return e;
      if (4 & t && "object" == typeof e && e && e.__esModule) return e;
      var n = Object.create(null);
      if ((i.r(n), Object.defineProperty(n, "default", { enumerable: !0, value: e }), 2 & t && "string" != typeof e))
        for (var r in e)
          i.d(
            n,
            r,
            function (t) {
              return e[t];
            }.bind(null, r)
          );
      return n;
    }),
    (i.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return i.d(t, "a", t), t;
    }),
    (i.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (i.p = ""),
    i((i.s = 0));
})([
  function (e, t, i) {
    e.exports = i(1);
  },
  function (e, t) {
    function i(e) {
      e.removeAttr("style"), e.removeClass("no-scroll");
    }
    $(".sale-progress_fixed-btn").on("click", function () {
      $(this).parent().find(".sale-progress__bar").slideToggle(300);
    }),
      document.addEventListener("DOMContentLoaded", () => {
        function e() {
          const e = document.createElement("div");
          (e.style.height = "50px"), (e.style.width = "50px"), (e.style.overflowY = "scroll"), document.body.appendChild(e);
          const t = e.offsetWidth - e.clientWidth;
          return e.remove(), t;
        }
        function t() {
          $("body")
            .css({ "padding-right": e() + "px", overflow: "hidden" })
            .addClass("no-scroll");
        }
        $(document).on("change", ".fly-input", function (e) {
          $(this).val().trim() ? $(this).addClass("filled") : ($(this).removeClass("filled"), $(this).val(""));
        }),
          $(document).mouseup(function (e) {
            if ($(".header-menu__dropdown").hasClass("active")) {
              const t = $(".header-menu__drop, .header-menu__dropdown");
              console.log(1),
                t.is(e.target) ||
                  0 !== t.has(e.target).length ||
                  ($(".header-menu__dropdown").removeClass("active"),
                  setTimeout(() => {
                    $(".header-menu__dropdown").hide().removeAttr("style");
                  }, 300));
            }
            if ($(".header-menu__catalog").hasClass("active") && $(".submenu").hasClass("active")) {
              const t = $(".submenu, .header-menu__catalog");
              console.log(1), t.is(e.target) || 0 !== t.has(e.target).length || ($(".header-menu__catalog").removeClass("active"), $(".submenu").removeClass("active"));
            }
            if ($(".bgmodal").is(":visible")) {
              const t = $(".modal, .openmodal");
              console.log(1),
                t.is(e.target) ||
                  0 !== t.has(e.target).length ||
                  ($(".bgmodal").fadeOut(300),
                  $(".modal").fadeOut(300),
                  setTimeout(() => {
                    $(".modal, .bgmodal").removeAttr("style");
                  }, 300));
            }
            if ($(".support-modal").hasClass("active") && !$(".bgmodal").is(":visible")) {
              const t = $(".support-modal, .header-btn__support");
              console.log(1),
                t.is(e.target) ||
                  0 !== t.has(e.target).length ||
                  ($(".bg-overlay").fadeOut(300),
                  $(".support-modal").removeClass("active"),
                  i($("body")),
                  setTimeout(() => {
                    $(".support-modal, .bg-overlay").removeAttr("style");
                  }, 300));
            }
            if ($(".user-modal").hasClass("active") && !$(".bgmodal").is(":visible")) {
              const t = $(".user-modal, .header-btn__user");
              t.is(e.target) ||
                0 !== t.has(e.target).length ||
                ($(".bg-overlay").fadeOut(300),
                $(".user-modal").removeClass("active"),
                i($("body")),
                setTimeout(() => {
                  $(".user-modal, .bg-overlay").removeAttr("style");
                }, 300));
            }
            if ($(".password-restore").hasClass("active") && !$(".bgmodal").is(":visible")) {
              const t = $(".password-restore, .forgot-password");
              t.is(e.target) ||
                0 !== t.has(e.target).length ||
                (console.log("out"),
                $(".bg-overlay").fadeOut(300),
                $(".password-restore").removeClass("active"),
                i($("body")),
                setTimeout(() => {
                  $(".password-restore, .bg-overlay").removeAttr("style");
                }, 300));
            }
            if ($(".user-modal__thanks").hasClass("active") && !$(".bgmodal").is(":visible")) {
              $(".user-modal__thanks").is(e.target) ||
                ($(".bg-overlay").fadeOut(300),
                $(".user-modal__thanks").removeClass("active"),
                i($("body")),
                setTimeout(() => {
                  $(".user-modal, .bg-overlay").removeAttr("style");
                }, 300));
            }
            if ($(".custom-select__main").hasClass("drop-is-active")) {
              console.log(1);
              const t = $(".custom-select__dropdown, .custom-select__main");
              t.is(e.target) || 0 !== t.has(e.target).length || ($(".custom-select__dropdown").removeClass("visible"), $(".custom-select__main").removeClass("drop-is-active"));
            }
            if ($(".catalog-sidebar").hasClass("active")) {
              console.log(1);
              const t = $(".catalog-sidebar, .catalog-sidebar__filter-name");
              t.is(e.target) || 0 !== t.has(e.target).length || ($(".catalog-sidebar").removeClass("active"), $(".bg-overlay").fadeOut(300));
            }
            if ($(".tooltip").hasClass("hovered")) {
              console.log(1);
              const t = $(".tooltip-body, .tooltip-icon");
              t.is(e.target) || 0 !== t.has(e.target).length || $(".tooltip").removeClass("hovered");
            }
          });
        let n,
          r = null,
          o = !1,
          a = !1,
          s = null;
        $(document).on("mouseenter", ".header-menu__catalog", function () {
          const e = $(this);
          (a = !0),
            a && clearTimeout(s),
            window.innerWidth > 1e3 &&
              (clearTimeout(r),
              (r = setTimeout(() => {
                e.addClass("active"), $(".submenu").addClass("active"), $(".menumobile-submenu, .menumobile-submenu__menu, .menumobile-submenu__block, .menumobile, .search, .header-btn__search").removeClass("active");
              }, 300)));
        }),
          $(document).on("mouseleave", ".header-menu__catalog", function (e) {
            (a = !1),
              window.innerWidth < 1e3 ||
                (o || clearTimeout(r),
                (n = setTimeout(() => {
                  o || ($(this).removeClass("active"), $(".submenu").removeClass("active"));
                }, 400)));
          }),
          $(document).on("mouseenter", ".submenu", function (e) {
            (o = !0), clearTimeout(n);
          }),
          $(document).on("mouseleave", ".submenu", function (e) {
            const t = $(this);
            (o = !1),
              window.innerWidth < 1e3 ||
                (s = setTimeout(() => {
                  $(".submenu-menu__item").removeClass("active-link"),
                    $(".submenu-right__wrap").removeClass("_current act").find(".submenu-right__menu, .submenu-right__banner").addClass("_prev"),
                    $(".submenu-right__wrap").removeClass("_current act").find(".submenu-right__menu, .submenu-right__banner").removeClass("_current act"),
                    t.removeClass("active"),
                    $(".header-menu__catalog").removeClass("active"),
                    $(".menumobile-submenu, .menumobile-submenu__menu, .menumobile-submenu__block, .menumobile, .search, .header-btn__search").removeClass("active"),
                    setTimeout(() => {
                      $(".submenu-right__wrap").not(".submenu-right__start-banner").removeClass("_current act").find(".submenu-right__menu, .submenu-right__banner").removeClass("_prev");
                    }, 500),
                    $(".submenu-right__start-banner").addClass("_current act").find(".submenu-right__menu, .submenu-right__banner").addClass("_current");
                }, 300));
          });
        let d = null;
        $(document).on("mouseout", ".submenu-menu__item", function (e) {
          clearTimeout(d), $(this).closest(".submenu-menu").addClass("_hover");
        }),
          $(document).on("mouseover", ".submenu-menu__item", function (e) {
            let t = null;
            d = setTimeout(() => {
              $(this).closest(".submenu-menu").removeClass("_hover");
              const e = $(this).attr("data-menu-id");
              $(this).closest(".submenu-menu").hasClass("_hover") ||
                ($(this).parent().find(".submenu-menu__item").removeClass("active-link"),
                $(this).addClass("active-link"),
                $(".submenu-right__wrap").find(".submenu-right__menu, .submenu-right__banner").removeClass("_prev"),
                $(".submenu-right__wrap.act").find(".submenu-right__menu, .submenu-right__banner").addClass("_prev"),
                $(".submenu-right__wrap").removeClass("_current act").find(".submenu-right__menu, .submenu-right__banner").removeClass("_current"),
                $(`.submenu-right__wrap[data-menu-id=${e}]`).addClass("_current").find(".submenu-right__menu, .submenu-right__banner").addClass("_current"),
                setTimeout(function () {
                  $(`.submenu-right__wrap[data-menu-id=${e}]`).addClass("act");
                }, 50),
                null != t && clearTimeout(t),
                (t = setTimeout(function () {
                  $(".submenu-right__wrap").find(".submenu-right__menu, .submenu-right__banner").removeClass("_prev");
                }, 500)));
            }, 300);
          }),
          $(".header-btn__search").on("click", function () {
            $(this).toggleClass("active"), $(".search").toggleClass("active"), $(".header-menu__mobile-catalog, .menumobile").removeClass("active");
          }),
          $(".openmodal").on("click", function () {
            const e = $(this).attr("data-modal");
            $(".bgmodal").fadeIn(300), $(".modal[data-modal=" + e + "]").fadeIn(300), "call" === e && ($(".support-modal").removeClass("active"), $(".bg-overlay").fadeOut(300), i($("body")));
          }),
          $(document).on("click", ".call-modal .modal-close", function () {
            $(".bg-overlay").fadeOut(300), i($("body"));
          }),
          $(document).on("click", ".header-btn__support, .menumobile-support", function (e) {
            window.innerWidth > 1e3 && $(".bg-overlay").fadeIn(300), $(".support-modal").addClass("active"), t(), window.innerWidth < 1e3 && $(".bg-overlay").css("background", "transparent"), $(".submenu, .search, .header-btn__search, .header-menu__catalog").removeClass("active");
          }),
          $(document).on("click", ".support-modal__title", function () {
            window.innerWidth < 1e3 && ($(".bg-overlay").fadeOut(300), $(".support-modal").removeClass("active"));
          }),
          $(document).on("click", ".support-modal .modal-close", function () {
            $(".support-modal").removeClass("active"), $(".bg-overlay").fadeOut(300), i($("body"));
          }),
          $(document).on("click", ".modal-close", function () {
            $(this).hasClass("support-modal").length || ($(".modal").fadeOut(300), $(".bgmodal").fadeOut(300));
          }),
          $(".header-btn__user").on("click", function (e) {
            window.innerWidth > 1e3 && $(".bg-overlay").fadeIn(300), $(".user-modal").addClass("active"), t(), window.innerWidth < 1e3 && ($(".bg-overlay").css("background", "transparent"), $(".user-modal").css("width", "100%")), $(".submenu, .search, .header-btn__search, .header-menu__catalog, .menumobile, .header-menu__mobile-catalog").removeClass("active");
          }),
          $(document).on("click", ".menumobile-user", function (e) {
            window.innerWidth > 1e3 && $(".bg-overlay").fadeIn(300), $(".user-modal").addClass("active"), t(), window.innerWidth < 1e3 && ($(".bg-overlay").css("background", "transparent"), $(".user-modal").css("width", "100%")), $(".submenu, .search, .header-btn__search, .header-menu__catalog").removeClass("active");
          }),
          $(document).on("click", ".user-modal .modal-close", function () {
            $(".user-modal").removeClass("active"), $(".bg-overlay").fadeOut(300), i($("body"));
          }),
          $(document).on("click", ".user-modal__title", function () {
            window.innerWidth < 1e3 && ($(".bg-overlay").fadeOut(300), $(".user-modal").removeClass("active"), i($("body")));
          }),
          $(document).on("click", ".forgot-password", function (e) {
            $(".user-modal").removeClass("active"), $(".password-restore").addClass("active"), t(), window.innerWidth > 1e3 && $(".bg-overlay").fadeIn(300), window.innerWidth < 1e3 && ($(".bg-overlay").css("background", "transparent"), $(".password-restore").css("width", "100%"));
          }),
          $(document).on("click", ".password-restore .modal-close", function () {
            $(".password-restore").removeClass("active"), $(".bg-overlay").fadeOut(300), i($("body"));
          }),
          $(document).on("click", ".password-restore__title", function () {
            window.innerWidth < 1e3 && ($(".bg-overlay").fadeOut(300), $(".password-restore").removeClass("active"));
          }),
          $(".user-form .custom-radio").on("change", function () {
            $(this).parent().siblings().find("input").prop("checked", ""), console.log("hi"), $(".user-form__radio_fiz input").prop("checked") ? ($(".user-form__registration_fizik").slideDown(300), $(".user-form__registration_jurik").slideUp(300)) : ($(".user-form__registration_fizik").slideUp(300), $(".user-form__registration_jurik").slideDown(300));
          });
        let l = null,
          c = null,
          m = null,
          u = !1,
          _ = !1,
          h = !1;
        $(document).on("mouseenter", ".header-menu__drop", function () {
          const e = $(this);
          (u = !1),
            (_ = !1),
            (h = !0),
            clearTimeout(l),
            clearTimeout(c),
            $(".header-menu__dropdown").not(e.find(".header-menu__dropdown")).removeClass("active"),
            (m = setTimeout(() => {
              $(".header-menu__dropdown").not(e.find(".header-menu__dropdown")).hide();
            }, 300)),
            e.find(".header-menu__dropdown").show(),
            setTimeout(() => {
              e.find(".header-menu__dropdown").addClass("active");
            }, 10);
        }),
          $(document).on("mouseenter", ".header-menu__dropdown", function (e) {
            (u = !0), (_ = !1);
          }),
          $(document).on("mouseleave", ".header-menu__dropdown", function (e) {
            (_ = !0),
              (u = !1),
              (h = !1),
              _ &&
                !u &&
                h &&
                ($(".header-menu__dropdown").removeClass("active"),
                setTimeout(function () {
                  $(".header-menu__dropdown").hide();
                }, 300));
          }),
          $(document).on("mouseleave", ".header-menu__drop", function () {
            clearTimeout(m),
              (l = setTimeout(function () {
                u ||
                  ($(".header-menu__dropdown").removeClass("active"),
                  (c = setTimeout(function () {
                    $(".header-menu__dropdown").hide();
                  }, 300)));
              }, 300));
          }),
          $(".marquee3k").length && Marquee3k.init(),
          $(document).on("blur", ".mailing-input", function (e) {
            $(this).val().trim() ? $(this).closest(".mailing-label").addClass("filled") : ($(this).closest(".mailing-label").removeClass("filled"), $(this).val(""));
          }),
          $(document).on("click resize", ".card-image", function (e) {
            window.innerWidth > 600 && e.preventDefault();
          }),
          $(document).on("click", ".favorite-icon-shadow, .favorite-icon", function () {
            $(this).hasClass("active") ? $(this).removeClass("active") : $(this).addClass("active");
          }),
          $(document).on("click", ".footer-header", function () {
            window.innerWidth < 600 && ($(this).toggleClass("active"), $(this).parent().find(".footer-body").slideToggle(300));
          }),
          $(".header-menu__mobile-catalog").on("click", function () {
            $(this).toggleClass("active"), $(".menumobile").toggleClass("active"), $(this).hasClass("active") ? t() : i($("body")), $(".menumobile-submenu, .menumobile-submenu__menu, .menumobile-submenu__block, .submenu, .search, .header-btn__search, .user-modal, .menumobile-submenu__lvl3, .menumobile-submenu__lvl3-block").removeClass("active"), console.log(1);
          }),
          $(document).on("click", ".menumobile-opensubmenu", function () {
            const e = $(this).attr("data-submenu"),
              t = $(this).text();
            $(this).closest(".menumobile-main").length ? ($(".menumobile-submenu").addClass("active"), $(".menumobile-submenu .menumobile-submenu__block[data-submenu=" + e + "]").addClass("active"), $(".menumobile-submenu .menumobile-submenu__header").text(t)) : $(this).closest(".menumobile-submenu").length && ($(".menumobile-submenu__menu").removeClass("active"), $(".menumobile-submenu__menu .menumobile-submenu__block").removeClass("active"), $(".menumobile-submenu__menu").addClass("active"), $(".menumobile-submenu__menu .menumobile-submenu__block[data-submenu=" + e + "]").addClass("active"), $(".menumobile-submenu__menu .menumobile-submenu__header").text(t));
          }),
          $(document).on("click", ".menumobile-submenu__header", function () {
            $(this).closest(".menumobile-submenu").length ? ($(this).closest(".menumobile-submenu").removeClass("active"), $(this).closest(".menumobile-submenu").find(".menumobile-submenu__block").removeClass("active"), $(".menumobile-submenu__menu").removeClass("active"), $(".menumobile-submenu__menu").find(".menumobile-submenu__block").removeClass("active")) : $(this).closest(".menumobile-submenu__menu").length ? ($(this).closest(".menumobile-submenu__menu").removeClass("active"), $(this).closest(".menumobile-submenu__menu").find(".menumobile-submenu__block").removeClass("active")) : $(this).closest(".menumobile-submenu__lvl3").length && ($(this).closest(".menumobile-submenu__lvl3").removeClass("active"), $(this).closest(".menumobile-submenu__lvl3").find(".menumobile-submenu__lvl3-block").removeClass("active"));
          });
        const f = document.querySelector(".main-category__wrap, .product-main__params-items-nowrap");
        if (f) {
          let e,
            t,
            i = !1;
          f.addEventListener("mousedown", (n) => {
            (i = !0), f.classList.add("active"), (e = n.pageX - f.offsetLeft), (t = f.scrollLeft);
          }),
            f.addEventListener("mouseleave", () => {
              (i = !1), f.classList.remove("active");
            }),
            f.addEventListener("mouseup", () => {
              (i = !1), f.classList.remove("active");
            }),
            f.addEventListener("mousemove", (n) => {
              if (!i) return;
              n.preventDefault();
              const r = 1 * (n.pageX - f.offsetLeft - e);
              f.scrollLeft = t - r;
            });
        }
        let p = 0;
        function v() {
          let e = $(document).scrollTop();
          $(document).scrollTop() > 200 ? ($(".header-top__wrap").addClass("fixed"), $(".submenu, .search, .menumobile").addClass("header-fixed")) : $(document).scrollTop() < 50 && $(".header-top__wrap").removeClass("fixed-show"),
            e > 100 && e > p ? $(".submenu").hasClass("active") || $(".search").hasClass("active") || $(".menumobile").hasClass("active") || $(".header-menu__dropdown").hasClass("active") || ($(".header-top__wrap").addClass("hide"), $(".header-top__wrap").removeClass("fixed-show")) : ($(".header-top__wrap").removeClass("hide"), $(document).scrollTop() > 200 && $(".header-top__wrap").addClass("fixed-show")),
            (p = e),
            $(document).scrollTop() < 100 && ($(".header-top__wrap").removeClass("hide fixed"), $(".header-top").removeAttr("style"), $(".submenu, .search, .menumobile").removeClass("header-fixed")),
            $(".submenu, .search, .header-menu__dropdown").hasClass("active") && $(".header-top__wrap").addClass("fixed-show"),
            $(".header-top__wrap").hasClass("fixed-show") ? $(".submenu").addClass("fixed-show") : $(".submenu").removeClass("fixed-show");
        }
        function g(e) {
          return e.replace(/\D+/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, " ");
        }
        if (
          (v(),
          $(window).on("scroll", function () {
            v();
          }),
          $(document).on("click", ".btn-with-cart", function () {
            const e = $(".counter-input").val();
            $(this).addClass("in-cart"), $(this).find(".btn-with-cart-text ").text("В Корзине"), $(".product-main__params-item.selected").addClass("chosen").attr("data-amount", e);
          }),
          $(document).on("click", ".custom-select__main", function (e) {
            const t = $(this).find(".custom-select__main-input").attr("placeholder");
            if ((console.log($(this).hasClass("drop-is-active")), $(this).hasClass("drop-is-active"))) {
              if ("custom-select__main-input" === e.target.className) return;
              $(this).removeClass("drop-is-active"), $(this).find(".custom-select__main-input").val(t).attr("value", t), $(this).parent().find(".custom-select__dropdown").removeClass("visible");
            } else $(this).addClass("drop-is-active"), $(this).find(".custom-select__main-input").val("").attr("value", ""), $(this).parent().find(".custom-select__dropdown").addClass("visible");
          }),
          $(document).on("click", ".custom-select__dropdown-item", function () {
            const e = $(this).find(".custom-select__dropdown-img img").attr("src"),
              t = $(this).find(".custom-select__dropdown-name").attr("data-color"),
              i = ($(this).find(".custom-select__dropdown-img").attr("data-full-img"), $(this).find(".custom-select__dropdown-img").attr("data-full-img"));
            $(this).closest(".cart-modal__info").find(".cart-modal__slider-img[data-change-img]").attr("src", i), $(this).closest(".custom-select").find(".custom-select__dropdown-item").removeClass("selected"), $(this).addClass("selected"), $(this).closest(".custom-select").find(".custom-select__main-input").val(t).attr("placeholder", t), $(this).closest(".custom-select").find(".custom-select__main-selected").text(t), $(this).closest(".custom-select").find(".custom-select__main-img img").attr("src", e), $(this).closest(".custom-select__dropdown").removeClass("visible"), $(this).closest(".custom-select").find(".custom-select__main").removeClass("drop-is-active");
          }),
          $(document).on("click", ".counter-plus", function () {
            const e = $(this).parent().find(".counter-input"),
              t = parseInt(e.attr("min"));
            let i = parseInt(e.val());
            e.val(++i), parseInt(e.val()) > t && $(this).parent().find(".counter-minus").removeClass("disabled");
          }),
          $(document).on("click", ".counter-minus", function () {
            const e = $(this).parent().find(".counter-input"),
              t = parseInt(e.attr("min"));
            let i = parseInt(e.val());
            i - 1 >= t ? e.val(--i) : e.val(i), parseInt(e.val()) === t && $(this).addClass("disabled");
          }),
          $(document).on("input change", ".counter-input", function () {
            const e = parseInt($(this).attr("min")),
              t = parseInt($(this).val());
            t < 0 && $(this).val(e), t > e ? $(this).parent().find(".counter-minus").removeClass("disabled") : $(this).parent().find(".counter-minus").addClass("disabled");
          }),
          $(".catalog-sidebar__menu-header").on("click", function (e) {
            e.stopPropagation(), $(this).hasClass("active") || ($(".catalog-sidebar__menu-header").removeClass("active"), $(".catalog-sidebar__menu-body").slideUp(300)), $(this).toggleClass("active"), $(this).parent().find(".catalog-sidebar__menu-body").slideToggle(300);
          }),
          $(".catalog-sidebar__filter-range").length)
        ) {
          $(".catalog-sidebar__filter-range-input").ionRangeSlider({
            type: "double",
            skin: "round",
            onChange: function (e) {
              $(".catalog-sidebar__filter-price")
                .find(".catalog-sidebar__filter-input[name=range-minimum]")
                .val(e.from_pretty + " ₽"),
                $(".catalog-sidebar__filter-price")
                  .find(".catalog-sidebar__filter-input[name=range-maximum]")
                  .val(e.to_pretty + " ₽");
            },
          });
          let e = $(".catalog-sidebar__filter-range-input").data("ionRangeSlider");
          $(document).on("input focus change click", ".catalog-sidebar__filter-input", function (e) {
            $(this).val($(this).val().replace(/\D+/g, "")), parseInt($(this).val().replace(/\D+/g, "")) > parseInt($(this).attr("max")) && $(this).val(parseInt($(this).attr("max")));
          }),
            $(document).on("input", ".catalog-sidebar__filter-input", function (t) {
              console.log(parseInt($(this).val())), "range-minimum" == $(this).attr("name") ? e.update({ from: parseInt($(this).val()) }) : "range-maximum" == $(this).attr("name") && e.update({ to: parseInt($(this).val()) });
            }),
            $(document).on("blur", ".catalog-sidebar__filter-input", function (e) {
              const t = g($(this).val());
              $(this).val().length > 0 && $(this).val(t + " ₽"),
                parseInt($(".catalog-sidebar__filter-price").find(".catalog-sidebar__filter-input[name=range-maximum]").val().replace(/\D+/g, "")) < parseInt($(".catalog-sidebar__filter-price").find(".catalog-sidebar__filter-input[name=range-minimum]").val().replace(/\D+/g, "")) &&
                  $(".catalog-sidebar__filter-price")
                    .find(".catalog-sidebar__filter-input[name=range-maximum]")
                    .val(g($(".catalog-sidebar__filter-price").find(".catalog-sidebar__filter-input[name=range-minimum]").val()) + " ₽");
            });
        }
        if ($("select").length) {
          const e = $("select").selectize();
          for (let t = 0; t < e.length; t++) e[t].className.split(" ").includes("catalog-select__sort") && (e[t].selectize.settings.placeholder = "Сортировать");
        }
        function b() {
          document.querySelectorAll(".tooltip").forEach((e) => {
            const t = e.querySelector(".tooltip-body"),
              i = e.querySelector(".tooltip-icon"),
              n = e.querySelector(".tooltip-tail"),
              r = t.getBoundingClientRect(),
              o = n.getBoundingClientRect(),
              a = i.getBoundingClientRect();
            if (window.innerWidth - a.x > r.width + o.width) return e.classList.remove("_reverse");
            var s;
            window.innerWidth - a.x < r.width + o.width && r.right > window.innerWidth && e.classList.add("_reverse"), r.right > window.innerWidth && ((s = t), s.getBoundingClientRect()).left < 0 ? (e.classList.remove("_reverse"), e.classList.add("bottom-fixed"), (t.style.left = -1 * (a.left - 15) + "px"), (n.style.left = a.left - n.getBoundingClientRect().width + "px")) : (e.classList.remove("bottom-fixed"), t.removeAttribute("style"), n.removeAttribute("style"));
          });
        }
        $(document).on("click", ".pagination-item", function (e) {
          $(this).parent().find(".pagination-item").removeClass("current-page"), $(this).addClass("current-page");
        }),
          $(document).on("click", ".catalog-bottom__show", function (e) {
            $(this).parent().find(".catalog-bottom__inner p.hidden").length ? ($(this).parent().find(".catalog-bottom__inner p.hidden").removeClass("hidden").addClass("visible"), $(this).text("Свернуть")) : $(this).parent().find(".catalog-bottom__inner p.visible").length && ($(this).parent().find(".catalog-bottom__inner p.visible").removeClass("visible").addClass("hidden"), $(this).text("Читать полностью"));
          }),
          $(".catalog-sidebar__filter-header").on("click", function (e) {
            e.stopPropagation(), window.innerWidth > 1e3 && ($(this).toggleClass("active"), $(this).parent().find(".catalog-sidebar__filter-body").slideToggle(300));
          }),
          $(window).on("resize", function () {
            $(".catalog-sidebar__filter-header").removeClass("active"), $(".catalog-sidebar__filter-body").removeAttr("style");
          }),
          $(".catalog-top__filter").click(function (e) {
            window.innerWidth < 1e3 && ($(".catalog-sidebar").toggleClass("active"), $(".bg-overlay").fadeToggle(300));
          }),
          $(".catalog-sidebar__filter-name").click(function (e) {
            window.innerWidth < 1e3 && ($(".catalog-sidebar").removeClass("active"), $(".bg-overlay").fadeOut(300));
          }),
          $(document).on("click", ".accordion-header", function () {
            $(this).toggleClass("active"), $(this).parent().find(".accordion-dropdown").slideToggle(300);
          }),
          $(document).on("click", ".product-main__params-item, .product-main__params-img", function () {
            if (!$(this).hasClass("disabled"))
              if (($(this).closest(".product-main__params-wrap").find(".product-main__params-item, .product-main__params-img").removeClass("selected"), $(this).closest(".product-main__params-wrap").find(".product-main__params-selected").text($(this).attr("data-text")), $(this).addClass("selected"), $(this).hasClass("chosen"))) {
                const e = $(this).attr("data-amount");
                $(".btn-with-cart").addClass("in-cart"), $(".btn-with-cart-text").text("В Корзине"), $(".counter-input").val(e);
              } else $(".btn-with-cart").removeClass("in-cart"), $(".btn-with-cart-text").text("В Корзину"), $(".counter-input").val($(".counter-input").attr("min"));
          }),
          $(window).resize(function () {
            window.innerWidth > 600 && b();
          }),
          window.innerWidth > 600 && b();
        let C = null;
        $(document).on("mouseleave", ".tooltip-icon, .tooltip-body", function (e) {
          const t = $(this);
          window.innerWidth > 600 &&
            (C = setTimeout(function () {
              e.relatedTarget.classList.contains("tooltip-body") || e.relatedTarget.classList.contains("tooltip-tail") || t.parent().removeClass("hovered");
            }, 500));
        }),
          $(document).on("mouseenter click", ".tooltip-icon", function (e) {
            $(this).parent().addClass("hovered");
          }),
          $(document).on("mouseenter", ".tooltip-icon, .tooltip-body", function (e) {
            window.innerWidth > 600 && (null !== C ? clearTimeout(C) : (C = null));
          }),
          $(document).on("click", ".tooltip-close", function (e) {
            $(this).closest(".tooltip").removeClass("hovered");
          });
        let w = 0;
        window.innerWidth > 900 &&
          document.addEventListener("scroll", function () {
            const e = document.querySelector(".product-main__sliders");
            if (!e) return;
            const t = e.getBoundingClientRect(),
              i = document.querySelector(".product-main__sliders-wrap"),
              n = i.getBoundingClientRect(),
              r = (document.querySelector(".header-top__wrap").offsetHeight, document.querySelector(".product-main__right")),
              o = (r.getBoundingClientRect(), r.offsetHeight),
              a = window.pageYOffset;
            o !== i.offsetHeight ? (o !== i.offsetHeight && n.top - 60 < 0 && (i.style.top = -1 * t.top + 60 + "px"), w > a && t.top - 60 < 0 && (i.style.top = -1 * t.top + 60 + "px"), (w = a)) : i.removeAttribute("style");
          });
      }),
      document.querySelectorAll(".tabs-wrapper").forEach((e) => {
        let t = e.querySelectorAll(".tabs .tab"),
          i = e.querySelectorAll(".tabs-items .item");
        for (let e = 0; e < t.length; e++)
          t[0].click(),
            (t[e].onclick = () => {
              t.forEach((e) => {
                e.classList.remove("on");
              }),
                i.forEach((e) => {
                  e.classList.remove("on");
                }),
                t[e].classList.add("on"),
                i[e].classList.add("on");
            });
      }),
      $(".orders__item-header").on("click", function (e) {
        e.stopPropagation(), $(this).hasClass("active") || ($(this).removeClass("active"), $(this).parent().find(".orders__item-body").slideUp(300)), $(this).toggleClass("active"), $(this).parent().find(".orders__item-body").slideToggle(300);
      }),
      $(".orders-hide").on("click", function (e) {
        e.stopPropagation(), $(".orders__item-header").removeClass("active"), $(this).closest(".orders__item-body").slideUp(300);
      }),
      $(window).width() < 740 &&
        $(window).resize(function () {
          $(".orders-reorder").parent().css({ "flex-direction": "row-reverse", "align-items": "center" });
        }),
      $(function () {
        $(".copy-btn").on("click", function (e) {
          e.stopPropagation();
          const t = $(this).parent();
          var i, n;
          (i = t), (n = $("<input>")), $("body").append(n), n.val($(i).text()).select(), document.execCommand("copy"), n.remove(), $(this).parent().next().fadeIn("slow");
        });
      });
    $(".pagination-block").prev().children().length > 10 && $(".pagination-block").css({ display: "flex" }),
      $(document).ready(function () {
        $(".counter__btn").hasClass("disabled")
          ? $('input[type="number"]').attr("disabled", !0).addClass("disabled").val("0")
          : ($(".counter__btn-minus").click(function () {
              var e = $(this).parent().find("input"),
                t = parseInt(e.val()) - 1;
              return (t = t < 1 ? 1 : t), e.val(t), e.change(), !1;
            }),
            $(".counter__btn-plus").click(function () {
              var e = $(this).parent().find("input");
              return e.val(parseInt(e.val()) + 1), e.change(), !1;
            }));
      }),
      $(".check__accordeon-header").on("click", function (e) {
        e.stopPropagation(), $(this).hasClass("active") || ($(this).removeClass("active"), $(this).parent().find(".check__accordeon-body").slideUp(300).removeClass("active")), $(this).toggleClass("active"), $(this).parent().find(".check__accordeon-body").slideToggle(300).toggleClass("active");
      }),
      $(".breadcrumbs-wrap").children().length > 3 && $(".breadcrumbs-return").css({ display: "block" }),
      $(".profile-item__input_date").inputmask("datetime", { inputFormat: "dd.mm.yyyy", placeholder: "дд.мм.гггг", alias: "tt.mm.jjjj" }),
      $(window).width() < 600 && ($(".cart-clean").text("Очистить"), $(".cart-amount__txt").text("В корзине:")),
      $(window).resize(function () {
        $(window).width() < 600 ? ($(".cart-clean").text("Очистить"), $(".cart-amount__txt").text("В корзине:")) : $(window).width() > 600 && ($(".cart-clean").text("Очистить корзину"), $(".cart-amount__txt").text("В вашей корзине:"));
      }),
      $(".cart-warning__close").on("click", function () {
        $(this).parent().slideUp(300);
      }),
      $(".cart-clean").on("click", function () {
        $(".cart-content").remove(), $(".cart-empty").slideDown(300);
      });
    var n = $(".orders-list-table").children().length;
    $(window).width() >= 600 ? (n > 3 ? $(".sale-progress__grid").css({ display: "grid" }) : $(".sale-progress__grid").css({ display: "none" })) : $(".sale-progress__grid").css({ display: "grid !important" }),
      $(".cart-amount__number").append(n),
      $(".orders-list-item__delete").on("click", function () {
        $(this).parent().remove();
        var e = $(".orders-list-table").children().length;
        if (($(".cart-amount__number").text(e), 0 == e && ($(".cart-content").remove(), $(".cart-empty").slideDown(300)), $(window).width() >= 600 ? (e > 3 ? $(".sale-progress__grid").css({ display: "grid" }) : $(".sale-progress__grid").css({ display: "none" })) : $(".sale-progress__grid").css({ display: "grid !important" }), e >= 11 && e <= 19)) $(".cart-amount__case").text("позиций");
        else {
          var t = e.toString().split("").pop();
          1 == t ? $(".cart-amount__case").text("позиция") : 2 == t || 3 == t || 4 == t ? $(".cart-amount__case").text("позиции") : (5 != t && 6 != t && 7 != t && 8 != t && 9 != t && 0 != t) || $(".cart-amount__case").text("позиций");
        }
      }),
      $(".user-password").on("click", function () {
        $(this).toggleClass("act"), $(this).hasClass("act") ? $(this).parent().find("input").attr("type", "text") : $(this).parent().find("input").attr("type", "password");
      }),
      $(document).on("click", ".user-modal__thanks .modal-close", function () {
        $(".user-modal__thanks").removeClass("active"), $(".bg-overlay").fadeOut(300), i($("body"));
      }),
      $(document).on("submit", ".entering-form", function (e) {
        e.preventDefault();
        const t = $(this),
          n = new FormData();
        let r = t.find("button"),
          o = t.find("button").html(),
          c = !1,
          m = 0;
        const u = t.find(".validate-field").length;
        t.find(".error").length && t.find(".error").remove();
        const _ = document.createElement("span");
        (_.className = "error"),
          t.find(".validate-field").each(function () {
            "phone" === $(this).attr("name") && l($(this).val()).length < 10 && (m--, $(this).addClass("validate-error"), (_.textContent = "Некорректный номер телефона"), !t.find(".error").length && r.before(_)), $(this).val() ? m++ : ($(this).addClass("validate-error"), (_.textContent = "Пожалуйста, заполните все обязательные поля"), !t.find(".error").length && r.before(_)), m === u && (c = !0);
          }),
          c &&
            (t.find(".validate-field").removeClass("validate-error"),
            t
              .find("input, textarea")
              .not("input[type=checkbox]")
              .each(function () {
                $(this).val() && n.append($(this).attr("name"), $(this).val());
              }),
            a(r),
            d("https://jsonplaceholder.typicode.com/users", n)
              .then((e) => e.json())
              .then((e) => {
                s(r, o), $(".bg-overlay").fadeOut(300), $(".user-modal").removeClass("active"), i($("body")), t.trigger("reset"), t.find("input").removeClass("filled");
              })
              .catch((e) => console.log(e)));
      }),
      $(document).on("submit", ".user-form__registration_fizik", function (e) {
        e.preventDefault();
        const t = $(this),
          n = t.find("button"),
          o = t.find("button").html(),
          c = t.find("input[name=agreement]");
        (validationCheckbox = !1), t.find(".error").remove(), t.find(".error_exist").remove();
        const m = t.find(".validate-field");
        let u = !1,
          _ = 0,
          h = m.length,
          f = !1;
        if (
          (m.each(function () {
            if (($(this).val() ? ("email" !== $(this).attr("type") || r.test($(this).val()) ? ("phone" === $(this).attr("name") && l($(this).val()).length < 10 ? ($(this).parent().addClass("validate-error"), !t.find(".error").length && n.after('<div class="error">Некорректный номер телефона</div>'), (u = !1), _--) : _++) : ($(this).parent().addClass("validate-error"), !t.find(".error").length && n.after('<div class="error">Некорректная почта</div>'), (u = !1), _--)) : ($(this).parent().addClass("validate-error"), !t.find(".error").length && n.after('<div class="error">Пожалуйста, заполните все обязательные поля</div>'), (u = !1), _--), _ >= h && (u = !0), "email" === $(this).attr("type"))) {
              "test@test.ru" === $(this).val() ? ($(this).parent().append('<div class="error_exist">Аккаунт с таким e-mail уже существует</div>'), (f = !1)) : ($(".error_exist").remove(), (f = !0));
            }
          }),
          c.length && !c.is(":checked") ? (c.closest(".custom-checkbox").addClass("validate-error"), (validationCheckbox = !1)) : (c.closest(".custom-checkbox").removeClass("validate-error"), (validationCheckbox = !0)),
          u && validationCheckbox && f)
        ) {
          const r = new FormData(e.target);
          a(n),
            d("https://jsonplaceholder.typicode.com/users", r)
              .then((e) => e.json())
              .then((e) => {
                s(n, o), $(".user-modal__thanks").addClass("active"), $(".user-modal").removeClass("active"), i($("body")), t.trigger("reset"), $(".fly-input").removeClass("filled").parent().removeClass("focused"), $(".error_exist").remove();
              })
              .catch((e) => console.log(e));
        }
      }),
      $(document).on("submit", ".user-form__registration_jurik", function (e) {
        e.preventDefault();
        const t = $(this),
          n = t.find("button"),
          o = t.find("button").html(),
          c = t.find("input[name=agreement]");
        (validationCheckbox = !1), t.find(".error").remove(), t.find(".error_exist").remove();
        const m = t.find(".validate-field");
        let u = !1,
          _ = 0,
          h = m.length,
          f = !1;
        if (
          (m.each(function () {
            if (($(this).val() ? ("email" !== $(this).attr("type") || r.test($(this).val()) ? ("phone" === $(this).attr("name") && l($(this).val()).length < 10 ? ($(this).parent().addClass("validate-error"), !t.find(".error").length && n.after('<div class="error">Некорректный номер телефона</div>'), (u = !1), _--) : _++) : ($(this).parent().addClass("validate-error"), !t.find(".error").length && n.after('<div class="error">Некорректная почта</div>'), (u = !1), _--)) : ($(this).parent().addClass("validate-error"), !t.find(".error").length && n.after('<div class="error">Пожалуйста, заполните все обязательные поля</div>'), (u = !1), _--), _ >= h && (u = !0), "email" === $(this).attr("type"))) {
              "test@test.ru" === $(this).val() ? ($(this).parent().append('<div class="error_exist">Аккаунт с таким e-mail уже существует</div>'), (f = !1)) : ($(".error_exist").remove(), (f = !0));
            }
          }),
          c.length && !c.is(":checked") ? (c.closest(".custom-checkbox").addClass("validate-error"), (validationCheckbox = !1)) : (c.closest(".custom-checkbox").removeClass("validate-error"), (validationCheckbox = !0)),
          u && validationCheckbox && f)
        ) {
          const r = new FormData(e.target);
          a(n),
            d("https://jsonplaceholder.typicode.com/users", r)
              .then((e) => e.json())
              .then((e) => {
                s(n, o), $(".user-modal__thanks").addClass("active"), $(".user-modal").removeClass("active"), i($("body")), t.trigger("reset"), $(".fly-input").removeClass("filled").parent().removeClass("focused"), $(".error_exist").remove();
              })
              .catch((e) => console.log(e));
        }
      }),
      $(".ordering__field_payer .global__radio-wrap .custom-radio").on("click", function () {
        $(this).parent().siblings().find("input").prop("checked", ""), $(".global__radio_jur input").prop("checked") ? ($(".ordering__row_jur").show().css("display", "grid"), $(".ordering__row_fiz").hide().find(".formerror").removeClass("formerror"), $(".ordering__row_fiz").find("input").val("")) : ($(".ordering__row_fiz").show().css("display", "grid"), $(".ordering__row_jur").hide().find(".formerror").removeClass("formerror"), $(".ordering__row_jur").find("input").val(""));
      });
    let r = /^[A-Z0-9._%+-]+@([A-Z0-9-]+\.)+[A-Z]{2,6}$/i;
    $(".check-pay").click(function (e) {
      e.preventDefault();
      const t = $(".ordering__form"),
        i = t.find("input[name=payer]:checked"),
        n = t.find("input[name=delivery-method]:checked");
      var r = $(".check-pay");
      let o = !1;
      const a = new FormData();
      if (
        (t.find(".ordering__item").each(function () {
          const e = $(this);
          "user-data" === e.attr("data-item")
            ? (e
                .find(".ordering__row_city .ordering__input")
                .not(".not-required")
                .each(function () {
                  $(this).val() ? (o = !0) : ($(this).parent().addClass("formerror"), (o = !1));
                }),
              i.closest(".global__radio_fiz").length
                ? e
                    .find(".ordering__row_fiz .ordering__input")
                    .not(".not-required")
                    .each(function () {
                      $(this).val() ? (o = !0) : ($(this).parent().addClass("formerror"), (o = !1));
                    })
                : i.closest(".global__radio_jur").length &&
                  e
                    .find(".ordering__row_jur .ordering__input")
                    .not(".not-required")
                    .each(function () {
                      $(this).val() ? (o = !0) : ($(this).parent().addClass("formerror"), (o = !1));
                    }))
            : "delivery-data" === e.attr("data-item") &&
              n.closest(".ordering__delivery-item_courier") &&
              e
                .find(".ordering__input")
                .not(".not-required")
                .each(function () {
                  $(this).val() ? (o = !0) : ($(this).parent().addClass("formerror"), (o = !1));
                });
        }),
        o && !r.hasClass("disabled"))
      ) {
        t.find("input, textarea").each(function () {
          (("text" === $(this).attr("type") && $(this).val().length) || ("radio" === $(this).attr("type") && $(this).is(":checked"))) && a.append($(this).attr("name"), $(this).val());
        }),
          r.removeAttr("style");
        var s = r.html();
        r
          .addClass("disabled")
          .css("width", r.outerWidth() + "px")
          .css("height", r.outerHeight() + "px")
          .html('<div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>'),
          fetch("https://jsonplaceholder.typicode.com/posts", { method: "POST", body: a })
            .then((e) => e.json())
            .then((e) => {
              $(".ordering__form")[0].reset(), r.removeClass("disable").html(s), $(".ordering").slideUp(300), $(".ordering-success").slideDown(300);
            })
            .catch((e) => {
              $(".ordering__form").find(".ordering__form__error").text("Неизвестная ошибка").show(), r.removeClass("disable").html(s);
            });
      }
    }),
      $(".ordering__input").on("focus", function () {
        $(this).parent().removeClass("formerror");
      }),
      $(".ordering__button").click(function () {
        let e = !1,
          t = !1,
          i = !1;
        const n = $(this);
        let r = $(this).closest(".ordering__item"),
          o = $(this).closest(".ordering__row"),
          a = $(this).closest(".ordering__item-inner"),
          s = parseInt($(this).closest(".ordering__item").attr("data-step"));
        if (
          (a
            .find(".ordering__row_city")
            .find(".ordering__input")
            .not(".not-required")
            .each(function () {
              $(this).val() ? (i = !0) : ($(this).parent().addClass("formerror"), (i = !1));
            }),
          1 === s)
        ) {
          if (
            (o
              .find(".ordering__input")
              .not(".not-required")
              .each(function () {
                $(this).val() ? (e = !0) : ($(this).parent().addClass("formerror"), (e = !1));
              }),
            !e)
          )
            return;
          const t = $('.ordering__field_payer input[type="radio"]:checked').val();
          if (
            ($(".ordering__row_fiz").is(":visible")
              ? (r.find(".ordering__data-field_name").text("" + ($("#order-name").val() + " " + $("#order-surname").val())), r.find(".ordering__data-field_phone").text("" + $("#order-phone").val()), r.find(".ordering__data-field_email").text("" + $("#order-email").val()), r.find(".ordering__data-field_city").text("" + $("#order-city").val()), $(".ordering__payment-item_fiz").show(), $(".ordering__payment-item_jur").hide(), $(".ordering__data-field_company").parent().hide(), $(".ordering__data-field_jur-address").parent().hide(), $(".ordering__data-field_inn").parent().hide())
              : $(".ordering__row_jur").is(":visible") && (r.find(".ordering__data-field_name").text("" + ($("#order-name2").val() + " " + $("#order-surname2").val())), r.find(".ordering__data-field_phone").text("" + $("#order-phone2").val()), r.find(".ordering__data-field_email").text("" + $("#order-email2").val()), r.find(".ordering__data-field_city").text("" + $("#order-city").val()), r.find(".ordering__data-field_company").text("" + $("#order-company").val()), r.find(".ordering__data-field_jur-address").text("" + $("#order-jur-address").val()), r.find(".ordering__data-field_inn").text("" + $("#order-inn").val()), $(".ordering__payment-item_fiz").hide(), $(".ordering__payment-item_jur").show(), $(".ordering__data-field_company").parent().show(), $(".ordering__data-field_jur-address").parent().show(), $(".ordering__data-field_inn").parent().show()),
            r.find(".ordering__data-field_payer").text(t),
            !i)
          )
            return;
        } else if (2 === s) {
          if (
            (a.find('input[type="radio"]:checked').closest(".ordering__delivery-item").hasClass("ordering__delivery-item_courier")
              ? $(".ordering__address-row")
                  .find(".ordering__input")
                  .not(".not-required")
                  .each(function () {
                    $(this).val() ? (t = !0) : ($(this).parent().addClass("formerror"), (t = !1));
                  })
              : (t = !n.hasClass("disabled")),
            !t)
          )
            return;
          const e = $(".ordering__delivery-details-method").text(),
            i = $(".ordering__delivery-details-img img").attr("src"),
            o = $(".ordering__delivery-details-term span").text(),
            s = $(".ordering__delivery-details-price span").text(),
            d = $(".ordering__delivery-details-working-hours span").text(),
            l = $(".ordering__delivery-details-phone span").text();
          r.find(".ordering__data-field_delivery-img img").attr("src", i), r.find(".ordering__data-field_delivery").text(e), r.find(".ordering__data-field_address").text(`\n\t\t\t${$("#order-street").val() ? $("#order-street").val() + "," : " "}\n\t\t\t${$("#order-house").val() ? ("дом " + $("#order-house").val()).trim() : " "}\n\t\t\t${$("#order-office").val() ? (", корп. " + $("#order-office").val()).trim() : " "}`), $(".ordering__data-field_term").text(o), $(".ordering__data-field_price").text(s), $(".ordering__data-field_working-hours").text(d), $(".ordering__data-field_phone").text(l);
          const c = $(".date_picker").val(),
            m = $(".time_picker").val();
          r.find(".ordering__data-field_date").text(c), r.find(".ordering__data-field_time").text(m), r.find(".ordering__data-field_address").text("Чебоксары, ул. Дзержинского, 29");
        } else if (3 === s)
          if ($(".ordering__payment-item_fiz").is(":visible")) {
            const e = $(".ordering__payment-item_fiz .ordering__payment-method").text();
            $(".ordering__data-field_payment").text(e);
          } else if ($(".ordering__payment-item_jur").is(":visible")) {
            const e = $(".ordering__payment-item_jur .ordering__payment-method").text();
            $(".ordering__data-field_payment").text(e);
          }
        r.find(".ordering__item-wrap").addClass("opacity").slideUp(300),
          $(".ordering__item[data-step=" + ++s + "]")
            .find(".ordering__item-wrap")
            .removeClass("opacity")
            .slideDown(300),
          r.find(".ordering__edit-form").fadeIn(200).css("display", "flex"),
          r.find(".ordering__data").slideDown(300),
          r.find(".ordering__title").addClass("ready"),
          r.find(".ordering__subtitle").slideUp(350),
          setTimeout(function () {
            r.find(".ordering__data").removeClass("opacity");
          }, 0);
      }),
      $(".ordering__delivery-item").click(function () {
        const e = $(this).closest(".ordering__item-inner").find(".ordering__button"),
          t = $(this).attr("data-radio");
        $(this).parent().find(".ordering__delivery-item").removeClass("act"),
          $(this).addClass("act").find("input").prop("checked", "true"),
          $(this)
            .closest(".ordering__form")
            .find(".ordering__item[data-radio=" + t + "]")
            .show();
        const i = $(this).find(".ordering__delivery-method").text(),
          n = $(this).find(".ordering__delivery-method span").text(),
          r = $(this).find(".ordering__delivery-img img").attr("src"),
          o = $(this).find(".ordering__delivery-price").text();
        $(".ordering__delivery-details-address").text();
        $(".ordering__delivery-details-method").text(i),
          $(".ordering__delivery-details-img img").attr("src", r),
          $(".ordering__delivery-details-price span").text(o),
          $(this).hasClass("ordering__delivery-item_courier")
            ? (e.removeClass("disabled").removeAttr("disabled"), $(".ordering__data-field_working-hours").parent().hide(), $(".ordering__data-field_phone").parent().hide(), $(".ordering__delivery-details-term").show(), $(".ordering__delivery-details-price").show(), $(".ordering__data-field_date").parent().show(), $(".ordering__data-field_time").parent().show(), $(".ordering__delivery-details-point").hide(), $(".ordering__address").show(), $(".choose-point").hide(), $(".ordering__delivery-details-address").text("Доставка до двери"), $(".ordering__delivery-details-comment").hide(), $(".ordering__delivery-details-working-hours").hide(), $(".ordering__delivery-details-phone").hide(), $(".ordering__delivery-details-map").hide())
            : $(this).hasClass("ordering__delivery-item_picking-up")
            ? (e.removeClass("disabled").removeAttr("disabled"), $(".ordering__delivery-details-point").hide(), $(".ordering__data-field_date").parent().hide(), $(".ordering__data-field_time").parent().hide(), $(".ordering__data-field_price, .ordering__data-field_term").parent().hide(), $(".ordering__address").hide(), $(".choose-point").hide(), $(".ordering__delivery-details-term").hide(), $(".ordering__delivery-details-price").hide(), $(".ordering__delivery-details-address").text("Чебоксары, ул. Дзержинского, 29"), $(".ordering__delivery-details-comment").show(), $(".ordering__delivery-details-working-hours").show(), $(".ordering__delivery-details-phone").show(), $(".ordering__delivery-details-map").show().css("display", "flex"))
            : $(this).hasClass("ordering__delivery-item_pochta")
            ? (e.addClass("disabled").attr("disabled", "disabled"), $(".ordering__delivery-details-comment").hide(), $(".ordering__address").hide(), $(".ordering__delivery-details-map").hide(), $(".choose-point").show(), $(".ordering__delivery-details-point").show(), $(".ordering__delivery-details-working-hours").show(), $(".ordering__delivery-details-price").show(), $(".ordering__delivery-details-term").show(), $(".ordering__delivery-details-address").text("Доставка до отделения Почты России"))
            : (e.addClass("disabled").attr("disabled", "disabled"), $(".ordering__delivery-details-comment").hide(), $(".ordering__delivery-details-point").show(), $(".ordering__delivery-details-working-hours").show(), $(".ordering__delivery-details-phone").show(), $(".ordering__delivery-details-working").show(), $(".ordering__data-field_working-hours").parent().show(), $(".ordering__data-field_phone").parent().show(), $(".ordering__data-field_date").parent().hide(), $(".ordering__data-field_time").parent().hide(), $(".ordering__address").hide(), $(".ordering__delivery-details-map").hide(), $(".choose-point").show(), $(".ordering__delivery-details-price").show(), $(".ordering__delivery-details-term").show(), $(".ordering__delivery-details-address").text("Доставка до пункта самовывоза " + n), $(".ordering__data-field_working-hours").text());
      }),
      $(".ordering__item-top_header").on("click", function (e) {
        e.stopPropagation(), $(this).hasClass("active") || ($(this).removeClass("active"), $(this).parent().find(".ordering__item-wrap_dropdown").slideUp(300)), $(this).toggleClass("active"), $(this).parent().find(".ordering__item-wrap_dropdown").slideToggle(300);
      }),
      $(".ordering__payment-item").click(function () {
        $(this).addClass("act").find("input").prop("checked", "true");
      }),
      $(".ordering__edit-form").click(function () {
        $(this).closest(".ordering__item").find(".ordering__data").addClass("opacity").slideUp(300),
          $(this).hide(),
          $(this).closest(".ordering__item").find(".ordering__title").removeClass("ready"),
          setTimeout(() => {
            $(this).closest(".ordering__item").find(".ordering__subtitle").slideDown(250), $(this).closest(".ordering__item").find(".ordering__item-wrap").removeClass("opacity").slideDown(300), $(this).closest(".ordering__item").find(".ordering__title-num").removeClass("saved");
          }, 250);
      }),
      $(".setting-info__template-item").click(function () {
        $(this).find("input[type=radio]").prop("checked", !0);
      }),
      $(document).on("input keyup", "input[data-numeric]", function (e) {
        $(this).val($(this).val().replace(/\D/, ""));
      }),
      void 0 !== $.datetimepicker && $.datetimepicker.setLocale("ru"),
      jQuery(".date_picker").each(function () {
        $(this).datetimepicker({ format: "d.m.Y", timepicker: !1, minDate: new Date() });
      }),
      jQuery(".time_picker").each(function () {
        $(this).datetimepicker({ datepicker: !1, format: "H:i", minDate: new Date() });
      }),
      $(window).width() < 600 && $(".ordering__edit-form").text(""),
      $(".faq-item-header").on("click", function (e) {
        e.stopPropagation(), $(this).hasClass("active") || ($(this).removeClass("active"), $(this).parent().find(".faq-item-dropdown").slideUp(300), $(this).parent().removeClass("active")), $(this).toggleClass("active"), $(this).parent().prev().toggleClass("active_above"), $(this).parent().find(".faq-item-dropdown").slideToggle(300), $(this).parent().toggleClass("active");
      }),
      $(".brands-nav-item, .brands-nav-mobile-item").on("click", function () {
        $(this).addClass("active").siblings().removeClass("active");
      }),
      $("body").on("click", '[href*="#"]', function (e) {
        $(this);
        console.log($(this.hash)),
          $("html,body")
            .stop()
            .animate({ scrollTop: $(this.hash).offset().top - 100 }, 1e3),
          e.preventDefault();
      }),
      $(".new-password__input-icon").on("click", function () {
        $(this).toggleClass("act"), $(this).hasClass("act") ? $(this).prev().attr("type", "text") : $(this).prev().attr("type", "password");
      });
    $(".profile-main")
      .find(".card-favorite")
      .on("click", function () {
        $(this).closest(".catalog-card").remove();
        0 == $(".catalog-goods").children().length && $(".profile-main__nogoods").slideDown(300);
      });
    function o(e = "", t = "") {
      e.length && $(".success-modal").find(".success-modal__title").text(e),
        t.length ? ($(".success-modal").find(".success-modal__subtitle").show(), $(".success-modal").find(".success-modal__subtitle").text(t)) : $(".success-modal").find(".success-modal__subtitle").hide(),
        $(".bgmodal").is(":visible") || $(".bgmodal").fadeIn(300),
        $(".modal").fadeOut(300),
        setTimeout(() => {
          $(".modal").removeAttr("style").removeClass("active"), $(".modal, .modal > *").removeAttr("style").removeClass("active"), $(".success-modal").addClass("active").fadeIn(300);
        }, 310);
    }
    function a(e) {
      e.attr("disabled", "disabled")
        .css("width", e.outerWidth() + "px")
        .css("height", e.outerHeight() + "px")
        .html('<div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>');
    }
    function s(e, t) {
      e.removeAttr("disabled").removeAttr("style").html(t);
    }
    function d(e, t, i = {}) {
      return fetch(e, { method: "POST", body: t, headers: i });
    }
    function l(e) {
      return e.replace(/\D+/g, "");
    }
    0 == $(".orders__items").children().length && $(".orders__items-empty").slideDown(300),
      $(".header-menu__dropdown-link").each(function () {
        "Сообщества" === $(this).text() && $(this).addClass("header-menu__dropdown-link_smile");
      }),
      $(document).on("submit", ".main-mailing__form", function (e) {
        e.preventDefault();
        const t = $(this),
          i = t.find("button"),
          n = t.find("button").html(),
          l = t.find("input[name=agreement]");
        let c = !1,
          m = !1;
        if ((t.find("input[type=email]").length && !r.test(t.find("input[type=email]").val()) ? (t.find("input[type=email]").addClass("validate-error"), (c = !1)) : (t.find("input[type=email]").removeClass("validate-error"), (c = !0)), l.length && !l.is(":checked") ? (l.closest(".custom-checkbox").addClass("validate-error"), (m = !1)) : (l.closest(".custom-checkbox").removeClass("validate-error"), (m = !0)), c && m)) {
          const r = new FormData(e.target);
          a(i),
            d("https://jsonplaceholder.typicode.com/users", r)
              .then((e) => e.json())
              .then((e) => {
                s(i, n), o("Спасибо за подписку на рекомендации!", "Теперь вы будете в курсе акций и новинок"), t.trigger("reset");
              })
              .catch((e) => console.log(e));
        }
      }),
      $(document).on("submit", ".footer-mail__form", function (e) {
        e.preventDefault();
        const t = $(this),
          i = t.find("button"),
          n = t.find("button").html();
        let l = !1;
        if ((t.find("input[type=email]").length && !r.test(t.find("input[type=email]").val()) ? (t.find("input[type=email]").addClass("validate-error"), (l = !1)) : (t.find("input[type=email]").removeClass("validate-error"), (l = !0)), l)) {
          const r = new FormData(e.target);
          a(i),
            d("https://jsonplaceholder.typicode.com/users", r)
              .then((e) => e.json())
              .then((e) => {
                s(i, n), o("Спасибо за подписку на рассылку!", "Теперь вы не пропутсите ничего важного"), t.trigger("reset");
              })
              .catch((e) => console.log(e));
        }
      }),
      $(document).on("click", ".check__form_promo-btn", function () {
        const e = $(this),
          t = e.parent(),
          i = e.closest(".check__form_promo"),
          n = t.find("input"),
          r = n.val();
        let o = new FormData();
        const a = document.createElement("span");
        (a.className = "error"),
          (a.textContent = "Введите промокод"),
          r
            ? (o.append("code", r.trim()),
              d("https://jsonplaceholder.typicode.com/users", o)
                .then((e) => e.text())
                .then((e) => {
                  $(".check__form_warning").length && $(".check__form_warning").remove(),
                    i.find(".check__form_default").length && i.find(".check__form_default").remove(),
                    "wrong" === r
                      ? (function (e) {
                          const t = document.createElement("div");
                          (t.className = "check__form_warning"), (t.textContent = e), $(".check__form_promo").append(t).append('<a href="/" class="check__form_warning-link">Подробнее</a>');
                        })("Промокод не может быть применен")
                      : (function (e) {
                          const t = document.createElement("div"),
                            i = document.createElement("div"),
                            n = document.createElement("span"),
                            r = document.createElement("div"),
                            o = document.createElement("div");
                          (t.className = "check__form_helper"), (i.className = "check__form_code"), (o.className = "check__form-cancel-promo"), (n.textContent = e), (r.textContent = " применен"), (o.textContent = "Отмена"), i.append(n), i.append(r), t.appendChild(i), t.appendChild(o), $(".check__form_promo").append(t), $(".check__form_warning-link").remove();
                        })(r),
                    n.val("");
                }))
            : (!i.find(".error").length && i.append(a), n.addClass("validate-error"));
      }),
      $(document).on("click", ".check__form-cancel-promo", function () {
        if (($(this).closest(".check__form_helper").remove(), !$(".check__form_promo").find(".check__form_helper").length)) {
          const e = document.createElement("div");
          (e.className = "check__form_default"), (e.textContent = "Введите промокод"), $(".check__form_promo").find(".check__form-wrap").after(e);
        }
      }),
      $(document).on("click", ".check__form_points-btn", function () {
        const e = $(this),
          t = e.parent(),
          i = e.closest(".check__form_points"),
          n = t.find("input"),
          r = n.val();
        let o = new FormData();
        const a = document.createElement("span"),
          s = i.find(".check__form_points-amount span").text();
        (a.className = "error"),
          (a.textContent = "Введите промокод"),
          r
            ? r <= s
              ? (o.append("code", r.trim()),
                d("https://jsonplaceholder.typicode.com/users", o)
                  .then((e) => e.text())
                  .then((e) => {
                    $(".check__form_points-amount").hide(),
                      $(".check__form_warning").length && $(".check__form_warning").remove(),
                      i.find(".check__form_default").length
                        ? i.find(".check__form_default").remove()
                        : (function (e) {
                            const t = document.createElement("div"),
                              i = document.createElement("div"),
                              n = document.createElement("span"),
                              r = document.createElement("div"),
                              o = document.createElement("div");
                            (t.className = "check__form_helper"), (i.className = "check__form_code"), (o.className = "check__form-cancel-points"), (n.textContent = e), (r.textContent = "Списано "), r.append(n), r.append("баллов"), (o.textContent = "Отмена"), i.append(r), t.appendChild(i), t.appendChild(o), $(".check__form_points").append(t);
                          })(r),
                      n.val("");
                  }))
              : n.val(s)
            : (!i.find(".error").length && i.append(a), n.addClass("validate-error"));
      }),
      $(document).on("click", ".check__form-cancel-points", function () {
        if (($(this).closest(".check__form_helper").remove(), !$(".check__form_promo").find(".check__form_helper").length)) {
          const e = document.createElement("div");
          (e.className = "check__form_default"), $(".check__form_promo").find(".check__form-wrap").after(e), $(".check__form_points-amount").slideDown(300);
        }
      }),
      $(document).on("submit", ".call-modal__form", function (e) {
        e.preventDefault();
        const t = $(this),
          i = new FormData();
        let n = t.find(".call-modal__submit"),
          r = t.find(".call-modal__submit").html();
        const c = t.find("input[name=agreement]");
        let m = !1,
          u = !1,
          _ = 0;
        const h = t.find(".validate-field").length;
        t.find(".error").length && t.find(".error").remove();
        const f = document.createElement("span");
        (f.className = "error"),
          t.find(".validate-field").each(function () {
            "phone" === $(this).attr("name") && l($(this).val()).length < 10 && (_--, $(this).addClass("validate-error"), (f.textContent = "Некорректный номер телефона"), !t.find(".error").length && n.before(f)), $(this).val() ? _++ : ($(this).addClass("validate-error"), (f.textContent = "Пожалуйста, заполните все обязательные поля"), !t.find(".error").length && n.before(f)), _ === h && (m = !0);
          }),
          c.length && !c.is(":checked") ? (c.closest(".custom-checkbox").addClass("validate-error"), (u = !1)) : (c.closest(".custom-checkbox").removeClass("validate-error"), (u = !0)),
          m &&
            u &&
            (t.find(".validate-field").removeClass("validate-error"),
            t
              .find("input, textarea")
              .not("input[type=checkbox]")
              .each(function () {
                $(this).val() && i.append($(this).attr("name"), $(this).val());
              }),
            a(n),
            d("https://jsonplaceholder.typicode.com/users", i)
              .then((e) => e.json())
              .then((e) => {
                s(n, r), o("Спасибо, ваша заявка принята!", "Наши менеджеры в ближайшее время свяжутся с Вами"), t.trigger("reset"), t.find("input").removeClass("filled");
              })
              .catch((e) => console.log(e)));
      });
    const c = $("input[name=agreement]"),
      m = c.closest(".custom-checkbox");
    $(document).on("change", c, function () {
      m.hasClass("validate-error") && m.removeClass("validate-error");
    }),
      $(document).on("submit", ".product-main__inform-form", function (e) {
        e.preventDefault();
        const t = $(this),
          i = new FormData();
        let n = t.find(".product-main__inform-form_submit"),
          r = t.find(".product-main__inform-form_submit").html();
        const c = t.find("input[name=agreement]");
        let m = !1,
          u = !1,
          _ = 0;
        const h = t.find(".validate-field").length;
        t.find(".error").length && t.find(".error").remove();
        const f = document.createElement("span");
        (f.className = "error"),
          t.find(".validate-field").each(function () {
            "phone" === $(this).attr("name") && l($(this).val()).length < 10 && (_--, $(this).addClass("validate-error"), (f.textContent = "Некорректный номер телефона"), !t.find(".error").length && n.before(f)), $(this).val() ? _++ : ($(this).addClass("validate-error"), (f.textContent = "Заполните поля"), !t.find(".error").length && n.before(f)), _ === h && (m = !0);
          }),
          c.length && !c.is(":checked") ? (c.closest(".custom-checkbox").addClass("validate-error"), (u = !1)) : (c.closest(".custom-checkbox").removeClass("validate-error"), (u = !0)),
          m &&
            u &&
            (t.find(".validate-field").removeClass("validate-error"),
            t
              .find("input, textarea")
              .not("input[type=checkbox]")
              .each(function () {
                $(this).val() && i.append($(this).attr("name"), $(this).val());
              }),
            a(n),
            d("https://jsonplaceholder.typicode.com/users", i)
              .then((e) => e.json())
              .then((e) => {
                s(n, r), o("Спасибо, ваша заявка принята!", "Сообщим вам, как только товар появится"), t.trigger("reset");
              })
              .catch((e) => console.log(e)));
      }),
      $(document).on("submit", ".tell-me__form", function (e) {
        e.preventDefault();
        const t = $(this),
          i = new FormData();
        let n = t.find(".call-modal__submit"),
          r = t.find(".call-modal__submit").html();
        const c = t.find("input[name=agreement]");
        let m = !1,
          u = !1,
          _ = 0;
        const h = t.find(".validate-field").length;
        t.find(".error").length && t.find(".error").remove();
        const f = document.createElement("span");
        (f.className = "error"),
          t.find(".validate-field").each(function () {
            "phone" === $(this).attr("name") && l($(this).val()).length < 10 && (_--, $(this).addClass("validate-error"), (f.textContent = "Некорректный номер телефона"), !t.find(".error").length && n.before(f)), $(this).val() ? _++ : ($(this).addClass("validate-error"), (f.textContent = "Заполните поля"), !t.find(".error").length && n.before(f)), _ === h && (m = !0);
          }),
          c.length && !c.is(":checked") ? (c.closest(".custom-checkbox").addClass("validate-error"), (u = !1)) : (c.closest(".custom-checkbox").removeClass("validate-error"), (u = !0)),
          m &&
            u &&
            (t.find(".validate-field").removeClass("validate-error"),
            t
              .find("input, textarea")
              .not("input[type=checkbox]")
              .each(function () {
                $(this).val() && i.append($(this).attr("name"), $(this).val());
              }),
            a(n),
            d("https://jsonplaceholder.typicode.com/users", i)
              .then((e) => e.json())
              .then((e) => {
                s(n, r), o("Спасибо, ваша заявка принята!", "Сообщим вам, как только товар появится"), t.trigger("reset"), t.find("input").removeClass("filled");
              })
              .catch((e) => console.log(e)));
      }),
      $(document).on("submit", ".contacts-form", function (e) {
        e.preventDefault();
        const t = $(this),
          i = new FormData();
        let n = t.find(".contacts-form-submit"),
          r = t.find(".contacts-form-submit").html();
        const c = t.find("input[name=agreement]");
        let m = !1,
          u = !1,
          _ = 0;
        const h = t.find(".validate-field").length;
        t.find(".error").length && t.find(".error").remove();
        const f = document.createElement("span");
        (f.className = "error"),
          t.find(".validate-field").each(function () {
            "phone" === $(this).attr("name") && l($(this).val()).length < 10 && (_--, $(this).addClass("validate-error"), (f.textContent = "Некорректный номер телефона"), !t.find(".error").length && n.before(f)), $(this).val() ? _++ : ($(this).addClass("validate-error"), (f.textContent = "Заполните поля"), !t.find(".error").length && n.before(f)), _ === h && (m = !0);
          }),
          c.length && !c.is(":checked") ? (c.closest(".custom-checkbox").addClass("validate-error"), (u = !1)) : (c.closest(".custom-checkbox").removeClass("validate-error"), (u = !0)),
          m &&
            u &&
            (t.find(".validate-field").removeClass("validate-error"),
            t
              .find("input, textarea")
              .not("input[type=checkbox]")
              .each(function () {
                $(this).val() && i.append($(this).attr("name"), $(this).val());
              }),
            a(n),
            d("https://jsonplaceholder.typicode.com/users", i)
              .then((e) => e.json())
              .then((e) => {
                s(n, r), o("Спасибо, ваше сообщение отправлено!", "Наши менеджеры скоро свяжутся с вами"), t.trigger("reset"), t.find("input").removeClass("filled");
              })
              .catch((e) => console.log(e)));
      }),
      $(document).on("submit", ".inner-callback-modal__form", function (e) {
        e.preventDefault();
        const t = $(this),
          i = new FormData();
        let n = t.find(".call-modal__submit"),
          r = t.find(".call-modal__submit").html();
        const c = t.find("input[name=agreement]");
        let m = !1,
          u = !1,
          _ = 0;
        const h = t.find(".validate-field").length;
        t.find(".error").length && t.find(".error").remove();
        const f = document.createElement("span");
        (f.className = "error"),
          t.find(".validate-field").each(function () {
            "phone" === $(this).attr("name") && l($(this).val()).length < 10 && (_--, $(this).addClass("validate-error"), (f.textContent = "Некорректный номер телефона"), !t.find(".error").length && n.before(f)), $(this).val() ? _++ : ($(this).addClass("validate-error"), (f.textContent = "Заполните поля"), !t.find(".error").length && n.before(f)), _ === h && (m = !0);
          }),
          c.length && !c.is(":checked") ? (c.closest(".custom-checkbox").addClass("validate-error"), (u = !1)) : (c.closest(".custom-checkbox").removeClass("validate-error"), (u = !0)),
          m &&
            u &&
            (t.find(".validate-field").removeClass("validate-error"),
            t
              .find("input, textarea")
              .not("input[type=checkbox]")
              .each(function () {
                $(this).val() && i.append($(this).attr("name"), $(this).val());
              }),
            a(n),
            d("https://jsonplaceholder.typicode.com/users", i)
              .then((e) => e.json())
              .then((e) => {
                s(n, r), o("Спасибо, ваше сообщение отправлено!", "Наши менеджеры скоро свяжутся с вами"), t.trigger("reset"), t.find("input").removeClass("filled");
              })
              .catch((e) => console.log(e)));
      }),
      $(".chats-clubs-item").mouseenter(function () {
        $(this).find(".chats-clubs-list").addClass("visible");
      }),
      $(".chats-clubs-item").mouseleave(function () {
        $(this).find(".chats-clubs-list").removeClass("visible");
      }),
      $(document).on("submit", ".new-password__form", function (e) {
        e.preventDefault();
        const t = $(this),
          i = new FormData();
        let n = t.find(".btn-with-arrow"),
          r = t.find(".btn-with-arrow").html(),
          o = !1,
          l = !1,
          c = 0,
          m = $("input[name=new-password]").val(),
          u = $("input[name=new-password-repeat]").val();
        const _ = t.find(".validate-field").length;
        t.find(".error").length && t.find(".error").remove();
        const h = document.createElement("span");
        (h.className = "error"),
          t.find(".validate-field").each(function () {
            m === u ? ((l = !0), c++) : ((l = !1), $(this).parent().addClass("validate-error"), (h.textContent = "Пароли не совпадают"), !t.find(".error").length && n.before(h), c--), $(this).val() ? c++ : ($(this).parent().addClass("validate-error"), (h.textContent = "Заполните поля"), !t.find(".error").length && n.before(h), c--), c === _ && (o = !0);
          }),
          o &&
            l &&
            (t.find(".validate-field").parent().removeClass("validate-error"),
            t
              .find("input, textarea")
              .not("input[type=checkbox]")
              .each(function () {
                $(this).val() && i.append($(this).attr("name"), $(this).val());
              }),
            a(n),
            d("https://jsonplaceholder.typicode.com/users", i)
              .then((e) => e.json())
              .then((e) => {
                s(n, r), t.trigger("reset"), t.find("input").removeClass("filled"), $(".new-password_success").slideDown(300), $(".new-password__form").slideUp(300);
              })
              .catch((e) => console.log(e)),
            console.log(m + u));
      }),
      $(".validate-field").on("focus", function () {
        $(this).parent().hasClass("validate-error") && ($(this).parent().removeClass("validate-error"), $(".error").slideUp(300)), $(this).hasClass("validate-error") && ($(this).removeClass("validate-error"), $(".error").slideUp(300));
      }),
      $(document).on("submit", ".password-restore__form", function (e) {
        e.preventDefault();
        const t = $(this),
          n = new FormData();
        let r = t.find("button"),
          l = t.find("button").html(),
          c = !1,
          m = 0;
        const u = t.find(".validate-field").length;
        t.find(".error").length && t.find(".error").remove();
        const _ = document.createElement("span");
        (_.className = "error"),
          t.find(".validate-field").each(function () {
            $(this).val() ? m++ : ($(this).parent().addClass("validate-error"), (_.textContent = "Заполните поля"), !t.find(".error").length && r.before(_)), m === u && (c = !0);
          }),
          c &&
            (t.find(".validate-field").parent().removeClass("validate-error"),
            t
              .find("input, textarea")
              .not("input[type=checkbox]")
              .each(function () {
                $(this).val() && n.append($(this).attr("name"), $(this).val());
              }),
            a(r),
            d("https://jsonplaceholder.typicode.com/users", n)
              .then((e) => e.json())
              .then((e) => {
                s(r, l), o("Спасибо за заявку", "На указанный email выслана ссылка для восстановления пароля"), t.trigger("reset"), $(".bg-overlay").fadeOut(300), $(".password-restore").removeClass("active"), i($("body"));
              })
              .catch((e) => console.log(e)));
      }),
      $(document).on("submit", ".profile-form", function (e) {
        e.preventDefault();
        const t = $(this),
          i = new FormData(),
          n = t.find(".profile-table");
        let r = $(document).find("input[name=changePassword]"),
          o = t.find("button"),
          l = t.find("button").html(),
          c = !1,
          m = !1,
          u = 0;
        const _ = t.find(".validate-field").length;
        t.find(".error").length && t.find(".error").remove();
        const h = document.createElement("span");
        if (((h.className = "error"), r.prop("checked"))) {
          t.find("input[name=password1]").val() === t.find("input[name=password2]").val() ? (m = !0) : ((m = !1), !t.find(".error").length && t.append('<div class="error">Пароли не совпадают</div>'), console.log("error"));
        }
        t.find(".validate-field").each(function () {
          $(this).val() ? u++ : ($(this).parent().addClass("validate-error"), (h.textContent = "Пожалуйста, заполните все поля! "), !t.find(".error").length && n.before(h)), u === _ && (c = !0);
        }),
          c &&
            (t.find(".validate-field").parent().removeClass("validate-error"),
            t
              .find("input, textarea")
              .not("input[type=checkbox]")
              .each(function () {
                $(this).val() && i.append($(this).attr("name"), $(this).val());
              }),
            a(o),
            d("https://jsonplaceholder.typicode.com/users", i)
              .then((e) => e.json())
              .then((e) => {
                s(o, l), r.prop("checked", ""), o.text("Сохранено");
              })
              .catch((e) => console.log(e)));
      }),
      $(".profile-item__password-btn").on("click", function () {
        $(this).toggleClass("act"), $(this).hasClass("act") ? $(this).prev().attr("type", "text") : $(this).prev().attr("type", "password");
      }),
      $(".profile-item__checkbox-wrap .custom-checkbox").on("click", function () {
        $(this).parent().siblings().find("input").prop("checked", "");
      }),
      $(document)
        .find("input[name=changePassword]")
        .on("change", function () {
          $(this).prop("checked") ? ($(".profile-item_hidden").css({ display: "block" }), $(".new-password").addClass("validate-field")) : ($(".profile-item_hidden").css({ display: "none" }), $(".new-password ").removeClass("validate-field"));
        }),
      $(document).on("click", function (e) {
        console.log(e.target);
      }),
      $(document).on("mouseover", ".submenu-menu__right-item", function (e) {
        if ($(this).closest(".submenu-right__wrap").hasClass("_current")) {
          let e = null;
          submenuItemTimer = setTimeout(() => {
            $(this).closest(".submenu-menu").removeClass("_hover");
            const t = $(this).attr("data-menu-lvl3-id");
            console.log(t),
              $(this).closest(".submenu-menu").hasClass("_hover") ||
                ($(this).parent().find(".submenu-menu__right-item").removeClass("active-link"),
                $(this).addClass("active-link"),
                $(".submenu-lvl3 .submenu-right__wrap").find(".submenu-lvl3__menu, .submenu-right__banner").removeClass("_prev"),
                $(".submenu-lvl3 .submenu-right__wrap.act").find(".submenu-lvl3__menu, .submenu-right__banner").addClass("_prev"),
                $(".submenu-lvl3 .submenu-right__wrap").removeClass("_current act").find(".submenu-lvl3__menu, .submenu-right__banner").removeClass("_current"),
                $(`.submenu-lvl3 .submenu-right__wrap[data-menu-lvl3-id=${t}]`).addClass("_current").find(".submenu-lvl3__menu, .submenu-right__banner").addClass("_current"),
                setTimeout(function () {
                  $(`.submenu-lvl3 .submenu-right__wrap[data-menu-lvl3-id=${t}]`).addClass("act");
                }, 50),
                null != e && clearTimeout(e),
                (e = setTimeout(function () {
                  $(".submenu-lvl3 .submenu-right__wrap").find(".submenu-lvl3__menu, .submenu-right__banner").removeClass("_prev");
                }, 500)));
          }, 300);
        }
      }),
      $(".catalog-sidebar__menu-list-item").each(function () {
        $(this).hasClass("has-lvl3") && $(this).removeAttr("href").after('<div class="cat-lvl3-menu" style="display: none"><a class="cat-lvl3-menu__link" href="/">1</a><a class="cat-lvl3-menu__link" href="/">2</a></div>'),
          $(this).on("click", function () {
            $(this).toggleClass("active").next(".cat-lvl3-menu").slideToggle(300);
          });
      }),
      $(document).on("click", ".menumobile-open-3lvl-menu", function () {
        const e = $(this).attr("data-lvl3-id");
        console.log(e), $(this).removeAttr("href");
        const t = $(this).text();
        $(".menumobile-submenu__lvl3").removeClass("active"), $(".menumobile-submenu__lvl3 .menumobile-submenu__lvl3-block").removeClass("active"), $(".menumobile-submenu__lvl3").addClass("active"), $(".menumobile-submenu__lvl3 .menumobile-submenu__lvl3-block[data-lvl3-id=" + e + "]").addClass("active"), $(".menumobile-submenu__lvl3 .menumobile-submenu__header").text(t);
      });
  },
]);



$(document).on("click", ".show-counter", function(){
  let btn = $(this);

  btn.hide()
  let card = btn.closest(".card");



  let counter = document.createElement("div");
  counter.className = "counter";
  card.append(counter);

  let counterMinus = document.createElement("div");
  counterMinus.className = "counter-minus disabled";
  counterMinus.innerText = "-";
  counter.append(counterMinus);

  let counterInput = document.createElement("input");
  counterInput.className = "counter-input";
  counterInput.setAttribute("type", "number");
  counterInput.setAttribute("data-numeric", "");
  counterInput.setAttribute("min", "1");
  counterInput.setAttribute("max", "275");
  counterInput.setAttribute("value", "1");
  counter.append(counterInput);


  let counterPlus = document.createElement("div");
  counterPlus.className = "counter-plus";
  counterPlus.innerText = "+";
  counter.append(counterPlus);


})


