<template>
    <div>
        <!-- tap on top starts-->
        <div class="tap-top"><i data-feather="chevrons-up"></i></div>
        <!-- tap on tap ends-->
        <!-- page-wrapper Start-->
        <div class="page-wrapper compact-wrapper" id="pageWrapper">
            <!-- Page Header Start-->
                <Header></Header>
            <!-- Page Header Ends-->
            <!-- Page Body Start-->
            <div class="page-body-wrapper sidebar-icon">
                <!-- Page Sidebar Start-->
                <Sidebar></Sidebar>
                <!-- Page Sidebar Ends-->
                <router-view></router-view>
                <!-- footer start-->
                <Footer></Footer>
            </div>
        </div>
    </div>
</template>
<script>
    import Header from '../components/investor/header.vue'
    import Footer from '../components/investor/footer.vue'
    // import side from '../../public/assets/asse/js/sidebar-menu.js'
    import Sidebar from '../components/investor/sidebar.vue'
    import feather from 'feather-icons';
    export default {
        name: "defaultContainer",
        components: {
            Header,
            Footer,
            Sidebar
        },
        mounted() {
            feather.replace();
            $nav = $('.main-nav');
            $header = $('.page-main-header');
            $toggle_nav_top = $('.toggle-sidebar');
            $toggle_nav_top.click(function() {
                let $this = $(this);
                let $nav = $('.main-nav');
                $nav.toggleClass('close_icon');
                $header.toggleClass('close_icon');
            });

            $( window ).resize(function() {
                let $nav = $('.main-nav');
                let $header = $('.page-main-header');
                let $toggle_nav_top = $('.toggle-sidebar');
                $toggle_nav_top.click(function() {
                    let $this = $(this);
                    let $nav = $('.main-nav');
                    $nav.toggleClass('close_icon');
                    $header.toggleClass('close_icon');
                });
            });

            $(".toggle-nav").click(function () {
                $('.nav-menu').css("left", "0px");
            });
            $(".mobile-back").click(function () {
                $('.nav-menu').css("left", "-410px");
            });

            $('.left-menu-header .mega-menu .nav-link').on('click', function (e) {
                $(this).toggleClass("active");
                $(this).parent().children('.mega-menu-container').toggleClass("d-block").slideToggle();
            });

            $('.left-menu-header .link-section > div').on('click', function (e) {
                if ($(window).width() <= 1199) {
                    $(".left-menu-header .link-section > div").removeClass("active");
                    $(this).toggleClass("active");
                    $(this).parent().children('ul').toggleClass("d-block").slideToggle();
                }
            });

            if ($(window).width() <= 1199) {
                $(".left-menu-header .link-section").children('ul').css('display', 'none');
                $(this).parent().children('ul').toggleClass("d-block").slideToggle();
            }
            if ($(window).width() <= 991) {
                $('.main-nav .back-btn').on('click', function (e) {
                    $(".page-main-header").toggleClass("close_icon");
                    $(".main-nav").toggleClass("close_icon");
                });
            }
        }
    }
</script>

<style scoped>
    @import 'https://fonts.googleapis.com/css?family=Rubik:400,400i,500,500i,700,700i&amp;display=swap';
    @import 'https://fonts.googleapis.com/css?family=Roboto:300,300i,400,400i,500,500i,700,700i,900&amp;display=swap';
    @import '/assets/assets/css/fontawesome.css';
    @import '/assets/assets/css/icofont.css';
    @import '/assets/assets/css/themify.css';
    @import '/assets/assets/css/flag-icon.css';
    @import '/assets/assets/css/feather-icon.css';
    @import '/assets/assets/css/animate.css';
    @import '/assets/assets/css/chartist.css';
    @import '/assets/assets/css/date-picker.css';
    @import '/assets/assets/css/bootstrap.css';
    @import '/assets/assets/css/style.css';
    @import '/assets/assets/css/color-1.css';
    @import '/assets/assets/css/responsive.css';
    @import '/assets/assets/css/d-color.css';
    @import '/assets/css/wizard.css';
</style>
