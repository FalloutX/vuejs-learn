var vm = new Vue({
  el: '#computed',
  data: {
    a: 34,
    firstName: 'Inderjit',
    lastName: 'Sidhu'
  },
  computed: {
    b: function () {
      return this.a*this.a;
    },

    // Computed property with setter and a getter
    fullName: {
      get: function () {
        return this.firstName + ' ' + this.lastName;
      },

      set: function(newValue){
        var names = newValue.split(' ');
        this.firstName = names[0];
        this.lastName = names[names.length - 1];
      }
    }
  }
});
