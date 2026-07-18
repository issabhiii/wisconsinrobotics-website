// Single source of truth for site content.
// Reconciled from the legacy pages (dates, names, and rosters were inconsistent there).

export const org = {
  name: "Wisconsin Robotics",
  school: "University of Wisconsin–Madison",
  tagline: "Student engineers building Mars rovers.",
  email: "wisconsinrobotics@cae.wisc.edu",
  address: ["1500 Engineering Drive", "ERB 133", "Madison, WI 53706"],
  // NOTE: confirm meeting cadence — legacy pages disagreed (Tue/Thu vs Mon/Wed/Thu).
  meetings: "Tuesdays & Thursdays · 6:00 PM",
  donateUrl:
    "https://secure.supportuw.org/give/?id=27af2aec-297d-4161-a007-afd7739c03e7",
  video: "https://www.youtube.com/watch?v=ipPe0j_YZGk",
  socials: [
    { label: "Instagram", href: "#", icon: "instagram" },
    { label: "LinkedIn", href: "#", icon: "linkedin" },
    { label: "GitHub", href: "#", icon: "github" },
    { label: "YouTube", href: org_video(), icon: "youtube" },
  ],
};

function org_video() {
  return "https://www.youtube.com/watch?v=ipPe0j_YZGk";
}

export const stats = [
  { value: 25, suffix: "", label: "Years active" },
  { value: 60, suffix: "+", label: "Team members" },
  { value: 6, suffix: "+", label: "Mars rovers built" },
  { value: 50, suffix: "+", label: "Community events" },
];

export const pillars = [
  {
    icon: "target",
    title: "Compete",
    body: "We design and build a new Mars rover every year to compete in the University Rover Challenge in the Utah desert — among the top university teams worldwide.",
  },
  {
    icon: "users",
    title: "Learn",
    body: "Members from every discipline get hands-on with mechanical design, embedded electronics, autonomy software, and field science — skills you can't get from a lecture.",
  },
  {
    icon: "rocket",
    title: "Explore",
    body: "From autonomous navigation to robotic manipulation, we push what a student-built rover can do — and share it with our community through outreach.",
  },
];

// Rover history — only robots we have real imagery for.
export const rovers = [
  {
    name: "Eclipse",
    year: "2023",
    competition: "URC 2023",
    image: "/images/eclipse.jpg",
    featured: true,
    blurb:
      "Our most recent competition rover — a full redesign of the drivetrain and arm for the University Rover Challenge.",
  },
  {
    name: "Horizon",
    year: "2019",
    competition: "URC 2019",
    image: "/images/horizon.jpg",
    blurb: "Refined suspension and a more capable science payload.",
  },
  {
    name: "Ascent MkII",
    year: "2018",
    competition: "URC 2018",
    image: "/images/ascent-mkii.jpg",
    blurb: "Second-generation Ascent platform with an upgraded manipulator.",
  },
  {
    name: "Ascent",
    year: "2017",
    competition: "URC 2017",
    image: "/images/ascent.jpg",
    blurb: "A lighter chassis built for the Utah terrain.",
  },
  {
    name: "Insomnia",
    year: "2016",
    competition: "URC 2016",
    image: "/images/insomnia.jpg",
    blurb: "Our first University Rover Challenge campaign.",
  },
];

export const outreachBots = [
  { name: "Rumblebot", icon: "gamepad-2", note: "Crowd-favorite demo bot" },
  { name: "Robotic Arm", icon: "bot", note: "Teaches manipulation & kinematics" },
  { name: "Drawing Box", icon: "pen-tool", note: "Plots art from code" },
  { name: "Bumblebot", icon: "bug", note: "Line-following intro build" },
  { name: "TankBot", icon: "shield", note: "Tracked outreach platform" },
  { name: "Atlas", icon: "orbit", note: "Experimental walker" },
];

export const subteams = [
  {
    id: "mechanical",
    name: "Mechanical",
    icon: "cog",
    blurb: "Chassis, drivetrain, suspension, and the robotic arm.",
  },
  {
    id: "electrical",
    name: "Electrical",
    icon: "cpu",
    blurb: "Power systems, custom PCBs, and motor control.",
  },
  {
    id: "software",
    name: "Software",
    icon: "code-2",
    blurb: "Autonomy, computer vision, controls, and the ground station.",
  },
  {
    id: "science",
    name: "Science",
    icon: "flask-conical",
    blurb: "Sample collection, spectrometry, and life-detection assays.",
  },
  {
    id: "operations",
    name: "Operations",
    icon: "briefcase",
    blurb: "Sponsorship, finance, logistics, media, and recruitment.",
  },
  {
    id: "outreach",
    name: "Outreach",
    icon: "megaphone",
    blurb: "Bringing robotics to the community and inspiring future engineers.",
  },
];

const li = "https://www.linkedin.com";

