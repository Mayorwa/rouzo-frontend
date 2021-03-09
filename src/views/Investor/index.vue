<template>
    <div class="page-body">
        <div class="container-fluid">
            <div class="page-header">
                <div class="row">
                    <div class="col-12 py-1">
                        <h3>
                            Home</h3>
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><a><i data-feather="home"></i></a></li>
                            <li class="breadcrumb-item">Dashboard</li>
                        </ol>
                    </div>
                </div>
            </div>
        </div>
        <div class="container-fluid">
            <div class="row overflow-auto flex-nowrap">
                <div class="col-md-4 col-10">
                    <div class="card browser-widget">
                        <div class="media card-body">
                            <div class="media-img"><img src="/assets/assets/images/saving.svg" alt=""></div>
                            <div class="px-3">
                                <h5 class="blue-grey darken-3">Savings Plan</h5>
                                <p class="grey-blue lighten-1">Don't have enough cash to invest?</p>
                                <a tag="button" href="/dashboard/stash" class="btn btn-success btn-darken-1">
                                    <span class="mr-2">start earning</span>
                                    <i class="fa fa-arrow-right"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 col-10">
                    <div class="card browser-widget">
                        <div class="media card-body">
                            <div class="media-img"><img src="/assets/assets/images/investment.svg" alt=""></div>
                            <div class="px-3">
                                <h5 class="blue-grey darken-3">My Investments</h5>
                                <p class="grey-blue lighten-1">Don't have enough cash to invest?</p>
                                <a tag="button" href="/dashboard/investment" class="btn btn-success btn-darken-1 right">
                                    <span class="mr-2">jump back in </span>
                                    <i class="fa fa-arrow-right"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-6">
                    <div class="card">
                        <div class="card-header py-3">
                            <h5 class="card-title mb-0">
                                Account Statistics
                            </h5>
                        </div>
                        <div class="card-body">
                            <vc-donut background="white" foreground="grey"
                                      :size="300" unit="px" :thickness="10"
                                      has-legend legend-placement="right"
                                      :sections="sections" :total="100"
                                      :start-angle="0" :auto-adjust-text-size="true"
                                      @section-click="handleSectionClick">
                                <h4 class="grey-blue lighten-3 font-weight-normal">Net Worth</h4>
                                <h2 class="grey-blue lighten-1 font-weight-normal">₦ 22,000.00</h2>
                            </vc-donut>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 xl-100 box-col-12">
                    <div class="widget-joins card widget-arrow">
                        <div class="card-header py-3">
                            <h5 class="card-title mb-0">
                                Account Details
                            </h5>
                        </div>
                        <div class="row">
                            <div class="col-sm-6 pr-0">
                                <div class="media border-after-xs">
                                    <div class="align-self-center mr-3 text-left">
                                        <h6 class="mb-1 blue-grey lighten-1 font-weight-normal">invested money</h6>
                                        <h4 class="mb-0 blue">Funds</h4>
                                    </div>
                                    <div class="media-body align-self-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" class="kt-svg-icon" version="1.1">
                                            <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                                <rect x="0" y="0" width="24" height="24"/>
                                                <path d="M16.0322024,5.68722152 L5.75790403,15.945742 C5.12139076,16.5812778 5.12059836,17.6124773 5.75613416,18.2489906 C5.75642891,18.2492858 5.75672377,18.2495809 5.75701875,18.2498759 L5.75701875,18.2498759 C6.39304347,18.8859006 7.42424328,18.8859006 8.060268,18.2498759 C8.06056298,18.2495809 8.06085784,18.2492858 8.0611526,18.2489906 L18.3196731,7.9746922 C18.9505124,7.34288268 18.9501191,6.31942463 18.3187946,5.68810005 L18.3187946,5.68810005 C17.68747,5.05677547 16.6640119,5.05638225 16.0322024,5.68722152 Z" fill="#000000" fill-rule="nonzero"/>
                                                <path d="M9.85714286,6.92857143 C9.85714286,8.54730513 8.5469533,9.85714286 6.93006028,9.85714286 C5.31316726,9.85714286 4,8.54730513 4,6.92857143 C4,5.30983773 5.31316726,4 6.93006028,4 C8.5469533,4 9.85714286,5.30983773 9.85714286,6.92857143 Z M20,17.0714286 C20,18.6901623 18.6898104,20 17.0729174,20 C15.4560244,20 14.1428571,18.6901623 14.1428571,17.0714286 C14.1428571,15.4497247 15.4560244,14.1428571 17.0729174,14.1428571 C18.6898104,14.1428571 20,15.4497247 20,17.0714286 Z" fill="#000000" opacity="0.3"/>
                                            </g>
                                        </svg>
                                    </div>
                                    <div class="media-body">
                                        <h5 class="mb-0">$<span class="counter">25698</span></h5><span class="mb-1">-$2658(36%)</span>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-6 pl-0">
                                <div class="media">
                                    <div class="align-self-center mr-3 text-left">
                                        <h6 class="mb-1 blue-grey lighten-1 font-weight-normal">return on investment</h6>
                                        <h4 class="mb-0 blue lighten-1">ROI</h4>
                                    </div>
                                    <div class="media-body align-self-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" class="kt-svg-icon" version="1.1">
                                            <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                                <polygon points="0 0 24 0 24 24 0 24"/>
                                                <rect fill="#000000" opacity="0.3" transform="translate(6.000000, 11.000000) rotate(-180.000000) translate(-6.000000, -11.000000) " x="5" y="5" width="2" height="12" rx="1"/>
                                                <path d="M8.29289322,14.2928932 C8.68341751,13.9023689 9.31658249,13.9023689 9.70710678,14.2928932 C10.0976311,14.6834175 10.0976311,15.3165825 9.70710678,15.7071068 L6.70710678,18.7071068 C6.31658249,19.0976311 5.68341751,19.0976311 5.29289322,18.7071068 L2.29289322,15.7071068 C1.90236893,15.3165825 1.90236893,14.6834175 2.29289322,14.2928932 C2.68341751,13.9023689 3.31658249,13.9023689 3.70710678,14.2928932 L6,16.5857864 L8.29289322,14.2928932 Z" fill="#000000" fill-rule="nonzero"/>
                                                <rect fill="#000000" opacity="0.3" transform="translate(18.000000, 13.000000) scale(1, -1) rotate(-180.000000) translate(-18.000000, -13.000000) " x="17" y="7" width="2" height="12" rx="1"/>
                                                <path d="M20.2928932,5.29289322 C20.6834175,4.90236893 21.3165825,4.90236893 21.7071068,5.29289322 C22.0976311,5.68341751 22.0976311,6.31658249 21.7071068,6.70710678 L18.7071068,9.70710678 C18.3165825,10.0976311 17.6834175,10.0976311 17.2928932,9.70710678 L14.2928932,6.70710678 C13.9023689,6.31658249 13.9023689,5.68341751 14.2928932,5.29289322 C14.6834175,4.90236893 15.3165825,4.90236893 15.7071068,5.29289322 L18,7.58578644 L20.2928932,5.29289322 Z" fill="#000000" fill-rule="nonzero" transform="translate(18.000000, 7.500000) scale(1, -1) translate(-18.000000, -7.500000) "/>
                                            </g>
                                        </svg>
                                    </div>
                                    <div class="media-body pl-2">
                                        <h5 class="mb-0">$<span class="counter">6954</span></h5><span class="mb-1">+$369(15%)</span>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-6 pr-0">
                                <div class="media border-after-xs">
                                    <div class="align-self-center mr-3 text-left">
                                        <h6 class="mb-1 blue-grey lighten-1 font-weight-normal">account balance</h6>
                                        <h4 class="mb-0 success darken-3">Wallet</h4>
                                    </div>
                                    <div class="media-body align-self-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" class="kt-svg-icon success" version="1.1">
                                            <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                                <rect x="0" y="0" width="24" height="24"/>
                                                <path d="M4,4 L20,4 C21.1045695,4 22,4.8954305 22,6 L22,18 C22,19.1045695 21.1045695,20 20,20 L4,20 C2.8954305,20 2,19.1045695 2,18 L2,6 C2,4.8954305 2.8954305,4 4,4 Z" fill="#000000" opacity="0.3"/>
                                                <path d="M18.5,11 L5.5,11 C4.67157288,11 4,11.6715729 4,12.5 L4,13 L8.58578644,13 C8.85100293,13 9.10535684,13.1053568 9.29289322,13.2928932 L10.2928932,14.2928932 C10.7456461,14.7456461 11.3597108,15 12,15 C12.6402892,15 13.2543539,14.7456461 13.7071068,14.2928932 L14.7071068,13.2928932 C14.8946432,13.1053568 15.1489971,13 15.4142136,13 L20,13 L20,12.5 C20,11.6715729 19.3284271,11 18.5,11 Z" fill="#000000"/>
                                                <path d="M5.5,6 C4.67157288,6 4,6.67157288 4,7.5 L4,8 L20,8 L20,7.5 C20,6.67157288 19.3284271,6 18.5,6 L5.5,6 Z" fill="#000000"/>
                                            </g>
                                        </svg>
                                    </div>
                                    <div class="media-body">
                                        <h5 class="mb-0">$<span class="counter">63147</span></h5><span class="mb-1">+$69(65%)</span>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-6 pr-0">
                                <div class="media border-after-xs">
                                    <div class="align-self-center mr-3 text-left">
                                        <h6 class="mb-1 blue-grey lighten-1 font-weight-normal">saved money</h6>
                                        <h4 class="mb-0 success darken-3">Savings</h4>
                                    </div>
                                    <div class="media-body align-self-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" class="kt-svg-icon success" version="1.1">
                                            <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                                <rect x="0" y="0" width="24" height="24"/>
                                                <circle fill="#000000" opacity="0.3" cx="20.5" cy="12.5" r="1.5"/>
                                                <rect fill="#000000" opacity="0.3" transform="translate(12.000000, 6.500000) rotate(-15.000000) translate(-12.000000, -6.500000) " x="3" y="3" width="18" height="7" rx="1"/>
                                                <path d="M22,9.33681558 C21.5453723,9.12084552 21.0367986,9 20.5,9 C18.5670034,9 17,10.5670034 17,12.5 C17,14.4329966 18.5670034,16 20.5,16 C21.0367986,16 21.5453723,15.8791545 22,15.6631844 L22,18 C22,19.1045695 21.1045695,20 20,20 L4,20 C2.8954305,20 2,19.1045695 2,18 L2,6 C2,4.8954305 2.8954305,4 4,4 L20,4 C21.1045695,4 22,4.8954305 22,6 L22,9.33681558 Z" fill="#000000"/>
                                            </g>
                                        </svg>
                                    </div>
                                    <div class="media-body">
                                        <h5 class="mb-0">$<span class="counter">63147</span></h5><span class="mb-1">+$69(65%)</span>
                                    </div>
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
        name: "dashboardIndex",
        data() {
            return {
                sections: [
                    { label: 'Investment', value: 25, color: 'rgb(135 161 174)' },
                    { label: 'Stash', value: 75, color: 'rgb(106 186 235)' },
                    { label: 'Savings', value: 0, color: 'rgb(12 61 121)' }
                ]
            };
        },
        methods: {
            handleSectionClick(section, event) {
                console.log(`${section.label} clicked.`);
            }
        }
    }
</script>
<style scoped>
    .browser-widget .media i{
        font-size: inherit !important;
    }
    .widget-joins:after{
        top: 60%;
    }
    .kt-svg-icon g [fill]{
        fill: #2196F3;
    }
    .kt-svg-icon.success g [fill]{
        fill: #18BE77;
    }
</style>
