import {Auth,} from "../utils/Auth";

export default (to, from, next) => {
    if (Auth.check.isAuthenticated()) {
        next();
    } else {
        // Store existing location in local_storage
        localStorage.setItem("FROM", to.fullPath);

        // eslint-disable-next-line no-undef
        if (typeof $ !== "undefined") {
            // eslint-disable-next-line no-undef
            next({path: '/login',});

        } else {
            next({ path: "/dashboard/home", });
        }
    }
};
