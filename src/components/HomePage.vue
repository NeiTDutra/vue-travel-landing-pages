<template>
    <div class="container-fluid m-0 p-0">
        <div id="home-page" class="full-height bg-warning p-4">
            <h1>Travel Landing</h1>
            <div class="container p-3">
                <div id="home-banner" class="row">

                    <div id="home-banner-left" class="col-lg-6">

                        <div class="text-center mb-3 d-block d-lg-none">
                            <h1 class="display-3">{{title}}</h1>
                            <h3>Find the world</h3>
                        </div>
                        <img src="../assets/cover.png" class="img-fluig pt-3">

                    </div>
                    <div id="home-banner-rigth" class="col-lg-6">
                        
                        <div class="text-center mb-3 d-none d-lg-block">
                            <h1 class="display-3">{{title}}</h1>
                            <h3>Find the world</h3>
                        </div>
                        <div class="border p-3 p-md-5 bg-white rounded shadow">
                            <h2>Comming Soon</h2>
                            <form action="">
                                <div class="form-group">
                                    <label for="email-accont">Reserve your accont now, we'll contact you when it's live</label>
                                    <input class="form-control" type="text" id="email-accont" placeholder="Enter Email">
                                    <small id="email-help" class="form-text text-muted">We'll never share your email address</small>
                                    <br>
                                    <button type="submit" class="btn btn-success mt-3">Join waiting list</button>
                                </div>
                            </form>
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
            title: 'Pick Travel'
        }
    },
}
</script>

<style scoped>
#home-page {
    background-image: url('../assets/bg-body.jpg');
    background-size: cover;
}
#home-banner img {
    min-height: 80vh;
}
</style>
