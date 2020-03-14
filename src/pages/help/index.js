import Core from "core";

const Page = {
  init: function() {
    Core.init();
    this.$app = $("#app");
    this.initEvent();
  },
  initEvent: function() {}
};

export default Page;
