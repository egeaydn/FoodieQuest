# 🍽️ FoodieQuest: Gurme Hazinesi - Proje Yol Haritası

## 📖 Proje Özeti

**FoodieQuest**, mekanları değil, spesifik "kahraman yemekleri" (Hero Dishes) aramanızı sağlayan ve bunu bir hazine avı estetiğiyle sunan benzersiz bir mobil uygulama.

**Temel Fark:** Sıradan restoranlar yerine, o restoranın en ikonik yemeğini harita üzerinde gösterir. Hazine avı estetiği ve oyunlaştırma ile kullanıcı deneyimini bir üst seviyeye taşır.

---

## 🎨 1. Görsel Kimlik ve UI Tasarımı

### Tema: Modern Hazine Haritası

**Renk Paleti:**
- 🌙 **Gece Yarısı Mavisi** (`#0F172A`) - Ana arka plan
- ✨ **Altın Sarısı** (`#F59E0B`) - Vurgular, pinler, özel işaretler
- 🔴 **Mercan Kırmızısı** (`#EF4444`) - Yemek görselleri, aksiyon butonları
- 💎 **İnci Beyazı** (`#F8FAFC`) - Metin ve kartlar
- 🌑 **Koyu Gri** (`#1E293B`) - İkincil arka plan

**Harita Stili:**
- Snazzy Maps "Dark Mode" özelleştirilmiş stil
- Yollar altın sarısı tonlarında
- Binalar şeffaf/minimalist
- Su yüzeyleri koyu mavi
- Yeşil alanlar mat siyah-yeşil
- Sadece önemli işaretler görünür

**Tipografi:**
- Başlıklar: **Inter Bold** veya **Lexend Bold**
- İçerik: **Inter Regular** / **Inter Medium**
- Özel vurgular: **Inter SemiBold**

**İkonografi:**
- Lucide React Native (minimalist ve modern)
- Özel gurme ikonları (çatal-bıçak, rozet, yıldız)

---

## 🛠️ 2. Teknik Stack (Expo Ekosistemi)

### Ana Teknolojiler

| Teknoloji | Amaç | Durum |
|-----------|------|-------|
| **Expo SDK 52+** | Framework | ✅ Kurulu |
| **react-native-maps** | Google Maps entegrasyonu | ⏳ Kurulacak |
| **react-native-reanimated** | Akıcı animasyonlar | ✅ Kurulu |
| **@gorhom/bottom-sheet** | Mekan detay paneli | ✅ Kurulu |
| **lucide-react-native** | İkonlar | ✅ Kurulu |
| **expo-haptics** | Dokunsal geri bildirim | ⏳ Entegre edilecek |
| **expo-location** | Konum servisleri | ⏳ Entegre edilecek |
| **TypeScript** | Tip güvenliği | ✅ Kurulu |
| **Firebase/Firestore** | Backend (İleri aşama) | 🔮 Planlı |

---

## 🚀 3. Geliştirme Aşamaları ve Özellikler

### 🗺️ Aşama 1: Özelleştirilmiş Harita Katmanı

**Hedef:** Google Maps'i FoodieQuest estetiğine uyarlamak

**Yapılacaklar:**
- [ ] `src/constants/MapStyles.json` oluştur
  - Dark mode temel stil
  - Altın sarısı yollar
  - Şeffaf/minimalist binalar
  - Su ve yeşil alan renkleri
- [ ] Standart Google Maps UI elementlerini gizle
  - POI (Point of Interest) işaretlerini kapat
  - Varsayılan butonları devre dışı bırak
  - Sadece özel pinleri göster
- [ ] `MapViewContainer.tsx` component'ini oluştur
  - Custom map style uygula
  - Başlangıç konumu ve zoom seviyesi
  - Animasyonlu kamera hareketleri

**Çıktı:** Karanlık tema, altın vurgulu, minimalist harita katmanı

---

### 📍 Aşama 2: "Kahraman Yemek" Pinleri

**Hedef:** Standart pinler yerine görsel olarak zengin, etkileşimli işaretler

