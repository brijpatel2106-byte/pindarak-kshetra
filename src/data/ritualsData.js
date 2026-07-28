export const RITUAL_CATEGORIES = [
  { id: 'all', label: { en: 'All Rituals', hi: 'सभी अनुष्ठान', gu: 'તમામ પૂજા' } },
  { id: 'pitru', label: { en: 'Pitru & Tarpan', hi: 'पितृ कर्म व तर्पण', gu: 'પિતૃ તર્પણ વિધિ' } },
  { id: 'sarpa', label: { en: 'Sarpa Dosha Shanti', hi: 'कालसर्प दोष शांति', gu: 'સર્પ દોષ શાંતિ' } },
  { id: 'navagraha', label: { en: 'Navagraha Shanti', hi: 'नवग्रह शांति यज्ञ', gu: 'નવગ્રહ શાંતિ યજ્ઞ' } },
  { id: 'yajna', label: { en: 'Major Yajnas', hi: 'महायज्ञ व जाप', gu: 'મહાયજ્ઞ અને જાપ' } },
  { id: 'katha', label: { en: 'Kathas & Pujas', hi: 'कथा व नियमित पूजा', gu: 'કથા અને પવિત્ર પૂજા' } },
  { id: 'astrology', label: { en: 'Astrology Guidance', hi: 'ज्योतिष परामर्श', gu: 'જ્યોતિષીય સલાહ' } }
];

