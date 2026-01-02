/**
 * MapViewContainer Component
 * Ana harita container - özelleştirilmiş stil, pinler ve kamera kontrolleri
 */

import React, { useCallback, useRef } from 'react';
import { StyleSheet, View } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import mapStyle from '../constants/MapStyles.json';
import { HeroDish, MapRegion } from '../types';

interface MapViewContainerProps {
  dishes: HeroDish[];
  initialRegion: MapRegion;
  selectedDish: HeroDish | null;
  onDishSelect: (dish: HeroDish) => void;
}

export const MapViewContainer: React.FC<MapViewContainerProps> = ({
  dishes,
  initialRegion,
  selectedDish,
  onDishSelect,
}) => {
  const mapRef = useRef<MapView>(null);

  // Pin'e tıklandığında kameraya yumuşak zoom
  const handleDishSelect = useCallback((dish: HeroDish) => {
    onDishSelect(dish);

    // Seçilen pin'e yumuşak bir şekilde zoom yap
    mapRef.current?.animateCamera(
      {
        center: {
          latitude: dish.location.latitude,
          longitude: dish.location.longitude,
        },
        zoom: 16,
        heading: 0,
        pitch: 0,
      },
      { duration: 800 }
    );
  }, [onDishSelect]);

  return (
    <View style={styles.container}>
      <MapView
        ref={mapRef}
        style={styles.map}
        provider={PROVIDER_GOOGLE}
        initialRegion={initialRegion}
        customMapStyle={mapStyle}
        showsUserLocation
        showsMyLocationButton={false}
        showsCompass={false}
        showsPointsOfInterest={false}
        showsBuildings={false}
        showsTraffic={false}
        toolbarEnabled={false}
        rotateEnabled={false}
        pitchEnabled={false}
      >
        {/* Yemek Pinleri */}
        {dishes.map((dish) => {
          const pinColor = dish.isFeatured ? '#F59E0B' : '#EF4444';
          
          return (
            <Marker
              key={dish.id}
              coordinate={dish.location}
              onPress={() => handleDishSelect(dish)}
              pinColor={pinColor}
            />
          );
        })}
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
});
