new Vue({
  el:'#vue-app',
  data:{
    available:true,
    nearby:true
  },
  methods:{

    toggleAvailable:function() {
      this.available = !this.available;
    },

    toggleNearby:function() {
      this.nearby = !this.nearby;
    }

  },
  computed:{

    compClasses:function() {
      return {available:this.available,nearby:this.nearby}
    }
  }

})
