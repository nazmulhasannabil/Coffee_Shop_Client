import { useContext } from "react";
import { logo } from "./Header";
import { AuthContext } from "../providers/AuthProvider";

export default function SignIn() {

    const { signInUser } = useContext(AuthContext);

    const handleSignIn = event => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        console.log("Sign In form submitted", email, password);

        signInUser(email, password)
            .then(result => {
                console.log('hello there',result.user)
                const lastSignInTime = result?.user?.metadata?.lastSignInTime;

                //update new user with last
                fetch('https://coffee-shop-server-5wsk.onrender.com/users', {
                    method: 'PATCH',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ email, lastSignInTime })
                }).then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.modifiedCount > 0) {
                            console.log('User last sign in time updated');
                        }
                    })
            })
            .catch(error => {
                console.log(error)
            })
    }




    return (
        <div className="flex min-h-screen items-center justify-center bg-amber-50">
            <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-xl border border-amber-600">
                {/* Title */}
                <div className="flex flex-col items-center mb-6">
                    <img src={logo} alt="Logo" className="w-16 h-16" />
                    <h2 className="text-3xl font-bold text-center font-rancho text-amber-900 mb-6">
                        Welcome Back
                    </h2>
                </div>

                <form onSubmit={handleSignIn} className="space-y-4">
                    {/* Email */}
                    <div>
                        <label
                            htmlFor="email"
                            className="block text-sm font-medium text-amber-800"
                        >
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            placeholder="coffee@lover.com"
                            className="mt-1 w-full px-4 py-2 border border-amber-300 rounded-xl bg-amber-50 focus:ring-2 focus:ring-amber-600 focus:outline-none"
                        />
                    </div>

                    {/* Password */}
                    <div>
                        <label
                            htmlFor="password"
                            className="block text-sm font-medium text-amber-800"
                        >
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            placeholder="••••••••"
                            className="mt-1 w-full px-4 py-2 border border-amber-300 rounded-xl bg-amber-50 focus:ring-2 focus:ring-amber-600 focus:outline-none"
                        />
                    </div>

                    {/* Sign In Button */}
                    <button
                        type="submit"
                        className="w-full bg-amber-700 text-white py-2 px-4 rounded-xl hover:bg-amber-800 transition shadow-md"
                    >
                        Sign In
                    </button>
                </form>

                {/* Extra Links */}
                <p className="text-sm text-center text-amber-700 mt-4">
                    New here?{" "}
                    <a href="/signup" className="text-amber-900 font-semibold hover:underline">
                        Create an Account
                    </a>
                </p>
            </div>
        </div>
    );
}
