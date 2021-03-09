<template>
    <div class="page-body">
        <div class="container-fluid">
            <div class="page-header">
                <div class="row">
                    <div class="col-12 py-1">
                        <h3>
                            Referral
                        </h3>
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><a><i data-feather="home"></i></a></li>
                            <li class="breadcrumb-item"><router-link :to="{name: 'dashboardIndex'}">Dashboard</router-link></li>
                            <li class="breadcrumb-item">Referral</li>
                        </ol>
                    </div>
                </div>
            </div>
        </div>
        <div class="container-fluid">
            <div class="row">
                <div class="col-12 col-md-4">
                    <div class="card">
                        <div class="card-header py-3  border-bottom-0">
                            <h5 class="card-title" style="font-size: 17px !important;">Referral Code</h5>
                        </div>
                        <hr class="mx-2 mt-0 mb-0">
                        <div class="card-content" style="border-radius: 10px;">
                            <div class="card-body pb-3 pt-0" style="padding-top: 12px !important;">

                                <div v-if="!madePayment" class="text-center dotted-btn">
                                    Credit your wallet to refer friends
                                    <br>
                                    <a href="" class="btn btn-success mr-1 btn-md mt-2">credit your wallet <i class="fa fa-plus"></i></a>
                                </div>

                                <div v-else class="row">
                                    <div class="col-12">
                                        Share your Referral Code with friends
                                        <div class="row">
                                            <div class="form-group col-9">
                                                <input type="text" class="form-control" id="copyLink" :value="referralLink+userX.slug" disabled="disabled">
                                            </div>
                                            <div class="col-2 px-0">
                                                <button type="button" class="btn btn-icon btn-secondary mr-1" ><i class="fa fa-copy"></i></button>
                                            </div>
                                        </div>
                                        <p>Or Share through social Media</p>
                                        <div class="addthis_inline_share_toolbox" data-url="" data-title="Join Rouzo Now and Invest alongside Thousands of Investors" data-description="Hey friend, check out this cool new platform that allows you to invest in portfolios that finance small businesses and get healthy return" data-media="THE IMAGE"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-md-8">
                    <div class="card">
                        <div class="card-header py-3 border-bottom-0">
                            <h4 class="card-title mb-0" style="font-size: 17px !important;">Referral Performance</h4>
                        </div>
                        <hr class="mx-2 mt-0">
                        <div class="card-content collapse show">
                            <div class="card-body pb-5">
                                <div class="row" style="margin-bottom: 10px;">
                                    <div class="col-md-4 col-12 border-right-blue-grey border-right-lighten-5 text-center">
                                        <p class="blue-grey lighten-2 mb-0">Amount Per Referral (Naira)</p>
                                        <h6 class="text-bold-400"><a class="blue-grey">₦ 0.00</a></h6>
                                    </div>
                                    <div class="col-md-4 col-12 border-right-blue-grey border-right-lighten-5 text-center">
                                        <p class="blue-grey lighten-2 mb-0">Number Of Referrals</p>
                                        <h6 class="text-bold-400"><a class="blue-grey">2 / 20</a></h6>
                                    </div>
                                    <div class="col-md-4 col-12 text-center">
                                        <p class="blue-grey lighten-2 mb-0">Referral Payout</p>
                                        <h6 class="text-bold-400"><a class="blue-grey">1</a></h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col-12">
                    <div class="card pb-1">
                        <div class="card-header py-3">
                            <h5 class="card-title mb-0" style="font-size: 17px !important;">Payout</h5>
                        </div>
                        <div class="card-content collapse show">
                            <div class="card-body">
                                <p>
                                This is the list of people you referred
                                </p>
                                <div v-if="referrals.length > 0" class="table-responsive">
                                    <table class="table">
                                        <thead>
                                        <tr class="borderless">
                                            <th>#</th>
                                            <th>Users name</th>
                                            <th>Made Payment</th>
                                            <th>Signed Up</th>
                                            <th>Date</th>
                                        </tr>
                                        </thead>
                                        <tbody class="borderless">
                                        <tr>
                                            <td>1</td>
                                            <td>dave</td>
                                            <td>
                                                <p class="font-size-17px danger darken-4">
                                                    This user hasn't made a payment yet
                                                </p>
                                            </td>
                                            <td>
                                                <p class="font-size-17px danger darken-4">
                                                    This user hasn't singed up
                                                </p>
                                            </td>

                                            <td>2nd October, 2020</td>

                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div v-else class="text-center dotted-btn width-550">
                                    None of the people you referred has created an account.
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: "dashboardReferral",
        data(){
            return{
                referrals: [],
                madePayment: true,
                connecting: false,
                referralLink: process.env.VUE_APP_ROOT_URL
            }
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
    }
</script>
<style scoped>
    .dotted-btn{
        padding: 30px 30px;
        border: 1px dashed #c4c4c4;
        margin: 0 auto;
    }
</style>
