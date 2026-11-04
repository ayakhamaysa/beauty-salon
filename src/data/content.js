// ======================================================
// صالون عدي للسيدات — Oday Shami
// كل نصوص الموقع باللغتين بملف واحد
// price: إذا null ما بيظهر سعر. عبّيه بالأسعار الحقيقية
// hours: عبّيه بأوقات الدوام الحقيقية، إذا فاضي ما بيظهر
// ======================================================

export const content = {
  ar: {
    brand: "عدي الشامي",
    brandSub: "صالون للسيدات",
    nav: { services: "الخدمات", about: "عنّا", book: "احجزي" },
    switchTo: "English",
    hero: {
      eyebrow: "صالون عدي للسيدات · رام الله، المصيون",
      tags: ["عرايس", "صبغات", "اكستنشن"],
      title: "شعرك بإيدين خبير",
      text: "اختصاص عرايس ومرافقات، صبغات بإيد كيميائي ألوان، واكستنشن من خبير وموزع معتمد.",
      cta: "احجزي موعدك",
      second: "شوفي الخدمات",
    },
    servicesTitle: "خدماتنا",
    servicesText: "كل خدمة بتنعمل حسب شعرك وذوقك، وبنتفق على التفاصيل قبل ما نبلش.",
    from: "من",
    currency: "₪",
    services: [
      { title: "تسريحة ومكياج عروس", text: "إطلالة يوم العرس كاملة، مع جلسة تجربة قبلها.", price: null },
      { title: "مرافقات العروس", text: "تسريحات ومكياج للأم والأخوات والصاحبات.", price: null },
      { title: "صبغات وألوان", text: "ألوان مدروسة بإيد كيميائي صبغات، بتحافظ على صحة شعرك.", price: null },
      { title: "اكستنشن", text: "تركيب وصيانة اكستنشن من خبير وموزع معتمد.", price: null },
      { title: "قص وسشوار", text: "قص بيناسب وجهك، وسشوار أو ويفي.", price: null },
      { title: "تسريحات سهرات", text: "تسريحات للخطوبات والحفلات والمناسبات.", price: null },
    ],
    aboutTitle: "ليش عدي الشامي؟",
    about: [
      { title: "اختصاص عرايس", text: "خبرة طويلة بإطلالات العرايس والمرافقات." },
      { title: "كيميائي صبغات", text: "كل لون بيندرس قبل ما يتحط، عشان النتيجة تطلع زي ما بدك." },
      { title: "خبير وموزع اكستنشن", text: "أنواع أصلية، تركيب احترافي، وصيانة دورية." },
    ],
    hoursTitle: "أوقات الدوام",
    hours: [],
    bookTitle: "احجزي موعدك",
    bookText: "اختاري الخدمة، ومنكمل معك على واتساب لتحديد الوقت.",
    choose: "اختاري الخدمة",
    bookButton: "تابعي على واتساب",
    whatsappMessage: (service) => `مرحبا، بدي أحجز موعد لـ: ${service}`,
    address: "رام الله، المصيون",
    footer: "تصميم وتطوير",
  },

  en: {
    brand: "Oday Shami",
    brandSub: "Ladies Beauty Lounge",
    nav: { services: "Services", about: "About", book: "Book" },
    switchTo: "العربية",
    hero: {
      eyebrow: "Oday Shami Ladies Salon · Ramallah, Al-Masyoun",
      tags: ["Brides", "Color", "Extensions"],
      title: "Your hair in expert hands",
      text: "Brides and bridal parties, color by a hair color chemist, and extensions from a certified expert and distributor.",
      cta: "Book an appointment",
      second: "See services",
    },
    servicesTitle: "Our Services",
    servicesText: "Every service is tailored to your hair and taste. We agree on the details before we start.",
    from: "from",
    currency: "₪",
    services: [
      { title: "Bridal Hair & Makeup", text: "Your complete wedding-day look, with a trial session first.", price: null },
      { title: "Bridal Party", text: "Hair and makeup for the mother, sisters and friends.", price: null },
      { title: "Hair Color", text: "Studied color by a color chemist that keeps your hair healthy.", price: null },
      { title: "Hair Extensions", text: "Installation and care from a certified expert and distributor.", price: null },
      { title: "Cut & Blow-dry", text: "A cut that suits your face, with blow-dry or waves.", price: null },
      { title: "Evening Styling", text: "Styles for engagements, parties and special occasions.", price: null },
    ],
    aboutTitle: "Why Oday Shami?",
    about: [
      { title: "Bridal specialist", text: "Long experience with bridal and bridal party looks." },
      { title: "Color chemist", text: "Every shade is studied first, so the result is exactly what you want." },
      { title: "Extensions expert", text: "Original products, professional installation and regular care." },
    ],
    hoursTitle: "Opening hours",
    hours: [],
    bookTitle: "Book your visit",
    bookText: "Pick a service and we'll set the time with you on WhatsApp.",
    choose: "Choose a service",
    bookButton: "Continue on WhatsApp",
    whatsappMessage: (service) => `Hello, I'd like to book: ${service}`,
    address: "Ramallah, Al-Masyoun",
    footer: "Designed & built by",
  },
};

export const salon = {
  // صورة للقوس بالهيدر (شغل عدي، عروس، تسريحة). حطيها بـ public وأكتبي "/hero.jpg"
  // إذا فاضية، بتظهر خصلات الشعر المرسومة
  heroImage: "/images/hero-hair.jpg",
  phone: "0566 06 06 89",
  whatsapp: "972566060689",
  instagram: "https://www.instagram.com/oday.shami/",
  salonInstagram: "https://www.instagram.com/oday.beautyloung/",
};
