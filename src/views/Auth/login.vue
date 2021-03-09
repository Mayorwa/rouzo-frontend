<template>
    <div class="app-content content blank-page">

        <div class="content-right">
            <div class="content-wrapper">
                <div class="content-body">
                    <section class="flexbox-container">
                        <div class="col-12 d-flex align-items-center justify-content-center">
                            <div class="col-md-7 col-10 box-shadow-0 p-0">
                                <div class="card box-shadow-0 bg-transparent border-0 m-0">
                                    <div class="card-header bg-transparent border-0">
                                        <div class="card-title text-left height-100-per">
                                            <div class="pt-1 mb-2">
                                                <img src="/assets/logo.png" width="150px" alt="branding logo">
                                            </div>
                                        </div>
                                        <p class="text-black pb-3" style="font-size: 27px;">Welcome Back,</p>
                                        <p>Login to your account.</p>
                                        <hr>
                                    </div>
                                    <div class="card-content">
                                        <div class="card-body pt-0">
                                            <form @submit.prevent="submitted" class="form-horizontal" method="POST">
                                                <fieldset class="form-group floating-label-form-group">
                                                    <label for="email">Email</label>
                                                    <input type="text" name="email" class="form-control" id="email" placeholder="Email Address" v-model="email" required>
                                                </fieldset>
                                                <fieldset class="form-group floating-label-form-group mb-1">
                                                    <label for="user-password">Password</label>
                                                    <input type="password" name="password" class="form-control" v-model="password" id="user-password" placeholder="Enter Password" required>
                                                </fieldset>
                                                <div class="form-group row">
                                                    <div class="col-md-6 col-12 float-sm-left"><a href="" class="card-link">Forgot Password?</a></div>
                                                </div>
                                                <button type="submit" class="btn btn-primary px-3 border-radius-none" :disabled="connecting"><i class="ft-unlock"></i> {{ connecting ? "Logging In" : "Log In" }}</button>

                                                <p class="mt-3">Don't have an account? <a href="">Register</a></p>
                                                <p class="">Register as an <a href="">Business.</a></p>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>

        <div class="sidebar-left">
            <div class="sidebar sidebar-fixed overflow-hidden" style="height: calc(100vh - 44px);background-image:linear-gradient(transparent,rgba(0,0,0,0.2)),url(https://images.unsplash.com/photo-1587235964726-7ede02d4e2d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80);background-size: cover;background-repeat: no-repeat;">
                <div class="card-title text-left height-100-per">
                    <div class="pt-1 pl-2 mb-3 position-relative height-90-per">
                        <p class="position-absolute position-bottom-0 text-white font-size-17px">Everything is still arranged the same way you left it.<br>Jump right back</p>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>
<script>

    export default {
        name: 'Login',
        props: {},
        data() {
            return{
                email: "",
                password: "",
                connecting: false,
            }
        },
        methods:{
            submitted () {
                this.connecting = true;
                this.$store.dispatch("login", {
                    email: this.email,
                    password: this.password,
                    // eslint-disable-next-line no-unused-vars
                }).then(response => {
                    this.$vs.notification({
                        color: 'success',
                        position: 'top-right',
                        title: 'Login Successful'
                    });
                    this.connecting = false;
                    this.$router.push({ name: 'dashboardIndex'});

                    // eslint-disable-next-line no-unused-vars
                }).catch(error => {
                    this.connecting = false;
                    this.$vs.notification({
                        color: 'danger',
                        position: 'top-right',
                        title: error.response.data.message
                    });
                });
            },
        },
    }
</script>
