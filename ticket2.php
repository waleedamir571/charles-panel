<?php include 'header.php'; ?>

<!--/ menu  -->

<div class="main_content_iner">
    <!-- Header Section -->

    <div class="container-fluid p-0 white_card card_height_100 mb_30">
        <div class="mb-4">
            <div class="white_card_header">
                <div class="row align-items-center">

                    <!-- Column 1: Heading -->
                    <div class="col-md-6 col-12 mb-2 mb-md-0">
                        <h1 class="fw-bold fs-4 mb-0">Job Tickets</h1>
                    </div>

                    <!-- Right: Search + Filter + Tabs -->
                    <div class="col-md-6 col-12 text-md-end">
                        <div class="d-flex flex-wrap justify-content-md-end align-items-center gap-2">

                            <!-- Search Box -->
                            <div class="search-container position-relative">
                                <input type="text" class="form-control form-control1 search-input pe-5"
                                    placeholder="Search...">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                    class="bi bi-search search-icon position-absolute top-50 end-0 translate-middle-y me-3"
                                    viewBox="0 0 16 16">
                                    <path
                                        d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z">
                                    </path>
                                </svg>
                            </div>

                            <!-- Filter Icon -->
                            <div class="grid-icon">
                                <svg width="18" height="18" viewBox="0 0 18 18" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7 3H3V7H7V3Z" stroke="currentColor" stroke-width="1.5"
                                        stroke-linecap="round" stroke-linejoin="round"></path>
                                    <path d="M15 3H11V7H15V3Z" stroke="currentColor" stroke-width="1.5"
                                        stroke-linecap="round" stroke-linejoin="round"></path>
                                    <path d="M7 11H3V15H7V11Z" stroke="currentColor" stroke-width="1.5"
                                        stroke-linecap="round" stroke-linejoin="round"></path>
                                    <path d="M15 11H11V15H15V11Z" stroke="currentColor" stroke-width="1.5"
                                        stroke-linecap="round" stroke-linejoin="round"></path>
                                </svg>
                            </div>

                            <!-- Tabs -->


                        </div>
                    </div>

                </div>


            </div>

            <div class="row g-4">
                <div class="col-lg-6">
                    <div class="card p-4 h-100 shadow-sm">

                        <p class="text-muted">(LAX) Airport, Los Angeles, CA</p>

                        <div class="row g-3 my-3">
                            <div class="col-md-4">
                                <div class="stat-card">
                                    <div class="stat-label payslip-text">Total Hours</div>
                                    <div class="stat-value job-text pt-30">122h</div>
                                </div>
                            </div>

                            <div class="col-md-4">
                                <div class="stat-card">
                                    <div class="stat-label payslip-text">Total Drivers</div>
                                    <div class="stat-value job-text pt-30">148</div>
                                </div>
                            </div>

                            <div class="col-md-4">
                                <div class="stat-card">
                                    <div class="stat-label payslip-text">Total Trucks</div>
                                    <div class="stat-value job-text pt-30">148</div>
                                </div>
                            </div>
                        </div>

                        <div class="row g-3 my-3">
                            <div class="col-md-4">
                                <div class="stat-card">
                                    <div class="stat-label payslip-text">Rate Per Unit</div>
                                    <div class="stat-value job-text pt-30">$28/T</div>
                                </div>
                            </div>

                            <div class="col-md-4">
                                <div class="stat-card">
                                    <div class="stat-label payslip-text">Total Load Transported</div>
                                    <div class="stat-value job-text pt-30">1,680<small class="text-muted">T</small>
                                    </div>
                                </div>
                            </div>

                            <div class="col-md-4">
                                <div class="stat-card">
                                    <div class="stat-label payslip-text">Total Distance</div>
                                    <div class="stat-value job-text pt-30">200<small
                                            class="text-muted ms-1">MILES</small></div>
                                </div>
                            </div>
                        </div>

                        <div class="d-flex justify-content-between align-items-center mt-4 pt-3 border-top">
                            <h5 class=" mb-0 cost">Total Cost :</h5>
                            <h3 class="fw-bold mb-0">$47,040</h3>
                        </div>
                    </div>
                </div>

                <div class="col-lg-6">
                    <div class="card card2 p-4 mb-4 shadow-sm job-ticket-card">
                        <div class="">
                            <div class="row align-items-center">
                                <div class="col-md-4">
                                    <div class="d-flex gap-3">
                                        <div class="rounded-circle overflow-hidden" style="width: 60px; height: 60px;">
                                            <img src="img/home/doe.png" alt="Driver" class="driver-avatar">
                                        </div>
                                        <div>
                                            <h5 class="fw-bold mb-1 dash">Jhon Doe</h5>
                                            <p class=" mb-0 payslip-text">
                                                Status : <span class="active">Active</span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6 offset-md-2">
                                    <div class="d-flex gap-4 align-items-center">
                                        <div class="text-center">
                                            <img src="img/home/time.png" alt="">
                                            <h6 class="fw-bold mb-0 pb-15">47H</h6>
                                        </div>

                                        <div class="text-center">
                                            <img src="img/home/truck.png" alt="">
                                            <h6 class="fw-bold mb-0 pb-15">No.1234</h6>
                                        </div>

                                        <div class="text-center">
                                            <img src="img/home/load.png" alt="">
                                            <h6 class="fw-bold mb-0 pb-15">1,700T</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>



                        </div>

                        <button class="btn btn-dark1 w-100 mt-3">View Job Ticket</button>
                    </div>
                    <div class="card card2 p-4 mb-4 shadow-sm job-ticket-card">
                        <div class="">
                            <div class="row align-items-center">
                                <div class="col-md-4">
                                    <div class="d-flex gap-3">
                                        <div class="rounded-circle overflow-hidden" style="width: 60px; height: 60px;">
                                            <img src="img/home/doe.png" alt="Driver" class="driver-avatar">
                                        </div>
                                        <div>
                                            <h5 class="fw-bold mb-1 dash">Jhon Doe</h5>
                                            <p class=" mb-0 payslip-text">
                                                Status : <span class="active">Active</span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6 offset-md-2">
                                    <div class="d-flex gap-4 align-items-center">
                                        <div class="text-center">
                                            <img src="img/home/time.png" alt="">
                                            <h6 class="fw-bold mb-0 pb-15">47H</h6>
                                        </div>

                                        <div class="text-center">
                                            <img src="img/home/truck.png" alt="">
                                            <h6 class="fw-bold mb-0 pb-15">No.1234</h6>
                                        </div>

                                        <div class="text-center">
                                            <img src="img/home/load.png" alt="">
                                            <h6 class="fw-bold mb-0 pb-15">1,700T</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>



                        </div>

                        <button class="btn btn-dark1 w-100 mt-3">View Job Ticket</button>
                    </div>
                    <div class="card card2 p-4 mb-4 shadow-sm job-ticket-card">
                        <div class="">
                            <div class="row align-items-center">
                                <div class="col-md-4">
                                    <div class="d-flex gap-3">
                                        <div class="rounded-circle overflow-hidden" style="width: 60px; height: 60px;">
                                            <img src="img/home/doe.png" alt="Driver" class="driver-avatar">
                                        </div>
                                        <div>
                                            <h5 class="fw-bold mb-1 dash">Jhon Doe</h5>
                                            <p class=" mb-0 payslip-text">
                                                Status : <span class="active">Active</span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6 offset-md-2">
                                    <div class="d-flex gap-4 align-items-center job-ticket-heading">
                                        <div class="text-center">
                                            <img src="img/home/time.png" alt="">
                                            <h6 class="fw-bold mb-0 pb-15">47H</h6>
                                        </div>

                                        <div class="text-center">
                                            <img src="img/home/truck.png" alt="">
                                            <h6 class="fw-bold mb-0 pb-15">No.1234</h6>
                                        </div>

                                        <div class="text-center">
                                            <img src="img/home/load.png" alt="">
                                            <h6 class="fw-bold mb-0 pb-15">1,700T</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>



                        </div>

                        <!-- Job Ticket Block -->
                        <div class="job-ticket-toggle text-center">

                            <!-- Heading (will be hidden on click) -->
                           

                            <!-- Button -->
                            <button class="btn btn-dark1 w-100 mt-3 view-ticket-btn">View Job Ticket</button>

                            <!-- Hidden Details -->
                            <div class="job-ticket-details mt-3"
                                style="display: none; opacity: 0; transition: opacity 0.6s ease;">
                                <div class="d-flex gap-4 align-items-center justify-content-center">
                                    <div class="text-center">
                                        <img src="img/home/time.png" alt="">
                                        <h6 class="fw-bold mb-0 pb-15">47H</h6>
                                    </div>
                                    <div class="text-center">
                                        <img src="img/home/truck.png" alt="">
                                        <h6 class="fw-bold mb-0 pb-15">No.1234</h6>
                                    </div>
                                    <div class="text-center">
                                        <img src="img/home/load.png" alt="">
                                        <h6 class="fw-bold mb-0 pb-15">1,700T</h6>
                                    </div>
                                </div>
                            </div>

                        </div>


                    </div>


                </div>
            </div>
        </div>


        <!-- Job Cards Section -->


    </div>

    <!-- footer part -->


    <script>
        document.querySelector('.view-ticket-btn').addEventListener('click', function () {
            const button = this;
            const details = document.querySelector('.job-ticket-details');
            const heading = document.querySelector('.job-ticket-heading');

            // Fade out button and heading
            button.style.transition = 'opacity 0.5s ease';
            heading.style.transition = 'opacity 0.5s ease';
            button.style.opacity = 0;
            heading.style.opacity = 0;

            // After fade-out, hide them and show details
            setTimeout(() => {
                button.style.display = 'none';
                heading.style.display = 'none';
                details.style.display = 'block';
                setTimeout(() => {
                    details.style.opacity = 1;
                }, 50);
            }, 500);
        });
    </script>




    <!-- footer part -->

    <?php include 'footer.php'; ?>