/**
 * useLocation Hook
 * Kullanıcının gerçek zamanlı konumunu takip eder
 */

import * as Location from 'expo-location';
import { useEffect, useState } from 'react';
import { MapRegion } from '../types';

interface UseLocationReturn {
  location: MapRegion | null;
  errorMsg: string | null;
  hasPermission: boolean;
  requestPermission: () => Promise<boolean>;
}

export const useLocation = (): UseLocationReturn => {
  const [location, setLocation] = useState<MapRegion | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [hasPermission, setHasPermission] = useState(false);

  const requestPermission = async (): Promise<boolean> => {
    try {
      const { status } = await Location.requestForegroundPermissionsAsync();
      
      if (status !== 'granted') {
        setErrorMsg('Konum izni reddedildi');
        return false;
      }

      setHasPermission(true);
      return true;
    } catch (error) {
      setErrorMsg('Konum izni alınamadı');
      return false;
    }
  };

  useEffect(() => {
    (async () => {
      const granted = await requestPermission();
      
      if (!granted) return;

      try {
        const currentLocation = await Location.getCurrentPositionAsync({
          accuracy: Location.Accuracy.Balanced,
        });

        setLocation({
          latitude: currentLocation.coords.latitude,
          longitude: currentLocation.coords.longitude,
          latitudeDelta: 0.05,
          longitudeDelta: 0.05,
        });
      } catch (error) {
        setErrorMsg('Konum alınamadı');
        // Varsayılan konum (İstanbul - Taksim)
        setLocation({
          latitude: 41.0369,
          longitude: 28.9784,
          latitudeDelta: 0.05,
          longitudeDelta: 0.05,
        });
      }
    })();
  }, []);

  return {
    location,
    errorMsg,
    hasPermission,
    requestPermission,
  };
};
