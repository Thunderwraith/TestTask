import { createApp } from 'vue'
import App from './App.vue'
import axios from 'axios'
import components from './components'
import { defineRule } from 'vee-validate';
import Notifications from '@kyvg/vue3-notification'

import './styles/index.sass'

defineRule('required', value => {
  if (!value || !value.length) {
    return 'This field is required';
  }
  return true;
});

defineRule('email', value => {
  // Field is empty, should pass
  if (!value || !value.length) {
    return true;
  }
  // Check if email
  if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)) {
    return 'This field must be a valid email';
  }
  return true;
});

defineRule('phone', value => {
  // Field is empty, should pass
  if (!value || !value.length) {
    return true;
  }
  // Check if phone
  if (!/\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/.test(value)) {
    return 'This field must be a valid phone';
  }
  return true;
});


const app = createApp(App)


app.config.globalProperties.$axios = axios

app.use(Notifications)
app.use(components)

app.mount('#app')
