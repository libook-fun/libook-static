import VConsole from "vConsole";
import ScrollUp from "./ui/scrollup";

const Core = {
  init: function() {
    this.$app = $("#app");
    if (location.search.indexOf("debug=") > -1) {
      this.vConsole = new VConsole();
    }
    this.initEvent();
  },
  initEvent: function() {
    ScrollUp.init();
  }
};

export default Core;
