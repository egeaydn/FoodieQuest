# 🍽️ FoodieQuest: Gurme Hazinesi

**Şehirdeki en iyi yemekleri keşfet, hazine avına çık!**

FoodieQuest, mekanları değil, spesifik "kahraman yemekleri" (Hero Dishes) bulmayı sağlayan ve bunu hazine avı estetiğiyle sunan modern bir React Native (Expo) uygulamasıdır.

![FoodieQuest Banner](https://via.placeholder.com/1200x400/0F172A/F59E0B?text=FoodieQuest:+Gurme+Hazinesi)

## ✨ Özellikler

### 🗺️ Özelleştirilmiş Harita
- Dark mode harita stili (altın yollar, şeffaf binalar)
- Yemek fotoğraflı özel pinler
- Glow efekti (haftanın seçimi için)
- Yumuşak kamera animasyonları

### 🎯 Akıllı Keşif
- Pin'e tıkla → Detaylı bilgi paneli
- Yemek açıklamaları ve gurme yorumları
- Restoran bilgileri (adres, telefon, çalışma saatleri)
- "Hazineye Git" navigasyon butonu

### 🎮 Oyunlaştırma (Yakında)
- Check-in sistemi
- Rozet toplama (Burger Avcısı, Sushinin Efendisi vb.)
- Seviye sistemi
- AR check-in deneyimi

### 💫 Wow Faktörleri
- ⚡ **Haptic Feedback:** Pin tıklamalarında titreşim
- 🎬 **Smooth Zoom:** Akıcı kamera hareketleri
- 💀 **Skeleton Screens:** Yükleme animasyonları

## 🚀 Başlangıç

### Gereksinimler

- Node.js 18+
- npm veya yarn
- Expo CLI
- Android Studio (Android için) veya Xcode (iOS için)
- **Google Maps API Key** (gerekli!)

### Kurulum

1. **Projeyi klonlayın**
   ```bash
   git clone https://github.com/yourusername/foodiequest.git
   cd foodiequest
   ```

2. **Bağımlılıkları yükleyin**
   ```bash
   npm install
   ```

3. **Google Maps API Key ekleyin**
   
   [app.json](app.json) dosyasını açın ve API key'lerinizi ekleyin:
   ```json
   {
     "expo": {
       "android": {
         "config": {
           "googleMaps": {
             "apiKey": "YOUR_ANDROID_GOOGLE_MAPS_API_KEY"
           }
         }
       },
       "ios": {
         "config": {
           "googleMapsApiKey": "YOUR_IOS_GOOGLE_MAPS_API_KEY"
         }
       }
     }
   }
   ```

   📌 **Google Maps API Key nasıl alınır?**
   - [Google Cloud Console](https://console.cloud.google.com/)
   - Yeni proje oluşturun
   - Maps SDK for Android/iOS'u aktifleştirin
   - Credentials → Create API Key

4. **Uygulamayı başlatın**
   ```bash
   npx expo start
   ```

   Seçenekler:
   - `a` → Android emulator
   - `i` → iOS simulator
   - QR kod ile Expo Go (gerçek cihaz)

## 📂 Proje Yapısı

```
FoodieQuest/
├── app/                    # Expo Router sayfaları
│   ├── (tabs)/
│   │   └── index.tsx      # Ana harita ekranı
│   └── _layout.tsx        # Root layout
├── src/
│   ├── components/
│   │   ├── CustomMarker.tsx          # Özel yemek pinleri
│   │   ├── DishDetailsSheet.tsx      # Detay paneli
│   │   └── MapViewContainer.tsx      # Harita container
│   ├── constants/
│   │   ├── Colors.ts                 # Renk paleti
│   │   └── MapStyles.json            # Harita stil dosyası
│   ├── data/
│   │   ├── dummyDishes.ts            # Örnek yemek verileri
│   │   └── badges.ts                 # Rozet tanımları
│   ├── hooks/
│   │   └── useLocation.ts            # Konum hook'u
│   └── types/
│       └── index.ts                  # TypeScript tipler
└── docs/
    └── roadmap.md                    # Detaylı yol haritası
```

## 🎨 Tasarım Sistemi

### Renk Paleti

| Renk | Hex | Kullanım |
|------|-----|----------|
| Gece Yarısı Mavisi | `#0F172A` | Arka plan |
| Altın Sarısı | `#F59E0B` | Vurgular, pinler |
| Mercan Kırmızısı | `#EF4444` | Aksiyon butonları |
| İnci Beyazı | `#F8FAFC` | Metinler |

### Tipografi
- Başlıklar: **Inter Bold**
- İçerik: **Inter Regular**

## 🛠️ Teknoloji Stack

| Teknoloji | Versiyon | Amaç |
|-----------|----------|------|
| Expo | 54.0.0 | Framework |
| React Native | Latest | Mobil UI |
| TypeScript | 5.x | Tip güvenliği |
| react-native-maps | Latest | Harita |
| @gorhom/bottom-sheet | Latest | Detay paneli |
| react-native-reanimated | Latest | Animasyonlar |
| lucide-react-native | Latest | İkonlar |
| expo-haptics | Latest | Titreşim |
| expo-location | Latest | Konum |

## 📱 Ekran Görüntüleri

> TODO: Ekran görüntüleri eklenecek

## 🗺️ Yol Haritası

Detaylı yol haritası için [docs/roadmap.md](docs/roadmap.md) dosyasını inceleyin.

### MVP (✅ Tamamlandı)
- [x] Özelleştirilmiş harita stili
- [x] Özel yemek pinleri (glow efekti ile)
- [x] Detay paneli (Bottom Sheet)
- [x] Konum servisleri
- [x] Haptic feedback
- [x] Dummy data

### Sonraki Adımlar (📋 Planlı)
- [ ] Check-in sistemi
- [ ] Rozet kazanma mantığı
- [ ] Kategori filtreleme
- [ ] Firebase entegrasyonu
- [ ] AR check-in deneyimi
- [ ] Kullanıcı profili

## 🤝 Katkıda Bulunma

Katkılarınızı bekliyoruz! Lütfen şu adımları takip edin:

1. Fork'layın
2. Feature branch oluşturun (`git checkout -b feature/amazing-feature`)
3. Commit'leyin (`git commit -m 'feat: Add amazing feature'`)
4. Push'layın (`git push origin feature/amazing-feature`)
5. Pull Request açın

## 📄 Lisans

Bu proje MIT lisansı altında lisanslanmıştır.

## 👨‍💻 Geliştirici

**Your Name**
- GitHub: [@yourusername](https://github.com/yourusername)
- Email: your.email@example.com

## 🙏 Teşekkürler

- [Expo](https://expo.dev/) - Harika framework için
- [Snazzy Maps](https://snazzymaps.com/) - Harita stilleri için
- [Unsplash](https://unsplash.com/) - Yemek görselleri için
- [Lucide Icons](https://lucide.dev/) - Güzel ikonlar için

---

**FoodieQuest ile hazine avına çık! 🍔✨**
