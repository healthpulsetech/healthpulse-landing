// app/page.tsx
'use client';

import { useState } from 'react';
import type { JSX } from 'react';
import { ChevronLeft, ChevronRight, Heart, Phone, Stethoscope, Activity, Users, Database, Settings } from 'lucide-react';

interface Service {
  icon: string;
  title: string;
  description: string;
}

import type { ReactElement } from 'react';

interface Feature {
  icon: ReactElement;
  title: string;
  description: string;
}

export default function HealthPulsePage(): JSX.Element {
  const [currentService, setCurrentService] = useState<number>(0);

  const services: Service[] = [
    {
      icon: '🤖',
      title: 'Chat with Virtual Health Assistant',
      description: 'Ask health questions in your language (Kinyarwanda, French, or English) via text or voice.'
    },
    {
      icon: '💊',
      title: 'Get Medication Reminders',
      description: 'Always receive timely reminders to take medicine with accurate doses.'
    },
    {
      icon: '📱',
      title: 'Use Health Services without Internet',
      description: 'Get access to key features using USSD codes, even without a smartphone'
    }
  ];

  const features: Feature[] = [
    {
      icon: <Activity className="w-8 h-8" />,
      title: 'Symptom Checker',
      description: 'Suggest possible health conditions and provides preventive health tips and emergency hotlines'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Digital Tools for CHWs',
      description: 'Helps Community Health Workers track patients and report issues easily'
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: 'Real-Time Hospital Data',
      description: 'See queue updates, available medicines, and services near you'
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: 'Admin Dashboard for Clinics',
      description: 'Hospitals manage appointments, medical records and inventory all in one place'
    }
  ];

  const nextService = (): void => {
    setCurrentService((prev) => (prev + 1) % services.length);
  };

  const prevService = (): void => {
    setCurrentService((prev) => (prev - 1 + services.length) % services.length);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
                <Heart className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">HealthPulse</span>
            </div>
            
            <nav className="hidden md:flex space-x-8">
              <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">Home</a>
              <a href="#services" className="text-gray-700 hover:text-blue-600 transition-colors">Services</a>
              <a href="#features" className="text-gray-700 hover:text-blue-600 transition-colors">Features</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">Contact us</a>
            </nav>

            <div className="flex items-center space-x-4">
              <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors">
                Sign up
              </button>
              <button className="text-gray-700 hover:text-blue-600 transition-colors">
                Login
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold text-gray-900 mb-4">
                Welcome to <span className="text-blue-600">HealthPulse</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                We empower individuals and healthcare workers with intelligent, locally adaptable tools that enhance preventive care, streamline health services, and improve patient outcomes in underserved communities.
              </p>
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-medium hover:bg-blue-700 transition-colors">
                Get Started
              </button>
            </div>
            <div className="relative">
              <div className="bg-white rounded-lg shadow-xl p-8">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <Stethoscope className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <div className="h-3 bg-gray-200 rounded w-32 mb-2"></div>
                    <div className="h-2 bg-gray-100 rounded w-24"></div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="h-2 bg-blue-200 rounded w-full"></div>
                  <div className="h-2 bg-blue-100 rounded w-3/4"></div>
                  <div className="h-2 bg-gray-100 rounded w-1/2"></div>
                </div>
                <div className="mt-6 bg-blue-600 text-white p-4 rounded">
                  <div className="flex items-center justify-center">
                    <div className="w-8 h-8 bg-white bg-opacity-30 rounded-full flex items-center justify-center mr-3">
                      <Heart className="w-4 h-4" />
                    </div>
                    <span className="text-sm">Health Assistant Active</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
            Our <span className="text-blue-600">Services</span>
          </h2>
          
          <div className="relative">
            <div className="bg-white rounded-xl shadow-lg p-8 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-6xl mb-6">{services[currentService].icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {services[currentService].title}
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  {services[currentService].description}
                </p>
              </div>
            </div>

            <div className="flex justify-center mt-8 space-x-4">
              <button 
                onClick={prevService}
                className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
                aria-label="Previous service"
              >
                <ChevronLeft className="w-5 h-5 text-gray-600" />
              </button>
              <button 
                onClick={nextService}
                className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
                aria-label="Next service"
              >
                <ChevronRight className="w-5 h-5 text-gray-600" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section id="features" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
            Key <span className="text-blue-600">Features</span>
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="flex justify-center">
              <div className="flex space-x-8">
                {/* Healthcare Worker Illustrations */}
                <div className="text-center">
                  <div className="w-24 h-24 bg-blue-600 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                      <Heart className="w-6 h-6 text-blue-600" />
                    </div>
                  </div>
                  <div className="w-16 h-20 bg-blue-900 rounded-t-full mx-auto"></div>
                </div>
                <div className="text-center">
                  <div className="w-24 h-24 bg-gray-300 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <Stethoscope className="w-8 h-8 text-gray-600" />
                  </div>
                  <div className="w-16 h-20 bg-white border-2 border-gray-300 rounded-t-full mx-auto"></div>
                </div>
                <div className="text-center">
                  <div className="w-24 h-24 bg-gray-600 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <div className="w-6 h-6 bg-white rounded"></div>
                  </div>
                  <div className="w-16 h-20 bg-gray-800 rounded-t-full mx-auto"></div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="text-blue-600 mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            Contact Us
          </h2>

          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="John Doe"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="john.doe@gmail.com"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                Your message
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                placeholder="Your message"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none resize-none transition-colors"
                required
              ></textarea>
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center space-x-2 mb-8">
            <div className="w-8 h-8 bg-white rounded flex items-center justify-center">
              <Heart className="w-5 h-5 text-blue-600" />
            </div>
            <span className="text-xl font-bold">HealthPulse</span>
          </div>
          <div className="text-center text-blue-200">
            <p>&copy; 2025 HealthPulse. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Floating Action Buttons */}
      <div className="fixed bottom-6 right-6 flex flex-col space-y-3">
        <button 
          className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center shadow-lg hover:bg-blue-700 transition-colors"
          aria-label="Call support"
        >
          <Phone className="w-6 h-6 text-white" />
        </button>
        <button 
          className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center shadow-lg hover:bg-gray-700 transition-colors"
          aria-label="Help"
        >
          <span className="text-white text-xs">✋</span>
        </button>
        <button 
          className="w-12 h-12 bg-gray-600 rounded-full flex items-center justify-center shadow-lg hover:bg-gray-500 transition-colors"
          aria-label="Chat"
        >
          <span className="text-white text-lg">💬</span>
        </button>
      </div>
    </div>
  );
}