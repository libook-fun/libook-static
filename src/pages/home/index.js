import Core from "core";
import Swiper from "swipter";
// https://github.com/Mango/slideout
const page = {
  init: function() {
    Core.init();
    this.$app = $("#app");
    this.initSwiper();
    this.initEvent();
  },
  initSwiper() {
    this.swiper = new Swiper(".swiper-container", {
      effect: "coverflow",
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: "auto",
      coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true
      },
      speed: 500,
      delay: 3000,
      autoplay: true,
      direction: "horizontal", // 垂直切换选项
      loop: true, // 循环模式选项
      // 如果需要分页器
      pagination: {
        el: ".swiper-pagination"
      },
      // 如果需要前进后退按钮
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      },
      // 如果需要滚动条
      scrollbar: {
        el: ".swiper-scrollbar"
      }
    });
  },
  initEvent: function() {}
};

export default page;
