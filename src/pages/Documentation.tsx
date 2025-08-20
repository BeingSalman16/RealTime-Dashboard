import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Zap, Droplets, Mountain, Leaf, Shield, Users, TrendingUp } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export const Documentation: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-12">
          <div>
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              {t('documentation')}
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Comprehensive guide to Tehri Dam and hydropower technology
            </p>
          </div>
          <Link
            to="/"
            className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors mt-4 sm:mt-0"
          >
            <Home className="h-5 w-5" />
            <span>{t('home')}</span>
          </Link>
        </div>

        {/* Table of Contents */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            Table of Contents
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <a href="#history" className="flex items-center space-x-2 text-blue-600 dark:text-blue-400 hover:underline">
              <Mountain className="h-4 w-4" />
              <span>History & Construction</span>
            </a>
            <a href="#hydropower" className="flex items-center space-x-2 text-blue-600 dark:text-blue-400 hover:underline">
              <Zap className="h-4 w-4" />
              <span>Hydropower Principles</span>
            </a>
            <a href="#components" className="flex items-center space-x-2 text-blue-600 dark:text-blue-400 hover:underline">
              <Droplets className="h-4 w-4" />
              <span>Plant Components</span>
            </a>
            <a href="#environmental" className="flex items-center space-x-2 text-blue-600 dark:text-blue-400 hover:underline">
              <Leaf className="h-4 w-4" />
              <span>Environmental Impact</span>
            </a>
            <a href="#safety" className="flex items-center space-x-2 text-blue-600 dark:text-blue-400 hover:underline">
              <Shield className="h-4 w-4" />
              <span>Safety Guidelines</span>
            </a>
            <a href="#community" className="flex items-center space-x-2 text-blue-600 dark:text-blue-400 hover:underline">
              <Users className="h-4 w-4" />
              <span>Community Impact</span>
            </a>
          </div>
        </div>

        {/* Content Sections */}
        <div className="space-y-12">
          {/* History & Construction */}
          <section id="history" className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8">
            <div className="flex items-center space-x-3 mb-6">
              <Mountain className="h-8 w-8 text-blue-600 dark:text-blue-400" />
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                Tehri Dam: History & Construction
              </h2>
            </div>
            
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                The Tehri Dam stands as one of India's most ambitious hydroelectric projects, representing 
                decades of engineering excellence and sustainable energy commitment. Located in the 
                picturesque state of Uttarakhand, this marvel transforms the power of the Bhagirathi 
                and Bhilangana rivers into clean electricity for millions.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Key Facts</h3>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                    <li><strong>Height:</strong> 260 meters (853 feet)</li>
                    <li><strong>Type:</strong> Earth and rockfill dam</li>
                    <li><strong>Capacity:</strong> 2,400 MW</li>
                    <li><strong>Reservoir Volume:</strong> 4.0 km³</li>
                    <li><strong>Construction Period:</strong> 1978-2006</li>
                    <li><strong>Location:</strong> Tehri, Uttarakhand</li>
                  </ul>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Construction Timeline</h3>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                    <li><strong>1978:</strong> Project conception and planning</li>
                    <li><strong>1990:</strong> Construction begins</li>
                    <li><strong>2001:</strong> First phase completion</li>
                    <li><strong>2006:</strong> Full commissioning</li>
                    <li><strong>2019:</strong> Pumped storage scheme addition</li>
                  </ul>
                </div>
              </div>
              
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                The construction of Tehri Dam involved relocating the historic town of Tehri, demonstrating 
                the project's significance to India's energy infrastructure. The dam's innovative design 
                incorporates advanced seismic safety measures, making it one of the tallest dams in a 
                seismically active region.
              </p>
            </div>
          </section>

          {/* Hydropower Principles */}
          <section id="hydropower" className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8">
            <div className="flex items-center space-x-3 mb-6">
              <Zap className="h-8 w-8 text-green-600 dark:text-green-400" />
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                Hydropower Generation Principles
              </h2>
            </div>
            
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                Hydropower harnesses the kinetic energy of flowing water to generate electricity through 
                a carefully orchestrated process of energy conversion. Understanding these principles 
                helps appreciate the engineering marvel that is Tehri Dam.
              </p>
              
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                The Energy Conversion Process
              </h3>
              
              <div className="space-y-6">
                <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-blue-900 dark:text-blue-300 mb-3">
                    1. Potential Energy Storage
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300">
                    Water collected in the reservoir possesses potential energy due to its elevated position. 
                    The higher the dam, the greater the potential energy available for conversion.
                  </p>
                  <div className="mt-2 text-sm text-blue-700 dark:text-blue-300">
                    <strong>Formula:</strong> PE = mgh (mass × gravity × height)
                  </div>
                </div>
                
                <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-green-900 dark:text-green-300 mb-3">
                    2. Kinetic Energy Conversion
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300">
                    As water flows through penstocks toward the turbines, potential energy converts to 
                    kinetic energy. The controlled release ensures optimal pressure and flow rates.
                  </p>
                  <div className="mt-2 text-sm text-green-700 dark:text-green-300">
                    <strong>Formula:</strong> KE = ½mv² (half × mass × velocity²)
                  </div>
                </div>
                
                <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-purple-900 dark:text-purple-300 mb-3">
                    3. Mechanical Energy Transfer
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300">
                    Turbine blades capture the water's kinetic energy, converting it to rotational 
                    mechanical energy. Francis turbines at Tehri are optimized for the dam's head and flow.
                  </p>
                </div>
                
                <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-yellow-900 dark:text-yellow-300 mb-3">
                    4. Electrical Energy Generation
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300">
                    Generators connected to turbines convert mechanical rotation into electrical energy 
                    through electromagnetic induction, producing three-phase alternating current.
                  </p>
                </div>
              </div>
              
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4 mt-8">
                Efficiency Factors
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    Turbine Efficiency
                  </h4>
                  <ul className="space-y-1 text-gray-600 dark:text-gray-300">
                    <li>• Francis turbines: 85-95%</li>
                    <li>• Optimal design for head range</li>
                    <li>• Advanced blade geometry</li>
                    <li>• Precise flow control</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    Generator Efficiency
                  </h4>
                  <ul className="space-y-1 text-gray-600 dark:text-gray-300">
                    <li>• Synchronous generators: 95-98%</li>
                    <li>• Low maintenance requirements</li>
                    <li>• High power factor operation</li>
                    <li>• Grid synchronization capability</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Plant Components */}
          <section id="components" className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8">
            <div className="flex items-center space-x-3 mb-6">
              <Droplets className="h-8 w-8 text-teal-600 dark:text-teal-400" />
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                Hydropower Plant Components
              </h2>
            </div>
            
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                Tehri Dam's hydropower plant consists of sophisticated components working in harmony 
                to convert water's energy into electricity. Each element plays a crucial role in 
                the overall efficiency and reliability of power generation.
              </p>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
                      <TrendingUp className="h-5 w-5 text-blue-600 dark:text-blue-400 mr-2" />
                      Dam Structure
                    </h3>
                    <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                      <li><strong>Type:</strong> Earth and rockfill with concrete core</li>
                      <li><strong>Height:</strong> 260 meters from foundation</li>
                      <li><strong>Length:</strong> 575 meters at crest</li>
                      <li><strong>Width:</strong> 20 meters at crest</li>
                      <li><strong>Foundation:</strong> Rock foundation at 550m elevation</li>
                    </ul>
                  </div>
                  
                  <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                      Reservoir System
                    </h3>
                    <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                      <li><strong>Capacity:</strong> 4.0 billion cubic meters</li>
                      <li><strong>Surface Area:</strong> 52 square kilometers</li>
                      <li><strong>Full Reservoir Level:</strong> 830 meters</li>
                      <li><strong>Dead Storage Level:</strong> 760 meters</li>
                      <li><strong>Catchment Area:</strong> 7,511 square kilometers</li>
                    </ul>
                  </div>
                  
                  <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                      Spillway System
                    </h3>
                    <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                      <li><strong>Type:</strong> Gated spillway with ski-jump</li>
                      <li><strong>Gates:</strong> 6 radial gates</li>
                      <li><strong>Capacity:</strong> 15,540 cubic meters per second</li>
                      <li><strong>Energy Dissipation:</strong> Plunge pool design</li>
                    </ul>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                      Power Generation Units
                    </h3>
                    <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                      <li><strong>Number of Units:</strong> 4 Francis turbines</li>
                      <li><strong>Capacity per Unit:</strong> 250 MW</li>
                      <li><strong>Total Capacity:</strong> 1,000 MW (Phase I)</li>
                      <li><strong>Rated Head:</strong> 220 meters</li>
                      <li><strong>Rated Discharge:</strong> 130 cubic meters per second per unit</li>
                    </ul>
                  </div>
                  
                  <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                      Transmission System
                    </h3>
                    <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                      <li><strong>Voltage Level:</strong> 400 kV transmission</li>
                      <li><strong>Switchyard:</strong> Gas Insulated Switchgear (GIS)</li>
                      <li><strong>Transformers:</strong> 4 × 294 MVA units</li>
                      <li><strong>Connections:</strong> Northern Grid integration</li>
                      <li><strong>Control:</strong> SCADA system monitoring</li>
                    </ul>
                  </div>
                  
                  <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                      Pumped Storage
                    </h3>
                    <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                      <li><strong>Additional Capacity:</strong> 1,000 MW reversible units</li>
                      <li><strong>Technology:</strong> Pump-turbine units</li>
                      <li><strong>Function:</strong> Peak power and grid stability</li>
                      <li><strong>Efficiency:</strong> 75-80% round-trip efficiency</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Environmental Impact */}
          <section id="environmental" className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8">
            <div className="flex items-center space-x-3 mb-6">
              <Leaf className="h-8 w-8 text-green-600 dark:text-green-400" />
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                Environmental Impact & Benefits
              </h2>
            </div>
            
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                Tehri Dam represents a significant step toward sustainable energy generation while 
                maintaining ecological balance. The project incorporates extensive environmental 
                protection measures and contributes to climate change mitigation.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-green-900 dark:text-green-300 mb-4">
                      Environmental Benefits
                    </h3>
                    <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                      <li className="flex items-start">
                        <span className="text-green-600 dark:text-green-400 mr-2">✓</span>
                        <div>
                          <strong>Carbon Emission Reduction:</strong> Prevents 12 million tons of CO₂ annually compared to coal-based power generation
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-600 dark:text-green-400 mr-2">✓</span>
                        <div>
                          <strong>Flood Control:</strong> Reduces downstream flooding during monsoon seasons
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-600 dark:text-green-400 mr-2">✓</span>
                        <div>
                          <strong>Water Supply:</strong> Provides irrigation and drinking water to nearby regions
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-600 dark:text-green-400 mr-2">✓</span>
                        <div>
                          <strong>Tourism Development:</strong> Creates recreational opportunities and boosts local economy
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-blue-900 dark:text-blue-300 mb-4">
                      Conservation Measures
                    </h3>
                    <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                      <li className="flex items-start">
                        <span className="text-blue-600 dark:text-blue-400 mr-2">•</span>
                        <div>
                          <strong>Fish Ladders:</strong> Facilitates fish migration and maintains aquatic ecosystem
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 dark:text-blue-400 mr-2">•</span>
                        <div>
                          <strong>Afforestation:</strong> Extensive tree plantation programs in the catchment area
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 dark:text-blue-400 mr-2">•</span>
                        <div>
                          <strong>Wildlife Protection:</strong> Establishment of wildlife corridors and conservation zones
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 dark:text-blue-400 mr-2">•</span>
                        <div>
                          <strong>Water Quality Monitoring:</strong> Continuous monitoring of reservoir and downstream water quality
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 rounded-lg p-6 mt-8">
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                  Climate Impact Statistics
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                  <div>
                    <div className="text-3xl font-bold text-green-600 dark:text-green-400">12M tons</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">CO₂ Reduction per year</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">4M homes</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Clean energy supply</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-teal-600 dark:text-teal-400">2.4 GW</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Renewable capacity</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Safety Guidelines */}
          <section id="safety" className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8">
            <div className="flex items-center space-x-3 mb-6">
              <Shield className="h-8 w-8 text-red-600 dark:text-red-400" />
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                Safety Guidelines & Operations
              </h2>
            </div>
            
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                Safety is paramount in dam operations. Tehri Dam employs comprehensive safety 
                protocols, advanced monitoring systems, and emergency procedures to ensure 
                public safety and operational reliability.
              </p>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="bg-red-50 dark:bg-red-900/20 rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-red-900 dark:text-red-300 mb-4">
                      Structural Safety Features
                    </h3>
                    <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                      <li><strong>Seismic Design:</strong> Built to withstand earthquakes up to magnitude 8.5</li>
                      <li><strong>Foundation:</strong> Anchored to solid rock foundation</li>
                      <li><strong>Instrumentation:</strong> 2,000+ monitoring instruments</li>
                      <li><strong>Emergency Spillway:</strong> Automatic flood discharge capability</li>
                      <li><strong>Regular Inspections:</strong> Daily, monthly, and annual safety assessments</li>
                    </ul>
                  </div>
                  
                  <div className="bg-orange-50 dark:bg-orange-900/20 rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-orange-900 dark:text-orange-300 mb-4">
                      Operational Protocols
                    </h3>
                    <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                      <li><strong>24/7 Monitoring:</strong> Round-the-clock surveillance center</li>
                      <li><strong>Weather Integration:</strong> Real-time weather data analysis</li>
                      <li><strong>Predictive Maintenance:</strong> Preventive equipment care schedules</li>
                      <li><strong>Staff Training:</strong> Regular safety and emergency drills</li>
                      <li><strong>Communication Systems:</strong> Redundant communication networks</li>
                    </ul>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-yellow-900 dark:text-yellow-300 mb-4">
                      Emergency Procedures
                    </h3>
                    <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                      <li><strong>Early Warning System:</strong> Automated alert systems for downstream areas</li>
                      <li><strong>Evacuation Plans:</strong> Comprehensive evacuation procedures</li>
                      <li><strong>Emergency Contacts:</strong> Direct lines to disaster management authorities</li>
                      <li><strong>Backup Power:</strong> Uninterruptible power supply for critical systems</li>
                      <li><strong>Coordination:</strong> Integration with state emergency response</li>
                    </ul>
                  </div>
                  
                  <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-purple-900 dark:text-purple-300 mb-4">
                      Public Safety Measures
                    </h3>
                    <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                      <li><strong>Restricted Zones:</strong> Clearly marked safety boundaries</li>
                      <li><strong>Public Education:</strong> Community awareness programs</li>
                      <li><strong>Tourist Safety:</strong> Guided tours and safety briefings</li>
                      <li><strong>Water Sports:</strong> Regulated recreational activities</li>
                      <li><strong>Emergency Services:</strong> On-site medical and rescue facilities</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Community Impact */}
          <section id="community" className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8">
            <div className="flex items-center space-x-3 mb-6">
              <Users className="h-8 w-8 text-purple-600 dark:text-purple-400" />
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                Community Impact & Development
              </h2>
            </div>
            
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                Beyond power generation, Tehri Dam has transformed the socio-economic landscape 
                of Uttarakhand. The project includes comprehensive rehabilitation programs and 
                community development initiatives.
              </p>
              
              <div className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-blue-900 dark:text-blue-300 mb-4">
                      Economic Benefits
                    </h3>
                    <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                      <li>
                        <strong>Employment Generation:</strong> Direct and indirect employment for 50,000+ people
                      </li>
                      <li>
                        <strong>Tourism Revenue:</strong> Significant boost to local tourism industry
                      </li>
                      <li>
                        <strong>Agricultural Benefits:</strong> Improved irrigation for 270,000 hectares
                      </li>
                      <li>
                        <strong>Industrial Growth:</strong> Power supply enabling industrial development
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-green-900 dark:text-green-300 mb-4">
                      Social Development
                    </h3>
                    <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                      <li>
                        <strong>New Tehri Town:</strong> Modern planned city with all amenities
                      </li>
                      <li>
                        <strong>Educational Facilities:</strong> Schools and colleges for displaced families
                      </li>
                      <li>
                        <strong>Healthcare:</strong> Improved medical facilities and services
                      </li>
                      <li>
                        <strong>Infrastructure:</strong> Better roads, communications, and utilities
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-lg p-6">
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                    Rehabilitation & Resettlement
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">125,000</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">People Rehabilitated</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-pink-600 dark:text-pink-400">38 Villages</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">Relocated & Developed</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-indigo-600 dark:text-indigo-400">₹2,500 Cr</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">Rehabilitation Package</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};