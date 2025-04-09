<!DOCTYPE html>
<html lang="zxx">



<head>
    <!-- Required meta tags -->
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
    <title>Charles Admin</title>

    <link rel="icon" href="img/mini_logo.png" type="image/png">
    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="css/bootstrap1.min.css" />
    <!-- themefy CSS -->
    <link rel="stylesheet" href="vendors/themefy_icon/themify-icons.css" />
    <!-- select2 CSS -->
    <link rel="stylesheet" href="vendors/niceselect/css/nice-select.css" />
    <!-- owl carousel CSS -->
    <link rel="stylesheet" href="vendors/owl_carousel/css/owl.carousel.css" />
    <!-- gijgo css -->
    <link rel="stylesheet" href="vendors/gijgo/gijgo.min.css" />
    <!-- font awesome CSS -->
    <link rel="stylesheet" href="vendors/font_awesome/css/all.min.css" />
    <link rel="stylesheet" href="vendors/tagsinput/tagsinput.css" />

    <!-- date picker -->
     <link rel="stylesheet" href="vendors/datepicker/date-picker.css" />

     <link rel="stylesheet" href="vendors/vectormap-home/vectormap-2.0.2.css" />
     
     <!-- scrollabe  -->
     <link rel="stylesheet" href="vendors/scroll/scrollable.css" />
    <!-- datatable CSS -->
    <link rel="stylesheet" href="vendors/datatable/css/jquery.dataTables.min.css" />
    <link rel="stylesheet" href="vendors/datatable/css/responsive.dataTables.min.css" />
    <link rel="stylesheet" href="vendors/datatable/css/buttons.dataTables.min.css" />
    <!-- text editor css -->
    <!-- text editor css -->
    <link rel="stylesheet" href="vendors/text_editor/summernote-bs4.css" />
    <!-- morris css -->
    <link rel="stylesheet" href="vendors/morris/morris.css">
    <!-- metarial icon css -->
    <link rel="stylesheet" href="vendors/material_icon/material-icons.css" />

    <!-- menu css  -->
    <link rel="stylesheet" href="css/metisMenu.css">
    <!-- style CSS -->
    <link rel="stylesheet" href="css/style1.css" />
    <link rel="stylesheet" href="css/colors/default.css" id="colorSkinCSS">
    <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&display=swap" rel="stylesheet">

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
</head>
<body class="crm_body_bg">
    


<!-- main content part here -->
 
 <!-- sidebar  -->
<nav class="sidebar dark_sidebar">
    <div class="logo d-flex justify-content-between">
        <a class="large_logo" href="#"><img src="img/home/logo.png" alt=""></a>
        <!-- <a class="small_logo" href="#"><img src="img/home/logo.png" alt=""></a> -->
        <div class="sidebar_close_icon d-lg-none">
            <i class="ti-close"></i>

        </div>
    </div>
    <ul id="sidebar_menu">
        <li class="">
            <a class="has-arrow" href="#" aria-expanded="false">
                <div class="nav_icon_small">
                    <img src="img/menu-icon/1.svg" alt="">
                </div>
                <div class="nav_title">
                    <span>Dashboard </span>
                </div>
            </a>
            <ul>
                <li><a href="network.php"><img src="img/home/network.png" alt=""> Network</a></li>
              <li><a href="#"><img src="img/home/job.png" alt=""> Job</a></li>
              <li><a href="#"><img src="img/home/ticket.png" alt=""> Ticket</a></li>
              <li><a href="#"><img src="img/home/assets.png" alt=""> Assets</a></li>
              <li><a href="#"><img src="img/home/schedule.png" alt=""> Schedule</a></li>
              <li><a href="#"><img src="img/home/billing.png" alt=""> Billing</a></li>
              <li><a href="#"><img src="img/home/manage.png" alt=""> Manage Co.</a></li>
            </ul>
        </li>
        <div class="menu-container mt-4 mx-auto">

            <!-- Top Tabs -->
            <div class="top-tabs">
                <div class="tab-item" id="driverTab">
                <img src="img/home/drivernav.png" alt="Driver Icon">
                <div>Driver</div>
              </div>
              <div class="tab-item" id="calendarTab">
                <img src="img/home/calendernav.png" alt="Calendar Icon">
                <div>Calendar</div>
              </div>
            </div>
          
            <!-- Driver Dropdown Items -->
            <div class="dropdown-menu-items" id="driverDropdown" style="display: none;">
              <a href="driver-inspect.php" class="menu-link"><img src="img/home/inspect.png"> Inspect</a>
              <a href="#" class="menu-link"><img src="img/home/tickets.png"> Tickets</a>
              <a href="#" class="menu-link"><img src="img/home/docs.png"> Docs</a>
              <a href="driver-reminder.php" class="menu-link"><img src="img/home/alarms.png"> Alarms</a>
            </div>
          
            <!-- Calendar Dropdown Items -->
            <div class="dropdown-menu-items" id="calendarDropdown" style="display: none;">
              <a href="#" class="menu-link"><img src="img/home/schedule.png"> Schedule</a>
              <a href="#" class="menu-link"><img src="img/home/events.png"> Events</a>
              <a href="#" class="menu-link"><img src="img/home/meetings.png"> Meetings</a>
            </div>
          
          </div>
               
    </ul>
    <div class="btn-fixed">
    <button type="button" class="btn mt-4 btn-info2">Back to Site &nbsp;&nbsp;&nbsp;&nbsp; <svg xmlns="http://www.w3.org/2000/svg" width="11" height="18" viewBox="0 0 11 18" fill="none">
        <path d="M1.52295 1.68262L9.03418 9.19385L1.52295 16.7051" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg></button>
      </div>
    
