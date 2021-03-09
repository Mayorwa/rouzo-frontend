<template>
    <div class="company-faq">
        <section class="pt-20 xl-pt-156 xl-pb-20 collaborate r-header">
            <div class="container">
                <div class="row">
                    <div class="col-lg-8 offset-lg-2 col-md-12 col-sm-12">
                        <div class="content text-center">
                            <h1 class="text-32 xl-text-48 leading-40 xl-leading-56 mb-40 wow fadeInUp">Frequently Asked Questions</h1>
                            <p class="font-semibold wow fadeInUp">*choose a category to quickly find the help you need</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!--start:categories-->
        <section class="categories">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="content">
                            <div class="row">
                                <div class="col-lg-4 col-md-12 col-sm-12">
                                    <div class="card-f card-f-bg-white text-center wow fadeInUp">
                                        <div class="card-f-heading mb-24">
                                            <div class="ic">
                                                <img src="/assets/images/icons/opened-file.svg" alt="">
                                            </div>
                                        </div>
                                        <div class="card-f-body">
                                            <h4 class="text-black text-20 leading-24">Investor</h4>
                                            <p class="text-gray mt-8">All you need about Investment, Stash & Savings.</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-4 col-md-12 col-sm-12">
                                    <div class="card-f card-f-bg-white text-center wow fadeInUp">
                                        <div class="card-f-heading mb-24">
                                            <div class="ic">
                                                <img src="/assets/images/icons/money-donation.svg" alt="">
                                            </div>
                                        </div>
                                        <div class="card-f-body">
                                            <h4 class="text-black text-20 leading-24">Business</h4>
                                            <p class="text-gray mt-8">All you need from A to Z to getting started are available.</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-4 col-md-12 col-sm-12">
                                    <div class="card-f card-f-bg-white text-center wow fadeInUp">
                                        <div class="card-f-heading mb-24">
                                            <div class="ic">
                                                <img src="/assets/images/icons/like.svg" alt="">
                                            </div>
                                        </div>
                                        <div class="card-f-body">
                                            <h4 class="text-black text-20 leading-24">Introducer</h4>
                                            <p class="text-gray mt-8">All you need from A to Z to getting started are available.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!--end:categories-->

        <!--start:faq-->
        <section class="faq clip-eb">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="heading text-center wow fadeInUp">
                            <h3 class="text-black">Investment, Stash & Savings</h3>
                            <p class="text-gray mt-16">Frequently asked questions from Investor</p>
                        </div>
                    </div>
                    <div class="col-lg-10 offset-lg-1 col-md-12 col-sm-12">
                        <div class="content">
                            <div class="accordion wow fadeInUp" id="accordionPricingFAQ">
                                <div v-for="(question, index) in questions" class="card" :key="index">
                                    <div class="card-header" :id="'heading'+index">
                                        <h2 class="mb-0">
                                            <button class="text-hkgrotesk font-bold" type="button" data-toggle="collapse" :data-target="'#collapse'+index" aria-expanded="false" :aria-controls="'collapse'+index">
                                                <span>{{question.question}}</span>
                                                <i class="fas fa-plus"></i>
                                            </button>
                                        </h2>
                                    </div>

                                    <div :id="'collapse'+index" class="collapse" :aria-labelledby="'heading'+index" data-parent="#accordionPricingFAQ">
                                        <div class="card-body text-opensans">
                                            <p>{{question.answer}}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="faq-question">
                    <div class="row">
                        <div class="col-lg-6 offset-lg-3 col-md-12 col-sm-12">
                            <div class="heading text-center wow fadeInUp">
                                <h3 class="text-black">Still have a questions?</h3>
                                <p class="text-gray mt-16 mb-0">If you cannot find answer to your question in our FAQ, you can always contact us. We wil answer to you shortly!</p>
                            </div>
                        </div>
                        <div class="col-lg-10 offset-lg-1 col-md-8 offset-md-2 col-sm-12">
                            <div class="row">
                                <div class="col-lg-6 col-md-12 col-sm-12">
                                    <div class="card-f card-f-bg-white text-center wow fadeInUp">
                                        <div class="card-f-heading mb-24">
                                            <div class="ic">
                                                <img src="/assets/images/icons/phone.svg" alt="">
                                            </div>
                                        </div>
                                        <div class="card-f-body">
                                            <h4 class="text-black text-20">{{contact.phone}}</h4>
                                            <p class="text-gray mt-8">We are always happy to help.</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-6 col-md-12 col-sm-12">
                                    <div class="card-f card-f-bg-white text-center wow fadeInUp">
                                        <div class="card-f-heading mb-24">
                                            <div class="ic">
                                                <img src="/assets/images/icons/cs.svg" alt="">
                                            </div>
                                        </div>
                                        <div class="card-f-body">
                                            <h4 class="text-black text-20">{{contact.email}}</h4>
                                            <p class="text-gray mt-8">Alternative way to get anwser faster.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!--end:faq-->
    </div>
