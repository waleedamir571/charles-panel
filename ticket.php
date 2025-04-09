<?php include 'header.php'; ?>

<!--/ menu  -->

<div class="main_content_iner">
    <!-- Header Section -->

    <div class="container-fluid p-0 white_card card_height_100 mb_30 ">
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
                            <input type="text" class="form-control form-control1 search-input pe-5" placeholder="Search...">
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
                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M7 3H3V7H7V3Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                                stroke-linejoin="round"></path>
                              <path d="M15 3H11V7H15V3Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                                stroke-linejoin="round"></path>
                              <path d="M7 11H3V15H7V11Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                                stroke-linejoin="round"></path>
                              <path d="M15 11H11V15H15V11Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                                stroke-linejoin="round"></path>
                            </svg>
                          </div>
                    
                          <!-- Tabs -->
                          <div class="tabs-bg">
                            <ul class="nav nav-tabs custom-tabs border-0" id="myTab" role="tablist">
                              <li class="nav-item" role="presentation">
                                <button class="nav-link active px-3 py-1" id="index-tab" data-bs-toggle="tab" data-bs-target="#index"
                                  type="button" role="tab" aria-controls="index" aria-selected="true">
                                  Index
                                </button>
                              </li>
                              <li class="nav-item" role="presentation">
                                <button class="nav-link px-3 py-1" id="jobs-tab" data-bs-toggle="tab" data-bs-target="#jobs"
                                  type="button" role="tab" aria-controls="jobs" aria-selected="false">
                                  Jobs
                                </button>
                              </li>
                            </ul>
                          </div>
                    
                        </div>
                      </div>
                    
                    </div>
                      

                </div>
            </div>
            <div class="tab-content" id="myTabContent">

                <!-- Index Tab -->
                <div class="tab-pane fade" id="jobs" role="tabpanel" aria-labelledby="jobs-tab">
                    <div class="white_card_body">
                        <div class="row g-4">
                            <!-- Job Card 1 -->
                            <div class="col-md-6">
                                <div class="card job-card1">
                                    <div class="card-body">
                                        <div class="mb-3">
                                            <h3 class="card-title mb-0 job-text">
                                                (LAX) Airport, <span class="fw-normal">Los Angeles, CA</span>
                                            </h3>
                                        </div>
    
                                        <div class="mb-3">
                                            <div class="row align-items-center">
                                                <div class="col-md-2">
                                                    <span class="text-muted">Status</span>
                                                </div>
                                                <div class="col-md-10">
                                                    <div class="progress h-30" >
                                                        <div class="progress-bar bg-lime-400" role="progressbar"
                                                            style="width: 60%" aria-valuenow="60" aria-valuemin="0"
                                                            aria-valuemax="100">60%</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
    
                                        <div class="row text-center">
                                            <div class="col-4 border-end">
                                                <p class="text-muted mb-1">Trucks</p>
                                                <div class="icon-container">
                                                    <img src="img/home/truck.png" alt="">
                                                </div>
                                                <p class="fw-bold fs-4 mb-0 job-text">27</p>
                                            </div>
                                            <div class="col-4 border-end">
                                                <p class="text-muted mb-1">Drivers</p>
                                                <div class="icon-container">
                                                    <img src="img/home/user-blue.png" alt="">
                                                </div>
                                                <p class="fw-bold fs-4 mb-0 job-text">27</p>
                                            </div>
                                            <div class="col-4">
                                                <p class="text-muted mb-1">Load</p>
                                                <div class="icon-container">
                                                    <img src="img/home/load.png" alt="">
                                                </div>
                                                <p class="fw-bold fs-4 mb-0 job-text">1,700T</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
    
                            <!-- Job Card 2 -->
                            <div class="col-md-6">
                                <div class="card job-card1">
                                    <div class="card-body">
                                        <div class="mb-3">
                                            <h3 class="card-title mb-0 job-text">
                                                (LAX) Airport, <span class="fw-normal">Los Angeles, CA</span>
                                            </h3>
                                        </div>
    
                                        <div class="mb-3">
                                            <div class="row align-items-center">
                                                <div class="col-md-2">
                                                    <span class="text-muted">Status</span>
                                                </div>
                                                <div class="col-md-10">
                                                    <div class="progress  h-30" >
                                                        <div class="progress-bar bg-green-300" role="progressbar"
                                                            style="width: 80%" aria-valuenow="80" aria-valuemin="0"
                                                            aria-valuemax="100">80%</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
    
    
    
    
                                        <div class="row text-center">
                                            <div class="col-4 border-end">
                                                <p class="text-muted mb-1">Trucks</p>
                                                <div class="icon-container">
                                                    <img src="img/home/truck.png" alt="">
                                                </div>
                                                <p class="fw-bold fs-4 mb-0 job-text">27</p>
                                            </div>
                                            <div class="col-4 border-end">
                                                <p class="text-muted mb-1">Drivers</p>
                                                <div class="icon-container">
                                                    <img src="img/home/user-blue.png" alt="">
                                                </div>
                                                <p class="fw-bold fs-4 mb-0 job-text">27</p>
                                            </div>
                                            <div class="col-4">
                                                <p class="text-muted mb-1">Load</p>
                                                <div class="icon-container">
                                                    <img src="img/home/load.png" alt="">
                                                </div>
                                                <p class="fw-bold fs-4 mb-0 job-text">1,700T</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
    
                            <!-- Job Card 3 -->
                            <div class="col-md-6">
                                <div class="card job-card1">
                                    <div class="card-body">
                                        <div class="mb-3">
                                            <h3 class="card-title mb-0 job-text">
                                                (LAX) Airport, <span class="fw-normal">Los Angeles, CA</span>
                                            </h3>
                                        </div>
    
    
                                        <div class="mb-3">
                                            <div class="row align-items-center">
                                                <div class="col-md-2">
                                                    <span class="text-muted">Status</span>
                                                </div>
                                                <div class="col-md-10">
                                                    <div class="progress  h-30" >
                                                        <div class="progress-bar bg-yellow-400" role="progressbar"
                                                            style="width: 30%" aria-valuenow="30" aria-valuemin="0"
                                                            aria-valuemax="100">30%</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
    
                                        <div class="row text-center">
                                            <div class="col-4 border-end">
                                                <p class="text-muted mb-1">Trucks</p>
                                                <div class="icon-container">
                                                    <img src="img/home/truck.png" alt="">
                                                </div>
                                                <p class="fw-bold fs-4 mb-0 job-text">27</p>
                                            </div>
                                            <div class="col-4 border-end">
                                                <p class="text-muted mb-1">Drivers</p>
                                                <div class="icon-container">
                                                    <img src="img/home/user-blue.png" alt="">
                                                </div>
                                                <p class="fw-bold fs-4 mb-0 job-text">27</p>
                                            </div>
                                            <div class="col-4">
                                                <p class="text-muted mb-1">Load</p>
                                                <div class="icon-container">
                                                    <img src="img/home/load.png" alt="">
                                                </div>
                                                <p class="fw-bold fs-4 mb-0 job-text">1,700T</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
    
                            <!-- Job Card 4 -->
                            <div class="col-md-6">
                                <div class="card job-card1">
                                    <div class="card-body">
                                        <div class="mb-3">
                                            <h3 class="card-title mb-0 job-text">
                                                (LAX) Airport, <span class="fw-normal">Los Angeles, CA</span>
                                            </h3>
                                        </div>
    
    
                                        <div class="mb-3">
                                            <div class="row align-items-center">
                                                <div class="col-md-2">
                                                    <span class="text-muted">Status</span>
                                                </div>
                                                <div class="col-md-10">
                                                    <div class="progress  h-30" >
                                                        <div class="progress-bar bg-green-500" role="progressbar"
                                                            style="width: 100%" aria-valuenow="100" aria-valuemin="0"
                                                            aria-valuemax="100">100%</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
    
                                        <div class="row text-center">
                                            <div class="col-4 border-end">
                                                <p class="text-muted mb-1">Trucks</p>
                                                <div class="icon-container">
                                                    <img src="img/home/truck.png" alt="">
                                                </div>
                                                <p class="fw-bold fs-4 mb-0 job-text">27</p>
                                            </div>
                                            <div class="col-4 border-end">
                                                <p class="text-muted mb-1">Drivers</p>
                                                <div class="icon-container">
                                                    <img src="img/home/user-blue.png" alt="">
                                                </div>
                                                <p class="fw-bold fs-4 mb-0 job-text">27</p>
                                            </div>
                                            <div class="col-4">
                                                <p class="text-muted mb-1">Load</p>
                                                <div class="icon-container">
                                                    <img src="img/home/load.png" alt="">
                                                </div>
                                                <p class="fw-bold fs-4 mb-0 job-text">1,700T</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
    
                <div class="tab-pane fade show active" id="index" role="tabpanel" aria-labelledby="index-tab">
                    <div class="white_card_body">
                        <div class="mt-4">
                            <div class="job-ticket">
                                <div class="d-flex align-items-center gap-2">
                                    <span class="airport">(LAX) Airport,</span>
                                    <span class="location">Los Angeles</span>
                                </div>
                                <div class="d-flex align-items-center gap-4">
                                    <span class="airport">2JB872HB</span>
                                    <span class="airport">12-21-24</span>
                                </div>
                            </div>
    
                            <div class="job-ticket">
                                <div class="d-flex align-items-center gap-2">
                                    <span class="airport">(LAX) Airport,</span>
                                    <span class="location">Los Angeles</span>
                                </div>
                                <div class="d-flex align-items-center gap-4">
                                    <span class="airport">2JB872HB</span>
                                    <span class="airport">12-21-24</span>
                                </div>
                            </div>
    
                            <div class="job-ticket">
                                <div class="d-flex align-items-center gap-2">
                                    <span class="airport">(LAX) Airport,</span>
                                    <span class="location">Los Angeles</span>
                                </div>
                                <div class="d-flex align-items-center gap-4">
                                    <span class="airport">2JB872HB</span>
                                    <span class="airport">12-21-24</span>
                                </div>
                            </div>
    
                            <div class="job-ticket">
                                <div class="d-flex align-items-center gap-2">
                                    <span class="airport">(LAX) Airport,</span>
                                    <span class="location">Los Angeles</span>
                                </div>
                                <div class="d-flex align-items-center gap-4">
                                    <span class="airport">2JB872HB</span>
                                    <span class="airport">12-21-24</span>
                                </div>
                            </div>
    
                            <div class="job-ticket">
                                <div class="d-flex align-items-center gap-2">
                                    <span class="airport">(LAX) Airport,</span>
                                    <span class="location">Los Angeles</span>
                                </div>
                                <div class="d-flex align-items-center gap-4">
                                    <span class="airport">2JB872HB</span>
                                    <span class="airport">12-21-24</span>
                                </div>
                            </div>
    
                            <div class="job-ticket">
                                <div class="d-flex align-items-center gap-2">
                                    <span class="airport">(LAX) Airport,</span>
                                    <span class="location">Los Angeles</span>
                                </div>
                                <div class="d-flex align-items-center gap-4">
                                    <span class="airport">2JB872HB</span>
                                    <span class="airport">12-21-24</span>
                                </div>
                            </div>
    
                            <div class="job-ticket">
                                <div class="d-flex align-items-center gap-2">
                                    <span class="airport">(LAX) Airport,</span>
                                    <span class="location">Los Angeles</span>
                                </div>
                                <div class="d-flex align-items-center gap-4">
                                    <span class="airport">2JB872HB</span>
                                    <span class="airport">12-21-24</span>
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



    <!-- footer part -->

    <?php include 'footer.php'; ?>