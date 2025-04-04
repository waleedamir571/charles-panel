<?php include 'header.php'; ?>

<style>
    .dashboard {
        /* max-width: 1100px; */
        /* margin: 20px auto; */
        background: white;
        border-radius: 10px;
        padding: 20px;
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    }

    .header {

        padding: 15px;
        color: white;
        display: flex;
        align-items: center;
        justify-content: space-between;
        border-radius: 10px;
        border-radius: 10px;
        background: linear-gradient(90deg, #1F385D 0%, #4175C3 100%);
    }

    .header h3 {
        margin: 0;
        font-weight: bold;
    }

    .rating i {
        color: gold;
    }

    .top-buttons button {
        background: white;
        border: none;
        color: #fff;
        padding: 5px 10px;
        margin-left: 5px;
        border-radius: 5px;
        font-size: 14px;
        border-radius: 6px;
        background: #4F84CA;
    }

    .card {
        border-radius: 10px;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
        padding: 15px;
        margin-bottom: 20px;
    }

    .profile-img {
        width: 35px;
        height: 35px;
        border-radius: 50%;
        margin-right: 10px;
    }

    .progress {
        height: 8px;
        border-radius: 5px;
    }

   
</style>

<!--/ menu  -->
<div class="dashboard">
    <!-- Header Section -->
    <div class="header">
        <img src="img/home/logo.png" alt=""> <img src="img/home/star.png" alt="">

        <div class="rating">

        </div>
        <div class="top-buttons">
            <button type="button" class="btn mb-3 btn-info1"><i class="fas fa-file-alt"></i>&nbsp;&nbsp;&nbsp; Job
                Tickets</button>
            <button type="button" class="btn mb-3 btn-info1"><i class="fas fa-file-invoice"></i>&nbsp;&nbsp;&nbsp;
                Invoices</button>
            <button type="button" class="btn mb-3 btn-info1"><i class="fas fa-folder"></i>&nbsp;&nbsp;&nbsp;
                Documents</button>


        </div>
    </div>

    <div class="row mt-3">
        <!-- Left Column -->
        <div class="col-md-7">
            <div class="card">
                <p class="gps">Knotty Logistic LLC</p>
                <table class="table table-borderless">
                    <thead>
                        <tr>
                            <th class="profile">Profile</th>
                            <th class="profile">Name</th>
                            <th class="profile">Contact</th>
                            <th class="profile">Rating</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><img src="img/home/usernone.png" class="profile-img"></td>
                            <td class="job">Ben Anderson</td>
                            <td>(123) 465-789</td>
                            <td>⭐⭐⭐⭐⭐</td>
                        </tr>
                        <tr>
                            <td><img src="img/home/usernone.png" class="profile-img"></td>
                            <td class="job">Ben Anderson</td>
                            <td>(123) 465-789</td>
                            <td>⭐⭐⭐⭐⭐</td>
                        </tr>
                        <tr>
                            <td><img src="img/home/usernone.png" class="profile-img"></td>
                            <td class="job">Ben Anderson</td>
                            <td>(123) 465-789</td>
                            <td>⭐⭐⭐⭐⭐</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div class="card">
                <p class="gps">Address</p>
                <br>
                <div class="box">
                    <div class="row">
                        <div class="col-md-6">
                            <p class="ptext"><strong>Office:</strong>
                                <br> 
                                6730 Fairdale Dr, San Antonio TX</p>
                        </div>
                        <div class="col-md-3 offset-md-3">
                            <img src="img/home/office.png" alt="">
                        </div>
                    </div>
                  
                       
                </div>
                
              <br><br>
              <div class="box">
                <div class="row">
                    <div class="col-md-6">
                        <p class="ptext"><strong>Region:</strong>
                            <br> 
                            San Antonio, TX 78218</p>
                    </div>
                    <div class="col-md-3 offset-md-3">
                        <img src="img/home/region.png" alt="">
                    </div>
                </div>
              
                   
            </div>
            </div>
        </div>

        <!-- Right Column -->
        <div class="col-md-5">
            <!-- <div class="card">
                <p class="gps">Assets</p>
                <p>Trucks</p>
                <div class="progress">
                    <div class="progress-bar bg-primary" style="width: 75%;"></div>
                </div>
                <p>Belly</p>
                <div class="progress">
                    <div class="progress-bar bg-info" style="width: 35%;"></div>
                </div>
                <p>Side</p>
                <div class="progress">
                    <div class="progress-bar bg-dark" style="width: 45%;"></div>
                </div>
                <p>End</p>
                <div class="progress">
                    <div class="progress-bar bg-danger" style="width: 12%;"></div>
                </div>
            </div> -->
            <div class="card">
                <p class="gps">Assets</p>
            <div class="chart-container">
                <div class="y-axis">
                  <div class="label">Trucks</div>
                  <div class="label">Belly</div>
                  <div class="label">Side</div>
                  <div class="label">End</div>
                </div>
                
                <div class="grid">
                  <div class="grid-line"></div>
                  <div class="grid-line"></div>
                  <div class="grid-line"></div>
                  <div class="grid-line"></div>
                </div>
                
                <div class="bars">
                  <div class="bar-row">
                  
                    <div class="bar highlight" style="width: 90%;"></div>
                    <div class="bar-label">75</div>
                  </div>
                  <div class="bar-row">
                    <div class="bar bar2" style="width: 30%;"></div>
                    <div class="bar-label">35</div>
                  </div>
                  <div class="bar-row">
                    <div class="bar bar3" style="width: 36%;"></div>
                    <div class="bar-label">45</div>
                  </div>
                  <div class="bar-row">
                    <div class="bar bar4" style="width: 15%;"></div>
                    <div class="bar-label">12</div>
                  </div>
                </div>
                
              
              </div>
            </div>

            <div class="card">
                <p class="gps">Jobs</p>
                <br>
                <div class="job-card">
                    <span><strong>LAX Airport</strong>, Los Angeles, CA</span>
                    <i class="fas fa-chevron-down"></i>
                </div>
                <div class="job-card">
                    <span><strong>LAX Airport</strong>, Los Angeles, CA</span>
                    <i class="fas fa-chevron-down"></i>
                </div>
                <div class="job-card">
                    <span><strong>LAX Airport</strong>, Los Angeles, CA</span>
                    <i class="fas fa-chevron-down"></i>
                </div>
                <div class="job-card">
                    <span><strong>LAX Airport</strong>, Los Angeles, CA</span>
                    <i class="fas fa-chevron-down"></i>
                </div>
            </div>
        </div>
    </div>
</div>

<!-- footer part -->


<!-- footer part -->

<?php include 'footer.php'; ?>