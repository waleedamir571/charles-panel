<?php include 'header.php'; ?>




<!--/ menu  -->
<div class="main_content_iner">
    <div class="d-flex justify-content-between align-items-center mb-4">
      <h1 class="fw-bold fs-4 mb-0">Invoices</h1>
      <div class="d-flex gap-2">
        <div class="search-container">
          <input type="text" class="form-control search-input" placeholder="Search..." style="width: 256px;">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search search-icon" viewBox="0 0 16 16">
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
          </svg>
        </div>
        <button class="filter-button">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-sliders" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M11.5 2a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM9.05 3a2.5 2.5 0 0 1 4.9 0H16v1h-2.05a2.5 2.5 0 0 1-4.9 0H0V3h9.05zM4.5 7a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM2.05 8a2.5 2.5 0 0 1 4.9 0H16v1H6.95a2.5 2.5 0 0 1-4.9 0H0V8h2.05zm9.45 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm-2.45 1a2.5 2.5 0 0 1 4.9 0H16v1h-2.05a2.5 2.5 0 0 1-4.9 0H0v-1h9.05z"/>
          </svg>
        </button>
      </div>
    </div>
    
    <div class="d-flex justify-content-between align-items-center mb-3">
      <div class="d-flex align-items-center gap-2">
        <button class="year-dropdown">
            <select id="inputState" class="form-select1">
                <option selected="">2024</option>
                
                <option>2025</option>
                <option>2023</option>
                <option>2022</option>
            </select>
        </button>
       
      </div>
      <div class="payslip-text">
        Payslips Per month
      </div>
    </div>
    
    <div class="mt-3">
      <div class="invoice-item active">
        <div class="d-flex align-items-center">
         <img src="img/home/txt.png" alt="">
          <div class="invoice-name">January Invoice</div>
        </div>
        <div class="invoice-date">
          From 01-01-2024 To 30-01-2022
        </div>
      </div>
      
      <div class="invoice-item">
        <div class="d-flex align-items-center">
         <img src="img/home/txt.png" alt="">
          <div class="invoice-name">Feburary Invoice</div>
        </div>
        <div class="invoice-date">
          From 01-01-2024 To 30-01-2022
        </div>
      </div>
      
      <div class="invoice-item">
        <div class="d-flex align-items-center">
         <img src="img/home/txt.png" alt="">
          <div class="invoice-name">March Invoice</div>
        </div>
        <div class="invoice-date">
          From 01-01-2024 To 30-01-2022
        </div>
      </div>
      
      <div class="invoice-item">
        <div class="d-flex align-items-center">
         <img src="img/home/txt.png" alt="">
          <div class="invoice-name">April Invoice</div>
        </div>
        <div class="invoice-date">
          From 01-01-2024 To 30-01-2022
        </div>
      </div>
      
      <div class="invoice-item">
        <div class="d-flex align-items-center">
         <img src="img/home/txt.png" alt="">
          <div class="invoice-name">May Invoice</div>
        </div>
        <div class="invoice-date">
          From 01-01-2024 To 30-01-2022
        </div>
      </div>
      
      <div class="invoice-item">
        <div class="d-flex align-items-center">
         <img src="img/home/txt.png" alt="">
          <div class="invoice-name">June Invoice</div>
        </div>
        <div class="invoice-date">
          From 01-01-2024 To 30-01-2022
        </div>
      </div>
    </div>
  </div>

<!-- footer part -->


<!-- footer part -->

<?php include 'footer.php'; ?>