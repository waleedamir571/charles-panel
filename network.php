<?php include 'header.php'; ?>

<style>
    .form-check-input {
        width: 1em;
        height: 1em;
        margin-top: .25em;
        vertical-align: top;
        background-color: #fff;
        background-repeat: no-repeat;
        background-position: center;
        background-size: contain;
        border: 1px solid rgba(0, 0, 0, .25);
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        -webkit-print-color-adjust: exact;
        color-adjust: exact;
        fill: #405F75 !important;
        stroke-width: 1px !important;
        stroke: #AEAEAE !important;
        width: 34px;
        height: 34px;
    }
</style>



<!--/ menu  -->
<div class="main_content_iner">
    <div class="white_card card_height_100 mb_30">
        <div class="white_card_body">
            <div class="d-flex justify-content-between align-items-center mb-4">
                <h1 class="fw-bold fs-4 mb-0">Network</h1>



                <div class="d-flex gap-2">
                    <div class="search-container">
                        <input type="text" class="form-control search-input" placeholder="Search..."
                            style="width: 256px;">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                            class="bi bi-search search-icon" viewBox="0 0 16 16">
                            <path
                                d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                        </svg>
                    </div>
                    <button class="filter-button">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                            class="bi bi-sliders" viewBox="0 0 16 16">
                            <path fill-rule="evenodd"
                                d="M11.5 2a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM9.05 3a2.5 2.5 0 0 1 4.9 0H16v1h-2.05a2.5 2.5 0 0 1-4.9 0H0V3h9.05zM4.5 7a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM2.05 8a2.5 2.5 0 0 1 4.9 0H16v1H6.95a2.5 2.5 0 0 1-4.9 0H0V8h2.05zm9.45 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm-2.45 1a2.5 2.5 0 0 1 4.9 0H16v1h-2.05a2.5 2.5 0 0 1-4.9 0H0v-1h9.05z" />
                        </svg>
                    </button>
                    <a href="#" class="btn_1" data-bs-toggle="modal" data-bs-target="#exampleModalLong">+ Send
                        Invite</a>
                </div>
            </div>

            <div class="mt-4">
                <!-- <div class="job-ticket2">
                    <div class="">
                        <div class="row align-items-center">
                            <div class="col-md-3">

                                <span class="heading ">Type</span>
                            </div>
                            <div class="col-md-3 ">
                                <span class="heading">Unit No</span>
                            </div>
                            <div class="col-md-3 text-center">
                                <span class="heading">Alerts</span>
                            </div>
                            <div class="col-md-3 text-end">
                                <span class="heading">Status</span>
                            </div>
                        </div>
                    </div>
                </div> -->


                <div class="overflow">
                    <div class="job-ticket4">
                        <div class="  gap-2">
                            <div class="row align-items-center">
                                <div class="col-md-1">
                                    <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios2"
                                        value="option2">
                                </div>
                                <div class="col-md-9">
                                    <div class="job">Knotty Logistic LLC</div>
                                </div>
                                <div class="col-md-2 text-center">
                                    <span class="asset-unit">PREVIEW</span>
                                </div>

                            </div>
                        </div>

                    </div>
                    <div class="job-ticket4">
                        <div class="  gap-2">
                            <div class="row align-items-center">
                                <div class="col-md-1">
                                    <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios2"
                                        value="option2">
                                </div>
                                <div class="col-md-9">
                                    <div class="job">Knotty Logistic LLC</div>
                                </div>
                                <div class="col-md-2 text-center">
                                    <span class="asset-unit">PREVIEW</span>
                                </div>

                            </div>
                        </div>

                    </div>
                    <div class="job-ticket4">
                        <div class="  gap-2">
                            <div class="row align-items-center">
                                <div class="col-md-1">
                                    <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios2"
                                        value="option2">
                                </div>
                                <div class="col-md-9">
                                    <div class="job">Knotty Logistic LLC</div>
                                </div>
                                <div class="col-md-2 text-center">
                                    <span class="asset-unit">PREVIEW</span>
                                </div>

                            </div>
                        </div>

                    </div>
                    <div class="job-ticket4">
                        <div class="  gap-2">
                            <div class="row align-items-center">
                                <div class="col-md-1">
                                    <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios2"
                                        value="option2">
                                </div>
                                <div class="col-md-9">
                                    <div class="job">Knotty Logistic LLC</div>
                                </div>
                                <div class="col-md-2 text-center">
                                    <span class="asset-unit">PREVIEW</span>
                                </div>

                            </div>
                        </div>

                    </div>
                    <div class="job-ticket4">
                        <div class="  gap-2">
                            <div class="row align-items-center">
                                <div class="col-md-1">
                                    <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios2"
                                        value="option2">
                                </div>
                                <div class="col-md-9">
                                    <div class="job">Knotty Logistic LLC</div>
                                </div>
                                <div class="col-md-2 text-center">
                                    <span class="asset-unit">PREVIEW</span>
                                </div>

                            </div>
                        </div>

                    </div>
                    <div class="job-ticket4">
                        <div class="  gap-2">
                            <div class="row align-items-center">
                                <div class="col-md-1">
                                    <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios2"
                                        value="option2">
                                </div>
                                <div class="col-md-9">
                                    <div class="job">Knotty Logistic LLC</div>
                                </div>
                                <div class="col-md-2 text-center">
                                    <span class="asset-unit">PREVIEW</span>
                                </div>

                            </div>
                        </div>

                    </div>
                    <div class="job-ticket4">
                        <div class="  gap-2">
                            <div class="row align-items-center">
                                <div class="col-md-1">
                                    <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios2"
                                        value="option2">
                                </div>
                                <div class="col-md-9">
                                    <div class="job">Knotty Logistic LLC</div>
                                </div>
                                <div class="col-md-2 text-center">
                                    <span class="asset-unit">PREVIEW</span>
                                </div>

                            </div>
                        </div>

                    </div>
                    <div class="job-ticket4">
                        <div class="  gap-2">
                            <div class="row align-items-center">
                                <div class="col-md-1">
                                    <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios2"
                                        value="option2">
                                </div>
                                <div class="col-md-9">
                                    <div class="job">Knotty Logistic LLC</div>
                                </div>
                                <div class="col-md-2 text-center">
                                    <span class="asset-unit">PREVIEW</span>
                                </div>

                            </div>
                        </div>

                    </div>
                    <div class="job-ticket4">
                        <div class="  gap-2">
                            <div class="row align-items-center">
                                <div class="col-md-1">
                                    <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios2"
                                        value="option2">
                                </div>
                                <div class="col-md-9">
                                    <div class="job">Knotty Logistic LLC</div>
                                </div>
                                <div class="col-md-2 text-center">
                                    <span class="asset-unit">PREVIEW</span>
                                </div>

                            </div>
                        </div>

                    </div>
                    <div class="job-ticket4">
                        <div class="  gap-2">
                            <div class="row align-items-center">
                                <div class="col-md-1">
                                    <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios2"
                                        value="option2">
                                </div>
                                <div class="col-md-9">
                                    <div class="job">Knotty Logistic LLC</div>
                                </div>
                                <div class="col-md-2 text-center">
                                    <span class="asset-unit">PREVIEW</span>
                                </div>

                            </div>
                        </div>

                    </div>
                    <div class="job-ticket4">
                        <div class="  gap-2">
                            <div class="row align-items-center">
                                <div class="col-md-1">
                                    <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios2"
                                        value="option2">
                                </div>
                                <div class="col-md-9">
                                    <div class="job">Knotty Logistic LLC</div>
                                </div>
                                <div class="col-md-2 text-center">
                                    <span class="asset-unit">PREVIEW</span>
                                </div>

                            </div>
                        </div>

                    </div>
                    <div class="job-ticket4">
                        <div class="  gap-2">
                            <div class="row align-items-center">
                                <div class="col-md-1">
                                    <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios2"
                                        value="option2">
                                </div>
                                <div class="col-md-9">
                                    <div class="job">Knotty Logistic LLC</div>
                                </div>
                                <div class="col-md-2 text-center">
                                    <span class="asset-unit">PREVIEW</span>
                                </div>

                            </div>
                        </div>

                    </div>
                    <div class="job-ticket4">
                        <div class="  gap-2">
                            <div class="row align-items-center">
                                <div class="col-md-1">
                                    <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios2"
                                        value="option2">
                                </div>
                                <div class="col-md-9">
                                    <div class="job">Knotty Logistic LLC</div>
                                </div>
                                <div class="col-md-2 text-center">
                                    <span class="asset-unit">PREVIEW</span>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>




            </div>
        </div>
    </div>
