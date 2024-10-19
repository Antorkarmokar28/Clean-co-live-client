import React from 'react';
import Container from '../../components/UI/Container';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <Container>
            {/* sign in form wrapper */}
            <div className= 'w-full h-screen flex justify-center items-center'>
                {/* sign in form */}
                <form className='w-72 md:w-80 p-6 rounded-lg bg-slate-50 shadow'>
                    <h4 className="capitalize text-primary text-3xl font-bold text-center mb-6">Sign In Now</h4>
                    <input className='class w-full px-4 py-3 bg-white mb-6 rounded outline-none' type="email" required placeholder='Email' />
                    <input className='class w-full px-4 py-3 bg-white mb-6 rounded outline-none' type="password" placeholder='Password' required />
                    <input className='btn btn-primary text-white w-full' type="submit" value="Sign In" />
                    <p className='mt-6'>Do you have not account <Link to="/register" className='text-lg text-primary font-bold'>Sign UP</Link></p>
                </form>
            </div>
        </Container>
    );
};

export default Login;