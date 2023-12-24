import Vue from 'vue';
import VueRouter from "vue-router";
import App from './App.vue';
import word from './word.vue';

Vue.useAttrs(VueRouter);

const routes = [
    {path:'/', component: App},
    {path: '/word', component: word}
];

const router = new VueRouter({
    mode: 'history',
    routes
});

export default router;