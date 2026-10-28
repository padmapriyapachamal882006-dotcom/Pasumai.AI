// Pasumai AgriScan - Comprehensive Agricultural Disease & Crop Health Database
// Supports English & Tamil (தமிழ்) with Integrated Pest & Disease Management (IPM)

const CROPS_DATA = [
  { id: 'all', name_en: 'All Crops', name_ta: 'அனைத்து பயிர்கள்', icon: '🌾' },
  { id: 'rice', name_en: 'Paddy / Rice', name_ta: 'நெல்', icon: '🌾' },
  { id: 'tomato', name_en: 'Tomato', name_ta: 'தக்காளி', icon: '🍅' },
  { id: 'cotton', name_en: 'Cotton', name_ta: 'பருத்தி', icon: '☁️' },
  { id: 'banana', name_en: 'Banana', name_ta: 'வாழை', icon: '🍌' },
  { id: 'chili', name_en: 'Chili / Pepper', name_ta: 'மிளகாய்', icon: '🌶️' },
  { id: 'maize', name_en: 'Maize / Corn', name_ta: 'மக்காச்சோளம்', icon: '🌽' },
  { id: 'sugarcane', name_en: 'Sugarcane', name_ta: 'கரும்பு', icon: '🎋' },
  { id: 'general', name_en: 'Nutrient & Soil Stress', name_ta: 'ஊட்டச்சத்து குறைபாடு', icon: '🌱' }
];

