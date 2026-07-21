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
    to: "/team/mechanical",
    blurb: "Chassis, drivetrain, suspension, and the robotic arm.",
  },
  {
    id: "electrical",
    name: "Electrical",
    icon: "cpu",
    to: "/team/electrical",
    blurb: "Power systems, custom PCBs, and motor control.",
  },
  {
    id: "software",
    name: "Software",
    icon: "code-2",
    to: "/team/software",
    blurb: "Autonomy, computer vision, controls, and the ground station.",
  },
  {
    id: "science",
    name: "Science",
    icon: "flask-conical",
    to: "/team/science",
    blurb: "Sample collection, spectrometry, and life-detection assays.",
  },
  {
    id: "operations",
    name: "Operations",
    icon: "briefcase",
    to: "/team/operations",
    blurb: "Sponsorship, finance, logistics, media, and recruitment.",
  },
  {
    id: "outreach",
    name: "Outreach",
    icon: "megaphone",
    to: "/team/outreach",
    blurb: "Bringing robotics to the community and inspiring future engineers.",
  },
];

// Per-subteam page content. focus = 3 highlight cards, practice = tools/skills grid.
export const subteamContent = {
  mechanical: {
    intro:
      "The Mechanical subteam turns raw stock into a rover — designing the chassis, drivetrain, suspension, and the robotic arm that all have to survive the Utah desert.",
    focus: [
      { icon: "box", title: "Chassis & Structure", body: "Lightweight, rigid frames engineered to take a beating on Mars-analog terrain." },
      { icon: "cog", title: "Drivetrain & Suspension", body: "Six-wheel rocker-bogie systems that keep every wheel planted over rocks." },
      { icon: "bot", title: "Robotic Arm", body: "A multi-DOF manipulator for typing, turning valves, and collecting samples." },
    ],
    practice: {
      title: "Tools & skills",
      items: [
        { icon: "pen-tool", title: "CAD", body: "Full-assembly design and simulation in Onshape." },
        { icon: "wrench", title: "Fabrication", body: "In-house CNC machining, mill, and lathe work." },
        { icon: "layers", title: "Composites & printing", body: "Carbon-fiber layups and rapid 3D-printed prototypes." },
      ],
    },
  },
  electrical: {
    intro:
      "The Electrical subteam keeps the rover alive — designing power systems, custom PCBs, and the motor control that drives every actuator.",
    focus: [
      { icon: "zap", title: "Power Systems", body: "Battery packs and distribution that survive long, dusty field days." },
      { icon: "cpu", title: "Custom PCBs", body: "Boards designed in Altium for sensing, control, and communication." },
      { icon: "radio", title: "Comms & Telemetry", body: "Reliable long-range links between the rover and ground station." },
    ],
    practice: {
      title: "Tools & skills",
      items: [
        { icon: "cpu", title: "Altium Designer", body: "Schematic capture and multi-layer PCB layout." },
        { icon: "battery-charging", title: "Power electronics", body: "Regulators, motor drivers, and safe battery management." },
        { icon: "wrench", title: "Bring-up & debug", body: "Soldering, oscilloscopes, and hardware validation." },
      ],
    },
  },
  software: {
    intro:
      "The Software subteam makes the rover think — building autonomy, computer vision, controls, and the ground station that ties it all together.",
    focus: [
      { icon: "navigation", title: "Autonomy & Navigation", body: "Path planning and GPS-denied navigation across open terrain." },
      { icon: "eye", title: "Computer Vision", body: "Detecting AR tags, objects, and terrain from onboard cameras." },
      { icon: "monitor", title: "Ground Station", body: "The operator interface for driving, telemetry, and diagnostics." },
    ],
    practice: {
      title: "Tools & skills",
      items: [
        { icon: "terminal", title: "ROS · C++ · Python", body: "A robotics stack built on ROS with real-time control." },
        { icon: "git-branch", title: "Git & CI", body: "Reviewed pull requests and automated testing." },
        { icon: "cpu", title: "Embedded", body: "Firmware bridging software commands to the hardware." },
      ],
    },
  },
  science: {
    intro:
      "The Science subteam chases the question that drives the whole mission: is there life? We build the systems that collect and analyze Martian-analog samples.",
    focus: [
      { icon: "test-tube", title: "Sample Collection", body: "Coring and caching regolith and soil from the field site." },
      { icon: "flask-conical", title: "Spectrometry", body: "Characterizing sample composition on the rover." },
      { icon: "leaf", title: "Life Detection", body: "Assays that screen samples for signatures of life." },
    ],
    practice: {
      title: "Tools & skills",
      items: [
        { icon: "microscope", title: "Lab analysis", body: "Sample prep and instrumentation." },
        { icon: "droplet", title: "Biochemical assays", body: "Reagent-based tests for organic markers." },
        { icon: "clipboard-list", title: "Field protocols", body: "Rigorous, competition-grade procedures." },
      ],
    },
  },
  operations: {
    intro:
      "Operations is the engine behind the team — coordinating events, media, industry relations, and logistics so the engineers can focus on the rover.",
    focus: [
      { icon: "calendar", title: "Events & Outreach", body: "Planning demos and events that inspire future engineers." },
      { icon: "share-2", title: "Media & Comms", body: "Running our social channels and telling the team's story." },
      { icon: "briefcase", title: "Industry Relations", body: "Building sponsor partnerships and securing funding." },
    ],
    practice: {
      title: "What we own",
      items: [
        { icon: "users", title: "Event coordination", body: "Meetings, demos, competitions, and public showcases." },
        { icon: "message-circle", title: "Social media", body: "Content creation and community engagement online." },
        { icon: "trending-up", title: "Sponsorship & fundraising", body: "Partnerships, relationships, and funding." },
        { icon: "package", title: "Logistics & planning", body: "Competition logistics, travel, and equipment." },
        { icon: "code", title: "Website development", body: "Maintaining the team's digital presence." },
        { icon: "heart", title: "Team culture", body: "A positive, inclusive environment and team building." },
      ],
    },
  },
  outreach: {
    intro:
      "The Outreach subteam brings robotics to the community — running events, teaching STEM, and building demo bots that get the next generation hooked.",
    focus: [
      { icon: "graduation-cap", title: "STEM Education", body: "Hands-on workshops for K–12 and community groups." },
      { icon: "calendar", title: "Community Events", body: "Demos, expos, and campus events across Madison." },
      { icon: "bot", title: "Demo Robots", body: "Special bots built purely to delight and teach." },
    ],
    practice: {
      title: "What we do",
      items: [
        { icon: "users", title: "School visits", body: "Bringing rovers and robots into classrooms." },
        { icon: "sparkles", title: "Public demos", body: "Showing what a student-built rover can do." },
        { icon: "megaphone", title: "Recruitment", body: "Welcoming new members from every major." },
      ],
    },
  },
};

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
  { label: "Sponsors", to: "/sponsors" },
];

// Resolve the members shown on a subteam page from the roster.
export function getSubteamMembers(id) {
  if (id === "operations") return team.operations;
  const labels = {
    mechanical: "Mechanical",
    electrical: "Electrical",
    software: "Software",
    science: "Science",
    outreach: "Outreach",
  };
  const label = labels[id];
  if (!label) return [];
  return team.leads.filter((l) => l.role.startsWith(label));
}
