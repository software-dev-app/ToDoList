require('./bootstrap');

import { createApp } from 'vue';
import App from './vue/app';
import { library } from "@fortawesome/fontawesome-svg-core";
import { faPlusSquare, faTrash } from "@fortawesome/free-solid-svg-icons";

library.add(faPlusSquare, faTrash);

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

createApp({
    components: { App }
})
.component("font-awesome-icon", FontAwesomeIcon)
.mount('#app');
