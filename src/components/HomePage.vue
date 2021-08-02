<template>
    <div class="container-fluid m-0 p-0">
        <div id="home-page" class="full-height p-4">
            <div class="container pt-3">
                <div class="row pb-5">

                    <div class="col-lg-6 my-auto pt-4">

                        <div class="text-center mb-3 d-block d-lg-none">
                            <h1 class="display-3">{{title}}</h1>
                            <h3>Find the world</h3>
                        </div>
                        <img id="home-banner-left" src="../assets/cover.png" class="img-fluid pt-3">

                    </div>
                    <div id="home-banner-rigth" class="col-lg-6 my-auto pt-4">
                        
                        <div class="text-center mb-3 d-none d-lg-block">
                            <h1 class="display-3">{{title}}</h1>
                            <h3>Find the world</h3>
                        </div>
                        <div class="border p-3 p-md-5 bg-white rounded shadow">
                            <h2>Comming Soon</h2>
                            <form @submit.prevent="addEmail(email)">
                                <div class="form-group">
                                    <label for="email-accont">Reserve your accont now, we'll contact you when it's live</label>
                                    <input v-model="email" class="form-control" type="text" id="email-accont" placeholder="Enter Email">
                                    <small id="email-help" class="form-text text-muted">We'll never share your email address</small>
                                    <br>
                                    <button type="submit" class="btn btn-success mt-3">Join waiting list</button>
                                    <div class="mt-4">
                                        <p class="m-0">{{ message }}</p>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div id="available" class="p-2">
                            <h4 class="text-center mb-2 mt-3 text-light">
                                Available On
                            </h4>
                            <div class="row">
                                <div class="col my-auto">
                                    <img src="../assets/download_apple.png" class="float-right img-fluid app_store_img">
                                </div>
                                <div class="col my-auto">
                                    <img src="../assets/download_google.png" class="float-left img-fluid app_store_img">
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
        <div id="about-page" class="half-height p-4">
            <h1>About</h1>
        </div>
        <div id="contact-page" class="half-height p-4">
            <h1>Contact</h1>
        </div>
        <div id="footer-page" class="quarter-height p-4">
            <h1>Footer</h1>
        </div>
    </div>
</template>

<script>

export default {
    data() {
        return {
            title: 'Travel Landing'
        }
    },
}
</script>

<style scoped>
#home-page {
    background: url('../assets/bg-body.jpg') no-repeat center center;
    background-size: cover;
}
#home-banner-left {
    height: 80vh;
    max-height: 80vh;
}
.app_store_img{
    max-height: 80px;
}
</style>
