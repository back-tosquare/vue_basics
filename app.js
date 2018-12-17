new Vue({
  el:'#vue-app',
  data:{
    age:20,
    a:0,
    b:0
  },
  methods:{

    incA:function() {
      this.a++;
    },

    incB:function() {
      this.b++;
    }
    
  },
  computed:{

    addToA:function() {
      console.log('Add to A is Running')
      return this.age + this.a;
    },

    addToB:function() {
      console.log('Add to B is Running')
      return this.age + this.b;
    }

  }

})