**Yapılacaklar:**
- [ ] `CustomMarker.tsx` component'ini oluştur
  - Dairesel yemek fotoğrafı avatar'ı
  - Altın çerçeve (normal pinler için)
  - Parlayan/glow efekti (haftanın seçimi için)
  - Press animasyonu (scale + haptic feedback)
- [ ] Pin kategorileri ve görsel hiyerarşi
  - Normal pin: Gümüş çerçeve
  - Popüler pin: Altın çerçeve
  - Haftanın gurme seçimi: Altın + glow efekti
- [ ] Pin state yönetimi
  - Aktif/seçili pin büyütme
  - Hover efekti (kullanıcı yakınındaysa pulse)

**Çıktı:** Yüksek kaliteli, etkileşimli özel pinler

---

### 🃏 Aşama 3: Etkileşimli Keşif Kartı (Bottom Sheet)

**Hedef:** Yemek detaylarını göstermek için şık, akıcı panel

**Yapılacaklar:**
- [ ] `DishDetailsSheet.tsx` component'ini oluştur
  - @gorhom/bottom-sheet entegrasyonu
  - 3 snap noktası: kapalı, özet, tam detay
- [ ] Kart içeriği (özet görünüm)
  - Yüksek çözünürlüklü yemek fotoğrafı
  - Yemek adı ve gurme yorumu (1 cümle)
  - Restoran adı ve uzaklık
  - "Hazineye Git" butonu (navigasyon)
- [ ] Kart içeriği (tam görünüm)
  - Tüm yemek detayları
  - Mekan bilgileri (adres, telefon)
  - Çalışma saatleri
  - Diğer popüler yemekler
  - Kullanıcı yorumları (opsiyonel)
- [ ] Animasyonlar
  - Yumuşak açılma/kapanma
  - Backdrop blur efekti
  - Scroll parallax efekti

**Çıktı:** Instagram tarzı, görsel olarak zengin detay paneli

---

### 🎮 Aşama 4: Oyunlaştırma (Hazine Avı Sistemi)

**Hedef:** Uygulamayı oyun gibi eğlenceli hale getirmek

**Yapılacaklar:**
- [ ] Check-in sistemi
  - GPS bazlı konum doğrulama
  - "Hazineyi Buldun!" animasyonu
  - Puan/deneyim kazanma
- [ ] Rozet sistemi (`src/data/badges.ts`)
  - "Burger Avcısı" (5 burger check-in)
  - "Sushinin Efendisi" (10 sushi check-in)
  - "Tatlı Düşkünü" (15 tatlı check-in)
  - "Gurme Gezgini" (50 toplam check-in)
  - "Hazine Avcısı" (100 toplam check-in)
- [ ] Profil ve istatistikler
  - Toplam bulunan hazine sayısı
  - Kazanılan rozetler
  - Favori yemek kategorileri
  - Haftalık/aylık keşif istatistikleri
- [ ] Sosyal özellikler (opsiyonel)
  - Arkadaş ekle
  - Rozet paylaşma
  - Liderlik tablosu

**Çıktı:** Bağımlılık yaratan oyunlaştırma katmanı

---

### 📸 Aşama 5: Arttırılmış Gerçeklik (AR) - Bonus Özellik

**Hedef:** Mekan başarma deneyimini bir üst seviyeye taşımak

**Yapılacaklar:**
- [ ] `expo-camera` entegrasyonu
- [ ] QR kod tarama (restoran onayı için)
- [ ] Kamera overlay
  - Sanal "Onaylandı!" damgası
  - Konfeti animasyonu
  - Fotoğraf kaydetme
- [ ] Galeri entegrasyonu
  - Başarılan yemek fotoğrafları
  - Sosyal medya paylaşım butonu

**Çıktı:** Instagrammable AR deneyimi

---

## 🎯 4. Kritik Dokunuşlar (The "Wow" Factors)

### ⚡ 1. Haptic Feedback (Dokunsal Geri Bildirim)

**Kullanım Alanları:**
- Pin'e tıklama → Hafif titreşim (`ImpactFeedbackStyle.Light`)
- Check-in başarısı → Orta titreşim (`ImpactFeedbackStyle.Medium`)
- Rozet kazanma → Güçlü titreşim (`NotificationFeedbackType.Success`)
- Hata durumu → Uyarı titreşimi (`NotificationFeedbackType.Error`)