</div>

<!-- footer part -->

<div class="modal fade" id="exampleModalLong1" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle"
    aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLongTitle"></h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <div class="search-container">
                    <input type="text" class="form-control search-input" placeholder="Search...">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                        class="bi bi-search search-icon" viewBox="0 0 16 16">
                        <path
                            d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z">
                        </path>
                    </svg>
                </div>
                <div class="">

                    <div class="Notification_body">
                        <!-- single_notify  -->

                        <div class="overflow">
                            <div class="single_notify ptb-15 ">
                                <div class="row align-items-center">
                                    <div class="col-md-2">
                                        <div class="notify_thumb">
                                            <a href="#"><img class="w-100" src="img/home/noti-user.png" alt=""></a>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="notify_content">
                                            <a href="#">
                                                <h5>Diane Guzman <span>
                                                        <p>(LAX) Airport, Los Angeles, CA</p>
                                                    </span>
                                                </h5>

                                            </a>


                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <a href="#" class="btn_13">Send Req</a>
                                    </div>
                                </div>

                            </div>
                            <!-- single_notify  -->
                            <div class="single_notify ptb-15 ">
                                <div class="row align-items-center">
                                    <div class="col-md-2">
                                        <div class="notify_thumb">
                                            <a href="#"><img class="w-100" src="img/home/noti-user.png" alt=""></a>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="notify_content">
                                            <a href="#">
                                                <h5>Diane Guzman <span>
                                                        <p>(LAX) Airport, Los Angeles, CA</p>
                                                    </span>
                                                </h5>

                                            </a>


                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <a href="#" class="btn_13">Send Req</a>
                                    </div>
                                </div>

                            </div>

                            <div class="single_notify ptb-15 ">
                                <div class="row align-items-center">
                                    <div class="col-md-2">
                                        <div class="notify_thumb">
                                            <a href="#"><img class="w-100" src="img/home/noti-user.png" alt=""></a>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="notify_content">
                                            <a href="#">
                                                <h5>Diane Guzman <span>
                                                        <p>(LAX) Airport, Los Angeles, CA</p>
                                                    </span>
                                                </h5>

                                            </a>


                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <a href="#" class="btn_13">Send Req</a>
                                    </div>
                                </div>

                            </div>
                            <div class="single_notify ptb-15 ">
                                <div class="row align-items-center">
                                    <div class="col-md-2">
                                        <div class="notify_thumb">
                                            <a href="#"><img class="w-100" src="img/home/noti-user.png" alt=""></a>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="notify_content">
                                            <a href="#">
                                                <h5>Diane Guzman <span>
                                                        <p>(LAX) Airport, Los Angeles, CA</p>
                                                    </span>
                                                </h5>

                                            </a>


                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <a href="#" class="btn_13">Send Req</a>
                                    </div>
                                </div>

                            </div>
                            <div class="single_notify ptb-15 ">
                                <div class="row align-items-center">
                                    <div class="col-md-2">
                                        <div class="notify_thumb">
                                            <a href="#"><img class="w-100" src="img/home/noti-user.png" alt=""></a>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="notify_content">
                                            <a href="#">
                                                <h5>Diane Guzman <span>
                                                        <p>(LAX) Airport, Los Angeles, CA</p>
                                                    </span>
                                                </h5>

                                            </a>


                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <a href="#" class="btn_13">Send Req</a>
                                    </div>
                                </div>

                            </div>
                            <div class="single_notify ptb-15 ">
                                <div class="row align-items-center">
                                    <div class="col-md-2">
                                        <div class="notify_thumb">
                                            <a href="#"><img class="w-100" src="img/home/noti-user.png" alt=""></a>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="notify_content">
                                            <a href="#">
                                                <h5>Diane Guzman <span>
                                                        <p>(LAX) Airport, Los Angeles, CA</p>
                                                    </span>
                                                </h5>

                                            </a>


                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <a href="#" class="btn_13">Send Req</a>
                                    </div>
                                </div>

                            </div>
                            <div class="single_notify ptb-15 ">
                                <div class="row align-items-center">
                                    <div class="col-md-2">
                                        <div class="notify_thumb">
                                            <a href="#"><img class="w-100" src="img/home/noti-user.png" alt=""></a>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="notify_content">
                                            <a href="#">
                                                <h5>Diane Guzman <span>
                                                        <p>(LAX) Airport, Los Angeles, CA</p>
                                                    </span>
                                                </h5>

                                            </a>


                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <a href="#" class="btn_13">Send Req</a>
                                    </div>
                                </div>

                            </div>
                            <div class="single_notify ptb-15 ">
                                <div class="row align-items-center">
                                    <div class="col-md-2">
                                        <div class="notify_thumb">
                                            <a href="#"><img class="w-100" src="img/home/noti-user.png" alt=""></a>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="notify_content">
                                            <a href="#">
                                                <h5>Diane Guzman <span>
                                                        <p>(LAX) Airport, Los Angeles, CA</p>
                                                    </span>
                                                </h5>

                                            </a>


                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <a href="#" class="btn_13">Send Req</a>
                                    </div>
                                </div>

                            </div>
                            <div class="single_notify ptb-15 ">
                                <div class="row align-items-center">
                                    <div class="col-md-2">
                                        <div class="notify_thumb">
                                            <a href="#"><img class="w-100" src="img/home/noti-user.png" alt=""></a>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="notify_content">
                                            <a href="#">
                                                <h5>Diane Guzman <span>
                                                        <p>(LAX) Airport, Los Angeles, CA</p>
                                                    </span>
                                                </h5>

                                            </a>


                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <a href="#" class="btn_13">Send Req</a>
                                    </div>
                                </div>

                            </div>
                            <div class="single_notify ptb-15 ">
                                <div class="row align-items-center">
                                    <div class="col-md-2">
                                        <div class="notify_thumb">
                                            <a href="#"><img class="w-100" src="img/home/noti-user.png" alt=""></a>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="notify_content">
                                            <a href="#">
                                                <h5>Diane Guzman <span>
                                                        <p>(LAX) Airport, Los Angeles, CA</p>
                                                    </span>
                                                </h5>

                                            </a>


                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <a href="#" class="btn_13">Send Req</a>
                                    </div>
                                </div>

                            </div>

                        </div>


                    </div>
                    <!-- <div class="nofity_footer">
                                    <div class="submit_button text-center pt_20">
                                        <a href="#" class="btn_1 green">See More</a>
                                    </div>
                                </div> -->
                </div>
            </div>
            <div class="ptb-15">
                <div class="row">
                    <div class="col-md-6 offset-md-3">
                        <button class=" btn btn_12" onclick="submitForm()"><img class="w-20" src="img/home/people.png"
                                alt=""> Send Invite</button>
                    </div>
                </div>


            </div>
        </div>
    </div>
