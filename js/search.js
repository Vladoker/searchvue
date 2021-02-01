new Vue({
  el: '.app',
  mounted() {
    document.addEventListener('keydown', (event) => {
      if('Escape' == event.code) {
        this.modalShow = false;
      }
    });
  },
  data : {
    request: '',
    count: 86,
    focusInput: false,
    showResults: false,
    showNoResult: false,
    modalShow: false
  },
  watch: {
    modalShow() {
      this.showResults = false;
      this.showNoResult = false;
      this.focusInput = false;
      this.request = '';
    }
  },
  computed: {
    openModal() {
      return {
        'opacity' : this.modalShow ? '1' : '0',
        'z-index': this.modalShow ? '1' : '-1' 
      }
    }
  },
  methods: {
    getProducts(){
      if(this.request.length >= 4){
        this.showNoResult = false;
        this.showResults = true;
      }
      else {
        this.showResults = false;
        this.showNoResult = true;
      }
    }
  }
});