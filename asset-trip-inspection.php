<?php include 'header.php'; ?>

<!--/ menu  -->
<div class="main_content_iner">
    <div class="d-flex justify-content-between align-items-center mb-4">
        <h1 class="gps fs-4 mb-0">Trip Inspection</h1>

    </div>
    <div class="white_card card_height_100 mb_30">
        <div class="white_card_body">
            <div class="mt-4">
                <div class="d-flex justify-content-between align-items-center mb-4">
                    <h1 class="gps fs-4 mb-0">Inspection</h1>
                    <div class="d-flex gap-2">



                        <p>Check any item that needs attention. Provide details under comments sections.</p>

                    </div>
                </div>
                <div class="row">
                    <div class="col-md-6">

                        <div class="white_card_header1">
                            <div class="box_header m-0">
                                <div class="main-title">
                                    <p class="m-0 info-label2">Truck No.</p>
                                </div>
                            </div>
                        </div>



                        <div class=" mb-0">
                            <input type="number" class="form-control" name="inputDate" id="inputDate">
                        </div>

                    </div>
                    <div class="col-md-6">

                        <div class="white_card_header1">
                            <div class="box_header m-0">
                                <div class="main-title">
                                    <p class="m-0 info-label2">Odometer Reading</p>
                                </div>
                            </div>
                        </div>



                        <div class="">
                            <input type="number" class="form-control" name="inputTime" id="inputTime">
                        </div>

                    </div>
                </div>
                <div class="row">
                    <div class="col-md-6">

                        <div class="white_card_header1">
                            <div class="box_header m-0">
                                <div class="main-title">
                                    <p class="m-0 info-label2">Trailer</p>
                                </div>
                            </div>
                        </div>



                        <div class=" mb-0">
                            <input type="number" class="form-control" name="inputTime" id="inputTime">
                        </div>

                    </div>
                    <div class="col-md-6">

                        <div class="white_card_header1">
                            <div class="box_header m-0">
                                <div class="main-title">
                                    <p class="m-0 info-label2">Inspection Date</p>
                                </div>
                            </div>
                        </div>



                        <div class="">

                            <input type="date" class="form-control" name="inputDate" id="inputDate">
                        </div>

                    </div>
                </div>

                <div class="row">
                    <div class="col-md-6">

                        <div class="white_card_header1">
                            <div class="box_header m-0">
                                <div class="main-title">
                                    <p class="m-0 info-label2">Time</p>
                                </div>
                            </div>
                        </div>



                        <div class=" mb-0">
                            <input type="time" class="form-control" name="inputNumber" id="inputNumber">
                        </div>

                    </div>

                </div>
                <div class="pt-30">
                    <div class="row align-items-end">
                        <div class="col-md-6">
                            <div class="tire-section">
                                <div class="section-title">Tires</div>
                                <input type="text" class="segmented-input" placeholder="">
                            </div>
                        </div>

                        <div class="col-md-6">
                            <div class="tire-section">
                                <div class="section-title">Trailers</div>
                                <input type="text" class="segmented-input" placeholder="">
                            </div>
                        </div>
                    
                       
                    
                        
                    </div>
                </div>
                <div class="pt-30">
                    <div class="row align-items-center">
                        <div class="col-md-4">
                            <div class="form-inline-group">
                                <label for="signature">Driver's Signature</label>
                                <input type="text" id="signature">
                            </div>
                        </div>

                        <div class="col-md-4">
                            <div class="form-inline-group">
                                <label for="date">Date</label>
                                <input type="date" id="date">
                            </div>
                        </div>

                        <div class="col-md-3 offset-md-1">
                            <button class="submit-btn1">Submit</button>
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
        setTimeout(function () {
            successModal.hide();
        }, 2000);
    }
</script>

<!-- footer part -->

<?php include 'footer.php'; ?>