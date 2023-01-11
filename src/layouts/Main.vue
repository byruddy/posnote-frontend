<template>
    <topbar />
    <div class="layout-main">
        
        <div class="container col-xl-10 col-xxl-8 px-4 py-5">
             <div class="row align-items-center g-lg-5 py-5">
            <div class="col-lg-7 text-center text-lg-start">
                <h1 class="display-4 fw-bold lh-1 mb-3 text-primary">POSNOTE <span class="text-danger fw-light">BETA</span></h1>
                <p class="col-lg-10 fs-4">Sebuah aplikasi yang mencatat semua aktivitas pekerjaan dan laporan untuk kebutuhan setiap plant dan dapat digunakan oleh banyak stack holder.</p>
            </div>
            <div class="col-md-10 mx-auto col-lg-5">
                <form class="p-4 p-md-5 border rounded-3 bg-light">
                <div class="form-floating mb-3">
                    <input type="text" class="form-control" id="inputID" placeholder="ID">
                    <label for="inputID">ID</label>
                </div>
                <div class="form-floating mb-3">
                    <input type="password" class="form-control" id="inputPassword" placeholder="Password">
                    <label for="inputPassword">Password</label>
                </div>
                <div class="checkbox mb-3">
                    <label>
                    <input type="checkbox" value="remember-me"> Remember me
                    </label>
                </div>
                <button class="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
                <hr class="my-4">
                <small class="text-muted">Pusat pertanyaan, cek disini jika mengalami kesulitan</small>
                </form>
            </div>
          </div>
        </div>


    </div>
    <footbar />
</template>

<script>
import Topbar from './components/Topbar.vue'
import Footbar from './components/Footbar.vue'

export default {
    components: {Topbar, Footbar}
}
</script>

<style>
body {
    
}
</style>