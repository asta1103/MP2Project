import React from 'react';
import { Link } from 'react-router-dom';
import Login from './login';
import Registration from './register';

const Sidebar = () => {
  return (
    <aside id="sidebar" className="js-sidebar">
      <div className="h-100">
        <div className="sidebar-logo">
          <Link to="/">JGarage.</Link>
        </div>
        <ul className="sidebar-nav">
          <li className="sidebar-header">Admin Elements</li>
          <li className="sidebar-item">
            <Link to="/" className="sidebar-link">
              <i className="fa-solid fa-list pe-2"></i>
              Dashboard
            </Link>
          </li>
          <li className="sidebar-item">
            <Link
              to="#"
              className="sidebar-link collapsed"
              data-bs-target="#pages"
              data-bs-toggle="collapse"
              aria-expanded="false"
            >
              <i className="fa-solid fa-file-lines pe-2"></i> Pages
            </Link>
            <ul id="pages" className="sidebar-dropdown list-unstyled collapse" data-bs-parent="#sidebar">
              <li className="sidebar-item">
                <Link to="/page1" className="sidebar-link">
                  Page 1
                </Link>
              </li>
              <li className="sidebar-item">
                <Link to="/page2" className="sidebar-link">
                  Page 2
                </Link>
              </li>
            </ul>
          </li>
          <li className="sidebar-item">
            <Link
              to="#"
              className="sidebar-link collapsed"
              data-bs-target="#posts"
              data-bs-toggle="collapse"
              aria-expanded="false"
            >
              <i className="fa-solid fa-sliders pe-2"></i> Posts
            </Link>
            <ul id="posts" className="sidebar-dropdown list-unstyled collapse" data-bs-parent="#sidebar">
              <li className="sidebar-item">
                <Link to="/post1" className="sidebar-link">
                  Post 1
                </Link>
              </li>
              <li className="sidebar-item">
                <Link to="/post2" className="sidebar-link">
                  Post 2
                </Link>
              </li>
              <li className="sidebar-item">
                <Link to="/post3" className="sidebar-link">
                  Post 3
                </Link>
              </li>
            </ul>
          </li>
          <li className="sidebar-item">
            <Link
              to="#"
              className="sidebar-link collapsed"
              data-bs-target="#auth"
              data-bs-toggle="collapse"
              aria-expanded="false"
            >
              <i className="fa-regular fa-user pe-2"></i> Profile
            </Link>
            <ul id="auth" className="sidebar-dropdown list-unstyled collapse" data-bs-parent="#sidebar">
              <li className="sidebar-item">
                <Link to="/login" className="sidebar-link">
                  <Login/>
                </Link>
              </li>
              <li className="sidebar-item">
                <Link to="/register" className="sidebar-link">
                  <Registration/>
                </Link>
              </li>
              <li className="sidebar-item">
                <Link to="/forgot-password" className="sidebar-link">
                  Forgot Password
                </Link>
              </li>
            </ul>
          </li>
          <li className="sidebar-header">Multi Level Menu</li>
          <li className="sidebar-item">
            <Link
              to="#"
              className="sidebar-link collapsed"
              data-bs-target="#multi"
              data-bs-toggle="collapse"
              aria-expanded="false"
            >
              <i className="fa-solid fa-share-nodes pe-2"></i> Multi Dropdown
            </Link>
            <ul id="multi" className="sidebar-dropdown list-unstyled collapse" data-bs-parent="#sidebar">
              <li className="sidebar-item">
                <Link
                  to="#"
                  className="sidebar-link collapsed"
                  data-bs-target="#level-1"
                  data-bs-toggle="collapse"
                  aria-expanded="false"
                >
                  Level 1
                </Link>
                <ul id="level-1" className="sidebar-dropdown list-unstyled collapse">
                  <li className="sidebar-item">
                    <Link to="#" className="sidebar-link">
                      Level 1.1
                    </Link>
                  </li>
                  <li className="sidebar-item">
                    <Link to="#" className="sidebar-link">
                      Level 1.2
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
