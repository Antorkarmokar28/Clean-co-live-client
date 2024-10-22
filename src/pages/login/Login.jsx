import React, { useState } from 'react';
import Container from '../../components/UI/Container';
import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import toast from 'react-hot-toast';

const Login = () => {
    // user email and password state
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // custom hook for user create
    const { logIn, user } = useAuth();
    const navigate = useNavigate();
    console.log(user);
    // submit of user email and password with handlesubmit function
    const handleLoginSubmit = async (e) => {
        e.preventDefault();
        const toastId = toast.loading('Sign In....');
        try {
            await logIn(email, password);
            toast.success('Sign In....', { id: toastId })
            // user navigate to home page
            navigate('/');
        } catch (error) {
            toast.error(error.message, { id: toastId });
        }
    }
    return (
        <Container>
            {/* sign in form wrapper */}
            <div className='w-full h-screen flex justify-center items-center'>
                {/* sign in form */}
                <form onSubmit={handleLoginSubmit} className='w-72 md:w-80 p-6 rounded-lg bg-slate-50 shadow'>
                    <h4 className="capitalize text-primary text-3xl font-bold text-center mb-6">Sign In Now</h4>
                    <input
                        className='class w-full px-4 py-3 bg-white mb-6 rounded outline-none'
                        type="email"
                        required
                        placeholder='Email'
                        onBlur={(e) => setEmail(e.target.value)}
                    />
                    <input
                        className='class w-full px-4 py-3 bg-white mb-6 rounded outline-none'
                        type="password"
                        placeholder='Password'
                        required
                        onBlur={(e) => setPassword(e.target.value)}
                    />
                    <input
                        className='btn btn-primary text-white w-full'
                        type="submit"
                        value="Sign In"
                    />
                    <p className='mt-6'>Do you have an account? <Link to="/register" className='text-lg text-primary font-bold'>Sign UP</Link></p>
                </form>
            </div>
        </Container>
    );
};

export default Login;