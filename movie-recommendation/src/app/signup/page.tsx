import Link from "next/link";
import { FaFacebookF, FaGoogle, FaTwitter } from "react-icons/fa";
import { RiMovie2Line } from "react-icons/ri";

export default function SignupPage() {
    return (
        <div className="min-h-screen bg-[#030A1B] flex items-center justify-center p-4">
            <div className="w-full max-w-md bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-8 shadow-2xl">
                {/* Header */}
                <div className="text-center mb-8">
                    <Link
                        href="/"
                        className="flex items-center justify-center gap-2 text-blue-500 mb-6 group"
                    >
                        <RiMovie2Line className="text-4xl transform group-hover:scale-110 transition-transform" />
                        <span className="font-bold text-2xl text-white">MyMovie</span>
                    </Link>
                    <h1 className="text-2xl font-bold text-white mb-2">Create Account</h1>
                    <p className="text-gray-400">Join us to start streaming</p>
                </div>

                {/* Form */}
                <form className="space-y-5">
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-300 ml-1">
                            Full Name
                        </label>
                        <input
                            type="text"
                            placeholder="Enter your name"
                            className="w-full bg-black/30 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-300 ml-1">
                            Email
                        </label>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="w-full bg-black/30 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-300 ml-1">
                            Password
                        </label>
                        <input
                            type="password"
                            placeholder="Create a password"
                            className="w-full bg-black/30 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                        />
                    </div>

                    <div className="flex items-start gap-2 text-sm text-gray-400 mt-2">
                        <input type="checkbox" className="mt-1 rounded bg-black/30 border-white/10 text-blue-500 focus:ring-blue-500" />
                        <span>I agree to the <a href="#" className="text-blue-400 hover:text-blue-300">Terms of Service</a> and <a href="#" className="text-blue-400 hover:text-blue-300">Privacy Policy</a></span>
                    </div>

                    <button className="w-full bg-gradient-to-r from-blue-600 to-blue-500 text-white font-bold py-3 rounded-xl hover:from-blue-500 hover:to-blue-400 transform transition-all hover:-translate-y-0.5 shadow-lg shadow-blue-500/25 mt-2">
                        Create Account
                    </button>
                </form>

                {/* Divider */}
                <div className="flex items-center gap-4 my-8">
                    <div className="h-px bg-white/10 flex-1" />
                    <span className="text-gray-500 text-sm">Or sign up with</span>
                    <div className="h-px bg-white/10 flex-1" />
                </div>

                {/* Social Login */}
                <div className="grid grid-cols-3 gap-4">
                    <button className="flex items-center justify-center py-2.5 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-colors text-white">
                        <FaGoogle />
                    </button>
                    <button className="flex items-center justify-center py-2.5 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-colors text-white">
                        <FaFacebookF />
                    </button>
                    <button className="flex items-center justify-center py-2.5 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-colors text-white">
                        <FaTwitter />
                    </button>
                </div>

                {/* Footer */}
                <p className="text-center text-gray-400 mt-8">
                    Already have an account?{" "}
                    <Link href="/login" className="text-blue-400 hover:text-blue-300 font-semibold transition-colors">
                        Log In
                    </Link>
                </p>
            </div>
        </div>
    );
}
