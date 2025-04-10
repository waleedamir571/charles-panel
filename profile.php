<?php include 'header.php'; ?>


<style>
    fa-solid, .fas {
    font-weight: 900;
    color: white;
}
</style>



<div class="main_content_iner">
    <div class="white_card card_height_100 mb_30">

        <div class="white_card_body">
            <div class="row">
                <!-- Profile Section -->
                <div class="col-md-6 mb-4">
                    <div class="profile-section p-4">
                        <div class="row mb-4">
                            <div class="col d-flex">
                                <div class="profile-image-container">
                                    <!-- Profile Image -->
                                    <img id="profileImage" src="img/home/user.png" alt="Profile Image" class="profile-image">
                                    
                                    <!-- Edit Icon -->
                                    <div class="edit-icon" onclick="triggerFileInput()">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none">
                                            <path d="M14.9306 3.47497L17.2861 5.83046M16.445 1.39988L10.0728 7.77203C9.74355 8.10082 9.519 8.51972 9.42746 8.97592L8.83887 11.9222L11.7852 11.3325C12.2414 11.2413 12.6597 11.0176 12.9891 10.6883L19.3612 4.31614C19.5527 4.12465 19.7046 3.89733 19.8082 3.64714C19.9119 3.39695 19.9652 3.12881 19.9652 2.85801C19.9652 2.58721 19.9119 2.31906 19.8082 2.06887C19.7046 1.81869 19.5527 1.59136 19.3612 1.39988C19.1697 1.20839 18.9424 1.0565 18.6922 0.952867C18.442 0.849236 18.1739 0.795898 17.9031 0.795898C17.6323 0.795898 17.3641 0.849236 17.114 0.952867C16.8638 1.0565 16.6364 1.20839 16.445 1.39988Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                            <path d="M17.7406 14.149V17.4869C17.7406 18.0771 17.5061 18.6431 17.0888 19.0605C16.6715 19.4778 16.1054 19.7122 15.5153 19.7122H3.27608C2.6859 19.7122 2.11988 19.4778 1.70256 19.0605C1.28523 18.6431 1.05078 18.0771 1.05078 17.4869V5.24776C1.05078 4.65758 1.28523 4.09156 1.70256 3.67424C2.11988 3.25691 2.6859 3.02246 3.27608 3.02246H6.61404" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>
                                    </div>
                                    
                                    <!-- Hidden file input for image upload -->
                                    <input type="file" class="file-input" id="imageInput" accept="image/*" onchange="changeImage(event)">
                                </div>
                        
                                <!-- Option buttons -->
                                <div class="top-options">
                                    <button class="option-button blue">Manage Account</button>
                                    <button class="option-button dark-blue">My Document</button>
                                </div>
                            </div>
                        </div>

                        <div class="detail-row">
                        <div class="detail-content">
                            <div class="detail-label">Full Name</div>
                            <input type="text" id="userName" class="custom-input" value="James Elijah">
                        </div>
                        
                        <div class="action-buttons">
                            <button class="icon-button"><i class="fas fa-eye fa-sm"></i></button>
                            <button class="icon-button"><i class="fas fa-pencil-alt fa-sm"></i></button>
                        </div>
                    </div>

                        <div class="detail-row">
                            <div class="detail-content">
                                <div class="detail-label">Email Address</div>
                                <input type="email" id="userName" class="custom-input" value="Info@Jameselijah.com">
                            </div>
                            <div class="action-buttons">
                                <button class="icon-button blue"><i class="fas fa-eye fa-sm"></i></button>
                                <button class="icon-button"><i class="fas fa-pencil-alt fa-sm"></i></button>
                            </div>
                        </div>

                        <div class="detail-row">
                            <div class="detail-content">
                                <div class="detail-label">Phone Number</div>
                                <input type="number" id="userName" class="custom-input" value="479-785-6200">
                            </div>
                            <div class="action-buttons">
                                <button class="icon-button"><i class="fas fa-eye fa-sm"></i></button>
                                <button class="icon-button"><i class="fas fa-pencil-alt fa-sm"></i></button>
                            </div>
                        </div>

                        <div class="detail-row">
                            <div class="detail-content">
                                <div class="detail-label">Location</div>
                                <input type="text" id="userName" class="custom-input" value="3801 Old Greenwood Road Fort, AR..">
                            </div>
                            <div class="action-buttons">
                                <button class="icon-button"><i class="fas fa-eye fa-sm"></i></button>
                                <button class="icon-button"><i class="fas fa-pencil-alt fa-sm"></i></button>
                            </div>
                        </div>

                        <div class="detail-row">
                            <div class="detail-content">
                                <div class="detail-label">Designation</div>
                                <input type="text" id="userName" class="custom-input" value="Driver">
                            </div>
                            <div class="action-buttons">
                                <button class="icon-button"><i class="fas fa-eye fa-sm"></i></button>
                                <button class="icon-button"><i class="fas fa-pencil-alt fa-sm"></i></button>
                            </div>
                        </div>

                        <div class="detail-row">
                            <div class="detail-content">
                                <div class="detail-label">Bio</div>
                               
                                    <input type="text" id="userName" class="custom-input" value="Lorem ipsum dolor sit amet, from us in consectetur ">
                            </div>
                            <div class="action-buttons">
                                <button class="icon-button"><i class="fas fa-eye fa-sm"></i></button>
                                <button class="icon-button"><i class="fas fa-pencil-alt fa-sm"></i></button>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Subscription Section -->
                <div class="col-md-6">
                    <div class="subscription-section p-4">
                       
                            <!-- <h5 class="mb-0 cost">Package History</h5> -->
                            <div class="row">
                                <div class="col-md-4 offset-md-8">
                                    <div class="action-buttons-right">
                                        <button class="btn btn-sm btn-dark2">Update</button>
                                        <button class="btn btn-sm btn-primary1">Save</button>
                                    </div>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-md-12">
                                     <h5 class="mb-0 pkg">Package History</h5> 
                                     <div class="ptb-15">
                                        <div class="line-container"></div>
                                    </div>
                                </div>
                            </div>
                           
                       

                        <!-- Subscription Card 1 -->
                        <div class="subscription-card p-3 mb-3">
                            <div class="text-center mb-2">
                                <h6 class="mb-1 monthly">Pro Monthly: Canceled</h6>
                                <div class="ptb-15">
                                <p class="text-muted small mb-2">Canceled Aug 23rd, 2024</p>
                            </div>

                            </div>
                            <div class="d-flex justify-content-center gap-2">
                                <button class="btn btn-sm btn-outline1">Reactive</button>
                                <button class="btn btn-sm btn-outline1">Reactivate Annually</button>
                            </div>
                        </div>

                        <!-- Subscription Card 2 -->
                        <div class="subscription-card p-3 mb-3">
                            <div class="text-center mb-2">
                                <h6 class="mb-1">Pro Monthly: Canceled</h6>
                                <div class="ptb-15">
                                    <p class="text-muted small mb-2">Canceled Aug 23rd, 2024</p>
                                </div>
                            </div>
                            <div class="d-flex justify-content-center gap-2">
                                <button class="btn btn-sm btn-outline1">Reactive</button>
                                <button class="btn btn-sm btn-outline1">Reactivate Annually</button>
                            </div>
                        </div>

                        <!-- Subscription Card 3 -->
                        <div class="subscription-card p-3">
                            <div class="text-center mb-2">
                                <h6 class="mb-1">Pro Monthly: Canceled</h6>
                                <div class="ptb-15">
                                    <p class="text-muted small mb-2">Canceled Aug 23rd, 2024</p>
                                </div>
                            </div>
                            <div class="d-flex justify-content-center gap-2">
                                <button class="btn btn-sm btn-outline1">Reactive</button>
                                <button class="btn btn-sm btn-outline1">Reactivate Annually</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<script>
    // Function to trigger the hidden file input when the edit icon is clicked
    function triggerFileInput() {
        document.getElementById("imageInput").click();
    }

    // Function to change the profile image when a new file is selected
    function changeImage(event) {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
                document.getElementById("profileImage").src = e.target.result;
            }
            reader.readAsDataURL(file);
        }
    }
</script>


<?php include 'footer.php'; ?>