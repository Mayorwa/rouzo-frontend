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
                                            <form-wizard>
                                                <tab-content title="Personal details">
                                                    My first tab content
                                                </tab-content>
                                                <tab-content title="Additional Info">
                                                    My second tab content
                                                </tab-content>
                                                <tab-content title="Last step">
                                                    Yuhuuu! This seems pretty damn simple
                                                </tab-content>
                                            </form-wizard>
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
    import {FormWizard, TabContent} from 'vue-form-wizard'
    import 'vue-form-wizard/dist/vue-form-wizard.min.css'
    export default {
        name: 'Investor',
        components: {
            FormWizard,
            TabContent
        }
    }
</script>
