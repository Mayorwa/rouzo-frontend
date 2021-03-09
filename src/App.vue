<template>
  <div>
    <router-view/>
  </div>
</template>
<script>
  import feather from 'feather-icons';
  import {Auth,} from "./utils/Auth";
  import User from "./models/User";
  export default {
    name: "app",
    data () {
      return {
        connecting: {loggingIn: false, getting_user: true,},
        connecting_error: {loggingIn: false, getting_user: false,},
      };
    },
    mounted() {
      if (Auth.check.isAuthenticated()) {
        this.getUser();
      }
      feather.replace();
    },
    methods: {
      getUser () {
        const user = User.getUser();
        user.then(() => {
          this.connecting.getting_user = false;
        }).catch(() => {
          this.connecting.getting_user = false;
          this.connecting_error.getting_user = true;
        });
      },
      logout () {
        User.logout();
      },
    },
  }
</script>
