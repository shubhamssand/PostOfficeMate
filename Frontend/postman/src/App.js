import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        {/* Required meta tags */}

        <title>USAA</title>
        {/* ============================================================== */}
        {/* main wrapper */}
        {/* ============================================================== */}
        <div className="dashboard-main-wrapper">
          {/* ============================================================== */}
          {/* navbar */}
          {/* ============================================================== */}
          <div className="dashboard-header">
            <nav className="navbar navbar-expand-lg bg-white fixed-top">
              <a className="navbar-brand" href="index.html">Concept</a>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
              </button>
              <div className="collapse navbar-collapse " id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto navbar-right-top">
                  <li className="nav-item">
                    <div id="custom-search" className="top-search-bar">
                      <input className="form-control" type="text" placeholder="Search.." />
                    </div>
                  </li>
                  <li className="nav-item dropdown notification">
                    <a className="nav-link nav-icons" href="#" id="navbarDropdownMenuLink1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="fas fa-fw fa-bell" /> <span className="indicator" /></a>
                    <ul className="dropdown-menu dropdown-menu-right notification-dropdown">
                      <li>
                        <div className="notification-title"> Notification</div>
                        <div className="notification-list">
                          <div className="list-group">
                            <a href="#" className="list-group-item list-group-item-action active">
                              <div className="notification-info">
                                <div className="notification-list-user-img"><img src="assets/images/avatar-2.jpg" alt className="user-avatar-md rounded-circle" /></div>
                                <div className="notification-list-user-block"><span className="notification-list-user-name">Jeremy Rakestraw</span>accepted your invitation to join the team.
                                  <div className="notification-date">2 min ago</div>
                                </div>
                              </div>
                            </a>
                            <a href="#" className="list-group-item list-group-item-action">
                              <div className="notification-info">
                                <div className="notification-list-user-img"><img src="assets/images/avatar-3.jpg" alt className="user-avatar-md rounded-circle" /></div>
                                <div className="notification-list-user-block"><span className="notification-list-user-name">John Abraham </span>is now following you
                                  <div className="notification-date">2 days ago</div>
                                </div>
                              </div>
                            </a>
                            <a href="#" className="list-group-item list-group-item-action">
                              <div className="notification-info">
                                <div className="notification-list-user-img"><img src="assets/images/avatar-4.jpg" alt className="user-avatar-md rounded-circle" /></div>
                                <div className="notification-list-user-block"><span className="notification-list-user-name">Monaan Pechi</span> is watching your main repository
                                  <div className="notification-date">2 min ago</div>
                                </div>
                              </div>
                            </a>
                            <a href="#" className="list-group-item list-group-item-action">
                              <div className="notification-info">
                                <div className="notification-list-user-img"><img src="assets/images/avatar-5.jpg" alt className="user-avatar-md rounded-circle" /></div>
                                <div className="notification-list-user-block"><span className="notification-list-user-name">Jessica Caruso</span>accepted your invitation to join the team.
                                  <div className="notification-date">2 min ago</div>
                                </div>
                              </div>
                            </a>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="list-footer"> <a href="#">View all notifications</a></div>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item dropdown connection">
                    <a className="nav-link" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <i className="fas fa-fw fa-th" /> </a>
                    <ul className="dropdown-menu dropdown-menu-right connection-dropdown">
                      <li className="connection-list">
                        <div className="row">
                          <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 ">
                            <a href="#" className="connection-item"><img src="assets/images/github.png" alt /> <span>Github</span></a>
                          </div>
                          <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 ">
                            <a href="#" className="connection-item"><img src="assets/images/dribbble.png" alt /> <span>Dribbble</span></a>
                          </div>
                          <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 ">
                            <a href="#" className="connection-item"><img src="assets/images/dropbox.png" alt /> <span>Dropbox</span></a>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 ">
                            <a href="#" className="connection-item"><img src="assets/images/bitbucket.png" alt /> <span>Bitbucket</span></a>
                          </div>
                          <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 ">
                            <a href="#" className="connection-item"><img src="assets/images/mail_chimp.png" alt /><span>Mail chimp</span></a>
                          </div>
                          <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 ">
                            <a href="#" className="connection-item"><img src="assets/images/slack.png" alt /> <span>Slack</span></a>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="conntection-footer"><a href="#">More</a></div>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item dropdown nav-user">
                    <a className="nav-link nav-user-img" href="#" id="navbarDropdownMenuLink2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><img src="assets/images/avatar-1.jpg" alt className="user-avatar-md rounded-circle" /></a>
                    <div className="dropdown-menu dropdown-menu-right nav-user-dropdown" aria-labelledby="navbarDropdownMenuLink2">
                      <div className="nav-user-info">
                        <h5 className="mb-0 text-white nav-user-name">John Abraham </h5>
                        <span className="status" /><span className="ml-2">Available</span>
                      </div>
                      <a className="dropdown-item" href="#"><i className="fas fa-user mr-2" />Account</a>
                      <a className="dropdown-item" href="#"><i className="fas fa-cog mr-2" />Setting</a>
                      <a className="dropdown-item" href="#"><i className="fas fa-power-off mr-2" />Logout</a>
                    </div>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
          {/* ============================================================== */}
          {/* end navbar */}
          {/* ============================================================== */}
          {/* ============================================================== */}
          {/* left sidebar */}
          {/* ============================================================== */}
          <div className="nav-left-sidebar sidebar-dark">
            <div className="menu-list">
              <nav className="navbar navbar-expand-lg navbar-light">
                <a className="d-xl-none d-lg-none" href="#">Dashboard</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                  <ul className="navbar-nav flex-column">
                    <li className="nav-divider">
                      Menu
                    </li>
                    <li className="nav-item ">
                      <a className="nav-link" href="#" data-toggle="collapse" aria-expanded="false" data-target="#submenu-1" aria-controls="submenu-1"><i className="fa fa-fw fa-user-circle" />Dashboard <span className="badge badge-success">6</span></a>
                    </li>
                    <li className="nav-item ">
                      <a className="nav-link" href="#" data-toggle="collapse" aria-expanded="false" data-target="#submenu-1" aria-controls="submenu-1"><i className="fa fa-fw fa-user-circle" />Service Calls <span className="badge badge-success">6</span></a>
                    </li>
                    <li className="nav-item ">
                      <a className="nav-link" href="#" data-toggle="collapse" aria-expanded="false" data-target="#submenu-1" aria-controls="submenu-1"><i className="fa fa-fw fa-user-circle" />Activites <span className="badge badge-success">6</span></a>
                    </li>
                    <li className="nav-item ">
                      <a className="nav-link" href="#" data-toggle="collapse" aria-expanded="false" data-target="#submenu-1" aria-controls="submenu-1"><i className="fa fa-fw fa-user-circle" />Business Partners <span className="badge badge-success">6</span></a>
                    </li>
                    <li className="nav-item ">
                      <a className="nav-link" href="#" data-toggle="collapse" aria-expanded="false" data-target="#submenu-1" aria-controls="submenu-1"><i className="fa fa-fw fa-user-circle" />Contacts <span className="badge badge-success">6</span></a>
                    </li>
                    <li className="nav-item ">
                      <a className="nav-link" href="#" data-toggle="collapse" aria-expanded="false" data-target="#submenu-1" aria-controls="submenu-1"><i className="fa fa-fw fa-user-circle" />Employees <span className="badge badge-success">6</span></a>
                    </li>
                    <li className="nav-item ">
                      <a className="nav-link" href="#" data-toggle="collapse" aria-expanded="false" data-target="#submenu-1" aria-controls="submenu-1"><i className="fa fa-fw fa-user-circle" />Reports <span className="badge badge-success">6</span></a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#" data-toggle="collapse" aria-expanded="false" data-target="#submenu-2" aria-controls="submenu-2"><i className="fa fa-fw fa-rocket" />UI Elements</a>
                      <div id="submenu-2" className="collapse submenu" style={{}}>
                        <ul className="nav flex-column">
                          <li className="nav-item">
                            <a className="nav-link" href="pages/cards.html">Cards <span className="badge badge-secondary">New</span></a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="pages/general.html">General</a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="pages/carousel.html">Carousel</a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="pages/listgroup.html">List Group</a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="pages/typography.html">Typography</a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="pages/accordions.html">Accordions</a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="pages/tabs.html">Tabs</a>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#" data-toggle="collapse" aria-expanded="false" data-target="#submenu-3" aria-controls="submenu-3"><i className="fas fa-fw fa-chart-pie" />Chart</a>
                      <div id="submenu-3" className="collapse submenu" style={{}}>
                        <ul className="nav flex-column">
                          <li className="nav-item">
                            <a className="nav-link" href="pages/chart-c3.html">C3 Charts</a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="pages/chart-chartist.html">Chartist Charts</a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="pages/chart-charts.html">Chart</a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="pages/chart-morris.html">Morris</a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="pages/chart-sparkline.html">Sparkline</a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="pages/chart-gauge.html">Guage</a>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li className="nav-item ">
                      <a className="nav-link" href="#" data-toggle="collapse" aria-expanded="false" data-target="#submenu-4" aria-controls="submenu-4"><i className="fab fa-fw fa-wpforms" />Forms</a>
                      <div id="submenu-4" className="collapse submenu" style={{}}>
                        <ul className="nav flex-column">
                          <li className="nav-item">
                            <a className="nav-link" href="pages/form-elements.html">Form Elements</a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="pages/form-validation.html">Parsely Validations</a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="pages/multiselect.html">Multiselect</a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="pages/datepicker.html">Date Picker</a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="pages/bootstrap-select.html">Bootstrap Select</a>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#" data-toggle="collapse" aria-expanded="false" data-target="#submenu-5" aria-controls="submenu-5"><i className="fas fa-fw fa-table" />Tables</a>
                      <div id="submenu-5" className="collapse submenu" style={{}}>
                        <ul className="nav flex-column">
                          <li className="nav-item">
                            <a className="nav-link" href="pages/general-table.html">General Tables</a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="pages/data-tables.html">Data Tables</a>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li className="nav-divider">
                      Features
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#" data-toggle="collapse" aria-expanded="false" data-target="#submenu-6" aria-controls="submenu-6"><i className="fas fa-fw fa-file" /> Pages </a>
                      <div id="submenu-6" className="collapse submenu" style={{}}>
                        <ul className="nav flex-column">
                          <li className="nav-item">
                            <a className="nav-link" href="pages/blank-page.html">Blank Page</a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="pages/blank-page-header.html">Blank Page Header</a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="pages/login.html">Login</a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="pages/404-page.html">404 page</a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="pages/sign-up.html">Sign up Page</a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="pages/forgot-password.html">Forgot Password</a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="pages/pricing.html">Pricing Tables</a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="pages/timeline.html">Timeline</a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="pages/calendar.html">Calendar</a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="pages/sortable-nestable-lists.html">Sortable/Nestable List</a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="pages/widgets.html">Widgets</a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="pages/media-object.html">Media Objects</a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="pages/cropper-image.html">Cropper</a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="pages/color-picker.html">Color Picker</a>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#" data-toggle="collapse" aria-expanded="false" data-target="#submenu-7" aria-controls="submenu-7"><i className="fas fa-fw fa-inbox" />Apps <span className="badge badge-secondary">New</span></a>
                      <div id="submenu-7" className="collapse submenu" style={{}}>
                        <ul className="nav flex-column">
                          <li className="nav-item">
                            <a className="nav-link" href="pages/inbox.html">Inbox</a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="pages/email-details.html">Email Detail</a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="pages/email-compose.html">Email Compose</a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="pages/message-chat.html">Message Chat</a>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#" data-toggle="collapse" aria-expanded="false" data-target="#submenu-8" aria-controls="submenu-8"><i className="fas fa-fw fa-columns" />Icons</a>
                      <div id="submenu-8" className="collapse submenu" style={{}}>
                        <ul className="nav flex-column">
                          <li className="nav-item">
                            <a className="nav-link" href="pages/icon-fontawesome.html">FontAwesome Icons</a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="pages/icon-material.html">Material Icons</a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="pages/icon-simple-lineicon.html">Simpleline Icon</a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="pages/icon-themify.html">Themify Icon</a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="pages/icon-flag.html">Flag Icons</a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="pages/icon-weather.html">Weather Icon</a>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#" data-toggle="collapse" aria-expanded="false" data-target="#submenu-9" aria-controls="submenu-9"><i className="fas fa-fw fa-map-marker-alt" />Maps</a>
                      <div id="submenu-9" className="collapse submenu" style={{}}>
                        <ul className="nav flex-column">
                          <li className="nav-item">
                            <a className="nav-link" href="pages/map-google.html">Google Maps</a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="pages/map-vector.html">Vector Maps</a>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#" data-toggle="collapse" aria-expanded="false" data-target="#submenu-10" aria-controls="submenu-10"><i className="fas fa-f fa-folder" />Menu Level</a>
                      <div id="submenu-10" className="collapse submenu" style={{}}>
                        <ul className="nav flex-column">
                          <li className="nav-item">
                            <a className="nav-link" href="#">Level 1</a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="#" data-toggle="collapse" aria-expanded="false" data-target="#submenu-11" aria-controls="submenu-11">Level 2</a>
                            <div id="submenu-11" className="collapse submenu" style={{}}>
                              <ul className="nav flex-column">
                                <li className="nav-item">
                                  <a className="nav-link" href="#">Level 1</a>
                                </li>
                                <li className="nav-item">
                                  <a className="nav-link" href="#">Level 2</a>
                                </li>
                              </ul>
                            </div>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="#">Level 3</a>
                          </li>
                        </ul>
                      </div>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
          {/* ============================================================== */}
          {/* end left sidebar */}
          {/* ============================================================== */}
          {/* ============================================================== */}
          {/* wrapper  */}
          {/* ============================================================== */}
          <div className="dashboard-wrapper">
            <div className="dashboard-ecommerce">
              <div className="container-fluid dashboard-content ">
                {/* ============================================================== */}
                {/* pageheader  */}
                {/* ============================================================== */}
                <div className="row">
                  <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                    <div className="page-header">
                      <h2 className="pageheader-title">Progress Dashboard </h2>
                      <p className="pageheader-text" />
                      <div className="page-breadcrumb">
                        <nav aria-label="breadcrumb">
                          <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a href="#" className="breadcrumb-link">Dashboard</a></li>
                          </ol>
                        </nav>
                      </div>
                    </div>
                  </div>
                </div>
                {/* ============================================================== */}
                {/* end pageheader  */}
                {/* ============================================================== */}
                <div className="ecommerce-widget">
                  <div className="row">
                    <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12">
                      <div className="card">
                        <div className="card-body">
                          <h5 className="text-muted">Total Revenue</h5>
                          <div className="metric-value d-inline-block">
                            <h1 className="mb-1">$12099</h1>
                          </div>
                          <div className="metric-label d-inline-block float-right text-success font-weight-bold">
                            <span><i className="fa fa-fw fa-arrow-up" /></span><span>5.86%</span>
                          </div>
                        </div>
                        <div id="sparkline-revenue" />
                      </div>
                    </div>
                    <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12">
                      <div className="card">
                        <div className="card-body">
                          <h5 className="text-muted">Affiliate Revenue</h5>
                          <div className="metric-value d-inline-block">
                            <h1 className="mb-1">$12099</h1>
                          </div>
                          <div className="metric-label d-inline-block float-right text-success font-weight-bold">
                            <span><i className="fa fa-fw fa-arrow-up" /></span><span>5.86%</span>
                          </div>
                        </div>
                        <div id="sparkline-revenue2" />
                      </div>
                    </div>
                    <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12">
                      <div className="card">
                        <div className="card-body">
                          <h5 className="text-muted">Refunds</h5>
                          <div className="metric-value d-inline-block">
                            <h1 className="mb-1">0.00</h1>
                          </div>
                          <div className="metric-label d-inline-block float-right text-primary font-weight-bold">
                            <span>N/A</span>
                          </div>
                        </div>
                        <div id="sparkline-revenue3" />
                      </div>
                    </div>
                    <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12">
                      <div className="card">
                        <div className="card-body">
                          <h5 className="text-muted">Avg. Revenue Per User</h5>
                          <div className="metric-value d-inline-block">
                            <h1 className="mb-1">$28000</h1>
                          </div>
                          <div className="metric-label d-inline-block float-right text-secondary font-weight-bold">
                            <span>-2.00%</span>
                          </div>
                        </div>
                        <div id="sparkline-revenue4" />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    {/* ============================================================== */}
                    {/* ============================================================== */}
                    {/* recent orders  */}
                    {/* ============================================================== */}
                    <div className="col-xl-9 col-lg-12 col-md-6 col-sm-12 col-12">
                      <div className="card">
                        <h5 className="card-header">Recent Orders</h5>
                        <div className="card-body p-0">
                          <div className="table-responsive">
                            <table className="table">
                              <thead className="bg-light">
                                <tr className="border-0">
                                  <th className="border-0">#</th>
                                  <th className="border-0">Image</th>
                                  <th className="border-0">Product Name</th>
                                  <th className="border-0">Product Id</th>
                                  <th className="border-0">Quantity</th>
                                  <th className="border-0">Price</th>
                                  <th className="border-0">Order Time</th>
                                  <th className="border-0">Customer</th>
                                  <th className="border-0">Status</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>1</td>
                                  <td>
                                    <div className="m-r-10"><img src="assets/images/product-pic.jpg" alt="user" className="rounded" width={45} /></div>
                                  </td>
                                  <td>Product #1 </td>
                                  <td>id000001 </td>
                                  <td>20</td>
                                  <td>$80.00</td>
                                  <td>27-08-2018 01:22:12</td>
                                  <td>Patricia J. King </td>
                                  <td><span className="badge-dot badge-brand mr-1" />InTransit </td>
                                </tr>
                                <tr>
                                  <td>2</td>
                                  <td>
                                    <div className="m-r-10"><img src="assets/images/product-pic-2.jpg" alt="user" className="rounded" width={45} /></div>
                                  </td>
                                  <td>Product #2 </td>
                                  <td>id000002 </td>
                                  <td>12</td>
                                  <td>$180.00</td>
                                  <td>25-08-2018 21:12:56</td>
                                  <td>Rachel J. Wicker </td>
                                  <td><span className="badge-dot badge-success mr-1" />Delivered </td>
                                </tr>
                                <tr>
                                  <td>3</td>
                                  <td>
                                    <div className="m-r-10"><img src="assets/images/product-pic-3.jpg" alt="user" className="rounded" width={45} /></div>
                                  </td>
                                  <td>Product #3 </td>
                                  <td>id000003 </td>
                                  <td>23</td>
                                  <td>$820.00</td>
                                  <td>24-08-2018 14:12:77</td>
                                  <td>Michael K. Ledford </td>
                                  <td><span className="badge-dot badge-success mr-1" />Delivered </td>
                                </tr>
                                <tr>
                                  <td>4</td>
                                  <td>
                                    <div className="m-r-10"><img src="assets/images/product-pic-4.jpg" alt="user" className="rounded" width={45} /></div>
                                  </td>
                                  <td>Product #4 </td>
                                  <td>id000004 </td>
                                  <td>34</td>
                                  <td>$340.00</td>
                                  <td>23-08-2018 09:12:35</td>
                                  <td>Michael K. Ledford </td>
                                  <td><span className="badge-dot badge-success mr-1" />Delivered </td>
                                </tr>
                                <tr>
                                  <td colSpan={9}><a href="#" className="btn btn-outline-light float-right">View Details</a></td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* ============================================================== */}
                    {/* end recent orders  */}
                    {/* ============================================================== */}
                    {/* ============================================================== */}
                    {/* customer acquistion  */}
                    {/* ============================================================== */}
                    <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12">
                      <div className="card">
                        <h5 className="card-header">Customer Acquisition</h5>
                        <div className="card-body">
                          <div className="ct-chart ct-golden-section" style={{height: '354px'}} />
                          <div className="text-center">
                            <span className="legend-item mr-2">
                              <span className="fa-xs text-primary mr-1 legend-tile"><i className="fa fa-fw fa-square-full" /></span>
                              <span className="legend-text">Returning</span>
                            </span>
                            <span className="legend-item mr-2">
                              <span className="fa-xs text-secondary mr-1 legend-tile"><i className="fa fa-fw fa-square-full" /></span>
                              <span className="legend-text">First Time</span>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* ============================================================== */}
                    {/* end customer acquistion  */}
                    {/* ============================================================== */}
                  </div>
                  <div className="row">
                    {/* ============================================================== */}
                    {/* product category  */}
                    {/* ============================================================== */}
                    <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12">
                      <div className="card">
                        <h5 className="card-header"> Product Category</h5>
                        <div className="card-body">
                          <div className="ct-chart-category ct-golden-section" style={{height: '315px'}} />
                          <div className="text-center m-t-40">
                            <span className="legend-item mr-3">
                              <span className="fa-xs text-primary mr-1 legend-tile"><i className="fa fa-fw fa-square-full " /></span><span className="legend-text">Man</span>
                            </span>
                            <span className="legend-item mr-3">
                              <span className="fa-xs text-secondary mr-1 legend-tile"><i className="fa fa-fw fa-square-full" /></span>
                              <span className="legend-text">Woman</span>
                            </span>
                            <span className="legend-item mr-3">
                              <span className="fa-xs text-info mr-1 legend-tile"><i className="fa fa-fw fa-square-full" /></span>
                              <span className="legend-text">Accessories</span>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* ============================================================== */}
                    {/* end product category  */}
                    {/* product sales  */}
                    {/* ============================================================== */}
                    <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12 col-12">
                      <div className="card">
                        <div className="card-header">
                          {/* <div class="float-right">
                                                <select class="custom-select">
                                                    <option selected>Today</option>
                                                    <option value="1">Weekly</option>
                                                    <option value="2">Monthly</option>
                                                    <option value="3">Yearly</option>
                                                </select>
                                            </div> */}
                          <h5 className="mb-0"> Product Sales</h5>
                        </div>
                        <div className="card-body">
                          <div className="ct-chart-product ct-golden-section" />
                        </div>
                      </div>
                    </div>
                    {/* ============================================================== */}
                    {/* end product sales  */}
                    {/* ============================================================== */}
                    <div className="col-xl-3 col-lg-12 col-md-6 col-sm-12 col-12">
                      {/* ============================================================== */}
                      {/* top perfomimg  */}
                      {/* ============================================================== */}
                      <div className="card">
                        <h5 className="card-header">Top Performing Campaigns</h5>
                        <div className="card-body p-0">
                          <div className="table-responsive">
                            <table className="table no-wrap p-table">
                              <thead className="bg-light">
                                <tr className="border-0">
                                  <th className="border-0">Campaign</th>
                                  <th className="border-0">Visits</th>
                                  <th className="border-0">Revenue</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>Campaign#1</td>
                                  <td>98,789 </td>
                                  <td>$4563</td>
                                </tr>
                                <tr>
                                  <td>Campaign#2</td>
                                  <td>2,789 </td>
                                  <td>$325</td>
                                </tr>
                                <tr>
                                  <td>Campaign#3</td>
                                  <td>1,459 </td>
                                  <td>$225</td>
                                </tr>
                                <tr>
                                  <td>Campaign#4</td>
                                  <td>5,035 </td>
                                  <td>$856</td>
                                </tr>
                                <tr>
                                  <td>Campaign#5</td>
                                  <td>10,000 </td>
                                  <td>$1000</td>
                                </tr>
                                <tr>
                                  <td>Campaign#5</td>
                                  <td>10,000 </td>
                                  <td>$1000</td>
                                </tr>
                                <tr>
                                  <td colSpan={3}>
                                    <a href="#" className="btn btn-outline-light float-right">Details</a>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                      {/* ============================================================== */}
                      {/* end top perfomimg  */}
                      {/* ============================================================== */}
                    </div>
                  </div>
                  <div className="row">
                    {/* ============================================================== */}
                    {/* sales  */}
                    {/* ============================================================== */}
                    <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12">
                      <div className="card border-3 border-top border-top-primary">
                        <div className="card-body">
                          <h5 className="text-muted">Sales</h5>
                          <div className="metric-value d-inline-block">
                            <h1 className="mb-1">$12099</h1>
                          </div>
                          <div className="metric-label d-inline-block float-right text-success font-weight-bold">
                            <span className="icon-circle-small icon-box-xs text-success bg-success-light"><i className="fa fa-fw fa-arrow-up" /></span><span className="ml-1">5.86%</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* ============================================================== */}
                    {/* end sales  */}
                    {/* ============================================================== */}
                    {/* ============================================================== */}
                    {/* new customer  */}
                    {/* ============================================================== */}
                    <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12">
                      <div className="card border-3 border-top border-top-primary">
                        <div className="card-body">
                          <h5 className="text-muted">New Customer</h5>
                          <div className="metric-value d-inline-block">
                            <h1 className="mb-1">1245</h1>
                          </div>
                          <div className="metric-label d-inline-block float-right text-success font-weight-bold">
                            <span className="icon-circle-small icon-box-xs text-success bg-success-light"><i className="fa fa-fw fa-arrow-up" /></span><span className="ml-1">10%</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* ============================================================== */}
                    {/* end new customer  */}
                    {/* ============================================================== */}
                    {/* ============================================================== */}
                    {/* visitor  */}
                    {/* ============================================================== */}
                    <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12">
                      <div className="card border-3 border-top border-top-primary">
                        <div className="card-body">
                          <h5 className="text-muted">Visitor</h5>
                          <div className="metric-value d-inline-block">
                            <h1 className="mb-1">13000</h1>
                          </div>
                          <div className="metric-label d-inline-block float-right text-success font-weight-bold">
                            <span className="icon-circle-small icon-box-xs text-success bg-success-light"><i className="fa fa-fw fa-arrow-up" /></span><span className="ml-1">5%</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* ============================================================== */}
                    {/* end visitor  */}
                    {/* ============================================================== */}
                    {/* ============================================================== */}
                    {/* total orders  */}
                    {/* ============================================================== */}
                    <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12">
                      <div className="card border-3 border-top border-top-primary">
                        <div className="card-body">
                          <h5 className="text-muted">Total Orders</h5>
                          <div className="metric-value d-inline-block">
                            <h1 className="mb-1">1340</h1>
                          </div>
                          <div className="metric-label d-inline-block float-right text-danger font-weight-bold">
                            <span className="icon-circle-small icon-box-xs text-danger bg-danger-light bg-danger-light "><i className="fa fa-fw fa-arrow-down" /></span><span className="ml-1">4%</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* ============================================================== */}
                    {/* end total orders  */}
                    {/* ============================================================== */}
                  </div>
                  <div className="row">
                    {/* ============================================================== */}
                    {/* total revenue  */}
                    {/* ============================================================== */}
                    {/* ============================================================== */}
                    {/* ============================================================== */}
                    {/* category revenue  */}
                    {/* ============================================================== */}
                    <div className="col-xl-5 col-lg-5 col-md-12 col-sm-12 col-12">
                      <div className="card">
                        <h5 className="card-header">Revenue by Category</h5>
                        <div className="card-body">
                          <div id="c3chart_category" style={{height: '420px'}} />
                        </div>
                      </div>
                    </div>
                    {/* ============================================================== */}
                    {/* end category revenue  */}
                    {/* ============================================================== */}
                    <div className="col-xl-7 col-lg-7 col-md-12 col-sm-12 col-12">
                      <div className="card">
                        <h5 className="card-header"> Total Revenue</h5>
                        <div className="card-body">
                          <div id="morris_totalrevenue" />
                        </div>
                        <div className="card-footer">
                          <p className="display-7 font-weight-bold"><span className="text-primary d-inline-block">$26,000</span><span className="text-success float-right">+9.45%</span></p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-xl-5 col-lg-6 col-md-6 col-sm-12 col-12">
                      {/* ============================================================== */}
                      {/* social source  */}
                      {/* ============================================================== */}
                      <div className="card">
                        <h5 className="card-header"> Sales By Social Source</h5>
                        <div className="card-body p-0">
                          <ul className="social-sales list-group list-group-flush">
                            <li className="list-group-item social-sales-content"><span className="social-sales-icon-circle facebook-bgcolor mr-2"><i className="fab fa-facebook-f" /></span><span className="social-sales-name">Facebook</span><span className="social-sales-count text-dark">120 Sales</span>
                            </li>
                            <li className="list-group-item social-sales-content"><span className="social-sales-icon-circle twitter-bgcolor mr-2"><i className="fab fa-twitter" /></span><span className="social-sales-name">Twitter</span><span className="social-sales-count text-dark">99 Sales</span>
                            </li>
                            <li className="list-group-item social-sales-content"><span className="social-sales-icon-circle instagram-bgcolor mr-2"><i className="fab fa-instagram" /></span><span className="social-sales-name">Instagram</span><span className="social-sales-count text-dark">76 Sales</span>
                            </li>
                            <li className="list-group-item social-sales-content"><span className="social-sales-icon-circle pinterest-bgcolor mr-2"><i className="fab fa-pinterest-p" /></span><span className="social-sales-name">Pinterest</span><span className="social-sales-count text-dark">56 Sales</span>
                            </li>
                            <li className="list-group-item social-sales-content"><span className="social-sales-icon-circle googleplus-bgcolor mr-2"><i className="fab fa-google-plus-g" /></span><span className="social-sales-name">Google Plus</span><span className="social-sales-count text-dark">36 Sales</span>
                            </li>
                          </ul>
                        </div>
                        <div className="card-footer text-center">
                          <a href="#" className="btn-primary-link">View Details</a>
                        </div>
                      </div>
                      {/* ============================================================== */}
                      {/* end social source  */}
                      {/* ============================================================== */}
                    </div>
                    <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12">
                      {/* ============================================================== */}
                      {/* sales traffice source  */}
                      {/* ============================================================== */}
                      <div className="card">
                        <h5 className="card-header"> Sales By Traffic Source</h5>
                        <div className="card-body p-0">
                          <ul className="traffic-sales list-group list-group-flush">
                            <li className="traffic-sales-content list-group-item "><span className="traffic-sales-name">Direct</span><span className="traffic-sales-amount">$4000.00  <span className="icon-circle-small icon-box-xs text-success ml-4 bg-success-light"><i className="fa fa-fw fa-arrow-up" /></span><span className="ml-1 text-success">5.86%</span></span>
                            </li>
                            <li className="traffic-sales-content list-group-item"><span className="traffic-sales-name">Search<span className="traffic-sales-amount">$3123.00  <span className="icon-circle-small icon-box-xs text-success ml-4 bg-success-light"><i className="fa fa-fw fa-arrow-up" /></span><span className="ml-1 text-success">5.86%</span></span>
                              </span>
                            </li>
                            <li className="traffic-sales-content list-group-item"><span className="traffic-sales-name">Social<span className="traffic-sales-amount ">$3099.00  <span className="icon-circle-small icon-box-xs text-success ml-4 bg-success-light"><i className="fa fa-fw fa-arrow-up" /></span><span className="ml-1 text-success">5.86%</span></span>
                              </span>
                            </li>
                            <li className="traffic-sales-content list-group-item"><span className="traffic-sales-name">Referrals<span className="traffic-sales-amount ">$2220.00   <span className="icon-circle-small icon-box-xs text-danger ml-4 bg-danger-light"><i className="fa fa-fw fa-arrow-down" /></span><span className="ml-1 text-danger">4.02%</span></span>
                              </span>
                            </li>
                            <li className="traffic-sales-content list-group-item "><span className="traffic-sales-name">Email<span className="traffic-sales-amount">$1567.00   <span className="icon-circle-small icon-box-xs text-danger ml-4 bg-danger-light"><i className="fa fa-fw fa-arrow-down" /></span><span className="ml-1 text-danger">3.86%</span></span>
                              </span>
                            </li>
                          </ul>
                        </div>
                        <div className="card-footer text-center">
                          <a href="#" className="btn-primary-link">View Details</a>
                        </div>
                      </div>
                    </div>
                    {/* ============================================================== */}
                    {/* end sales traffice source  */}
                    {/* ============================================================== */}
                    {/* ============================================================== */}
                    {/* sales traffic country source  */}
                    {/* ============================================================== */}
                    <div className="col-xl-3 col-lg-12 col-md-6 col-sm-12 col-12">
                      <div className="card">
                        <h5 className="card-header">Sales By Country Traffic Source</h5>
                        <div className="card-body p-0">
                          <ul className="country-sales list-group list-group-flush">
                            <li className="country-sales-content list-group-item"><span className="mr-2"><i className="flag-icon flag-icon-us" title="us" id="us" /> </span>
                              <span className>United States</span><span className="float-right text-dark">78%</span>
                            </li>
                            <li className="list-group-item country-sales-content"><span className="mr-2"><i className="flag-icon flag-icon-ca" title="ca" id="ca" /></span><span className>Canada</span><span className="float-right text-dark">7%</span>
                            </li>
                            <li className="list-group-item country-sales-content"><span className="mr-2"><i className="flag-icon flag-icon-ru" title="ru" id="ru" /></span><span className>Russia</span><span className="float-right text-dark">4%</span>
                            </li>
                            <li className="list-group-item country-sales-content"><span className=" mr-2"><i className="flag-icon flag-icon-in" title="in" id="in" /></span><span className>India</span><span className="float-right text-dark">12%</span>
                            </li>
                            <li className="list-group-item country-sales-content"><span className=" mr-2"><i className="flag-icon flag-icon-fr" title="fr" id="fr" /></span><span className>France</span><span className="float-right text-dark">16%</span>
                            </li>
                          </ul>
                        </div>
                        <div className="card-footer text-center">
                          <a href="#" className="btn-primary-link">View Details</a>
                        </div>
                      </div>
                    </div>
                    {/* ============================================================== */}
                    {/* end sales traffice country source  */}
                    {/* ============================================================== */}
                  </div>
                </div>
              </div>
            </div>
            {/* ============================================================== */}
            {/* footer */}
            {/* ============================================================== */}
            <div className="footer">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                    Copyright © 2018 Concept. All rights reserved. Dashboard by <a href="https://colorlib.com/wp/">Colorlib</a>.
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                    <div className="text-md-right footer-links d-none d-sm-block">
                      <a href="javascript: void(0);">About</a>
                      <a href="javascript: void(0);">Support</a>
                      <a href="javascript: void(0);">Contact Us</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* ============================================================== */}
            {/* end footer */}
            {/* ============================================================== */}
          </div>
          {/* ============================================================== */}
          {/* end wrapper  */}
          {/* ============================================================== */}
        </div>
        {/* ============================================================== */}
        {/* end main wrapper  */}
        {/* ============================================================== */}
        {/* Optional JavaScript */}
        {/* jquery 3.3.1 */}
        {/* bootstap bundle js */}
        {/* slimscroll js */}
        {/* main js */}
        {/* chart chartist js */}
        {/* sparkline js */}
        {/* morris js */}
        {/* chart c3 js */}
      </div>
    );
  }
}

export default App;
