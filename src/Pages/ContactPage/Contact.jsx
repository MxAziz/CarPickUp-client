import React, { useState } from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaPaperPlane, FaCheckCircle } from 'react-icons/fa';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [focusedField, setFocusedField] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const contactInfo = [
    {
      icon: <FaPhone className="w-6 h-6" />,
      title: "Phone",
      details: ["+880 1234-567890", "+880 9876-543210"],
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: <FaEnvelope className="w-6 h-6" />,
      title: "Email",
      details: ["info@carpickup.com", "support@carpickup.com"],
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: <FaMapMarkerAlt className="w-6 h-6" />,
      title: "Office",
      details: ["123 Main Street, Dhaka", "Bangladesh - 1205"],
      color: "from-red-500 to-red-600"
    },
    {
      icon: <FaClock className="w-6 h-6" />,
      title: "Working Hours",
      details: ["Mon - Sat: 9AM - 8PM", "Sunday: 10AM - 6PM"],
      color: "from-green-500 to-green-600"
    }
  ];

  const locations = [
    { city: "Dhaka", address: "123 Main St, Gulshan", phone: "+880 1234-567890" },
    { city: "Chittagong", address: "456 Port Rd, Agrabad", phone: "+880 1234-567891" },
    { city: "Sylhet", address: "789 Tea Garden Rd", phone: "+880 1234-567892" }
  ];

  const socialLinks = [
    { icon: <FaFacebookF />, name: "Facebook", color: "hover:bg-blue-600" },
    { icon: <FaTwitter />, name: "Twitter", color: "hover:bg-sky-500" },
    { icon: <FaInstagram />, name: "Instagram", color: "hover:bg-pink-600" },
    { icon: <FaLinkedinIn />, name: "LinkedIn", color: "hover:bg-blue-700" }
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen mt-14 md:mt-16 bg-white dark:bg-[#232425] transition-colors duration-300">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-[#136b7a] to-[#0d4f5a] text-white py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Get In Touch</h1>
            <p className="text-xl text-gray-100 max-w-2xl mx-auto">
              We'd love to hear from you. Our team is always here to help with your car rental needs.
            </p>
          </div>
        </div>
      </div>

      {/* Contact Cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 relative z-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactInfo.map((info, index) => (
            <div
              key={index}
              className="bg-white dark:bg-[#2a2b2c] rounded-xl shadow-lg p-6 transform hover:-translate-y-2 transition-all duration-300 border border-gray-100 dark:border-gray-700"
            >
              <div className={`inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br ${info.color} text-white rounded-lg mb-4 shadow-lg`}>
                {info.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                {info.title}
              </h3>
              {info.details.map((detail, idx) => (
                <p key={idx} className="text-gray-600 dark:text-gray-400 text-sm">
                  {detail}
                </p>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white dark:bg-[#2a2b2c] rounded-2xl shadow-xl p-8 border border-gray-100 dark:border-gray-700">
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Send Us a Message</h2>
                <p className="text-gray-600 dark:text-gray-400">Fill out the form below and we'll get back to you as soon as possible</p>
              </div>

              {submitted ? (
                <div className="flex flex-col items-center justify-center py-12">
                  <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mb-4">
                    <FaCheckCircle className="w-12 h-12 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Message Sent!</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-center">Thank you for contacting us. We'll get back to you soon.</p>
                </div>
              ) : (
                <div className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="relative">
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('name')}
                        onBlur={() => setFocusedField('')}
                        required
                        className={`w-full px-4 py-3 bg-[#F3F4F6] dark:bg-[#1a1b1c] border-2 ${
                          focusedField === 'name' ? 'border-[#136b7a]' : 'border-transparent'
                        } rounded-lg focus:outline-none transition-all duration-300 text-gray-900 dark:text-white`}
                        placeholder="John Doe"
                      />
                    </div>

                    <div className="relative">
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('email')}
                        onBlur={() => setFocusedField('')}
                        required
                        className={`w-full px-4 py-3 bg-[#F3F4F6] dark:bg-[#1a1b1c] border-2 ${
                          focusedField === 'email' ? 'border-[#136b7a]' : 'border-transparent'
                        } rounded-lg focus:outline-none transition-all duration-300 text-gray-900 dark:text-white`}
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="relative">
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('phone')}
                        onBlur={() => setFocusedField('')}
                        className={`w-full px-4 py-3 bg-[#F3F4F6] dark:bg-[#1a1b1c] border-2 ${
                          focusedField === 'phone' ? 'border-[#136b7a]' : 'border-transparent'
                        } rounded-lg focus:outline-none transition-all duration-300 text-gray-900 dark:text-white`}
                        placeholder="+880 1234-567890"
                      />
                    </div>

                    <div className="relative">
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Subject *
                      </label>
                      <select
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('subject')}
                        onBlur={() => setFocusedField('')}
                        required
                        className={`w-full px-4 py-3 bg-[#F3F4F6] dark:bg-[#1a1b1c] border-2 ${
                          focusedField === 'subject' ? 'border-[#136b7a]' : 'border-transparent'
                        } rounded-lg focus:outline-none transition-all duration-300 text-gray-900 dark:text-white`}
                      >
                        <option value="">Select a subject</option>
                        <option value="booking">Booking Inquiry</option>
                        <option value="support">Customer Support</option>
                        <option value="partnership">Partnership</option>
                        <option value="feedback">Feedback</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div className="relative">
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('message')}
                      onBlur={() => setFocusedField('')}
                      required
                      rows="5"
                      className={`w-full px-4 py-3 bg-[#F3F4F6] dark:bg-[#1a1b1c] border-2 ${
                        focusedField === 'message' ? 'border-[#136b7a]' : 'border-transparent'
                      } rounded-lg focus:outline-none transition-all duration-300 text-gray-900 dark:text-white resize-none`}
                      placeholder="Tell us more about your inquiry..."
                    ></textarea>
                  </div>

                  <button
                    onClick={handleSubmit}
                    className="w-full bg-gradient-to-r from-[#136b7a] to-[#0d4f5a] text-white py-4 rounded-lg font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <FaPaperPlane className="w-5 h-5" />
                    Send Message
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Office Locations */}
            <div className="bg-white dark:bg-[#2a2b2c] rounded-2xl shadow-xl p-6 border border-gray-100 dark:border-gray-700">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Our Locations</h3>
              <div className="space-y-4">
                {locations.map((location, index) => (
                  <div
                    key={index}
                    className="p-4 bg-[#F3F4F6] dark:bg-[#1a1b1c] rounded-lg hover:bg-gray-200 dark:hover:bg-[#232425] transition-colors duration-300 cursor-pointer"
                  >
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">{location.city}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">{location.address}</p>
                    <p className="text-sm text-[#136b7a] font-medium">{location.phone}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-white dark:bg-[#2a2b2c] rounded-2xl shadow-xl p-6 border border-gray-100 dark:border-gray-700">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Follow Us</h3>
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social, index) => (
                  <button
                    key={index}
                    className={`flex items-center justify-center gap-2 p-4 bg-[#F3F4F6] dark:bg-[#1a1b1c] rounded-lg ${social.color} hover:text-white transition-all duration-300 text-gray-700 dark:text-gray-300`}
                  >
                    <span className="text-xl">{social.icon}</span>
                    <span className="font-medium text-sm">{social.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Quick Info */}
            <div className="bg-gradient-to-br from-[#136b7a] to-[#0d4f5a] rounded-2xl shadow-xl p-6 text-white">
              <h3 className="text-xl font-bold mb-4">Need Immediate Help?</h3>
              <p className="text-gray-100 mb-4">Our customer support team is available 24/7 to assist you.</p>
              <button className="w-full bg-white text-[#136b7a] py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300">
                Call Now: +880 1234-567890
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="bg-[#F3F4F6] dark:bg-[#1a1b1c] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Visit Our Main Office</h2>
            <p className="text-gray-600 dark:text-gray-400">Find us on the map below</p>
          </div>
          <div className="bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600 rounded-2xl overflow-hidden shadow-xl h-96 flex items-center justify-center relative">
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-[#136b7a] rounded-full blur-2xl"></div>
              <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-[#136b7a] rounded-full blur-2xl"></div>
            </div>
            <div className="text-center z-10">
              <FaMapMarkerAlt className="w-16 h-16 text-[#136b7a] mx-auto mb-4" />
              <p className="text-gray-600 dark:text-gray-400 text-lg font-medium">123 Main Street, Dhaka, Bangladesh</p>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Teaser */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-gradient-to-r from-[#136b7a] to-[#0d4f5a] rounded-2xl p-8 md:p-12 text-center text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-80 h-80 bg-white rounded-full blur-3xl"></div>
          </div>
          <div className="relative z-10">
            <h2 className="text-3xl font-bold mb-4">Have Questions?</h2>
            <p className="text-xl text-gray-100 mb-6 max-w-2xl mx-auto">
              Check out our FAQ section for quick answers to common questions
            </p>
            <button className="bg-white text-[#136b7a] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:-translate-y-1">
              View FAQs
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}