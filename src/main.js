import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { createApp } from 'vue';
import App from './App.vue';
import router from '@/router';
// import funcPlugins from './plugins/func';
// import objPlugins from './plugins/obj';
// import person from './plugins/person';
import globalComponents from '@/plugins/global-components';

const app = createApp(App);
// app.use(funcPlugins);
// app.use(objPlugins, { name: '딸기' });
// app.use(person); // homeView.vue created()
app.use(globalComponents);
app.use(router);
app.mount('#app');
import 'bootstrap/dist/js/bootstrap.js';

// const app = createApp(App);
// app.use(router);

// app.mount('#app');
// import 'bootstrap/dist/js/bootstrap.js';
