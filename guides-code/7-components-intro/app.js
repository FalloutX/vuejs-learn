const AppHeading = Vue.extend({
  template: `<div>
              <h3> I am the App Heading </h3>
              <p> I am a custom component. </p>
            </div>`
});
Vue.component('app-heading', AppHeading);

const ChildComponent = Vue.extend({
  data: function (){ // Return as a function when inside Vue.extend.
    return {         // do the same for el property.
      name: 'Child',
      role: 'Insider Component',
      uid: 35
    };
  },
  template: `<div style="border: 2px solid #eee;"> I'll register myself only inside
                   ParentComponent. {{name}}
            </div>`
});

const ParentComponent = Vue.extend({
  template:`<div style="border: 2px solid #d0d;"> I have the ChildComponent between this and
                  <child></child>
                  this.
                  <div>
                  And here is the direct component between this and
                  <direct></direct>
                  this.
                  </div>
            </div>`,
  components: {
    'child': ChildComponent,
    'direct': {
      template: `<div style="border: 2px solid #7dd"> I have been passed directly in
                       the ParentComponent.
                 </div>`
    }
  }
});
Vue.component('parent', ParentComponent)
const vm = new Vue({
  el: '#app'
});
