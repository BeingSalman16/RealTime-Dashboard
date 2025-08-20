import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Home, Activity, Droplets, Zap, Gauge, Settings, TrendingUp } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { useRealTimeData } from '../hooks/useRealTimeData';
import { GaugeChart } from '../components/GaugeChart';
import { useLanguage } from '../contexts/LanguageContext';

export const Dashboard: React.FC = () => {
  const { data, isConnected } = useRealTimeData();
  const { t } = useLanguage();
  const [simulationFlow, setSimulationFlow] = useState(250);
  const [simulationOutput, setSimulationOutput] = useState(2000);

  // Generate historical data for charts
  const generateChartData = () => {
    const chartData = [];
    const now = new Date();
    for (let i = 23; i >= 0; i--) {
      const time = new Date(now.getTime() - i * 60 * 60 * 1000);
      chartData.push({
        time: time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        energy: Math.max(1500, Math.min(2400, 1850 + (Math.random() - 0.5) * 200)),
        waterLevel: Math.max(800, Math.min(850, 825 + (Math.random() - 0.5) * 20))
      });
    }
    return chartData;
  };

  const chartData = generateChartData();

  const handleSimulationChange = () => {
    // Calculate simulated output based on flow input
    const efficiency = 0.85; // 85% efficiency
    const gravity = 9.81;
    const height = 260; // Dam height in meters
    const density = 1000; // Water density kg/m³
    
    // Simplified hydropower calculation: P = ρ × g × h × Q × η
    const calculatedOutput = (density * gravity * height * simulationFlow * efficiency) / 1000000; // Convert to MW
    setSimulationOutput(Math.round(calculatedOutput * 100) / 100);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
              {t('realTimeData')} Dashboard
            </h1>
            <p className="text-gray-600 dark:text-gray-300">
              Live monitoring of Tehri Dam operations
            </p>
          </div>
          <div className="flex items-center space-x-4 mt-4 sm:mt-0">
            <div className={`flex items-center space-x-2 px-3 py-1 rounded-full text-sm ${
              isConnected 
                ? 'bg-green-100 dark:bg-green-900/20 text-green-700 dark:text-green-400' 
                : 'bg-red-100 dark:bg-red-900/20 text-red-700 dark:text-red-400'
            }`}>
              <div className={`w-2 h-2 rounded-full ${isConnected ? 'bg-green-500' : 'bg-red-500'}`}></div>
              <span>{isConnected ? 'Connected' : 'Disconnected'}</span>
            </div>
            <Link
              to="/"
              className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors"
            >
              <Home className="h-4 w-4" />
              <span>{t('home')}</span>
            </Link>
          </div>
        </div>

        {/* Status Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/20 rounded-lg flex items-center justify-center">
                <Droplets className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </div>
              <span className="text-2xl font-bold text-gray-900 dark:text-white">
                {data.waterLevel.toFixed(1)}m
              </span>
            </div>
            <h3 className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-1">
              {t('waterLevel')}
            </h3>
            <div className="text-xs text-gray-500 dark:text-gray-400">
              Updated: {data.timestamp.toLocaleTimeString()}
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900/20 rounded-lg flex items-center justify-center">
                <Zap className="h-6 w-6 text-green-600 dark:text-green-400" />
              </div>
              <span className="text-2xl font-bold text-gray-900 dark:text-white">
                {data.energyProduced.toFixed(0)} MW
              </span>
            </div>
            <h3 className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-1">
              {t('energyProduced')}
            </h3>
            <div className="text-xs text-gray-500 dark:text-gray-400">
              74% of capacity
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-yellow-100 dark:bg-yellow-900/20 rounded-lg flex items-center justify-center">
                <Activity className="h-6 w-6 text-yellow-600 dark:text-yellow-400" />
              </div>
              <span className="text-2xl font-bold text-gray-900 dark:text-white">
                {data.currentProduced.toFixed(0)} A
              </span>
            </div>
            <h3 className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-1">
              {t('currentProduced')}
            </h3>
            <div className="text-xs text-gray-500 dark:text-gray-400">
              Normal range
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
            <div className="flex items-center justify-between mb-4">
              <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                data.turbineStatus === 'online' 
                  ? 'bg-green-100 dark:bg-green-900/20' 
                  : data.turbineStatus === 'maintenance'
                  ? 'bg-orange-100 dark:bg-orange-900/20'
                  : 'bg-red-100 dark:bg-red-900/20'
              }`}>
                <Settings className={`h-6 w-6 ${
                  data.turbineStatus === 'online' 
                    ? 'text-green-600 dark:text-green-400' 
                    : data.turbineStatus === 'maintenance'
                    ? 'text-orange-600 dark:text-orange-400'
                    : 'text-red-600 dark:text-red-400'
                } ${data.turbineStatus === 'online' ? 'animate-spin' : ''}`} />
              </div>
              <span className={`text-2xl font-bold capitalize ${
                data.turbineStatus === 'online' 
                  ? 'text-green-600 dark:text-green-400' 
                  : data.turbineStatus === 'maintenance'
                  ? 'text-orange-600 dark:text-orange-400'
                  : 'text-red-600 dark:text-red-400'
              }`}>
                {data.turbineStatus}
              </span>
            </div>
            <h3 className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-1">
              {t('turbineStatus')}
            </h3>
            <div className="text-xs text-gray-500 dark:text-gray-400">
              All units operational
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 mb-8">
          {/* Gauges */}
          <div className="xl:col-span-1">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
                Real-Time Metrics
              </h2>
              <div className="space-y-6">
                <GaugeChart
                  value={data.energyProduced}
                  min={0}
                  max={2500}
                  label="Energy Output"
                  unit="MW"
                  color="#10B981"
                  size="md"
                />
                <GaugeChart
                  value={data.waterLevel}
                  min={800}
                  max={850}
                  label="Reservoir Level"
                  unit="m"
                  color="#3B82F6"
                  size="md"
                />
              </div>
            </div>
          </div>

          {/* Charts */}
          <div className="xl:col-span-2">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
                24-Hour Trends
              </h2>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={chartData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#374151" opacity={0.3} />
                    <XAxis 
                      dataKey="time" 
                      stroke="#6B7280"
                      fontSize={12}
                    />
                    <YAxis stroke="#6B7280" fontSize={12} />
                    <Tooltip 
                      contentStyle={{
                        backgroundColor: 'rgb(31, 41, 55)',
                        border: '1px solid rgb(75, 85, 99)',
                        borderRadius: '8px',
                        color: 'white'
                      }}
                    />
                    <Line 
                      type="monotone" 
                      dataKey="energy" 
                      stroke="#10B981" 
                      strokeWidth={2}
                      name="Energy (MW)"
                    />
                    <Line 
                      type="monotone" 
                      dataKey="waterLevel" 
                      stroke="#3B82F6" 
                      strokeWidth={2}
                      name="Water Level (m)"
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Simulation */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
            {t('simulation')} - Hydropower Calculator
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Controls */}
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Water Flow Rate (m³/s)
                </label>
                <div className="space-y-2">
                  <input
                    type="range"
                    min="100"
                    max="400"
                    value={simulationFlow}
                    onChange={(e) => {
                      setSimulationFlow(Number(e.target.value));
                      handleSimulationChange();
                    }}
                    className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer"
                  />
                  <div className="flex justify-between text-sm text-gray-500 dark:text-gray-400">
                    <span>100 m³/s</span>
                    <span className="font-medium">{simulationFlow} m³/s</span>
                    <span>400 m³/s</span>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4">
                <h3 className="font-semibold text-blue-900 dark:text-blue-300 mb-2">
                  Calculated Output
                </h3>
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">
                  {simulationOutput.toFixed(2)} MW
                </div>
                <p className="text-sm text-blue-700 dark:text-blue-300 mt-2">
                  Based on: Flow rate × Dam height (260m) × Efficiency (85%)
                </p>
              </div>

              <div className="space-y-3">
                <h4 className="font-medium text-gray-900 dark:text-white">Simulation Parameters:</h4>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">Dam Height:</span>
                    <span className="font-medium text-gray-900 dark:text-white">260 m</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">Efficiency:</span>
                    <span className="font-medium text-gray-900 dark:text-white">85%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">Turbines:</span>
                    <span className="font-medium text-gray-900 dark:text-white">4 Units</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">Max Capacity:</span>
                    <span className="font-medium text-gray-900 dark:text-white">2400 MW</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Visual Representation */}
            <div className="flex items-center justify-center">
              <div className="relative">
                <div className="w-64 h-80 bg-gradient-to-b from-blue-400 to-blue-600 rounded-lg relative overflow-hidden">
                  {/* Water animation */}
                  <div className="absolute inset-0 bg-gradient-to-b from-blue-300 to-blue-500 opacity-70 animate-pulse"></div>
                  
                  {/* Dam structure */}
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-48 h-32 bg-gray-600 dark:bg-gray-700 rounded-t-lg">
                    {/* Turbine visualization */}
                    <div className="absolute top-4 left-1/2 transform -translate-x-1/2">
                      <div className={`w-8 h-8 border-4 border-yellow-400 rounded-full ${data.turbineStatus === 'online' ? 'animate-spin' : ''}`}>
                        <div className="w-full h-full bg-yellow-400 rounded-full opacity-30"></div>
                      </div>
                    </div>
                    
                    {/* Power lines */}
                    <div className="absolute -top-8 right-4 w-1 h-8 bg-yellow-400"></div>
                    <div className="absolute -top-12 right-0 w-8 h-1 bg-yellow-400"></div>
                  </div>
                  
                  {/* Water flow indicator */}
                  <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
                    <div className="text-white text-xs font-medium mb-1">Flow Rate</div>
                    <div className="text-white text-lg font-bold">{simulationFlow} m³/s</div>
                  </div>
                </div>
                
                <div className="mt-4 text-center">
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    Interactive Dam Simulation
                  </div>
                  <div className="text-lg font-bold text-green-600 dark:text-green-400">
                    ⚡ {simulationOutput.toFixed(2)} MW Generated
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};