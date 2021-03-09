<template>
    <div class="company-contact">
        <section class="pt-20 xl-pt-156 xl-pb-40 collaborate r-header" style="background-image: linear-gradient(to bottom, rgba(250, 251, 251, 0) , #f8fbff)">
            <div class="container">
                <div class="row">
                    <div class="col-lg-8 offset-lg-2 col-md-12 col-sm-12">
                        <div class="content text-center">
                            <h1 class="text-32 xl-text-48 leading-40 xl-leading-56 mb-40 wow fadeInUp">Drop us a line</h1>
                            <p class="font-semibold wow fadeInUp">*We are here to answer any question you may have</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!--start:section contact form-->
        <section class="contact-form">
            <div class="container">
                <div class="row">
                    <div class="col-lg-10 offset-lg-1 col-md-12 col-sm-12">
                        <div class="content bg-white box-shadow p-64 rounded-8 wow fadeInUp">
                            <form action="">
                                <div class="form-row">
                                    <div class="col col-lg-6 col-md-12 col-sm-12">
                                        <div class="form-group">
                                            <label for="nameInput">Your name *</label>
                                            <input type="text" class="form-control" placeholder="Your name" id="nameInput">
                                        </div>
                                    </div>
                                    <div class="col col-lg-6 col-md-12 col-sm-12">
                                        <div class="form-group">
                                            <label for="emailInput">Contact email *</label>
                                            <input type="email" class="form-control" placeholder="Your name" id="emailInput">
                                        </div>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label for="messagesInput">Your messages *</label>
                                    <textarea name="" id="messagesInput" cols="30" rows="6" class="form-control" placeholder="Your messages"></textarea>
                                </div>
                                <div class="form-group mb-32">
                                    <p class="text-gray mb-0">By submitting this form you agree to our terms and conditions and our Privacy Policy which explains how we may collect, use and disclose your personal information including to third parties.</p>
                                </div>
                                <button type="button" class="btn btn-primary">Contact Us</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!--end:section contact form-->

        <!--start:section contact form detail-->
        <section class="contact-form-detail clip-eb">
            <div class="container">
                <div class="content">
                    <div class="row">
                        <div class="col-lg-4 col-md-12 col-sm-12">
                            <div class="card-f flex text-center wow fadeInUp">
                                <div class="card-f-heading">
                                    <div class="ic ic-lg ic-badge bg-primary-100 mb-24">
                                        <img src="/assets/images/icons/mail.svg" alt="">
                                    </div>
                                </div>
                                <div class="card-f-body">
                                    <h4 class="text-black mb-24">Email us</h4>
                                    <p class="text-gray mb-12">Email us for general queries, including marketing and partnership opportunities.</p>
                                    <a class="font-bold" :href="'mailto:'+contact.email">{{contact.email}}</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-12 col-sm-12">
                            <div class="card-f flex text-center wow fadeInUp">
                                <div class="card-f-heading">
                                    <div class="ic ic-lg ic-badge bg-primary-100 mb-24">
                                        <img src="/assets/images/icons/phone.svg" alt="">
                                    </div>
                                </div>
                                <div class="card-f-body">
                                    <h4 class="text-black mb-24">Call us</h4>
                                    <p class="text-gray mb-12">Call us to speak to a member of our team. We are always happy to help.</p>
                                    <p class="text-primary font-bold">{{contact.phone}}</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-12 col-sm-12">
                            <div class="card-f flex text-center wow fadeInUp">
                                <div class="card-f-heading">
                                    <div class="ic ic-lg ic-badge bg-primary-100 mb-24">
                                        <img src="/assets/images/icons/cs.svg" alt="">
                                    </div>
                                </div>
                                <div class="card-f-body">
                                    <h4 class="mb-24 text-black">Support</h4>
                                    <p class="text-gray mb-12">Check out helpful resources, FAQs and developer tools.</p>
                                    <button type="button" class="btn btn-sm btn-outline-primary">Support Center <i class="fa fa-arrow-right"></i></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!--end:section contact form detail-->
    </div>
</template>
<script>
    export default {
        name: 'Contact',
        data() {
            return{
                contact: {
                    email: 'hello@rouzo.org',
                    phone: '+234 7044152333'
                }
            }
        }
    }
</script>
