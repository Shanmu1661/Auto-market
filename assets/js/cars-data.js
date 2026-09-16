/**
 * AutoMarket - Comprehensive Vehicle Database (cars-data.js)
 * Detailed specifications, pricing, inspection records, and galleries for all 20 inventory vehicles.
 */

window.AUTOMARKET_CARS = [
  // ==========================================
  // 1. SUV & CROSSOVER (101 - 104)
  // ==========================================
  {
    id: 101,
    title: "2021 Toyota RAV4 XLE AWD",
    make: "Toyota",
    model: "RAV4",
    year: 2021,
    trim: "XLE AWD",
    category: "suv",
    categoryLabel: "SUV & Crossover",
    price: 26500,
    emi: 395,
    msrp: 31200,
    mileage: "28,400 mi",
    odometerNum: 28400,
    engine: "2.5L Dynamic Force 4-Cylinder",
    transmission: "8-Speed Direct-Shift Automatic",
    drivetrain: "All-Wheel Drive (AWD) with Multi-Terrain Select",
    fuelType: "Gasoline",
    fuelEconomy: "27 MPG City / 33 MPG Hwy",
    horsepower: "203 HP @ 6,600 RPM",
    torque: "184 lb-ft @ 5,000 RPM",
    exteriorColor: "Magnetic Gray Metallic",
    interiorColor: "Black Premium Fabric",
    seating: "5 Passengers",
    cargoVolume: "37.6 - 69.8 cu ft",
    vin: "2T3P1RFV5MW198421",
    stock: "UM-7421",
    warranty: "12 Mos / 12,000 Mi Included",
    location: "Los Angeles Central Showroom",
    badges: [
      { text: "Certified", icon: "bi-shield-check", type: "certified" },
      { text: "Great Deal", icon: "", type: "deal" }
    ],
    images: {
      hero: "assets/images/categories/suv-1.jpg",
      interior: "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=600&q=80",
      rear: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=600&q=80",
      wheel: "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&w=600&q=80"
    },
    inspection: {
      date: "August 28, 2026",
      techId: "#4092",
      score: "Passed 200/200",
      engineScore: "Optimal 180 PSI Compression, Zero Leaks",
      brakes: "Front 85% (9mm), Rear 90% (10mm)",
      tires: "Michelin Primacy 7/32\" Tread",
      obd: "0 Diagnostic Trouble Codes"
    },
    features: {
      safety: ["Toyota Safety Sense 2.0 (TSS 2.0)", "Pre-Collision System w/ Pedestrian Detection", "Lane Departure Alert w/ Steering Assist", "Full-Speed Dynamic Radar Cruise", "Blind Spot Monitor w/ Rear Cross-Traffic Alert"],
      tech: ["8-inch Touchscreen Display", "Apple CarPlay & Android Auto", "6-Speaker Audio System", "Dual-Zone Automatic Climate Control", "Smart Key System w/ Push Button Start"],
      comfort: ["8-Way Power Adjustable Driver Seat", "Power Moonroof / Sunroof", "Roof Rails & Privacy Glass", "LED Projector Headlights w/ DRL"]
    }
  },
  {
    id: 102,
    title: "2020 Hyundai Tucson Sport AWD",
    make: "Hyundai",
    model: "Tucson",
    year: 2020,
    trim: "Sport AWD",
    category: "suv",
    categoryLabel: "SUV & Crossover",
    price: 18900,
    emi: 285,
    msrp: 27800,
    mileage: "34,200 mi",
    odometerNum: 34200,
    engine: "2.4L GDI 4-Cylinder",
    transmission: "6-Speed Automatic w/ SHIFTRONIC",
    drivetrain: "HTRAC All-Wheel Drive w/ Lock Mode",
    fuelType: "Gasoline",
    fuelEconomy: "22 MPG City / 28 MPG Hwy",
    horsepower: "181 HP @ 6,000 RPM",
    torque: "175 lb-ft @ 4,000 RPM",
    exteriorColor: "Coliseum Gray",
    interiorColor: "Black Sport Cloth",
    seating: "5 Passengers",
    cargoVolume: "31.0 - 61.9 cu ft",
    vin: "KM8J33A44LU819241",
    stock: "UM-5519",
    warranty: "12 Mos / 12,000 Mi Included",
    location: "Chicago West Showroom",
    badges: [
      { text: "1-Owner", icon: "bi-person-check", type: "deal" },
      { text: "Low Mileage", icon: "", type: "deal" }
    ],
    images: {
      hero: "assets/images/categories/suv-2.jpg",
      interior: "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=600&q=80",
      rear: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=600&q=80",
      wheel: "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&w=600&q=80"
    },
    inspection: {
      date: "September 02, 2026",
      techId: "#3810",
      score: "Passed 200/200",
      engineScore: "175 PSI Compression across cylinders, Clean Oil",
      brakes: "Front 80% (8.5mm), Rear 85% (9mm)",
      tires: "Continental CrossContact 6.5/32\" Tread",
      obd: "Clean Diagnostic Scan"
    },
    features: {
      safety: ["Forward Collision-Avoidance Assist", "Lane Keeping Assist (LKA)", "Driver Attention Warning (DAW)", "Blind Spot Collision Warning"],
      tech: ["7-inch Color Touchscreen", "Infinity 8-Speaker Premium Audio", "Android Auto & Apple CarPlay", "Wireless Device Charging Pad"],
      comfort: ["19-inch Sport Alloy Wheels", "Hands-Free Smart Power Tailgate", "Heated Front Bucket Seats", "Dual Automatic Temperature Control"]
    }
  },
  {
    id: 103,
    title: "2022 Honda CR-V Touring Turbo",
    make: "Honda",
    model: "CR-V",
    year: 2022,
    trim: "Touring Turbo AWD",
    category: "suv",
    categoryLabel: "SUV & Crossover",
    price: 29400,
    emi: 435,
    msrp: 36800,
    mileage: "21,100 mi",
    odometerNum: 21100,
    engine: "1.5L VTEC Turbocharged 4-Cylinder",
    transmission: "Continuously Variable Transmission (CVT)",
    drivetrain: "Real Time AWD with Intelligent Control",
    fuelType: "Turbocharged Gasoline",
    fuelEconomy: "28 MPG City / 34 MPG Hwy",
    horsepower: "190 HP @ 5,600 RPM",
    torque: "179 lb-ft @ 2,000 - 5,000 RPM",
    exteriorColor: "Platinum White Pearl",
    interiorColor: "Black Perforated Leather",
    seating: "5 Passengers",
    cargoVolume: "39.2 - 75.8 cu ft",
    vin: "7FARW2H86NE019482",
    stock: "UM-8920",
    warranty: "24 Mos / 24,000 Mi Included",
    location: "Dallas North Marketplace",
    badges: [
      { text: "Certified", icon: "bi-shield-check", type: "certified" },
      { text: "Top Safety", icon: "bi-award", type: "featured" }
    ],
    images: {
      hero: "assets/images/categories/suv-3.jpg",
      interior: "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=600&q=80",
      rear: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=600&q=80",
      wheel: "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&w=600&q=80"
    },
    inspection: {
      date: "September 05, 2026",
      techId: "#5102",
      score: "Passed 200/200",
      engineScore: "Factory Spec Turbo Pressure, No blow-by",
      brakes: "Front 90% (9.5mm), Rear 90% (9.5mm)",
      tires: "Bridgestone Ecopia 8/32\" Tread",
      obd: "Passed Honda OEM Scan"
    },
    features: {
      safety: ["Honda Sensing Suite", "Collision Mitigation Braking System", "Road Departure Mitigation", "Adaptive Cruise Control w/ Low-Speed Follow"],
      tech: ["9-Speaker 330W Premium Audio w/ Subwoofer", "Honda Satellite-Linked Navigation", "Wireless Phone Charging", "Apple CarPlay & Android Auto"],
      comfort: ["Hands-Free Access Power Tailgate", "Heated Leather Front Seats & Heated Steering", "Power Sunroof", "19-inch Machined Alloy Wheels"]
    }
  },
  {
    id: 104,
    title: "2021 Mazda CX-5 Grand Touring",
    make: "Mazda",
    model: "CX-5",
    year: 2021,
    trim: "Grand Touring AWD",
    category: "suv",
    categoryLabel: "SUV & Crossover",
    price: 24800,
    emi: 370,
    msrp: 32500,
    mileage: "31,500 mi",
    odometerNum: 31500,
    engine: "2.5L SKYACTIV-G 4-Cylinder w/ Cylinder Deactivation",
    transmission: "SKYACTIV-Drive 6-Speed Automatic w/ Sport Mode",
    drivetrain: "i-ACTIV AWD with Off-Road Traction Assist",
    fuelType: "Gasoline",
    fuelEconomy: "24 MPG City / 30 MPG Hwy",
    horsepower: "187 HP @ 6,000 RPM",
    torque: "186 lb-ft @ 4,000 RPM",
    exteriorColor: "Soul Red Crystal Metallic",
    interiorColor: "Parchment Nappa Leather",
    seating: "5 Passengers",
    cargoVolume: "30.9 - 59.6 cu ft",
    vin: "JM3KFBDM1M0382910",
    stock: "UM-6638",
    warranty: "12 Mos / 12,000 Mi Included",
    location: "Seattle Center Auto Hub",
    badges: [
      { text: "Great Value", icon: "", type: "deal" },
      { text: "Bose Audio", icon: "bi-music-note", type: "featured" }
    ],
    images: {
      hero: "assets/images/categories/suv-4.jpg",
      interior: "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=600&q=80",
      rear: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=600&q=80",
      wheel: "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&w=600&q=80"
    },
    inspection: {
      date: "September 08, 2026",
      techId: "#4120",
      score: "Passed 200/200",
      engineScore: "SKYACTIV Powertrain Inspection 100% Nominal",
      brakes: "Front 82% (8.8mm), Rear 88% (9.2mm)",
      tires: "Toyo A36 7/32\" Tread",
      obd: "Zero System Faults"
    },
    features: {
      safety: ["i-ACTIVSENSE Safety Suite", "Advanced Smart City Brake Support", "Lane Departure Warning & Lane Keep", "Mazda Radar Cruise Control w/ Stop & Go"],
      tech: ["10.25-inch Full Color Display", "Bose 10-Speaker Premium Sound System", "Windshield-Projected Active Driving HUD", "Apple CarPlay & Android Auto"],
      comfort: ["Power Sliding-Glass Moonroof", "Leather-Trimmed Heated Front Seats", "Power Rear Liftgate", "Dual-Zone Automatic Climate"]
    }
  },

  // ==========================================
  // 2. SEDANS (201 - 204)
  // ==========================================
  {
    id: 201,
    title: "2020 Toyota Camry LE",
    make: "Toyota",
    model: "Camry",
    year: 2020,
    trim: "LE FWD",
    category: "sedan",
    categoryLabel: "Sedan",
    price: 19400,
    emi: 295,
    msrp: 24970,
    mileage: "34,200 mi",
    odometerNum: 34200,
    engine: "2.5L Dynamic Force 4-Cylinder DOHC 16V",
    transmission: "Direct-Shift 8-Speed Electronically Controlled Automatic",
    drivetrain: "Front-Wheel Drive (FWD)",
    fuelType: "Gasoline",
    fuelEconomy: "28 MPG City / 39 MPG Hwy",
    horsepower: "203 HP @ 6,600 RPM",
    torque: "184 lb-ft @ 5,000 RPM",
    exteriorColor: "Midnight Black Metallic",
    interiorColor: "Ash Fabric Interior",
    seating: "5 Passengers",
    cargoVolume: "15.1 cu ft Trunk",
    vin: "4T1B11HK5LU198432",
    stock: "UM-4821",
    warranty: "12 Mos / 12,000 Mi Included",
    location: "Los Angeles Central Showroom",
    badges: [
      { text: "Certified", icon: "bi-shield-check", type: "certified" },
      { text: "Great Deal", icon: "", type: "deal" }
    ],
    images: {
      hero: "assets/images/categories/sedan-1.jpg",
      interior: "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=600&q=80",
      rear: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=600&q=80",
      wheel: "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&w=600&q=80"
    },
    inspection: {
      date: "August 28, 2026",
      techId: "#4092",
      score: "Passed 200/200",
      engineScore: "185 PSI Compression across cylinders, Clean Oil",
      brakes: "Front 85% (9mm), Rear 90% (10mm)",
      tires: "Michelin Primacy 7/32\" Tread",
      obd: "0 Diagnostic Trouble Codes"
    },
    features: {
      safety: ["Toyota Safety Sense P (TSS-P)", "Pre-Collision System with Pedestrian Detection", "Lane Departure Alert with Steering Assist", "Automatic High Beams", "Full-Speed Dynamic Radar Cruise Control"],
      tech: ["7-inch Audio Touchscreen System", "Apple CarPlay & Android Auto Compatible", "Integrated Backup Camera with Projected Path", "Bluetooth Wireless Music & Phone"],
      comfort: ["8-Way Power-Adjustable Driver Seat with Lumbar", "60/40 Split Fold-Down Rear Seat", "Bi-LED Combination Headlights", "17-inch Alloy Wheels"]
    }
  },
  {
    id: 202,
    title: "2019 Toyota Corolla SE",
    make: "Toyota",
    model: "Corolla",
    year: 2019,
    trim: "SE Sport",
    category: "sedan",
    categoryLabel: "Sedan",
    price: 16200,
    emi: 245,
    msrp: 20450,
    mileage: "42,100 mi",
    odometerNum: 42100,
    engine: "1.8L 4-Cylinder DOHC 16-Valve Valvematic",
    transmission: "CVTi-S with Paddle Shifters & Sport Mode",
    drivetrain: "Front-Wheel Drive (FWD)",
    fuelType: "Gasoline",
    fuelEconomy: "28 MPG City / 36 MPG Hwy",
    horsepower: "132 HP @ 6,000 RPM",
    torque: "128 lb-ft @ 4,400 RPM",
    exteriorColor: "Super White",
    interiorColor: "Black / Blue Sport Fabric",
    seating: "5 Passengers",
    cargoVolume: "13.0 cu ft Trunk",
    vin: "2T1BURHE7KC109384",
    stock: "UM-3129",
    warranty: "12 Mos / 12,000 Mi Included",
    location: "Miami Marketplace",
    badges: [
      { text: "1-Owner", icon: "bi-person-check", type: "deal" },
      { text: "Best Seller", icon: "bi-fire", type: "featured" }
    ],
    images: {
      hero: "assets/images/categories/sedan-2.jpg",
      interior: "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=600&q=80",
      rear: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=600&q=80",
      wheel: "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&w=600&q=80"
    },
    inspection: {
      date: "August 30, 2026",
      techId: "#3920",
      score: "Passed 200/200",
      engineScore: "Tested Optimal 178 PSI, Flawless CVTi-S shifts",
      brakes: "Front 80% (8.5mm), Rear 85% (9mm)",
      tires: "Yokohama Avid 6.5/32\" Tread",
      obd: "Passed Full Diagnostic Check"
    },
    features: {
      safety: ["Toyota Safety Sense P Standard", "Lane Departure Alert w/ Steering Assist", "Pre-Collision Braking", "Dynamic Radar Cruise Control"],
      tech: ["Entune Audio Plus 7-inch Touchscreen", "Siri Eyes Free & Bluetooth Connectivity", "Color 4.2-inch Multi-Information Display", "Sport Instrumentation Cluster"],
      comfort: ["17-inch Machined Alloy Wheels w/ Black Accents", "Sport Front Mesh Grille & Rear Spoiler", "Sport Fabric Front Bucket Seats", "Leather-Trimmed Steering Wheel w/ Paddle Shifters"]
    }
  },
  {
    id: 203,
    title: "2021 Honda Civic Sport",
    make: "Honda",
    model: "Civic",
    year: 2021,
    trim: "Sport Sedan",
    category: "sedan",
    categoryLabel: "Sedan",
    price: 21500,
    emi: 320,
    msrp: 23050,
    mileage: "26,800 mi",
    odometerNum: 26800,
    engine: "2.0L i-VTEC DOHC 4-Cylinder",
    transmission: "M-CVT with Dual-Mode Paddle Shifters",
    drivetrain: "Front-Wheel Drive (FWD)",
    fuelType: "Gasoline",
    fuelEconomy: "29 MPG City / 37 MPG Hwy",
    horsepower: "158 HP @ 6,500 RPM",
    torque: "138 lb-ft @ 4,200 RPM",
    exteriorColor: "Rallye Red",
    interiorColor: "Black Sport Cloth w/ Textured Inserts",
    seating: "5 Passengers",
    cargoVolume: "15.1 cu ft Trunk",
    vin: "19XFC2F85ME029104",
    stock: "UM-6210",
    warranty: "12 Mos / 12,000 Mi Included",
    location: "Houston South Showroom",
    badges: [
      { text: "Low Mileage", icon: "bi-cash-coin", type: "deal" },
      { text: "Certified", icon: "bi-shield-check", type: "certified" }
    ],
    images: {
      hero: "assets/images/categories/sedan-3.jpg",
      interior: "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=600&q=80",
      rear: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=600&q=80",
      wheel: "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&w=600&q=80"
    },
    inspection: {
      date: "September 01, 2026",
      techId: "#4512",
      score: "Passed 200/200",
      engineScore: "182 PSI Compression, Pristine Engine Bay",
      brakes: "Front 88% (9.2mm), Rear 90% (9.5mm)",
      tires: "Goodyear Eagle Sport 7.5/32\" Tread",
      obd: "100% Error-Free Scan"
    },
    features: {
      safety: ["Honda Sensing Suite", "Collision Mitigation Braking", "Road Departure Mitigation", "Lane Keeping Assist System", "Adaptive Cruise Control"],
      tech: ["7-inch Display Audio Touchscreen", "8-Speaker 180W Audio System", "Apple CarPlay & Android Auto", "Smart Entry with Walk Away Auto Lock"],
      comfort: ["18-inch Gloss-Black Alloy Wheels", "Center Outlet Sport Exhaust", "Sport Pedals & Leather-Wrapped Steering", "Automatic Climate Control System"]
    }
  },
  {
    id: 204,
    title: "2022 Hyundai Elantra Limited",
    make: "Hyundai",
    model: "Elantra",
    year: 2022,
    trim: "Limited Loaded",
    category: "sedan",
    categoryLabel: "Sedan",
    price: 22900,
    emi: 345,
    msrp: 26100,
    mileage: "19,400 mi",
    odometerNum: 19400,
    engine: "2.0L Smartstream MPI 4-Cylinder",
    transmission: "Smartstream Intelligent Variable Transmission (IVT)",
    drivetrain: "Front-Wheel Drive (FWD)",
    fuelType: "Gasoline",
    fuelEconomy: "31 MPG City / 41 MPG Hwy",
    horsepower: "147 HP @ 6,200 RPM",
    torque: "132 lb-ft @ 4,500 RPM",
    exteriorColor: "Intense Blue Metallic",
    interiorColor: "Melange Gray Leather",
    seating: "5 Passengers",
    cargoVolume: "14.2 cu ft Trunk",
    vin: "KMHD84LF7NU592019",
    stock: "UM-7033",
    warranty: "24 Mos / 24,000 Mi Included",
    location: "Phoenix Central Showroom",
    badges: [
      { text: "CPO Inspected", icon: "bi-shield-check", type: "certified" },
      { text: "41 MPG", icon: "bi-lightning-charge", type: "featured" }
    ],
    images: {
      hero: "assets/images/categories/sedan-4.jpg",
      interior: "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=600&q=80",
      rear: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=600&q=80",
      wheel: "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&w=600&q=80"
    },
    inspection: {
      date: "September 04, 2026",
      techId: "#4901",
      score: "Passed 200/200",
      engineScore: "High-Efficiency Smartstream Cycle Verified",
      brakes: "Front 92% (9.8mm), Rear 94% (10mm)",
      tires: "Hankook Kinergy 8/32\" Tread",
      obd: "Passed All Hyundai Diagnostics"
    },
    features: {
      safety: ["Highway Driving Assist (HDA)", "Forward Collision-Avoidance w/ Pedestrian & Cyclist Detection", "Blind-Spot Collision-Avoidance Assist", "Parking Collision-Avoidance Assist-Reverse"],
      tech: ["Dual 10.25-inch Digital Gauge Cluster & Navigation Screen", "Bose 8-Speaker Premium Audio", "Hyundai Digital Key (Smartphone Access)", "Dynamic Voice Recognition"],
      comfort: ["Power Sunroof", "Leather Seating Surfaces w/ Heated Front Seats", "Wireless Charging Pad", "Ambient Interior LED Lighting (64 Colors)"]
    }
  },

  // ==========================================
  // 3. COUPE / SPORTS (301 - 304)
  // ==========================================
  {
    id: 301,
    title: "2020 Ford Mustang GT 5.0",
    make: "Ford",
    model: "Mustang",
    year: 2020,
    trim: "GT Premium 5.0L V8",
    category: "coupe",
    categoryLabel: "Coupe / Sports",
    price: 34500,
    emi: 515,
    msrp: 41200,
    mileage: "22,300 mi",
    odometerNum: 22300,
    engine: "5.0L Ti-VCT Coyote V8 Engine",
    transmission: "10-Speed SelectShift Automatic w/ Paddle Shifters",
    drivetrain: "Rear-Wheel Drive (RWD) with Limited-Slip Differential",
    fuelType: "Premium Gasoline",
    fuelEconomy: "16 MPG City / 25 MPG Hwy",
    horsepower: "460 HP @ 7,500 RPM",
    torque: "420 lb-ft @ 4,600 RPM",
    exteriorColor: "Shadow Black",
    interiorColor: "Ebony Leather Sport Seats",
    seating: "4 Passengers",
    cargoVolume: "13.5 cu ft Trunk",
    vin: "1FA6P8CF9L5109382",
    stock: "UM-9104",
    warranty: "12 Mos / 12,000 Mi Included",
    location: "Las Vegas Showroom",
    badges: [
      { text: "460 HP", icon: "bi-lightning-charge-fill", type: "featured" },
      { text: "Performance", icon: "", type: "deal" }
    ],
    images: {
      hero: "assets/images/categories/coupe-1.jpg",
      interior: "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=600&q=80",
      rear: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=600&q=80",
      wheel: "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&w=600&q=80"
    },
    inspection: {
      date: "August 25, 2026",
      techId: "#3301",
      score: "Passed 200/200",
      engineScore: "Coyote V8 dyno-matched, Clean oil analysis, Zero tick",
      brakes: "Brembo 6-Piston Front 88%, Rear 90%",
      tires: "Pirelli P-Zero 7/32\" Tread",
      obd: "Clean Powertrain Control Module Scan"
    },
    features: {
      safety: ["Ford Co-Pilot360", "Pre-Collision Assist with Automatic Emergency Braking", "BLIS (Blind Spot Information System)", "Active Valve Performance Exhaust System"],
      tech: ["12-inch All-Digital LCD Instrument Cluster", "SYNC 3 with 8-inch Touchscreen", "B&O 12-Speaker Sound System by Bang & Olufsen", "Track Apps (Launch Control, G-Force Meter, Lap Timer)"],
      comfort: ["Heated & Cooled Front Leather Seats", "MagneRide Damping System", "19-inch Ebony Black Painted Aluminum Wheels", "Selectable Drive Modes (Track, Sport+, Drag, Snow/Wet)"]
    }
  },
  {
    id: 302,
    title: "2021 Chevrolet Camaro SS",
    make: "Chevrolet",
    model: "Camaro",
    year: 2021,
    trim: "2SS Coupe 6.2L",
    category: "coupe",
    categoryLabel: "Coupe / Sports",
    price: 36800,
    emi: 550,
    msrp: 43500,
    mileage: "18,900 mi",
    odometerNum: 18900,
    engine: "6.2L LT1 Direct-Injected V8",
    transmission: "6-Speed Manual with Active Rev Matching",
    drivetrain: "Rear-Wheel Drive (RWD) w/ Mechanical LSD",
    fuelType: "Premium Gasoline",
    fuelEconomy: "16 MPG City / 24 MPG Hwy",
    horsepower: "455 HP @ 6,000 RPM",
    torque: "455 lb-ft @ 4,400 RPM",
    exteriorColor: "Crush Orange Metallic",
    interiorColor: "Jet Black Leather w/ SS Embroidered Badging",
    seating: "4 Passengers",
    cargoVolume: "9.1 cu ft Trunk",
    vin: "1G1FE1R70M0189382",
    stock: "UM-8422",
    warranty: "12 Mos / 12,000 Mi Included",
    location: "Atlanta Performance Center",
    badges: [
      { text: "1-Owner", icon: "bi-person-check", type: "deal" },
      { text: "Track Ready", icon: "bi-speedometer", type: "certified" }
    ],
    images: {
      hero: "assets/images/categories/coupe-2.jpg",
      interior: "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=600&q=80",
      rear: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=600&q=80",
      wheel: "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&w=600&q=80"
    },
    inspection: {
      date: "September 03, 2026",
      techId: "#4218",
      score: "Passed 200/200",
      engineScore: "LT1 Small Block V8 185 PSI Compression across all 8 cyl",
      brakes: "Brembo 4-Wheel Performance Discs 90%",
      tires: "Goodyear Eagle F1 SuperCar 7.5/32\" Tread",
      obd: "Passed GM Tech2 / MDI Diagnostic"
    },
    features: {
      safety: ["Rear Park Assist & Rear Cross Traffic Alert", "Forward Collision Alert", "Head-Up Display (Color HUD)", "StabiliTrak Electronic Stability Control w/ Competition Mode"],
      tech: ["Chevrolet Infotainment 3 Plus 8-inch HD Color Touchscreen", "Bose 9-Speaker Premium Audio", "Wireless Apple CarPlay & Android Auto", "Performance Data and Video Recorder (PDR)"],
      comfort: ["Heated & Ventilated Front Leather Bucket Seats", "Heated Flat-Bottom Steering Wheel", "Customizable Interior Spectrum Lighting (24 Colors)", "Dual-Mode Performance Exhaust System"]
    }
  },
  {
    id: 303,
    title: "2022 Toyota GR86 Premium",
    make: "Toyota",
    model: "GR86",
    year: 2022,
    trim: "Premium 6-Speed Manual",
    category: "coupe",
    categoryLabel: "Coupe / Sports",
    price: 28900,
    emi: 430,
    msrp: 31800,
    mileage: "14,200 mi",
    odometerNum: 14200,
    engine: "2.4L Naturally Aspirated Boxer-4 D-4S",
    transmission: "Close-Ratio 6-Speed Manual w/ Short-Throw Shifter",
    drivetrain: "Rear-Wheel Drive (RWD) w/ Torsen Limited-Slip Differential",
    fuelType: "Premium Gasoline",
    fuelEconomy: "20 MPG City / 27 MPG Hwy",
    horsepower: "228 HP @ 7,000 RPM",
    torque: "184 lb-ft @ 3,700 RPM",
    exteriorColor: "Track bRED",
    interiorColor: "Black Leather / Ultrasuede w/ Silver Accents",
    seating: "4 Passengers",
    cargoVolume: "6.3 cu ft Trunk",
    vin: "JF1ZN8B13N9719302",
    stock: "UM-7501",
    warranty: "24 Mos / 24,000 Mi Included",
    location: "Denver Mountain Hub",
    badges: [
      { text: "Certified", icon: "bi-shield-check", type: "certified" },
      { text: "Enthusiast Choice", icon: "bi-trophy", type: "deal" }
    ],
    images: {
      hero: "assets/images/categories/coupe-3.jpg",
      interior: "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=600&q=80",
      rear: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=600&q=80",
      wheel: "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&w=600&q=80"
    },
    inspection: {
      date: "September 06, 2026",
      techId: "#3899",
      score: "Passed 200/200",
      engineScore: "Boxer 2.4L Tested Pristine, Oil pickup inspected clean",
      brakes: "Front 92% (9.5mm), Rear 95% (10mm)",
      tires: "Michelin Pilot Sport 4 8/32\" Tread",
      obd: "Passed Full Subaru/Toyota Diagnostic Protocol"
    },
    features: {
      safety: ["Track Mode Stability Control", "Hill Start Assist Control", "Blind Spot Detection w/ Rear Cross Traffic", "Adaptive Front-Lighting System (AFS)"],
      tech: ["8-inch Touchscreen Infotainment", "8-Speaker Audio w/ Digital Sound Enhancement", "7-inch Digital Gauge Cluster with Track Mode Display", "Apple CarPlay & Android Auto"],
      comfort: ["Duckbill Rear Spoiler in Matte Black", "18-inch Matte Black Cast Aluminum Wheels", "Heated Sport Bucket Seats with Ultrasuede Bolsters", "Dual-Zone Automatic Climate Control"]
    }
  },
  {
    id: 304,
    title: "2021 BMW 4-Series 430i M-Sport",
    make: "BMW",
    model: "430i",
    year: 2021,
    trim: "M-Sport Package Coupe",
    category: "coupe",
    categoryLabel: "Coupe / Sports",
    price: 42000,
    emi: 625,
    msrp: 49800,
    mileage: "27,600 mi",
    odometerNum: 27600,
    engine: "2.0L BMW TwinPower Turbo Inline 4-Cylinder",
    transmission: "8-Speed Sport Automatic w/ Launch Control & Paddle Shifters",
    drivetrain: "Rear-Wheel Drive (RWD) with M-Sport Differential",
    fuelType: "Premium Gasoline",
    fuelEconomy: "26 MPG City / 34 MPG Hwy",
    horsepower: "255 HP @ 5,000 - 6,500 RPM",
    torque: "295 lb-ft @ 1,550 - 4,400 RPM",
    exteriorColor: "Phytonic Blue Metallic",
    interiorColor: "Canberra Beige Vernasca Leather",
    seating: "4 Passengers",
    cargoVolume: "12.0 cu ft Trunk",
    vin: "WBA13AR08MF910382",
    stock: "UM-9400",
    warranty: "24 Mos / 24,000 Mi Included",
    location: "San Francisco Luxury Center",
    badges: [
      { text: "Certified", icon: "bi-shield-check", type: "certified" },
      { text: "M-Sport", icon: "bi-gem", type: "featured" }
    ],
    images: {
      hero: "assets/images/categories/coupe-4.jpg",
      interior: "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=600&q=80",
      rear: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=600&q=80",
      wheel: "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&w=600&q=80"
    },
    inspection: {
      date: "September 07, 2026",
      techId: "#5011",
      score: "Passed 200/200",
      engineScore: "BMW ISTA diagnostic check passed with zero faults",
      brakes: "M-Sport Blue Calipers 88% Brake Life",
      tires: "Pirelli Cinturato P7 Run-Flat 7/32\" Tread",
      obd: "Clean BMW Factory Telematics"
    },
    features: {
      safety: ["Active Driving Assistant", "Frontal Collision Warning with City Collision Mitigation", "Lane Departure Warning", "Active Blind Spot Detection"],
      tech: ["BMW Live Cockpit Professional w/ 10.25-inch Display", "Harman Kardon Surround Sound System", "Apple CarPlay & Android Auto Compatibility", "Connected Package Professional"],
      comfort: ["M-Sport Aerodynamic Body Kit", "Power Glass Moonroof", "Heated Vernasca Leather Sport Seats", "Variable Sport Steering & M Sport Suspension"]
    }
  },

  // ==========================================
  // 4. TRUCK / 4X4 (401 - 404)
  // ==========================================
  {
    id: 401,
    title: "2020 Ford F-150 XLT SuperCrew 4x4",
    make: "Ford",
    model: "F-150",
    year: 2020,
    trim: "XLT SuperCrew 3.5L EcoBoost",
    category: "truck",
    categoryLabel: "Trucks / 4×4",
    price: 35800,
    emi: 535,
    msrp: 46200,
    mileage: "41,200 mi",
    odometerNum: 41200,
    engine: "3.5L EcoBoost Twin-Turbo V6",
    transmission: "10-Speed Electronic Automatic w/ Tow/Haul Mode",
    drivetrain: "Electronic Shift-On-The-Fly 4WD with Locking Rear Differential",
    fuelType: "Gasoline",
    fuelEconomy: "17 MPG City / 23 MPG Hwy",
    horsepower: "375 HP @ 5,000 RPM",
    torque: "470 lb-ft @ 3,500 RPM",
    exteriorColor: "Agate Black Metallic",
    interiorColor: "Medium Earth Gray Cloth",
    seating: "5 - 6 Passengers",
    cargoVolume: "5.5 ft Bed (52.8 cu ft)",
    vin: "1FTFW1E84LFA19382",
    stock: "UM-5890",
    warranty: "12 Mos / 12,000 Mi Included",
    location: "Dallas North Marketplace",
    badges: [
      { text: "1-Owner", icon: "bi-person-check", type: "deal" },
      { text: "Towing Pkg", icon: "bi-truck", type: "certified" }
    ],
    images: {
      hero: "assets/images/categories/truck-1.jpg",
      interior: "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=600&q=80",
      rear: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=600&q=80",
      wheel: "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&w=600&q=80"
    },
    inspection: {
      date: "August 29, 2026",
      techId: "#3211",
      score: "Passed 200/200",
      engineScore: "EcoBoost Twin Turbos Tested at Peak Boost (16 PSI), Zero leaks",
      brakes: "Heavy-Duty Front Discs 85%, Rear 88%",
      tires: "Goodyear Wrangler Fortitude 7.5/32\" Tread",
      obd: "Passed Ford IDS Master Diagnostic"
    },
    features: {
      safety: ["Ford Co-Pilot360 2.0", "Pre-Collision Assist with AEB", "Pro Trailer Backup Assist", "Rear View Camera with Dynamic Hitch Assist"],
      tech: ["SYNC 3 with 8-inch Center Touchscreen", "FordPass Connect 4G LTE Wi-Fi Hotspot", "SiriusXM Satellite Radio", "110V/400W In-Cabin Power Outlet"],
      comfort: ["Max Trailer Tow Package (12,700 lbs Capacity)", "Integrated Trailer Brake Controller", "36 Gallon Extended-Range Fuel Tank", "Power Sliding Rear Window"]
    }
  },
  {
    id: 402,
    title: "2021 Chevrolet Silverado 1500 RST 4x4",
    make: "Chevrolet",
    model: "Silverado",
    year: 2021,
    trim: "RST Crew Cab 5.3L V8",
    category: "truck",
    categoryLabel: "Trucks / 4×4",
    price: 38500,
    emi: 575,
    msrp: 49100,
    mileage: "33,800 mi",
    odometerNum: 33800,
    engine: "5.3L EcoTec3 V8 with Dynamic Fuel Management",
    transmission: "8-Speed Automatic Transmission",
    drivetrain: "Autotrac 2-Speed Transfer Case 4WD",
    fuelType: "Gasoline",
    fuelEconomy: "16 MPG City / 21 MPG Hwy",
    horsepower: "355 HP @ 5,600 RPM",
    torque: "383 lb-ft @ 4,100 RPM",
    exteriorColor: "Satin Steel Metallic",
    interiorColor: "Gideon / Very Dark Atmosphere Leather",
    seating: "5 Passengers",
    cargoVolume: "5.8 ft Short Bed (62.9 cu ft)",
    vin: "1GCPYDEF2MZ819302",
    stock: "UM-7730",
    warranty: "12 Mos / 12,000 Mi Included",
    location: "Houston South Showroom",
    badges: [
      { text: "Certified", icon: "bi-shield-check", type: "certified" },
      { text: "Z71 Off-Road", icon: "bi-tree", type: "featured" }
    ],
    images: {
      hero: "assets/images/categories/truck-2.jpg",
      interior: "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=600&q=80",
      rear: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=600&q=80",
      wheel: "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&w=600&q=80"
    },
    inspection: {
      date: "September 02, 2026",
      techId: "#4419",
      score: "Passed 200/200",
      engineScore: "EcoTec3 V8 Compression 180 PSI Across All 8 Cylinders",
      brakes: "Duralife Brake Rotors 86% Life Left",
      tires: "Bridgestone Dueler A/T 7/32\" Tread",
      obd: "Zero Diagnostic Codes"
    },
    features: {
      safety: ["Z71 Off-Road Package with Rancho Shocks", "Hill Descent Control & Skid Plates", "Hitch Guidance with Hitch View", "StabiliTrak with Proactive Roll Avoidance"],
      tech: ["Chevrolet Infotainment 3 System with 8-inch HD Screen", "Wireless Apple CarPlay & Android Auto", "6-Speaker Audio System", "Keyless Open and Remote Vehicle Starter"],
      comfort: ["Dual-Zone Automatic Climate Control", "Heated Front Bucket Seats & Heated Steering Wheel", "EZ Lift Power Lock and Release Tailgate", "20-inch Painted Aluminum Wheels"]
    }
  },
  {
    id: 403,
    title: "2022 Toyota Tacoma TRD Off-Road 4x4",
    make: "Toyota",
    model: "Tacoma",
    year: 2022,
    trim: "TRD Off-Road Double Cab",
    category: "truck",
    categoryLabel: "Trucks / 4×4",
    price: 37200,
    emi: 555,
    msrp: 41800,
    mileage: "24,600 mi",
    odometerNum: 24600,
    engine: "3.5L V6 DOHC 24V Direct-Injection Atkinson Cycle",
    transmission: "6-Speed Electronically Controlled Automatic (ECT-i)",
    drivetrain: "4WDemand Part-Time 4WD with Electronically Controlled Locking Rear Differential",
    fuelType: "Gasoline",
    fuelEconomy: "18 MPG City / 22 MPG Hwy",
    horsepower: "278 HP @ 6,000 RPM",
    torque: "265 lb-ft @ 4,600 RPM",
    exteriorColor: "Army Green",
    interiorColor: "Cement / Black Fabric Interior",
    seating: "5 Passengers",
    cargoVolume: "5.0 ft Bed w/ Deck Rail System",
    vin: "3TMCZ5AN6NM183920",
    stock: "UM-8120",
    warranty: "24 Mos / 24,000 Mi Included",
    location: "Denver Mountain Hub",
    badges: [
      { text: "1-Owner", icon: "bi-person-check", type: "deal" },
      { text: "High Resale", icon: "bi-gem", type: "deal" }
    ],
    images: {
      hero: "assets/images/categories/truck-3.jpg",
      interior: "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=600&q=80",
      rear: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=600&q=80",
      wheel: "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&w=600&q=80"
    },
    inspection: {
      date: "September 06, 2026",
      techId: "#3902",
      score: "Passed 200/200",
      engineScore: "Atkinson Cycle V6 and ECT-i Transmission Flawless",
      brakes: "Front Discs 90%, Rear Drums Inspected Clean",
      tires: "Goodyear Wrangler Territory AT 8/32\" Tread",
      obd: "Toyota Factory Techstream Scan: Passed"
    },
    features: {
      safety: ["Multi-Terrain Select (MTS) & Crawl Control (CRAWL)", "Toyota Safety Sense P (TSS-P)", "Electronically Controlled Locking Rear Diff", "Bilstein Shocks Standard"],
      tech: ["8-inch Audio Multimedia Touchscreen", "Apple CarPlay & Android Auto", "Qi-Compatible Wireless Smartphone Charging", "Multi-Terrain Monitor with Front/Side Cameras"],
      comfort: ["16-inch Machined Contrast Alloy Wheels", "120V/400W Bed-Mounted AC Power Outlet", "Power Sliding Rear Window with Privacy Glass", "Class-IV Towing Hitch Receiver"]
    }
  },
  {
    id: 404,
    title: "2021 RAM 1500 Big Horn Quad Cab 4x4",
    make: "RAM",
    model: "1500",
    year: 2021,
    trim: "Big Horn 5.7L HEMI V8 eTorque",
    category: "truck",
    categoryLabel: "Trucks / 4×4",
    price: 33900,
    emi: 505,
    msrp: 44200,
    mileage: "39,100 mi",
    odometerNum: 39100,
    engine: "5.7L V8 HEMI MDS VVT eTorque Engine",
    transmission: "8-Speed Automatic 8HP75 Transmission",
    drivetrain: "Shift-on-the-Demand 4WD System",
    fuelType: "Gasoline / Mild Hybrid",
    fuelEconomy: "17 MPG City / 22 MPG Hwy",
    horsepower: "395 HP @ 5,600 RPM",
    torque: "410 lb-ft @ 3,950 RPM (+130 lb-ft eTorque)",
    exteriorColor: "Delmonico Red Pearlcoat",
    interiorColor: "Diesel Gray / Black Deluxe Cloth",
    seating: "6 Passengers",
    cargoVolume: "6.4 ft Standard Bed (61.5 cu ft)",
    vin: "1C6RR7FT8MS619482",
    stock: "UM-6490",
    warranty: "12 Mos / 12,000 Mi Included",
    location: "Phoenix Central Showroom",
    badges: [
      { text: "Great Deal", icon: "", type: "deal" },
      { text: "HEMI 5.7L", icon: "bi-lightning-fill", type: "featured" }
    ],
    images: {
      hero: "assets/images/categories/truck-4.jpg",
      interior: "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=600&q=80",
      rear: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=600&q=80",
      wheel: "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&w=600&q=80"
    },
    inspection: {
      date: "September 03, 2026",
      techId: "#4108",
      score: "Passed 200/200",
      engineScore: "HEMI V8 MDS and 48V eTorque system bench tested 100%",
      brakes: "Heavy Duty Rotors 84% Life Left",
      tires: "Bridgestone Dueler H/L 7/32\" Tread",
      obd: "Passed Stellantis WiTECH 2 Diagnostic"
    },
    features: {
      safety: ["Electronic Roll Mitigation & Hill Start Assist", "Trailer Sway Damping", "ParkView Rear Back-Up Camera", "Tire Pressure Monitoring Display"],
      tech: ["Uconnect 4 with 8.4-inch Touchscreen Display", "Apple CarPlay & Android Auto", "6-Speaker Audio with Active Noise Cancellation", "Steering Wheel Mounted Audio Controls"],
      comfort: ["Class-Exclusive Coil-Spring Rear Suspension", "Class IV Receiver Hitch (11,610 lbs Tow Rating)", "20-inch Chrome Clad Aluminum Wheels", "Remote Keyless Entry with All-Secure"]
    }
  },

  // ==========================================
  // 5. ELECTRIC & HYBRID (501 - 504)
  // ==========================================
  {
    id: 501,
    title: "2022 Tesla Model 3 Long Range AWD",
    make: "Tesla",
    model: "Model 3",
    year: 2022,
    trim: "Long Range Dual Motor AWD",
    category: "electric",
    categoryLabel: "Electric & Hybrid",
    price: 31900,
    emi: 475,
    msrp: 51990,
    mileage: "23,400 mi",
    odometerNum: 23400,
    engine: "Dual AC Permanent Magnet Electric Motors",
    transmission: "1-Speed Direct Drive Transmission",
    drivetrain: "Dual Motor All-Wheel Drive (AWD)",
    fuelType: "Pure Electric (EV)",
    fuelEconomy: "134 MPGe City / 126 MPGe Hwy (358 Miles Range)",
    horsepower: "346 HP Equivalent",
    torque: "389 lb-ft Instant Electric Torque (0-60 in 4.2s)",
    exteriorColor: "Pearl White Multi-Coat",
    interiorColor: "All Black Premium Interior w/ Wood Trim",
    seating: "5 Passengers",
    cargoVolume: "19.8 cu ft Front & Rear Trunks (Frunk + Trunk)",
    vin: "5YJ3E1EB8NF192019",
    stock: "UM-9912",
    warranty: "24 Mos / 24,000 Mi Included + Tesla Battery Warranty to 2030",
    location: "Los Angeles Central Showroom",
    badges: [
      { text: "Certified", icon: "bi-shield-check", type: "certified" },
      { text: "358 Mi Range", icon: "bi-lightning-fill", type: "featured" }
    ],
    images: {
      hero: "assets/images/categories/ev-1.jpg",
      interior: "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=600&q=80",
      rear: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=600&q=80",
      wheel: "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&w=600&q=80"
    },
    inspection: {
      date: "September 07, 2026",
      techId: "#6101",
      score: "Passed 200/200",
      engineScore: "Battery Health: 97.4% Original Capacity, High-Voltage Isolation: Passed",
      brakes: "Regenerative Brakes 95% Pad Life (10.5mm)",
      tires: "Michelin Pilot Sport All Season 7.5/32\" Tread",
      obd: "Passed Tesla Factory Toolbox 3 Diagnostics"
    },
    features: {
      safety: ["Autopilot Suite (Traffic-Aware Cruise & Autosteer)", "360-Degree Surround Cameras w/ Sentry Mode", "Automatic Emergency Braking & Blind Spot Monitoring", "Cabin Overheat Protection"],
      tech: ["15-inch Center Cinematic Touchscreen", "Immersive 14-Speaker Premium Sound with Subwoofer", "Over-The-Air (OTA) Software Updates", "Wireless Qi Phone Charging for 2 Devices"],
      comfort: ["All-Glass Panoramic Roof with UV Protection", "Heated Front and Rear Seats + Heated Steering", "Power Trunk Liftgate", "18-inch Aero Wheels with Removable Covers"]
    }
  },
  {
    id: 502,
    title: "2021 Toyota Prius Prime Limited",
    make: "Toyota",
    model: "Prius Prime",
    year: 2021,
    trim: "Limited Plug-in Hybrid",
    category: "electric",
    categoryLabel: "Electric & Hybrid",
    price: 24500,
    emi: 365,
    msrp: 34000,
    mileage: "36,700 mi",
    odometerNum: 36700,
    engine: "1.8L 4-Cylinder DOHC 16V with Hybrid Synergy Drive",
    transmission: "Electronically Controlled Continuously Variable (ECVT)",
    drivetrain: "Front-Wheel Drive (FWD)",
    fuelType: "Plug-in Hybrid (PHEV)",
    fuelEconomy: "133 MPGe / 54 MPG Combined (640 Miles Total Range)",
    horsepower: "121 HP Hybrid Total Output",
    torque: "105 lb-ft Gas Engine + Electric Motor",
    exteriorColor: "Supersonic Red",
    interiorColor: "Moonstone SofTex Leather",
    seating: "5 Passengers",
    cargoVolume: "19.8 cu ft Hatchback Cargo",
    vin: "JTDKARFP1M3109382",
    stock: "UM-5091",
    warranty: "12 Mos / 12,000 Mi Included + Hybrid Battery Warranty to 2031",
    location: "San Francisco Luxury Center",
    badges: [
      { text: "1-Owner", icon: "bi-person-check", type: "deal" },
      { text: "54 MPG Hybrid", icon: "bi-fuel-pump", type: "deal" }
    ],
    images: {
      hero: "assets/images/categories/ev-2.jpg",
      interior: "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=600&q=80",
      rear: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=600&q=80",
      wheel: "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&w=600&q=80"
    },
    inspection: {
      date: "August 31, 2026",
      techId: "#3801",
      score: "Passed 200/200",
      engineScore: "Lithium-ion Traction Battery 98.1% Capacity, Inverter Flawless",
      brakes: "Regenerative Front/Rear Discs 90%",
      tires: "Bridgestone Ecopia 7/32\" Tread",
      obd: "Passed Toyota Techstream Hybrid Test"
    },
    features: {
      safety: ["Toyota Safety Sense 2.0 (TSS 2.0)", "Blind Spot Monitor with Rear Cross-Traffic Alert", "Intelligent Clearance Sonar with Intelligent Parking Assist", "Safety Connect Emergency Assistance"],
      tech: ["11.6-inch Multimedia HD Display Screen", "JBL 10-Speaker Premium Audio with Subwoofer", "Color Head-Up Display (HUD)", "Apple CarPlay & Amazon Alexa Compatible"],
      comfort: ["SofTex-Trimmed Heated Front Seats & Steering", "Integrated Backup Camera", "Smart Key System with Push Button Start", "Quad-LED Projector Headlights"]
    }
  },
  {
    id: 503,
    title: "2023 Hyundai Ioniq 5 SEL AWD",
    make: "Hyundai",
    model: "Ioniq 5",
    year: 2023,
    trim: "SEL Dual Motor AWD",
    category: "electric",
    categoryLabel: "Electric & Hybrid",
    price: 37900,
    emi: 565,
    msrp: 50950,
    mileage: "15,200 mi",
    odometerNum: 15200,
    engine: "Dual Electric Motors (77.4 kWh Lithium-Ion Battery)",
    transmission: "Single-Speed Reduction Gear Transmission",
    drivetrain: "HTRAC All-Wheel Drive (AWD)",
    fuelType: "Pure Electric (800V Ultra-Fast Charging)",
    fuelEconomy: "110 MPGe City / 87 MPGe Hwy (266 Miles Range)",
    horsepower: "320 HP Dual Electric Output",
    torque: "446 lb-ft Instant Electric Torque (0-60 in 4.5s)",
    exteriorColor: "Cyber Gray Metallic",
    interiorColor: "Gray / Dark Teal H-Tex Leatherette",
    seating: "5 Passengers",
    cargoVolume: "27.2 - 59.3 cu ft",
    vin: "KM8KRDAE6PU190281",
    stock: "UM-9840",
    warranty: "24 Mos / 24,000 Mi Included + 10-Yr/100,000 Mi EV Battery",
    location: "Seattle Center Auto Hub",
    badges: [
      { text: "Certified", icon: "bi-shield-check", type: "certified" },
      { text: "Ultra-Fast 800V", icon: "bi-lightning-charge", type: "featured" }
    ],
    images: {
      hero: "assets/images/categories/ev-3.jpg",
      interior: "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=600&q=80",
      rear: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=600&q=80",
      wheel: "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&w=600&q=80"
    },
    inspection: {
      date: "September 08, 2026",
      techId: "#4509",
      score: "Passed 200/200",
      engineScore: "Battery State of Health 99.2%, 800V Ultra-Fast Charging Tested 10-80% in 18 mins",
      brakes: "i-Pedal One-Pedal Regenerative Braking 95%",
      tires: "Michelin Primacy A/S EV-Spec 8/32\" Tread",
      obd: "Passed Hyundai Global Diagnostic System EV"
    },
    features: {
      safety: ["Highway Driving Assist 2 (HDA 2) with Lane Change Assist", "Forward Collision-Avoidance with Junction Turning", "Blind-Spot Collision-Avoidance Assist", "Rear Cross-Traffic Collision-Avoidance Assist"],
      tech: ["Dual 12.3-inch Digital Displays (Instrument & Navigation)", "Vehicle-to-Load (V2L) 120V Two-Way Power Capability", "Wireless Phone Charging & Digital Key", "Hyundai Bluelink Connected Car System"],
      comfort: ["Heated Front Seats and Heated Leather Steering Wheel", "Hands-Free Smart Power Tailgate with Auto Open", "19-inch Aero Alloy Wheels", "Pixel LED Headlights and Taillights"]
    }
  },
  {
    id: 504,
    title: "2022 Nissan Leaf SV Plus",
    make: "Nissan",
    model: "Leaf",
    year: 2022,
    trim: "SV Plus 62 kWh",
    category: "electric",
    categoryLabel: "Electric & Hybrid",
    price: 19800,
    emi: 295,
    msrp: 35400,
    mileage: "22,800 mi",
    odometerNum: 22800,
    engine: "160 kW AC Synchronous Electric Motor (62 kWh Battery)",
    transmission: "Single-Speed Direct Drive",
    drivetrain: "Front-Wheel Drive (FWD)",
    fuelType: "Pure Electric (EV)",
    fuelEconomy: "114 MPGe City / 94 MPGe Hwy (212 Miles Range)",
    horsepower: "214 HP Electric Motor",
    torque: "250 lb-ft Instant Torque",
    exteriorColor: "Gun Metallic / Super Black Two-Tone",
    interiorColor: "Black Bio Suede Fabric",
    seating: "5 Passengers",
    cargoVolume: "23.6 - 30.0 cu ft Hatchback",
    vin: "1N4AZ1CP6NC591029",
    stock: "UM-4491",
    warranty: "12 Mos / 12,000 Mi Included + 8-Yr Battery Warranty",
    location: "Miami Marketplace",
    badges: [
      { text: "Great Value", icon: "", type: "deal" },
      { text: "ProPILOT", icon: "bi-shield-check", type: "certified" }
    ],
    images: {
      hero: "assets/images/categories/ev-4.jpg",
      interior: "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=600&q=80",
      rear: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=600&q=80",
      wheel: "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&w=600&q=80"
    },
    inspection: {
      date: "September 05, 2026",
      techId: "#3812",
      score: "Passed 200/200",
      engineScore: "62 kWh Battery Capacity Bar: 12/12 Full, Zero Cell Degradation",
      brakes: "e-Pedal Regenerative Braking System 92%",
      tires: "Michelin Energy Saver 7.5/32\" Tread",
      obd: "Passed Nissan Consult-III Plus Diagnostic"
    },
    features: {
      safety: ["ProPILOT Assist (Hands-On Steering & Adaptive Cruise)", "Nissan Safety Shield 360", "Automatic Emergency Braking with Pedestrian Detection", "Intelligent Around View Monitor (360 Camera)"],
      tech: ["NissanConnect 8-inch Touchscreen with Navigation", "Apple CarPlay & Android Auto", "Nissan Door to Door Navigation with Premium Traffic", "6-Speaker Audio System"],
      comfort: ["e-Pedal Drive Mode (One-Pedal Accelerate and Stop)", "Heated Front Seats and Heated Steering Wheel", "Hybrid Heating System (Heat Pump)", "17-inch Machined Aluminum-Alloy Wheels"]
    }
  }
];

// Helper to look up car by ID
window.getCarById = function(id) {
  const numId = parseInt(id, 10);
  return window.AUTOMARKET_CARS.find(c => c.id === numId) || window.AUTOMARKET_CARS[0];
};

// Helper to get similar vehicles (same category or closest price)
window.getSimilarCars = function(currentCarId, limit = 3) {
  const currentCar = window.getCarById(currentCarId);
  const sameCategory = window.AUTOMARKET_CARS.filter(c => c.id !== currentCar.id && c.category === currentCar.category);
  if (sameCategory.length >= limit) return sameCategory.slice(0, limit);
  const others = window.AUTOMARKET_CARS.filter(c => c.id !== currentCar.id && c.category !== currentCar.category);
  return [...sameCategory, ...others].slice(0, limit);
};
