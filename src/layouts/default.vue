<template>
    <div id="default">
        <Header></Header>
            <router-view></router-view>
        <Footer></Footer>
    </div>
</template>
<script>
    import Header from '../components/defaults/header.vue'
    import Footer from '../components/defaults/footer.vue'
    export default {
        name: "defaultContainer",
        components: {
            Header,
            Footer,
        }
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
    @import '/assets/css/main.css';
    @import '/assets/css/styles.css';
</style>
