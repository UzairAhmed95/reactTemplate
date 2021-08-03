import React from "react";

const Header = (props) => {
  return (
    <React.Fragment>
      <div className="app-header header-shadow">
        <div className="app-header__logo">
          <div className="logo-src"></div>
          <div className="header__pane ml-auto">
            <div>
              <button
                type="button"
                className="hamburger close-sidebar-btn hamburger--elastic"
                data-class="closed-sidebar"
              >
                <span className="hamburger-box">
                  <span className="hamburger-inner"></span>
                </span>
              </button>
            </div>
          </div>
        </div>
        <div className="app-header__mobile-menu">
          <div>
            <button
              type="button"
              className="hamburger hamburger--elastic mobile-toggle-nav"
            >
              <span className="hamburger-box">
                <span className="hamburger-inner"></span>
              </span>
            </button>
          </div>
        </div>
        <div className="app-header__menu">
          <span>
            <button
              type="button"
              className="btn-icon btn-icon-only btn btn-primary btn-sm mobile-toggle-header-nav"
            >
              <span className="btn-icon-wrapper">
                <i className="fa fa-ellipsis-v fa-w-6"></i>
              </span>
            </button>
          </span>
        </div>
        <div className="app-header__content">
          <div class="app-header-left">
            <ul class="header-menu nav">
              <li class="nav-item">
                <a href="javascript:void(0);" class="nav-link">
                  <i class="nav-link-icon fa fa-database"> </i>
                  Statistics
                </a>
              </li>
              <li class="nav-item">
                <a href="javascript:void(0);" class="nav-link">
                  <i class="nav-link-icon fa fa-edit"> </i>
                  Dashboard
                </a>
              </li>
              <li class="dropdown nav-item">
                <a href="javascript:void(0);" class="nav-link">
                  <i class="nav-link-icon fa fa-cog"></i>
                  Settings
                </a>
              </li>
            </ul>
          </div>
          <div className="app-header-right">
            <div className="header-btn-lg pr-0">
              <div className="widget-content p-0">
                <div className="widget-content-wrapper">
                  <div className="widget-content-left">
                    <div className="btn-group">
                      <a
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                        className="p-0 btn"
                      >
                        <div className="circleBadge badge-pill badge-outline-primary">
                          UA
                        </div>
                        <span></span>
                      </a>
                      <div
                        tabindex="-1"
                        role="menu"
                        aria-hidden="true"
                        className="dropdown-menu dropdown-menu-right"
                      >
                        <button
                          type="button"
                          tabindex="0"
                          className="dropdown-item"
                        >
                          User Account
                        </button>
                        <button
                          type="button"
                          tabindex="0"
                          className="dropdown-item"
                        >
                          Settings
                        </button>
                        <h6 tabindex="-1" className="dropdown-header">
                          Header
                        </h6>
                        <button
                          type="button"
                          tabindex="0"
                          className="dropdown-item"
                        >
                          Actions
                        </button>
                        <div tabindex="-1" className="dropdown-divider"></div>
                        <button
                          type="button"
                          tabindex="0"
                          className="dropdown-item"
                        >
                          Dividers
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="widget-content-left ml-3 header-user-info">
                    <div className="widget-heading">Uzair Ahmed</div>
                    <div className="widget-subheading">Software Engineer</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Header;
