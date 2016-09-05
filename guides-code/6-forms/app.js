const vm = new Vue({
  el: '#app',
  data: {
    checked: false,
    checkedNames: [],
    picked: null,
    selected: null,
    selectedmulti: [],
    selecteddyn: null,
    options: [
      {text: 'One', value:'A'},
      {text: 'Two', value:'B'},
      {text: 'Three', value:'C'}
    ]
  }

});
