import { createApp } from 'vue'
import App from './App.vue'

import './assets/main.css'

createApp(App).mount('#app')

fetch("https://invisal.com/images/rickroll.gif")
.then( response => response.blob() )
.then( blob =>{
  const reader = new FileReader() ;
  reader.onload = function(){ console.log("%c ", `padding-left: 320px; padding-bottom:320px; background: url('${this.result}') no-repeat; background-size: contain`) };
  reader.readAsDataURL(blob);
});
