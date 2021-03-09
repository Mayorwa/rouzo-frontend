<template>
    <div id="auth">
        <router-view></router-view>
        <Footer></Footer>
    </div>
</template>
<script>
    import {DynamicAssets} from "../utils/DynamicAssets";
    import Footer from '../components/auth/footer.vue'
    export default {
        name: "authContainer",
        components: {
            Footer,
        },
        mounted() {
            DynamicAssets.loadScriptPage();
        },
    }
</script>
<style scoped>
    @import '/assets/css/bootstrap.min.css';
    @import '/assets/css/fontawesome/fontawesome.min.css';
    @import '/assets/css/fontawesome/solid.min.css';
    @import '/assets/css/fontawesome/brands.min.css';
    @import '/assets/css/fontawesome/regular.min.css';
    @import '/assets/css/bootstrap-select.min.css';
    @import '/assets/css/animate.css';
    @import '/assets/css/styles.css';
    @import '/assets/css/login.css';
</style>
<link rel="stylesheet" href="https://unpkg.com/vue-form-wizard/dist/vue-form-wizard.min.css">
