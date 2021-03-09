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
                            <li class="breadcrumb-item"><a  href="/dashboard/home">Dashboard</a></li>
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
                    <div class="row py-1" style="flex-wrap: nowrap; overflow-x: auto">
                        <div v-for="portfolio in portfolios" class="col-md-4 col-9">
                            <div class="card" style="border-radius: 10px">
                                <div class="card-header d-flex justify-content-between pt-3 pb-0 mb-0 px-4 border-bottom-0">
                                    <h6 class="card-title grey-blue lighten-2 text-capitalize mt-1 mb-0">
                                        {{portfolio.name}}
                                    </h6>
                                    <div class="float-right">
                                        <ul class="list-inline mb-0">
                                            <li>
                                                <a>
                                                    <i style="padding: 3px 5px !important;">
                                                        <svg v-if="portfolio.name.toLowerCase() !== 'asset finance portfolio'" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="34px" height="34px" viewBox="0 0 24 24" version="1.1" class="kt-svg-icon">
                                                            <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                                                <rect x="0" y="0" width="24" height="24"/>
                                                                <polygon fill="#d2081f" opacity="0.3" points="12 20.0218549 8.47346039 21.7286168 6.86905972 18.1543453 3.07048824 17.1949849 4.13894342 13.4256452 1.84573388 10.2490577 5.08710286 8.04836581 5.3722735 4.14091196 9.2698837 4.53859595 12 1.72861679 14.7301163 4.53859595 18.6277265 4.14091196 18.9128971 8.04836581 22.1542661 10.2490577 19.8610566 13.4256452 20.9295118 17.1949849 17.1309403 18.1543453 15.5265396 21.7286168"/>
                                                                <polygon fill="#d2081f" points="14.0890818 8.60255815 8.36079737 14.7014391 9.70868621 16.049328 15.4369707 9.950447"/>
                                                                <path d="M10.8543431,9.1753866 C10.8543431,10.1252593 10.085524,10.8938719 9.13585777,10.8938719 C8.18793881,10.8938719 7.41737243,10.1252593 7.41737243,9.1753866 C7.41737243,8.22551387 8.18793881,7.45690126 9.13585777,7.45690126 C10.085524,7.45690126 10.8543431,8.22551387 10.8543431,9.1753866" fill="#d2081f" opacity="0.3"/>
                                                                <path d="M14.8641422,16.6221564 C13.9162233,16.6221564 13.1456569,15.8535438 13.1456569,14.9036711 C13.1456569,13.9520555 13.9162233,13.1851857 14.8641422,13.1851857 C15.8138085,13.1851857 16.5826276,13.9520555 16.5826276,14.9036711 C16.5826276,15.8535438 15.8138085,16.6221564 14.8641422,16.6221564 Z" fill="#d2081f" opacity="0.3"/>
                                                            </g>
                                                        </svg>
                                                        <svg v-else xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="34px" height="34px" viewBox="0 0 24 24" version="1.1" class="kt-svg-icon">
                                                            <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                                                <rect x="0" y="0" width="24" height="24"/>
                                                                <path d="M20.4061385,6.73606154 C20.7672665,6.89656288 21,7.25468437 21,7.64987309 L21,16.4115967 C21,16.7747638 20.8031081,17.1093844 20.4856429,17.2857539 L12.4856429,21.7301984 C12.1836204,21.8979887 11.8163796,21.8979887 11.5143571,21.7301984 L3.51435707,17.2857539 C3.19689188,17.1093844 3,16.7747638 3,16.4115967 L3,7.64987309 C3,7.25468437 3.23273352,6.89656288 3.59386153,6.73606154 L11.5938615,3.18050598 C11.8524269,3.06558805 12.1475731,3.06558805 12.4061385,3.18050598 L20.4061385,6.73606154 Z" fill="#0f7bd4" opacity="0.3"/>
                                                                <polygon fill="#0f7bd4" points="14.9671522 4.22441676 7.5999999 8.31727912 7.5999999 12.9056825 9.5999999 13.9056825 9.5999999 9.49408582 17.25507 5.24126912"/>
                                                            </g>
                                                        </svg>
                                                    </i>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="card-body pt-1 pb-3 px-4">
                                    <div class="card-text port">
                                        <div class="d-flex">
                                            <div class="pr-1 grey-blue lighten-2">
                                                Annual Interest
                                                <i data-feather="trending-up"></i> :
                                            </div>
                                            <div class="font-size-14px font-weight-bold">
                                                <a class="font-size-16px font-weight-bold blue darken-2">{{portfolio.returnInPer}} % </a>
                                            </div>
                                        </div>
                                        <div class="d-flex">
                                            <div class="pr-1 grey-blue lighten-2">Risk Level
                                                <i data-feather="alert-triangle"></i> :
                                            </div>
                                            <div class="font-size-14px font-weight-bold">
                                                <a class="font-size-15px font-weight-normal grey-blue lighten-2 text-capitalize">{{portfolio.riskLevel}}</a>
                                            </div>
                                        </div>
                                        <div class="mt-2">
                                            <div class="font-size-14px font-weight-bold grey-blue lighten-2">
                                                <a class="font-size-20px font-weight-normal success ">₦ {{numeral(portfolio.amountPerUnit).format('0,0.00')}} </a> per Unit
                                            </div>
                                        </div>
                                        <hr>
                                        <a v-if="portfolio.isOpen === false" class="btn btn-outline-danger danger float-right" disabled="disabled" style="cursor: not-allowed">Closed <i data-feather="x-circle"></i></a>
                                        <div v-else>
                                            <a v-if="portfolio.sizeRemaining === 0" class="btn btn-outline-blue-grey blue-grey float-right" disabled="disabled" style="cursor: not-allowed">Sold Out <a class="pt-1"><i data-feather="x-circle"></i></a></a>
                                            <a :href="'/dashboard/investment/'+portfolio._id" class="btn btn-outline-blue blue float-right">Invest Now <a class="mt-2"><i data-feather="arrow-right" style="margin-left: 6px; font-size: 15px"></i></a></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-12">
                    <div class="card pb-1" style="border-radius: 10px">
                        <div class="card-header p-3">
                            <h4 class="card-title mb-0">Investments</h4>
                        </div>
                        <div class="card-content collapse show">
                            <div class="card-body">
                                <p>Click on the <code>View Full Details</code> button for complete information of a specific investment</p>
                                <div v-if="investments.length > 0 " class="table-responsive">
                                    <table class="table">
                                        <thead>
                                        <tr class="borderless">
                                            <th>Portfolio</th>
                                            <th>Actions</th>
                                        </tr>
                                        </thead>
                                        <tbody class="borderless">
                                        <tr v-for="(investment, index) in investments" :key="index">
                                            <td>
                                                <a class="grey-blue font-weight-bold lighten-2">{{investment.portfolio.name}}</a>
                                                <br>
                                                <a class="blue lighten-2">{{investment.datePurchased}}</a>
                                            </td>
                                            <td>
                                                <div class="d-flex">
                                                    <div v-if="investment.isOpen === true">
                                                        <a v-if="investment.isReady === false" class="btn btn-blue border-0 box-shadow-2 text-white mx-1 my--01" href="javascript:void(0);" :onclick="window.alert('Your invest will be matured after'+ investment.period +'months from Investment')">
                                                            Withdraw Funds
                                                        </a>
                                                        <a v-else class="btn btn-blue border-0 box-shadow-2  text-white mx-1 my--01" href="javascript:void(0);" onclick="">
                                                            Withdraw Funds
                                                        </a>
                                                    </div>
                                                    <p v-else class="mb-0">
                                                        Investment Closed
                                                    </p>
                                                    <a class="btn btn-outline-blue blue mx-1 my--01" data-toggle="modal" :data-target="'#details'+index">
                                                        View Full Details
                                                    </a>
                                                    <div :id="'details'+index" class="modal fade" role="dialog">
                                                        <div class="modal-dialog modal-dialog-centered">
                                                            <!-- Modal content-->
                                                            <div class="modal-content px-2" style="border: none">
                                                                <div class="modal-header text-center align-items-center px-0" style="justify-content: normal; border-bottom: 1px solid #c6d4df">
                                                                    <a>
                                                                        <i style="padding: 3px 5px !important;">
                                                                            <svg v-if="investment.portfolio.name !== 'asset finance portfolio'" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="34px" height="34px" viewBox="0 0 24 24" version="1.1" class="kt-svg-icon">
                                                                                <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                                                                    <rect x="0" y="0" width="24" height="24"/>
                                                                                    <polygon fill="#d2081f" opacity="0.3" points="12 20.0218549 8.47346039 21.7286168 6.86905972 18.1543453 3.07048824 17.1949849 4.13894342 13.4256452 1.84573388 10.2490577 5.08710286 8.04836581 5.3722735 4.14091196 9.2698837 4.53859595 12 1.72861679 14.7301163 4.53859595 18.6277265 4.14091196 18.9128971 8.04836581 22.1542661 10.2490577 19.8610566 13.4256452 20.9295118 17.1949849 17.1309403 18.1543453 15.5265396 21.7286168"/>
                                                                                    <polygon fill="#d2081f" points="14.0890818 8.60255815 8.36079737 14.7014391 9.70868621 16.049328 15.4369707 9.950447"/>
                                                                                    <path d="M10.8543431,9.1753866 C10.8543431,10.1252593 10.085524,10.8938719 9.13585777,10.8938719 C8.18793881,10.8938719 7.41737243,10.1252593 7.41737243,9.1753866 C7.41737243,8.22551387 8.18793881,7.45690126 9.13585777,7.45690126 C10.085524,7.45690126 10.8543431,8.22551387 10.8543431,9.1753866" fill="#d2081f" opacity="0.3"/>
                                                                                    <path d="M14.8641422,16.6221564 C13.9162233,16.6221564 13.1456569,15.8535438 13.1456569,14.9036711 C13.1456569,13.9520555 13.9162233,13.1851857 14.8641422,13.1851857 C15.8138085,13.1851857 16.5826276,13.9520555 16.5826276,14.9036711 C16.5826276,15.8535438 15.8138085,16.6221564 14.8641422,16.6221564 Z" fill="#d2081f" opacity="0.3"/>
                                                                                </g>
                                                                            </svg>
                                                                            <svg v-else xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="34px" height="34px" viewBox="0 0 24 24" version="1.1" class="kt-svg-icon">
                                                                                <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                                                                    <rect x="0" y="0" width="24" height="24"/>
                                                                                    <path d="M20.4061385,6.73606154 C20.7672665,6.89656288 21,7.25468437 21,7.64987309 L21,16.4115967 C21,16.7747638 20.8031081,17.1093844 20.4856429,17.2857539 L12.4856429,21.7301984 C12.1836204,21.8979887 11.8163796,21.8979887 11.5143571,21.7301984 L3.51435707,17.2857539 C3.19689188,17.1093844 3,16.7747638 3,16.4115967 L3,7.64987309 C3,7.25468437 3.23273352,6.89656288 3.59386153,6.73606154 L11.5938615,3.18050598 C11.8524269,3.06558805 12.1475731,3.06558805 12.4061385,3.18050598 L20.4061385,6.73606154 Z" fill="#0f7bd4" opacity="0.3"/>
                                                                                    <polygon fill="#0f7bd4" points="14.9671522 4.22441676 7.5999999 8.31727912 7.5999999 12.9056825 9.5999999 13.9056825 9.5999999 9.49408582 17.25507 5.24126912"/>
                                                                                </g>
                                                                            </svg>
                                                                        </i>
                                                                    </a>
                                                                    <div>
                                                                        <h6 class="font-size-16px grey-blue font-weight-bold lighten-2">{{investment.portfolio.name}}</h6>
                                                                        <a class="blue text-left">{{investment.datePurchased}}</a>
                                                                    </div>
                                                                </div>
                                                                <div class="modal-body">
                                                                    <div class="container-fluid">
                                                                        <dl class="row">
                                                                            <dt class="blue-grey darken-1">Amount: </dt>
                                                                            <dd class="success ml-1">₦ {{investment.amount}}</dd>
                                                                        </dl>
                                                                        <dl class="row">
                                                                            <dt class="blue-grey darken-1">Units Bought: </dt>
                                                                            <dd class="ml-1">{{investment.unitsBought}}</dd>
                                                                        </dl>
                                                                        <dl class="row">
                                                                            <dt class="blue-grey darken-1">Lock Period: </dt>
                                                                            <dd class="ml-1"> {{investment.period}} Months</dd>
                                                                        </dl>
                                                                        <dl class="row">
                                                                            <dt class="blue-grey darken-1">Payment Method: </dt>
                                                                            <dd class="ml-1"> {{investment.paymentMethod}}</dd>
                                                                        </dl>
                                                                        <dl class="row">
                                                                            <dt class="blue-grey darken-1">Interest So Far: </dt>
                                                                            <dd class="success ml-1">₦ {{investment.interestSofar}}</dd>
                                                                        </dl>
                                                                        <dl class="row">
                                                                            <dt class="blue-grey darken-1">Return On Investment: </dt>
                                                                            <dd class="success ml-1">₦ {{investment.roi}}</dd>
                                                                        </dl>
                                                                    </div>

                                                                </div>
                                                                <div class="modal-footer" style="border-top: 1px solid #c6d4df">
                                                                    <a data-dismiss="modal" class="text-center m-auto blue" style="text-decoration: underline">Dismiss</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div v-if="investment.isCompleted === false">
                                                        <a class="btn btn-outline-warning warning mx-1 my--01" data-toggle="modal" :data-target="'#update'+index">
                                                            Update Lock Period
                                                        </a>
                                                        <div :id="'update'+index" class="modal fade" role="dialog">
                                                        <div class="modal-dialog modal-dialog-centered">
                                                            <!-- Modal content-->
                                                            <div class="modal-content px-2" style="border: none">
                                                                <div class="modal-header text-center align-items-center px-0" style="justify-content: normal; border-bottom: 1px solid #c6d4df">
                                                                    <a>
                                                                        <i style="padding: 3px 5px !important;">
                                                                            <svg v-if="investment.portfolio.name !== 'asset finance portfolio'" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="34px" height="34px" viewBox="0 0 24 24" version="1.1" class="kt-svg-icon">
                                                                                <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                                                                    <rect x="0" y="0" width="24" height="24"/>
                                                                                    <polygon fill="#d2081f" opacity="0.3" points="12 20.0218549 8.47346039 21.7286168 6.86905972 18.1543453 3.07048824 17.1949849 4.13894342 13.4256452 1.84573388 10.2490577 5.08710286 8.04836581 5.3722735 4.14091196 9.2698837 4.53859595 12 1.72861679 14.7301163 4.53859595 18.6277265 4.14091196 18.9128971 8.04836581 22.1542661 10.2490577 19.8610566 13.4256452 20.9295118 17.1949849 17.1309403 18.1543453 15.5265396 21.7286168"/>
                                                                                    <polygon fill="#d2081f" points="14.0890818 8.60255815 8.36079737 14.7014391 9.70868621 16.049328 15.4369707 9.950447"/>
                                                                                    <path d="M10.8543431,9.1753866 C10.8543431,10.1252593 10.085524,10.8938719 9.13585777,10.8938719 C8.18793881,10.8938719 7.41737243,10.1252593 7.41737243,9.1753866 C7.41737243,8.22551387 8.18793881,7.45690126 9.13585777,7.45690126 C10.085524,7.45690126 10.8543431,8.22551387 10.8543431,9.1753866" fill="#d2081f" opacity="0.3"/>
                                                                                    <path d="M14.8641422,16.6221564 C13.9162233,16.6221564 13.1456569,15.8535438 13.1456569,14.9036711 C13.1456569,13.9520555 13.9162233,13.1851857 14.8641422,13.1851857 C15.8138085,13.1851857 16.5826276,13.9520555 16.5826276,14.9036711 C16.5826276,15.8535438 15.8138085,16.6221564 14.8641422,16.6221564 Z" fill="#d2081f" opacity="0.3"/>
                                                                                </g>
                                                                            </svg>
                                                                            <svg v-else xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="34px" height="34px" viewBox="0 0 24 24" version="1.1" class="kt-svg-icon">
                                                                                <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                                                                    <rect x="0" y="0" width="24" height="24"/>
                                                                                    <path d="M20.4061385,6.73606154 C20.7672665,6.89656288 21,7.25468437 21,7.64987309 L21,16.4115967 C21,16.7747638 20.8031081,17.1093844 20.4856429,17.2857539 L12.4856429,21.7301984 C12.1836204,21.8979887 11.8163796,21.8979887 11.5143571,21.7301984 L3.51435707,17.2857539 C3.19689188,17.1093844 3,16.7747638 3,16.4115967 L3,7.64987309 C3,7.25468437 3.23273352,6.89656288 3.59386153,6.73606154 L11.5938615,3.18050598 C11.8524269,3.06558805 12.1475731,3.06558805 12.4061385,3.18050598 L20.4061385,6.73606154 Z" fill="#0f7bd4" opacity="0.3"/>
                                                                                    <polygon fill="#0f7bd4" points="14.9671522 4.22441676 7.5999999 8.31727912 7.5999999 12.9056825 9.5999999 13.9056825 9.5999999 9.49408582 17.25507 5.24126912"/>
                                                                                </g>
                                                                            </svg>
                                                                        </i>
                                                                    </a>
                                                                    <div>
                                                                        <h6 class="font-size-16px grey-blue font-weight-bold lighten-2">{{investment.portfolio.name}}</h6>
                                                                        <a class="blue text-left">{{investment.datePurchased}}</a>
                                                                    </div>
                                                                </div>
                                                                <div class="modal-body">
                                                                    <form action="" method="POST" class="form-horizontal">
                                                                        <input type="hidden" name="investmentId" :value="investment.id">
                                                                        <p>Update the amount of months your investment is to be locked.</p>
                                                                        <div class="form-group">
                                                                            <label class="blue-grey darken-1" for="months">Lock Period(Months): </label>
                                                                            <select name="months" id="months" class="form-control">
                                                                                <option value="3">3 Months</option>
                                                                                <option value="6">6 Months</option>
                                                                                <option value="9">9 Months</option>
                                                                                <option value="12">12 Months</option>
                                                                            </select>
                                                                        </div>
                                                                        <div class="text-center">
                                                                            <button class="btn btn-blue border-0 "><i class="icon-ion-ios-save"></i> Update Investment</button>
                                                                        </div>
                                                                    </form>
                                                                </div>
                                                                <div class="modal-footer" style="border-top: 1px solid #c6d4df">
                                                                    <a data-dismiss="modal" class="text-center m-auto blue" style="text-decoration: underline">Dismiss</a>
                                                                </div>
                                                            </div>
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
                                    You haven't Invested in any Portfolio yet
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div id="payOut" class="modal fade" role="dialog">
            <div class="modal-dialog modal-sm">

                <!-- Modal content-->
                <div class="modal-content">
                    <div class="modal-header">
                        <h6 class="font-size-18px font-weight-bold">Withdrawal Option</h6>
                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                    </div>

                    <form action="" method="POST" enctype="multipart/form-data">
                        <div class="modal-body">
                            <input type="hidden" name="investmentId" id="investmentId" value="">
                            <label for="int" class="mb-2">
                                <input type="radio" name="withdrawalOption" id="int" class="rads" value="interest">
                                Withdraw
                                <a class="text-blue">Interest</a>
                            </label>
                            <br>
                            <label for="int+inv">
                                <input type="radio" name="withdrawalOption" id="int+inv" class="rads" value="int+inv">
                                Withdraw
                                <a class="text-blue">Interest + Investment</a>
                            </label>

                            <div  class="dotted-btn width-90-per">
                                <p class="success mb-0 font-size-20px">₦ <a class="success font-size-20px" id="withAmt"> 0</a></p>
                            </div>
                        </div>
                        <p class="mx-1"><code>Note:</code> The money will be transfer to your <a href="">Stash</a> where it can be withdrawn from </p>
                        <div class="modal-footer">
                            <a href="javascript:void(0);" class="danger" data-dismiss="modal">Close</a>
                            <button type="submit" class="btn btn-sm btn-success">Confirm Withdrawal</button>
                        </div>
                    </form>
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
                connecting: true,
                portfolios: null,
                investments: [
                    {
                        id: 1,
                        datePurchased: '2nd of July 2020',
                        amount: 30000,
                        unitsBought: 3,
                        period: 3,
                        paymentMethod: 'bank',
                        interestSofar: 2500,
                        roi: 30000,
                        isCompleted: false,
                        isOpen: true,
                        portfolio: {
                            id: 1,
                            name: 'asset finance portfolio',
                            returnInPer: 30,
                            riskLevel: 'medium',
                            amountPerUnit: 50000,
                            isOpen: true,
                            sizeRemaining: 200000,
                        },
                    },
                ],
                numeral: numeral,
            }
        },
        mounted () {
            this.getPortfolio();
        },
        methods: {
            getPortfolio() {
                this.$store.dispatch("getPortfolios")
                    .then((response) => {
                        console.log(response);
                        this.portfolios = response;
                        this.connecting = false;
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
    .port svg{
        padding-top: 2px;
        width: 18px;
        height: 18px;
    }

</style>
