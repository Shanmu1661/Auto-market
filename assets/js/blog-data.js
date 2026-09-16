/**
 * AutoMarket - Comprehensive Blog & Guides Database (blog-data.js)
 * Full content, expert mechanic commentary, checklists, and metadata for all 6 guides.
 */

window.AUTOMARKET_BLOG_POSTS = [
  // ==========================================
  // Article 1: Pre-Purchase Inspection
  // ==========================================
  {
    id: 1,
    slug: "10-critical-things-mechanics-check-in-pre-purchase-inspection",
    title: "10 Critical Things Mechanics Check in a Pre-Purchase Inspection",
    category: "inspection",
    categoryLabel: "Inspection Guides",
    badgeClass: "badge-certified",
    date: "August 24, 2026",
    isoDate: "2026-08-24",
    readTime: "6 min read",
    heroImage: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=1000&q=80",
    summary: "Learn how paint depth meters reveal hidden bodywork and what OBD-II diagnostic freeze-frame data reveals about past engine overheating.",
    author: {
      name: "Marcus Vance",
      role: "Founder & Master Mechanic Auditor",
      avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=150&q=80",
      bio: "Founder & CEO at AutoMarket. Marcus is an ASE-certified Master Automotive Technician with 18+ years of forensic vehicle inspection experience."
    },
    lead: "A shiny exterior paint job and freshly detailed interior can easily conceal thousands of dollars in hidden mechanical wear or previous frame collision damage. When purchasing any used vehicle, a comprehensive 200-point Pre-Purchase Inspection (PPI) is your strongest safeguard against costly buyer regret.",
    contentHtml: `
      <h2 class="h3 fw-bold mt-4 mb-3 text-main">1. Ultrasonic Paint Depth Metering for Hidden Collision Repairs</h2>
      <p>
        Factory automotive paint on modern cars typically measures between <strong>4.0 and 5.5 mils (100–140 microns)</strong> with absolute consistency across adjacent body panels. When an ASE inspector waves an ultrasonic digital paint depth gauge over fenders and quarter panels, a reading of 8.0+ mils indicates clear aftermarket repainting. Readings exceeding 14.0 mils reveal thick body filler (bondo) underneath, often pointing to an undisclosed collision that was omitted from standard title history reports.
      </p>

      <div class="p-4 rounded-3 border-start border-4 border-primary my-4 bg-light">
        <h5 class="fw-bold text-primary mb-2"><i class="bi bi-lightbulb me-2"></i> Mechanic's Insider Tip</h5>
        <p class="mb-0 small text-muted">
          Always check the original manufacturer VIN tamper stickers on the inner edges of both front fenders, inside the hood lip, and along the B-pillar door jambs. If a fender is missing its laser-etched VIN decal, that structural panel has been replaced.
        </p>
      </div>

      <h2 class="h3 fw-bold mt-4 mb-3 text-main">2. Freeze-Frame ECU Computer Diagnostic Data & Readiness Monitors</h2>
      <p>
        Dishonest private sellers often disconnect the 12V battery or use cheap pocket scan tools to clear "Check Engine" trouble codes right before a prospective buyer arrives. However, a master-grade bi-directional diagnostic tablet scans deep into historical ECU memory registers:
      </p>
      <ul>
        <li><strong>OBD-II Readiness Monitors:</strong> Confirms whether the emissions, catalytic converter, and evaporative purge systems have completed their mandatory driving cycles. If monitors show "Not Ready," the trouble codes were cleared recently.</li>
        <li><strong>Freeze Frame Parameters:</strong> Captures engine RPM, coolant temperature, fuel trims, and ignition timing the exact millisecond a fault occurred.</li>
        <li><strong>Transmission Slip Counters:</strong> Measures internal hydraulic clutch pack engagement times in modern automatic and dual-clutch gearboxes.</li>
      </ul>

      <h2 class="h3 fw-bold mt-4 mb-3 text-main">3. Suspension Geometry & Subframe Corrosion</h2>
      <p>
        Vehicles imported from northern salt-belt regions or coastal humid climates can look flawless on the surface while their subframe mounts, control arm bushings, brake hardlines, and steering rack seals are severely oxidized. Our technicians elevate every car on a hydraulic lift to test ball-joint lateral play, sway-bar link integrity, and strut dampening.
      </p>

      <blockquote class="p-4 rounded-3 bg-body-tertiary border-start border-4 border-warning my-4 fst-italic">
        "Over 35% of the pre-owned vehicles our technicians inspect possess at least one significant safety or mechanical defect that was completely undisclosed by the seller. The inspection report always pays for itself."
        <footer class="text-muted mt-2 fw-bold not-italic small">— Elena Rostova, Master Inspection Auditor</footer>
      </blockquote>

      <h2 class="h3 fw-bold mt-4 mb-3 text-main">4. Fluid Health & Chemical Spectrometry</h2>
      <p>
        Engine oil, transmission fluid, and coolant tell the life story of how a vehicle was maintained. Technicians look for milky oil (indicating a blown cylinder head gasket), burnt transmission fluid smelling of clutch friction material, and test brake fluid for moisture content exceeding 3%.
      </p>
    `,
    tags: ["Pre-Purchase Inspection", "Car Buying Tips", "OBD Scanner", "Collision Repair", "Vehicle Safety"],
    comments: [
      {
        name: "Lisa Chen",
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=80&q=80",
        date: "3 days ago",
        text: "The paint depth meter point is so true! I almost bought a Honda Accord that claimed 'zero accidents' on Carfax, but the mechanic found the entire rear quarter panel had 18 mils of bondo."
      },
      {
        name: "Jason Miller",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=80&q=80",
        date: "1 week ago",
        text: "Great breakdown of the OBD-II readiness monitors. I didn't know cheap scanners could temporarily hide catalytic converter codes until reading this."
      }
    ],
    relatedIds: [2, 4, 5]
  },

  // ==========================================
  // Article 2: EV Battery Health
  // ==========================================
  {
    id: 2,
    slug: "buying-used-electric-car-battery-health-guide",
    title: "Buying a Used Electric Car in 2026: Battery Health Guide",
    category: "ev",
    categoryLabel: "EV & Hybrid",
    badgeClass: "badge-featured",
    date: "August 18, 2026",
    isoDate: "2026-08-18",
    readTime: "8 min read",
    heroImage: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?auto=format&fit=crop&w=1000&q=80",
    summary: "How to test battery state of health (SoH), verify remaining factory battery warranty, and calculate real-world degradation before making an offer.",
    author: {
      name: "Derrick Thorne",
      role: "High-Voltage EV Specialist",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80",
      bio: "Derrick is an EV powertrain engineer and master technician certified in high-voltage lithium-ion traction systems."
    },
    lead: "Unlike internal combustion vehicles where engine compression and oil condition dictate lifespan, an electric vehicle's value is overwhelmingly determined by its high-voltage traction battery. Here is how to forensic test EV battery health before you buy.",
    contentHtml: `
      <h2 class="h3 fw-bold mt-4 mb-3 text-main">1. Understanding State of Health (SoH) vs. Dashboard Range Estimates</h2>
      <p>
        The dashboard range meter (often called the 'Guess-O-Meter') only reflects recent driving style, ambient temperature, and climate control usage. It is <em>not</em> an accurate measurement of your battery's physical capacity.
      </p>
      <p>
        To get true battery degradation figures, technicians connect an OBD-II dongle and use diagnostic software (like ScanMyTesla or LeafSpy) to poll the Battery Management System (BMS) for the nominal full pack capacity (kWh) and calculate true <strong>State of Health (SoH) percentage</strong> against the factory original rating.
      </p>

      <div class="p-4 rounded-3 border-start border-4 border-success my-4 bg-light">
        <h5 class="fw-bold text-success mb-2"><i class="bi bi-battery-charging me-2"></i> Normal Battery Degradation Rule of Thumb</h5>
        <p class="mb-0 small text-muted">
          Modern liquid-cooled EV batteries typically degrade at a rate of <strong>1.5% to 2.2% per year</strong>. A 4-year-old EV with 40,000 miles should comfortably display an SoH of 91% to 94%. Any pack below 80% should be heavily negotiated or avoided.
        </p>
      </div>

      <h2 class="h3 fw-bold mt-4 mb-3 text-main">2. Federal 8-Year / 100,000-Mile Battery Warranty Rules</h2>
      <p>
        In the United States, federal law mandates that automakers provide a minimum <strong>8-year or 100,000-mile warranty</strong> on all high-voltage EV battery packs. In California and CARB-compliant states, this extends to 10 years or 150,000 miles for transitional zero-emission vehicles.
      </p>
      <p>
        Most warranties guarantee that the battery will retain at least <strong>70% capacity</strong> throughout the warranty period. If a pre-owned EV drops to 69% capacity within that window, you are entitled to a warranty battery replacement.
      </p>

      <h2 class="h3 fw-bold mt-4 mb-3 text-main">3. Fast DC Charging Cycles vs. Gentle AC Level 2</h2>
      <p>
        Excessive Level 3 DC Fast Charging (Supercharging at 150kW–350kW) generates immense thermal stress and accelerated lithium dendrite growth within cells. Always verify the vehicle's historical DC vs. AC charge ratio in the onboard diagnostics.
      </p>
    `,
    tags: ["Electric Vehicles", "EV Battery", "Tesla", "Clean Energy", "Battery Health"],
    comments: [
      {
        name: "Samantha Wu",
        avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=80&q=80",
        date: "2 days ago",
        text: "This guide saved me from buying a 2021 Model 3 that had been used exclusively as an Uber with 90% Supercharging and 19% degradation!"
      }
    ],
    relatedIds: [1, 3, 4]
  },

  // ==========================================
  // Article 3: Auto Financing & APR
  // ==========================================
  {
    id: 3,
    slug: "secure-low-apr-auto-loan-rates-buying-used",
    title: "How to Secure Low APR Auto Loan Rates When Buying Used",
    category: "financing",
    categoryLabel: "Financing Tips",
    badgeClass: "badge-certified",
    date: "August 10, 2026",
    isoDate: "2026-08-10",
    readTime: "5 min read",
    heroImage: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1000&q=80",
    summary: "Master the difference between direct credit union pre-approvals, dealership lending markups, and how loan terms impact total interest.",
    author: {
      name: "Rachel Goldman",
      role: "Automotive Finance Director",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&q=80",
      bio: "Rachel has 14+ years in retail auto lending and consumer credit education, helping car shoppers save millions in interest."
    },
    lead: "A difference of just 3% on an auto loan interest rate can mean over $2,400 in extra interest over a 60-month term. Here is your playbook for locking in top-tier interest rates before stepping onto a dealer lot.",
    contentHtml: `
      <h2 class="h3 fw-bold mt-4 mb-3 text-main">1. Credit Union Pre-Approval: Your Secret Weapon</h2>
      <p>
        Credit unions are non-profit financial cooperatives that typically offer auto loan interest rates <strong>1.5% to 3.0% lower</strong> than traditional big banks and captive dealer finance arms.
      </p>
      <p>
        Before you begin test driving cars, secure a formal written pre-approval letter from a local or nationwide credit union (such as Navy Federal, PenFed, or DCU). This establishes your financing baseline and prevents dealerships from adding finance markup percentages.
      </p>

      <div class="p-4 rounded-3 border-start border-4 border-info my-4 bg-light">
        <h5 class="fw-bold text-info mb-2"><i class="bi bi-calculator me-2"></i> The 20/4/10 Rule for Smart Car Financing</h5>
        <p class="mb-0 small text-muted">
          Put down at least <strong>20%</strong> in cash or trade-in equity, finance for no longer than <strong>48 months (4 years)</strong>, and ensure total vehicle expenses (payment + insurance + fuel) stay below <strong>10%</strong> of your gross monthly income.
        </p>
      </div>

      <h2 class="h3 fw-bold mt-4 mb-3 text-main">2. Beware of Extended 72 and 84-Month Loan Terms</h2>
      <p>
        Dealerships often push 72-month or 84-month loan terms to make the monthly payment appear small and affordable. However, long loan terms cause you to be "underwater" (owing more on the loan than the car is worth) for 3 to 4 years, leaving you exposed if the vehicle is totaled.
      </p>
    `,
    tags: ["Auto Loans", "Financing", "Credit Score", "Interest Rates", "Smart Buying"],
    comments: [
      {
        name: "David Kim",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=80&q=80",
        date: "4 days ago",
        text: "Secured 4.9% APR through my local credit union instead of the dealer's 8.4% offer. Saved over $2,100 on my RAV4 purchase!"
      }
    ],
    relatedIds: [1, 4, 6]
  },

  // ==========================================
  // Article 4: Reliable Cars Under $25k
  // ==========================================
  {
    id: 4,
    slug: "top-5-most-reliable-used-cars-under-25000",
    title: "Top 5 Most Reliable Used Cars Under $25,000 in Today's Market",
    category: "guide",
    categoryLabel: "Buying Guides",
    badgeClass: "badge-certified",
    date: "July 29, 2026",
    isoDate: "2026-07-29",
    readTime: "7 min read",
    heroImage: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1000&q=80",
    summary: "Our ranking of reliable pre-owned sedans and crossovers with proven longevity, low ownership costs, and high resale retention.",
    author: {
      name: "Marcus Vance",
      role: "Founder & Master Mechanic Auditor",
      avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=150&q=80",
      bio: "Founder & CEO at AutoMarket. Marcus is an ASE-certified Master Automotive Technician with 18+ years of forensic vehicle inspection experience."
    },
    lead: "Finding a reliable, low-maintenance daily driver under $25,000 requires looking past badge prestige and focusing on bulletproof engine architectures, proven transmissions, and affordable replacement parts. Here are our top 5 picks.",
    contentHtml: `
      <h2 class="h3 fw-bold mt-4 mb-3 text-main">1. 2019–2022 Toyota Camry (2.5L Dynamic Force I4)</h2>
      <p>
        The 8th-generation Toyota Camry pairs a naturally aspirated 2.5L 4-cylinder engine with a proven 8-speed torque-converter automatic transmission. With no troublesome CVTs or high-stress turbos, this powertrain regularly surpasses 250,000 miles with basic fluid and filter changes.
      </p>

      <h2 class="h3 fw-bold mt-4 mb-3 text-main">2. 2020–2023 Mazda CX-5 (2.5L SkyActiv-G)</h2>
      <p>
        Mazda's CX-5 delivers near-luxury interior refinement combined with classic mechanical simplicity. Unlike rivals using continuously variable transmissions (CVTs), Mazda utilizes a smooth 6-speed planetary gearbox paired with an ultra-reliable SkyActiv naturally aspirated engine.
      </p>

      <h2 class="h3 fw-bold mt-4 mb-3 text-main">3. 2018–2021 Honda Civic (2.0L Naturally Aspirated)</h2>
      <p>
        While the 1.5L Turbo model is fun, the base 2.0L K20C2 engine in the Civic LX and Sport trims is virtually indestructible. Timing chain longevity and port fuel injection eliminate common direct-injection carbon buildup issues.
      </p>

      <h2 class="h3 fw-bold mt-4 mb-3 text-main">4. 2019–2022 Toyota RAV4 (Non-Hybrid & Hybrid)</h2>
      <p>
        Consistently the best-selling non-pickup vehicle in America, the RAV4 offers spacious cargo room, standard Toyota Safety Sense, and rock-solid resale value across all 50 states.
      </p>

      <h2 class="h3 fw-bold mt-4 mb-3 text-main">5. 2020–2023 Hyundai Elantra / Sonata (Smartstream G2.0)</h2>
      <p>
        Modern Hyundai models featuring the redesigned Smartstream engine family have overcome earlier Theta-II engine concerns, offering generous standard tech features and comfortable highway cruising under $20,000.
      </p>
    `,
    tags: ["Best Used Cars", "Toyota Camry", "Mazda CX-5", "Reliability", "Budget Cars"],
    comments: [
      {
        name: "Michael Torres",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=80&q=80",
        date: "1 week ago",
        text: "Own a 2020 Mazda CX-5 Grand Touring with 68,000 miles. Only ever had to replace brake pads and oil. Outstanding vehicle!"
      }
    ],
    relatedIds: [1, 2, 5]
  },

  // ==========================================
  // Article 5: Used Truck Checklist
  // ==========================================
  {
    id: 5,
    slug: "used-truck-buying-checklist-frame-rust-towing",
    title: "Used Truck Buying Checklist: Frame Rust, Transmissions & Tow Ratings",
    category: "maintenance",
    categoryLabel: "Maintenance",
    badgeClass: "badge-certified",
    date: "July 20, 2026",
    isoDate: "2026-07-20",
    readTime: "6 min read",
    heroImage: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&w=1000&q=80",
    summary: "Everything you need to inspect when buying a pre-owned 4x4 pickup, from differential fluid condition to cab mount integrity.",
    author: {
      name: "Tyler Sterling",
      role: "Heavy Duty Fleet Specialist",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80",
      bio: "Tyler has managed commercial truck fleets and performed 4x4 powertrain rebuilds across North America for over 15 years."
    },
    lead: "Pickup trucks endure significantly harsher operational abuse than passenger cars—including heavy payload hauling, off-road articulation, and boat ramp water submersion. Here is your mandatory inspection checklist.",
    contentHtml: `
      <h2 class="h3 fw-bold mt-4 mb-3 text-main">1. Boxing and Flaking Boxed Frame Rails</h2>
      <p>
        Always bring a mechanic's hammer and tap along the inner boxed frame rails, particularly around the rear leaf spring hangers and fuel tank strap brackets. Superficial surface rust is normal; flaking structural scale that sheds layers or flexes under hammer strikes means severe frame compromise.
      </p>

      <h2 class="h3 fw-bold mt-4 mb-3 text-main">2. 4WD Transfer Case Actuation & Electronic Locking Differentials</h2>
      <p>
        Find a loose gravel or dirt surface during the test drive. Engage 4-High (4H) and 4-Low (4L) modes. Listen for smooth electric motor actuator engagement without grinding noises, and verify that the front differential lock light illuminates steadily.
      </p>

      <div class="p-4 rounded-3 border-start border-4 border-warning my-4 bg-light">
        <h5 class="fw-bold text-warning mb-2"><i class="bi bi-truck me-2"></i> Rear Differential & Pinion Seal Check</h5>
        <p class="mb-0 small text-muted">
          Look at the nose of the rear differential where the driveshaft connects. Wet oil accumulation indicates a leaking pinion seal, which can starve the ring-and-pinion gears of lubrication under heavy highway towing.
        </p>
      </div>

      <h2 class="h3 fw-bold mt-4 mb-3 text-main">3. Transmission Temperature Under Load</h2>
      <p>
        Monitor transmission fluid temperatures on the digital dashboard cluster. Under normal driving, temperatures should stabilize between 180°F and 205°F. Readings creeping toward 230°F point to a failing auxiliary transmission cooler or slipping torque converter clutch.
      </p>
    `,
    tags: ["Trucks", "4x4 Off-Road", "Ford F-150", "Towing", "Maintenance"],
    comments: [
      {
        name: "Hank Reynolds",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=80&q=80",
        date: "2 weeks ago",
        text: "Checking the rear leaf spring hangers saved me from buying a rusted Silverado from up north. Solid checklist."
      }
    ],
    relatedIds: [1, 3, 4]
  },

  // ==========================================
  // Article 6: European Extended Warranties
  // ==========================================
  {
    id: 6,
    slug: "are-extended-warranties-worth-it-for-used-european-cars",
    title: "Are Extended Warranties Worth It for Used European Luxury Cars?",
    category: "guide",
    categoryLabel: "Buying Guides",
    badgeClass: "badge-featured",
    date: "July 12, 2026",
    isoDate: "2026-07-12",
    readTime: "9 min read",
    heroImage: "https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=1000&q=80",
    summary: "A cost-benefit breakdown of aftermarket and certified warranty coverage on BMW, Mercedes-Benz, Audi, and Porsche vehicles.",
    author: {
      name: "Rachel Goldman",
      role: "Automotive Finance Director",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&q=80",
      bio: "Rachel has 14+ years in retail auto lending and consumer credit education, helping car shoppers save millions in interest."
    },
    lead: "A 4-year-old BMW 5-Series or Audi A6 can be purchased for less than the price of a brand-new Honda Civic. However, complex air suspension struts, twin-turbo oil lines, and German mechatronics repair bills can quickly shock unprepared owners.",
    contentHtml: `
      <h2 class="h3 fw-bold mt-4 mb-3 text-main">1. The High Cost of European Specialty Diagnostics and Labor</h2>
      <p>
        Specialty European independent repair shops and franchised dealerships typically bill labor rates between <strong>$180 and $275 per hour</strong>. Combined with proprietary diagnostic tools and OEM components, routine mechanical repairs carry premium price tags:
      </p>
      <ul>
        <li><strong>Air Suspension Air Strut Replacement:</strong> $1,800 – $3,200 per axle.</li>
        <li><strong>Dual-Clutch Transmission (DSG/PDK) Mechatronic Unit:</strong> $3,500 – $6,000.</li>
        <li><strong>Twin-Turbo Cooling Lines & Valve Cover Gaskets:</strong> $2,200 – $4,000.</li>
      </ul>

      <h2 class="h3 fw-bold mt-4 mb-3 text-main">2. Inclusionary vs. Named-Exclusion Warranty Contracts</h2>
      <p>
        Never buy a low-tier "Named Component" warranty plan. These contracts only cover a narrow list of items and routinely deny claims on consequential damages (e.g., denying a ruined engine because a non-covered water pump gasket caused the overheating).
      </p>
      <p>
        Always choose an <strong>Exclusionary (Bumper-to-Bumper) Warranty</strong>. Under exclusionary policies, every single mechanical and electronic component on the vehicle is covered <em>except</em> for a short list of consumable maintenance items like brake pads, tires, and wiper blades.
      </p>

      <div class="p-4 rounded-3 border-start border-4 border-primary my-4 bg-light">
        <h5 class="fw-bold text-primary mb-2"><i class="bi bi-shield-check me-2"></i> Verdict: When Is a Warranty Worth It?</h5>
        <p class="mb-0 small text-muted">
          If you are purchasing a German or British luxury vehicle with over 45,000 miles, an exclusionary warranty costing between $2,200 and $3,500 almost always pays for itself on the first or second major repair visit.
        </p>
      </div>
    `,
    tags: ["Extended Warranty", "BMW", "Audi", "Mercedes-Benz", "Luxury Cars"],
    comments: [
      {
        name: "Julian Sterling",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=80&q=80",
        date: "3 weeks ago",
        text: "My BMW 430i blew an electronic water pump and thermostat housing at 52,000 miles. My exclusionary warranty covered the entire $2,400 repair bill with just a $100 deductible."
      }
    ],
    relatedIds: [1, 3, 4]
  }
];

// Helper to retrieve blog post by ID or Slug
window.getBlogPostById = function(id) {
  const numId = parseInt(id, 10);
  return window.AUTOMARKET_BLOG_POSTS.find(p => p.id === numId) || window.AUTOMARKET_BLOG_POSTS[0];
};

window.getRelatedBlogPosts = function(currentId, count = 3) {
  const current = window.getBlogPostById(currentId);
  const related = window.AUTOMARKET_BLOG_POSTS.filter(p => p.id !== current.id && (current.relatedIds.includes(p.id) || p.category === current.category));
  return related.slice(0, count);
};