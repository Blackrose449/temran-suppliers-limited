export type Category =
  | "footwear"
  | "headgear"
  | "gloves"
  | "eyewear"
  | "hivis"
  | "respirators"
  | "coveralls"
  | "firefighting";

export interface Product {
  id: string;
  name: string;
  category: Category;
  image: string;
  description: string;
}

export const categories: { id: Category; label: string; blurb: string }[] = [
  { id: "headgear", label: "Head Protection", blurb: "Certified hard hats and vented safety helmets." },
  { id: "footwear", label: "Safety Footwear", blurb: "Steel-toe boots and slip-resistant work shoes." },
  { id: "gloves", label: "Hand Protection", blurb: "Cut-resistant, chemical and welding gloves." },
  { id: "eyewear", label: "Eye Protection", blurb: "Impact-rated safety goggles and shields." },
  { id: "hivis", label: "Hi-Vis & Workwear", blurb: "Reflective vests and site-ready workwear." },
  { id: "coveralls", label: "Coveralls", blurb: "Full-body protective coveralls and overalls." },
  { id: "respirators", label: "Respiratory", blurb: "Dust masks and respiratory protection." },
  { id: "firefighting", label: "Firefighting Gear", blurb: "Fire suits, helmets and rescue kits." },
];

export const products: Product[] = [
  { id: "firefighter-helmet", name: "Structural Firefighter Helmet", category: "firefighting", image: "/products/firefighter-helmet.jpg", description: "High-temperature resistant firefighter helmet with adjustable harness for structural fire response." },
  { id: "leather-gloves-gray", name: "General-Purpose Leather Gloves", category: "gloves", image: "/products/leather-gloves-gray.jpg", description: "Durable split-leather work gloves for handling, assembly and general site tasks." },
  { id: "vented-safety-helmet-white", name: "Ventilated Safety Helmet", category: "headgear", image: "/products/vented-safety-helmet-white.jpg", description: "Lightweight ventilated hard hat with ratchet harness, suited to warm-climate construction sites." },
  { id: "rubber-boots-green", name: "Industrial Rubber Safety Boots", category: "footwear", image: "/products/rubber-boots-green.jpg", description: "Waterproof rubber boots with reinforced toe cap for wet and muddy work environments." },
  { id: "safety-shoes-black", name: "Low-Cut Steel-Toe Safety Shoes", category: "footwear", image: "/products/safety-shoes-black.jpg", description: "Comfortable low-cut safety shoes with steel toe and anti-slip sole for light industrial work." },
  { id: "tan-work-boots", name: "Tan Ankle Work Boots", category: "footwear", image: "/products/tan-work-boots.jpg", description: "Full-grain leather ankle boots with reinforced stitching, built for extended job-site wear." },
  { id: "hicut-safety-boots-black", name: "High-Cut Composite-Toe Boots", category: "footwear", image: "/products/hicut-safety-boots-black.jpg", description: "High-cut safety boots with composite toe and shock-absorbing outsole for construction crews." },
  { id: "gray-hiking-boots", name: "Grey Trail Safety Boots", category: "footwear", image: "/products/gray-hiking-boots.jpg", description: "All-terrain safety boots with reinforced heel and grip outsole for outdoor and utility work." },
  { id: "brown-hiking-boots", name: "Brown Trail Work Boots", category: "footwear", image: "/products/brown-hiking-boots.jpg", description: "Rugged brown suede work boots with aggressive tread for uneven ground and field work." },
  { id: "boxed-safety-boots", name: "Boxed Steel-Toe Safety Boots", category: "footwear", image: "/products/boxed-safety-boots.jpg", description: "Certified steel-toe safety boots supplied boxed and site-ready for bulk workforce kits." },
  { id: "casual-safety-shoe-black", name: "Executive Safety Shoe", category: "footwear", image: "/products/casual-safety-shoe-black.jpg", description: "Slip-on black safety shoe with hidden protective toe for supervisors and light-duty use." },
  { id: "stacked-navy-boots", name: "Bulk Navy Work Boots", category: "footwear", image: "/products/stacked-navy-boots.jpg", description: "Bulk-order navy work boots stocked for large procurement runs and corporate PPE issue." },
  { id: "clear-safety-goggles", name: "Clear Impact Safety Goggles", category: "eyewear", image: "/products/clear-safety-goggles.jpg", description: "Anti-fog clear polycarbonate goggles that shield eyes from dust, debris and splash." },
  { id: "wraparound-goggles", name: "Wrap-Around Safety Goggles", category: "eyewear", image: "/products/wraparound-goggles.jpg", description: "Wrap-around goggles with side protection for grinding, cutting and workshop use." },
  { id: "yellow-hivis-vest", name: "High-Visibility Yellow Vest", category: "hivis", image: "/products/yellow-hivis-vest.jpg", description: "Class 2 reflective yellow vest for roadworks, warehousing and low-light site conditions." },
  { id: "yellow-reflective-vest", name: "Reflective Traffic Vest", category: "hivis", image: "/products/yellow-reflective-vest.jpg", description: "Lightweight reflective vest with breathable mesh, ideal for traffic and event marshals." },
  { id: "hard-hat-yellow", name: "Yellow Industrial Hard Hat", category: "headgear", image: "/products/hard-hat-yellow.jpg", description: "Standard-shell yellow hard hat with 6-point suspension for general construction use." },
  { id: "hard-hat-white", name: "White Supervisor Hard Hat", category: "headgear", image: "/products/hard-hat-white.jpg", description: "Supervisor-grade white hard hat with slots for hearing protection and face shields." },
  { id: "red-leather-gloves", name: "Reinforced Leather Handling Gloves", category: "gloves", image: "/products/red-leather-gloves.jpg", description: "Reinforced red leather gloves for material handling, welding and heat-adjacent tasks." },
  { id: "red-chemical-gloves", name: "Long-Cuff Chemical Gloves", category: "gloves", image: "/products/red-chemical-gloves.jpg", description: "Long-cuff PVC chemical-resistant gloves for cleaning, dipping and hazardous-fluid handling." },
  { id: "hard-hat-blue", name: "Blue Utility Hard Hat", category: "headgear", image: "/products/hard-hat-blue.jpg", description: "Blue utility-grade hard hat used to identify technical crews on multi-team job sites." },
  { id: "red-coverall", name: "Flame-Resistant Red Coverall", category: "coveralls", image: "/products/red-coverall.jpg", description: "Flame-resistant coverall with reflective banding for high-heat and emergency-response teams." },
  { id: "yellow-raincoat", name: "Waterproof Rain Jacket", category: "coveralls", image: "/products/yellow-raincoat.jpg", description: "Bright waterproof rain jacket for outdoor crews working through rain and low visibility." },
  { id: "engineer-vest-blue", name: "Multi-Pocket Engineer Vest", category: "hivis", image: "/products/engineer-vest-blue.jpg", description: "Reflective engineer vest with multiple tool pockets and radio loops for site supervisors." },
  { id: "welding-gloves", name: "Long-Cuff Welding Gloves", category: "gloves", image: "/products/welding-gloves.jpg", description: "Heat-resistant long-cuff welding gloves protecting hands and forearms from sparks and slag." },
  { id: "hivis-jacket-set", name: "Hi-Vis Jacket & Trouser Set", category: "hivis", image: "/products/hivis-jacket-set.jpg", description: "Two-piece reflective jacket-and-trouser set for full-body visibility in low-light work." },
  { id: "industrial-worker-set", name: "Complete Industrial PPE Set", category: "coveralls", image: "/products/industrial-worker-set.jpg", description: "Head-to-toe PPE kit including helmet, coverall, boots and gloves for onboarding new crews." },
  { id: "firefighter-suit", name: "Firefighter Turnout Suit", category: "firefighting", image: "/products/firefighter-suit.jpg", description: "Complete firefighter turnout suit with helmet, gloves and boots for structural fire response." },
  { id: "chainsaw-protection-set", name: "Forestry Chainsaw Protection Set", category: "firefighting", image: "/products/chainsaw-protection-set.jpg", description: "Cut-resistant forestry set with hi-vis jacket, chainsaw trousers and ear protection." },
  { id: "navy-bib-overall", name: "Navy Bib Work Overall", category: "coveralls", image: "/products/navy-bib-overall.jpg", description: "Durable navy bib overall with reinforced knees for mechanics and industrial workshops." },
];

