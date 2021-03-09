import axios from "axios";

export const Auth = {
    get: {
        accessToken (type) {
            const name = type + "=";
            const ca = document.cookie.split(";");
            for (let i = 0; i < ca.length; i++) {
                let c = ca[i];
                while (c.charAt(0) === " ") {
                    c = c.substring(1);
                }
                if (c.indexOf(name) === 0) {
                    return c.substring(name.length, c.length);
                }
            }
            return "";
        },
        bearer () {
            axios.interceptors.request.use(function (config) {
                config.headers.Authorization = "Bearer " + Auth.get.accessToken("rou");
                return config;
            });
        },
        // Origin () {
        //     axios.interceptors.request.use(function (config) {
        //         config.headers.Origin = "http://localhost:4216";
        //         return config;
        //     });
        // },
        /**
         * @return {string}
         */
        URLIntended () {
            return localStorage.getItem("FROM");
        },
    },
    set: {
        accessToken (type, token) {
            // Store In cookie too
            const d = new Date();
            d.setTime(d.getTime() + (99999999 * 24 * 60 * 60 * 1000));
            const expires = "expires=" + d.toUTCString();
            document.cookie = type + "=" + token + ";" + expires + ";path=/";

            // Then Store in LocalStorage
            return localStorage.setItem(type, token);
        },
        URLIntended (url) {
            return localStorage.setItem("FROM", url);
        },
    },
    clear: {
        accessToken () {
            document.cookie = "user=; Path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT;";
            document.cookie = "auth_from=; Path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT;";
            document.cookie = "rou=; Path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT;";
        },
        URLIntended () {
            return localStorage.removeItem("FROM");
        },
    },
    check: {
        isAuthenticated () {
            return !!(Auth.get.accessToken("rou"));
        },
        hasVoted(voteCode){
            // eslint-disable-next-line no-console
            return !!(Auth.get.accessToken(voteCode))
        },
        isEmailValid (email) {
            return this._validateEmail(email);
        },
        doPasswordsMatch (password, passwordConfirmation) {
            return (password === passwordConfirmation);
        },
        isPasswordValid (password) {
            if ((password !== "") && (password.length >= 6)) return true;
        },
    },
    generate: {
        /**
         * @return {string}
         */
        InvalidPasswordError () {
            return "Password should be minimum of 6 Characters.";
        },
        /**
         * @return {string}
         */
        InvalidEmailError () {
            return "Email not in right format yet.";
        },
        /**
         * @return {string}
         */
        InvalidPasswordMatchError () {
            return "Passwords don't match yet.";
        },
    },
};
