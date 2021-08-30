<template>
<div class="container-lg my-5 ">
  <div class="row justify-content-center">
    <div class="col-lg-6">
      <div class="card">
      <div class="card-body">  
        <h1 class="alert alert-danger h5" v-if="message">{{message}}</h1>
        <h3>Log in</h3><br>
        <form @submit.prevent="Form()">
          <div class="form-group">
            <input type="email" v-on:change="emailC" v-model="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
          </div><br>
          <div class="form-group">
            <input type="password" autocomplete='on' v-on:change="passwordP" v-model="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
          </div><br>
          <div class="d-grid gap-2">
            <button type="submit" class="btn btn-primary btn">log in</button>
          </div><br>
        </form> 
      </div>
      <div class="bg-light card-footer">
        <small><span class="mx-2 text-muted">Don`t have an account!</span></small><a class="text-primary text-decoration-none" href="#">Register</a>
      </div>
    </div> 
    </div>   
  </div>
</div>
</template>

<script>
export default {
  name:"login",
  data() {
    return {
      email: "",
      password: "",
      message: "",
      e: false,
      p: false,
      slicer1: '',
      slicer2: ''
    }
  },
  methods: {
    Form() {
      if(this.e && this.p) {
        localStorage.setItem("slicer1", this.slicer1)
        localStorage.setItem("slicer2", this.slicer2)
        localStorage.setItem("password", this.p)
        this.$router.push("/profile")
      } else {
        this.message = "email or password is not incorrect"
      }
    }, 
    emailC() {
      let rege = /^([a-zA-Z0-9_\-\.]+)@([a-z]+)\.com$/;
      if (rege.test(this.email)) {
        this.e = true
      } else {
        this.e = false
      }
      this.slicer1 = this.email.slice(0,-10)
      this.slicer2 = this.email.slice(-10)      
    }, 
    passwordP() {
      let regp = /^[a-zA-Z0-9\W]{8,}$/;
      if (regp.test(this.password)) {
        this.p = true
      } else {
        this.p = false
      }
    }
  },
}
</script>