export const values = [
  { title: "Safety First", body: "The safety and well-being of our clients guide every product we supply." },
  { title: "Quality Assurance", body: "We stand behind durable, certified, high-standard PPE in every order." },
  { title: "Integrity", body: "We do business honestly, transparently, and with accountability." },
  { title: "Customer Focus", body: "We listen closely to client needs and respond with timely, efficient service." },
  { title: "Reliability", body: "Consistent stock and dependable delivery are non-negotiable for us." },
  { title: "Innovation", body: "We keep exploring new products and technologies to strengthen safety outcomes." },
  { title: "Teamwork", body: "We collaborate closely, both internally and with our clients, to reach shared goals." },
];

export const services = [
  {
    title: "PPE Supply",
    body: "Supply of high-quality PPE, including safety helmets, gloves, protective clothing, safety boots, goggles, face shields, and respiratory protection.",
  },
  {
    title: "Consultation & Bulk Orders",
    body: "Product consultation to help clients choose the right gear for their industry's specific risks, plus bulk procurement and customised orders.",
  },
  {
    title: "Safety Training",
    body: "Safety training and guidance on correct PPE usage, storage, and maintenance, so equipment lasts and performs as intended.",
  },
  {
    title: "Delivery & After-Sales",
    body: "Reliable delivery, after-sales support, and assistance aligning with local and international safety standards, keeping your sites safe and compliant.",
  },
];

export const whyChooseUs = [
  { title: "Certified Equipment", body: "High-quality, certified safety equipment built for construction, manufacturing, healthcare and industrial operations." },
  { title: "One-Stop Sourcing", body: "Helmets, gloves, boots, respirators and workwear — everything you need from one dependable partner." },
  { title: "Compliance-Focused", body: "Equipment that meets recognised local and international safety standards and protects workers effectively." },
  { title: "Competitive Pricing", body: "Fair pricing with flexible bulk supply and solutions customised to each client's operations." },
  { title: "Fast Reliable Delivery", body: "Fast, reliable delivery and responsive customer support keep your operations running without interruption." },
  { title: "Expert Guidance", body: "Beyond supply, we advise on product selection and correct usage so consultation and training work together." },
  { title: "Long-Term Partnership", body: "Quality, affordability and long-term partnership are what make Temran a trusted workplace-safety partner." },
];

export const CONTACT = {
  phone: "0728973081",
  waNumber: "254728973081",
  email: "temranservices@gmail.com",
  address: "Nairobi, Kenya",
};

export const clients = [
  { name: "Tradco Services Limited", blurb: "Ongoing PPE supply for site and industrial teams." },
  { name: "Corevantage Limited", blurb: "Trusted procurement partner for safety gear." },
  { name: "Raflan Enterprises", blurb: "Long-standing collaboration on workwear and PPE." },
];
