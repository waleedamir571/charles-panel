<?php include 'header.php'; ?>

<style>
     .report-container {
      max-width: 500px;
      margin: 0 auto;
      background: white;
      box-shadow: 0 2px 10px rgba(0,0,0,0.1);
    }
    
    .report-header {
      padding: 20px;
    }

    .accordion-item {
    background-color: #fff;
    border: 0px solid rgba(0, 0, 0, .125) !important;
}

    .report-header h1 {
      font-size: 20px;
      font-weight: bold;
      margin-bottom: 24px;
    }
    
    .report-section {
      margin-bottom: 24px;
    }
    
    .report-section h2 {
      font-size: 16px;
      font-weight: bold;
      margin-bottom: 12px;
    }
    
    .info-item {
      margin-bottom: 16px;
    }
    
    .info-label2 {
    margin-bottom: 4px;
    color: #000;
    font-family: Outfit;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    padding: 10px 0px;
}
    
.info-value2 {
    color: #343a40;
    color: #969AA8;
    font-family: Outfit;
    font-size: 22px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
}
    
    .disclaimer {
      font-size: 12px;
      font-style: italic;
      color: #6c757d;
    }
    
    .accordion-item {
      margin-bottom: 4px;
    }
    
    .accordion-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 12px 16px;
      color: white;
      cursor: pointer;
    }
    
    .accordion-header h3 {
   
    margin: 0;
    color: #FFF;
    /* font-family: Outfit; */
    font-size: 30px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
}
    
    .accordion-header.ok {
    background-color: #4E5456;
}
    
    .accordion-header.attention {
      
    }
    
    .status {
      display: flex;
      align-items: center;
    }
    
    .status-text.ok {
        color: #14AE5C;
    text-align: right;
  
    font-size: 26px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    }
    
    .chevron {
      margin-right: 8px;
    }
    
    .accordion-body {
      background-color: white;
    }
    
    .accordion-body.attention {
      background-color: #FFCCCB;
    }
    
    .checkbox-header {
    display: flex;
    border-bottom: 1px solid #dee2e6;
    padding: 8px 0;
    border-radius: 5px;
    background: #4E5456;
}
    .checkbox-header-cell {
    flex: 1;
    text-align: center;
 
    padding: 4px 0;
    color: #FFF;
    
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 16px;
    letter-spacing: 0.2px;
}
    
    .checkbox-row {
      display: flex;
      align-items: center;
      padding: 12px 0;
      border-bottom: 1px solid #dee2e6;
    }
    
    .checkbox-cell {
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    
    .checkbox-cell:first-child {
      border-right: 1px solid #dee2e6;
    }
    
    .custom-checkbox {
      width: 20px;
      height: 20px;
      border: 1px solid #ced4da;
      background-color: white;
    }
    
    .row-label {
    flex: 1;
    text-align: left;
    padding-right: 16px;
    color: #343a40;
    color: #969AA8;
    /* font-family: Outfit; */
    font-size: 22px;
    font-style: normal;
    font-weight: 400;
    line-height: 16px;
    letter-spacing: 0.22px;
}

input[type="checkbox"] {
    width: 20px;
    height: 20px;
    border: 1px solid #ced4da;
    background-color: white;
}
    
    .notes-container {
      padding: 16px;
    }
    
    .textarea1 {
    
    width: 100%;
    min-height: 96px;
    padding: 12px;
    border: 1px solid #ced4da;
    border-radius: 4px;
    resize: vertical;
    color: #6c757d;
    border-radius: 10px;
    border: 1px solid #D4D7E3;
    background: #FFF;
  
    color: #969AA8;
    /* font-family: Outfit; */
    font-size: 22px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;

    }
</style>

<!--/ menu  -->

<div class="main_content_iner">
    <!-- Header Section -->
    <div class="container-fluid p-0 white_card card_height_100 mb_30">
        <div class="white_card card_height_100 mb_30">
            <div class="white_card_body">
    <div class="row">
        <div class="col-md-6">
            <div class="report-header">
              
                <h1 class="fw-bold fs-4 mb-0">Report</h1>
                
                <div class="report-section">
                  <p class="pre-trip">Driver Pre-Trip</p>
                  
                  <div class="info-item">
                    <div class="info-label2">Vehicle (Make/Model/Year)</div>
                    <div class="info-value2">2024 Peterbilt 389</div>
                  </div>
                  
                  <div class="info-item">
                    <div class="info-label2">Odometer Reading</div>
                    <div class="info-value2">1,089 mi</div>
                  </div>
                  
                  <div class="info-item">
                    <div class="info-label2">Trailer</div>
                    <div class="info-value2">2267</div>
                  </div>
                  
                  <div class="info-item">
                    <div class="info-label2">Inspection Date</div>
                    <div class="info-value2">9/8/2024</div>
                  </div>
                  
                  <div class="info-item">
                    <div class="info-label2">Time</div>
                    <div class="info-value2">11:22 PM</div>
                  </div>
                  
                  <p class="info-value2 ">
                    Lorem ipsum dolor sit amet, consectetur adipisci elit, sed do eiusmod
                  </p>
                </div>
              </div>
        </div>
        <div class="col-md-6">
            <div class="accordion">
                <div class="job-ticket2">
                <div class="accordion-item">
                  <div class="accordion-header ok">
                    <h3>Tires</h3>
                    <div class="status">
                      <span class="chevron">▾</span>
                      <span class="status-text ok">Ok</span>
                    </div>
                  </div>
                </div>
            </div>
                
                <div class="accordion-item">
                    <div class="job-ticket9">
                  <div class="accordion-header attention">
                    <h3>Leaks</h3>
                    <div class="status">
                      <span class="chevron">▾</span>
                      <span class="status-text">Need Attention</span>
                    </div>
                  </div>
                </div>
                  <div class="accordion-body attention">
                    <div class="checkbox-header">
                      <div class="checkbox-header-cell">Ok</div>
                      <div class="checkbox-header-cell">Needs Attention</div>
                      <div class="checkbox-header-cell"></div>
                    </div>
                    
                    <div class="checkbox-row">
                      <div class="checkbox-cell">
                        <input type="checkbox" aria-label="Checkbox for following text input">
                      </div>
                      <div class="checkbox-cell">
                        <input type="checkbox" aria-label="Checkbox for following text input">
                      </div>
                      <div class="row-label">Oil</div>
                    </div>
                    
                    <div class="checkbox-row">
                      <div class="checkbox-cell">
                        <input type="checkbox" aria-label="Checkbox for following text input">
                      </div>
                      <div class="checkbox-cell">
                        <input type="checkbox" aria-label="Checkbox for following text input">
                      </div>
                      <div class="row-label">Fuel tanks</div>
                    </div>
                    
                    <div class="notes-container">
                      <textarea class="textarea1" placeholder="Lorem ipsum dolor sit amet"></textarea>
                    </div>
                  </div>
                </div>
                
                <div class="job-ticket2">
                <div class="accordion-item">
                  <div class="accordion-header ok">
                    <h3>Gauges</h3>
                    <div class="status">
                      <span class="chevron">▾</span>
                      <span class="status-text ok">Ok</span>
                    </div>
                  </div>
                </div>
                </div>
              </div>

              <div class="row">
                <div class="col-md-5 offset-md-7">
                    <button type="button" class="btn mt-4 btn-info2">Submit </button>
                </div>
              </div>
        </div>

      

    </div>
</div>
</div>

   
     


        <!-- Job Cards Section -->


    </div>

</div>

    <!-- footer part -->


   
    <script>
    document.addEventListener('DOMContentLoaded', function() {
      const headers = document.querySelectorAll('.accordion-header');
      
      headers.forEach(header => {
        header.addEventListener('click', function() {
          const body = this.nextElementSibling;
          const chevron = this.querySelector('.chevron');
          
          if (body && body.classList.contains('accordion-body')) {
            if (body.style.display === 'none' || !body.style.display) {
              body.style.display = 'block';
              chevron.textContent = '▴';
            } else {
              body.style.display = 'none';
              chevron.textContent = '▾';
            }
          }
        });
      });
      
      // Open the "Leaks" section by default
      const leaksHeader = document.querySelector('.accordion-header.attention');
      if (leaksHeader) {
        const leaksBody = leaksHeader.nextElementSibling;
        const leaksChevron = leaksHeader.querySelector('.chevron');
        if (leaksBody) {
          leaksBody.style.display = 'block';
          if (leaksChevron) {
            leaksChevron.textContent = '▴';
          }
        }
      }
    });
  </script>



    <!-- footer part -->

    <?php include 'footer.php'; ?>