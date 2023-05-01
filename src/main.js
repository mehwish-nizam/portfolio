import { createApp } from 'vue'
import App from './App.vue'
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';

const options = {
    confirmButtonColor: '#0a192f',
  };

const app = createApp(App);
app.use(Antd);
app.use(VueSweetalert2, options);
app.mount('#app')
