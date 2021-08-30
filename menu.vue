<template>
<div>
  <nav class="navbar navbar-expand-lg navbar-light bg-light my-5">
    <div class="container-fluid py-3 bg-light posi">
      <a class="navbar-brand" href="#">shop</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button> 
      <div  class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link to="/" class="mx-2 nav-link" aria-current="page" >Home</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/about" class="mx-2 nav-link" aria-current="page" >About</router-link>
          </li>
          <li class="nav-item">
            <a href="#" v-on:click.prevent="productClick()" class="mx-2 nav-link" :class="{'bt text-danger':this.pro}">Products</a>
          </li>
          <li class="nav-item">
            <a href="#" v-on:click.prevent="profileClick()" class="mx-2 nav-link" :class="{'bt text-danger':this.prop}">Profile</a>
          </li>
          <font-awesome-icon icon="caret-up" :class="{none:this.check2}" class="drop" @click="upchange"></font-awesome-icon>
          <font-awesome-icon icon="caret-down" :class="{none:!this.check}" class="drop" @click="dropchange"></font-awesome-icon>
        </ul>
      </div>
    </div>
  </nav>
  <div :class="{none:this.allnone}">
    <div class="maker" :class="{none:this.check}">
      <li class="nav-item">
        <a href="#" v-on:click.prevent="revremove()" class="zoom onlybut">Login</a>
      </li>
      <li class="nav-item " :class="{none:this.check}">
        <a href="#" v-on:click.prevent="remove()"  class="zoom">Logout</a>
      </li>
    </div> 
  </div> 
</div>
</template>
<script>
export default {
  data() {
    return {
      pro: false,
      prop: false,
      bt: "",
      check: true,
      check2: true,
      allnone: false
    }   
  },
  methods: {
    remove() {
      localStorage.clear()
      this.$router.push("/login", () => {});
      this.allnone=true
      this.check=true
      this.check2=true
    },
    revremove() {
      this.allnone=true
      this.check=true
      this.check2=true
      this.$router.push("/login", () => {});
    },
    dropchange() {
      this.check = false
      this.check2 = false
      if (this.allnone === true) {
        this.allnone = false
      }
    },
    upchange() {
      this.check = true
      this.check2 = true
    },
    productClick() {
      let gg = localStorage.getItem("auth");
      if (gg) {
        this.$router.push("/products", () => {});
        this.pro = false
      } else {
        alert("no")
        this.pro = true
        setTimeout(() => {
          this.pro = false
        }, 2000);
      }
    },
    profileClick() {
      let gg = localStorage.getItem("auth");
      if (gg) {
        this.$router.push("/profile", () => {});
        this.prop = false
      } else {   
        alert("no")
        this.prop = true
        setTimeout(() => {
          this.prop = false
        }, 2000);
      }
    }
  }
}
</script>
<style>
  .onlybut {
    background-color: transparent;
    border: none;
  }
  .none {
    display: none;
  }
  .posi {
    position: fixed;
    top: 0;
    z-index: 1;
    opacity: 0.9;
    
  }
  .drop {
    cursor: pointer;
    z-index: 2;
    user-select: none;
    color: rgb(247, 53, 53);
    font-size: 27px;
  }
  .zoom {
    color: whitesmoke;
    text-decoration: none;
    font-size: 80px;
    position: relative;
    top: 80px;
  }
  .zoom:hover {
    color: rgb(206, 206, 206);
  }
  .zoom:active {
    opacity: 0.2;
  }
  .maker {
    background-color: rgba(0, 0, 0, 0.514);
    position: fixed;
    width: 40%;
    border-radius: 20px;
    z-index: 2;
    left: 0;
    right: 0;
    margin: 0 auto;
    padding: 10px;
    height: 60%;
    list-style: none;
    text-align: center;
    box-shadow: 0 0px 13px 3px rgba(19, 18, 18, 0.568);
  }
</style>


