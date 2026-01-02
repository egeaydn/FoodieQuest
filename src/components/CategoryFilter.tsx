/**
 * CategoryFilter Component
 * Yemek kategorilerine göre filtreleme butonu
 */

import * as Haptics from 'expo-haptics';
import React from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { Colors } from '../constants/Colors';
import { DishCategory } from '../types';

interface CategoryFilterProps {
  selectedCategory: DishCategory | 'all';
  onCategoryChange: (category: DishCategory | 'all') => void;
}

interface CategoryItem {
  id: DishCategory | 'all';
  label: string;
  emoji: string;
}

const CATEGORIES: CategoryItem[] = [
  { id: 'all', label: 'Tümü', emoji: '🍽️' },
  { id: 'burger', label: 'Burger', emoji: '🍔' },
  { id: 'sushi', label: 'Sushi', emoji: '🍣' },
  { id: 'pizza', label: 'Pizza', emoji: '🍕' },
  { id: 'dessert', label: 'Tatlı', emoji: '🍰' },
  { id: 'kebab', label: 'Kebap', emoji: '🥙' },
  { id: 'pasta', label: 'Makarna', emoji: '🍝' },
  { id: 'seafood', label: 'Deniz Ürünleri', emoji: '🐟' },
  { id: 'vegan', label: 'Vegan', emoji: '🥗' },
  { id: 'breakfast', label: 'Kahvaltı', emoji: '🍳' },
  { id: 'other', label: 'Diğer', emoji: '🍲' },
];

export const CategoryFilter: React.FC<CategoryFilterProps> = ({
  selectedCategory,
  onCategoryChange,
}) => {
  const handleCategoryPress = (category: DishCategory | 'all') => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    onCategoryChange(category);
  };

  return (
    <View style={styles.container}>
      <ScrollView 
        horizontal 
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {CATEGORIES.map((category) => {
          const isSelected = selectedCategory === category.id;
          
          return (
            <Pressable
              key={category.id}
              style={[
                styles.categoryButton,
                isSelected && styles.categoryButtonActive,
              ]}
              onPress={() => handleCategoryPress(category.id)}
            >
              <Text style={styles.emoji}>{category.emoji}</Text>
              <Text
                style={[
                  styles.categoryLabel,
                  isSelected && styles.categoryLabelActive,
                ]}
              >
                {category.label}
              </Text>
            </Pressable>
          );
        })}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 60,
    left: 0,
    right: 0,
    zIndex: 10,
  },
  scrollContent: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    gap: 8,
  },
  categoryButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 10,
    backgroundColor: Colors.background.tertiary,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: 'transparent',
    gap: 6,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
  },
  categoryButtonActive: {
    backgroundColor: Colors.accent.gold,
    borderColor: Colors.accent.lightGold,
  },
  emoji: {
    fontSize: 20,
  },
  categoryLabel: {
    fontSize: 14,
    fontWeight: '600',
    color: Colors.text.secondary,
  },
  categoryLabelActive: {
    color: Colors.background.primary,
    fontWeight: '700',
  },
});
