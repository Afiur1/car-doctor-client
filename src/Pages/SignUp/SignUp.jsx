import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../assets/images/login/login.svg'

const SignUp = () => {

    const handleSignUp= event=>{
        event.prevenrDeafault()
    }
    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row ">
          <div className="mr-12 w-1/2 ">
            
           <img src={img} alt="" />
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form className="card-body">
            <h1 className="text-3xl font-bold text-center">Sign Up!</h1>
              <form onSubmit={handleSignUp}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="email" placeholder="name" name='name' className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" placeholder="email" name='email' className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text"> Confirm Password</span>
                </label>
                <input type="password" placeholder="password" name='password' className="input input-bordered" required />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <input   className="btn btn-primary" type="submit" value="Sign Up"/>
                
              </div>
              </form>
            </form>
            <p  className='m-4 text-center'>Already have an Account <Link  className='text-orange-500 font-bold' to={'/login'} >Login</Link> </p>
          </div>
        </div>
      </div>
    );
};

export default SignUp;