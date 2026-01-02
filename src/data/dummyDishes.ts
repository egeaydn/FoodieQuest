/**
 * FoodieQuest: Örnek Kahraman Yemek Verileri
 * Bu veriler başlangıç aşamasında kullanılacak, ileride Firebase'den gelecek
 */

import { HeroDish } from '../types';

export const DUMMY_DISHES: HeroDish[] = [
  {
    id: '1',
    name: 'Truffle Burger Supreme',
    description: 'Şehrin en iyi karamelize soğanlı ve trüf soslu burger\'ı! 250g dana eti, taze çedar ve özel brioche ekmek.',
    category: 'burger',
    restaurant: {
      id: 'r1',
      name: 'The Gourmet Spot',
      address: 'Bağdat Caddesi No: 123, Kadıköy, İstanbul',
      phone: '+90 216 555 0101',
      openingHours: {
        monday: '11:00 - 23:00',
        tuesday: '11:00 - 23:00',
        wednesday: '11:00 - 23:00',
        thursday: '11:00 - 23:00',
        friday: '11:00 - 00:00',
        saturday: '11:00 - 00:00',
        sunday: '12:00 - 22:00',
      },
    },
    location: {
      latitude: 40.9885,
      longitude: 29.0332,
    },
    imageUrl: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800',
    rating: 4.8,
    priceRange: '₺₺₺',
    isFeatured: true,
    tags: ['beef', 'truffle', 'gourmet', 'caramelized-onions'],
  },
  {
    id: '2',
    name: 'Dragon Roll Master',
    description: 'Avokado, karides tempura ve özel teriyaki soslu ejderha rolü. Ağzınızda eriyecek!',
    category: 'sushi',
    restaurant: {
      id: 'r2',
      name: 'Sakura Sushi House',
      address: 'Nispetiye Caddesi No: 45, Etiler, İstanbul',
      phone: '+90 212 555 0202',
      openingHours: {
        monday: '12:00 - 22:00',
        tuesday: '12:00 - 22:00',
        wednesday: '12:00 - 22:00',
        thursday: '12:00 - 22:00',
        friday: '12:00 - 23:00',
        saturday: '12:00 - 23:00',
        sunday: 'Kapalı',
      },
    },
    location: {
      latitude: 41.0793,
      longitude: 29.0199,
    },
    imageUrl: 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=800',
    rating: 4.7,
    priceRange: '₺₺₺₺',
    isFeatured: false,
    tags: ['sushi', 'shrimp', 'avocado', 'japanese'],
  },
  {
    id: '3',
    name: 'Margherita Napoletana',
    description: 'İtalya\'dan gelen pizza ustasının 48 saat mayalı hamuru ve gerçek buffalo mozarella ile hazırladığı klasik!',
    category: 'pizza',
    restaurant: {
      id: 'r3',
      name: 'Napoli Express',
      address: 'İstiklal Caddesi No: 234, Beyoğlu, İstanbul',
      phone: '+90 212 555 0303',
      openingHours: {
        monday: '11:00 - 23:00',
        tuesday: '11:00 - 23:00',
        wednesday: '11:00 - 23:00',
        thursday: '11:00 - 23:00',
        friday: '11:00 - 01:00',
        saturday: '11:00 - 01:00',
        sunday: '11:00 - 23:00',
      },
    },
    location: {
      latitude: 41.0369,
      longitude: 28.9784,
    },
    imageUrl: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=800',
    rating: 4.9,
    priceRange: '₺₺',
    isFeatured: true,
    tags: ['pizza', 'italian', 'mozzarella', 'authentic'],
  },
  {
    id: '4',
    name: 'Baklava Premium',
    description: 'Antep fıstıklı, 40 kat yufka ile hazırlanan nefis baklava. Ağızda dağılan dokusu ile efsane!',
    category: 'dessert',
    restaurant: {
      id: 'r4',
      name: 'Hafız Mustafa 1864',
      address: 'Hamidiye Caddesi No: 84, Eminönü, İstanbul',
      phone: '+90 212 555 0404',
      openingHours: {
        monday: '07:00 - 00:00',
        tuesday: '07:00 - 00:00',
        wednesday: '07:00 - 00:00',
        thursday: '07:00 - 00:00',
        friday: '07:00 - 01:00',
        saturday: '07:00 - 01:00',
        sunday: '08:00 - 00:00',
      },
    },
    location: {
      latitude: 41.0115,
      longitude: 28.9717,
    },
    imageUrl: 'https://images.unsplash.com/photo-1519676867240-f03562e64548?w=800',
    rating: 5.0,
    priceRange: '₺₺',
    isFeatured: false,
    tags: ['baklava', 'turkish', 'pistachio', 'dessert'],
  },
  {
    id: '5',
    name: 'Adana Kebap Ateşi',
    description: 'Mangalda közlenmiş gerçek Adana kebap. Acısıyla, baharatıyla tam kıvamında!',
    category: 'kebab',
    restaurant: {
      id: 'r5',
      name: 'Zübeyir Ocakbaşı',
      address: 'Beylerbeyi Sahil Yolu No: 23, Üsküdar, İstanbul',
      phone: '+90 216 555 0505',
      openingHours: {
        monday: '12:00 - 23:00',
        tuesday: '12:00 - 23:00',
        wednesday: '12:00 - 23:00',
        thursday: '12:00 - 23:00',
        friday: '12:00 - 00:00',
        saturday: '12:00 - 00:00',
        sunday: '12:00 - 23:00',
      },
    },
    location: {
      latitude: 41.0421,
      longitude: 29.0376,
    },
    imageUrl: 'https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=800',
    rating: 4.6,
    priceRange: '₺₺₺',
    isFeatured: false,
    tags: ['kebab', 'grilled', 'spicy', 'turkish'],
  },
  {
    id: '6',
    name: 'Tiramisu Classico',
    description: 'İtalyan tatlıların şahı! Mascarpone peyniri ve espresso ile klasik tarif.',
    category: 'dessert',
    restaurant: {
      id: 'r6',
      name: 'Dolce Vita',
      address: 'Abdi İpekçi Caddesi No: 56, Nişantaşı, İstanbul',
      phone: '+90 212 555 0606',
      openingHours: {
        monday: '10:00 - 22:00',
        tuesday: '10:00 - 22:00',
        wednesday: '10:00 - 22:00',
        thursday: '10:00 - 22:00',
        friday: '10:00 - 23:00',
        saturday: '10:00 - 23:00',
        sunday: '11:00 - 22:00',
      },
    },
    location: {
      latitude: 41.0486,
      longitude: 28.9938,
    },
    imageUrl: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=800',
    rating: 4.8,
    priceRange: '₺₺₺',
    isFeatured: true,
    tags: ['tiramisu', 'italian', 'dessert', 'coffee'],
  },
  {
    id: '7',
    name: 'Vegan Buddha Bowl',
    description: 'Kinoa, avokado, taze sebzeler ve tahini soslu sağlıklı ve lezzetli kase.',
    category: 'vegan',
    restaurant: {
      id: 'r7',
      name: 'Green Garden Cafe',
      address: 'Kuruçeşme Caddesi No: 12, Beşiktaş, İstanbul',
      phone: '+90 212 555 0707',
      openingHours: {
        monday: '09:00 - 21:00',
        tuesday: '09:00 - 21:00',
        wednesday: '09:00 - 21:00',
        thursday: '09:00 - 21:00',
        friday: '09:00 - 22:00',
        saturday: '09:00 - 22:00',
        sunday: '10:00 - 21:00',
      },
    },
    location: {
      latitude: 41.0558,
      longitude: 29.0345,
    },
    imageUrl: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800',
    rating: 4.5,
    priceRange: '₺₺',
    isFeatured: false,
    tags: ['vegan', 'healthy', 'quinoa', 'avocado'],
  },
  {
    id: '8',
    name: 'Lobster Mac & Cheese',
    description: 'Istakoz parçaları ve 4 peynirli makarna. Lüks comfort food deneyimi!',
    category: 'seafood',
    restaurant: {
      id: 'r8',
      name: 'The Catch',
      address: 'Muallim Naci Caddesi No: 89, Ortaköy, İstanbul',
      phone: '+90 212 555 0808',
      openingHours: {
        monday: '12:00 - 23:00',
        tuesday: '12:00 - 23:00',
        wednesday: '12:00 - 23:00',
        thursday: '12:00 - 23:00',
        friday: '12:00 - 01:00',
        saturday: '12:00 - 01:00',
        sunday: '12:00 - 23:00',
      },
    },
    location: {
      latitude: 41.0553,
      longitude: 29.0267,
    },
    imageUrl: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=800',
    rating: 4.9,
    priceRange: '₺₺₺₺',
    isFeatured: true,
    tags: ['seafood', 'lobster', 'cheese', 'luxury'],
  },
  {
    id: '9',
    name: 'Carbonara Perfetta',
    description: 'Guanciale, yumurta sarısı ve Pecorino Romano ile geleneksel Roma tarifi.',
    category: 'pasta',
    restaurant: {
      id: 'r9',
      name: 'Trattoria Romana',
      address: 'Asmalımescit No: 34, Beyoğlu, İstanbul',
      phone: '+90 212 555 0909',
      openingHours: {
        monday: '12:00 - 23:00',
        tuesday: '12:00 - 23:00',
        wednesday: '12:00 - 23:00',
        thursday: '12:00 - 23:00',
        friday: '12:00 - 00:00',
        saturday: '12:00 - 00:00',
        sunday: '12:00 - 23:00',
      },
    },
    location: {
      latitude: 41.0317,
      longitude: 28.9751,
    },
    imageUrl: 'https://images.unsplash.com/photo-1612874742237-6526221588e3?w=800',
    rating: 4.7,
    priceRange: '₺₺₺',
    isFeatured: false,
    tags: ['pasta', 'italian', 'carbonara', 'traditional'],
  },
  {
    id: '10',
    name: 'French Toast Deluxe',
    description: 'Brioche ekmeği, karamelize muz, maple şurup ve mascarpone kremasıyla gourmet kahvaltı.',
    category: 'breakfast',
    restaurant: {
      id: 'r10',
      name: 'Breakfast Club',
      address: 'Cevdetpaşa Caddesi No: 45, Bebek, İstanbul',
      phone: '+90 212 555 1010',
      openingHours: {
        monday: '08:00 - 16:00',
        tuesday: '08:00 - 16:00',
        wednesday: '08:00 - 16:00',
        thursday: '08:00 - 16:00',
        friday: '08:00 - 17:00',
        saturday: '08:00 - 18:00',
        sunday: '08:00 - 18:00',
      },
    },
    location: {
      latitude: 41.0826,
      longitude: 29.0415,
    },
    imageUrl: 'https://images.unsplash.com/photo-1484723091739-30a097e8f929?w=800',
    rating: 4.6,
    priceRange: '₺₺',
    isFeatured: false,
    tags: ['breakfast', 'french-toast', 'brunch', 'sweet'],
  },
  {
    id: '11',
    name: 'Çiğ Köfte Wrap',
    description: 'Taze yapılmış çiğ köfte, nar ekşisi ve cevizli özel sarma. Vegan ve çok lezzetli!',
    category: 'vegan',
    restaurant: {
      id: 'r11',
      name: 'Ciğerci Ahmet',
      address: 'Moda Caddesi No: 78, Kadıköy, İstanbul',
      phone: '+90 216 555 1111',
      openingHours: {
        monday: '10:00 - 22:00',
        tuesday: '10:00 - 22:00',
        wednesday: '10:00 - 22:00',
        thursday: '10:00 - 22:00',
        friday: '10:00 - 23:00',
        saturday: '10:00 - 23:00',
        sunday: '11:00 - 22:00',
      },
    },
    location: {
      latitude: 40.9881,
      longitude: 29.0290,
    },
    imageUrl: 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=800',
    rating: 4.4,
    priceRange: '₺',
    isFeatured: false,
    tags: ['vegan', 'turkish', 'spicy', 'wrap'],
  },
  {
    id: '12',
    name: 'Omakase Experience',
    description: 'Şefin özel seçimi 12 parça premium sushi. Her lokmada farklı bir Japonya deneyimi.',
    category: 'sushi',
    restaurant: {
      id: 'r12',
      name: 'Zuma Istanbul',
      address: 'The St. Regis, Zorlu Center, Beşiktaş, İstanbul',
      phone: '+90 212 555 1212',
      openingHours: {
        monday: '12:00 - 23:30',
        tuesday: '12:00 - 23:30',
        wednesday: '12:00 - 23:30',
        thursday: '12:00 - 23:30',
        friday: '12:00 - 00:30',
        saturday: '12:00 - 00:30',
        sunday: '12:00 - 23:30',
      },
    },
    location: {
      latitude: 41.0628,
      longitude: 29.0108,
    },
    imageUrl: 'https://images.unsplash.com/photo-1617196034796-73dfa7b1fd56?w=800',
    rating: 5.0,
    priceRange: '₺₺₺₺',
    isFeatured: true,
    tags: ['sushi', 'omakase', 'luxury', 'japanese'],
  },
];

