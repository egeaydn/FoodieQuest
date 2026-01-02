/**
 * FloatingActionMenu Component
 * Modern floating action button menü - harita üzerinde hızlı erişim
 */

import * as Haptics from 'expo-haptics';
import { Award, MapPin, Menu, User, X } from 'lucide-react-native';
import React, { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import Animated, {
    useAnimatedStyle,
    useSharedValue,
    withSpring,
} from 'react-native-reanimated';
import { Colors } from '../constants/Colors';

interface FloatingActionMenuProps {
  onMyLocation?: () => void;
  onFilterPress?: () => void;
  onBadgesPress?: () => void;
  onProfilePress?: () => void;
}

export const FloatingActionMenu: React.FC<FloatingActionMenuProps> = ({
  onMyLocation,
  onFilterPress,
  onBadgesPress,
  onProfilePress,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const rotation = useSharedValue(0);

  const toggleMenu = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    setIsOpen(!isOpen);
    rotation.value = withSpring(isOpen ? 0 : 45);
  };

  const handleAction = (action?: () => void) => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    action?.();
    setIsOpen(false);
    rotation.value = withSpring(0);
  };

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ rotate: `${rotation.value}deg` }],
  }));

  return (
    <View style={styles.container}>
      {/* Menu Items */}
      {isOpen && (
        <View style={styles.menuItems}>
          {/* Rozetlerim */}
          <Pressable
            style={styles.menuItem}
            onPress={() => handleAction(onBadgesPress)}
          >
            <View style={styles.iconContainer}>
              <Award size={20} color={Colors.background.primary} />
            </View>
            <Text style={styles.menuLabel}>Rozetlerim</Text>
          </Pressable>

          {/* Profilim */}
          <Pressable
            style={styles.menuItem}
            onPress={() => handleAction(onProfilePress)}
          >
            <View style={styles.iconContainer}>
              <User size={20} color={Colors.background.primary} />
            </View>
            <Text style={styles.menuLabel}>Profilim</Text>
          </Pressable>

          {/* Konumum */}
          <Pressable
            style={styles.menuItem}
            onPress={() => handleAction(onMyLocation)}
          >
            <View style={styles.iconContainer}>
              <MapPin size={20} color={Colors.background.primary} />
            </View>
            <Text style={styles.menuLabel}>Konumum</Text>
          </Pressable>
        </View>
      )}

      {/* Main FAB Button */}
      <Animated.View style={animatedStyle}>
        <Pressable style={styles.fab} onPress={toggleMenu}>
          {isOpen ? (
            <X size={24} color={Colors.background.primary} />
          ) : (
            <Menu size={24} color={Colors.background.primary} />
          )}
        </Pressable>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 30,
    right: 20,
    alignItems: 'flex-end',
    zIndex: 100,
  },
  menuItems: {
    marginBottom: 16,
    gap: 12,
    alignItems: 'flex-end',
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  menuLabel: {
    fontSize: 14,
    fontWeight: '600',
    color: Colors.text.primary,
    backgroundColor: Colors.background.secondary,
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
  },
  iconContainer: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: Colors.accent.gold,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: Colors.accent.gold,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 6,
  },
  fab: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: Colors.accent.coral,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: Colors.accent.coral,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 8,
    elevation: 8,
  },
});
