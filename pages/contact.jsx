import React, { useState } from 'react';
import Link from 'next/link';
import { 
  FaEnvelope, 
  FaPhone, 
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaPaperPlane,
  FaQuestionCircle,
  FaLifeRing,
  FaBug
} from 'react-icons/fa';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We\'ll get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

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
              <Link href="/pricing" className="text-gray-300 hover:text-purple-300 transition-colors">
                Pricing
              </Link>
              <Link href="/contact" className="text-white hover:text-purple-300 transition-colors font-medium">
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
              Get in
            </span>
            <br />
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
              Touch
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Have questions, feedback, or need help? We're here to assist you on your journey to creating the perfect resume.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 backdrop-blur-md rounded-2xl p-8 border border-white/10">
              <h2 className="text-3xl font-bold text-white mb-6">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-white font-medium mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent backdrop-blur-sm"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-white font-medium mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent backdrop-blur-sm"
                    placeholder="Enter your email address"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-white font-medium mb-2">
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent backdrop-blur-sm"
                  >
                    <option value="">Select a subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="support">Technical Support</option>
                    <option value="feedback">Feedback</option>
                    <option value="bug">Bug Report</option>
                    <option value="feature">Feature Request</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-white font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent backdrop-blur-sm resize-none"
                    placeholder="Tell us how we can help you..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all transform hover:scale-105 shadow-lg flex items-center justify-center"
                >
                  <FaPaperPlane className="mr-2" />
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div className="bg-gradient-to-br from-pink-900/30 to-purple-900/30 backdrop-blur-md rounded-2xl p-8 border border-white/10">
                <h2 className="text-3xl font-bold text-white mb-6">Contact Information</h2>
                <div className="space-y-6">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mr-4">
                      <FaEnvelope className="text-white text-xl" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold">Email</h3>
                      <p className="text-gray-300">support@atsresume.com</p>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mr-4">
                      <FaPhone className="text-white text-xl" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold">Phone</h3>
                      <p className="text-gray-300">+1 (555) 123-4567</p>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mr-4">
                      <FaMapMarkerAlt className="text-white text-xl" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold">Address</h3>
                      <p className="text-gray-300">San Francisco, CA, USA</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-white/10">
                  <h3 className="text-white font-semibold mb-4">Follow Us</h3>
                  <div className="flex space-x-4">
                    <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-gray-400 hover:text-purple-400 hover:bg-purple-600/20 transition-all">
                      <FaGithub className="text-lg" />
                    </a>
                    <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-gray-400 hover:text-purple-400 hover:bg-purple-600/20 transition-all">
                      <FaLinkedin className="text-lg" />
                    </a>
                    <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-gray-400 hover:text-purple-400 hover:bg-purple-600/20 transition-all">
                      <FaTwitter className="text-lg" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Quick Help */}
              <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 backdrop-blur-md rounded-2xl p-8 border border-white/10">
                <h2 className="text-2xl font-bold text-white mb-6">Quick Help</h2>
                <div className="space-y-4">
                  <div className="flex items-center p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors cursor-pointer">
                    <FaQuestionCircle className="text-purple-400 text-xl mr-4" />
                    <div>
                      <h3 className="text-white font-medium">FAQ</h3>
                      <p className="text-gray-400 text-sm">Find answers to common questions</p>
                    </div>
                  </div>

                  <div className="flex items-center p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors cursor-pointer">
                    <FaLifeRing className="text-pink-400 text-xl mr-4" />
                    <div>
                      <h3 className="text-white font-medium">Help Center</h3>
                      <p className="text-gray-400 text-sm">Browse our help documentation</p>
                    </div>
                  </div>

                  <div className="flex items-center p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors cursor-pointer">
                    <FaBug className="text-purple-400 text-xl mr-4" />
                    <div>
                      <h3 className="text-white font-medium">Report a Bug</h3>
                      <p className="text-gray-400 text-sm">Help us improve by reporting issues</p>
                    </div>
                  </div>
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
            <p className="text-xl text-gray-300">Quick answers to common questions</p>
          </div>
          
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 backdrop-blur-md rounded-xl p-6 border border-white/10">
              <h3 className="text-xl font-semibold text-white mb-3">How do I get started with ATSResume?</h3>
              <p className="text-gray-300">Simply click on "Get Started" or "Try Demo" to begin creating your resume. No registration required!</p>
            </div>

            <div className="bg-gradient-to-br from-pink-900/20 to-purple-900/20 backdrop-blur-md rounded-xl p-6 border border-white/10">
              <h3 className="text-xl font-semibold text-white mb-3">Is my data secure?</h3>
              <p className="text-gray-300">Yes! Your data is stored locally in your browser and you can download backups. We don't store your personal information on our servers.</p>
            </div>

            <div className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 backdrop-blur-md rounded-xl p-6 border border-white/10">
              <h3 className="text-xl font-semibold text-white mb-3">Can I use ATSResume on mobile devices?</h3>
              <p className="text-gray-300">Absolutely! ATSResume is fully responsive and works great on smartphones, tablets, and desktop computers.</p>
            </div>

            <div className="bg-gradient-to-br from-pink-900/20 to-purple-900/20 backdrop-blur-md rounded-xl p-6 border border-white/10">
              <h3 className="text-xl font-semibold text-white mb-3">How do I report a bug or request a feature?</h3>
              <p className="text-gray-300">Use the contact form above with "Bug Report" or "Feature Request" as the subject, or reach out to us directly via email.</p>
            </div>

            <div className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 backdrop-blur-md rounded-xl p-6 border border-white/10">
              <h3 className="text-xl font-semibold text-white mb-3">Do you offer customer support?</h3>
              <p className="text-gray-300">Yes! We provide free support to all users. Contact us through the form above or email us directly for assistance.</p>
            </div>
          </div>
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

export default ContactPage;