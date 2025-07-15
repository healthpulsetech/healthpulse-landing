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
              <img src={logo.src} alt="HealthPulse Logo" className="w-10 h-10" />
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
              <li>Email: info@healthpulse.com</li>
              <li>Contact: +250788667766</li>
              <li>KN 4 Ave</li>
            </ul>
          </div>
  
          {/* Right Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Product</h3>
            <ul className="text-sm space-y-2 text-gray-300">
              <li><a href="#">System settings</a></li>
              <li><a href="#">Help center</a></li>
              <li><a href="#">Ask for questions</a></li>
              <li><a href="#">Communications</a></li>
              <li><a href="#">Account management</a></li>
            </ul>
          </div>
        </div>
  
        {/* Bottom line */}
        <div className="mt-12 border-t border-gray-700 pt-4 text-center text-sm text-gray-400">
          HealthPulse © {new Date().getFullYear()}
        </div>
      </footer>
    );
  }
  