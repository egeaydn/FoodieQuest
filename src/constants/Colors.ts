/**
 * FoodieQuest: Gurme Hazinesi
 * Renk Paleti - Modern Hazine Haritası Teması
 */

export const Colors = {
  // Ana Renk Paleti
  background: {
    primary: '#0F172A',      // Gece Yarısı Mavisi
    secondary: '#1E293B',    // Hafif Açık Mavi
    tertiary: '#334155',     // Kart/Panel Arkaplanı
  },

  accent: {
    gold: '#F59E0B',         // Altın Sarısı (Pinler, Vurgular)
    coral: '#EF4444',        // Mercan Kırmızısı (Aksiyon Butonları)
    lightGold: '#FCD34D',    // Açık Altın (Hover Durumları)
  },

  text: {
    primary: '#F8FAFC',      // Beyaz (Ana Metinler)
    secondary: '#CBD5E1',    // Gri-Beyaz (İkincil Metinler)
    muted: '#64748B',        // Soluk Gri (Yardımcı Metinler)
  },

  semantic: {
    success: '#10B981',      // Yeşil (Başarı/Check-in)
    warning: '#F59E0B',      // Turuncu (Uyarılar)
    error: '#EF4444',        // Kırmızı (Hatalar)
    info: '#3B82F6',         // Mavi (Bilgilendirme)
  },

  map: {
    roadColor: '#F59E0B',    // Yollar için altın sarısı
    waterColor: '#0C4A6E',   // Su yüzeyleri için koyu mavi
    buildingColor: 'rgba(51, 65, 85, 0.3)', // Binalar için şeffaf gri
  },

  marker: {
    glowColor: 'rgba(245, 158, 11, 0.8)', // Pin parlaması
    featuredBorder: '#FCD34D',             // Öne çıkan yemek çerçevesi
    normalBorder: '#64748B',               // Normal pin çerçevesi
  },

  overlay: {
    dark: 'rgba(15, 23, 42, 0.8)',   // Koyu overlay (Modal arkaplanı)
    light: 'rgba(248, 250, 252, 0.1)', // Açık overlay
  },

  badge: {
    bronze: '#CD7F32',       // Bronz rozet
    silver: '#C0C0C0',       // Gümüş rozet
    gold: '#FFD700',         // Altın rozet
    platinum: '#E5E4E2',     // Platin rozet
  },
};

// Karanlık Tema Desteği (Gelecek için hazır)
export const DarkColors = Colors;

export const LightColors = {
  ...Colors,
  background: {
    primary: '#F8FAFC',
    secondary: '#F1F5F9',
    tertiary: '#E2E8F0',
  },
  text: {
    primary: '#0F172A',
    secondary: '#334155',
    muted: '#64748B',
  },
};

export default Colors;