export const team = {
  leadership: [
    { name: "Nicolas Greaves", role: "President", avatar: "/images/nicolas.jpg", linkedin: li },
    { name: "Patrick Monahan", role: "Vice President", avatar: "/images/patrick.jpg", linkedin: li },
    { name: "Jeffrey Liu", role: "Treasurer", avatar: "/images/jeffrey.png", linkedin: li },
    { name: "Alex Gitnik", role: "Project Director", avatar: "/images/alex.jpg", linkedin: li },
  ],
  leads: [
    { name: "Chase Edwardson", role: "Mechanical Lead", avatar: "/images/chase.png", linkedin: li },
    { name: "George Vandersluis", role: "Mechanical Lead", avatar: "/images/george.jpg", linkedin: li },
    { name: "Miles Sierra", role: "Electrical Lead", avatar: "/images/miles.jpg", linkedin: li },
    { name: "Evan Briggs", role: "Electrical Lead", avatar: "/images/evan-briggs.jpg", linkedin: li },
    { name: "Sungkar Bolar", role: "Software Lead", avatar: "/images/sungkar.png", linkedin: li },
    { name: "Devansh Gupta", role: "Software Lead", avatar: "/images/devansh.jpg", linkedin: li },
    { name: "Tessara Clark", role: "Science Lead", avatar: "/images/tessera.jpg", linkedin: li },
    { name: "Evan Tian", role: "Science Lead", avatar: "/images/evan-tian.jpg", linkedin: li },
    { name: "Vikram Bangalore", role: "Outreach Lead", avatar: "/images/vikram.jpg", linkedin: li },
    { name: "Charles Ding", role: "Outreach Lead", avatar: "/images/charles.jpg", linkedin: li },
  ],
  operations: [
    { name: "Bohan Jia", role: "Campus Relations", avatar: "/images/bohan.jpg", linkedin: li },
    { name: "Christian Greaves", role: "Social Media", avatar: "", linkedin: li },
    { name: "Ethan Mak", role: "Events", avatar: "/images/ethan.jpg", linkedin: li },
    { name: "Yash Datar", role: "Grant Writer", avatar: "/images/yash.jpg", linkedin: li },
    { name: "Tyler Dalpe", role: "URC Logistics", avatar: "", linkedin: li },
    { name: "Katie Perkins", role: "Senior Design", avatar: "/images/katie.jpg", linkedin: li },
    { name: "Mina Duden", role: "Operations", avatar: "/images/mina.png", linkedin: "https://www.linkedin.com/in/mina-duden-444424319/" },
  ],
  website: [
    { name: "Abhi", role: "Website Developer", avatar: "/images/abhi.png", linkedin: "https://www.linkedin.com/in/abhinav-jain-9881b8296/" },
  ],
};

export const sponsorTiers = [
  {
    tier: "Diamond",
    accent: "#8ce9ff",
    items: [
      { name: "UW–Madison Mechanical Engineering", href: "https://engineering.wisc.edu/departments/mechanical-engineering/", blurb: "Long-time supporter providing workspace, travel funds, and mentorship." },
      { name: "UW–Madison Electrical & Computer Engineering", href: "https://engineering.wisc.edu/departments/electrical-computer-engineering/", blurb: "Access to lab equipment and technical resources for our projects." },
      { name: "Altium", href: "https://www.altium.com/", blurb: "Altium Designer and Altium 365 for PCB design and collaboration." },
      { name: "Komatsu", href: "https://www.komatsu.com/", blurb: "Industry partner helping us invest in high-quality components." },
      { name: "Mastermold", href: "https://www.mastermold.com/", blurb: "OEM supplier of custom molded fiberglass reinforced composites." },
    ],
  },
  {
    tier: "Gold",
    accent: "#ffd75a",
    items: [
      { name: "Oshkosh", href: "https://www.oshkoshcorp.com/", blurb: "Industrial technology company; generous donation to the team." },
      { name: "Extreme Engineering Solutions", href: "https://www.xes-inc.com/", blurb: "Embedded computing leader and local employer of our members." },
      { name: "Onshape", href: "https://www.onshape.com/", blurb: "Cloud-native CAD with an Enterprise account for FEA & PCB integration." },
      { name: "Polymaker", href: "https://www.polymaker.com/", blurb: "High-quality 3D-printing filament for all our printing needs." },
    ],
  },
  {
    tier: "Silver",
    accent: "#d6d8dd",
    items: [
      { name: "Protocase", href: "https://www.protocase.com/", blurb: "Custom sheet-metal enclosures and CNC parts for URC teams." },
      { name: "GD&T Basics", href: "https://www.gdandtbasics.com/", blurb: "Practical training in geometric dimensioning and tolerancing." },
    ],
  },
  {
    tier: "Bronze",
    accent: "#d69a5c",
    items: [
      { name: "Anderson Power", href: "https://www.andersonpower.com/", blurb: "High-power interconnect solutions used across our rovers." },
      { name: "Timken", href: "https://www.timken.com/", blurb: "Friction management, power transmission, and material science." },
    ],
  },
];

export const pastSponsors = [
  { name: "Land O'Lakes Inc.", href: "https://www.landolakesinc.com/", blurb: "Hosted the Bot Shot challenge — we tied for 1st place ($10,000 prize)." },
  { name: "Snap-On Inc.", href: "https://www.snapon.com/", blurb: "Donated most of the tools we use in manufacturing and assembly." },
  { name: "Yaskawa America", href: "https://www.yaskawa.com/", blurb: "Automation leader; gave members invaluable engineering experience." },
  { name: "Findorff", href: "https://www.findorff.com/", blurb: "Construction leader that supported our 2023 season." },
  { name: "bb7", href: "https://www.bb7.com/", blurb: "Design and product-development firm offering engineering mentorship." },
];

export const specialThanks = [
  "Clear Water Composites",
  "Knapp Bequest",
  "Cubermars",
  "Send Cut Send",
  "O-Drive Robotics",
  "Tramp Boards (VESCs)",
  "Battery Space",
];

export const nav = [
  { label: "Home", to: "/" },
  { label: "Team", to: "/team" },
  { label: "Robots", to: "/robots" },
  { label: "Operations", to: "/operations" },
  { label: "Sponsors", to: "/sponsors" },
];
