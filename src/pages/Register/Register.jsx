import { useState } from "react";
import Container from "../../components/UI/Container";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";

const Register = () => {
    // user email and password state
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // custom hook for user create
    const { createUser, user } = useAuth();
    const navigate = useNavigate();
    console.log(user);
    // submit of user email and password with handlesubmit function
    const handleSubmit = async (e) => {
        e.preventDefault();
        const toastId = toast.loading('Sign Up....');
        try {
            await createUser(email, password);
            toast.success('Sign Up....', { id: toastId });
            navigate('/')
        } catch (error) {
            toast.error(error.message, { id: toastId });
        }
    }
    return (
        <Container>
            {/* sign up form wrapper */}
            <div className='w-full h-screen flex justify-center items-center'>
                {/* sign in form */}
                <form onSubmit={handleSubmit} className='w-72 md:w-80 p-6 rounded-lg bg-slate-50 shadow'>
                    <h4 className="capitalize text-primary text-3xl font-bold text-center mb-6">Sign Up Now</h4>
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
                        value="Sign Up"
                    />
                    <p className='mt-6'>Do you have already an account? <Link to="/login" className='text-lg text-primary font-bold'>Sign In</Link></p>
                </form>
            </div>
        </Container>
    );
};

export default Register;