new Vue({
	  el: '#app',
  data() {
    return {
      scrollX: 0,
      beforeScroll: 0,
      dogWidth: 0,
      screenWidth: window.innerWidth,
      marginLeft: window.innerWidth / 2,
      dogPosition: 0
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      this.screenWidth = window.scrollX + window.innerWidth;
      this.beforeScroll = this.scrollX; // Scroll to previous
      this.scrollX = window.scrollX; // Current scroll
      if (this.scrollX >= this.beforeScroll && this.scrollX >= this.dogWidth) {
        this.dogWidth = this.scrollX - 1;
        this.dogPosition = -this.dogWidth;
        this.marginLeft = this.screenWidth - window.innerWidth / 2;
      }
    }
  }
});