import React, { useState } from 'react';
import { Person, Email, Call, Sms, Close, CheckCircle, Send } from "@mui/icons-material";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  const [messageType, setMessageType] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  const [focusedField, setFocusedField] = useState('');

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async () => {
    if (validateForm()) {
      setIsLoading(true);
      setSubmitMessage('');
      setMessageType('');
      try {
        const response = await fetch('https://prakash-portfolio-backend.vercel.app/api/contact', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });
        const data = await response.json();
        if (response.ok) {
          setSubmitMessage(data.message);
          setMessageType('success');
          setShowPopup(true);
          setFormData({ name: '', email: '', phone: '', message: '' });
        } else {
          setSubmitMessage(data.message || 'Failed to send message. Please try again.');
          setMessageType('error');
        }
      } catch (error) {
        setSubmitMessage('An error occurred. Please try again.');
        setMessageType('error');
      } finally {
        setIsLoading(false);
      }
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && e.target.tagName !== 'TEXTAREA') {
      e.preventDefault();
      handleSubmit();
    }
  };

  return (
    <div id="contact-form" className="w-full max-w-xl mx-auto p-8">
      <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
        {/* Header Section - Updated to blue gradient */}
        <div className="px-8 py-10 text-center" style={{
          background: 'linear-gradient(135deg, #4285F4 0%, #1a73e8 100%)'
        }}>
          <h2 className="text-3xl font-bold text-white mb-2">Get in Touch</h2>
          <p className="text-blue-100 text-sm">I'd love to hear from you. Send me a message!</p>
        </div>

        {/* Form Section */}
        <div className="p-8">
          <div className="space-y-6">
            {/* Name Field */}
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Full Name <span className="text-red-500">*</span>
              </label>
              <div className={`relative transition-all duration-200 ${
                focusedField === 'name' ? 'transform scale-[1.01]' : ''
              }`}>
                <div className={`flex items-center gap-3 px-4 py-3.5 bg-gray-50 border-2 rounded-xl transition-all duration-200 ${
                  errors.name 
                    ? 'border-red-400 bg-red-50' 
                    : focusedField === 'name'
                    ? 'bg-white shadow-md'
                    : 'border-gray-200 hover:border-gray-300'
                }`} style={{
                  borderColor: focusedField === 'name' && !errors.name ? '#4285F4' : undefined
                }}>
                  <Person style={{
                    color: focusedField === 'name' ? '#4285F4' : '#9ca3af',
                    transition: 'color 0.2s'
                  }} />
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('name')}
                    onBlur={() => setFocusedField('')}
                    onKeyPress={handleKeyPress}
                    placeholder="Enter your full name"
                    className="w-full focus:outline-none bg-transparent text-gray-800 placeholder-gray-400"
                  />
                </div>
                {errors.name && (
                  <p className="text-red-500 text-xs mt-1.5 ml-1 flex items-center gap-1">
                    <span className="inline-block w-1 h-1 bg-red-500 rounded-full"></span>
                    {errors.name}
                  </p>
                )}
              </div>
            </div>

            {/* Email Field */}
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Email Address <span className="text-red-500">*</span>
              </label>
              <div className={`relative transition-all duration-200 ${
                focusedField === 'email' ? 'transform scale-[1.01]' : ''
              }`}>
                <div className={`flex items-center gap-3 px-4 py-3.5 bg-gray-50 border-2 rounded-xl transition-all duration-200 ${
                  errors.email 
                    ? 'border-red-400 bg-red-50' 
                    : focusedField === 'email'
                    ? 'bg-white shadow-md'
                    : 'border-gray-200 hover:border-gray-300'
                }`} style={{
                  borderColor: focusedField === 'email' && !errors.email ? '#4285F4' : undefined
                }}>
                  <Email style={{
                    color: focusedField === 'email' ? '#4285F4' : '#9ca3af',
                    transition: 'color 0.2s'
                  }} />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('email')}
                    onBlur={() => setFocusedField('')}
                    onKeyPress={handleKeyPress}
                    placeholder="your.email@example.com"
                    className="w-full focus:outline-none bg-transparent text-gray-800 placeholder-gray-400"
                  />
                </div>
                {errors.email && (
                  <p className="text-red-500 text-xs mt-1.5 ml-1 flex items-center gap-1">
                    <span className="inline-block w-1 h-1 bg-red-500 rounded-full"></span>
                    {errors.email}
                  </p>
                )}
              </div>
            </div>

            {/* Phone Field */}
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Phone Number <span className="text-gray-400 text-xs font-normal">(Optional)</span>
              </label>
              <div className={`relative transition-all duration-200 ${
                focusedField === 'phone' ? 'transform scale-[1.01]' : ''
              }`}>
                <div className={`flex items-center gap-3 px-4 py-3.5 bg-gray-50 border-2 rounded-xl transition-all duration-200 ${
                  focusedField === 'phone'
                    ? 'bg-white shadow-md'
                    : 'border-gray-200 hover:border-gray-300'
                }`} style={{
                  borderColor: focusedField === 'phone' ? '#4285F4' : undefined
                }}>
                  <Call style={{
                    color: focusedField === 'phone' ? '#4285F4' : '#9ca3af',
                    transition: 'color 0.2s'
                  }} />
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('phone')}
                    onBlur={() => setFocusedField('')}
                    onKeyPress={handleKeyPress}
                    placeholder="+1 (555) 000-0000"
                    className="w-full focus:outline-none bg-transparent text-gray-800 placeholder-gray-400"
                  />
                </div>
              </div>
            </div>

            {/* Message Field */}
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Your Message <span className="text-red-500">*</span>
              </label>
              <div className={`relative transition-all duration-200 ${
                focusedField === 'message' ? 'transform scale-[1.01]' : ''
              }`}>
                <div className={`flex items-start gap-3 px-4 py-3.5 bg-gray-50 border-2 rounded-xl transition-all duration-200 ${
                  errors.message 
                    ? 'border-red-400 bg-red-50' 
                    : focusedField === 'message'
                    ? 'bg-white shadow-md'
                    : 'border-gray-200 hover:border-gray-300'
                }`} style={{
                  borderColor: focusedField === 'message' && !errors.message ? '#4285F4' : undefined
                }}>
                  <Sms style={{
                    color: focusedField === 'message' ? '#4285F4' : '#9ca3af',
                    transition: 'color 0.2s'
                  }} className="mt-0.5" />
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('message')}
                    onBlur={() => setFocusedField('')}
                    placeholder="Tell me about your project or inquiry..."
                    rows={5}
                    className="w-full focus:outline-none bg-transparent text-gray-800 placeholder-gray-400 resize-none"
                  />
                </div>
                {errors.message && (
                  <p className="text-red-500 text-xs mt-1.5 ml-1 flex items-center gap-1">
                    <span className="inline-block w-1 h-1 bg-red-500 rounded-full"></span>
                    {errors.message}
                  </p>
                )}
              </div>
            </div>

            {/* Submit Button - Updated to blue gradient */}
            <button
              onClick={handleSubmit}
              disabled={isLoading}
              className="w-full px-6 py-4 text-white font-semibold rounded-xl focus:outline-none flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-[1.02] active:scale-[0.98]"
              style={{
                background: 'linear-gradient(135deg, #4285F4 0%, #1a73e8 100%)',
                boxShadow: '0 10px 15px -3px rgba(66, 133, 244, 0.3)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'linear-gradient(135deg, #1a73e8 0%, #1557b0 100%)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'linear-gradient(135deg, #4285F4 0%, #1a73e8 100%)';
              }}
            >
              {isLoading ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  <span>Sending Message...</span>
                </>
              ) : (
                <>
                  <span>Send Message</span>
                  <Send className="w-5 h-5" />
                </>
              )}
            </button>
          </div>

          {/* Error Message */}
          {submitMessage && messageType === 'error' && (
            <div className="mt-6 p-4 bg-red-50 border border-red-200 rounded-xl">
              <p className="text-red-700 text-sm font-medium text-center flex items-center justify-center gap-2">
                <span className="inline-block w-2 h-2 bg-red-500 rounded-full"></span>
                {submitMessage}
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Success Popup */}
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-fadeIn">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full mx-4 relative transform animate-scaleIn">
            <button 
              onClick={() => setShowPopup(false)} 
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full p-2 transition-all duration-200"
            >
              <Close />
            </button>
            
            <div className="p-8 text-center">
              <div className="mb-6 flex justify-center">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
                  <CheckCircle className="text-green-600 w-12 h-12" />
                </div>
              </div>
              
              <h3 className="text-2xl font-bold text-gray-800 mb-3">
                Message Sent Successfully!
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {submitMessage}
              </p>
              
              <button
                onClick={() => setShowPopup(false)}
                className="px-8 py-3 text-white font-semibold rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl"
                style={{
                  background: 'linear-gradient(135deg, #4285F4 0%, #1a73e8 100%)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'linear-gradient(135deg, #1a73e8 0%, #1557b0 100%)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'linear-gradient(135deg, #4285F4 0%, #1a73e8 100%)';
                }}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes scaleIn {
          from { 
            opacity: 0;
            transform: scale(0.9);
          }
          to { 
            opacity: 1;
            transform: scale(1);
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.2s ease-out;
        }
        
        .animate-scaleIn {
          animation: scaleIn 0.3s ease-out;
        }
      `}</style>
    </div>
  );
};

export default ContactForm;