**Teknik:**
```typescript
import * as Haptics from 'expo-haptics';

const handlePinPress = () => {
  Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
  // ... diğer işlemler
};
```

---

### 🎬 2. Smooth Zoom (Akıcı Kamera Hareketleri)

**Kullanım Alanları:**
- Kategori seçimi → Otomatik zoom
- Pin seçimi → Yumuşak odaklanma
- Check-in → Kullanıcı konumuna zoom

**Teknik:**
```typescript
mapRef.current?.animateCamera({
  center: { latitude: 41.0082, longitude: 28.9784 },
  zoom: 15,
  heading: 0,
  pitch: 0,
}, { duration: 1000 });
```

---

### 💀 3. Skeleton Screens (Yükleme Animasyonları)

**Kullanım Alanları:**
- Harita yüklenirken → Yanıp sönen halkalar
- Bottom sheet açılırken → Gradient placeholder
- Görsel yüklenirken → Shimmer efekti

**Teknik:**
- `react-native-reanimated` ile custom skeleton
- Fade-in animasyonu ile gerçek içeriğe geçiş

---

## 📂 5. Proje Dosya Yapısı

```
/src
  /components
    - CustomMarker.tsx          # Özel yemek pin'i
    - DishDetailsSheet.tsx      # Alttan açılan detay paneli
    - MapViewContainer.tsx      # Ana harita container
    - SkeletonLoader.tsx        # Yükleme animasyonları
    - BadgeCard.tsx             # Rozet kartı
    - CategoryFilter.tsx        # Yemek kategorisi filtreleri
  
  /constants
    - MapStyles.json            # Snazzy Maps stil dosyası
    - Colors.ts                 # Renk paleti
    - Fonts.ts                  # Tipografi sabitleri
  
  /data
    - dummyDishes.ts            # Örnek yemek verileri
    - badges.ts                 # Rozet tanımları
  
  /hooks
    - useLocation.ts            # Kullanıcı konumu hook'u
    - useCheckIn.ts             # Check-in mantığı
    - useBadges.ts              # Rozet kazanma mantığı
  
  /types
    - index.ts                  # TypeScript tipler
  
  /utils
    - mapHelpers.ts             # Harita yardımcı fonksiyonlar
    - distanceCalculator.ts    # Mesafe hesaplama
```

---

## 📊 6. Dummy Data Yapısı

### Yemek (Dish) Modeli

```typescript
interface Dish {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  category: 'burger' | 'sushi' | 'dessert' | 'pasta' | 'steak';
  restaurant: Restaurant;
  location: {
    latitude: number;
    longitude: number;
  };
  rating: number;
  price: number;
  isWeeklyPick: boolean;
  isPopular: boolean;
}
```

### Restoran Modeli

```typescript
interface Restaurant {
  id: string;
  name: string;
  address: string;
  phone: string;
  openingHours: string;
  otherDishes: string[];
}
```

---

## 🎨 7. Animasyon Detayları

### Pin Animasyonları
- **Görünüm:** Scale from 0 to 1 (300ms, Easing.bezier)
- **Seçilme:** Scale to 1.2 + Shadow (200ms)
- **Glow efekti:** Opacity pulse 0.5 ↔ 1.0 (1000ms loop)

### Bottom Sheet Animasyonları
- **Açılış:** TranslateY from 100% to 0 (400ms, Spring)
- **Backdrop:** Opacity 0 to 0.5 (300ms)
- **İçerik:** FadeIn + TranslateY (stagger 50ms)

### Check-in Animasyonu
- **Konfeti:** Particles explosion (1000ms)
- **Rozet:** Scale + Rotate 360° (800ms)
- **Puan:** CountUp + FadeIn (500ms)

---

## ✅ 8. Geliştirme Checklist

### Başlangıç Kurulumu
- [x] Expo projesi oluştur
- [x] TypeScript yapılandırması
- [x] Temel paketler yükle
  - [x] react-native-reanimated
  - [x] @gorhom/bottom-sheet
  - [x] lucide-react-native
