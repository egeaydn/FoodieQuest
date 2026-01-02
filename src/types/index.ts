/**
 * FoodieQuest TypeScript Tip Tanımlamaları
 */

export interface Location {
  latitude: number;
  longitude: number;
}

export interface HeroDish {
  id: string;
  name: string;
  description: string;
  category: DishCategory;
  restaurant: Restaurant;
  location: Location;
  imageUrl: string;
  rating: number;
  priceRange: '₺' | '₺₺' | '₺₺₺' | '₺₺₺₺';
  isFeatured?: boolean; // Haftanın seçimi
  tags: string[];
}

export interface Restaurant {
  id: string;
  name: string;
  address: string;
  phone?: string;
  openingHours?: OpeningHours;
  photos?: string[];
}

export interface OpeningHours {
  monday?: string;
  tuesday?: string;
  wednesday?: string;
  thursday?: string;
  friday?: string;
  saturday?: string;
  sunday?: string;
}

export type DishCategory = 
  | 'burger'
  | 'pizza'
  | 'sushi'
  | 'dessert'
  | 'kebab'
  | 'pasta'
  | 'seafood'
  | 'vegan'
  | 'breakfast'
  | 'other';

export interface Badge {
  id: string;
  name: string;
  description: string;
  icon: string;
  requirement: number; // Kaç tane gerekli
  category: DishCategory;
  tier: 'bronze' | 'silver' | 'gold' | 'platinum';
}

export interface UserProfile {
  id: string;
  name: string;
  email?: string;
  avatar?: string;
  badges: Badge[];
  visitedDishes: string[]; // HeroDish ID'leri
  checkIns: CheckIn[];
  level: number;
  xp: number;
}

export interface CheckIn {
  id: string;
  dishId: string;
  timestamp: Date;
  location: Location;
  photoUrl?: string;
}

export interface MapRegion {
  latitude: number;
  longitude: number;
  latitudeDelta: number;
  longitudeDelta: number;
}
