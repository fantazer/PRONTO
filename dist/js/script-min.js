$(document).ready(function(){$(".select-beauty").niceSelect();var s={isModalShow:!1,scrollPos:0},i=window.innerWidth-$(document).width(),t=function(){$(".modal-layer").hasClass("modal-layer-show")||($(".modal-layer").addClass("modal-layer-show"),s.scrollPos=$(window).scrollTop(),$("body").css({overflowY:"hidden",top:-s.scrollPos,width:"100%",paddingRight:i})),s.isModalShow=!0},e=function(){$(".modal-layer").removeClass("modal-layer-show"),$("body").css({overflow:"",position:"",top:s.scrollPos,paddingRight:0}),$(window).scrollTop(s.scrollPos),$(".modal").addClass("modal-hide-animation"),setTimeout(function(){$(".modal").removeClass("modal-hide-animation"),$(".modal").removeClass("modal__show")},600),s.isModalShow=!1},l=function(s){t(),$(".modal").each(function(){$(this).data("modal")===s?$(this).addClass("modal__show"):$(this).removeClass("modal__show")});var i=$(window).height();$(".modal-filter").height(i)};$(".modal-get").click(function(){var s=$(this).data("modal");l(s)}),$(".modal-close, .modal-hide").click(function(){e()});var a=250,o=$(".header-wrap"),c=o.height();$(window).scroll(function(){var s=$(this).scrollTop();s>=a?($("body").css("paddingTop",c),o.addClass("shrink")):($("body").css("paddingTop",0),o.removeClass("shrink"))}),$(".js-toggle").click(function(){$(this).toggleClass("active")}),$(".js-commutator-el").click(function(){var s,i=$(this).data("item"),t=$(this).data("group")||!1,e=$(this).data("each")||!1;$(this).toggleClass("active"),s=$(".js-commutator-cont").data("group")?$(".js-commutator-cont[data-group="+t):$(".js-commutator-cont"),s.each(function(){$(this).data("item")===i?$(this).toggleClass("active"):!!e&&$(this).removeClass("active")})}),$(".js-slide").click(function(){var s=$(this).data("item"),i=$(this).data("each")||!1,t=$(this).closest(".js-slide-parrent");$(this).toggleClass("active");var e;e=$(".js-slide[data-item="+s+"]"),i&&(e.not(this).removeClass("active"),e.not(this).closest(".js-slide-parrent").find(".js-slide-cont").removeClass("active")),t.find(".js-slide-cont[data-item="+s+"]").toggleClass("active")}),$(".js-switch").click(function(){var s=$(this).data("item"),i=$(this).data("group"),t=0;$(".js-switch").each(function(){return $(this).data("item")===s&&($(this).removeClass("active"),t=$(this).size()),t}),$(".js-switch-cont").each(function(){$(this).data("group")===i&&($(this).data("item")===s?1===t?$(this).toggleClass("hidden"):$(this).removeClass("hidden"):$(this).addClass("hidden"))}),$(this).addClass("active")});var n={};$(".incr__nav").click(function(){n.parent=$(this).closest(".incr"),n.value=parseInt($(this).closest(".incr").find(".incr__val span").html()),n.state=$(this).closest(".incr").find(".incr__val span")}),$(".incr__minus").click(function(){--n.value,n.parent.hasClass("incr--one")&&(n.value=n.value<1?1:n.value),n.value=n.value<1?0:n.value,n.state.html(n.value)}),$(".incr__plus").click(function(){++n.value,n.value=n.value>100?100:n.value,n.state.html(n.value)}),$(".incr-btn__el").click(function(){$(this).closest(".incr-btn").addClass("incr-btn--active")}),$(".incr-btn .incr__minus").click(function(){1===n.value?$(this).closest(".incr-btn").removeClass("incr-btn--active"):""}),$(".incr--single .incr__nav").click(function(){var s=$(this).closest(".incr--single");n.value?s.addClass("incr--single-active"):s.removeClass("incr--single-active")}),$(".dropdown").click(function(){$(this).attr("tabindex",1).focus(),$(this).toggleClass("active"),$(this).find(".dropdown-menu").slideToggle(300)}),$(".dropdown").focusout(function(){$(this).removeClass("active"),$(this).find(".dropdown-menu").slideUp(300)}),$(".dropdown .dropdown-menu__el").click(function(){var s=$(this).parents(".dropdown");s.find(".dropdown-current__val").html($(this).html()),s.find("input").attr("value",$(this).data("value"))}),$(".main-slider").slick({slidesToShow:1,speed:500,dots:!0,arrows:!1,customPaging:function(s,i){return'<span class="dot"></span>'}}),$(".slider-control--right").click(function(){$(this).closest(".slider-wrap").find(".slider-item").slick("slickNext")}),$(".slider-control--left").click(function(){$(this).closest(".slider-wrap").find(".slider-item").slick("slickPrev")}),$(".gallery-slider").slick({slidesToShow:1,speed:500,dots:!1,arrows:!1,asNavFor:".gallery-slider-nav"}),$(".gallery-slider-nav").slick({slidesToShow:5,speed:500,dots:!1,arrows:!1,asNavFor:".gallery-slider",focusOnSelect:!0,responsive:[{breakpoint:480,settings:{slidesToShow:4}}]}),$(".size__el").click(function(){$(this).closest(".size").find(".size__el").removeClass("size__el--active"),$(this).addClass("size__el--active")}),$(".js-product-slide__close").click(function(){$(this).closest(".product-slide").removeClass("active")}),$(".constr-prop").click(function(){$(this).toggleClass("active")}),$(window).width()>1025&&$(".stick").stick_in_parent({offset_top:120}),$(".range").ionRangeSlider({}),$(".history-card__wrap").click(function(){var s=$(this).closest(".history-card");s.addClass("history-card--active"),s.find(".history-card__wrap").slideUp(600),s.find(".history-info").slideToggle(600)});var d=navigator.platform.toUpperCase().indexOf("MAC")>=0;d||$(".scroll").niceScroll({autohidemode:!1,cursorcolor:"#dcdcdc",scrollspeed:160,mousescrollstep:10}),$(".star--edit .star-el").hover(function(){$(this).parent().hasClass("star--fix")||($(".star .star-el").removeClass("star-el--active"),$(this).addClass("star-el--active"),$(this).prevAll(".star-el").addClass("star-el--active"))}),$(".star--edit .star-el").click(function(){$(this).parent().toggleClass("star--fix"),$(this).addClass("star-el--active"),$(this).prevAll(".star-el").addClass("star-el--active")}),$(".js-slide-block-toggle").click(function(s){$(".js-slide-block-toggle").not(this).removeClass("slide-block-toggle--open");var i=$(this).data("menu");$(".slide-block").each(function(){$(this).data("menu")===i?$(this).toggleClass("slide-block--open"):$(this).removeClass("slide-block--open")}),$(this).toggleClass("slide-block-toggle--open"),s.stopPropagation()}),$(".slide-block").on("click",function(s){s.stopPropagation()}),$(document).on("click",function(){$(".slide-block").removeClass("slide-block--open"),$(".js-slide-block-toggle").removeClass("slide-block-toggle--open")})});