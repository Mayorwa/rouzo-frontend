import {store,} from "./../store/store";
import {Auth,} from "../utils/Auth";

export default class User{
    id = "";
    email = "";
    password = "";

    static getUser () {
        return new Promise((resolve, reject) => {
            store.dispatch("getUser")
                .then(response => {
                    resolve(response.data.user);
                }).catch(error => {
                if (error.response && error.response.status === 401) {
                    reject(error);
                }
            });
        });
    }

    static logout () {

        return store.dispatch("logout")
        // eslint-disable-next-line no-unused-vars
            .then(data => {

                Auth.set.URLIntended(window.location.pathname);

                Auth.clear.accessToken();
                window.location.href = process.env.BASE_URL;

                // eslint-disable-next-line no-unused-vars
            }).catch(e => {

                Auth.set.URLIntended(window.location.pathname);

                Auth.clear.accessToken();
                window.location.href = process.env.BASE_URL;

            });
    }
}
