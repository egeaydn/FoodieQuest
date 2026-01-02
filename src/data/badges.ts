/**
 * FoodieQuest: Rozet Tanımları
 * Kullanıcıların kazanabileceği başarı rozetleri
 */

import { Badge } from '../types';

export const BADGES: Badge[] = [
  // Burger Rozetleri
  {
    id: 'burger-novice',
    name: 'Burger Meraklısı',
    description: '3 farklı burger tattın!',
    icon: '🍔',
    requirement: 3,
    category: 'burger',
    tier: 'bronze',
  },
  {
    id: 'burger-hunter',
    name: 'Burger Avcısı',
    description: '5 farklı burger tattın!',
    icon: '🍔',
    requirement: 5,
    category: 'burger',
    tier: 'silver',
  },
  {
    id: 'burger-master',
    name: 'Burger Ustası',
    description: '10 farklı burger tattın!',
    icon: '🍔',
    requirement: 10,
    category: 'burger',
    tier: 'gold',
  },

  // Sushi Rozetleri
  {
    id: 'sushi-beginner',
    name: 'Sushi Öğrencisi',
    description: '2 farklı sushi tattın!',
    icon: '🍣',
    requirement: 2,
    category: 'sushi',
    tier: 'bronze',
  },
  {
    id: 'sushi-sensei',
    name: 'Sushinin Efendisi',
    description: '5 farklı sushi tattın!',
    icon: '🍣',
    requirement: 5,
    category: 'sushi',
    tier: 'silver',
  },
  {
    id: 'sushi-legend',
    name: 'Sushi Efsanesi',
    description: '10 farklı sushi tattın!',
    icon: '🍣',
    requirement: 10,
    category: 'sushi',
    tier: 'gold',
  },

  // Pizza Rozetleri
  {
    id: 'pizza-lover',
    name: 'Pizza Aşığı',
    description: '3 farklı pizza tattın!',
    icon: '🍕',
    requirement: 3,
    category: 'pizza',
    tier: 'bronze',
  },
  {
    id: 'pizza-connoisseur',
    name: 'Pizza Uzmanı',
    description: '7 farklı pizza tattın!',
    icon: '🍕',
    requirement: 7,
    category: 'pizza',
    tier: 'silver',
  },

  // Tatlı Rozetleri
  {
    id: 'dessert-fan',
    name: 'Tatlı Tutkunı',
    description: '5 farklı tatlı tattın!',
    icon: '🍰',
    requirement: 5,
    category: 'dessert',
    tier: 'bronze',
  },
  {
    id: 'dessert-hunter',
    name: 'Tatlı Hazine Avcısı',
    description: '10 farklı tatlı tattın!',
    icon: '🍰',
    requirement: 10,
    category: 'dessert',
    tier: 'silver',
  },
  {
    id: 'dessert-master',
    name: 'Tatlı Ustası',
    description: '15 farklı tatlı tattın!',
    icon: '🍰',
    requirement: 15,
    category: 'dessert',
    tier: 'gold',
  },

  // Kebap Rozetleri
  {
    id: 'kebab-enthusiast',
    name: 'Kebap Meraklısı',
    description: '3 farklı kebap tattın!',
    icon: '🥙',
    requirement: 3,
    category: 'kebab',
    tier: 'bronze',
  },
  {
    id: 'kebab-master',
    name: 'Kebap Ustası',
    description: '6 farklı kebap tattın!',
    icon: '🥙',
    requirement: 6,
    category: 'kebab',
    tier: 'silver',
  },

  // Vegan Rozetleri
  {
    id: 'vegan-explorer',
    name: 'Vegan Kaşifi',
    description: '4 farklı vegan yemek tattın!',
    icon: '🥗',
    requirement: 4,
    category: 'vegan',
    tier: 'bronze',
  },
  {
    id: 'vegan-champion',
    name: 'Vegan Şampiyonu',
    description: '8 farklı vegan yemek tattın!',
    icon: '🥗',
    requirement: 8,
    category: 'vegan',
    tier: 'gold',
  },

  // Deniz Ürünleri Rozetleri
  {
    id: 'seafood-lover',
    name: 'Deniz Ürünleri Aşığı',
    description: '3 farklı deniz ürünü yemeği tattın!',
    icon: '🦞',
    requirement: 3,
    category: 'seafood',
    tier: 'bronze',
  },
  {
    id: 'seafood-expert',
    name: 'Deniz Ürünleri Uzmanı',
    description: '6 farklı deniz ürünü yemeği tattın!',
    icon: '🦞',
    requirement: 6,
    category: 'seafood',
    tier: 'gold',
  },

  // Pasta Rozetleri
  {
    id: 'pasta-fan',
    name: 'Pasta Hayranı',
    description: '3 farklı pasta tattın!',
    icon: '🍝',
    requirement: 3,
    category: 'pasta',
    tier: 'bronze',
  },
  {
    id: 'pasta-master',
    name: 'Pasta Ustası',
    description: '7 farklı pasta tattın!',
    icon: '🍝',
    requirement: 7,
    category: 'pasta',
    tier: 'silver',
  },

  // Kahvaltı Rozetleri
  {
    id: 'breakfast-lover',
    name: 'Kahvaltı Aşığı',
    description: '4 farklı kahvaltı menüsü tattın!',
    icon: '🥞',
    requirement: 4,
    category: 'breakfast',
    tier: 'bronze',
  },
  {
    id: 'breakfast-champion',
    name: 'Kahvaltı Şampiyonu',
    description: '8 farklı kahvaltı menüsü tattın!',
    icon: '🥞',
    requirement: 8,
    category: 'breakfast',
    tier: 'silver',
  },
];

// Kullanıcının bir rozet kazanıp kazanmadığını kontrol et
export const checkBadgeEligibility = (
  visitedDishes: string[],
  badge: Badge,
  allDishes: any[]
): boolean => {
  const categoryDishes = allDishes.filter(dish => dish.category === badge.category);
  const visitedInCategory = categoryDishes.filter(dish => 
    visitedDishes.includes(dish.id)
  );
  return visitedInCategory.length >= badge.requirement;
};

// Kullanıcının kazanabileceği tüm rozetleri hesapla
export const calculateEarnedBadges = (
  visitedDishes: string[],
  allDishes: any[]
): Badge[] => {
  return BADGES.filter(badge => 
    checkBadgeEligibility(visitedDishes, badge, allDishes)
  );
};

// Bir sonraki rozet için ilerlemeyi hesapla
export const getNextBadgeProgress = (
  visitedDishes: string[],
  category: string,
  allDishes: any[]
): { badge: Badge | null; current: number; required: number } => {
  const categoryBadges = BADGES.filter(b => b.category === category)
    .sort((a, b) => a.requirement - b.requirement);
  
  const categoryDishes = allDishes.filter(dish => dish.category === category);
  const visitedCount = categoryDishes.filter(dish => 
    visitedDishes.includes(dish.id)
  ).length;

  const nextBadge = categoryBadges.find(badge => visitedCount < badge.requirement);

  return {
    badge: nextBadge || null,
    current: visitedCount,
    required: nextBadge?.requirement || 0,
  };
};