const DISEASES_DATABASE = [
  // --- PADDY / RICE ---
  {
    id: 'rice_blast',
    cropId: 'rice',
    cropName_en: 'Paddy / Rice',
    cropName_ta: 'நெல்',
    name_en: 'Rice Blast (Pyricularia oryzae)',
    name_ta: 'நெல் குலை நோய் (பிளாஸ்ட்)',
    type: 'fungal',
    type_en: 'Fungal Disease',
    type_ta: 'பூஞ்சை நோய்',
    severity: 'critical',
    severity_label_en: 'Critical (High Loss Risk)',
    severity_label_ta: 'மிகத்தீவிரம் (அதிக மகசூல் இழப்பு ஆபத்து)',
    yield_loss_risk: '30% - 60%',
    action_window_en: 'Spray within 48 hours to avoid panicle infection',
    action_window_ta: 'கதிர் தாக்குதலை தவிர்க்க 48 மணி நேரத்திற்குள் தெளிக்கவும்',
    symptoms_en: 'Spindle-shaped or eye-shaped spots with gray/white center and dark brown or reddish margins. Leaves dry out as lesions coalesce.',
    symptoms_ta: 'இலைகளில் கண் வடிவிலான அல்லது கதிர் வடிவிலான புள்ளிகள், நடுவில் சாம்பல் நிறமும் ஓரங்களில் அடர் பழுப்பு நிறமும் காணப்படும். புள்ளிகள் இணைந்து இலைகள் கருகும்.',
    cv_color_signature: {
      primary: '#5c3a21', // brown margins
      center: '#d6d3d1', // grayish center
      background: '#4ade80', // green leaf
      lesion_pattern: 'spindle'
    },
    organic_solution: {
      title_en: 'Organic / Bio Remedies',
      title_ta: 'இயற்கை & உயிரியல் தீர்வுகள்',
      steps_en: [
        'Foliar spray with Pseudomonas fluorescens @ 5 g/liter (or 1 kg/acre) mixed in 200 liters of water.',
        'Spray Neem Seed Kernel Extract (NSKE 5%) or 3000 ppm Neem Oil @ 3 ml/liter.',
        'Apply Panchagavya @ 30 ml/liter of water in early morning or late evening.'
      ],
      steps_ta: [
        'சூடோமோனாஸ் புளோரசன்ஸ் 5 கிராம்/லிட்டர் (ஏக்கருக்கு 1 கிலோ) 200 லிட்டர் தண்ணீரில் கலந்து தெளிக்கவும்.',
        'வேப்பங்கொட்டை சாறு (NSKE 5%) அல்லது 3000 ppm வேப்பெண்ணெய் 3 மி.லி/லிட்டர் கலந்து தெளிக்கவும்.',
        'பஞ்சகவ்யா 30 மி.லி/லிட்டர் தண்ணீரில் காலை அல்லது மாலையில் தெளிக்கவும்.'
      ]
    },
    chemical_solution: {
      title_en: 'Chemical Treatments (Targeted)',
      title_ta: 'ரசாயன மருந்துகள் (துல்லிய பரிந்துரை)',
      medicines: [
        {
          name: 'Tricyclazole 75% WP (Beam / Baan)',
          dosage_en: '0.6 g/liter (120 g per acre in 200L water)',
          dosage_ta: '0.6 கிராம்/லிட்டர் (ஏக்கருக்கு 120 கிராம் - 200லி தண்ணீர்)',
          phi: '21 days',
          notes_en: 'Most effective systemic fungicide for blast control.'
        },
        {
          name: 'Azoxystrobin 18.2% + Difenoconazole 11.4% SC (Amistar Top)',
          dosage_en: '1 ml/liter (200 ml per acre)',
          dosage_ta: '1 மி.லி/லிட்டர் (ஏக்கருக்கு 200 மி.லி)',
          phi: '15 days',
          notes_en: 'Broad spectrum, protects new shoots and panicles.'
        },
        {
          name: 'Isoprothiolane 40% EC (Fuji-one)',
          dosage_en: '1.5 ml/liter (300 ml per acre)',
          dosage_ta: '1.5 மி.லி/லிட்டர் (ஏக்கருக்கு 300 மி.லி)',
          phi: '30 days',
          notes_en: 'Systemic curative and preventive action.'
        }
      ]
    },
    cultural_practices_en: [
      'Avoid excess application of chemical nitrogen fertilizer (urea); split into 3-4 doses.',
      'Maintain continuous thin layer of water; avoid water stagnation followed by severe drought.',
      'Burn or compost stubbles of previous infected crop.'
    ],
    cultural_practices_ta: [
      'அதிகப்படியான யூரியா (நைட்ரஜன்) பயன்பாட்டை தவிர்க்கவும்; பிரித்து இடவும்.',
      'வயலில் மிதமான நீர் மேலாண்மை பராமரிக்கவும்; கடும் வறட்சி தவிர்க்கவும்.',
      'முந்தைய பயிரின் காய்ந்த எச்சங்களை அகற்றி அழிக்கவும்.'
    ]
  },
  {
    id: 'rice_bacterial_blight',
    cropId: 'rice',
    cropName_en: 'Paddy / Rice',
    cropName_ta: 'நெல்',
    name_en: 'Bacterial Leaf Blight (Xanthomonas oryzae)',
    name_ta: 'பாக்டீரியா இலைக்கருகல் நோய்',
    type: 'bacterial',
    type_en: 'Bacterial Disease',
    type_ta: 'பாக்டீரியா நோய்',
    severity: 'high',
    severity_label_en: 'High Severity',
    severity_label_ta: 'அதிக தீவிரம்',
    yield_loss_risk: '20% - 40%',
    action_window_en: 'Act within 3 days; immediately drain standing water if flooded',
    action_window_ta: '3 நாட்களுக்குள் நடவடிக்கை எடுக்கவும்; வயல் நீரை வடிக்கவும்',
    symptoms_en: 'Water-soaked wavy streaks along leaf margins that turn yellowish-white and desiccate into straw-colored blighted leaves with bacterial ooze beads in humid mornings.',
    symptoms_ta: 'இலையின் நுனியிலிருந்தும் ஓரங்களிலிருந்தும் அலை அலையான மஞ்சள் கோடுகள் தோன்றி, பின்னர் வைக்கோல் நிறமாக மாறி இலை கருகிவிடும். காலையில் பாக்டீரியா திரவத் துளிகள் காணப்படும்.',
    cv_color_signature: {
      primary: '#ca8a04', // yellow streaks
      secondary: '#d97706', // straw dried edge
      background: '#22c55e',
      lesion_pattern: 'marginal_wave'
    },
    organic_solution: {
      title_en: 'Organic / Bio Remedies',
      title_ta: 'இயற்கை தீர்வுகள்',
      steps_en: [
        'Spray fresh Cow Dung Filtrate (20% extract) @ 200g fresh cow dung mixed in 1L water, strained well.',
        'Foliar spray with Pseudomonas fluorescens @ 5 g/liter.',
        'Apply neem cake @ 100 kg/acre to soil at planting.'
      ],
      steps_ta: [
        'சாண எரிசல் கரைசல்: 200 கிராம் புதிய மாட்டுச் சாணத்தை 1 லிட்டர் நீரில் கரைத்து வடிகட்டி தெளிக்கவும்.',
        'சூடோமோனாஸ் புளோரசன்ஸ் 5 கிராம்/லிட்டர் நீரில் கலந்து தெளிக்கவும்.',
        'அடி உரமாக வேப்பம் புண்ணாக்கு ஏக்கருக்கு 100 கிலோ இடவும்.'
      ]
    },
    chemical_solution: {
      title_en: 'Chemical Treatments',
      title_ta: 'ரசாயன சிகிச்சைகள்',
      medicines: [
        {
          name: 'Copper Oxychloride 50% WP + Streptomycin Sulphate (Plantomycin)',
          dosage_en: 'Copper Oxychloride 2.5 g + Streptocycline 0.1 g (6g packet per 60L water)',
          dosage_ta: 'காப்பர் ஆக்ஸிகுளோரைடு 2.5 கிராம் + பிளான்டோமைசின் 0.1 கிராம்/லிட்டர்',
          phi: '14 days',
          notes_en: 'Best bactericide combination for quick arrest.'
        }
      ]
    },
    cultural_practices_en: [
      'Drain excess standing water from the field for 2-3 days.',
      'Stop top-dressing of nitrogen until new green leaves emerge.',
      'Avoid clipping rice seedling tips during transplanting.'
    ],
    cultural_practices_ta: [
      'வயலில் தேங்கியிருக்கும் நீரை 2 முதல் 3 நாட்களுக்கு வடித்துவிடவும்.',
      'புதிய தளிர்கள் வரும் வரை யூரியா உரம் இடுவதை உடனடியாக நிறுத்தவும்.',
      'நாற்று நடும் போது நாற்றின் நுனிகளை கிள்ளி நடுதலை தவிர்க்கவும்.'
    ]
  },
  {
    id: 'rice_brown_spot',
    cropId: 'rice',
    cropName_en: 'Paddy / Rice',
    cropName_ta: 'நெல்',
    name_en: 'Brown Spot (Bipolaris oryzae)',
    name_ta: 'பழுப்பு இலைப்புள்ளி நோய்',
    type: 'fungal',
    type_en: 'Fungal Disease',
    type_ta: 'பூஞ்சை நோய்',
    severity: 'moderate',
    severity_label_en: 'Moderate Severity',
    severity_label_ta: 'மிதமான தீவிரம்',
    yield_loss_risk: '15% - 25%',
    action_window_en: 'Correct soil nutrition and spray within 5-7 days',
    action_window_ta: 'மண் சத்துக்களை சரிசெய்து 5-7 நாட்களுக்குள் தெளிக்கவும்',
    symptoms_en: 'Small, circular to oval dark brown spots evenly distributed on leaf blades with a prominent yellow halo. Commonly associated with poor soil fertility or potassium deficiency.',
    symptoms_ta: 'இலைகளில் வட்ட அல்லது நீள்வட்ட வடிவ பழுப்பு நிறப் புள்ளிகள் மற்றும் அதைச் சுற்றி மஞ்சள் வளையம் காணப்படும். சத்து குறைவான மண்ணில் அதிகம் தோன்றும்.',
    cv_color_signature: {
      primary: '#78350f',
      halo: '#eab308',
      background: '#16a34a',
      lesion_pattern: 'oval_spots'
    },
    organic_solution: {
      title_en: 'Organic / Bio Remedies',
      title_ta: 'இயற்கை தீர்வுகள்',
      steps_en: [
        'Soil application of well-rotted Farm Yard Manure (FYM) enriched with Trichoderma viride @ 2.5 kg/acre.',
        'Foliar spray with Bacillus subtilis @ 5 g/liter.',
        'Spray Vermiwash (10%) @ 100 ml/liter of water.'
      ],
      steps_ta: [
        'டிரைக்கோடெர்மா விரிடி கலந்த மக்கிய தொழு உரம் ஏக்கருக்கு 2.5 கிலோ இடவும்.',
        'பேசில்லஸ் சப்டிலிஸ் 5 கிராம்/லிட்டர் கலந்து தெளிக்கவும்.',
        'மண்புழு குளியல் நீர் (வெர்மிவாஷ்) 100 மி.லி/லிட்டர் தெளிக்கவும்.'
      ]
    },
    chemical_solution: {
      title_en: 'Chemical Treatments',
      title_ta: 'ரசாயன சிகிச்சைகள்',
      medicines: [
        {
          name: 'Mancozeb 75% WP (Indofil M-45)',
          dosage_en: '2 g/liter (400-500 g per acre in 200L water)',
          dosage_ta: '2 கிராம்/லிட்டர் (ஏக்கருக்கு 400-500 கிராம்)',
          phi: '10 days',
          notes_en: 'Protective contact fungicide.'
        },
        {
          name: 'Hexaconazole 5% SC (Contaf)',
          dosage_en: '2 ml/liter (400 ml per acre)',
          dosage_ta: '2 மி.லி/லிட்டர் (ஏக்கருக்கு 400 மி.லி)',
          phi: '15 days',
          notes_en: 'Systemic triazole fungicide.'
        }
      ]
    },
    cultural_practices_en: [
      'Apply Muriate of Potash (MOP) to balance plant nutrition.',
      'Treat seeds with Carboxin or Trichoderma before sowing.',
      'Provide zinc sulphate @ 10 kg/acre if soil is deficient.'
    ],
    cultural_practices_ta: [
      'பயிருக்கு போதிய பொட்டாஷ் உரம் இட்டு ஊட்டச்சத்து சமநிலையை பேணவும்.',
      'விதைகளை விதைப்பதற்கு முன் விதைநேர்த்தி செய்யவும்.',
      'துத்தநாக சத்து குறைபாடு இருந்தால் ஏக்கருக்கு 10 கிலோ ஜிங்க் சல்பேட் இடவும்.'
    ]
  },
  {
    id: 'rice_healthy',
    cropId: 'rice',
    cropName_en: 'Paddy / Rice',
    cropName_ta: 'நெல்',
    name_en: 'Healthy Paddy Crop',
    name_ta: 'ஆரோக்கியமான நெல் பயிர்',
    type: 'healthy',
    type_en: 'Healthy Plant',
    type_ta: 'ஆரோக்கியமான பயிர்',
    severity: 'none',
    severity_label_en: 'Healthy (No Disease Detected)',
    severity_label_ta: 'ஆரோக்கியமானது (நோய் இல்லை)',
    yield_loss_risk: '0%',
    action_window_en: 'Continue routine care & periodic monitoring',
    action_window_ta: 'வழக்கமான பராமரிப்பு மற்றும் தொடர் கண்காணிப்பு தொடரவும்',
    symptoms_en: 'Vibrant green canopy, uniform tillering, clean erect leaf blades without spots, lesions, or insect gnawing.',
    symptoms_ta: 'பளபளப்பான பச்சை நிற இலைகள், சீரான தூர்கள், எந்தவித புள்ளிகளும் அல்லது பூச்சி கடித்த அடையாளங்களும் இன்றி சிறப்பாக உள்ளது.',
    cv_color_signature: {
      primary: '#16a34a',
      background: '#22c55e',
      lesion_pattern: 'none'
    },
    organic_solution: {
      title_en: 'Maintenance & Growth Boosters',
      title_ta: 'வளர்ச்சி ஊக்கிகள் & பராமரிப்பு',
      steps_en: [
        'Apply Fish Amino Acid @ 5 ml/liter or Panchagavya 3% as a growth tonic every 15 days.',
        'Maintain 2-3 cm standing water during panicle initiation stage.'
      ],
      steps_ta: [
        'மீன் அமினோ அமிலம் 5 மி.லி/லிட்டர் அல்லது பஞ்சகவ்யா 3% தெளித்து வளர்ச்சியை ஊக்குவிக்கவும்.',
        'கதிர் உருவாகும் தருணத்தில் 2-3 செ.மீ சீரான நீர் தேக்கி வைக்கவும்.'
      ]
    },
    chemical_solution: {
      title_en: 'Preventive Care',
      title_ta: 'தற்காப்பு பராமரிப்பு',
      medicines: [
        {
          name: 'No chemical intervention required',
          dosage_en: 'Keep monitoring field traps (pheromone traps 5/acre)',
          dosage_ta: 'ரசாயன மருந்து தேவை இல்லை; இனக்கவர்ச்சி பொறிகளை கவனிக்கவும்',
          phi: '0 days',
          notes_en: 'Natural crop resilience is high.'
        }
      ]
    },
    cultural_practices_en: ['Scout field twice a week, maintain clean bunds free of weeds.'],
    cultural_practices_ta: ['வாரத்திற்கு இரண்டு முறை வரப்புகளை சுத்தமாக வைத்து வயலை கண்காணிக்கவும்.']
  },

  // --- TOMATO ---
  {
    id: 'tomato_early_blight',
    cropId: 'tomato',
    cropName_en: 'Tomato',
    cropName_ta: 'தக்காளி',
    name_en: 'Early Blight (Alternaria solani)',
    name_ta: 'ஆரம்பக்கால கருகல் நோய் (ஆல்டர்னேரியா)',
    type: 'fungal',
    type_en: 'Fungal Disease',
    type_ta: 'பூஞ்சை நோய்',
    severity: 'high',
    severity_label_en: 'High Severity',
    severity_label_ta: 'அதிக தீவிரம்',
    yield_loss_risk: '25% - 50%',
    action_window_en: 'Prune infected lower foliage and spray within 48 hours',
    action_window_ta: 'அடி இலைகளை கவாத்து செய்து 48 மணி நேரத்திற்குள் மருந்து தெளிக்கவும்',
    symptoms_en: 'Distinct dark brown to black spots with concentric target-board rings, starting on lowest, oldest leaves and progressing upward.',
    symptoms_ta: 'இலைகளில் வட்ட வடிவ அல்லது இலக்கு பலகை (target board) போன்ற வளையங்களுடன் கூடிய பழுப்பு நிறப் புள்ளிகள். முதலில் அடி இலைகளில் தொடங்கி மேல்நோக்கி பரவும்.',
    cv_color_signature: {
      primary: '#451a03',
      rings: '#78350f',
      background: '#15803d',
      lesion_pattern: 'concentric_rings'
    },
    organic_solution: {
      title_en: 'Organic / Bio Remedies',
      title_ta: 'இயற்கை தீர்வுகள்',
      steps_en: [
        'Prune lower leaves up to 12 inches from ground to prevent soil-splash inoculum.',
        'Foliar spray with Trichoderma harzianum @ 5 g/liter.',
        'Spray baking soda solution (5g baking soda + 2ml liquid soap per liter of water) as mild preventative.'
      ],
      steps_ta: [
        'மண்ணிலிருந்து தெறிக்கும் பூஞ்சையை தடுக்க கீழ்மட்ட 1 அடி இலைகளை வெட்டி அகற்றவும்.',
        'டிரைக்கோடெர்மா ஹார்சியானம் 5 கிராம்/லிட்டர் தெளிக்கவும்.',
        'சமையல் சோடா கரைசல் (5 கிராம் சோடா + 2 மி.லி சோப் திரவம்/லிட்டர்) தெளிக்கவும்.'
      ]
    },
    chemical_solution: {
      title_en: 'Chemical Treatments',
      title_ta: 'ரசாயன சிகிச்சைகள்',
      medicines: [
        {
          name: 'Chlorothalonil 75% WP (Kavach)',
          dosage_en: '2 g/liter (400 g/acre in 200L water)',
          dosage_ta: '2 கிராம்/லிட்டர் (ஏக்கருக்கு 400 கிராம்)',
          phi: '7 days',
          notes_en: 'Excellent preventive barrier fungicide.'
        },
        {
          name: 'Difenoconazole 25% EC (Score)',
          dosage_en: '0.5 to 1 ml/liter (100-200 ml/acre)',
          dosage_ta: '0.5 - 1 மி.லி/லிட்டர் (ஏக்கருக்கு 150 மி.லி)',
          phi: '7 days',
          notes_en: 'Potent curative triazole fungicide.'
        }
      ]
    },
    cultural_practices_en: [
      'Use drip irrigation instead of overhead sprinklers to keep foliage dry.',
      'Apply organic mulch (straw/paddy husk) under plants to prevent rain splash.',
      'Practice minimum 2-year crop rotation with non-solanaceous crops.'
    ],
    cultural_practices_ta: [
      'இலைகள் நனையாமல் இருக்க சொட்டு நீர் பாசன முறையை பயன்படுத்தவும்.',
      'மழைநீர் தெறிப்பதை தவிர்க்க தக்காளி செடிகளின் அடியில் வைக்கோல் மூடாக்கு போடவும்.',
      'தக்காளி, கத்தரி அல்லாத பிற பயிர்களுடன் பயிர் சுழற்சி செய்யவும்.'
    ]
  },
  {
    id: 'tomato_late_blight',
    cropId: 'tomato',
    cropName_en: 'Tomato',
    cropName_ta: 'தக்காளி',
    name_en: 'Late Blight (Phytophthora infestans)',
    name_ta: 'பிற்கால கருகல் நோய் (பைட்டோப்தோரா)',
    type: 'fungal',
    type_en: 'Oomycete / Water Mold',
    type_ta: 'நீர்ப்பூஞ்சை நோய்',
    severity: 'critical',
    severity_label_en: 'Critical / Devastating',
    severity_label_ta: 'மிகக்கடுமையானது / பேரழிவு',
    yield_loss_risk: '50% - 100%',
    action_window_en: 'Immediate emergency spray within 24 hours (can wipe out field in 4 days)',
    action_window_ta: '24 மணி நேரத்திற்குள் அவசர தெளிப்பு (4 நாட்களில் முழு தோட்டமும் அழியக்கூடும்)',
    symptoms_en: 'Large, dark, water-soaked oily lesions on leaves that rapidly enlarge and turn black/brown. White fungal downy mold appears on leaf undersides in cool, humid weather.',
    symptoms_ta: 'இலைகளில் பெரிய நீர் ஊறிய அடர் கரும்பச்சை அல்லது பழுப்பு நிற புள்ளிகள் வேகமாக பரவும். குளிர்ந்த ஈரப்பதமான காலநிலையில் இலையின் அடிப்பகுதியில் வெள்ளை நிற பூஞ்சை பஞ்சு போல் படரும்.',
    cv_color_signature: {
      primary: '#1c1917',
      secondary: '#71717a',
      background: '#15803d',
      lesion_pattern: 'water_soaked_blotch'
    },
    organic_solution: {
      title_en: 'Organic / Bio Remedies',
      title_ta: 'இயற்கை தீர்வுகள்',
      steps_en: [
        'Immediately destroy and safely bury severely affected plants.',
        'Copper sulfate + slaked lime (Bordeaux mixture 1%) foliar spray.',
        'Bio-spray of Pseudomonas fluorescens + Bacillus amyloliquefaciens @ 5g each/liter.'
      ],
      steps_ta: [
        'கடுமையாக பாதிக்கப்பட்ட செடிகளை உடனே பிடுங்கி குழியில் புதைக்கவும்.',
        'போர்டோ கலவை (1%) தயார் செய்து உடனடியாக தெளிக்கவும்.',
        'சூடோமோனாஸ் + பேசில்லஸ் தலா 5 கிராம்/லிட்டர் கலந்து தெளிக்கவும்.'
      ]
    },
    chemical_solution: {
      title_en: 'Chemical Treatments (Urgent)',
      title_ta: 'அவசர ரசாயன சிகிச்சை',
      medicines: [
        {
          name: 'Metalaxyl 8% + Mancozeb 64% WP (Ridomil Gold)',
          dosage_en: '2.5 g/liter (500 g/acre in 200L water)',
          dosage_ta: '2.5 கிராம்/லிட்டர் (ஏக்கருக்கு 500 கிராம்)',
          phi: '14 days',
          notes_en: 'Gold standard systemic + contact late blight cure.'
        },
        {
          name: 'Cymoxanil 8% + Mancozeb 64% WP (Curzate)',
          dosage_en: '3 g/liter (600 g/acre)',
          dosage_ta: '3 கிராம்/லிட்டர் (ஏக்கருக்கு 600 கிராம்)',
          phi: '10 days',
          notes_en: 'Curative kick-back action within 48h of infection.'
        }
      ]
    },
    cultural_practices_en: [
      'Stop furrow flooding; ensure field slopes drain freely.',
      'Increase staking and row spacing for air circulation.',
      'Never compost diseased foliage; burn or bury.'
    ],
    cultural_practices_ta: [
      'வயலில் நீர் தேங்குவதை முற்றிலும் தவிர்த்து வடிகால் வசதி செய்யவும்.',
      'செடிகளுக்கு இடையே காற்று புகும் வகையில் இடைவெளியை பராமரிக்கவும்.',
      'பாதிக்கப்பட்ட இலைகளை உரக்குழியில் போடாமல் எரித்துவிடவும்.'
    ]
  },
  {
    id: 'tomato_leaf_curl',
    cropId: 'tomato',
    cropName_en: 'Tomato',
    cropName_ta: 'தக்காளி',
    name_en: 'Tomato Yellow Leaf Curl Virus (TYLCV)',
    name_ta: 'தக்காளி இலைச்சுருட்டு வைரஸ்',
    type: 'viral',
    type_en: 'Viral (Vector: Whitefly)',
    type_ta: 'வைரஸ் (வெள்ளை ஈ மூலம் பரவுவது)',
    severity: 'high',
    severity_label_en: 'High Severity',
    severity_label_ta: 'அதிக தீவிரம்',
    yield_loss_risk: '40% - 80%',
    action_window_en: 'Target whitefly vector immediately with yellow sticky traps & sprays',
    action_window_ta: 'மஞ்சள் நிற ஒட்டும் பொறிகள் வைத்து வெள்ளை ஈக்களை உடனே கட்டுப்படுத்தவும்',
    symptoms_en: 'Upward cupping and curling of leaflets, prominent chlorotic yellowing of margins, stunted bushy plant structure with flower drop.',
    symptoms_ta: 'இலைகள் மேல்நோக்கி கோப்பை போல் சுருண்டுபோதல், இலை ஓரங்கள் மஞ்சள் நிறமாதல், செடி குட்டையாகி பூக்கள் உதிர்ந்து காய் பிடிக்காமல் போதல்.',
    cv_color_signature: {
      primary: '#facc15',
      background: '#84cc16',
      lesion_pattern: 'curled_yellow_margin'
    },
    organic_solution: {
      title_en: 'Organic / Bio Remedies',
      title_ta: 'இயற்கை தீர்வுகள்',
      steps_en: [
        'Install Yellow Sticky Traps @ 15-20 traps per acre at crop canopy height to capture whiteflies.',
        'Spray Neem Oil (10,000 ppm) @ 2 ml/liter or 5% NSKE + 1 ml soap surfactant.',
        'Spray Lecanicillium lecanii (bio-fungal insecticide) @ 5 g/liter.'
      ],
      steps_ta: [
        'வெள்ளை ஈக்களை கவர ஏக்கருக்கு 15-20 மஞ்சள் நிற ஒட்டும் பொறிகளை பயிர் மட்டத்தில் கட்டவும்.',
        'வேப்பெண்ணெய் (10000 ppm) 2 மி.லி/லிட்டர் சோப்பு திரவத்துடன் கலந்து தெளிக்கவும்.',
        'வெர்ட்டிசீலியம் லெக்கானி உயிரியல் பூச்சிக்கொல்லி 5 கிராம்/லிட்டர் தெளிக்கவும்.'
      ]
    },
    chemical_solution: {
      title_en: 'Vector Control Chemicals',
      title_ta: 'பூச்சி கடத்திகளை கட்டுப்படுத்தும் மருந்துகள்',
      medicines: [
        {
          name: 'Diafenthiuron 50% WP (Pegasus)',
          dosage_en: '1.2 g/liter (240 g/acre)',
          dosage_ta: '1.2 கிராம்/லிட்டர் (ஏக்கருக்கு 240 கிராம்)',
          phi: '15 days',
          notes_en: 'Controls nymph and adult whiteflies and mites.'
        },
        {
          name: 'Acetamiprid 20% SP (Pride / Manik)',
          dosage_en: '0.4 g/liter (80 g/acre)',
          dosage_ta: '0.4 கிராம்/லிட்டர் (ஏக்கருக்கு 80 கிராம்)',
          phi: '7 days',
          notes_en: 'Rapid knockdown systemic insecticide for sucking pests.'
        }
      ]
    },
    cultural_practices_en: [
      'Plant 2 border rows of Maize or Sorghum as a physical barrier to block windblown whiteflies.',
      'Remove and bag severely infected viral plants to reduce virus source.'
    ],
    cultural_practices_ta: [
      'காற்றில் வரும் வெள்ளை ஈக்களை தடுக்க வயல் வரப்பில் 2 வரிசை சோளம் அல்லது கம்பு பயிரிடவும்.',
      'வைரஸ் தாக்கிய செடிகளை பையிலிட்டு அகற்றி வயலுக்கு வெளியே அழிக்கவும்.'
    ]
  },

  // --- COTTON ---
  {
    id: 'cotton_bacterial_blight',
    cropId: 'cotton',
    cropName_en: 'Cotton',
    cropName_ta: 'பருத்தி',
    name_en: 'Bacterial Blight / Angular Leaf Spot',
    name_ta: 'கோண இலைப்புள்ளி நோய் (கருங்கால்)',
    type: 'bacterial',
    type_en: 'Bacterial Disease',
    type_ta: 'பாக்டீரியா நோய்',
    severity: 'moderate',
    severity_label_en: 'Moderate to High',
    severity_label_ta: 'மிதம் முதல் அதிகம்',
    yield_loss_risk: '20% - 35%',
    action_window_en: 'Spray within 4-5 days of initial angular lesions',
    action_window_ta: 'கோணப் புள்ளிகள் கண்ட 4-5 நாட்களுக்குள் தெளிக்கவும்',
    symptoms_en: 'Water-soaked angular spots on leaves bounded by leaf veinlets, progressing to black vein blight and blackarm stem lesions.',
    symptoms_ta: 'இலை நரம்புகளுக்கு இடையில் நீர் ஊறிய கோண வடிவ புள்ளிகள் தோன்றி, பின்னர் நரம்புகள் கறுத்து கருங்கால் நோய் உண்டாகும்.',
    cv_color_signature: {
      primary: '#1c1917',
      halo: '#84cc16',
      background: '#15803d',
      lesion_pattern: 'angular'
    },
    organic_solution: {
      title_en: 'Organic / Bio Remedies',
      title_ta: 'இயற்கை தீர்வுகள்',
      steps_en: [
        'Foliar spray with Pseudomonas fluorescens @ 5 g/liter.',
        'Spray fermented butter milk (1 liter sour butter milk + 10 liters water + asafoetida 10g).'
      ],
      steps_ta: [
        'சூடோமோனாஸ் புளோரசன்ஸ் 5 கிராம்/லிட்டர் நீரில் கலந்து தெளிக்கவும்.',
        'புளித்த மோர் கரைசல் (1 லிட்டர் மோர் + 10 லிட்டர் தண்ணீர் + 10 கிராம் பெருங்காயம்) தெளிக்கவும்.'
      ]
    },
    chemical_solution: {
      title_en: 'Chemical Treatments',
      title_ta: 'ரசாயன சிகிச்சைகள்',
      medicines: [
        {
          name: 'Copper Oxychloride 50% WP + Streptocycline',
          dosage_en: 'Copper Oxychloride 2.5 g + Streptocycline 100 mg per liter water',
          dosage_ta: 'காப்பர் ஆக்ஸிகுளோரைடு 2.5 கிராம் + ஸ்ட்ரெப்டோசைக்ளின் 100 மிகி/லிட்டர்',
          phi: '20 days',
          notes_en: 'Standard bactericide combination.'
        }
      ]
    },
    cultural_practices_en: [
      'Acid delinting of cotton seeds before sowing.',
      'Avoid high density planting to improve sunlight penetration.'
    ],
    cultural_practices_ta: [
      'விதைப்பதற்கு முன் விதைகளை அமிலம் கொண்டு விதைநேர்த்தி செய்தல்.',
      'செடிகளுக்கு இடையே போதுமான சூரிய ஒளி கிடைக்க பயிர் இடைவெளியை கடைபிடித்தல்.'
    ]
  },
  {
    id: 'cotton_bollworm',
    cropId: 'cotton',
    cropName_en: 'Cotton',
    cropName_ta: 'பருத்தி',
    name_en: 'Bollworm / Spodoptera Infestation',
    name_ta: 'பருத்தி காய் துளைப்பான் / படைப்புழு',
    type: 'pest',
    type_en: 'Insect Pest (Larva)',
    type_ta: 'பூச்சி தாக்குதல் (புழுக்கள்)',
    severity: 'critical',
    severity_label_en: 'Critical / High Economic Damage',
    severity_label_ta: 'மிகக்கடுமையான பொருளாதார இழப்பு',
    yield_loss_risk: '35% - 70%',
    action_window_en: 'Spray early instar larvae within 36 hours',
    action_window_ta: 'இளம் புழு பருவத்தில் 36 மணி நேரத்திற்குள் தெளிக்கவும்',
    symptoms_en: 'Chewed holes in leaves, flared squares (bracts opening prematurely), bore holes in developing green bolls plugged with larval excreta (frass).',
    symptoms_ta: 'இலைகளில் கடித்த துளைகள், பூ மொட்டுகள் விரிந்து கொட்டுதல் (flared square), பச்சைக் காய்களில் துளைகளிட்டு உள்ளே சென்று புழுக்கள் தின்பது மற்றும் எச்சம் காணப்படுதல்.',
    cv_color_signature: {
      primary: '#713f12',
      holes: '#0f172a',
      background: '#16a34a',
      lesion_pattern: 'bore_holes'
    },
    organic_solution: {
      title_en: 'Bio & Pheromone Management',
      title_ta: 'உயிரியல் & இனக்கவர்ச்சி பொறி முறைகள்',
      steps_en: [
        'Set up Pheromone Traps @ 5 traps/acre for pest monitoring, 15 traps/acre for mass trapping.',
        'Release egg parasitoid Trichogramma chilonis @ 60,000 eggs/acre per week (3 times).',
        'Spray Bacillus thuringiensis (Bt formulation) @ 2 g/liter or HaNPV @ 250 LE/acre in evening.'
      ],
      steps_ta: [
        'இனக்கவர்ச்சி பொறிகளை ஏக்கருக்கு 5 வீதம் கண்காணிப்புக்கும், 15 வீதம் தாய் அந்துப்பூச்சிகளை அழிக்கவும் கட்டவும்.',
        'முட்டை ஒட்டுண்ணி டிரைக்கோகிரம்மா சிலோனிஸ் அட்டை ஏக்கருக்கு 60,000 முட்டைகள் வீதம் 3 முறை கட்டவும்.',
        'பி.டி (Bt) பாக்டீரியா தூள் 2 கிராம்/லிட்டர் அல்லது HaNPV வைரஸ் கரைசல் மாலையில் தெளிக்கவும்.'
      ]
    },
    chemical_solution: {
      title_en: 'Chemical Insecticides',
      title_ta: 'பூச்சிக்கொல்லி மருந்துகள்',
      medicines: [
        {
          name: 'Chlorantraniliprole 18.5% SC (Coragen)',
          dosage_en: '0.3 ml/liter (60 ml/acre in 200L water)',
          dosage_ta: '0.3 மி.லி/லிட்டர் (ஏக்கருக்கு 60 மி.லி)',
          phi: '20 days',
          notes_en: 'Long-lasting control on bollworm & lepidopteran caterpillars.'
        },
        {
          name: 'Emamectin Benzoate 5% SG (Proclaim)',
          dosage_en: '0.5 g/liter (100 g/acre)',
          dosage_ta: '0.5 கிராம்/லிட்டர் (ஏக்கருக்கு 100 கிராம்)',
          phi: '14 days',
          notes_en: 'Fast translaminar action; safe to beneficial predators.'
        }
      ]
    },
    cultural_practices_en: [
      'Grow castor, sunflower or marigold as trap crops on border.',
      'Hand-pick and destroy larger larvae and flared squares.'
    ],
    cultural_practices_ta: [
      'வயல் வரப்பில் ஆமணக்கு, சூரியகாந்தி அல்லது செண்டுமல்லி போன்ற கவர்ச்சி பயிர்களை நடவும்.',
      'பாதிக்கப்பட்ட பூ மொட்டுகளையும் புழுக்களையும் கையால் சேகரித்து அழிக்கவும்.'
    ]
  },

  // --- BANANA ---
  {
    id: 'banana_sigatoka',
    cropId: 'banana',
    cropName_en: 'Banana',
    cropName_ta: 'வாழை',
    name_en: 'Sigatoka Leaf Spot (Mycosphaerella musicola)',
    name_ta: 'வாழை சிகடோகா இலைப்புள்ளி நோய்',
    type: 'fungal',
    type_en: 'Fungal Disease',
    type_ta: 'பூஞ்சை நோய்',
    severity: 'high',
    severity_label_en: 'High Severity',
    severity_label_ta: 'அதிக தீவிரம்',
    yield_loss_risk: '20% - 50%',
    action_window_en: 'De-leaf severely dried portions and spray within 3 days',
    action_window_ta: 'காய்ந்த இலைப்பகுதிகளை வெட்டி அகற்றி 3 நாட்களுக்குள் தெளிக்கவும்',
    symptoms_en: 'Small linear yellowish-green streaks parallel to leaf veins, developing into elliptical brown spots with sunken gray center and dark brown border, causing premature leaf death.',
    symptoms_ta: 'இலை நரம்புகளுக்கு இணையாக சிறிய மஞ்சள் கோடுகள் தோன்றி, பின்னர் நடுவில் சாம்பல் நிறமும் சுற்றிலும் அடர் பழுப்பு நிறமும் கொண்ட புள்ளிகளாக மாறி இலை காய்ந்துவிடும்.',
    cv_color_signature: {
      primary: '#78350f',
      center: '#e2e8f0',
      background: '#22c55e',
      lesion_pattern: 'linear_streaks'
    },
    organic_solution: {
      title_en: 'Organic / Bio Remedies',
      title_ta: 'இயற்கை தீர்வுகள்',
      steps_en: [
        'Sanitary de-leafing: cut off and burn leaf tips with >50% necrotic spot area.',
        'Foliar spray with mineral oil / agricultural spray oil (10 ml/L) mixed with Pseudomonas fluorescens @ 5g/L.',
        'Spray Panchagavya 3% + Neem oil 2 ml/L.'
      ],
      steps_ta: [
        'பாதிக்கப்பட்ட இலை நுனிகளை கவாத்து செய்து தோப்பை விட்டு அப்புறப்படுத்தவும்.',
        'மினரல் ஆயில் 10 மி.லி/லிட்டர் உடன் சூடோமோனாஸ் 5 கிராம் கலந்து தெளிக்கவும்.',
        'பஞ்சகவ்யா 3% மற்றும் வேப்பெண்ணெய் 2 மி.லி/லிட்டர் தெளிக்கவும்.'
      ]
    },
    chemical_solution: {
      title_en: 'Chemical Treatments',
      title_ta: 'ரசாயன சிகிச்சைகள்',
      medicines: [
        {
          name: 'Propiconazole 25% EC (Tilt)',
          dosage_en: '1 ml/liter + 10 ml mineral spray oil per liter',
          dosage_ta: '1 மி.லி/லிட்டர் + 10 மி.லி மினரல் ஆயில் கலந்து தெளிக்கவும்',
          phi: '21 days',
          notes_en: 'Strong systemic triazole action.'
        },
        {
          name: 'Carbendazim 12% + Mancozeb 63% WP (Saaf)',
          dosage_en: '2 g/liter (400 g/acre)',
          dosage_ta: '2 கிராம்/லிட்டர் (ஏக்கருக்கு 400 கிராம்)',
          phi: '14 days',
          notes_en: 'Dual contact and systemic coverage.'
        }
      ]
    },
    cultural_practices_en: [
      'Maintain proper drainage; avoid standing water in trenches.',
      'Keep banana sucker count to max 1-2 per stool.',
      'Ensure adequate row spacing (1.8m x 1.8m or 2.1m x 2.1m).'
    ],
    cultural_practices_ta: [
      'தோப்பில் வடிகால் வாய்க்கால்களை சுத்தமாக வைத்து நீர் தேங்காமல் பார்த்துக் கொள்ளவும்.',
      'தாய் வாழையுடன் ஒன்று அல்லது இரண்டு பக்க கன்றுகளை மட்டுமே வளர்க்கவும்.',
      'போதுமான பயிர் இடைவெளி விட்டு நடவு செய்யவும்.'
    ]
  },

  // --- CHILI / PEPPER ---
  {
    id: 'chili_anthracnose',
    cropId: 'chili',
    cropName_en: 'Chili / Pepper',
    cropName_ta: 'மிளகாய்',
    name_en: 'Anthracnose / Fruit Rot / Dieback',
    name_ta: 'மிளகாய் அந்திரக்னோஸ் / காய் அழுகல் நோய்',
    type: 'fungal',
    type_en: 'Fungal Disease',
    type_ta: 'பூஞ்சை நோய்',
    severity: 'high',
    severity_label_en: 'High Severity',
    severity_label_ta: 'அதிக தீவிரம்',
    yield_loss_risk: '30% - 50%',
    action_window_en: 'Spray at initial fruit setting stage or first lesion appearance',
    action_window_ta: 'பூக்கும் போது அல்லது காய் பிடிக்கும் ஆரம்பத்தில் உடனே தெளிக்கவும்',
    symptoms_en: 'Circular sunken lesions on ripe chili fruits with black dots (concentric rings of acervuli), dieback of tender twigs from tip downwards.',
    symptoms_ta: 'பழுத்த மிளகாய் காய்களில் குழியான வட்ட வடிவ கரும்பழுப்பு புள்ளிகள் மற்றும் வளையங்கள். செடியின் நுனி கிளைகள் நுனியிலிருந்து கீழ்நோக்கி காய்ந்து கருகிப் போகுதல் (Dieback).',
    cv_color_signature: {
      primary: '#3f1d0b',
      halo: '#ef4444',
      background: '#dc2626',
      lesion_pattern: 'sunken_fruit_rings'
    },
    organic_solution: {
      title_en: 'Organic / Bio Remedies',
      title_ta: 'இயற்கை தீர்வுகள்',
      steps_en: [
        'Seed treatment with Trichoderma viride @ 4g/kg seed before nursery sowing.',
        'Foliar spray with Pseudomonas fluorescens @ 5 g/liter every 15 days.',
        'Spray Garlic-Chili kerosene extract or 5% Neem seed kernel extract.'
      ],
      steps_ta: [
        'விதைப்பதற்கு முன் டிரைக்கோடெர்மா விரிடி 4 கிராம்/கிலோ விதைநேர்த்தி செய்யவும்.',
        'சூடோமோனாஸ் புளோரசன்ஸ் 5 கிராம்/லிட்டர் 15 நாட்களுக்கு ஒருமுறை தெளிக்கவும்.',
        'பூண்டு-மிளகாய் கரைசல் அல்லது 5% வேப்பங்கொட்டை சாறு தெளிக்கவும்.'
      ]
    },
    chemical_solution: {
      title_en: 'Chemical Treatments',
      title_ta: 'ரசாயன சிகிச்சைகள்',
      medicines: [
        {
          name: 'Azoxystrobin 23% SC (Amistar)',
          dosage_en: '1 ml/liter (200 ml/acre)',
          dosage_ta: '1 மி.லி/லிட்டர் (ஏக்கருக்கு 200 மி.லி)',
          phi: '5 days',
          notes_en: 'Superior strobilurin fungicide with kickback action.'
        },
        {
          name: 'Tebuconazole 25.9% EC (Folicur)',
          dosage_en: '1.25 ml/liter (250 ml/acre)',
          dosage_ta: '1.25 மி.லி/லிட்டர் (ஏக்கருக்கு 250 மி.லி)',
          phi: '7 days',
          notes_en: 'Effective against fruit rot and twig dieback.'
        }
      ]
    },
    cultural_practices_en: [
      'Collect and destroy infected dropped fruits and twigs.',
      'Avoid overhead sprinkling during fruit ripening.',
      'Use certified pathogen-free seeds.'
    ],
    cultural_practices_ta: [
      'கீழே விழுந்த அழுகிய மிளகாய் காய்களை உடனுக்குடன் சேகரித்து எரிக்கவும்.',
      'காய் பழுக்கும் போது தெளிப்பு நீர் பாசனம் செய்யாமல் சொட்டுநீர் பாசனம் செய்யவும்.',
      'சான்றளிக்கப்பட்ட சுத்தமான விதைகளை பயன்படுத்தவும்.'
    ]
  },
  {
    id: 'chili_leaf_curl',
    cropId: 'chili',
    cropName_en: 'Chili / Pepper',
    cropName_ta: 'மிளகாய்',
    name_en: 'Chili Leaf Curl / Murungai Disease',
    name_ta: 'மிளகாய் இலைச்சுருட்டு / முரணை நோய்',
    type: 'pest_viral',
    type_en: 'Mites / Thrips / Viral Complex',
    type_ta: 'அசுவினி / இலைப்பேன் / சிலந்தி பூச்சி தாக்குதல்',
    severity: 'high',
    severity_label_en: 'High Severity',
    severity_label_ta: 'அதிக தீவிரம்',
    yield_loss_risk: '35% - 60%',
    action_window_en: 'Check underside of leaves; spray within 48 hours',
    action_window_ta: 'இலைகளின் அடியை பரிசோதித்து 48 மணி நேரத்திற்குள் தெளிக்கவும்',
    symptoms_en: 'Upward curling (boat shape caused by thrips) or downward inverted curling (inverted cup shape caused by yellow mites), crinkled brittle leaves, stunted plants.',
    symptoms_ta: 'இலைகள் மேல்நோக்கி படகு போல் சுருளுதல் (இலைப்பேன் தாக்குதல்) அல்லது கீழ்நோக்கி கிண்ணம் போல் கவிழ்ந்து சுருளுதல் (மஞ்சள் சிலந்தி பேன் தாக்குதல்). இலைகள் தடித்து நொறுங்கும் தன்மையாதல்.',
    cv_color_signature: {
      primary: '#65a30d',
      secondary: '#ca8a04',
      background: '#16a34a',
      lesion_pattern: 'crinkled_cup'
    },
    organic_solution: {
      title_en: 'Organic / Bio Remedies',
      title_ta: 'இயற்கை தீர்வுகள்',
      steps_en: [
        'Install Blue Sticky Traps (for Thrips) and Yellow Sticky Traps (for Whiteflies) @ 10 each per acre.',
        'Spray Wettable Sulphur 80% WDG @ 3 g/liter for mite control.',
        'Spray Verticillium lecanii bio-agent @ 5 g/liter with 1 ml khadi soap solution.'
      ],
      steps_ta: [
        'இலைப்பேன்களை அழிக்க நீல நிற பொறிகள் மற்றும் வெள்ளை ஈக்களுக்கு மஞ்சள் நிற பொறிகள் தலா 10 கட்டவும்.',
        'சிலந்திகளுக்கு நனையும் கந்தகம் (Wettable Sulphur 80%) 3 கிராம்/லிட்டர் தெளிக்கவும்.',
        'வெர்ட்டிசீலியம் லெக்கானி உயிரியல் பூஞ்சை 5 கிராம்/லிட்டர் சோப்பு திரவத்துடன் கலந்து தெளிக்கவும்.'
      ]
    },
    chemical_solution: {
      title_en: 'Chemical Insecticides / Acaricides',
      title_ta: 'பூச்சி மற்றும் சிலந்திக்கொல்லி மருந்துகள்',
      medicines: [
        {
          name: 'Fipronil 5% SC (Regent)',
          dosage_en: '2 ml/liter (400 ml/acre)',
          dosage_ta: '2 மி.லி/லிட்டர் (ஏக்கருக்கு 400 மி.லி)',
          phi: '7 days',
          notes_en: 'Specialized for chili thrips and upward curling.'
        },
        {
          name: 'Spiromesifen 22.9% SC (Oberon)',
          dosage_en: '1 ml/liter (200 ml/acre)',
          dosage_ta: '1 மி.லி/லிட்டர் (ஏக்கருக்கு 200 மி.லி)',
          phi: '5 days',
          notes_en: 'Exceptional control for yellow mites (downward curling).'
        }
      ]
    },
    cultural_practices_en: [
      'Maintain regular light irrigations; drought exacerbates mite flare-ups.',
      'Eradicate solanaceous weeds around chili borders.'
    ],
    cultural_practices_ta: [
      'சீரான நீர்ப்பாசனம் செய்யவும்; வறட்சி நிலவினால் சிலந்தி பூச்சிகள் பலமடங்கு பெருகும்.',
      'வரப்பு ஓரங்களில் உள்ள களைகளை சுத்தமாக அகற்றவும்.'
    ]
  },

  // --- MAIZE / CORN ---
  {
    id: 'maize_fall_armyworm',
    cropId: 'maize',
    cropName_en: 'Maize / Corn',
    cropName_ta: 'மக்காச்சோளம்',
    name_en: 'Fall Armyworm (Spodoptera frugiperda)',
    name_ta: 'மக்காச்சோள படைப்புழு தாக்குதல்',
    type: 'pest',
    type_en: 'Invasive Pest (Lepidoptera)',
    type_ta: 'படைப்புழு தாக்குதல்',
    severity: 'critical',
    severity_label_en: 'Critical (Rapid Defoliation)',
    severity_label_ta: 'மிகத்தீவிரம் (வேகமான இலைச்சேதம்)',
    yield_loss_risk: '40% - 75%',
    action_window_en: 'Inspect whorls; spray within 24-48 hours directed into leaf whorl',
    action_window_ta: 'சுழி இலைகளை ஆராய்ந்து 24-48 மணி நேரத்திற்குள் சுழிக்குள் படுமாறு தெளிக்கவும்',
    symptoms_en: 'Window-paned foliage on young seedlings, ragged irregular holes in leaf whorl with copious moist yellowish sawdust-like frass (caterpillar droppings).',
    symptoms_ta: 'இளம் இலைகளில் சல்லடை போன்ற துளைகள், சுழிக்குள் இலைகளை வெட்டி தின்று மரத்தூள் போன்ற சாண எச்சங்கள் (Frass) அதிகமாக குவிந்து காணப்படும்.',
    cv_color_signature: {
      primary: '#ca8a04',
      holes: '#1c1917',
      background: '#15803d',
      lesion_pattern: 'ragged_whorl_holes'
    },
    organic_solution: {
      title_en: 'Bio & Cultural Management',
      title_ta: 'உயிரியல் & பாரம்பரிய முறைகள்',
      steps_en: [
        'Whorl application of dry soil / wood ash mixed with fine sand (ratio 1:9) into plant whorls to suffocate larvae.',
        'Metarhizium rileyi or Beauveria bassiana @ 5 g/liter directed into whorls.',
        'Install FAW pheromone traps @ 5-8 traps/acre.'
      ],
      steps_ta: [
        'மண் அல்லது மரச்சாம்பல் உடன் மணல் (1:9 விகிதம்) கலந்து மக்காச்சோள சுழிக்குள் இட்டு புழுக்களை நசுக்கி அழிக்கவும்.',
        'மெட்டாரைசியம் அல்லது பவேரியா பாசியானா உயிரியல் பூஞ்சை 5 கிராம்/லிட்டர் சுழியில் படுமாறு தெளிக்கவும்.',
        'படைப்புழு இனக்கவர்ச்சி பொறிகளை ஏக்கருக்கு 5-8 கட்டவும்.'
      ]
    },
    chemical_solution: {
      title_en: 'Chemical Insecticides (Direct to Whorl)',
      title_ta: 'சுழியில் படும் ரசாயன மருந்துகள்',
      medicines: [
        {
          name: 'Chlorantraniliprole 18.5% SC (Coragen)',
          dosage_en: '0.4 ml/liter (80 ml/acre in 200L water)',
          dosage_ta: '0.4 மி.லி/லிட்டர் (ஏக்கருக்கு 80 மி.லி)',
          phi: '25 days',
          notes_en: 'Direct spray nozzle into central leaf whorl.'
        },
        {
          name: 'Spinetoram 11.7% SC (Delegate)',
          dosage_en: '0.5 ml/liter (100 ml/acre)',
          dosage_ta: '0.5 மி.லி/லிட்டர் (ஏக்கருக்கு 100 மி.லி)',
          phi: '15 days',
          notes_en: 'Fast knock-down of hidden armyworm larvae.'
        }
      ]
    },
    cultural_practices_en: [
      'Synchronized community sowing over a large area to avoid pest buildup.',
      'Intercrop with Cowpea or Desmodium to repel moths.'
    ],
    cultural_practices_ta: [
      'அனைத்து விவசாயிகளும் ஒரே வாரத்தில் சமகாலத்தில் மக்காச்சோளம் விதைக்க வேண்டும்.',
      'தட்டைப்பயறு ஊடுபயிராக பயிரிட்டு அந்துப்பூச்சிகளை விரட்டவும்.'
    ]
  },

  // --- NUTRIENT & PHYSIOLOGICAL DISORDERS ---
  {
    id: 'nutrient_nitrogen_deficiency',
    cropId: 'general',
    cropName_en: 'All Crops (Nutrient)',
    cropName_ta: 'அனைத்து பயிர்கள் (ஊட்டச்சத்து)',
    name_en: 'Nitrogen Deficiency (Chlorosis)',
    name_ta: 'நைட்ரஜன் (தழைச்சத்து) குறைபாடு',
    type: 'nutrient',
    type_en: 'Nutrient Deficiency',
    type_ta: 'ஊட்டச்சத்து பற்றாக்குறை',
    severity: 'moderate',
    severity_label_en: 'Moderate (Growth Retardation)',
    severity_label_ta: 'மிதமானது (வளர்ச்சி பாதிப்பு)',
    yield_loss_risk: '15% - 30%',
    action_window_en: 'Apply top dressing within 3-5 days',
    action_window_ta: '3-5 நாட்களுக்குள் மேலுரம் இடவும்',
    symptoms_en: 'Uniform pale yellowing (chlorosis) beginning at leaf tips of oldest bottom leaves and progressing along midribs. Overall stunted pale green appearance with reduced tillering.',
    symptoms_ta: 'முதலில் செடியின் அடி இலைகளில் நுனியிலிருந்து தொடங்கி நடு நரம்பு வழியாக சீரான மஞ்சள் நிறமாக மாறுதல் (Chlorosis). செடிகள் வளர்ச்சி குன்றி மெலிந்து காணப்படுதல்.',
    cv_color_signature: {
      primary: '#facc15', // yellow midrib
      secondary: '#a3e635', // pale green
      background: '#22c55e',
      lesion_pattern: 'uniform_v_chlorosis'
    },
    organic_solution: {
      title_en: 'Organic Nitrogen Sources',
      title_ta: 'இயற்கை தழைச்சத்து தீர்வுகள்',
      steps_en: [
        'Apply enriched Vermicompost @ 500 kg/acre or Groundnut oil cake @ 100 kg/acre.',
        'Foliar spray with Cow Urine + Jeevamrutham (10% solution) @ 100 ml/liter of water.',
        'Incorporate green manure crops like Sunnhemp / Dhaincha into the soil.'
      ],
      steps_ta: [
        'வளப்படுத்தப்பட்ட மண்புழு உரம் ஏக்கருக்கு 500 கிலோ அல்லது கடலைப் புண்ணாக்கு 100 கிலோ இடவும்.',
        'மாட்டு சிறுநீர் + ஜீவாமிர்தம் (10% கரைசல்) 100 மி.லி/லிட்டர் கலந்து தெளிக்கவும்.',
        'தக்கைப்பூண்டு அல்லது சணப்பை போன்ற பசுந்தாள் உரங்களை மடக்கி உழவும்.'
      ]
    },
    chemical_solution: {
      title_en: 'Fertilizer Application',
      title_ta: 'உர மேலாண்மை',
      medicines: [
        {
          name: 'Urea (46% N) or Nano Urea Foliar Spray',
          dosage_en: 'Granular: 25-30 kg/acre as top dressing OR Nano Urea @ 4 ml/liter foliar spray',
          dosage_ta: 'குருணை யூரியா ஏக்கருக்கு 25-30 கிலோ அல்லது நானோ யூரியா 4 மி.லி/லிட்டர் இலைவழி தெளிப்பு',
          phi: '0 days',
          notes_en: 'Nano urea foliar spray produces faster recovery within 48-72h.'
        },
        {
          name: '19:19:19 (All 19) Water Soluble NPK',
          dosage_en: '5 g/liter (1 kg/acre in 200L water)',
          dosage_ta: '5 கிராம்/லிட்டர் (ஏக்கருக்கு 1 கிலோ - 200லி தண்ணீர்)',
          phi: '0 days',
          notes_en: 'Provides balanced macro-nutrients.'
        }
      ]
    },
    cultural_practices_en: ['Ensure optimal soil moisture before applying urea; avoid broadcasting on dry soil.'],
    cultural_practices_ta: ['மண்ணில் போதுமான ஈரம் இருக்கும் போது மட்டுமே யூரியா உரம் இட வேண்டும்.']
  },
  {
    id: 'nutrient_potassium_deficiency',
    cropId: 'general',
    cropName_en: 'All Crops (Nutrient)',
    cropName_ta: 'அனைத்து பயிர்கள் (ஊட்டச்சத்து)',
    name_en: 'Potassium Deficiency (Marginal Scorch)',
    name_ta: 'பொட்டாசியம் (சாம்பல் சத்து) குறைபாடு',
    type: 'nutrient',
    type_en: 'Nutrient Deficiency',
    type_ta: 'ஊட்டச்சத்து பற்றாக்குறை',
    severity: 'moderate',
    severity_label_en: 'Moderate Severity',
    severity_label_ta: 'மிதமான தீவிரம்',
    yield_loss_risk: '15% - 25%',
    action_window_en: 'Foliar spray with 0-0-50 within 5 days',
    action_window_ta: '5 நாட்களுக்குள் பொட்டாசியம் இலைவழி தெளிப்பு செய்யவும்',
    symptoms_en: 'Marginal chlorosis followed by dry brown necrosis / scorching of outer leaf edges ("firing"), while center remains green. Weak lodging stems.',
    symptoms_ta: 'முதிர்ந்த அடி இலைகளின் ஓரங்கள் தீயில் கருகியது போல காய்ந்து பழுப்பு நிறமாதல் ("Firing"). நடு நரம்புப் பகுதி பச்சையாக இருக்கும். தண்டு பலவீனமாகி சாய்ந்துவிடும்.',
    cv_color_signature: {
      primary: '#b45309', // scorched brown edge
      secondary: '#eab308',
      background: '#15803d',
      lesion_pattern: 'marginal_scorch'
    },
    organic_solution: {
      title_en: 'Organic Potassium Remedies',
      title_ta: 'இயற்கை சாம்பல் சத்து தீர்வுகள்',
      steps_en: [
        'Apply Wood Ash / Kitchen ash @ 150-200 kg/acre sprinkled near plant root zone.',
        'Spray fermented Banana Peel extract (rich in bio-available potassium) @ 50 ml/liter.',
        'Apply Potash Mobilizing Bacteria (KMB) @ 2 kg/acre mixed with compost.'
      ],
      steps_ta: [
        'மரச்சாம்பல் ஏக்கருக்கு 150-200 கிலோ செடிகளின் வேர் பகுதியில் இடவும்.',
        'நன்கு ஊறிய வாழைப்பழத் தோல் நீர் சாறு 50 மி.லி/லிட்டர் தெளிக்கவும்.',
        'பொட்டாஷ் கரைக்கும் பாக்டீரியா (KMB) ஏக்கருக்கு 2 கிலோ தொழு உரத்துடன் கலந்து இடவும்.'
      ]
    },
    chemical_solution: {
      title_en: 'Potassium Fertilizers',
      title_ta: 'பொட்டாஷ் ரசாயன உரங்கள்',
      medicines: [
        {
          name: 'Sulphate of Potash (0:0:50) Foliar Spray',
          dosage_en: '5 g/liter (1 kg/acre in 200L water)',
          dosage_ta: '5 கிராம்/லிட்டர் (ஏக்கருக்கு 1 கிலோ)',
          phi: '0 days',
          notes_en: 'Quickest relief for marginal leaf scorch.'
        },
        {
          name: 'Muriate of Potash (MOP 60% K2O)',
          dosage_en: '20-25 kg/acre soil application',
          dosage_ta: 'ஏக்கருக்கு 20-25 கிலோ மண்ணில் இடுதல்',
          phi: '0 days',
          notes_en: 'Basal and top dressing for long-term stem strength.'
        }
      ]
    },
    cultural_practices_en: ['Avoid heavy flooding on sandy soils which leaches potassium.'],
    cultural_practices_ta: ['மணற்பாங்கான மண்ணில் அதிக நீர் பாய்ச்சி பொட்டாஷ் சத்து வடிந்து போவதை தவிர்க்கவும்.']
  }
];

