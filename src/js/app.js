Vue.component('persona-name', {
  props: ['name'],
  template: '<div class="container" v-on:click="isEditing = !isEditing"><h1 v-bind:class="{ title: true, \'is-edit\': isEditing }">{{ name }}</h1></div>'
})

window.onload = function (){
	var app = new Vue({
  el: '#vue',
  data: {
    name: 'Persona Name',
		isEditing: false
  }
})
};
