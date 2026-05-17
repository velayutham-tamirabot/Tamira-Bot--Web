export const products = [
  {
    id: 'type6-connector',
    name: 'TYPE 6 — Vehicle Connector',
    subtitle: 'Charging Gun',
    category: 'DC Fast Charging',
    desc: 'Designed for DC fast charging of electric and hybrid vehicles, complying with IEC 62196-6 and IS17017-2-6. It supports up to 120V DC and 100A rated current.',
    image: '/images/type6-connector.png',
    badge: '100A DC',
    gridSpecs: [
      { label: 'CHARGING TYPE', value: 'DC Fast Charging' },
      { label: 'RATED CURRENT', value: 'Up to 100A' },
      { label: 'VOLTAGE RANGE', value: '120V DC' },
      { label: 'COOLING', value: 'Natural Air Flow' },
      { label: 'STANDARD', value: 'IEC 62196-6' },
      { label: 'WARRANTY', value: '48 Months' }
    ],
    features: [
      'Uniform, space-saving dimensions for easy installation',
      'Developed per IATF 16949 automotive standard and ISO 9001',
      'Protected against dirt and water (IP55)',
      'Supports up to 100A for faster charging',
      'Copper alloy contact pins with uniform thermal distribution',
      'Compliant with IS17017-2-6 and IEC 62196-6',
      'Ergonomic, comfortable grip',
      'Patent technology for higher charging efficiency'
    ],
    commercialData: [
      { field: 'GTIN', value: '91042502' },
      { field: 'Packing Unit', value: '1 Unit' },
      { field: 'Minimum Order Quantity', value: '1 Unit' },
      { field: 'Sales Key', value: 'INVC' },
      { field: 'Product Key', value: 'INVC0402' },
      { field: 'Weight (with packing)', value: '450 g' },
      { field: 'Weight (without packing)', value: '360 g' },
      { field: 'Customs Tariff Number', value: '853690' },
      { field: 'Warranty', value: '48 Months' },
      { field: 'Country of Origin', value: 'India' }
    ],
    specifications: {
      headers: ['Model Number', 'Rated Current (DC)', 'Cable Specification'],
      rows: [
        ['T91-T6VC1-25ADC', '25A', '2×4mm²+5×0.75mm²'],
        ['T91-T6VC2-60ADC', '60A', '2×12.5mm²+5×0.75mm²'],
        ['T91-T6VC3-100ADC', '100A', '2×25mm²+5×0.75mm²']
      ]
    },
    electricalProperties: [
      { property: 'Charging Voltage', value: '120V DC' },
      { property: 'Charging Current', value: '25A / 60A / 100A DC' },
      { property: 'Charging Power', value: '7.2KW – 12KW max (Boost Mode)' },
      { property: 'Insulation Resistance', value: '>500MΩ' },
      { property: 'Contact Resistance', value: '0.5mΩ max' },
      { property: 'Flammability Rating', value: 'UL94V0' },
      { property: 'Signal Transmission', value: 'PWM + Powerline Communication (ISO/IEC 15118 / DIN SPEC 70121)' }
    ],
    mechanicalProperties: [
      { property: 'Dimensions (W×H×D)', value: '58.22mm × 110.71mm × 256.66mm' },
      { property: 'Insertion/Withdrawal Cycles', value: '>12,500' },
      { property: 'Insertion/Withdrawal Force', value: '<100N' },
      { property: 'IP Rating', value: 'IP55' },
      { property: 'Operating Temperature', value: '-30°C to +50°C' },
      { property: 'Storage Temperature', value: '-40°C to +80°C' },
      { property: 'Altitude', value: 'Up to 4000m' }
    ],
    accessories: [
      { name: 'Protective Cover', details: 'GTIN: 91042507 | Weight: 90g (with packing), 40g (without) | Origin: India' },
      { name: 'Docker (Charging Gun Holder)', details: 'GTIN: 91042510 | Weight: 100g (with packing), 70g (without) | Origin: India' }
    ]
  },
  {
    id: 'type6-inlet',
    name: 'TYPE 6 — Vehicle Inlet',
    subtitle: 'Vehicle Inlet',
    category: 'DC Fast Charging',
    desc: 'The Type 6 Vehicle Inlet enables DC fast charging compliant with IEC 62196-6 and IS17017-2-6. Rated up to 120V DC and 100A with natural air flow cooling.',
    image: '/images/type2-gun-ccs2.jpeg',
    badge: 'OEM Ready',
    gridSpecs: [
      { label: 'CHARGING TYPE', value: 'DC Fast Charging' },
      { label: 'RATED CURRENT', value: 'Up to 100A' },
      { label: 'VOLTAGE RANGE', value: '120V DC' },
      { label: 'COOLING', value: 'Natural Air Flow' },
      { label: 'STANDARD', value: 'IEC 62196-6' },
      { label: 'WARRANTY', value: '48 Months' }
    ],
    features: [
      'Space-saving dimensions; IATF 16949 and ISO 9001 compliant',
      'IP54 protection (IP64 with protective cover)',
      'Supports up to 100A',
      'Copper alloy contact pins for uniform thermal distribution',
      'Seamless integration into EV charging systems',
      'Patent technology for higher charging efficiency'
    ],
    commercialData: [
      { field: 'GTIN', value: '91042501' },
      { field: 'Packing Unit', value: '1 Unit' },
      { field: 'Minimum Order Quantity', value: '1 Unit' },
      { field: 'Sales Key', value: 'INVI' },
      { field: 'Product Key', value: 'INVI0401' },
      { field: 'Weight (with packing)', value: '180 g' },
      { field: 'Weight (without packing)', value: '140 g' },
      { field: 'Customs Tariff Number', value: '853690' },
      { field: 'Warranty', value: '48 Months' },
      { field: 'Country of Origin', value: 'India' }
    ],
    specifications: {
      headers: ['Model Number', 'Rated Current (DC)', 'Cable Specification'],
      rows: [
        ['T91-T6VI1-60ADC', '60A', '2×12.5mm²+5×0.75mm²'],
        ['T91-T6VI2-100ADC', '100A', '2×25mm²+5×0.75mm²']
      ]
    },
    electricalProperties: [
      { property: 'Charging Voltage', value: '120V DC' },
      { property: 'Charging Current', value: '60A / 100A DC' },
      { property: 'Charging Power', value: '7.2KW (60A) / 12KW (100A) Boost Mode' },
      { property: 'Insulation Resistance', value: '>500MΩ' },
      { property: 'Contact Resistance', value: '0.5mΩ max' },
      { property: 'Flammability Rating', value: 'UL94V0' }
    ],
    mechanicalProperties: [
      { property: 'Dimensions (W×H×D)', value: '70mm × 70mm × 62.60mm' },
      { property: 'Bore', value: '6mm' },
      { property: 'Insertion/Withdrawal Cycles', value: '>12,500' },
      { property: 'IP Rating', value: 'IP54 (IP64 with cover)' },
      { property: 'Operating Temperature', value: '-30°C to +50°C' },
      { property: 'Mounting', value: 'Front and rear, 0–90° inclination' },
      { property: 'Fixing Screws', value: 'M6' }
    ],
    accessories: [
      { name: 'Protective Cover', details: 'GTIN: 91042506 | Weight: 60g (with packing), 30g (without) | Origin: India' }
    ]
  },
  {
    id: 'ccs2-connector',
    name: 'CCS2 — Vehicle Connector',
    subtitle: 'Charging Gun',
    category: 'DC Ultra-Fast Charging',
    desc: 'Designed for DC ultra-fast charging per IEC 62196-3. Supports up to 1000V DC and 250A rated current with natural air flow cooling.',
    image: '/images/ccs2-connector.jpeg',
    badge: '250A DC',
    gridSpecs: [
      { label: 'CHARGING TYPE', value: 'DC Ultra-Fast Charging' },
      { label: 'RATED CURRENT', value: 'Up to 250A' },
      { label: 'VOLTAGE RANGE', value: '1000V DC' },
      { label: 'COOLING', value: 'Natural Air Flow' },
      { label: 'STANDARD', value: 'IEC 62196-3' },
      { label: 'WARRANTY', value: '48 Months' }
    ],
    features: [
      'IATF 16949 and ISO 9001 compliant',
      'IP55 protection',
      'Supports up to 250A for ultra-fast charging',
      'Copper alloy contact pins for optimal conductivity',
      'Ergonomic grip design',
      'Patent technology for higher charging efficiency'
    ],
    commercialData: [
      { field: 'GTIN', value: '91042504' },
      { field: 'Packing Unit', value: '1 Unit' },
      { field: 'Minimum Order Quantity', value: '1 Unit' },
      { field: 'Sales Key', value: 'INVC' },
      { field: 'Product Key', value: 'INVC0404' },
      { field: 'Weight (with packing)', value: '800 g' },
      { field: 'Weight (without packing)', value: '740 g' },
      { field: 'Customs Tariff Number', value: '853690' },
      { field: 'Warranty', value: '48 Months' },
      { field: 'Country of Origin', value: 'India' }
    ],
    specifications: {
      headers: ['Model Number', 'Rated Current (DC)', 'Cable Specification'],
      rows: [
        ['T91-CCS2VC1-80ADC', '80A', '2×16mm²+1×16mm²+2×0.75mm²+2(2×0.75mm²)'],
        ['T91-CCS2VC2-125ADC', '125A', '2×35mm²+1×25mm²+5×0.75mm²+1×0.75mm²'],
        ['T91-CCS2VC3-150ADC', '150A', '2×50mm²+1×25mm²+5×0.75mm²+1×0.75mm²'],
        ['T91-CCS2VC4-200ADC', '200A', '2×70mm²+1×35mm²+5×0.75mm²+1×0.75mm²'],
        ['T91-CCS2VC5-250ADC', '250A', '2×70mm²+1×35mm²+5×0.75mm²+1×0.75mm²']
      ]
    },
    electricalProperties: [
      { property: 'Charging Voltage', value: '1000V DC' },
      { property: 'Charging Current', value: '80A / 125A / 150A / 200A / 250A DC' },
      { property: 'Charging Power', value: 'Up to 12KW max (Boost Mode)' },
      { property: 'Insulation Resistance', value: '>500MΩ' },
      { property: 'Contact Resistance', value: '0.5mΩ max' },
      { property: 'Flammability Rating', value: 'UL94V0' },
      { property: 'Temperature Sensor', value: 'PT 1000 (DIN EN 60751)' }
    ],
    mechanicalProperties: [
      { property: 'Dimensions (W×H×D)', value: '63mm × 145.96mm × 246mm' },
      { property: 'Insertion/Withdrawal Cycles', value: '>12,500' },
      { property: 'IP Rating', value: 'IP55' },
      { property: 'Operating Temperature', value: '-30°C to +50°C' },
      { property: 'Altitude', value: 'Up to 4000m' }
    ],
    accessories: []
  },
  {
    id: 'type2-connector',
    name: 'TYPE 2 — Vehicle Connector',
    subtitle: 'Charging Gun',
    category: 'AC Charging',
    desc: 'Designed for AC charging per IEC 62196-2. Supports 250V single-phase to 480V three-phase AC and up to 32A rated current.',
    image: '/images/type2-connector.png',
    badge: '32A AC',
    gridSpecs: [
      { label: 'CHARGING TYPE', value: 'AC Charging' },
      { label: 'RATED CURRENT', value: 'Up to 32A' },
      { label: 'VOLTAGE RANGE', value: '250V AC up to 480V AC' },
      { label: 'COOLING', value: 'Natural Air Flow' },
      { label: 'STANDARD', value: 'IEC 62196-2' },
      { label: 'WARRANTY', value: '48 Months' }
    ],
    features: [
      'IATF 16949 and ISO 9001 compliant',
      'IP55 protection',
      'Weather-resistant thermoplastic outer casing',
      'High-conductivity copper alloy conductors',
      'Ergonomic grip design',
      'Patent technology for higher charging efficiency'
    ],
    commercialData: [
      { field: 'GTIN', value: '91042505' },
      { field: 'Packing Unit', value: '1 Unit' },
      { field: 'Minimum Order Quantity', value: '1 Unit' },
      { field: 'Sales Key', value: 'INVC' },
      { field: 'Product Key', value: 'INVC0405' },
      { field: 'Weight (with packing)', value: '370 g' },
      { field: 'Weight (without packing)', value: '330 g' },
      { field: 'Customs Tariff Number', value: '853690' },
      { field: 'Warranty', value: '48 Months' },
      { field: 'Country of Origin', value: 'India' }
    ],
    specifications: {
      headers: ['Model Number', 'Rated Current (AC)', 'Cable Specification'],
      rows: [
        ['T91-T2VC1-16AAC-SP', '16A (Single Phase)', '3×2.5mm²+2×0.75mm²'],
        ['T91-T2VC2-16AAC-TP', '16A (Three Phase)', '5×2.5mm²+2×0.75mm²'],
        ['T91-T2VC3-32AAC-SP', '32A (Single Phase)', '3×6mm²+2×0.75mm²'],
        ['T91-T2VC4-32AAC-TP', '32A (Three Phase)', '5×6mm²+2×0.75mm²']
      ]
    },
    electricalProperties: [
      { property: 'Charging Voltage', value: '250V–480V AC' },
      { property: 'Charging Current', value: '16A / 32A AC' },
      { property: 'Charging Power', value: 'Up to 3.7kW (16A) / 7.2kW (32A)' },
      { property: 'Insulation Resistance', value: '>500MΩ' },
      { property: 'Contact Resistance', value: '0.5mΩ max' },
      { property: 'Flammability Rating', value: 'UL94V0' }
    ],
    mechanicalProperties: [
      { property: 'Dimensions (W×H×D)', value: '71.3mm × 112.62mm × 204.01mm' },
      { property: 'Insertion/Withdrawal Cycles', value: '>12,500' },
      { property: 'IP Rating', value: 'IP55' },
      { property: 'Operating Temperature', value: '-30°C to +50°C' },
      { property: 'Altitude', value: 'Up to 4000m' }
    ],
    accessories: [
      { name: 'Protective Cover', details: 'GTIN: 91042509 | Weight: 90g (with packing), 60g (without) | Origin: India' },
      { name: 'Docker (Charging Gun Holder)', details: 'GTIN: 91042512 | Weight: 130g (with packing), 100g (without) | Origin: India' }
    ]
  },
  {
    id: 'ccs2-inlet',
    name: 'CCS2 — Vehicle Inlet',
    subtitle: 'Vehicle Inlet',
    category: 'DC Ultra-Fast Charging',
    desc: 'The CCS2 Vehicle Inlet supports both AC and DC fast charging per IEC 62196-3. Rated up to 1000V DC / 250A DC and 480V AC / 32A AC.',
    image: '/images/type2-gun-ccs2.jpeg',
    badge: 'OEM Ready',
    gridSpecs: [
      { label: 'CHARGING TYPE', value: 'DC Fast Charging' },
      { label: 'RATED CURRENT', value: 'Up to 250A DC' },
      { label: 'VOLTAGE RANGE', value: '1000V DC / 480V AC' },
      { label: 'COOLING', value: 'Natural Air Flow' },
      { label: 'STANDARD', value: 'IEC 62196-3' },
      { label: 'WARRANTY', value: '48 Months' }
    ],
    features: [
      'IATF 16949 and ISO 9001 compliant',
      'IP54 protection',
      'Supports up to 250A DC enabling ultra-fast charging',
      'Copper alloy contact pins for uniform thermal distribution',
      'Electronic locking actuator (12V) with mechanical emergency release',
      'Patent technology for higher charging efficiency'
    ],
    commercialData: [
      { field: 'GTIN', value: '91042503' },
      { field: 'Packing Unit', value: '1 Unit' },
      { field: 'Minimum Order Quantity', value: '1 Unit' },
      { field: 'Sales Key', value: 'INVI' },
      { field: 'Product Key', value: 'INVI0403' },
      { field: 'Weight (with packing)', value: '620 g' },
      { field: 'Weight (without packing)', value: '520 g' },
      { field: 'Customs Tariff Number', value: '853690' },
      { field: 'Warranty', value: '48 Months' },
      { field: 'Country of Origin', value: 'India' }
    ],
    specifications: {
      headers: ['Model Number', 'Rated DC Current', 'Rated AC Current', 'Cable Specification'],
      rows: [
        ['T91-CCS2VI1-32AAC80ADC', '80A', '32A', '2×16mm²+1×25mm²+4×6mm²+6×0.75mm²'],
        ['T91-CCS2VI2-32AAC125ADC', '125A', '32A', '2×35mm²+1×25mm²+4×6mm²+6×0.75mm²'],
        ['T91-CCS2VI3-32AAC150ADC', '150A', '32A', '2×50mm²+1×25mm²+4×6mm²+6×0.75mm²'],
        ['T91-CCS2VI4-32AAC200ADC', '200A', '32A', '2×70mm²+1×25mm²+4×6mm²+6×0.75mm²'],
        ['T91-CCS2VI5-32AAC250ADC', '250A', '32A', '2×70mm²+1×25mm²+4×6mm²+6×0.75mm²']
      ]
    },
    electricalProperties: [
      { property: 'Charging Voltage', value: '1000V DC / 480V AC' },
      { property: 'Charging Current DC', value: '80A / 125A / 150A / 200A / 250A' },
      { property: 'Charging Current AC', value: '32A' },
      { property: 'Charging Power', value: '7.2KW – 12KW max (Boost Mode)' },
      { property: 'Insulation Resistance', value: '>500MΩ' },
      { property: 'Contact Resistance', value: '0.5mΩ max' },
      { property: 'Flammability Rating', value: 'UL94V0' },
      { property: 'Temperature Sensor', value: 'PT 1000 (DIN EN 60751)' }
    ],
    mechanicalProperties: [
      { property: 'Dimensions (W×H×D)', value: '98mm × 130mm × 92.5mm' },
      { property: 'Bore', value: '8.5mm' },
      { property: 'Insertion/Withdrawal Cycles', value: '>12,500' },
      { property: 'IP Rating', value: 'IP54' },
      { property: 'Operating Temperature', value: '-30°C to +50°C' },
      { property: 'Mounting', value: 'Front and rear, 0–90° inclination' },
      { property: 'Fixing Screws', value: 'M8' }
    ],
    accessories: [
      { name: 'Protective Cover', details: 'GTIN: 91042508 | Weight: 80g (with packing), 50g (without) | Origin: India' }
    ]
  }
]
