import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Target, Users, Award, Globe, Heart } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-12">
          <div>
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              About Tehri Dam Portal
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Bridging technology and sustainable energy for a greener future
            </p>
          </div>
          <Link
            to="/"
            className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors mt-4 sm:mt-0"
          >
            <Home className="h-5 w-5" />
            <span>Home</span>
          </Link>
        </div>

        {/* Mission Section */}
        <section className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 mb-8">
          <div className="flex items-center space-x-3 mb-6">
            <Target className="h-8 w-8 text-blue-600 dark:text-blue-400" />
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
              Our Mission
            </h2>
          </div>
          
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
              The Tehri Dam Portal serves as a comprehensive digital gateway to one of India's most 
              significant hydroelectric achievements. Our mission is to democratize access to 
              real-time operational data, educational resources, and interactive experiences that 
              showcase the power of sustainable energy generation.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="text-center p-6 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                <Globe className="h-12 w-12 text-blue-600 dark:text-blue-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Transparency
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Providing open access to dam operations and environmental data
                </p>
              </div>
              
              <div className="text-center p-6 bg-green-50 dark:bg-green-900/20 rounded-lg">
                <Users className="h-12 w-12 text-green-600 dark:text-green-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Education
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Educating communities about hydropower and sustainable energy
                </p>
              </div>
              
              <div className="text-center p-6 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                <Heart className="h-12 w-12 text-purple-600 dark:text-purple-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Innovation
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Leveraging technology to enhance understanding and engagement
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Portal Features */}
        <section className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            Portal Features
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="border-l-4 border-blue-500 pl-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  Real-time Monitoring
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Access live operational data including water levels, energy production, 
                  and turbine status through our advanced monitoring dashboard.
                </p>
              </div>
              
              <div className="border-l-4 border-green-500 pl-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  Interactive Simulation
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Experience hydropower generation through dynamic visualizations 
                  and parameter adjustments that demonstrate energy conversion principles.
                </p>
              </div>
              
              <div className="border-l-4 border-purple-500 pl-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  Comprehensive Documentation
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Explore detailed information about dam construction, hydropower 
                  principles, environmental impact, and community development.
                </p>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="border-l-4 border-yellow-500 pl-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  Secure Access Control
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Robust authentication system ensures data security while providing 
                  authorized access to sensitive operational information.
                </p>
              </div>
              
              <div className="border-l-4 border-red-500 pl-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  Responsive Design
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Optimized for all devices with adaptive layouts, dark mode support, 
                  and multilingual capabilities for enhanced accessibility.
                </p>
              </div>
              
              <div className="border-l-4 border-teal-500 pl-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  Educational Resources
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Rich educational content covering engineering principles, 
                  environmental benefits, and the role of hydropower in India's energy future.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Technology Stack */}
        <section className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            Technology & Innovation
          </h2>
          
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
              Built with modern web technologies and best practices to ensure optimal 
              performance, security, and user experience across all platforms.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
              <div className="text-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <div className="text-lg font-bold text-blue-600 dark:text-blue-400 mb-2">React</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Frontend Framework</div>
              </div>
              
              <div className="text-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <div className="text-lg font-bold text-teal-600 dark:text-teal-400 mb-2">TypeScript</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Type Safety</div>
              </div>
              
              <div className="text-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <div className="text-lg font-bold text-purple-600 dark:text-purple-400 mb-2">Tailwind CSS</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Styling System</div>
              </div>
              
              <div className="text-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <div className="text-lg font-bold text-green-600 dark:text-green-400 mb-2">Recharts</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Data Visualization</div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            Connect With Us
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Technical Support
              </h3>
              <div className="space-y-3 text-gray-600 dark:text-gray-300">
                <p>
                  For technical assistance, feature requests, or reporting issues with 
                  the portal, please contact our development team.
                </p>
                <div className="flex items-center space-x-2">
                  <span className="font-medium">Email:</span>
                  <span>tech-support@tehridam.gov.in</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="font-medium">Response Time:</span>
                  <span>24-48 hours</span>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Dam Operations
              </h3>
              <div className="space-y-3 text-gray-600 dark:text-gray-300">
                <p>
                  For operational inquiries, safety concerns, or general information 
                  about Tehri Dam, contact the operations center.
                </p>
                <div className="flex items-center space-x-2">
                  <span className="font-medium">Phone:</span>
                  <span>+91-1376-233-100</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="font-medium">Emergency:</span>
                  <span>+91-1376-233-911</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-8 p-6 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
            <div className="flex items-center space-x-3 mb-3">
              <Award className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-300">
                Acknowledgments
              </h3>
            </div>
            <p className="text-blue-800 dark:text-blue-200">
              This portal is developed in collaboration with THDC India Ltd. and the 
              Uttarakhand State Government to promote transparency and public awareness 
              of hydropower technology and sustainable energy practices.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};