new Vue({
    // the data property
    el: '#bulb',
    
    data() {
      return {
        signal: false,
        imageSource1:'images/bulbOn.jpg',
        imageSource2:'images/bulboff.jpg',
      };
    },
  
    // the methods property
    methods: {
      toggle: function () {
        this.signal = !this.signal;
      },
    },
  });
