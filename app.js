new Vue({
  el:'#vue-app',
  data:{
    age : 25
  },
  methods:{
    add:function(value){
      this.age+=value;
    },
    subtract:function(value){
      this.age-=value;
    }
  }
})
