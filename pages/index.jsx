import React from 'react';
import Link from 'next/link';
import { 
  FaRocket, 
  FaUsers, 
  FaDownload, 
  FaStar,
  FaCheckCircle,
  FaArrowRight,
  FaPlay,
  FaGithub,
  FaLinkedin,
  FaTwitter
} from 'react-icons/fa';
import { 
  MdSpeed, 
  MdSecurity, 
  MdCloudDownload,
  MdMobileFriendly 
} from 'react-icons/md';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <nav className="bg-black/20 backdrop-blur-md border-b border-white/10 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                ATSResume
              </Link>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-white hover:text-purple-300 transition-colors font-medium">
                Home
              </Link>
              <Link href="/features" className="text-gray-300 hover:text-purple-300 transition-colors">
                Features
              </Link>
              <Link href="/demo" className="text-gray-300 hover:text-purple-300 transition-colors">
                Demo
              </Link>
              <Link href="/pricing" className="text-gray-300 hover:text-purple-300 transition-colors">
                Pricing
              </Link>
              <Link href="/contact" className="text-gray-300 hover:text-purple-300 transition-colors">
                Contact
              </Link>
              <Link href="/builder" className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-full hover:from-purple-700 hover:to-pink-700 transition-all transform hover:scale-105">
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent">
                Get Hired with an
              </span>
              <br />
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
                ATS-Optimized Resume
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Create professional, ATS-friendly resumes in minutes. Our cutting-edge platform analyzes and optimizes your resume for maximum visibility with applicant tracking systems.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/resume-builder" className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all transform hover:scale-105 shadow-lg">
                <FaRocket className="inline mr-2" />
                Start Building Now
              </Link>
              <Link href="/demo" className="border border-purple-400 text-purple-300 px-8 py-4 rounded-full text-lg font-semibold hover:bg-purple-400 hover:text-white transition-all">
                <FaPlay className="inline mr-2" />
                Watch Demo
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-black/20 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10">
              <div className="text-3xl font-bold text-purple-400 mb-2">50K+</div>
              <div className="text-gray-300">Resumes Created</div>
            </div>
            <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10">
              <div className="text-3xl font-bold text-pink-400 mb-2">95%</div>
              <div className="text-gray-300">ATS Pass Rate</div>
            </div>
            <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10">
              <div className="text-3xl font-bold text-purple-400 mb-2">24/7</div>
              <div className="text-gray-300">Available</div>
            </div>
            <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10">
              <div className="text-3xl font-bold text-pink-400 mb-2">100%</div>
              <div className="text-gray-300">Free to Use</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Preview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Why Choose ATSResume?
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Our platform combines cutting-edge technology with user-friendly design to create the perfect resume-building experience.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-purple-900/50 to-pink-900/50 backdrop-blur-md rounded-2xl p-8 border border-white/10 hover:border-purple-400/50 transition-all">
              <MdSpeed className="text-4xl text-purple-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">Lightning Fast</h3>
              <p className="text-gray-300">Create professional resumes in minutes, not hours. Our streamlined interface gets you results quickly.</p>
            </div>
            
            <div className="bg-gradient-to-br from-pink-900/50 to-purple-900/50 backdrop-blur-md rounded-2xl p-8 border border-white/10 hover:border-pink-400/50 transition-all">
              <MdSecurity className="text-4xl text-pink-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">ATS Optimized</h3>
              <p className="text-gray-300">Built specifically to pass applicant tracking systems with industry-leading optimization techniques.</p>
            </div>
            
            <div className="bg-gradient-to-br from-purple-900/50 to-pink-900/50 backdrop-blur-md rounded-2xl p-8 border border-white/10 hover:border-purple-400/50 transition-all">
              <MdMobileFriendly className="text-4xl text-purple-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">Mobile Friendly</h3>
              <p className="text-gray-300">Build and edit your resume on any device. Fully responsive design that works everywhere.</p>
            </div>
            
            <div className="bg-gradient-to-br from-pink-900/50 to-purple-900/50 backdrop-blur-md rounded-2xl p-8 border border-white/10 hover:border-pink-400/50 transition-all">
              <MdCloudDownload className="text-4xl text-pink-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">Export & Save</h3>
              <p className="text-gray-300">Download your resume as PDF or save your data for future edits. Your work is always secure.</p>
            </div>
            
            <div className="bg-gradient-to-br from-purple-900/50 to-pink-900/50 backdrop-blur-md rounded-2xl p-8 border border-white/10 hover:border-purple-400/50 transition-all">
              <FaUsers className="text-4xl text-purple-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">Trusted by Thousands</h3>
              <p className="text-gray-300">Join thousands of job seekers who have successfully landed their dream jobs using our platform.</p>
            </div>
            
            <div className="bg-gradient-to-br from-pink-900/50 to-purple-900/50 backdrop-blur-md rounded-2xl p-8 border border-white/10 hover:border-pink-400/50 transition-all">
              <FaStar className="text-4xl text-pink-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">Always Free</h3>
              <p className="text-gray-300">No hidden fees, no subscriptions. Create unlimited resumes completely free, forever.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-900/30 to-pink-900/30 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Land Your Dream Job?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of successful job seekers who have used ATSResume to create winning resumes.
          </p>
          <Link href="/resume-builder" className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-10 py-4 rounded-full text-xl font-semibold hover:from-purple-700 hover:to-pink-700 transition-all transform hover:scale-105 shadow-xl inline-flex items-center">
            Get Started Free
            <FaArrowRight className="ml-2" />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/40 backdrop-blur-md border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                ATSResume
              </Link>
              <p className="text-gray-400 mt-4 max-w-md">
                Create professional, ATS-optimized resumes that get you noticed by employers. Free, fast, and effective.
              </p>
              <div className="flex space-x-4 mt-6">
                <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                  <FaGithub className="text-xl" />
                </a>
                <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                  <FaLinkedin className="text-xl" />
                </a>
                <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                  <FaTwitter className="text-xl" />
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="text-white font-semibold mb-4">Product</h3>
              <ul className="space-y-2">
                <li><Link href="/features" className="text-gray-400 hover:text-purple-400 transition-colors">Features</Link></li>
                <li><Link href="/demo" className="text-gray-400 hover:text-purple-400 transition-colors">Demo</Link></li>
                <li><Link href="/pricing" className="text-gray-400 hover:text-purple-400 transition-colors">Pricing</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-white font-semibold mb-4">Support</h3>
              <ul className="space-y-2">
                <li><Link href="/contact" className="text-gray-400 hover:text-purple-400 transition-colors">Contact Us</Link></li>
                <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Help Center</a></li>
                <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Privacy Policy</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-white/10 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              © 2025 ATSResume. All rights reserved. Built with ❤️ for job seekers worldwide.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;