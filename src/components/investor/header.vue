<template>
    <div class="page-main-header">
        <div class="main-header-right row m-0">
            <div class="main-header-left">
                <div class="logo-wrapper"><a href="index.html"><img class="img-fluid" src="/assets/assets/images/logo/logo.png" alt=""></a></div>
                <div class="toggle-sidebar"><i class="status_toggle middle" data-feather="menu" id="sidebar-toggle"> </i></div>
            </div>
            <div class="left-menu-header col horizontal-wrapper pl-0">
                <ul class="horizontal-menu">
                </ul>
            </div>
            <div class="nav-right col-8 pull-right right-menu">
                <ul class="nav-menus">
                    <li class="nav-item">
                        <a class="nav-link investor-pill" href="#" data-original-title="" title="">
                            <span>investor</span>
                        </a>
                    </li>
                    <li class="dropdown dropdown-user nav-item">
                        <a class="dropdown-toggle nav-link" href="#" data-toggle="dropdown">
                            <span class="mr-1">Hello,
                              <span class="user-name text-bold-700">{{userX.name}} </span>
                            </span>
                        </a>
                        <div class="dropdown-menu dropdown-menu-right">
                            <a class="dropdown-item"><i data-feather="power"></i> Logout</a>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<style scoped>
    .page-main-header .main-header-right{
        padding: 16px 30px;
    }
    .page-wrapper .nav-right .nav-menus{
        margin-right: 0 !important;
    }
    .investor-pill{
        display: inline-block;
        left: 0;
        top: 0;
        border-radius: 5px;
        background-color: rgb(210 236 252);
        -webkit-transition: all 0.3s ease;
        transition: all 0.3s ease;
        color: #2193dd;
    }
</style>
<script>
    import User from "../../models/User";

    export default {
        name: "dashboardHeader",
        data () {
            return {
                connecting: false,
            };
        },
        mounted () {
            this.getUser();
        },
        computed:{
            userX () {
                return this.$store.getters.user;
            },
        },
        methods: {
            getUser () {
                const user = User.getUser();
                user.then(() => {
                    this.connecting = false;
                }).catch(() => {
                    this.connecting = false;
                    this.connecting = true;
                });
            },
            logout () {
                User.logout();
            },
        },
    };
</script>
