import React from "react";

const Sidebar = () => {
  return (
    <>
      <nav className="sidebar dark_sidebar">
        <div className="logo d-flex justify-content-between">
          <a className="large_logo" href="#">
            <img src="img/home/logo.png" alt="" />
          </a>
          {/* <!-- <a className="small_logo" href="#"><img src="img/home/logo.png" alt="" /></a> --> */}
          <div className="sidebar_close_icon d-lg-none">
            <i className="ti-close"></i>
          </div>
        </div>
        <ul id="sidebar_menu">
          <li className="">
            <a className="has-arrow" href="#" aria-expanded="false">
              <div className="nav_icon_small">
                <img src="img/menu-icon/1.svg" alt="" />
              </div>
              <div className="nav_title">
                <span>Dashboard </span>
              </div>
            </a>
            <ul>
              <li>
                <a href="#">
                  <img src="img/home/network.png" alt="" /> Network
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="img/home/job.png" alt="" /> Job
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="img/home/ticket.png" alt="" /> Ticket
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="img/home/assets.png" alt="" /> Assets
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="img/home/schedule.png" alt="" /> Schedule
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="img/home/billing.png" alt="" /> Billing
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="img/home/manage.png" alt="" /> Manage Co.
                </a>
              </li>
            </ul>
          </li>
          {/*  <!-- <li className="">  
          <li>
            <a href="crypto_wallet.html" aria-expanded="false">
              <div className="nav_icon_small">
                <img src="img/menu-icon/2.svg" alt="" />
              </div>
              <div className="nav_title">
                <span>Crypto Wallet</span>
              </div>
            </a>
          </li>
          <li className="">
            <a href="buy_sell.html" aria-expanded="false">
              <div className="nav_icon_small">
                <img src="img/menu-icon/3.svg" alt="" />
              </div>
              <div className="nav_title">
                <span>Buy & Sell</span>
              </div>
            </a>
          </li>
          <li className="">
            <a href="Trader_Profile.html" aria-expanded="false">
              <div className="nav_icon_small">
                <img src="img/menu-icon/4.svg" alt="" />
              </div>
              <div className="nav_title">
                <span>Trader Profile</span>
              </div>
            </a>
          </li>
          <li className="">
            <a href="crypto_stats.html" aria-expanded="false">
              <div className="nav_icon_small">
                <img src="img/menu-icon/5.svg" alt="" />
              </div>
              <div className="nav_title">
                <span>Crypto Stats</span>
              </div>
            </a>
          </li>
          <li className="">
            <a className="has-arrow" href="#" aria-expanded="false">
              <div className="nav_icon_small">
                <img src="img/menu-icon/6.svg" alt="" />
              </div>
              <div className="nav_title">
                <span>Transactions</span>
              </div>
            </a>
            <ul>
              <li>
                <a href="Request.html">Request</a>
              </li>
              <li>
                <a href="tan_cancel.html">Cancel</a>
              </li>
              <li>
                <a href="Refound.html">Refound</a>
              </li>
              <li>
                <a href="Payment_details.html">Payment details</a>
              </li>
            </ul>
          </li>
          <li className="">
            <a className="has-arrow" href="#" aria-expanded="false">
              <div className="nav_icon_small">
                <img src="img/menu-icon/7.svg" alt="" />
              </div>
              <div className="nav_title">
                <span>Tickers</span>
              </div>
            </a>
            <ul>
              <li>
                <a href="ticker_dark.html">Ticker Dark</a>
              </li>
              <li>
                <a href="Ticker_Light.html">Ticker Light</a>
              </li>
            </ul>
          </li>
          <li className="">
            <a className="has-arrow" href="#" aria-expanded="false">
              <div className="nav_icon_small">
                <img src="img/menu-icon/8.svg" alt="" />
              </div>
              <div className="nav_title">
                <span>Apps </span>
              </div>
            </a>
            <ul>
              <li>
                <a href="editor.html">Editor</a>
              </li>
              <li>
                <a href="invoice.html">Invoice</a>
              </li>
              <li>
                <a href="Builder.html">Builder</a>
              </li>
              <li>
                <a href="calender.html">Calander</a>
              </li>
              <li>
                <a href="Board.html">Board</a>
              </li>
              <li>
                <a href="basic_card.html">Basic Card</a>
              </li>
              <li>
                <a href="theme_card.html">Theme Card</a>
              </li>
              <li>
                <a href="dargable_card.html">Draggable Card</a>
              </li>
            </ul>
          </li>
          <li className="">
            <a className="has-arrow" href="#" aria-expanded="false">
              <div className="nav_icon_small">
                <img src="img/menu-icon/Pages.svg" alt="" />
              </div>
              <div className="nav_title">
                <span>Pages</span>
              </div>
            </a>
            <ul>
              <li>
                <a href="role_permissions.html">Role & Permissions</a>
              </li>
              <li>
                <a href="faq.html">FAQ</a>
              </li>
              <li>
                <a href="login.html">Login</a>
              </li>
              <li>
                <a href="resister.html">Register</a>
              </li>
              <li>
                <a href="error_400.html">Error 404</a>
              </li>
              <li>
                <a href="error_500.html">Error 500</a>
              </li>
              <li>
                <a href="forgot_pass.html">Forgot Password</a>
              </li>
              <li>
                <a href="gallery.html">Gallery</a>
              </li>
              <li>
                <a href="module_setting.html">Module Setting</a>
              </li>
              <li>
                <a href="Products.html">Products</a>
              </li>
              <li>
                <a href="Product_Details.html">Product Details</a>
              </li>
              <li>
                <a href="Cart.html">Cart</a>
              </li>
              <li>
                <a href="Checkout.html">Checkout</a>
              </li>
            </ul>
          </li>
          <li className="">
            <a className="has-arrow" href="#" aria-expanded="false">
              <div className="nav_icon_small">
                <img src="img/menu-icon/General.svg" alt="" />
              </div>
              <div className="nav_title">
                <span>General</span>
              </div>
            </a>
            <ul>
              <li>
                <a href="Minimized_Aside.html">Minimized Aside</a>
              </li>
              <li>
                <a href="empty_page.html">Empty page</a>
              </li>
              <li>
                <a href="fixed_footer.html">Fixed Footer</a>
              </li>
            </ul>
          </li>{" "}
          --> */}
        </ul>
      </nav>
    </>
  );
};

export default Sidebar;
