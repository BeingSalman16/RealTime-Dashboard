import React from 'react';
import { Facebook, Twitter, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

export const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-gray-900 dark:bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-blue-400">Tehri Dam Portal</h3>
            <p className="text-gray-300 text-sm">
              Monitoring and showcasing India's hydropower capabilities through advanced technology and real-time data visualization.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 text-gray-400 hover:text-blue-400 cursor-pointer transition-colors" />
              <Twitter className="h-5 w-5 text-gray-400 hover:text-blue-400 cursor-pointer transition-colors" />
              <Linkedin className="h-5 w-5 text-gray-400 hover:text-blue-400 cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-blue-400">Quick Links</h3>
            <div className="space-y-2">
              <Link to="/" className="block text-gray-300 hover:text-blue-400 transition-colors text-sm">
                {t('home')}
              </Link>
              <Link to="/about" className="block text-gray-300 hover:text-blue-400 transition-colors text-sm">
                {t('about')}
              </Link>
              <Link to="/documentation" className="block text-gray-300 hover:text-blue-400 transition-colors text-sm">
                {t('documentation')}
              </Link>
              <Link to="/dashboard" className="block text-gray-300 hover:text-blue-400 transition-colors text-sm">
                {t('dashboard')}
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-blue-400">Contact</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-gray-400" />
                <span className="text-gray-300 text-sm">Tehri, Uttarakhand, India</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-gray-400" />
                <span className="text-gray-300 text-sm">+91-0120-2776438 </span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-gray-400" />
                <span className="text-gray-300 text-sm">info@csrksh@thdc.co.in/</span>
              </div>
            </div>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-blue-400">Legal</h3>
            <div className="space-y-2">
              <a href="https://thdc.co.in/en/privacy-policy" className="block text-gray-300 hover:text-blue-400 transition-colors text-sm">
                Privacy Policy
              </a>
              <a href="https://thdc.co.in/en/terms-condition" className="block text-gray-300 hover:text-blue-400 transition-colors text-sm">
                Terms of Service
              </a>
              <a href="https://thdc.co.in/en/copyright-policy" className="block text-gray-300 hover:text-blue-400 transition-colors text-sm">
                Data Protection| Copyright Policy
              </a>
              <a href="https://thdc.co.in/en/media/thdcil-enables-accessibility-state-art-eye-care-equipment-vivekanada-netralya-eye-hospital" className="block text-gray-300 hover:text-blue-400 transition-colors text-sm">
                Accessibility
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2025 Tehri Hydro Development Corporation. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};