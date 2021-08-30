import Vue from 'vue'
import VueRouter from 'vue-router'

import home from '../src/views/home.vue'
import about from '../src/views/about.vue'
import products from '../src/views/productname.vue'
import profile from '../src/views/profilename.vue'
import login from '../src/views/login.vue'
import productdetail from '../src/views/productdetail.vue'
import ano from "./views/unknown.vue";

Vue.use(VueRouter)
const routes = [  
    {
        path: "*",
        component: ano
    },
    {
        path: "/",
        component: home
    }, 
    {
        path: "/about",
        component: about
    },  
    {
        path: "/products",
        component: products
    },  
    {
        path: "/products/:id",
        component: productdetail
    },
    {
        path: "/login",
        component: login
    },
    {
        path: "/profile",
        component: profile
    }
 
]
const router = new VueRouter({
    mode:"history",
    routes, 
});
router.beforeEach((to,from,next) => {   
    if (to.path === "/profile" || to.path === "/products") {
        let email1 = localStorage.getItem("slicer1");
        let email2 = localStorage.getItem("slicer1");
        let password = localStorage.getItem("password");
        if (email1 && email2 && password) {         
            next()
        } else {
            next("/login")
        }
    } else {
        next()
    }
});

export default router;