// Presets for one-click testing in the UI
const PRESET_SAMPLES = [
  {
    id: 'sample_blast',
    title_en: 'Paddy Blast Spindle Lesions',
    title_ta: 'நெல் குலை நோய் மாதிரி',
    crop: 'Paddy / Rice',
    diseaseId: 'rice_blast',
    svgType: 'rice_blast',
    description_en: 'Spindle-shaped fungal spots with gray centers and necrotic margins.',
    description_ta: 'சாம்பல் நிற மையமும் பழுப்பு ஓரங்களும் கொண்ட கண் வடிவ புள்ளிகள்.'
  },
  {
    id: 'sample_tomato_blight',
    title_en: 'Tomato Late Blight Blotch',
    title_ta: 'தக்காளி பிற்கால கருகல் மாதிரி',
    crop: 'Tomato',
    diseaseId: 'tomato_late_blight',
    svgType: 'tomato_late_blight',
    description_en: 'Water-soaked expanding dark brown necrotic lesions on foliage.',
    description_ta: 'நீர் ஊறிய கருமை கலந்த பழுப்பு நிற கருகல் புள்ளிகள்.'
  },
  {
    id: 'sample_cotton_blight',
    title_en: 'Cotton Angular Leaf Spot',
    title_ta: 'பருத்தி கோண இலைப்புள்ளி மாதிரி',
    crop: 'Cotton',
    diseaseId: 'cotton_bacterial_blight',
    svgType: 'cotton_angular',
    description_en: 'Angular water-soaked lesions bounded by veinlets.',
    description_ta: 'இலை நரம்புகளுக்கு இடைப்பட்ட கோண வடிவ புள்ளிகள்.'
  },
  {
    id: 'sample_maize_armyworm',
    title_en: 'Maize Fall Armyworm Damage',
    title_ta: 'மக்காச்சோளம் படைப்புழு மாதிரி',
    crop: 'Maize / Corn',
    diseaseId: 'maize_fall_armyworm',
    svgType: 'maize_armyworm',
    description_en: 'Chewed whorl leaf holes with yellow-brown frass droppings.',
    description_ta: 'சுழி இலைகளில் கடித்த துளைகள் மற்றும் கழிவு எச்சங்கள்.'
  },
  {
    id: 'sample_nitrogen_def',
    title_en: 'Nitrogen Deficiency Chlorosis',
    title_ta: 'நைட்ரஜன் குறைபாடு மாதிரி',
    crop: 'All Crops',
    diseaseId: 'nutrient_nitrogen_deficiency',
    svgType: 'nitrogen_chlorosis',
    description_en: 'V-shaped yellow chlorosis progressing along leaf midrib.',
    description_ta: 'நடு நரம்பு வழியாக பரவும் மஞ்சள் நிற தழைச்சத்து குறைபாடு.'
  },
  {
    id: 'sample_healthy_rice',
    title_en: 'Healthy Paddy Leaf Canopy',
    title_ta: 'ஆரோக்கியமான நெல் இலை மாதிரி',
    crop: 'Paddy / Rice',
    diseaseId: 'rice_healthy',
    svgType: 'healthy_leaf',
    description_en: 'Vibrant clean green chlorophyll without spots or pest gnawing.',
    description_ta: 'எந்தவித புள்ளிகளும் இல்லாத தூய பசுமையான இலை.'
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { CROPS_DATA, DISEASES_DATABASE, PRESET_SAMPLES };
}
