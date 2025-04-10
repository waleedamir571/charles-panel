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
                        <h1 class="fw-bold fs-4 mb-0">John Doe</h1>
                        <br>
                        <div class="line-container"></div>
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
                    <div class=" p-4 h-100 shadow-sm">

                        <p class="text-muted">(LAX) Airport, Los Angeles, CA</p>

                        <div class="row g-3 my-3 job-card1">
                            <div class="col-md-4">

                            </div>

                            <div class="col-md-4">
                                <div class="stat-card">
                                    <div class="stat-label payslip-text">Total Drivers</div>
                                    <div class="stat-value pt-30 fs-148">148</div>
                                </div>
                            </div>

                            <div class="col-md-4">

                            </div>
                        </div>

                        <div class="row g-3 my-3  job-card1">
                            <div class="col-md-6">
                                <div class="stat-card">
                                    <div class="stat-label payslip-text">Total Load <br>
                                        Transported</div>
                                    <div class="stat-value summary pt-30">1,680 <small class="text-muted">T</small>
                                    </div>
                                </div>
                            </div>


                            <div class="col-md-6">
                                <div class="stat-card">
                                    <div class="stat-label payslip-text">Total Distance</div>
                                    <div class="stat-value summary pt-30">200<small
                                            class="text-muted ms-1">MILES</small></div>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>

                <div class="col-lg-6">
                    <div class="container mt-5">
                        <!-- Today Section -->
                        <div class="date-section">
                            <div class="date-title">Today <div class="line"></div>
                            </div>
                            <br>
                            <div class="preview-box">
                                <span>25TH - November - 2024</span>
                                <button>Preview</button>
                            </div>
                            <div class="preview-box">
                                <span>24TH - November - 2024</span>
                                <button>Preview</button>
                            </div>
                        </div>

                        <!-- This Week Section -->
                        <div class="date-section">
                            <div class="date-title">This Week <div class="line"></div></div>
                            <br>
                            <div class="preview-box">
                                <span>23TH - November - 2024</span>
                                <button>Preview</button>
                            </div>
                            <div class="preview-box">
                                <span>22TH - November - 2024</span>
                                <button>Preview</button>
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