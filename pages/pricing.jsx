import React from 'react';
import Link from 'next/link';
import { 
  FaCheckCircle, 
  FaArrowRight,
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaStar,
  FaHeart,
  FaRocket,
  FaInfinity
} from 'react-icons/fa';

const PricingPage = () => {
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
              <Link href="/" className="text-gray-300 hover:text-purple-300 transition-colors">
                Home
              </Link>
              <Link href="/features" className="text-gray-300 hover:text-purple-300 transition-colors">
                Features
              </Link>
              <Link href="/demo" className="text-gray-300 hover:text-purple-300 transition-colors">
                Demo
              </Link>
              <Link href="/pricing" className="text-white hover:text-purple-300 transition-colors font-medium">
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
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent">
              Simple, Transparent
            </span>
            <br />
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
              Pricing
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            We believe everyone deserves access to professional resume building tools. That's why ATSResume is completely free, forever.
          </p>
        </div>
      </section>

      {/* Pricing Card */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 backdrop-blur-md rounded-3xl border border-white/10 relative">
            {/* Popular Badge */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-full text-sm font-semibold flex items-center">
                <FaStar className="mr-2" />
                Most Popular
              </div>
            </div>

            <div className="p-12 text-center">
              <div className="mb-8">
                <h2 className="text-4xl font-bold text-white mb-4">Free Forever</h2>
                <div className="flex items-center justify-center mb-4">
                  <span className="text-6xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">$0</span>
                  <span className="text-2xl text-gray-300 ml-2">/month</span>
                </div>
                <p className="text-xl text-gray-300">Everything you need to create professional resumes</p>
              </div>

              {/* Features List */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                <div className="text-left space-y-4">
                  <div className="flex items-center">
                    <FaCheckCircle className="text-green-400 mr-3 text-xl flex-shrink-0" />
                    <span className="text-gray-300">Unlimited resume creation</span>
                  </div>
                  <div className="flex items-center">
                    <FaCheckCircle className="text-green-400 mr-3 text-xl flex-shrink-0" />
                    <span className="text-gray-300">ATS optimization</span>
                  </div>
                  <div className="flex items-center">
                    <FaCheckCircle className="text-green-400 mr-3 text-xl flex-shrink-0" />
                    <span className="text-gray-300">Real-time preview</span>
                  </div>
                  <div className="flex items-center">
                    <FaCheckCircle className="text-green-400 mr-3 text-xl flex-shrink-0" />
                    <span className="text-gray-300">PDF export</span>
                  </div>
                  <div className="flex items-center">
                    <FaCheckCircle className="text-green-400 mr-3 text-xl flex-shrink-0" />
                    <span className="text-gray-300">Voice input support</span>
                  </div>
                </div>
                <div className="text-left space-y-4">
                  <div className="flex items-center">
                    <FaCheckCircle className="text-green-400 mr-3 text-xl flex-shrink-0" />
                    <span className="text-gray-300">Drag & drop interface</span>
                  </div>
                  <div className="flex items-center">
                    <FaCheckCircle className="text-green-400 mr-3 text-xl flex-shrink-0" />
                    <span className="text-gray-300">Mobile responsive</span>
                  </div>
                  <div className="flex items-center">
                    <FaCheckCircle className="text-green-400 mr-3 text-xl flex-shrink-0" />
                    <span className="text-gray-300">Data backup & restore</span>
                  </div>
                  <div className="flex items-center">
                    <FaCheckCircle className="text-green-400 mr-3 text-xl flex-shrink-0" />
                    <span className="text-gray-300">Rich text formatting</span>
                  </div>
                  <div className="flex items-center">
                    <FaCheckCircle className="text-green-400 mr-3 text-xl flex-shrink-0" />
                    <span className="text-gray-300">No watermarks</span>
                  </div>
                </div>
              </div>

              <Link href="/resume-builder" className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-12 py-4 rounded-full text-xl font-semibold hover:from-purple-700 hover:to-pink-700 transition-all transform hover:scale-105 shadow-xl inline-flex items-center">
                <FaRocket className="mr-3" />
                Start Building Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Free Section */}
      <section className="py-16 bg-black/20 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Why Is ATSResume Free?</h2>
            <p className="text-xl text-gray-300">Our mission is to democratize access to professional resume building tools</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-purple-900/50 to-pink-900/50 backdrop-blur-md rounded-2xl p-8 border border-white/10 text-center">
              <FaHeart className="text-5xl text-purple-400 mx-auto mb-6" />
              <h3 className="text-2xl font-semibold text-white mb-4">Our Mission</h3>
              <p className="text-gray-300">We believe everyone deserves equal opportunities in their job search, regardless of their financial situation.</p>
            </div>
            
            <div className="bg-gradient-to-br from-pink-900/50 to-purple-900/50 backdrop-blur-md rounded-2xl p-8 border border-white/10 text-center">
              <FaInfinity className="text-5xl text-pink-400 mx-auto mb-6" />
              <h3 className="text-2xl font-semibold text-white mb-4">No Limits</h3>
              <p className="text-gray-300">Create unlimited resumes, make unlimited edits, and download as many times as you need - all for free.</p>
            </div>
            
            <div className="bg-gradient-to-br from-purple-900/50 to-pink-900/50 backdrop-blur-md rounded-2xl p-8 border border-white/10 text-center">
              <FaRocket className="text-5xl text-purple-400 mx-auto mb-6" />
              <h3 className="text-2xl font-semibold text-white mb-4">Community Driven</h3>
              <p className="text-gray-300">Built by developers who understand the job search struggle and want to help others succeed.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">What Our Users Say</h2>
            <p className="text-xl text-gray-300">Join thousands of satisfied job seekers</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 backdrop-blur-md rounded-2xl p-8 border border-white/10">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                </div>
              </div>
              <p className="text-gray-300 mb-6">"I couldn't believe this was free! The ATS optimization helped me get past the initial screening for my dream job. Highly recommended!"</p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                  S
                </div>
                <div>
                  <p className="text-white font-semibold">Sarah Johnson</p>
                  <p className="text-gray-400 text-sm">Software Engineer</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-pink-900/20 to-purple-900/20 backdrop-blur-md rounded-2xl p-8 border border-white/10">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                </div>
              </div>
              <p className="text-gray-300 mb-6">"The drag-and-drop feature made it so easy to organize my experience. I landed 3 interviews in the first week!"</p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                  M
                </div>
                <div>
                  <p className="text-white font-semibold">Michael Chen</p>
                  <p className="text-gray-400 text-sm">Marketing Manager</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 backdrop-blur-md rounded-2xl p-8 border border-white/10">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                </div>
              </div>
              <p className="text-gray-300 mb-6">"As a recent graduate, I was worried about resume costs. ATSResume saved me money and helped me create a professional resume that got results!"</p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                  E
                </div>
                <div>
                  <p className="text-white font-semibold">Emily Rodriguez</p>
                  <p className="text-gray-400 text-sm">Recent Graduate</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-black/20 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-300">Everything you need to know about our free service</p>
          </div>
          
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 backdrop-blur-md rounded-xl p-6 border border-white/10">
              <h3 className="text-xl font-semibold text-white mb-3">Is ATSResume really free forever?</h3>
              <p className="text-gray-300">Yes! We're committed to keeping ATSResume free for everyone. There are no hidden fees, premium tiers, or subscription plans.</p>
            </div>

            <div className="bg-gradient-to-br from-pink-900/20 to-purple-900/20 backdrop-blur-md rounded-xl p-6 border border-white/10">
              <h3 className="text-xl font-semibold text-white mb-3">Are there any limitations on the free version?</h3>
              <p className="text-gray-300">No limitations! You get access to all features including unlimited resume creation, ATS optimization, PDF export, and all advanced features.</p>
            </div>

            <div className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 backdrop-blur-md rounded-xl p-6 border border-white/10">
              <h3 className="text-xl font-semibold text-white mb-3">Will you add paid features in the future?</h3>
              <p className="text-gray-300">Our core resume building features will always remain free. We believe in equal access to professional resume tools for everyone.</p>
            </div>

            <div className="bg-gradient-to-br from-pink-900/20 to-purple-900/20 backdrop-blur-md rounded-xl p-6 border border-white/10">
              <h3 className="text-xl font-semibold text-white mb-3">How do you sustain a free service?</h3>
              <p className="text-gray-300">ATSResume is a passion project built by developers who want to help job seekers succeed. We keep costs low and focus on providing value to our users.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-900/30 to-pink-900/30 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Create Your Professional Resume?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of job seekers who have successfully created winning resumes with ATSResume - completely free!
          </p>
          <Link href="/resume-builder" className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-12 py-4 rounded-full text-xl font-semibold hover:from-purple-700 hover:to-pink-700 transition-all transform hover:scale-105 shadow-xl inline-flex items-center">
            <FaRocket className="mr-3" />
            Start Building Free
            <FaArrowRight className="ml-3" />
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

export default PricingPage;