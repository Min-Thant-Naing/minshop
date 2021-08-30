<template>
    <div class="container my-3">
        <div class="errorclass"><h1 v-if="errorcrazy">{{err}}<br><h5 class="my-4 text-muted">Please refresh this page and <br> wait a minute</h5></h1></div> 
        <loader v-if="loading === true"></loader>
        <div v-else class="row"> 
            <div class="col-md-4"  v-for="(product,index) in products" v-bind:key="index">
                <div class="card mx-4 ">
                    <img v-bind:src="product.image" class="card-img-top v " alt="no image">
                    <div class="card-body text-center">
                        <h1 class="x">{{product.title}}</h1>
                        <h5 class="my-4 text-muted">$ {{product.price}}</h5>
                        <div class="d-grid gap-2">
                            <router-link :to="`/products/${product.id}`" class="btn btn-primary">more details</router-link>
                        </div>   
                    </div>
                </div><br>    
            </div>
           <foot></foot> 
        </div>  
    </div>
</template>

<script>
import loader from "./loader.vue";
import axios from "axios";
import foot from "../components/footer.vue";


export default {
    components: {
        loader,
        foot,
    },
    data() { 
        return {
            errorcrazy: false,
            products: [],
            loading:false,
            err:'error'  
        }
    },
    created() {
        this.loading=true;
        axios.get("https://fakestoreapi.com/products")
        .then(response => {
                this.products =  response.data
                this.loading=false
        }) 
        .catch (e => {
                this.loading=true
                this.err=e
                this.errorcrazy=true
        })
    }
}
</script>
<style>
    .v {
        height: 160px;
        width: 160px;
        margin: 0 auto;
    }
    .x {
        font-size: 20px;
    }
</style>
