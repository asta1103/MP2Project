import React from 'react';
import '../Admin/login.css';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="d-flex align-items-center justify-content-center" style={{ minHeight: '100vh', backgroundColor: '#f8f9fa' }}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card mt-5">
              <div className="card-body">
                <h2 className="card-title text-center mb-4">Sign In</h2>
                <form>
                  <div className="mb-3">
                    <label htmlFor="inputEmail" className="form-label">Email</label>
                    <input type="email" className="form-control" id="inputEmail" required />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="inputPassword" className="form-label">Password</label>
                    <input type="password" className="form-control" id="inputPassword" required />
                  </div>
                  <div className="mb-3 text-center">
                    <p className="mb-0">Don't have an account yet?</p>
                    <Link to="/register" className="btn btn-link">Sign Up</Link>
                  </div>
                  <div className="text-center">
                    <button type="submit" className="btn btn-primary">Login</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
