"use client";
import { useState } from "react";
import { User, BookText, MessageCircle } from "lucide-react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    requestType: "demo",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    console.log("Form submitted:", formData);
    // Handle form submission here
  };

  return (
    <section id="contactus" className="scroll-mt-20">
    <div className=" bg-background flex items-center justify-center p-4 font-mono">
      <div className="w-full max-w-4xl bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="flex flex-col lg:flex-row">
          {/* Left side - Form */}
          <div className="w-full lg:w-3/5 p-8">
            <div className="max-w-sm mx-auto lg:max-w-none">
              <h2 className="text-2xl font-bold text-secondary mb-2">Contact us</h2>
              <p className="text-gray-600 mb-6 text-sm">
                Got a question about how our platform can help you? We have got
                the answers.
              </p>

              <div className="space-y-5">
                {/* Names */}
                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-2">
                    Names
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    <input
                      type="text"
                      name="firstName"
                      placeholder="First name"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2.5 text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors placeholder-gray-400"
                    />
                    <input
                      type="text"
                      name="lastName"
                      placeholder="Last name"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2.5 text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors placeholder-gray-400"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="example@company.com"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2.5 text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors placeholder-gray-400"
                  />
                </div>

                {/* How can we help */}
                <div>
                  <label
                    htmlFor="requestType"
                    className="block text-xs font-medium text-gray-700 mb-2"
                  >
                    How can we help?
                  </label>
                  <select
                    id="requestType"
                    name="requestType"
                    value={formData.requestType}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2.5 text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors bg-white"
                  >
                    <option value="demo">Request Demo</option>
                    <option value="support">Support</option>
                    <option value="partnership">Partnership</option>
                    <option value="general">General Inquiry</option>
                  </select>
                </div>

                {/* Comments */}
                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-2">
                    Comments
                  </label>
                  <textarea
                    name="message"
                    placeholder="Your message here..."
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={3}
                    className="w-full px-4 py-2.5 text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors resize-none placeholder-gray-400"
                  />
                </div>

                {/* Submit Button */}
                <button
                  onClick={handleSubmit}
                  className="w-full bg-secondary hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 text-sm"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>

          {/* Right side - Info section */}
          <div className="hidden lg:block lg:w-2/5 bg-secondary text-white p-6 flex flex-col justify-center">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="p-2 bg-white bg-opacity-20 rounded-lg flex-shrink-0">
                  <User className="w-4 h-4 text-secondary" />
                </div>
                <div>
                  <p className="font-medium text-sm">
                    Learn more about our product
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 bg-white bg-opacity-20 rounded-lg flex-shrink-0">
                  <BookText className="w-4 h-4 text-secondary" />
                </div>
                <div>
                  <p className="font-medium text-sm">
                    Check out our support center
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 bg-white bg-opacity-20 rounded-lg flex-shrink-0">
                  <MessageCircle className="w-4 h-4 text-secondary" />
                </div>
                <div>
                  <p className="font-medium text-sm">
                    We are growing fast! Interested in working with us?
                  </p>
                  <p className="text-blue-100 mt-1 text-xs">
                    team@healthpulse.africa
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </section>
  );
};

export default ContactUs;