</template>

<script>
    export default {
        name: 'FAQ',
        data () {
            return {
                questions: [
                    { question: "What is Rouzo?", answer: "The word Rouzo means Pathway.Rouzo is a small business lending marketplace that allows smart individuals and corporates invest in portfolios that lend to micro and small businesses. They earn healthy returns while contributing to empowering small businesses and promoting economic development.<br/><br/>These portfolios provide asset financing and working capital financing to verified small businesses that pass our eligibility criteria and pass the basic credit assessment provided by registered credit bureaus like CRC Bureau.<br/><br/>Rouzo only lends to small businesses that have been in existence for at least 2 years with a good business model and traceable cash flow. Rouzo will primarily lend for Asset finance and working capital finance from its portfolios designated for each item.<br/><br/>As an investor on the Rouzo platform, your money is spread across a number of businesses to spread the risk in your chosen portfolio.<br/><br/>Rouzo then manages the monthly repayments from the borrowers back to the investors. Rouzo also provides account management and reporting tools for investors. If payments are missed Rouzo's in-house collections and recoveries team will chase borrowers.<br/>" },
                    { question: "Who can invest in Rouzo?", answer: "You can lend through Rouzo as an individual and/or a corporate organization.<br><p class=\"font-weight-bold\">To lend as an individual, you must:</p>- Be at least 18 years of age<br/>- Have the legal rights to invest within Nigeria<br/>- Have a bank account domiciled in Nigeria<br/><p class=\"font-weight-bold\">To lend as a corporate organization, you must:</p>- Be a duly registered company in Nigeria<br/>- Have an office presence in Nigeria<br/>- Have a company account in Nigeria with all signatories based in country.<br/>" },
                    { question: "How secure is my information on the platform?", answer: "We ensure the protection of your information through recognized security procedures by the Data Protections Act." },
                    { question: "Can I invest alongside other investors?", answer: "Yes you can, you may also invite others to benefit from the investment opportunities offered on Rouzo platform. You can take advantage of our referral program and earn when the people you referred with your code create an account and make their first investment." },
                    { question: "How do I monitor businesses I invest into?", answer: "You can monitor your investment activities through your personalized dashboard on your registered account." },
                    { question: "How much interest can I earn from an investment?", answer: "Depending on the portfolio type you’re investing in, you earn between 20% - 30% interest p.a." },
                    { question: "How does my interest accrue?", answer: "You accrue interest on a daily basis on Rouzo platform and you can view the summary of accumulated interest on your dashboard." },
                    { question: "When is my interest paid?", answer: "Your accrued return can be seen monthly on your dashboard. You will get a payout of accumulated returns into your wallet when your investment duration is complete. You can transfer the money from your wallet to your bank account." },
                    { question: "What is the minimum and maximum investment period?", answer: "The minimum investment period is 90days and the maximum is 360days. The longer your investment period the higher your returns. You can lock your investment for a specific duration i.e. 3 months, 6 months, 9 months and 12 months." },
                    { question: "What is the minimum and maximum number of units I can invest in?", answer: "The minimum number of units to invest in a portfolio is (1) and you can invest in as many units as you desire as long as there are units available in the portfolio. We usually limit units available for each portfolio per month to enable proper management of the portfolio." },
                    { question: "Can I break my investment before my due lock date?", answer: "You can apply to break your investment before your due lock date by sending an email to hello@rouzo.org with the headline break investment. When the email is received, the investment committee will meet and based on available cash flow, we will communicate when you can get your funds within1 week." },
                    { question: "Will I be penalized for breaking my investment?", answer: "There are no fees charged for breaking your investment, but your interest will revert back to the last quarter returns. What this means is if you invest your money for 12 months, but break it on the 10th month, your ROI will revert back to the 9th month. If you invest for 3 months and want to break it before then, you get no interest as the minimum investment duration is 3 months (90 days)." },
                    { question: "How fast can I invest in a Business?", answer: "You can fund your wallet as soon as you create an account and invest in the portfolio of your choice. You will be notified of investment opportunities as soon as the portal opens monthly. You should always check your dashboard regularly for this information due high demand." },
                    { question: "How safe is my money?", answer: "Rouzo only lends to small businesses that have been in existence for at least 2 years with a good business model and traceable cash flow. We have an active in-house collections and recovery team to chase borrowers that default in repayment. <br><br>We also, co-own the assets purchased for the businesses as collateral until loan is fully disbursed." },
                    { question: "What are the next steps after creating an account on the platform as an Investor?", answer: "Once you accept our terms and condition, you indicate your preference by purchasing as many units in a portfolio as you require, your investment journey begins immediately." },
                ],
                contact: {
                    email: 'hello@rouzo.org',
                    phone: '+234 7044152333'
                }
            }

        }
    }
</script>
