import Core from "core";
import Hammer from "hammer";

const Page = {
  init: function() {
    Core.init();
    this.$app = $("#app");
    this.halfWidth = this.$app.width() / 2;
    this.lastHref = $(".last-btn", this.$app).attr("href");
    this.nextHref = $(".next-btn", this.$app).attr("href");
    this.hammer = new Hammer(this.$app[0]);
    this.initEvent();
  },
  initEvent: function() {
    this.hammer.on("tap swipeleft swiperight", event => {
      const { type, center = {} } = event;
      // console.log(event);
      if (type === "tap") {
        if (center.x < this.halfWidth) {
          if (this.lastHref) {
            location.href = this.lastHref;
            return;
          }
        } else {
          if (this.nextHref) {
            location.href = this.nextHref;
            return;
          }
        }
      }
      if (type === "swiperight" && this.nextHref) {
        location.href = this.nextHref;
        return;
      }
      if (type === "swipeleft" && this.lastHref) {
        location.href = this.lastHref;
        return;
      }
    });
  }
};

export default Page;
