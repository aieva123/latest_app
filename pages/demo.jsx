import React from 'react';
import Link from 'next/link';
import { 
  FaPlay, 
  FaArrowRight,
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaCheckCircle,
  FaUser,
  FaBriefcase,
  FaGraduationCap,
  FaCode,
  FaLanguage,
  FaCertificate
} from 'react-icons/fa';
import { 
  MdSpeed, 
  MdSecurity, 
  MdMobileFriendly 
} from 'react-icons/md';

const DemoPage = () => {
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
              <Link href="/demo" className="text-white hover:text-purple-300 transition-colors font-medium">
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
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent">
              See ATSResume in
            </span>
            <br />
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
              Action
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Experience the power of our resume builder with this interactive demo. See how easy it is to create a professional, ATS-optimized resume.
          </p>
          <Link href="/resume-builder" className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-10 py-4 rounded-full text-xl font-semibold hover:from-purple-700 hover:to-pink-700 transition-all transform hover:scale-105 shadow-xl inline-flex items-center">
            <FaPlay className="mr-3" />
            Try Demo Now
          </Link>
        </div>
      </section>

      {/* Demo Preview */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 backdrop-blur-md rounded-3xl border border-white/10 overflow-hidden">
            {/* Demo Header */}
            <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 p-6 border-b border-white/10">
              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-bold text-white">Resume Builder Interface</h3>
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                </div>
              </div>
            </div>

            {/* Demo Content */}
            <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[600px]">
              {/* Form Side */}
              <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 p-8 border-r border-white/10">
                <h4 className="text-xl font-semibold text-white mb-6 flex items-center">
                  <FaUser className="mr-3 text-purple-400" />
                  Form Fields
                </h4>
                
                <div className="space-y-6">
                  <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                    <h5 className="text-white font-medium mb-3 flex items-center">
                      <FaUser className="mr-2 text-purple-400" />
                      Personal Information
                    </h5>
                    <div className="space-y-2">
                      <div className="bg-white/10 rounded-lg p-2 text-sm text-gray-300">Marcus Hall</div>
                      <div className="bg-white/10 rounded-lg p-2 text-sm text-gray-300">Developer</div>
                      <div className="bg-white/10 rounded-lg p-2 text-sm text-gray-300">+1-555-0100</div>
                    </div>
                  </div>

                  <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                    <h5 className="text-white font-medium mb-3 flex items-center">
                      <FaBriefcase className="mr-2 text-pink-400" />
                      Work Experience
                    </h5>
                    <div className="space-y-2">
                      <div className="bg-white/10 rounded-lg p-2 text-sm text-gray-300">Torph TTC - Developer</div>
                      <div className="bg-white/10 rounded-lg p-2 text-sm text-gray-300">Reilty Group - Frontend Developer</div>
                    </div>
                  </div>

                  <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                    <h5 className="text-white font-medium mb-3 flex items-center">
                      <FaCode className="mr-2 text-purple-400" />
                      Skills
                    </h5>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-purple-600/30 text-purple-200 px-2 py-1 rounded text-xs">JavaScript</span>
                      <span className="bg-pink-600/30 text-pink-200 px-2 py-1 rounded text-xs">Python</span>
                      <span className="bg-purple-600/30 text-purple-200 px-2 py-1 rounded text-xs">React</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Preview Side */}
              <div className="bg-white p-8">
                <h4 className="text-xl font-semibold text-gray-800 mb-6">Live Preview</h4>
                
                <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                  {/* Resume Header */}
                  <div className="text-center mb-6">
                    <h1 className="text-2xl font-bold text-gray-900 mb-1">MARCUS HALL</h1>
                    <p className="text-lg text-gray-700 mb-2">Developer</p>
                    <div className="text-sm text-gray-600 space-y-1">
                      <p>+1-555-0100 • beddylea@gmail.com</p>
                      <p>San Francisco, CA</p>
                    </div>
                  </div>

                  {/* Summary */}
                  <div className="mb-4">
                    <h2 className="text-lg font-bold text-gray-900 border-b-2 border-gray-300 mb-2">Summary</h2>
                    <p className="text-sm text-gray-700">Resourceful Developer with 11 years of experience in designing and developing user interfaces...</p>
                  </div>

                  {/* Experience */}
                  <div className="mb-4">
                    <h2 className="text-lg font-bold text-gray-900 border-b-2 border-gray-300 mb-2">Work Experience</h2>
                    <div className="mb-3">
                      <div className="flex justify-between items-start">
                        <p className="font-bold text-gray-900">Torph TTC</p>
                        <p className="text-sm text-gray-600">Feb 2023 - Feb 2023</p>
                      </div>
                      <p className="text-gray-700">Developer</p>
                    </div>
                  </div>

                  {/* Skills */}
                  <div>
                    <h2 className="text-lg font-bold text-gray-900 border-b-2 border-gray-300 mb-2">Technical Skills</h2>
                    <p className="text-sm text-gray-700">JavaScript, Python, Web Services, C++, HTML5, CSS, SQL</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Demo Features */}
      <section className="py-16 bg-black/20 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">What You'll Experience</h2>
            <p className="text-xl text-gray-300">Try these powerful features in our interactive demo</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-purple-900/50 to-pink-900/50 backdrop-blur-md rounded-2xl p-6 border border-white/10 text-center">
              <MdSpeed className="text-4xl text-purple-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">Real-time Preview</h3>
              <p className="text-gray-300">See your changes instantly as you type. No waiting, no refreshing.</p>
            </div>
            
            <div className="bg-gradient-to-br from-pink-900/50 to-purple-900/50 backdrop-blur-md rounded-2xl p-6 border border-white/10 text-center">
              <MdSecurity className="text-4xl text-pink-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">ATS Optimization</h3>
              <p className="text-gray-300">Experience how our system optimizes your resume for ATS systems.</p>
            </div>
            
            <div className="bg-gradient-to-br from-purple-900/50 to-pink-900/50 backdrop-blur-md rounded-2xl p-6 border border-white/10 text-center">
              <MdMobileFriendly className="text-4xl text-purple-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">Drag & Drop</h3>
              <p className="text-gray-300">Try our intuitive drag-and-drop interface for reordering sections.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Demo Steps */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">How It Works</h2>
            <p className="text-xl text-gray-300">Follow these simple steps in the demo</p>
          </div>
          
          <div className="space-y-8">
            <div className="flex items-start space-x-6">
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                1
              </div>
              <div className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 backdrop-blur-md rounded-xl p-6 border border-white/10 flex-1">
                <h3 className="text-xl font-semibold text-white mb-2 flex items-center">
                  <FaUser className="mr-3 text-purple-400" />
                  Fill Personal Information
                </h3>
                <p className="text-gray-300">Start by entering your basic information like name, contact details, and professional title.</p>
              </div>
            </div>

            <div className="flex items-start space-x-6">
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                2
              </div>
              <div className="bg-gradient-to-br from-pink-900/20 to-purple-900/20 backdrop-blur-md rounded-xl p-6 border border-white/10 flex-1">
                <h3 className="text-xl font-semibold text-white mb-2 flex items-center">
                  <FaBriefcase className="mr-3 text-pink-400" />
                  Add Work Experience
                </h3>
                <p className="text-gray-300">Include your work history with companies, positions, and key achievements that showcase your value.</p>
              </div>
            </div>

            <div className="flex items-start space-x-6">
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                3
              </div>
              <div className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 backdrop-blur-md rounded-xl p-6 border border-white/10 flex-1">
                <h3 className="text-xl font-semibold text-white mb-2 flex items-center">
                  <FaCode className="mr-3 text-purple-400" />
                  List Your Skills
                </h3>
                <p className="text-gray-300">Add technical skills, soft skills, and any additional competencies relevant to your target role.</p>
              </div>
            </div>

            <div className="flex items-start space-x-6">
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                4
              </div>
              <div className="bg-gradient-to-br from-pink-900/20 to-purple-900/20 backdrop-blur-md rounded-xl p-6 border border-white/10 flex-1">
                <h3 className="text-xl font-semibold text-white mb-2 flex items-center">
                  <FaArrowRight className="mr-3 text-pink-400" />
                  Download & Apply
                </h3>
                <p className="text-gray-300">Export your professional resume as a PDF and start applying to your dream jobs immediately.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-900/30 to-pink-900/30 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Try It Yourself?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Experience the full power of ATSResume with our interactive demo. No signup required!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/builder" className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-10 py-4 rounded-full text-xl font-semibold hover:from-purple-700 hover:to-pink-700 transition-all transform hover:scale-105 shadow-xl inline-flex items-center justify-center">
              <FaPlay className="mr-3" />
              Try Demo Now
            </Link>
            <Link href="/features" className="border border-purple-400 text-purple-300 px-10 py-4 rounded-full text-xl font-semibold hover:bg-purple-400 hover:text-white transition-all inline-flex items-center justify-center">
              Learn More Features
              <FaArrowRight className="ml-2" />
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

export default DemoPage;