- [ ] react-native-maps kurulumu
- [ ] expo-haptics kurulumu
- [ ] expo-location kurulumu

### Temel Altyapı
- [ ] MapStyles.json oluştur
- [ ] Colors.ts sabitlerini tanımla
- [ ] TypeScript type tanımlamaları
- [ ] Dummy data hazırla

### Component Geliştirme
- [ ] MapViewContainer (Harita temeli)
- [ ] CustomMarker (Pinler)
- [ ] DishDetailsSheet (Detay paneli)
- [ ] SkeletonLoader (Yükleme)
- [ ] CategoryFilter (Filtreler)
- [ ] BadgeCard (Rozetler)

### Özellik Geliştirme
- [ ] Konum izni ve takibi
- [ ] Harita etkileşimleri
- [ ] Bottom sheet entegrasyonu
- [ ] Haptic feedback ekleme
- [ ] Check-in sistemi
- [ ] Rozet kazanma mantığı

### Polish ve Optimizasyon
- [ ] Tüm animasyonları uygula
- [ ] Skeleton screens ekle
- [ ] Performans optimizasyonu
- [ ] Hata yönetimi
- [ ] Accessibility iyileştirmeleri

---

## 🚀 9. Sonraki Adımlar (MVP Sonrası)

1. **Firebase Entegrasyonu**
   - Gerçek yemek verisi
   - Kullanıcı hesapları
   - Check-in geçmişi

2. **Sosyal Özellikler**
   - Arkadaş sistemi
   - Yorum ve değerlendirme
   - Fotoğraf paylaşımı

3. **Gelişmiş Filtreler**
   - Fiyat aralığı
   - Uzaklık filtreleme
   - Kategori kombinasyonları

4. **Push Bildirimleri**
   - Yakınlarınızda yeni yemek
   - Arkadaş check-in'i
   - Haftalık özet

---

## 📱 10. Test Stratejisi

### Test Cihazları
- iOS: iPhone 14 Pro (simulator)
- Android: Pixel 7 (emulator)
- Gerçek cihaz testleri

### Test Senaryoları
1. Harita yükleme ve render performansı
2. Pin tıklama ve detay açılma akışı
3. Konum izni ve GPS doğruluğu
4. Animasyon akıcılığı (60 FPS hedefi)
5. Check-in başarı oranı
6. Haptic feedback tutarlılığı

---

## 🎓 11. Öğrenme Kaynakları

