new Vue({
  el:'#vue-app',
  data:{
    name:'Neel',
    department:'UI'
  },
  methods:{
    greetUser:function (value1) {
      return 'Good ' + value1 + this.name;
    }
  }
})
