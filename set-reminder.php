<?php include 'header.php'; ?>

<!--/ menu  -->
<div class="main_content_iner">
    <div class="d-flex justify-content-between align-items-center mb-4">
        <h1 class="gps fs-4 mb-0">Reminder</h1>
        <div class="d-flex gap-2">

            <a href="#" class="btn_1"  onclick="submitForm()">Set Reminder</a>
            <!-- <button class="submit-btn btn btn-primary">Submit for Review</button> -->

        </div>
    </div>
    <div class="white_card card_height_100 mb_30">
        <div class="white_card_body">
            <div class="mt-4">
                <div class="row ">
                    <div class="col-md-6">
                        <div class="gps">

                            <div class="d-flex align-items-center gap-2">
                                <span class="airport">(LAX) Airport, Los Angeles, CA</span>
                                <br>

                            </div>
                            <div class="info-label1">Begins At: 21/02/2024 | 21:30:00</div>


                        </div>
                    </div>

                </div>
                <div class="row">
                    <div class="col-md-6">

                        <div class="white_card_header1">
                            <div class="box_header m-0">
                                <div class="main-title">
                                    <p class="m-0 info-label2">Start Date</p>
                                </div>
                            </div>
                        </div>



                        <div class=" mb-0">
                            <input type="date" class="form-control" name="inputDate" id="inputDate">
                        </div>

                    </div>
                    <div class="col-md-6">

                        <div class="white_card_header1">
                            <div class="box_header m-0">
                                <div class="main-title">
                                    <p class="m-0 info-label2">Time</p>
                                </div>
                            </div>
                        </div>



                        <div class="">
                            <input type="time" class="form-control" name="inputTime" id="inputTime">
                        </div>

                    </div>
                </div>
                <div class="row">
                    <div class="col-md-6">

                        <div class="white_card_header1">
                            <div class="box_header m-0">
                                <div class="main-title">
                                    <p class="m-0 info-label2">Start Date</p>
                                </div>
                            </div>
                        </div>



                        <div class=" mb-0">
                            <input type="date" class="form-control" name="inputDate" id="inputDate">
                        </div>

                    </div>
                    <div class="col-md-6">

                        <div class="white_card_header1">
                            <div class="box_header m-0">
                                <div class="main-title">
                                    <p class="m-0 info-label2">Time</p>
                                </div>
                            </div>
                        </div>



                        <div class="">
                            <input type="time" class="form-control" name="inputTime" id="inputTime">
                        </div>

                    </div>
                </div>
                <div class="row">
                    <div class="col-md-6">

                        <div class="white_card_header1">
                            <div class="box_header m-0">
                                <div class="main-title">
                                    <p class="m-0 info-label2">Repeat</p>
                                </div>
                            </div>
                        </div>



                        <div class=" mb-0">
                            <input type="number" class="form-control" name="inputNumber" id="inputNumber" >
                        </div>

                    </div>
                    <div class="col-md-6">

                        <div class="white_card_header1">
                            <div class="box_header m-0">
                                <div class="main-title">
                                    <p class="m-0 info-label2">Calender</p>
                                </div>
                            </div>
                        </div>



                        <div class="">
                            <input type="number" class="form-control" name="inputNumber" id="inputNumber">
                        </div>

                    </div>
                </div>
                <div class="row">
                    <div class="col-md-6">

                        <div class="white_card_header1">
                            <div class="box_header m-0">
                                <div class="main-title">
                                    <p class="m-0 info-label2">Alert</p>
                                </div>
                            </div>
                        </div>



                        <div class=" mb-0">
                            <input type="number" class="form-control" name="inputNumber" id="inputNumber" >
                        </div>

                    </div>
                  
                </div>
            </div>

        </div>
    </div>
</div>
</div>
</div>

<div class="modal fade" id="successModal" tabindex="-1" aria-labelledby="successModalLabel" aria-hidden="true">
    <div class="modal-dialog">
       
         
          
              <img class="w-50 d-block mx-auto" src="img/home/set-reminder.png" alt="">
          
      
    </div>
</div>
<!-- footer part -->
<script>
    function submitForm() {
        // Show the success modal
        var successModal = new bootstrap.Modal(document.getElementById('successModal'), {
            keyboard: false
        });
        successModal.show();

        // Hide the modal after 2 seconds (2000ms)
        setTimeout(function() {
            successModal.hide();
        }, 2000);
    }
</script>

<!-- footer part -->

<?php include 'footer.php'; ?>