// Kategoriye göre filtreleme yardımcı fonksiyonu
export const getDishesByCategory = (category: string) => {
  return DUMMY_DISHES.filter(dish => dish.category === category);
};

// Öne çıkan yemekleri getir
export const getFeaturedDishes = () => {
  return DUMMY_DISHES.filter(dish => dish.isFeatured);
};

// ID'ye göre yemek getir
export const getDishById = (id: string) => {
  return DUMMY_DISHES.find(dish => dish.id === id);
};

// En yakındaki yemekleri getir (mesafe hesaplama ile)
export const getNearbyDishes = (userLat: number, userLng: number, maxDistance: number = 5) => {
  return DUMMY_DISHES.filter(dish => {
    const distance = calculateDistance(userLat, userLng, dish.location.latitude, dish.location.longitude);
    return distance <= maxDistance;
  }).sort((a, b) => {
    const distanceA = calculateDistance(userLat, userLng, a.location.latitude, a.location.longitude);
    const distanceB = calculateDistance(userLat, userLng, b.location.latitude, b.location.longitude);
    return distanceA - distanceB;
  });
};

// Haversine formülü ile mesafe hesaplama (km cinsinden)
const calculateDistance = (lat1: number, lon1: number, lat2: number, lon2: number): number => {
  const R = 6371; // Dünya'nın yarıçapı (km)
  const dLat = toRad(lat2 - lat1);
  const dLon = toRad(lon2 - lon1);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
};

const toRad = (value: number): number => {
  return (value * Math.PI) / 180;
};
