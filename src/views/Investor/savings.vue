<template>
    <div class="page-body">
        <div class="container-fluid">
            <div class="page-header">
                <div class="row">
                    <div class="col-12 py-1">
                        <h3>
                            Savings
                        </h3>
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><a><i data-feather="home"></i></a></li>
                            <li class="breadcrumb-item"><router-link :to="{name: 'dashboardIndex'}">Dashboard</router-link></li>
                            <li class="breadcrumb-item">Savings</li>
                        </ol>
                    </div>
                </div>
            </div>
        </div>
        <div class="container-fluid" v-if="connecting">
            <p>Loading ...</p>
        </div>
        <div class="container-fluid" v-else>
            <div class="row">
                <div class="col-12 col-md-6">
                    <div class="card">
                        <div class="card-header pt-3 pb-2 mb-0 px-4 border-bottom-0">
                            <h6 class="card-title font-weight-normal font-size-18px mb-0"><i class="fa fa-money success darken-4 font-size-16px" title="Balance"></i> Stash Balance</h6>
                        </div>
                        <div class="card-content collapse show">
                            <div class="card-body py-3">
                                <div class="row">
                                    <div class="col-md-6 col-12 border-right-blue-grey border-right-lighten-5 text-center">
                                        <p class="blue-grey lighten-2 mb-0">Available Balance (Naira) <i class="fa fa-info-circle grey-blue darken-4" data-toggle="tooltip" data-placement="top" title="This is the total amount you have immediate access to in your account."></i></p>
                                        <h5 class="success font-weight-normal">₦ {{numeral(stash.available_balance).format('0,0.00')}}</h5>
                                    </div>
                                    <div class="col-md-6 col-12 text-center">
                                        <p class="blue-grey lighten-2 mb-0">Total Balance (Naira) <i class="fa fa-info-circle grey-blue darken-4" data-toggle="tooltip" data-placement="top" title="This is the total amount held in your account, this includes savings and saving's interests."></i></p>
                                        <h5 class="blue-grey font-weight-normal">₦ {{numeral(stash.total_balance).format('0,0.00')}}</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-md-6">
                    <div class="card">
                        <div class="card-header pt-3 pb-2 mb-0 px-4 border-bottom-0">
                            <h6 class="card-title font-weight-normal font-size-18px mb-0"> Transaction</h6>
                        </div>
                        <div class="card-content collapse show">
                            <div class="card-body py-3">
                                <div class="row">
                                    <div class="col-md-6 col-12 border-right-blue-grey border-right-lighten-5 text-center">
                                        <p class="blue-grey lighten-2 mb-0">Credit Transactions (Naira)</p>
                                        <h5 class="blue-grey font-weight-normal"><a class="blue-grey">₦ {{numeral(stash.tranX.credit).format('0,0.00')}}</a></h5>
                                    </div>
                                    <div class="col-md-6 col-12 text-center">
                                        <p class="blue-grey lighten-2 mb-0">Debit Transactions (Naira)</p>
                                        <h5 class="blue-grey font-weight-normal"><a class="blue-grey">₦ {{numeral(stash.tranX.debit).format('0,0.00')}}</a></h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-12">
                    <a href="javascript:void(0);" data-toggle="modal" data-target="#makeWithdrawal" class="btn btn-primary mr-1 btn-md mb-2 float-right border-0">Withdraw savings <i class="fa fa-credit-card"></i></a>
                    <a href="javascript:void(0);" data-toggle="modal" data-target="#makePayment" class="btn btn-success mr-1 btn-md mb-2 float-right border-0">Credit your wallet <i class="fa fa-plus"></i></a>
                    <a href="javascript:void(0);" data-toggle="modal" data-target="#saveToInvest" class="btn btn-blue mr-1 mb-2 float-right border-0">Save to Invest <i class="icon-ion-ios-wallet"></i></a>
                </div>
            </div>
            <div class="row">
                <div class="col-md-12 col-12">
                    <div class="card pb-1 mt-3">
                        <div class="card-content collapse show">
                            <div class="card-body">
                                <ul class="nav nav-pills rouzo-nav pb-4" id="pills-successtab" role="tablist">
                                    <li class="nav-item"><a class="nav-link active" id="pills-successhome-tab" data-toggle="pill" href="#pills-successhome" role="tab" aria-controls="pills-successhome" aria-selected="true" data-original-title="" title=""><i data-feather="home"></i>Transactions</a></li>
                                    <li class="nav-item"><a class="nav-link" id="pills-successprofile-tab" data-toggle="pill" href="#pills-successprofile" role="tab" aria-controls="pills-successprofile" aria-selected="false" data-original-title="" title=""><i data-feather="home"></i>Savings</a></li>
                                    <li class="nav-item"><a class="nav-link" id="pills-successcontact-tab" data-toggle="pill" href="#pills-successcontact" role="tab" aria-controls="pills-successcontact" aria-selected="false" data-original-title="" title=""><i data-feather="home"></i>Withdrawal</a></li>
                                </ul>
                                <div class="tab-content" id="pills-successtabContent">
                                    <div class="tab-pane fade show active" id="pills-successhome" role="tabpanel" aria-labelledby="pills-successhome-tab">
                                        <p class="card-text">The <code>type</code> field shows if the transaction was a credit or debit transaction.<br>
                                            The <code>status</code> field shows if the transaction was successful or failed.
                                        </p>
                                        <div v-if="stash.transactions.length > 0" class="table-responsive">
                                            <vs-pagination class="my-3 float-left" v-model="transactions.page" :length="$vs.getLength(stash.transactions, transactions.max)" />
                                            <table class="table">
                                                <thead>
                                                <tr class="borderless">
                                                    <th>Status</th>
                                                    <th>Transaction</th>
                                                    <th>Actions</th>
                                                </tr>
                                                </thead>
                                                <tbody class="borderless">
                                                <tr v-for="(transaction, index) in $vs.getPage(stash.transactions, transactions.page, transactions.max)" :key="index">
                                                    <td>
                                                        <i v-if="transaction.status === 'success'" class="fa fa-check success"></i>
                                                        <i v-else class="fa fa-times danger"></i>
                                                    </td>
                                                    <td>
                                                        <p class="mb-0 blue darken-1">{{transaction.reference}}</p>
                                                        <a class="font-size-17px success darken-4">₦ {{numeral(transaction.amount).format('0,0.00')}}</a>
                                                        <br>
                                                        <p class="blue darken-1">{{transaction.created_at}}</p>
                                                    </td>
                                                    <td>
                                                        <a class="btn btn-outline-info info mx-1 my--01" data-toggle="modal" :data-target="'#details'+index">
                                                            View Full Details
                                                        </a>
                                                        <div :id="'details'+index" class="modal fade" role="dialog">
                                                            <div class="modal-dialog modal-dialog-centered">
                                                                <!-- Modal content-->
                                                                <div class="modal-content px-2" style="border: none">
                                                                    <div class="modal-header px-2" style="justify-content: normal; border-bottom: 1px solid #c6d4df">
                                                                        <div>
                                                                            <h6 class="font-size-16px grey-blue font-weight-bold lighten-2">{{transaction.reference}}</h6>
                                                                            <a class="info">{{transaction.created_at}}</a>
                                                                        </div>
                                                                    </div>
                                                                    <div class="modal-body px-4">
                                                                        <dl class="row">
                                                                            <dt class="blue-grey darken-1">Amount: </dt>
                                                                            <dd class="success ml-1">₦ {{numeral(transaction.amount).format('0,0.00')}}</dd>
                                                                        </dl>
                                                                        <dl class="row">
                                                                            <dt class="blue-grey darken-1">Type: </dt>
                                                                            <dd class="ml-1">
                                                                                <button v-if="transaction.type === 'debit'" type="button" class="btn mr-1 mb-1 btn-outline-danger btn-sm">Investment</button>
                                                                                <button v-else type="button" class="btn mr-1 mb-1 btn-outline-success btn-sm">Credit</button>
                                                                            </dd>
                                                                        </dl>
                                                                        <dl class="row">
                                                                            <dt class="blue-grey darken-1">Reference: </dt>
                                                                            <dd class="ml-1"> {{transaction.reference}}</dd>
                                                                        </dl>
                                                                        <dl class="row">
                                                                            <dt class="blue-grey darken-1">Date: </dt>
                                                                            <dd class="ml-1 blue">{{transaction.created_at}}</dd>
                                                                        </dl>
                                                                        <dl class="row">
                                                                            <dt class="blue-grey darken-1">Message: </dt>
                                                                            <dd class="ml-1"> {{transaction.message}}</dd>
                                                                        </dl>
                                                                    </div>
                                                                    <div class="modal-footer" style="border-top: 1px solid #c6d4df">
                                                                        <a data-dismiss="modal" class="text-center m-auto info" style="text-decoration: underline">Dismiss</a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                        <div v-else class="text-center dotted-btn width-550">
                                            You haven't made any transaction Yet
                                            <br>
                                            <a href="javascript:void(0);" data-toggle="modal" data-target="#makePayment" class="btn btn-success mr-1 btn-md mt-2">credit your wallet <i class="fa fa-plus"></i></a>
                                        </div>
                                    </div>
                                    <div class="tab-pane fade" id="pills-successprofile" role="tabpanel" aria-labelledby="pills-successprofile-tab">
                                        <div v-if="stash.savings.length > 0" class="table-responsive">
                                            <table class="table">
                                                <thead>
                                                <tr class="borderless">
                                                    <th>Name</th>
                                                    <th>Actions</th>
                                                </tr>
                                                </thead>
                                                <tbody class="borderless">
                                                <tr v-for="(saving, index) in stash.savings" :key="index">
                                                    <td>
                                                        <a href="">{{saving.name}}</a>
                                                    </td>
                                                    <td>
                                                        <a class="btn btn-outline-info info mx-1 my--01" data-toggle="modal" :data-target="'#detail'+index">
                                                            View Full Details
                                                        </a>
                                                        <div :id="'detail'+index" class="modal fade" role="dialog">
                                                            <div class="modal-dialog modal-dialog-centered">
                                                                <!-- Modal content-->
                                                                <div class="modal-content px-2" style="border: none">
                                                                    <div class="modal-header px-2" style="justify-content: normal; border-bottom: 1px solid #c6d4df">
                                                                        <div>
                                                                            <h6 class="font-size-16px grey-blue font-weight-bold lighten-2">{{saving.name}}</h6>
                                                                            <a class="info">{{saving.created_at}}</a>
                                                                        </div>
                                                                    </div>
                                                                    <div class="modal-body px-4">
                                                                        <dl class="row">
                                                                            <dt class="blue-grey darken-1">Amount: </dt>
                                                                            <dd class="success ml-1">₦ {{numeral(saving.amount).format('0,0.00')}}</dd>
                                                                        </dl>
                                                                        <dl class="row">
                                                                            <dt class="blue-grey darken-1">Interval: </dt>
                                                                            <dd class="ml-1">
                                                                                {{saving.interval.period}}
                                                                            </dd>
                                                                        </dl>
                                                                        <dl class="row">
                                                                            <dt class="blue-grey darken-1">Reference: </dt>
                                                                            <dd class="ml-1"> {{saving.reference}}</dd>
                                                                        </dl>
                                                                        <dl class="row">
                                                                            <dt class="blue-grey darken-1">Savings span: </dt>
                                                                            <dd class="ml-1" v-if="saving.interval.period === 'monthly'"> {{saving.interval.periodLength}} months</dd>
                                                                            <dd class="ml-1" v-else-if="saving.interval.period === 'weekly'"> {{Math.floor(saving.interval.periodLength / 4)}} months</dd>
                                                                            <dd class="ml-1" v-else> {{Math.floor(saving.interval.periodLength / 30)}} months</dd>
                                                                        </dl>
                                                                        <dl class="row">
                                                                            <dt class="blue-grey darken-1">Savings Progress: </dt>
                                                                            <dd class="ml-1" v-if="saving.interval.period === 'monthly'"> {{saving.interval.periodPaid}} month(s) / {{saving.interval.periodLength}} months</dd>
                                                                            <dd class="ml-1" v-else-if="saving.interval.period === 'weekly'"> {{saving.interval.periodPaid}} week(s) / {{Math.floor(saving.interval.periodLength / 4)}} months</dd>
                                                                            <dd class="ml-1" v-else> {{saving.interval.periodPaid}} day(s) / {{Math.floor(saving.interval.periodLength / 30)}} months</dd>
                                                                        </dl>
                                                                        <dl class="row">
                                                                            <dt class="blue-grey darken-1">Next Payment: </dt>
                                                                            <dd class="ml-1">{{saving.nextPayment}}</dd>
                                                                        </dl>
                                                                    </div>
                                                                    <div class="modal-footer" style="border-top: 1px solid #c6d4df">
                                                                        <a data-dismiss="modal" class="text-center m-auto info" style="text-decoration: underline">Dismiss</a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                        <div v-else class="text-center dotted-btn width-550">
                                            You haven't created any Savings Plan Yet
                                            <br>
                                            <a href="javascript:void(0);" data-toggle="modal" data-target="#makePayment" class="btn btn-success mr-1 btn-md mt-2">credit your wallet <i class="fa fa-plus"></i></a>
                                        </div>
                                    </div>
                                    <div class="tab-pane fade" id="pills-successcontact" role="tabpanel" aria-labelledby="pills-successcontact-tab">
                                        <div v-if="stash.transfers.length > 0" class="table-responsive">
                                            <table class="table">
                                                <thead>
                                                <tr class="borderless">
                                                    <th>Status</th>
                                                    <th>Amount</th>
                                                    <th>Message</th>
                                                    <th>Date</th>
                                                </tr>
                                                </thead>
                                                <tbody class="borderless">
                                                <tr v-for="(transfer, index) in stash.transfers" :key="index">
                                                    <td>
                                                        <i v-if="transfer.otpConfirmed === true" class="fa fa-check success" title="This transaction has been confirmed"></i>
                                                        <i v-else class="fa fa-times warning" title="This transaction is pending"></i>
                                                    </td>
                                                    <td class="px-1">
                                                        <p class="font-size-17px success darken-4">
                                                            ₦ {{numeral(transfer.amount).format('0,0.00')}}
                                                        </p>
                                                    </td>

                                                    <td class="px-1">
                                                        <p v-if="transfer.otpConfirmed === true" class="mb-0">The Money has been disbursed</p>
                                                        <p v-else class="mb-0">The Money will be disbursed soon</p>
                                                    </td>
                                                    <td class="px-1">{{transfer.created_at}}</td>

                                                </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                        <div v-else class="text-center dotted-btn width-250">
                                            You haven't made any withdrawal Yet
                                            <br>
                                            <a href="javascript:void(0);" data-toggle="modal" data-target="#makeWithdrawal" class="btn btn-primary mr-1 btn-md mb-2">Withdraw savings <i class="fa fa-credit-card"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="makePayment" class="modal fade" role="dialog">
                <div class="modal-dialog modal-sm">

                    <!-- Modal content-->
                    <div class="modal-content">
                        <div class="modal-header">
                            <h6 class="font-size-18px font-weight-bold">Credit Your Stash</h6>
                            <button type="button" class="close" data-dismiss="modal">&times;</button>
                        </div>

                        <div>
                            <div class="modal-body">
                                <input type="hidden" name="type" value="crd">

                                <div class="form-group">
                                    <label for="amountSavings">Amount in Naira (₦)</label>
                                    <input type="number" v-model="amount" id="amountSavings" class="form-control" required="required">
                                </div>
                            </div>
                            <div class="modal-footer">
                                <a href="javascript:void(0);" class="danger" data-dismiss="modal">Close</a>
                                <paystack
                                        class="btn btn-sm btn-success"
                                        :amount="amount * 100"
                                        :email="user.email"
                                        :paystackkey="PUBLIC_KEY"
                                        :reference="reference"
                                        :callback="processStashPayment"
                                        :close="close"
                                >
                                    Proceed to Payment
                                </paystack>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
            <div id="saveToInvest" class="modal fade" role="dialog">
                <div class="modal-dialog">

                    <!-- Modal content-->
                    <div class="modal-content">
                        <div class="modal-header">
                            <h6 class="font-size-18px font-weight-bold">Save To Invest</h6>
                            <button type="button" class="close" data-dismiss="modal">&times;</button>
                        </div>

                        <div>
                            <div class="modal-body">

                                <div class="form-group d-flex">
                                    <div class="mr-1">
                                        <label for="investName">Savings Name</label>
                                        <input type="text" v-model="saving_plan.name" id="investName" class="form-control" required="required">
                                    </div>
                                    <div>
                                        <label for="investAmount">Amount in Naira (₦)</label>
                                        <input type="number" v-model="saving_plan.amount" id="investAmount" class="form-control" required="required">
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label for="interval">Saving Interval <i class="fa fa-info-circle" title="how frequent do you want ton save?"></i></label>
                                    <select class="form-control" v-model="saving_plan.period" id="interval">
                                        <option value="daily">Daily</option>
                                        <option value="weekly">Weekly</option>
                                        <option value="monthly">Monthly</option>
                                    </select>
                                </div>
                                <div class="form-group">
                                    <label for="span">Investment span <i class="fa fa-info-circle" title="how long do you want to invest?"></i></label>
                                    <select class="form-control" v-model="saving_plan.periodLength" id="span">
                                        <option value="3">3 months (3% interest)</option>
                                        <option value="6">6 months (6.5% interest)</option>
                                        <option value="9">9 months (11% interest)</option>
                                        <option value="12">12 months (15% interest)</option>
                                    </select>
                                </div>
                                <p><code>Note:</code>your will make the first payment now so as to store your details for subsequent payment</p>
                            </div>
                            <div class="modal-footer">
                                <a href="javascript:void(0);" class="danger" data-dismiss="modal">Close</a>
                                <paystack
                                        class="btn btn-sm btn-success"
                                        :amount="saving_plan.amount * 100"
                                        :email="user.email"
                                        :paystackkey="PUBLIC_KEY"
                                        :reference="reference"
                                        :metadata="{'custom_fields': [saving_plan]}"
                                        :callback="processPayment"
                                        :close="close"
                                >
                                    Proceed to Payment
                                </paystack>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
            <div id="makeWithdrawal" class="modal fade" role="dialog">
                <div class="modal-dialog modal-sm">

                    <!-- Modal content-->
                    <div class="modal-content">
                        <div class="modal-header">
                            <h6 class="font-size-18px font-weight-bold">Withdraw from savings</h6>
                            <button type="button" class="close" data-dismiss="modal">&times;</button>
                        </div>

                        <form method="POST" enctype="multipart/form-data" id="getAmt">
                            <div class="modal-body">
                                <div class="form-group">
                                    <label for="amount">Amount in Naira (₦)</label>
                                    <input type="number" name="amount" id="amount" class="form-control" required="required">
                                </div>
                            </div>
                            <p class="mx-1"><code>Note:</code> The money will be transferred to the <router-link :to="{name: 'dashboardSettings'}">account set during your bank verification</router-link></p>
                            <div class="modal-footer">
                                <a href="javascript:void(0);" class="danger" data-dismiss="modal">Close</a>
                                <button type="submit" id="activeBtn" class="btn btn-sm btn-success text-white font-size-14px">Withdraw</button>
                                <button type="submit" id="inactiveBtn" class="btn btn-sm btn-success text-white font-size-14px" style="display: none" disabled>Processing Withdrawal ... <i class="fa fa-spinner fa-spin"></i></button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <!--<div class="modal fade bd-example-modal-sm" id="stashModal" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-md modal-dialog-centered">
                <div class="modal-content border-0">
                    <div class="modal-header border-0 p-0 pr-2 pt-1">
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body font-size-16 font-weight-bold py-0">
                        Hi there 👋,
                        <br>
                        <p class="py-1">
                            &nbsp;&nbsp;&nbsp;&nbsp;Do you know you can purchase units and Invest in any of our <router-link :to="{name: 'dashboardInvestment'}">Portfolios</router-link>
                        </p>
                    </div>
                    <div class="modal-footer border-0 pt-0">
                        <button type="button" class="btn btn-outline-danger" data-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>-->
    </div>
