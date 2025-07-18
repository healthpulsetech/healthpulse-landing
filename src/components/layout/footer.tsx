import {
    FaTwitter,
    FaInstagram,
    FaFacebookF,
    FaLinkedinIn,
  } from "react-icons/fa";
  import logo from "../../assets/logo.png";
  
  export default function Footer() {
    return (
      <footer className="bg-secondary text-white pt-12 pb-6 font-poppins">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-12">
          {/* Left Section */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src={logo.src} alt="HealthPulse Logo" className="w-20 h-20" />
              <h2 className="text-2xl font-bold">HealthPulse</h2>
            </div>
            <p className="text-sm text-gray-300 mb-6">
              We empower individuals and healthcare workers with intelligent,
              locally adaptable tools that enhance preventive care, streamline
              health services, and improve patient outcomes in underserved
              communities.
            </p>
            <div className="flex gap-4 text-white text-xl">
              <a href="#"><FaTwitter /></a>
              <a href="#"><FaInstagram /></a>
              <a href="#"><FaFacebookF /></a>
              <a href="#"><FaLinkedinIn /></a>
            </div>
          </div>
  
          {/* Middle Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Find us</h3>
            <ul className="text-sm space-y-2 text-gray-300">
              <li>Email: support@healthpulse.africa</li>
              <li>Contact: +250788667766</li>
              <li>Address: Kigali, Rwanda</li>
            </ul>
          </div>
  
          {/* Right Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">HealthPulse</h3>
            <ul className="text-sm space-y-2 text-gray-300">
              <li><a href="#features">Features</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#faq">Ask for questions</a></li>
              <li><a href="#contactus">Communications</a></li>
              <li><a href="#contactus">Contact us</a></li>
            </ul>
          </div>
        </div>
  
        {/* Bottom line */}
        <div className="mt-12 border-t border-white pt-4 text-center text-sm text-white">
          HealthPulse © {new Date().getFullYear()}
        </div>
      </footer>
    );
  }
  