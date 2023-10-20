
import { Link } from 'react-router-dom';
import Header from '../components/Header';

const Register = () => {

    const handleRegister = e => {
        e.preventDefault();
        console.log(e.currentTarget)
        const form = new FormData(e.currentTarget);
        const name = form.get('name');
        const photo = form.get('photo');
        const email = form.get('email');
        const password = form.get('password');
        console.log(name, photo, email, password);
    }


    return (
        <div className="bg-about-us">
            <Header></Header>
            <div className="mt-8">
                <h1 className="text-3xl font-semibold text-cyan-400 text-center"> Register Page</h1>
            </div>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-[#0d3b66]">
                        <form onSubmit={handleRegister} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-[#cae9ff]">Name</span>
                                </label>
                                <input type="text" placeholder="Name" name="name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-[#cae9ff]">Photo URL</span>
                                </label>
                                <input type="text" placeholder="Photo URL" name="photo" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-[#cae9ff]">Email</span>
                                </label>
                                <input type="email" placeholder="Email" name="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-[#cae9ff]">Password</span>
                                </label>
                                <input type="password" placeholder="Password" name="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover text-[#cae9ff]">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn bg-gradient-to-r from-sky-500 to-indigo-500 border-0 text-[#cae9ff] capitalize">Register</button>
                            </div>
                        </form>
                        {/* <div className="w-3/4 mx-auto"><GoogleLogin></GoogleLogin></div> */}
                        <p className="text-center pb-4 text-[#cae9ff]">Already have an account? <Link to="/login"><span className="text-cyan-400">Login</span></Link></p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Register;