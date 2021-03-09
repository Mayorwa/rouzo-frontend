import API from "../utils/API";
import axios from "axios";
import {Auth,} from "../utils/Auth";

export default {
    // eslint-disable-next-line no-unused-vars
    login ({commit,}, payload) {
        return new Promise((resolve, reject) => {
            axios.post(API.login, payload)
                .then(response => {
                    if (response.data.token) {

                        Auth.set.accessToken("rou", response.data.token);
                        commit("updateUser", response.data.data.user);
                        resolve(response);
                    }
                }).catch(error => {
                reject(error);
            });
        });
    },
    // eslint-disable-next-line no-unused-vars
    recover ({commit,}, payload) {
        return new Promise((resolve, reject) => {
            axios.post(API.forgotPassword, payload)
                .then(response => {
                    // eslint-disable-next-line no-console
                    if (response) {
                        resolve(response);
                    }
                }).catch(error => {
                    reject(error);
            });
        });
    },
    // eslint-disable-next-line no-unused-vars
    reset ({commit,}, payload) {
        return new Promise((resolve, reject) => {
            axios.post(API.resetPassword +"/"+payload.token, payload)
                .then(response => {
                    // eslint-disable-next-line no-console
                    if (response) {
                        resolve(response);
                    }
                }).catch(error => {
                    reject(error);
            });
        });
    },
    // eslint-disable-next-line no-unused-vars
    logout ({commit,}, payload) {
        return new Promise((resolve, reject) => {
            Auth.get.bearer();
            axios.get(API.logout)
                .then(response => {
                    resolve(response);
                }).catch(error => {
                reject(error);
            });
        });
    },
    // eslint-disable-next-line no-unused-vars
    register ({commit,}, payload) {
        return new Promise((resolve, reject) => {
            // Auth.get.Origin();
            axios.post(API.register, payload)
                .then(response => {
                    if (response.data.token) {
                        Auth.set.accessToken("rou", response.data.token);
                        commit("updateUser", response.data.user);
                        resolve(response);
                    }
                }).catch(error => {
                reject(error);
            });
        });
    },
    // eslint-disable-next-line no-unused-vars
    getUser ({commit,}) {
        return new Promise((resolve, reject) => {

            Auth.get.bearer();

            axios.get(API.getUser)
                .then(response => {
                    if (response.data) {
                        commit("updateUser", response.data.data.user);
                        commit("updateInvestor", response.data.data.investor);
                    }
                    resolve(response.data);
                })
                .catch(error => {
                    reject(error);
                });
        });
    },
    // eslint-disable-next-line no-unused-vars
    getStash ({commit,}) {
        return new Promise((resolve, reject) => {

            Auth.get.bearer();

            axios.get(API.getStash)
                .then(response => {
                    if (response.data) {
                        commit("updateStash", response.data.data);
                    }
                    resolve(response.data);
                })
                .catch(error => {
                    reject(error);
                });
        });
    },
    // eslint-disable-next-line no-unused-vars
    getPortfolios ({commit,}) {
        return new Promise((resolve, reject) => {

            Auth.get.bearer();

            axios.get(API.getPortfolio)
                .then(response => {
                    resolve(response.data.data);
                })
                .catch(error => {
                    reject(error);
                });
        });
    },
    // eslint-disable-next-line no-unused-vars
    getPortfolio ({commit,}, payload) {
        return new Promise((resolve, reject) => {

            Auth.get.bearer();
            axios.get(API.getOnePortfolio + '/' + payload.portfolioId)
                .then(response => {
                    resolve(response.data.data);
                })
                .catch(error => {
                    reject(error);
                });
        });
    },
    // eslint-disable-next-line no-unused-vars
    getLoanRates ({commit,}, payload) {
        return new Promise((resolve, reject) => {

            Auth.get.bearer();
            axios.get(API.getOneRate + '/' + payload.portfolioId)
                .then(response => {
                    resolve(response.data.data);
                })
                .catch(error => {
                    reject(error);
                });
        });
    },
}
