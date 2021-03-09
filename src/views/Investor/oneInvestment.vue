<template>
    <div class="page-body">
        <div class="container-fluid">
            <div class="page-header">
                <div class="row">
                    <div class="col-12 py-1">
                        <h3>
                            Investments
                        </h3>
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><a><i data-feather="home"></i></a></li>
                            <li class="breadcrumb-item"><router-link :to="{name: 'dashboardIndex'}">Dashboard</router-link></li>
                            <li class="breadcrumb-item">Investments</li>
                        </ol>
                    </div>
                </div>
            </div>
        </div>
        <div class="container-fluid" v-if="connecting">
            <p>Loading ...</p>
        </div>
        <div v-else class="container-fluid">
            <div class="row">
                <div class="col-md-12">
                    <div class="card pb-3 investDetails seen" id="investDetails">
                        <div class="card-header py-1 pt-5 d-flex border-bottom-0">
                            <h4 class="card-title d-flex align-items-center col-md-10 mb-1">
                                <a>
                                    <i v-if="portfolio.name !== 'asset finance portfolio'" class="btn btn-icon btn-danger btn-lighten-4 border-0" style="padding: 5px 8px !important;">
                                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="34px" height="34px" viewBox="0 0 24 24" version="1.1" class="kt-svg-icon">
                                            <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                                <rect x="0" y="0" width="24" height="24"></rect>
                                                <polygon fill="#d2081f" opacity="0.3" points="12 20.0218549 8.47346039 21.7286168 6.86905972 18.1543453 3.07048824 17.1949849 4.13894342 13.4256452 1.84573388 10.2490577 5.08710286 8.04836581 5.3722735 4.14091196 9.2698837 4.53859595 12 1.72861679 14.7301163 4.53859595 18.6277265 4.14091196 18.9128971 8.04836581 22.1542661 10.2490577 19.8610566 13.4256452 20.9295118 17.1949849 17.1309403 18.1543453 15.5265396 21.7286168"></polygon>
                                                <polygon fill="#d2081f" points="14.0890818 8.60255815 8.36079737 14.7014391 9.70868621 16.049328 15.4369707 9.950447"></polygon>
                                                <path d="M10.8543431,9.1753866 C10.8543431,10.1252593 10.085524,10.8938719 9.13585777,10.8938719 C8.18793881,10.8938719 7.41737243,10.1252593 7.41737243,9.1753866 C7.41737243,8.22551387 8.18793881,7.45690126 9.13585777,7.45690126 C10.085524,7.45690126 10.8543431,8.22551387 10.8543431,9.1753866" fill="#d2081f" opacity="0.3"></path>
                                                <path d="M14.8641422,16.6221564 C13.9162233,16.6221564 13.1456569,15.8535438 13.1456569,14.9036711 C13.1456569,13.9520555 13.9162233,13.1851857 14.8641422,13.1851857 C15.8138085,13.1851857 16.5826276,13.9520555 16.5826276,14.9036711 C16.5826276,15.8535438 15.8138085,16.6221564 14.8641422,16.6221564 Z" fill="#d2081f" opacity="0.3"></path>
                                            </g>
                                        </svg>
                                    </i>
                                    <i v-else class="btn btn-icon btn-info btn-lighten-4 border-0" style="padding: 5px 8px !important;">
                                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="34px" height="34px" viewBox="0 0 24 24" version="1.1" class="kt-svg-icon">
                                            <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                                <rect x="0" y="0" width="24" height="24"/>
                                                <path d="M20.4061385,6.73606154 C20.7672665,6.89656288 21,7.25468437 21,7.64987309 L21,16.4115967 C21,16.7747638 20.8031081,17.1093844 20.4856429,17.2857539 L12.4856429,21.7301984 C12.1836204,21.8979887 11.8163796,21.8979887 11.5143571,21.7301984 L3.51435707,17.2857539 C3.19689188,17.1093844 3,16.7747638 3,16.4115967 L3,7.64987309 C3,7.25468437 3.23273352,6.89656288 3.59386153,6.73606154 L11.5938615,3.18050598 C11.8524269,3.06558805 12.1475731,3.06558805 12.4061385,3.18050598 L20.4061385,6.73606154 Z" fill="#0f7bd4" opacity="0.3"/>
                                                <polygon fill="#0f7bd4" points="14.9671522 4.22441676 7.5999999 8.31727912 7.5999999 12.9056825 9.5999999 13.9056825 9.5999999 9.49408582 17.25507 5.24126912"/>
                                            </g>
                                        </svg>
                                    </i>
                                    <br>
                                </a>
                                <a class="blue-grey font-weight-bold darken-3 ml-2 font-size-20px">{{portfolio.name}}</a>
                            </h4>
                            <div class="col-md-2">
                                <a class="btn btn-info btn-lg font-size-14px text-white font-weight-normal btn-darken-3 investNow" id="investNow" style="padding: 12px 22px">Invest Now</a>
                            </div>
                        </div>
                        <div class="card-content px-5">
                            <div class="card-body px-0">
                                <hr>
                                <div class="table-responsive">
                                    <table class="table">
                                        <thead>
                                        <tr class="borderless text-center">
                                            <th class="grey-blue lighten-1 font-size-16px font-weight-normal">Returns( Per Annum)</th>
                                            <th class="grey-blue lighten-1 font-size-16px font-weight-normal">Amount Per Units</th>
                                            <th class="grey-blue lighten-1 font-size-16px font-weight-normal">Number Of Units</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr class="borderless text-center">
                                            <td class="success darken-3 font-weight-bold font-size-20px">{{portfolio.returnInPer}}%</td>
                                            <td class="success darken-3 font-weight-bold font-size-20px">₦ {{numeral(portfolio.amountPerUnit).format('0,0.00')}}</td>
                                            <td class="grey-blue lighten-2 font-weight-bold font-size-20px">{{portfolio.units}}</td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div class="card px-4" style="border: 1px solid #efefef">
                                    <div class="card-header pt-3 pb-0 px-0 border-bottom-0">
                                        <h4 class="card-title grey-blue lighten-2 font-weight-normal font-size-17px mb-0">
                                            Portfolio Details
                                        </h4>
                                    </div>
                                    <hr>
                                    <div class="card-content">
                                        <div class="card-body py-0">
                                            <div class="table-responsive">
                                                <table class="table">
                                                    <thead>
                                                    <tr class="borderless text-center">
                                                        <th class="grey-blue lighten-1 font-size-16px font-weight-normal">Risk Level</th>
                                                        <th class="grey-blue lighten-1 font-size-16px font-weight-normal">Portfolio Size</th>
                                                        <th class="grey-blue lighten-1 font-size-16px font-weight-normal">Trustee</th>
                                                        <th class="grey-blue lighten-1 font-size-16px font-weight-normal">Management Fee</th>
                                                    </tr>
                                                    </thead>
                                                    <tbody>
                                                    <tr class="borderless text-center">
                                                        <td class="info darken-3 font-size-16px">
                                                            <a>
                                                                <i class="position-relative info" v-if="portfolio.riskLevel === 'low'" style="top: 5px;">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="22px" height="22px" viewBox="0 0 24 24" version="1.1" class="kt-svg-icon">
                                                                        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                                                            <rect x="0" y="0" width="24" height="24"></rect>
                                                                            <path d="M12,15 C10.3431458,15 9,13.6568542 9,12 C9,10.3431458 10.3431458,9 12,9 C13.6568542,9 15,10.3431458 15,12 C15,13.6568542 13.6568542,15 12,15 Z" fill="#000000" fill-rule="nonzero"></path>
                                                                            <path d="M19.5,10.5 L21,10.5 C21.8284271,10.5 22.5,11.1715729 22.5,12 C22.5,12.8284271 21.8284271,13.5 21,13.5 L19.5,13.5 C18.6715729,13.5 18,12.8284271 18,12 C18,11.1715729 18.6715729,10.5 19.5,10.5 Z M16.0606602,5.87132034 L17.1213203,4.81066017 C17.7071068,4.22487373 18.6568542,4.22487373 19.2426407,4.81066017 C19.8284271,5.39644661 19.8284271,6.34619408 19.2426407,6.93198052 L18.1819805,7.99264069 C17.5961941,8.57842712 16.6464466,8.57842712 16.0606602,7.99264069 C15.4748737,7.40685425 15.4748737,6.45710678 16.0606602,5.87132034 Z M16.0606602,18.1819805 C15.4748737,17.5961941 15.4748737,16.6464466 16.0606602,16.0606602 C16.6464466,15.4748737 17.5961941,15.4748737 18.1819805,16.0606602 L19.2426407,17.1213203 C19.8284271,17.7071068 19.8284271,18.6568542 19.2426407,19.2426407 C18.6568542,19.8284271 17.7071068,19.8284271 17.1213203,19.2426407 L16.0606602,18.1819805 Z M3,10.5 L4.5,10.5 C5.32842712,10.5 6,11.1715729 6,12 C6,12.8284271 5.32842712,13.5 4.5,13.5 L3,13.5 C2.17157288,13.5 1.5,12.8284271 1.5,12 C1.5,11.1715729 2.17157288,10.5 3,10.5 Z M12,1.5 C12.8284271,1.5 13.5,2.17157288 13.5,3 L13.5,4.5 C13.5,5.32842712 12.8284271,6 12,6 C11.1715729,6 10.5,5.32842712 10.5,4.5 L10.5,3 C10.5,2.17157288 11.1715729,1.5 12,1.5 Z M12,18 C12.8284271,18 13.5,18.6715729 13.5,19.5 L13.5,21 C13.5,21.8284271 12.8284271,22.5 12,22.5 C11.1715729,22.5 10.5,21.8284271 10.5,21 L10.5,19.5 C10.5,18.6715729 11.1715729,18 12,18 Z M4.81066017,4.81066017 C5.39644661,4.22487373 6.34619408,4.22487373 6.93198052,4.81066017 L7.99264069,5.87132034 C8.57842712,6.45710678 8.57842712,7.40685425 7.99264069,7.99264069 C7.40685425,8.57842712 6.45710678,8.57842712 5.87132034,7.99264069 L4.81066017,6.93198052 C4.22487373,6.34619408 4.22487373,5.39644661 4.81066017,4.81066017 Z M4.81066017,19.2426407 C4.22487373,18.6568542 4.22487373,17.7071068 4.81066017,17.1213203 L5.87132034,16.0606602 C6.45710678,15.4748737 7.40685425,15.4748737 7.99264069,16.0606602 C8.57842712,16.6464466 8.57842712,17.5961941 7.99264069,18.1819805 L6.93198052,19.2426407 C6.34619408,19.8284271 5.39644661,19.8284271 4.81066017,19.2426407 Z" fill="#000000" fill-rule="nonzero" opacity="0.3"></path>
                                                                        </g>
                                                                    </svg>
                                                                </i>
                                                                <i class="position-relative yellow" v-else style="top: 5px;">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="22px" height="22px" viewBox="0 0 24 24" version="1.1" class="kt-svg-icon">
                                                                        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                                                            <rect x="0" y="0" width="24" height="24"></rect>
                                                                            <path d="M12,15 C10.3431458,15 9,13.6568542 9,12 C9,10.3431458 10.3431458,9 12,9 C13.6568542,9 15,10.3431458 15,12 C15,13.6568542 13.6568542,15 12,15 Z" fill="#000000" fill-rule="nonzero"></path>
                                                                            <path d="M19.5,10.5 L21,10.5 C21.8284271,10.5 22.5,11.1715729 22.5,12 C22.5,12.8284271 21.8284271,13.5 21,13.5 L19.5,13.5 C18.6715729,13.5 18,12.8284271 18,12 C18,11.1715729 18.6715729,10.5 19.5,10.5 Z M16.0606602,5.87132034 L17.1213203,4.81066017 C17.7071068,4.22487373 18.6568542,4.22487373 19.2426407,4.81066017 C19.8284271,5.39644661 19.8284271,6.34619408 19.2426407,6.93198052 L18.1819805,7.99264069 C17.5961941,8.57842712 16.6464466,8.57842712 16.0606602,7.99264069 C15.4748737,7.40685425 15.4748737,6.45710678 16.0606602,5.87132034 Z M16.0606602,18.1819805 C15.4748737,17.5961941 15.4748737,16.6464466 16.0606602,16.0606602 C16.6464466,15.4748737 17.5961941,15.4748737 18.1819805,16.0606602 L19.2426407,17.1213203 C19.8284271,17.7071068 19.8284271,18.6568542 19.2426407,19.2426407 C18.6568542,19.8284271 17.7071068,19.8284271 17.1213203,19.2426407 L16.0606602,18.1819805 Z M3,10.5 L4.5,10.5 C5.32842712,10.5 6,11.1715729 6,12 C6,12.8284271 5.32842712,13.5 4.5,13.5 L3,13.5 C2.17157288,13.5 1.5,12.8284271 1.5,12 C1.5,11.1715729 2.17157288,10.5 3,10.5 Z M12,1.5 C12.8284271,1.5 13.5,2.17157288 13.5,3 L13.5,4.5 C13.5,5.32842712 12.8284271,6 12,6 C11.1715729,6 10.5,5.32842712 10.5,4.5 L10.5,3 C10.5,2.17157288 11.1715729,1.5 12,1.5 Z M12,18 C12.8284271,18 13.5,18.6715729 13.5,19.5 L13.5,21 C13.5,21.8284271 12.8284271,22.5 12,22.5 C11.1715729,22.5 10.5,21.8284271 10.5,21 L10.5,19.5 C10.5,18.6715729 11.1715729,18 12,18 Z M4.81066017,4.81066017 C5.39644661,4.22487373 6.34619408,4.22487373 6.93198052,4.81066017 L7.99264069,5.87132034 C8.57842712,6.45710678 8.57842712,7.40685425 7.99264069,7.99264069 C7.40685425,8.57842712 6.45710678,8.57842712 5.87132034,7.99264069 L4.81066017,6.93198052 C4.22487373,6.34619408 4.22487373,5.39644661 4.81066017,4.81066017 Z M4.81066017,19.2426407 C4.22487373,18.6568542 4.22487373,17.7071068 4.81066017,17.1213203 L5.87132034,16.0606602 C6.45710678,15.4748737 7.40685425,15.4748737 7.99264069,16.0606602 C8.57842712,16.6464466 8.57842712,17.5961941 7.99264069,18.1819805 L6.93198052,19.2426407 C6.34619408,19.8284271 5.39644661,19.8284271 4.81066017,19.2426407 Z" fill="#000000" fill-rule="nonzero" opacity="0.3"></path>
                                                                        </g>
                                                                    </svg>
                                                                </i>
                                                                <span v-if="portfolio.riskLevel === 'low'">
                                                                    Low Risk
                                                                </span>
                                                                <span v-else>
                                                                    Medium Risk
                                                                </span>
                                                            </a>
                                                        </td>
                                                        <td class="success darken-3 font-weight-bold font-size-16px">₦ {{numeral(portfolio.size).format('0,0.00')}}</td>
                                                        <td class="grey-blue darken-3 font-weight-normal font-size-16px">{{portfolio.trustee}}</td>
                                                        <td class="grey-blue darken-3 font-size-16px">{{portfolio.managementFee}} %</td>
                                                    </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="card px-4" style="border: 1px solid #efefef">
                                    <div class="card-header pt-3 pb-0 px-0 border-bottom-0">
                                        <h4 class="card-title grey-blue lighten-2 font-weight-normal font-size-17px mb-0">
                                            Interest Options
                                        </h4>
                                        <p><code>Note</code> If your interest option is 12months you won't be able to withdraw your money till the end of the 12th month</p>
                                    </div>
                                    <hr>
                                    <div class="card-content">
                                        <div class="card-body py-0">
                                            <div class="table-responsive">
                                                <table class="table">
                                                    <thead>
                                                    <tr class="borderless text-center">
                                                        <th v-for="(per, month) in loans" class="grey-blue lighten-1 font-size-16px font-weight-normal">{{month}} Months</th>
                                                    </tr>
                                                    </thead>
                                                    <tbody>
                                                    <tr class="borderless text-center">
                                                        <td v-for="(per, month) in loans" class="success darken-3 font-size-17px font-weight-bold">{{per}} %</td>
                                                    </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="card-text px-1">
                                <h5 class="font-weight-bold grey-blue lighten-3">About Portfolio</h5>
                                <p>
                                    {{portfolio.description}}
                                </p>
                                <br>
                                <h5 class="font-weight-bold grey-blue lighten-3">Terms Of Use</h5>
                                <p>
                                    Kindly read through the
                                    <a href="" target="_blank">Investor's Terms of Use</a>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="card buyInvest" id="buyInvest">
                        <div class="card-header py-4 px-3 border-bottom-0">
                            <a class="card-title" id="invBack" href="#" ><i class="fa fa-angle-left pr-2" style="font-size: 17px"></i> Back to Investment Details</a>
                        </div>
                        <div class="card-content collapse show">
                            <div class="card-body">
                                <form action="" class="steps-validation wizard-circle" method="POST">
                                    <!-- Step 1 -->
                                    <h6> </h6>
                                    <fieldset class="mt-1">
                                        <div class="row">
                                            <div class="col-md-6">
                                                <h4>
                                                    How many units would you like to Invest
                                                </h4>
                                                <p><code>Note:</code> 1 unit  = ₦ {{portfolio.amountPerUnit}}</p>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="form-group">
                                                    <label for="units">
                                                        Units :
                                                        <span class="danger">*</span>
                                                    </label>
                                                    <input type="number" class="form-control required" :max="portfolio.units" id="units" name="unitsBought">
                                                </div>
                                            </div>
                                        </div>
                                    </fieldset>
                                    <!-- Step 2 -->
                                    <h6> </h6>
                                    <fieldset>
                                        <input type="hidden" name="amount" id="amountInput">
                                        <input type="hidden" name="months" id="monthInput">
                                        <div class="row">
                                            <div class="col-md-6">
                                                <h4>
                                                    How many months will you like to lock your money in for
                                                </h4>
                                                <p><code>Note:</code> A higher lock period gives a higher interest</p>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="form-group">
                                                    <label for="period">
                                                        Lock Period :
                                                        <span class="danger">*</span>
                                                    </label>
                                                    <select name="percentage" id="period" class="form-control">
                                                        <option v-for="(per, month) in loans" :value="per">{{month}} Months</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                    </fieldset>
                                    <!-- Step 3 -->
                                    <h6> </h6>
                                    <fieldset>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <h4>
                                                    Your <a id="unitsS" class="blue darken-3"></a> investment equates to <br>
                                                    and a <a id="percentS" class="success darken-3"></a> interest for a Lock Period of <a id="monthsS" class="blue darken-3"></a>
                                                </h4>
                                            </div>
                                            <div class="col-md-5 offset-1">
                                                <div class="dotted-btn">
                                                    <h3 class="blue darken-3">
                                                        ₦ <a id="amount"> </a>
                                                    </h3>
                                                </div>
                                                <div class="form-group mt-2">
                                                    <label>Select a Payment Method:</label>
                                                    <div class="ml-1">
                                                        <label>
                                                            <input type="radio" name="paymentMethod" checked value='bank'>
                                                            Pay Via <a href="https://paystack.com/">Paystack</a> (You don't need an account on Paystack to pay)
                                                        </label>
                                                        <br>
                                                        <label>
                                                            <input type="radio" name="paymentMethod" value='stash'>
                                                            Pay Directly from your <router-link :to="{name: 'dashboardStash'}">Savings</router-link>
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </fieldset>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    const numeral = require('numeral');

    export default {
        name: "dashboardInvestment",
        data(){
            return{
                portfolio: {},
                loans: {
                    3: 5,
                    6: 12,
                    9: 21,
                    12: 30
                },
                numeral: numeral,
                connecting: true,
            }
        },
        mounted () {
            this.getPortfolio();
            this.getLoanRate();

        },
        methods: {
            getPortfolio() {
                this.$store.dispatch("getPortfolio", { portfolioId: this.$route.params.id })
                    .then((response) => {
                        this.portfolio = response;
                        this.portfolio.units = parseInt(this.portfolio.size, 10) / parseInt(this.portfolio.amountPerUnit, 10);
                        this.connecting = false;
                    })
                    .catch(error => {
                        console.log(error);
                        this.connecting = false;
                    });
            },
            getLoanRate() {
                this.$store.dispatch("getLoanRates", { portfolioId: this.$route.params.id })
                    .then((response) => {
                        this.loans = {
                            3: response.three,
                            6: response.six,
                            9: response.nine,
                            12: response.twelve,
                        };
                        this.connecting = false;
                        const $investNow = $('#investNow');

                        $investNow.click(function () {
                            console.log("Hey");
                            $("#buyInvest").toggleClass('seen');
                            $("#investDetails").toggleClass('seen');
                        });
                        $("#invBack").on('click',function () {
                            console.log("Heuuuu");
                            $("#buyInvest").toggleClass('seen');
                            $("#investDetails").toggleClass('seen');
                        });

                        var form = $(".steps-validation").show();

                        $(".steps-validation").steps({
                            headerTag: "h6",
                            bodyTag: "fieldset",
                            transitionEffect: "fade",
                            titleTemplate: '<span class="step">#index#</span> #title#',
                            labels: {
                                finish: 'Pay Now'
                            },
                            onStepChanging: function (event, currentIndex, newIndex)
                            {
                                // Allways allow previous action even if the current form is not valid!
                                if (currentIndex > newIndex)
                                {
                                    return true;
                                }
                                // Forbid next action on "Warning" step if the user is to young
                                if (newIndex === 3 && Number($("#age-2").val()) < 18)
                                {
                                    return false;
                                }

                                if (newIndex === 1){
                                    let units = $('#units').val();
                                    let uA = $('#unitAmount').val();

                                    let n = numeral(uA * units);

                                    $('#amountInput').val(uA * units);

                                    $('#unitsS').text(units +" units");
                                    $('#amount').text(n.format('0,0'));
                                }

                                if ( newIndex === 2){
                                    let pr = $('#period').val();
                                    $('#percentS').text(pr +" %");
                                    let month = $('#period option:selected').text();
                                    $('#monthsS').text(month);
                                    $('#monthInput').val(month.split(" ")[0]);
                                }
                                // Needed in some cases if the user went back (clean up)
                                if (currentIndex < newIndex)
                                {
                                    // To remove error styles
                                    form.find(".body:eq(" + newIndex + ") label.error").remove();
                                    form.find(".body:eq(" + newIndex + ") .error").removeClass("error");
                                }
                                form.validate().settings.ignore = ":disabled,:hidden";
                                return form.valid();
                            },
                            onFinishing: function (event, currentIndex)
                            {
                                form.validate().settings.ignore = ":disabled";
                                return form.valid();
                            },
                            onFinished: function (event, currentIndex)
                            {
                                $(this).submit();
                            }
                        });

                        // Initialize validation
                        $(".steps-validation").validate({
                            ignore: 'input[type=hidden]', // ignore hidden fields
                            errorClass: 'danger',
                            successClass: 'success',
                            highlight: function(element, errorClass) {
                                $(element).removeClass(errorClass);
                            },
                            unhighlight: function(element, errorClass) {
                                $(element).removeClass(errorClass);
                            },
                            errorPlacement: function(error, element) {
                                error.insertAfter(element);
                            },
                            rules: {
                                email: {
                                    email: true
                                }
                            }
                        });
                    })
                    .catch(error => {
                        console.log(error);
                        this.connecting = false;
                    });
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
    .borderless th, .borderless td{
        border: none !important;
    }
    .investDetails .card{
        box-shadow: none;
        border: 1px solid rgba(0,0,0,0.1) !important;
        border-radius: 3px;
    }
    .investDetails{
        display: none;
    }
    .investDetails.seen{
        display: block;
    }
    .buyInvest{
        display: none;
    }
    .buyInvest.seen{
        display: block;
    }
</style>