</div>

<div class="modal fade" id="exampleModalLong2" tabindex="-1" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
    <div class="modal-dialog">
       
        <div class="modal-content">
            <div class="modal-header">
                <h2 class="fs-4 fw-bold mb-4 text-center">Original Ticket Info</h2>
            </div>

            <div class="modal-body ">
               <div class="row">
                <div class="col-md-12">
                    <div class="info-label2">Name
                        <input type="text" class="form-control form-control3" name="inputText" id="inputText" placeholder="Diane Guzman">
                    </div>
                </div>
                <div class="col-md-12">
                    <div class="info-label2">Email
                        <input type="email" class="form-control form-control3" name="inputText" id="inputText" placeholder="Dianeguzman1212@gmail.com">
                    </div>
                </div>
                <div class="col-md-12">
                    <div class="info-label2">Phone
                        <input type="number" class="form-control form-control3" name="inputText" id="inputText" placeholder="+1 425 365 6686">
                    </div>
                </div>
               </div>
               
            </div>
            <div class="ptb-15">
                <div class="row">
                    <div class="col-md-6 offset-md-3">
                        <button class=" btn btn_12" onclick="submitForm()"> Send </button>
                    </div>
                </div>


            </div>
        </div>
    </div>
</div>

<div class="modal fade" id="exampleModalLong" tabindex="-1" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
    <div class="modal-dialog">
       
        <div class="modal-content">
           

            <div class="modal-body ">
               <div class="row">
                <div class="col-md-12">
                   <div class="text-center">
                       <img src="img/home/outs.png" alt="">
                       <br>
                       <br>
                       <div class="job text-center">Request send to <br> Diane Guzman </div>
                    </div>
                </div>
              
               </div>
               
            </div>
            <div class="ptb-15">
                


            </div>
        </div>
    </div>
</div>


<script>
    // function submitForm() {
       
    //     var successModal = new bootstrap.Modal(document.getElementById('successModal'), {
    //         keyboard: false
    //     });
    //     successModal.show();

       
    //     setTimeout(function () {
    //         successModal.hide();
    //     }, 2000);
    // }
</script>

<!-- footer part -->

<?php include 'footer.php'; ?>