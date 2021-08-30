<template>
    <div class="container my-5">
        <div class="row justify-content-center">
        <div class="col-md-6">
            <div class="card">
                <div class="card-body text-center">
                    <input class="input" type="file" @change="upload">
                    <img class='img' v-if="checker" :src="this.src"  >
                    <img class="img" v-if="!checker" src="../assets/a.png"><br><hr>
                    <div class="text-muted">
                        <h1>{{a}}{{b}}</h1>
                    </div><br>
                    <button @click="aa()" v-if="anochecker ? 'none' : ''" class="btn btn-outline-danger">delete</button>&nbsp;
                    <span @click="bb()" v-if="anotchecker">09123456789</span>
                </div>
                <div class="bg-light card-footer  d-flex justify-content-end">
                    <button @click="editor()" class="btn btn-outline-success btn-sm">{{this.edit}}</button>
                </div>
            </div> 
        </div>   
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            a:"", 
            b: '',
            edit: "Edit",
            src: '@/assets/undraw_page_not_found_su7k.svg',
            checker: false,
            anochecker: false,
            anotchecker: true
        }
    },
    methods: {
        editor() {
            if(this.edit === "Edit") {
                this.edit = "Edited"
            } else {
                this.edit = "Edit"
            }    
        },
        upload(e) { 
            let that = this  
            let url = e.target.files[0];
            let reader = new FileReader();
            reader.readAsDataURL(url) 
            reader.onload = () => {
                let result = reader.result;
                that.src = result
                that.checker = true
            }   
        },
        aa() {
            this.anochecker = false
            this.anotchecker = false
        },
        bb() {
            this.anochecker = true
        }
    },
    created() {
        this.a = localStorage.getItem("slicer1") 
        this.b = localStorage.getItem("slicer2");
    }
}
</script>
<style>
    .none {
        display: none;
    }
    .img {
        width: 180px;
        height: 160px;
        border-radius: 20px;
        box-shadow: 0 0 7px 2.5px rgba(0, 0, 0, 0.37);
    }
    .input[type='file'] {
        color: transparent;
    }
    .input {
        position: absolute;
        top: 15px; 
        width: 180px;
        height: 160px;
        opacity: 0;
    }
</style>