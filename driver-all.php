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
    <div class="row align-items-center mb-4">
        <div class="col-md-3">
            <h1 class="fw-bold fs-4 mb-0">My Documents</h1>
        </div>
    
        <?php include 'driver-header.php'; ?>
    
        <div class="col-md-4 d-flex gap-2">
            <div class="search-container">
                <input type="text" class="form-control search-input" placeholder="Search...">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search search-icon" viewBox="0 0 16 16">
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                </svg>
            </div>
            <button class="filter-button">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-sliders" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M11.5 2a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM9.05 3a2.5 2.5 0 0 1 4.9 0H16v1h-2.05a2.5 2.5 0 0 1-4.9 0H0V3h9.05zM4.5 7a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM2.05 8a2.5 2.5 0 0 1 4.9 0H16v1H6.95a2.5 2.5 0 0 1-4.9 0H0V8h2.05zm9.45 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm-2.45 1a2.5 2.5 0 0 1 4.9 0H16v1h-2.05a2.5 2.5 0 0 1-4.9 0H0v-1h9.05z"/>
                </svg>
            </button>
            <div class="dropdown">
                <a class="btn btn_1 dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" " aria-expanded="false">
                    + Add
                </a>
              
                <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                  <a class="dropdown-item" href="#"><img src="img/home/camera.png" alt=""> &nbsp;&nbsp; Capture</a>
                  <a class="dropdown-item" href="#"><img src="img/home/upload.png" alt=""> &nbsp;&nbsp; Upload</a>
                
                </div>
              </div>
        </div>
    </div>
    

    <div class="mt-4">
        <div class="job-ticket2">
            <div class="">
                <div class="row align-items-center">
                    <div class="col-md-2">
                        <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2">
                        <span class="heading t-2">All</span>
                    </div>
                    <div class="col-md-9">
                        <span class="heading">Driver No.</span>
                    </div>
                   <div class="col-md-1">
                    <span class="heading">Doc Type</span>
                   </div>
                </div>
              
                
               
            </div>
           
        </div>
        <div class="job-ticket3">
            <div class="  gap-2">
                <div class="row align-items-center">
                    <div class="col-md-2">
                        <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2">
                    </div>
                    <div class="col-md-9">
                        <span class="airport">Lorem ipsum dolor sit amet elit</span>
                    </div>
                    <div class="col-md-1">
                        <span class="airport">Doc</span>
                    </div>
                </div>
             
               
                
            </div>
           
        </div>

        <div class="job-ticket3">
            <div class=" align-items-center gap-2">
                <div class="row align-items-center">
                    <div class="col-md-2">
                        <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2">
                    </div>
                    <div class="col-md-9">
                        <span class="airport">Lorem ipsum dolor sit amet elit</span>
                    </div>
                    <div class="col-md-1">
                        <span class="airport">Pdf</span>
                    </div>
                </div>
             
               
                
            </div>
           
        </div>

        <div class="job-ticket3">
            <div class=" align-items-center gap-2">
                <div class="row align-items-center">
                    <div class="col-md-2">
                        <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2">
                    </div>
                    <div class="col-md-9">
                        <span class="airport">Lorem ipsum dolor sit amet elit</span>
                    </div>
                    <div class="col-md-1">
                        <span class="airport">Doc</span>
                    </div>
                </div>
             
               
                
            </div>
           
        </div>
        <div class="job-ticket3">
            <div class=" align-items-center gap-2">
                <div class="row align-items-center">
                    <div class="col-md-2">
                        <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2">
                    </div>
                    <div class="col-md-9">
                        <span class="airport">Lorem ipsum dolor sit amet elit</span>
                    </div>
                    <div class="col-md-1">
                        <span class="airport">Pdf</span>
                    </div>
                </div>
             
               
                
            </div>
           
        </div>

        <div class="job-ticket3">
            <div class=" align-items-center gap-2">
                <div class="row align-items-center">
                    <div class="col-md-2">
                        <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2">
                    </div>
                    <div class="col-md-9">
                        <span class="airport">Lorem ipsum dolor sit amet elit</span>
                    </div>
                    <div class="col-md-1">
                        <span class="airport">Doc</span>
                    </div>
                </div>
             
               
                
            </div>
           
        </div>

        <div class="job-ticket3">
            <div class=" align-items-center gap-2">
                <div class="row align-items-center">
                    <div class="col-md-2">
                        <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2">
                    </div>
                    <div class="col-md-9">
                        <span class="airport">Lorem ipsum dolor sit amet elit</span>
                    </div>
                    <div class="col-md-1">
                        <span class="airport">Pdf</span>
                    </div>
                </div>
             
               
                
            </div>
           
        </div>

        <div class="job-ticket3">
            <div class=" align-items-center gap-2">
                <div class="row align-items-center">
                    <div class="col-md-2">
                        <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2">
                    </div>
                    <div class="col-md-9">
                        <span class="airport">Lorem ipsum dolor sit amet elit</span>
                    </div>
                    <div class="col-md-1">
                        <span class="airport">Doc</span>
                    </div>
                </div>
                            
            </div>
           
        </div>
    </div>
</div>

<!-- footer part -->


<!-- footer part -->

<?php include 'footer.php'; ?>