var vm = new Vue({
  el: '#company',
  data: {
    companyName: 'Openlog',

    emps: [
      {name: 'Geoge Pataski', dept: 'Medicine', role:'Director'},
      {name: 'Inderjit Sidhu', dept: 'Technology', role:'Developer'},
      {name: 'Armpit Chauhan', dept: 'Sanitation', role: 'Janitor'},
      {name: 'Shit iz Chatterji', dept: 'Government Communication', role: 'Clerk'},
      {name: 'Sandeepa Odama', dept: 'Railways', role:'Train Driver'},
      {name: 'Lorrie Hundinski', dept: 'Technology', role: 'Developer'}
    ],
    companyData: {
      regdName: 'Openlog Inc.',
      ceo: 'Romy Rodofski',
      cfo: 'Aner Husoian',
      cto: 'Lake Hubton',
      earnings: '$1.2m',
    }
  },
  computed: {
    staffRoll: function(){
      return this.emps.length + 3;
    }
  }
});