### Harita Stillendirme
- [Snazzy Maps](https://snazzymaps.com/) - Dark mode örnekleri
- [Google Maps Styling Wizard](https://mapstyle.withgoogle.com/)

### Animasyonlar
- [React Native Reanimated Docs](https://docs.swmansion.com/react-native-reanimated/)
- [William Candillon YouTube](https://www.youtube.com/@wcandillon) - Animasyon tutorials

### Best Practices
- [Expo Documentation](https://docs.expo.dev/)
- [React Native Performance](https://reactnative.dev/docs/performance)

---

**Hedef Tamamlanma Süresi:** 2-3 hafta (MVP)  
**Zorluk Seviyesi:** Orta-İleri  
**En Heyecan Verici Özellik:** Glow efektli pinler + AR check-in! 🎯✨

### 🏁 Aşama 1: Özelleştirilmiş Harita Katmanı
**Süre:** 2-3 gün

**Hedef:** Temiz, minimal bir harita deneyimi oluşturmak.

**Yapılacaklar:**
- [ ] Snazzy Maps'ten özel stil indirip `MapStyles.json` oluştur
- [ ] `customMapStyle` ile standart UI elementlerini gizle
- [ ] Haritayı fullscreen modda aç
- [ ] Kullanıcı konumunu tespit et ve haritayı ortalı başlat

**Dosyalar:**
- `src/constants/MapStyles.json`
- `src/components/MapViewContainer.tsx`

---

### 📍 Aşama 2: "Kahraman Yemek" Pinleri
**Süre:** 3-4 gün

**Hedef:** Harita üzerinde yemek fotoğraflı, parlayan özel pinler.

**Yapılacaklar:**
- [ ] Dairesel yemek fotoğrafları marker olarak göster
- [ ] CSS Shadow ile glow efekti ekle
- [ ] "Haftanın Seçimi" için altın çerçeve (golden border)
- [ ] Marker'lara basıldığında hafif büyüme animasyonu

**Wow Factor:**
```tsx
// Parlama efekti örneği
<View style={{
  shadowColor: '#F59E0B',
  shadowRadius: 15,
  shadowOpacity: 0.8,
  elevation: 10
}}>
  <Image source={dishPhoto} />
</View>
```

**Dosyalar:**
- `src/components/CustomMarker.tsx`
- `src/data/dummyDishes.ts`

---

### 🃏 Aşama 3: Etkileşimli Keşif Kartı (Bottom Sheet)
**Süre:** 4-5 gün

**Hedef:** Kullanıcı deneyimini yumuşak ve şık hale getirmek.

**Yapılacaklar:**
- [ ] @gorhom/bottom-sheet entegrasyonu
- [ ] Kart içeriği: Yüksek çözünürlüklü fotoğraf + Gurme yorumu
- [ ] "Hazineye Git" navigasyon butonu
- [ ] Yukarı çekildiğinde mekan detayları göster
- [ ] Blur arka plan efekti (kart açıkken harita hafif bulanık)

**İçerik Yapısı:**
```
[Pin tıklandı]
↓
[Kart 30% görünüm]
- Yemek fotoğrafı (Hero)
- "Bu burger şehrin en iyi karamelize soğanlı burgerı!" 
- ⭐ 4.8 · 📍 1.2 km uzakta

[Yukarı swipe → Tam görünüm]
- Mekan adı, adres, telefon
- Çalışma saatleri
- Diğer popüler yemekler
- Kullanıcı yorumları (opsiyonel)
```

**Dosyalar:**
- `src/components/DishDetailsSheet.tsx`

---

### 🎮 Aşama 4: Oyunlaştırma (Hazine Avı)
**Süre:** 5-7 gün

**Hedef:** Kullanıcıyı aktif tutmak ve bağlılık yaratmak.

**Yapılacaklar:**
- [ ] GPS tabanlı check-in sistemi (100m yarıçap)
- [ ] "Hazineyi Buldun!" başarı ekranı (konfeti animasyonu)
- [ ] Rozet sistemi: "Burger Avcısı", "Sushinin Efendisi"
- [ ] Profil sayfası: Toplanan rozetler ve ziyaret edilen yemekler
- [ ] Leaderboard (opsiyonel)

**Rozet Örnekleri:**
- 🍔 5 farklı burger → **Burger Avcısı**
- 🍣 3 farklı sushi → **Sushinin Efendisi**
- 🍰 10 tatlı → **Tatlı Hazine Avcısı**

---

### 🚀 Bonus Aşama: Arttırılmış Gerçeklik (AR)
**Süre:** 3-4 gün (isteğe bağlı)

**Yapılacaklar:**
- [ ] expo-camera ile kamera entegrasyonu
- [ ] Mekana varıldığında kamerayı aç
- [ ] Yemeğin üzerinde sanal "Onaylandı ✓" damgası göster
- [ ] Fotoğrafı galeriye kaydet

---

## 📂 4. Proje Dosya Yapısı

```
/FoodieQuest
├── app/
│   ├── (tabs)/
│   │   ├── index.tsx          # Ana Harita Ekranı
│   │   ├── explore.tsx        # Keşfet/Kategoriler
│   │   └── profile.tsx        # Profil & Rozetler (yeni)
│   ├── _layout.tsx
│   └── modal.tsx
│
├── src/
│   ├── components/
│   │   ├── CustomMarker.tsx          # Özel yemek pinleri
│   │   ├── DishDetailsSheet.tsx      # Alttan açılan panel
│   │   ├── MapViewContainer.tsx      # Harita ana bileşeni
│   │   ├── CategoryFilter.tsx        # Kategori filtreleme
│   │   └── AchievementBadge.tsx      # Rozet bileşeni
│   │
│   ├── constants/
│   │   ├── MapStyles.json            # Snazzy Maps stili
│   │   └── Colors.ts                 # Renk paleti
│   │
│   ├── data/
│   │   ├── dummyDishes.ts            # Örnek yemek verileri
│   │   └── badges.ts                 # Rozet tanımları
│   │
│   ├── hooks/
│   │   ├── useLocation.ts            # Konum takibi
│   │   └── useCheckIn.ts             # Check-in mantığı
│   │
│   └── types/
│       └── index.ts                  # TypeScript tipleri
│
├── assets/
│   ├── images/
│   │   ├── badges/                   # Rozet ikonları
│   │   └── dishes/                   # Örnek yemek fotoğrafları
│   └── fonts/
│
└── docs/
    ├── roadmap.md                     # Bu dosya
    └── api-design.md                  # API yapısı (ileride)
```

---

## 💎 5. Projeyi "Gerçekten Harika" Yapacak 3 Kritik Dokunuş

### 1️⃣ **Haptic Feedback** (Dokunsal Geri Bildirim)
```tsx
import * as Haptics from 'expo-haptics';

// Pin'e tıklandığında
<Pressable onPress={() => {
  Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
  openDishDetails();
}}>
```
**Etki:** Fiziksel bir düğmeye basıyormuş hissi verir, premium deneyim.

---

### 2️⃣ **Smooth Zoom Animasyonu**
```tsx
// Kategori seçildiğinde (örn. sadece 'Tatlılar')
mapRef.current?.animateToRegion({
  latitude: targetLocation.lat,
  longitude: targetLocation.lng,
  latitudeDelta: 0.05,
  longitudeDelta: 0.05,
}, 1000); // 1 saniye yumuşak geçiş
```
**Etki:** Apple Maps seviyesinde akıcı bir deneyim.

---

### 3️⃣ **Skeleton Screens** (Modern Yükleme)
Gri kutular yerine:
```tsx
<View style={{
  width: 60,
  height: 60,
  borderRadius: 30,
  backgroundColor: 'rgba(245, 158, 11, 0.2)',
  // Yanıp sönen animasyon
}}>
  <Animated.View style={pulseAnimation} />
</View>
```
**Etki:** Instagram/Airbnb seviyesinde premium yükleme deneyimi.

---

## 📅 Tahmini Zaman Çizelgesi

| Aşama | Süre | Bitiş Tarihi |
|-------|------|--------------|
| Proje Kurulumu & Temeller | 2 gün | 4 Ocak |
| Aşama 1: Harita Katmanı | 3 gün | 7 Ocak |
| Aşama 2: Özel Pinler | 4 gün | 11 Ocak |
| Aşama 3: Bottom Sheet | 5 gün | 16 Ocak |
| Aşama 4: Oyunlaştırma | 7 gün | 23 Ocak |
| Polish & Testing | 3 gün | 26 Ocak |
| **TOPLAM** | **24 gün** | **~27 Ocak** |

---

## 🎯 Başarı Kriterleri

Projenin "başarılı" sayılması için:
- ✅ Harita 60 FPS'de sorunsuz çalışmalı
- ✅ Bottom sheet animasyonu kesintisiz olmalı
- ✅ En az 15 örnek "Kahraman Yemek" verisi olmalı
- ✅ Dark mode tasarım %100 tamamlanmış olmalı
- ✅ Haptic feedback tüm kritik aksiyonlarda aktif
- ✅ Check-in sistemi GPS ile çalışmalı

---

## 📚 Faydalı Kaynaklar

- [Snazzy Maps](https://snazzymaps.com/) - Harita stilleri
- [Expo Maps Docs](https://docs.expo.dev/versions/latest/sdk/map-view/)
- [Gorhom Bottom Sheet](https://gorhom.github.io/react-native-bottom-sheet/)
- [React Native Reanimated](https://docs.swmansion.com/react-native-reanimated/)

---

## 🚀 Hemen Başla!

```bash
# Gerekli paketleri yükle
npx expo install react-native-maps expo-location expo-haptics

npm install @gorhom/bottom-sheet react-native-reanimated lucide-react-native

# Geliştirme sunucusunu başlat
npx expo start
```

---

**Son Güncelleme:** 2 Ocak 2026  
**Versiyon:** 1.0  
**Geliştirici:** FoodieQuest Team
