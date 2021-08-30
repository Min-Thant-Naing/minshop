<template>
  <div class="container my-5 ">
    <div class="errorclass"><h1 v-if="errorcrazy">{{err}}<br><h5 class="my-4 text-muted">Please refresh this page and <br> wait a minute</h5></h1></div> 
    <loader v-if="loading === true"></loader>
    <div v-else class="row">
      <div class="col-md-4">
          <img class="z img-fluid" :src="productDescription.image" alt="no image">
      </div>
      <div class="col-md-8 px-5">
        <h1 class="display-4 ps-2">{{productDescription.title}}</h1>
        <p class="text-muted mt-5">$ {{productDescription.price}}</p>
        <p class="mt-5">{{productDescription.description}}</p>
        <div class="mt-5">
          <router-link to="/products" class="btn btn-outline-secondary">back</router-link>
          <button class="btn btn-success float-end">Add to card</button>
        </div>
      </div>
    </div>
  </div> 
</template>

<script>
import loader from "./loader.vue";
import axios from 'axios';
export default {
  components: {
    loader,
  },
  data() {
    return {
      errorcrazy: false,
      loading: false,
      productDescription: {},
      err:'error'
    }
  },
  created() {
    this.loading=true;
    axios
    .get(`https://fakestoreapi.com/products/${this.$route.params.id}`)
    .then (response => {
      this.productDescription = response.data,
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
 .z {
   width: 100%;
   height: 100%;
  }
  .loader {
    width: 100px;
    height: 100px;
    border: 4px solid rgba(3, 3, 3, 0.459);
    border-top-color: rgb(0, 0, 255);
    position: absolute;
    bottom: 0;
    top: 0;  
    left: 0;
    right: 0;
    margin: auto;
    border-radius: 100%;
    animation: loader 1s infinite linear;
  }
  @keyframes loader {
    100% {
      transform: rotate(360deg);
    }
  }
  .errorclass {
    width: 400px;
  }
</style>