import React from 'react';
import Link from 'next/link';
import { 
  FaCheckCircle,
  FaArrowRight,
  FaPlay,
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaMicrophone,
  FaEdit,
  FaPrint,
  FaCloudUploadAlt,
  FaCloudDownloadAlt
} from 'react-icons/fa';
import { 
  MdSpeed, 
  MdSecurity, 
  MdCloudDownload,
  MdMobileFriendly,
  MdTextFormat,
  MdAutorenew,
  MdDragIndicator
} from 'react-icons/md';

import { FiMove } from 'react-icons/fi'; // ✅ Add this line

const FeaturesPage = () => {
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
              <Link href="/features" className="text-white hover:text-purple-300 transition-colors font-medium">
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
              <Link href="/resume-builder" className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-full hover:from-purple-700 hover:to-pink-700 transition-all transform hover:scale-105">
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
              Powerful Features for
            </span>
            <br />
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
              Perfect Resumes
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Discover all the advanced features that make ATSResume the best choice for creating professional, ATS-optimized resumes.
          </p>
        </div>
      </section>

      {/* Core Features */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Core Features</h2>
            <p className="text-xl text-gray-300">Everything you need to create the perfect resume</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-purple-900/50 to-pink-900/50 backdrop-blur-md rounded-2xl p-8 border border-white/10 hover:border-purple-400/50 transition-all group">
              <MdSpeed className="text-5xl text-purple-400 mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-semibold text-white mb-4">ATS Optimization</h3>
              <p className="text-gray-300 mb-4">Our advanced algorithms ensure your resume passes through Applicant Tracking Systems with a 95% success rate.</p>
              <ul className="text-sm text-gray-400 space-y-2">
                <li className="flex items-center"><FaCheckCircle className="text-green-400 mr-2" /> Keyword optimization</li>
                <li className="flex items-center"><FaCheckCircle className="text-green-400 mr-2" /> Format compatibility</li>
                <li className="flex items-center"><FaCheckCircle className="text-green-400 mr-2" /> Structure analysis</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-pink-900/50 to-purple-900/50 backdrop-blur-md rounded-2xl p-8 border border-white/10 hover:border-pink-400/50 transition-all group">
              <FiMove className="text-5xl text-pink-400 mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-semibold text-white mb-4">Drag & Drop Interface</h3>
              <p className="text-gray-300 mb-4">Easily reorder sections, work experience, and projects with our intuitive drag-and-drop functionality.</p>
              <ul className="text-sm text-gray-400 space-y-2">
                <li className="flex items-center"><FaCheckCircle className="text-green-400 mr-2" /> Reorder sections</li>
                <li className="flex items-center"><FaCheckCircle className="text-green-400 mr-2" /> Move experiences</li>
                <li className="flex items-center"><FaCheckCircle className="text-green-400 mr-2" /> Organize projects</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-purple-900/50 to-pink-900/50 backdrop-blur-md rounded-2xl p-8 border border-white/10 hover:border-purple-400/50 transition-all group">
              <FaMicrophone className="text-5xl text-purple-400 mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-semibold text-white mb-4">Voice Input</h3>
              <p className="text-gray-300 mb-4">Speed up your resume creation with our advanced speech-to-text feature. Just speak and we'll type for you.</p>
              <ul className="text-sm text-gray-400 space-y-2">
                <li className="flex items-center"><FaCheckCircle className="text-green-400 mr-2" /> Real-time transcription</li>
                <li className="flex items-center"><FaCheckCircle className="text-green-400 mr-2" /> Multiple languages</li>
                <li className="flex items-center"><FaCheckCircle className="text-green-400 mr-2" /> Hands-free editing</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-pink-900/50 to-purple-900/50 backdrop-blur-md rounded-2xl p-8 border border-white/10 hover:border-pink-400/50 transition-all group">
              <MdTextFormat className="text-5xl text-pink-400 mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-semibold text-white mb-4">Rich Text Editing</h3>
              <p className="text-gray-300 mb-4">Format your content with bold, italic, underline, and alignment options for professional presentation.</p>
              <ul className="text-sm text-gray-400 space-y-2">
                <li className="flex items-center"><FaCheckCircle className="text-green-400 mr-2" /> Text formatting</li>
                <li className="flex items-center"><FaCheckCircle className="text-green-400 mr-2" /> Font sizing</li>
                <li className="flex items-center"><FaCheckCircle className="text-green-400 mr-2" /> Text alignment</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-purple-900/50 to-pink-900/50 backdrop-blur-md rounded-2xl p-8 border border-white/10 hover:border-purple-400/50 transition-all group">
              <FaPrint className="text-5xl text-purple-400 mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-semibold text-white mb-4">PDF Export</h3>
              <p className="text-gray-300 mb-4">Download your resume as a high-quality PDF that maintains formatting across all devices and platforms.</p>
              <ul className="text-sm text-gray-400 space-y-2">
                <li className="flex items-center"><FaCheckCircle className="text-green-400 mr-2" /> High-quality PDF</li>
                <li className="flex items-center"><FaCheckCircle className="text-green-400 mr-2" /> Print-ready format</li>
                <li className="flex items-center"><FaCheckCircle className="text-green-400 mr-2" /> Universal compatibility</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-pink-900/50 to-purple-900/50 backdrop-blur-md rounded-2xl p-8 border border-white/10 hover:border-pink-400/50 transition-all group">
              <MdMobileFriendly className="text-5xl text-pink-400 mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-semibold text-white mb-4">Mobile Responsive</h3>
              <p className="text-gray-300 mb-4">Create and edit your resume on any device. Our platform works seamlessly on desktop, tablet, and mobile.</p>
              <ul className="text-sm text-gray-400 space-y-2">
                <li className="flex items-center"><FaCheckCircle className="text-green-400 mr-2" /> Cross-device sync</li>
                <li className="flex items-center"><FaCheckCircle className="text-green-400 mr-2" /> Touch-friendly interface</li>
                <li className="flex items-center"><FaCheckCircle className="text-green-400 mr-2" /> Responsive design</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Advanced Features */}
      <section className="py-16 bg-black/20 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Advanced Features</h2>
            <p className="text-xl text-gray-300">Professional tools for power users</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 backdrop-blur-md rounded-2xl p-8 border border-white/10">
              <div className="flex items-center mb-6">
                <FaCloudUploadAlt className="text-4xl text-purple-400 mr-4" />
                <h3 className="text-2xl font-semibold text-white">Data Backup & Restore</h3>
              </div>
              <p className="text-gray-300 mb-6">Never lose your work with our comprehensive backup system. Save your resume data and restore it anytime.</p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/5 rounded-lg p-4">
                  <FaCloudUploadAlt className="text-2xl text-purple-400 mb-2" />
                  <h4 className="text-white font-medium mb-1">Upload Data</h4>
                  <p className="text-sm text-gray-400">Restore from JSON backup</p>
                </div>
                <div className="bg-white/5 rounded-lg p-4">
                  <FaCloudDownloadAlt className="text-2xl text-pink-400 mb-2" />
                  <h4 className="text-white font-medium mb-1">Download Data</h4>
                  <p className="text-sm text-gray-400">Save as JSON backup</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-pink-900/30 to-purple-900/30 backdrop-blur-md rounded-2xl p-8 border border-white/10">
              <div className="flex items-center mb-6">
                <FaEdit className="text-4xl text-pink-400 mr-4" />
                <h3 className="text-2xl font-semibold text-white">Live Preview Editing</h3>
              </div>
              <p className="text-gray-300 mb-6">See your changes in real-time with our live preview feature. Edit content directly in the preview for instant results.</p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/5 rounded-lg p-4">
                  <MdAutorenew className="text-2xl text-purple-400 mb-2" />
                  <h4 className="text-white font-medium mb-1">Real-time Updates</h4>
                  <p className="text-sm text-gray-400">Instant preview changes</p>
                </div>
                <div className="bg-white/5 rounded-lg p-4">
                  <FaEdit className="text-2xl text-pink-400 mb-2" />
                  <h4 className="text-white font-medium mb-1">Direct Editing</h4>
                  <p className="text-sm text-gray-400">Edit in preview mode</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Comparison */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Why Choose ATSResume?</h2>
            <p className="text-xl text-gray-300">See how we compare to other resume builders</p>
          </div>
          
          <div className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 backdrop-blur-md rounded-2xl border border-white/10 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gradient-to-r from-purple-600/20 to-pink-600/20">
                  <tr>
                    <th className="px-6 py-4 text-left text-white font-semibold">Feature</th>
                    <th className="px-6 py-4 text-center text-white font-semibold">ATSResume</th>
                    <th className="px-6 py-4 text-center text-gray-400 font-semibold">Others</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/10">
                  <tr>
                    <td className="px-6 py-4 text-gray-300">ATS Optimization</td>
                    <td className="px-6 py-4 text-center"><FaCheckCircle className="text-green-400 mx-auto text-xl" /></td>
                    <td className="px-6 py-4 text-center text-gray-500">Limited</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-gray-300">Voice Input</td>
                    <td className="px-6 py-4 text-center"><FaCheckCircle className="text-green-400 mx-auto text-xl" /></td>
                    <td className="px-6 py-4 text-center text-red-400">✗</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-gray-300">Drag & Drop</td>
                    <td className="px-6 py-4 text-center"><FaCheckCircle className="text-green-400 mx-auto text-xl" /></td>
                    <td className="px-6 py-4 text-center text-red-400">✗</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-gray-300">Free Forever</td>
                    <td className="px-6 py-4 text-center"><FaCheckCircle className="text-green-400 mx-auto text-xl" /></td>
                    <td className="px-6 py-4 text-center text-red-400">Paid</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-gray-300">Mobile Responsive</td>
                    <td className="px-6 py-4 text-center"><FaCheckCircle className="text-green-400 mx-auto text-xl" /></td>
                    <td className="px-6 py-4 text-center text-gray-500">Basic</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-900/30 to-pink-900/30 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Experience These Features?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Start building your professional resume today with all these powerful features at your fingertips.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/resume-builder" className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-10 py-4 rounded-full text-xl font-semibold hover:from-purple-700 hover:to-pink-700 transition-all transform hover:scale-105 shadow-xl inline-flex items-center justify-center">
              Start Building Now
              <FaArrowRight className="ml-2" />
            </Link>
            <Link href="/demo" className="border border-purple-400 text-purple-300 px-10 py-4 rounded-full text-xl font-semibold hover:bg-purple-400 hover:text-white transition-all inline-flex items-center justify-center">
              <FaPlay className="mr-2" />
              Try Demo First
            </Link>
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

export default FeaturesPage;