</nav>
 <!--/ sidebar  -->

 <section class="main_content dashboard_part large_header_bg">
    <!-- menu  -->
    <div class="container-fluid g-0">
        <div class="row">
            <div class="col-lg-12 p-0 ">
                <div class="header_iner d-flex justify-content-between align-items-center">
                    <div class="sidebar_icon d-lg-none">
                        <i class="ti-menu"></i>
                    </div>
                    <div class="line_icon open_miniSide d-none d-lg-block">
                         <span class="dash">  <img class="" src="img/home/Vector.png" alt="">  Dashboard </span>
                    </div>
                    <div class="header_right d-flex justify-content-between align-items-center">
                        <div class="header_notification_warp d-flex align-items-center">
                            <!-- <li>
                                <a class="CHATBOX_open nav-link-notify" href="#"> <img src="img/icon/msg.svg" alt="">   </a>
                            </li> -->
                            <li>
                                <a class="bell_notification_clicker nav-link-notify" href="#"> <img src="img/icon/bell.svg" alt="">
                                    <!-- <span>2</span> -->
                                </a>
                                <!-- Menu_NOtification_Wrap  -->
                            <div class="Menu_NOtification_Wrap">
                                <div class="notification_Header">
                                    <h4>Notifications</h4>
                                </div>
                                <div class="Notification_body">
                                    <!-- single_notify  -->
                                    <div class="single_notify d-flex align-items-center">
                                        <div class="notify_thumb">
                                            <a href="#"><img src="img/staf/2.png" alt=""></a>
                                        </div>
                                        <div class="notify_content">
                                            <a href="#"><h5>Cool Marketing </h5></a>
                                            <p>Lorem ipsum dolor sit amet</p>
                                        </div>
                                    </div>
                                    <!-- single_notify  -->
                                    <div class="single_notify d-flex align-items-center">
                                        <div class="notify_thumb">
                                            <a href="#"><img src="img/staf/4.png" alt=""></a>
                                        </div>
                                        <div class="notify_content">
                                            <a href="#"><h5>Awesome packages</h5></a>
                                            <p>Lorem ipsum dolor sit amet</p>
                                        </div>
                                    </div>
                                    <!-- single_notify  -->
                                    <div class="single_notify d-flex align-items-center">
                                        <div class="notify_thumb">
                                            <a href="#"><img src="img/staf/3.png" alt=""></a>
                                        </div>
                                        <div class="notify_content">
                                            <a href="#"><h5>what a packages</h5></a>
                                            <p>Lorem ipsum dolor sit amet</p>
                                        </div>
                                    </div>
                                    <!-- single_notify  -->
                                    <div class="single_notify d-flex align-items-center">
                                        <div class="notify_thumb">
                                            <a href="#"><img src="img/staf/2.png" alt=""></a>
                                        </div>
                                        <div class="notify_content">
                                            <a href="#"><h5>Cool Marketing </h5></a>
                                            <p>Lorem ipsum dolor sit amet</p>
                                        </div>
                                    </div>
                                    <!-- single_notify  -->
                                    <div class="single_notify d-flex align-items-center">
                                        <div class="notify_thumb">
                                            <a href="#"><img src="img/staf/4.png" alt=""></a>
                                        </div>
                                        <div class="notify_content">
                                            <a href="#"><h5>Awesome packages</h5></a>
                                            <p>Lorem ipsum dolor sit amet</p>
                                        </div>
                                    </div>
                                    <!-- single_notify  -->
                                    <div class="single_notify d-flex align-items-center">
                                        <div class="notify_thumb">
                                            <a href="#"><img src="img/staf/3.png" alt=""></a>
                                        </div>
                                        <div class="notify_content">
                                            <a href="#"><h5>what a packages</h5></a>
                                            <p>Lorem ipsum dolor sit amet</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="nofity_footer">
                                    <div class="submit_button text-center pt_20">
                                        <a href="#" class="btn_1 green">See More</a>
                                    </div>
                                </div>
                            </div>
                            <!--/ Menu_NOtification_Wrap  -->
                            </li>
                            
                        </div>
                        <div class="profile_info d-flex align-items-center">
                            <div class="profile_thumb mr_20">
                                <img src="img/home/user.png" alt="#">
                            </div>
                            <div class="author_name">
                                <h4 class="f_s_15 f_w_500 mb-0">Jiue Anderson</h4>
                                <!-- <p class="f_s_12 f_w_400">Manager</p> -->
                            </div>
                            <div class="profile_info_iner">
                                <div class="profile_author_name">
                                    <p>Manager</p>
                                    <h5>Jiue Anderson</h5>
                                </div>
                                <div class="profile_info_details">
                                    <a href="#">My Profile </a>
                                    <a href="#">Settings</a>
                                    <a href="#">Log Out </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <script>
        document.addEventListener("DOMContentLoaded", function () {
          const tabs = document.querySelectorAll(".tab-item");
          const dropdowns = {
            driverTab: document.getElementById("driverDropdown"),
            calendarTab: document.getElementById("calendarDropdown")
          };
      
          tabs.forEach(tab => {
            tab.addEventListener("click", function () {
              const tabId = this.id;
              const isActive = this.classList.contains("active");
      
              // Hide all dropdowns & remove active from all tabs
              tabs.forEach(t => t.classList.remove("active"));
              Object.values(dropdowns).forEach(drop => drop.style.display = "none");
      
              // If tab was not active, activate it and show its dropdown
              if (!isActive) {
                this.classList.add("active");
                dropdowns[tabId].style.display = "block";
              }
              // else: do nothing, dropdown already hidden by reset above
            });
          });
        });
      </script>
      
      
      
      