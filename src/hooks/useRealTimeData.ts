import { useState, useEffect } from 'react';

export interface DamData {
  waterLevel: number;
  energyProduced: number;
  currentProduced: number;
  turbineStatus: 'online' | 'offline' | 'maintenance';
  reservoirInflow: number;
  reservoirOutflow: number;
  timestamp: Date;
}

export const useRealTimeData = () => {
  const [data, setData] = useState<DamData>({
    waterLevel: 825.5,
    energyProduced: 1850.2,
    currentProduced: 2240.8,
    turbineStatus: 'online',
    reservoirInflow: 245.6,
    reservoirOutflow: 198.3,
    timestamp: new Date()
  });

  const [isConnected, setIsConnected] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setData(prevData => ({
        ...prevData,
        waterLevel: Math.max(800, Math.min(850, prevData.waterLevel + (Math.random() - 0.5) * 2)),
        energyProduced: Math.max(1500, Math.min(2400, prevData.energyProduced + (Math.random() - 0.5) * 50)),
        currentProduced: Math.max(1800, Math.min(3000, prevData.currentProduced + (Math.random() - 0.5) * 100)),
        reservoirInflow: Math.max(200, Math.min(300, prevData.reservoirInflow + (Math.random() - 0.5) * 10)),
        reservoirOutflow: Math.max(150, Math.min(250, prevData.reservoirOutflow + (Math.random() - 0.5) * 8)),
        timestamp: new Date(),
        turbineStatus: Math.random() > 0.95 ? 'maintenance' : 'online'
      }));
    }, 2000);

    // Simulate connection issues occasionally
    const connectionInterval = setInterval(() => {
      setIsConnected(Math.random() > 0.05);
    }, 10000);

    return () => {
      clearInterval(interval);
      clearInterval(connectionInterval);
    };
  }, []);

  return { data, isConnected };
};