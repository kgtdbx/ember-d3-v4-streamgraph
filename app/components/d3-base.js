import Ember from 'ember';

const {
  computed,
} = Ember;

export default Ember.Component.extend({
  classNameBindings: [ 'elementClass' ],

  elementClass: null,

  formattedClassName: computed('elementClass', function() {
    return `.${this.get('elementClass')}`;
  }),
});
