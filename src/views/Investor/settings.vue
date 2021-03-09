<template>
    <div class="page-body">
        <div class="container-fluid">
            <div class="page-header">
                <div class="row">
                    <div class="col-12 py-1">
                        <h3>
                            Settings
                        </h3>
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><a><i data-feather="home"></i></a></li>
                            <li class="breadcrumb-item"><a href="/dashboard/home" :class="routeName === 'dashboardIndex' ? 'active' : ''">Dashboard</a></li>
                            <li class="breadcrumb-item">Settings</li>
                        </ol>
                    </div>
                </div>
            </div>
        </div>
        <div class="container-fluid">
            <section class="row">
                <div class="col-md-12">
                    <div class="card px-1 py-1">
                        <div class="card-header p-3">
                            <h4 class="font-weight-normal f-2 m-0">Profile Settings</h4>
                            <p class="font-size-14px pb-0 mb-0">Edit your profile details.</p>
                        </div>
                        <div class="card-content">
                            <hr class="m-0 p-0">

                            <div class="card-body">
                                <form action="" method="POST">
                                    <div class="row mb-2">
                                        <div class="col-md-6">
                                            <label for="f_name">First Name :</label>
                                            <input type="text" name="f_name" id="f_name" class="form-control" required>
                                        </div>

                                        <div class="col-md-6">
                                            <label for="l_name">Last Name :</label>
                                            <input type="text" name="l_name" id="l_name" class="form-control" required>
                                        </div>

                                        <div class="col-md-6 mt-2">
                                            <label for="phone">Phone Number :</label>
                                            <input type="text" name="phone" id="phone" class="form-control" required>
                                        </div>
                                    </div>
                                    <button type="submit" class="btn btn-success float-right mb-4">Save changes</button>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div class="card px-1  py-1">
                        <div class="card-header p-3">
                            <h4 class="font-weight-normal font-size-22px f-2 m-0">Bank Verification</h4>
                            <p class="font-size-14px pt-1 pb-0 mb-0"><code>Note:</code> Your profile name should be match the name connected to your account .</p>
                        </div>
                        <div class="card-content">
                            <hr class="m-0 p-0">

                            <div class="card-body">
                                <form method="POST">
                                    <div class="row mb-2">
                                        <div class="col-md-6">
                                            <label for="bvn">BVN :</label>
                                            <input type="number" name="bvn" id="bvn" class="form-control">
                                        </div>

                                        <div class="col-md-6">
                                            <label for="accountNumber">Account Number :</label>
                                            <input type="number" name="accountNumber" id="accountNumber" class="form-control" required>
                                        </div>
                                    </div>
                                    <div class="row mb-1">
                                        <div class="col-md-6">
                                            <label for="bank">Bank  :</label>
                                            <select name="bankId" id="bank" class="form-control text-uppercase">
                                                <option>
                                                    GTBank
                                                </option>
                                            </select>
                                        </div>
                                    </div>
                                    <button type="submit" id="BVNBtn" class="btn btn-primary float-right mb-4"><i class="fa fa-check"></i>&nbsp; Verify</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </div>
</template>
<script>
    export default {
        name: "dashboardSettings",
    }
</script>
<style scoped>
</style>
