import React, { useState } from 'react';
// import { User, Mail, Phone, MessageSquare, Send } from 'lucide-react';
import {Person,Email, Call,Sms} from "@mui/icons-material"
const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Form submitted:', formData);
      // Handle form submission here
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="w-full max-w-md mx-auto p-6 bg-white">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-1">
          <div className="relative">
            <div className={`w-full px-4 py-3 bg-[#E5ECFB] border rounded-md focus-within:border-2 focus-within:border-[#7a3ceb] ${
                errors.name ? 'border-red-500' : 'border-gray-300'
              } flex items-center gap-2`}>
                <Person  />
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Name*"
                  className="w-full focus:outline-none bg-[#E5ECFB]"
                />
            </div>
            {errors.name && <span className="text-red-500 text-sm">{errors.name}</span>}
          </div>
        </div>

        <div className="space-y-1">
          <div className="relative">
            <div className={`w-full px-4 py-3 bg-[#E5ECFB] border rounded-md focus-within:ring-2 focus-within:ring-blue-500 ${
                errors.email ? 'border-red-500' : 'border-gray-300'
              } flex items-center gap-2`}>
                <Email className="text-gray-500" size={20} />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  className="w-full focus:outline-none bg-[#E5ECFB]"
                />
            </div>
            {errors.email && <span className="text-red-500 text-sm">{errors.email}</span>}
          </div>
        </div>

        <div className="space-y-1">
          <div className="relative">
            <div className="w-full px-4 py-3 bg-[#E5ECFB] border border-gray-300 rounded-md focus-within:ring-2 focus-within:ring-blue-500 flex items-center gap-2">
                <Call className="text-gray-500" size={20} />
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone"
                  className="w-full focus:outline-none bg-[#E5ECFB]"
                />
            </div>
          </div>
        </div>

        <div className="space-y-1">
          <div className="relative">
            <div className={`w-full px-4 py-3 bg-[#E5ECFB] border rounded-md focus-within:ring-2 focus-within:ring-blue-500 ${
                errors.message ? 'border-red-500' : 'border-gray-300'
              } flex items-start gap-2`}>
                <Sms className="text-gray-500 mt-1" size={20} />
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Message"
                  rows={4}
                  className="w-full focus:outline-none bg-[#E5ECFB]"
                />
            </div>
            {errors.message && <span className="text-red-500 text-sm">{errors.message}</span>}
          </div>
        </div>

        <button
          type="submit"
          className="w-full px-4 py-2 text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 flex items-center justify-center space-x-2"
        >
          <span>Submit</span>
          {/* <Send className="w-4 h-4" /> */}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;