export const ritualsData = [
  {
    id: "narayan-nagbali-pitru",
    category: "pitru",
    popular: true,
    title: {
      en: "Narayan Nagbali & Pitru Moksha Vidhi",
      hi: "नारायण नागबलि एवं पितृ मोक्ष विधि",
      gu: "નારાયણ નાગબલી અને પિતૃ મોક્ષ વિધિ"
    },
    shortSummary: {
      en: "Essential sacred 3-day ritual for resolving ancestral peace, unfulfilled Pitru Dosha, and spiritual lineage harmony.",
      hi: "पितृ दोष निवारण और वंश शांति हेतु अत्यंत पवित्र 3 दिवसीय शास्त्रीय अनुष्ठान।",
      gu: "પિતૃ દોષ નિવારણ અને વંશ શાંતિ માટે અતિ પવિત્ર ૩ દિવસીય શાસ્ત્રોક્ત વિધિ."
    },
    duration: "3 Days (Approx 4 hours daily)",
    locationOptions: ["Pindarak Kshetra Temple Grounds", "Online Guided E-Puja"],
    image: "/images/narayan_nagbali.jpg?v=2",
    overview: {
      en: "Narayan Nagbali is one of the most significant Vedic rituals performed at holy kshetras like Pindarak. It consists of two distinct parts: Narayan Bali (to liberate souls of departed ancestors suffering from unfulfilled desires) and Nagbali (to seek forgiveness for accidental harm to serpents).",
      hi: "नारायण नागबलि पिंडारक जैसे पवित्र क्षेत्रों में संपन्न किया जाने वाला अत्यंत महत्वपूर्ण वैदिक अनुष्ठान है। यह दो भागों में होता है: नारायण बलि (पितरों की आत्मा की मुक्ति हेतु) और नागबलि (सर्प दोष निवारण हेतु)।",
      gu: "નારાયણ નાગબલી પિંડારક જેવા પવિત્ર તીર્થક્ષેત્રે કરવામાં આવતી અત્યંત મહત્વપૂર્ણ વૈદિક વિધિ છે. આમાં નારાયણ બલી અને નાગબલી એમ બે ભાગ હોય છે."
    },
    scripturalSignificance: {
      en: "According to Garuda Purana and Dharma Sindhu, performing Narayan Nagbali at sacred coastal kshetras bestows peace upon ancestors and removes hurdles in family growth, health, and progeny.",
      hi: "गरुड़ पुराण और धर्म सिंधु के अनुसार पवित्र समुद्र तट क्षेत्रों पर नारायण नागबलि करने से पितरों को शांति मिलती है और परिवार में आ रही रुकावटें दूर होती हैं।",
      gu: "ગરુડ પુરાણ અને ધર્મ સિંધુ અનુસાર પવિત્ર ક્ષેત્રે આ વિધિ કરવાથી પિતૃઓને શાંતિ મળે છે અને પરિવારનો વિકાસ થાય છે."
    },
    whoNeedsIt: [
      "Families experiencing repeated hurdles in health, progeny, or business.",
      "Unexplained obstacles despite best efforts.",
      "Astrological indication of severe Pitru Dosha in horoscope.",
      "Desire to honor departed ancestors with full Vedic rites."
    ],
    preparationGuidelines: [
      "Maintain a vegetarian diet 3 days prior to the ceremony.",
      "Wear clean traditional attire (Dhoti/Kurta for men, Saree/Salwar for women).",
      "Bring details of family Gotra and ancestors' names if known.",
      "All primary puja samagri is arranged directly by Pindarak Kshetra."
    ],
    ceremonyFlow: [
      "Day 1: Sankalp, Body Purification, and Sacred Narayan Bali Pind Daan.",
      "Day 2: Wheat/Brass Cobra Naga Bali rituals and Agni Havan.",
      "Day 3: Vishnu Tarpan, Purnahuti, and Pujari Ashirvadam."
    ]
  },
  {
    id: "sarpa-dosha-shanti",
    category: "sarpa",
    popular: true,
    title: {
      en: "Kaal Sarp & Sarpa Dosha Shanti Puja",
      hi: "कालसर्प एवं सर्प दोष शांति पूजा",
      gu: "કાલસર્પ અને સર્પ દોષ શાંતિ પૂજા"
    },
    shortSummary: {
      en: "Sacred Vedic Havan and Jal Abhishekam to nullify planetary Rahu-Ketu Sarpa Dosha afflictions.",
      hi: "राहू-केतु एवं सर्प दोष के दुष्प्रभावों को शांत करने हेतु पवित्र वैदिक हवन एवं जलाभिषेक।",
      gu: "રાહુ-કેતુ અને સર્પ દોષના નકારાત્મક પ્રભાવને શાંત કરવા માટે પવિત્ર વૈદિક યજ્ઞ."
    },
    duration: "1 Day (Approx 3 to 4 hours)",
    locationOptions: ["Pindarak Kshetra Temple Grounds", "Home Puja", "Online Guided"],
    image: "/images/sarp_dosh.jpg?v=2",
    overview: {
      en: "Kaal Sarp Dosha occurs when all planets are hemmed between Rahu and Ketu. This ritual invokes the blessings of Lord Shiva and Nag Devata to restore balance, peace of mind, and clarity.",
      hi: "जब कुंडली में सभी ग्रह राहू और केतु के बीच आ जाते हैं तब कालसर्प योग बनता है। भगवान शिव और नाग देवता की विशेष पूजा से यह दोष शांत होता है।",
      gu: "જ્યારે કુંડળીમાં તમામ ગ્રહો રાહુ અને કેતુની વચ્ચે આવે છે ત્યારે કાલસર્પ દોષ બને છે. આ પૂજાથી માનસિક શાંતિ મળે છે."
    },
    scripturalSignificance: {
      en: "Tradition holds that Nag Puja performed with silver serpent idols and Maha Mrityunjaya mantra chanting relieves mental stress and career delays.",
      hi: "चांदी के नाग जोड़े के साथ महामृत्युंजय मंत्र जप पूर्वक की गई पूजा मानसिक तनाव और कार्यों में रुकावट को दूर करती है।",
      gu: "ચાંદીના નાગ જોડી સાથે મહામૃત્યુંજય જાપ કરવાથી કારકિર્દીમાં સફળતા મળે છે."
    },
    whoNeedsIt: [
      "Horoscopes showing Ananta, Kulika, Vasuki, Shankhapala, or Sheshnag Kaal Sarp Dosha.",
      "Frequent troubling dreams or snake nightmares.",
      "Delay in marriage or chronic restlessness."
    ],
    preparationGuidelines: [
      "Fasting recommended on the morning of the puja until Havan Purnahuti.",
      "Traditional clothing strongly suggested.",
      "Pujari will provide silver naga pairs for the abhishekam."
    ],
    ceremonyFlow: [
      "Ganapati Puja & Kalash Sthapana",
      "Navagraha & Rahu-Ketu Jaap",
      "Silver Serpent Jal Abhishekam",
      "Sacred Havan & Purnahuti"
    ]
  },
  {
    id: "navagraha-shanti-yajna",
    category: "navagraha",
    popular: true,
    title: {
      en: "Navagraha Shanti Mahayajna",
      hi: "नवग्रह शांति महायज्ञ",
      gu: "નવગ્રહ શાંતિ મહાયજ્ઞ"
    },
    shortSummary: {
      en: "Harmonize the influence of all nine planetary deities for prosperity, health, and spiritual protection.",
      hi: "समस्त नौ ग्रहों की कृपा प्राप्त करने और जीवन में सुख-समृद्धि हेतु महायज्ञ।",
      gu: "નવ ગ્રહોની કૃપા પ્રાપ્ત કરવા અને જીવનમાં આરોગ્ય-સમૃદ્ધિ માટે શાસ્ત્રોક્ત યજ્ઞ."
    },
    duration: "1 Day (Approx 3 hours)",
    locationOptions: ["Pindarak Kshetra Temple Grounds", "Home Puja", "Online Guided"],
    image: "/images/navagrah_mahayajana.jpg?v=2",
    overview: {
      en: "The nine celestial bodies (Sun, Moon, Mars, Mercury, Jupiter, Venus, Saturn, Rahu, Ketu) govern human endeavors. Navagraha Shanti balances planetary energy in one's life.",
      hi: "सूर्य, चंद्र, मंगल, बुध, गुरु, शुक्र, शनि, राहू और केतु का हमारे जीवन पर गहरा प्रभाव पड़ता है। यह यज्ञ ग्रहों के प्रतिकूल प्रभाव को अनुकूल बनाता है।",
      gu: "નવગ્રહ શાંતિ યજ્ઞથી ગ્રહોના અનુકૂળ પ્રભાવ પ્રાપ્ત થાય છે અને ઘરમાં સુખ આવે છે."
    },
    scripturalSignificance: {
      en: "Vedic hymns specific to each planet are recited while offering distinct samagri into the holy fire, creating positive subtle vibrations.",
      hi: "प्रत्येक ग्रह के लिए निर्दिष्ट वैदिक ऋचाओं का पाठ कर विशेष आहुतियाँ दी जाती हैं।",
      gu: "દરેક ગ્રહ માટે ખાસ આહુતિઓ આપીને સુખ-શાંતિ માટે પ્રાર્થના કરવામાં આવે છે."
    },
    whoNeedsIt: [
      "Individuals experiencing major planetary Mahadasha transition.",
      "Beginning a new venture, house, or life stage.",
      "General peace, health, and family well-being."
    ],
    preparationGuidelines: [
      "Clean attire, positive mindset, and Gotra details ready.",
      "Puja kit provided by Pujari Ji."
    ],
    ceremonyFlow: [
      "Sankalp & Navagraha Invocation",
      "Samidh & Grains Havan offerings",
      "Aarti & Prasad distribution"
    ]
  },
  {
    id: "satyanarayan-katha",
    category: "katha",
    popular: false,
    title: {
      en: "Shree Satyanarayan Katha & Vrat Vidhi",
      hi: "श्री सत्यनारायण व्रत कथा एवं पूजन",
      gu: "શ્રી સત્યનારાયણ વ્રત કથા અને પૂજન"
    },
    shortSummary: {
      en: "A auspicious family prayer expressing gratitude to Lord Vishnu for family prosperity and joy.",
      hi: "पारिवारिक सुख, शांति और समृद्धि हेतु भगवान सत्यनारायण की पवित्र कथा एवं पूजन।",
      gu: "પરિવારમાં સમૃદ્ધિ અને આનંદ માટે ભગવાન સત્યનારાયણની કથા અને મહાપૂજા."
    },
    duration: "1 Day (Approx 2 to 3 hours)",
    locationOptions: ["Home Puja", "Pindarak Kshetra Temple Grounds", "Online Guided"],
    image: "/images/satyanarayan_vrat.jpg?v=2",
    overview: {
      en: "Satyanarayan Katha is one of the most beloved and accessible Hindu rituals. It reinforces truth, righteous living, and divine gratitude across generations.",
      hi: "सत्यनारायण कथा हिंदू संस्कृति का अत्यंत लोकप्रिय एवं मंगलकारी अनुष्ठान है। यह सत्य और ईश्वर के प्रति कृतज्ञता सिखाता है।",
      gu: "સત્યનારાયણ કથા એ હિન્દુ સંસ્કૃતિનું અતિ લોકપ્રિય અને મંગળકારી અનુષ્ઠાન છે."
    },
    scripturalSignificance: {
      en: "Mentioned in Skanda Purana, performing Satyanarayan Katha brings domestic harmony, business fulfillment, and blessings.",
      hi: "स्कंद पुराण में वर्णित यह कथा घर में मंगल और मनोकामनाओं की पूर्ति करती है।",
      gu: "સ્કંદ પુરાણ માં વર્ણવેલ આ કથા ઘર માં મંગળ અને શાંતિ લાવે છે."
    },
    whoNeedsIt: [
      "Housewarming, birthdays, anniversaries, or new job celebrations.",
      "Monthly Full Moon (Purnima) traditional fasting.",
      "Family gathering for divine blessing."
    ],
    preparationGuidelines: [
      "Prepare fresh Sheera/Prasad (banana, wheat flour, milk, ghee, sugar).",
      "Decorate puja altar with fresh flowers."
    ],
    ceremonyFlow: [
      "Ganesh & Navagraha Sthapana",
      "5 Chapters of Satyanarayan Katha Recitation",
      "Maha Aarti & Prasad Distribution"
    ]
  },
  {
    id: "astrology-consultation",
    category: "astrology",
    popular: true,
    title: {
      en: "Vedic Horoscope & Ritual Muhurat Consultation",
      hi: "वैदिक कुंडली परामर्श एवं पूजा मुहूर्त",
      gu: "વૈદિક કુંડળી વિશ્લેષણ અને મુહૂર્ત સલાહ"
    },
    shortSummary: {
      en: "Personalized 1-on-1 guidance by Shastri Rajeshbhai Joshi analyzing horoscopes, doshas, and auspicious dates.",
      hi: "शास्त्री राजेशभाई जोशी द्वारा कुंडली, दोष निवारण और शुभ मुहूर्त हेतु व्यक्तिगत परामर्श।",
      gu: "શાસ્ત્રી રાજેશભાઈ જોશી દ્વારા કુંડળી, દોષ અને શુભ મુહૂર્ત માટે પર્સનલ સલાહ."
    },
    duration: "45 Minutes (Phone / Video / In-Person)",
    locationOptions: ["Online Video Call", "Phone Call", "In-Person Temple Visit"],
    image: "/images/consultant.jpg?v=2",
    overview: {
      en: "Before undertaking any major ritual or life decision, understanding astrological alignments ensures you select the correct ritual and ideal shubh muhurat.",
      hi: "किसी भी प्रमुख अनुष्ठान या जीवन के निर्णय से पूर्व ज्योतिषीय विश्लेषण सही समय और उपयुक्त पूजा का चयन सुनिश्चित करता है।",
      gu: "કોઈપણ મોટી વિધિ પહેલાં જ્યોતિષીય વિશ્લેષણ સાચું મુહૂર્ત અને યોગ્ય પૂજા નક્કી કરવામાં મદદ કરે છે."
    },
    scripturalSignificance: {
      en: "Jyotish is known as the Vedanga (eye of the Vedas). Accurate calculation guides spiritual remedies effectively.",
      hi: "ज्योतिष वेदों का नेत्र माना जाता है। सटीक काल गणना सही अनुष्ठान का मार्ग दिखाती है।",
      gu: "જ્યોતિષ એ વેદોનું ચક્ષુ છે. સાચી ગણતરીથી સાચું માર્ગદર્શન મળે છે."
    },
    whoNeedsIt: [
      "Unsure which Pitru or Sarpa ritual is required.",
      "Marriage compatibility or business Muhurat.",
      "Understanding planetary Mahadasha remedies."
    ],
    preparationGuidelines: [
      "Keep Date of Birth, Time of Birth, and Place of Birth ready.",
      "Note down specific questions beforehand."
    ],
    ceremonyFlow: [
      "Birth Chart Calculation & Planetary Placement Analysis",
      "Identification of Doshas or Beneficial Periods",
      "Custom Remedy & Shubh Muhurat Recommendation"
    ]
  }
];