</template>
<script>
    import env from "../../utils/environment";
    import paystack from 'vue-paystack';
    import API from "../../utils/API";
    import axios from "axios";
    import {Auth,} from "../../utils/Auth";
    const numeral = require('numeral');
    export default {
        name: "dashboardInvestment",
        data(){
            return{
                connecting: true,
                numeral: numeral,
                transactions: {page: 1, max: 10},
                amount: 100,
                saving_plan: {
                    name: '',
                    amount: 100,
                    period: 'daily',
                    periodLength: 3
                },
                PUBLIC_KEY: env.paystack_publickey
            }
        },
        components: {
            paystack
        },
        mounted () {
            this.getStashDetails();
        },
        computed:{
            stash () {
                return this.$store.getters.stash;
            },
            user () {
                return this.$store.getters.user;
            },
            reference() {
                let text = "";
                let possible =
                    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
                for (let i = 0; i < 10; i++)
                    text += possible.charAt(Math.floor(Math.random() * possible.length));
                return text;
            }
        },
        methods: {
            getStashDetails () {
                this.$store.dispatch("getStash")
                    .then(() => {
                        this.connecting = false;
                    })
                    .catch(error => {
                        this.connecting = false;
                    });
            },
            processPayment: (response) => {
                return new Promise((resolve, reject) => {

                    Auth.get.bearer();
                    axios.post(API.createSavings, {
                        gateway: 'paystack',
                        reference: response.reference,
                    })
                        .then(response => {
                            $('#saveToInvest').modal('toggle');
                            location.reload();
                            resolve(response);
                        })
                        .catch(error => {
                            reject(error);
                        });
                });
            },
            processStashPayment: (response) => {
                return new Promise((resolve, reject) => {

                    Auth.get.bearer();
                    axios.post(API.creditStash, {
                        gateway: 'paystack',
                        reference: response.reference,
                    })
                        .then(response => {
                            $('#makePayment').modal('toggle');
                            location.reload();
                            resolve(response);
                        })
                        .catch(error => {
                            reject(error);
                        });
                });
            },
            close: () => {
                console.log("You closed checkout page")
            },
        }
    }
</script>
<style scoped>
    .dotted-btn{
        padding: 30px 30px;
        border: 1px dashed #c4c4c4;
        margin: 0 auto;
    }
    .font-size-14px{
        font-size: 14px;
    }
    .font-size-15px{
        font-size: 15px;
    }
    .font-size-16px{
        font-size: 16px;
    }
    .font-size-17px{
        font-size: 17px;
    }
    .font-size-18px{
        font-size: 18px;
    }
    .font-size-19px{
        font-size: 19px;
    }
    .font-size-20px{
        font-size: 20px;
    }
    .rouzo-nav .nav-item .nav-link svg{
        margin-right: 10px;
        padding-top: 2px;
        width: 15px;
        height: 15px;
    }

</style>
