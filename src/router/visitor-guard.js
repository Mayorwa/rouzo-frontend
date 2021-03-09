import {Auth,} from "../utils/Auth";

export default (to, from, next) => {
    if (!Auth.check.isAuthenticated()) {
        next();
    } else {
        next({
            path: "/dashboard/home",
        });
    }
};
