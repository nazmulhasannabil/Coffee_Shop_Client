import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { logo } from "./Header";
import Swal from "sweetalert2";

export default function SignUp() {

    const { createUser } = useContext(AuthContext);

    // const createContext
    const handleSignUp = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;

        console.log("Sign Up form submitted", email, password);

        createUser(email, password)
            .then(result => {
                console.log(result.user)
                const cratedAt= result?.user?.metadata?.creationTime;

                //send new user to the database
                fetch('http://localhost:5000/users', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ name, email, cratedAt })
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.insertedId) {
                            Swal.fire({
                                title: 'Success!',
                                text: 'New Account Created Successfully',
                                icon: 'success',
                                confirmButtonText: 'Cool'
                            })
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
                        Join Our Coffee Club
                    </h2>
                </div>

                <form onSubmit={handleSignUp} className="space-y-4">
                    {/* Name */}
                    <div>
                        <label
                            htmlFor="name"
                            className="block text-sm font-medium text-amber-800"
                        >
                            Full Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="John Barista"
                            className="mt-1 w-full px-4 py-2 border border-amber-300 rounded-xl bg-amber-50 focus:ring-2 focus:ring-amber-600 focus:outline-none"
                        />
                    </div>

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
                            name="email"
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
                            name="password"
                            placeholder="••••••••"
                            className="mt-1 w-full px-4 py-2 border border-amber-300 rounded-xl bg-amber-50 focus:ring-2 focus:ring-amber-600 focus:outline-none"
                        />
                    </div>

                    {/* Submit */}
                    <button
                        type="submit"
                        className="w-full bg-amber-700 text-white py-2 px-4 rounded-xl hover:bg-amber-800 transition shadow-md"
                    >
                        Sign Up fast
                    </button>
                </form>

                {/* Extra Links */}
                <p className="text-sm text-center text-amber-700 mt-4">
                    Already sipping with us?{" "}
                    <a href="/signin" className="text-amber-900 font-semibold hover:underline">
                        Sign In
                    </a>
                </p>
            </div>
        </div>
    );
}
