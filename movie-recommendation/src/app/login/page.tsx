import Link from "next/link";
import { FaFacebookF, FaGoogle, FaTwitter } from "react-icons/fa";
import { RiMovie2Line } from "react-icons/ri";

export default function LoginPage() {
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
                    <h1 className="text-2xl font-bold text-white mb-2">Welcome Back!</h1>
                    <p className="text-gray-400">Please login to your account</p>
                </div>

                {/* Form */}
                <form className="space-y-6">
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
                            placeholder="Enter your password"
                            className="w-full bg-black/30 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                        />
                    </div>

                    <div className="flex items-center justify-between text-sm">
                        <label className="flex items-center gap-2 text-gray-400 cursor-pointer">
                            <input type="checkbox" className="rounded bg-black/30 border-white/10 text-blue-500 focus:ring-blue-500" />
                            <span>Remember me</span>
                        </label>
                        <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors">Forgot password?</a>
                    </div>

                    <button className="w-full bg-gradient-to-r from-blue-600 to-blue-500 text-white font-bold py-3 rounded-xl hover:from-blue-500 hover:to-blue-400 transform transition-all hover:-translate-y-0.5 shadow-lg shadow-blue-500/25">
                        Sign In
                    </button>
                </form>

                {/* Divider */}
                <div className="flex items-center gap-4 my-8">
                    <div className="h-px bg-white/10 flex-1" />
                    <span className="text-gray-500 text-sm">Or continue with</span>
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
                    Don't have an account?{" "}
                    <Link href="/signup" className="text-blue-400 hover:text-blue-300 font-semibold transition-colors">
                        Sign Up
                    </Link>
                </p>
            </div>
        </div>
    );
}
