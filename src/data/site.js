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
  video: "https://www.youtube.com/watch?v=fZ5lqiTug2U",
  socials: [
    { label: "Instagram", href: "#", icon: "instagram" },
    { label: "LinkedIn", href: "#", icon: "linkedin" },
    { label: "GitHub", href: "#", icon: "github" },
    { label: "YouTube", href: "https://www.youtube.com/watch?v=fZ5lqiTug2U", icon: "youtube" },
  ],
};

export const stats = [
  { value: 25, suffix: "", label: "Years active" },
  { value: 60, suffix: "+", label: "Team members" },
  { value: 7, suffix: "+", label: "Mars rovers built" },
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

// Rover history — URC competition robots (featured = latest build).
export const urcIntro =
  "Held annually in the desert of southern Utah in the United States, URC is an international college robotics competition that challenges student teams to design and build the next generation of Mars rovers that will one day work alongside astronauts exploring the Red Planet. We've been participating in URC since 2016, competing among hundreds of top university teams around the world.";

export const rovers = [
  {
    name: "Nebula",
    year: "2024",
    competition: "URC 2024",
    image: "/images/robots/nebula.png",
    featured: true,
    blurb:
      "We're proud to present our latest robot, Nebula, which we've spent the past year building for URC 2024. Take a look at our System Acceptance Review (SAR) submission to see Nebula in action!",
  },
  {
    name: "Forward",
    year: "2026",
    competition: "URC 2026",
    image: "/images/robots/forward.png",
    blurb: "Our URC 2026 competition rover — currently in development.",
  },
  {
    name: "Eclipse",
    year: "2023",
    competition: "URC 2023",
    image: "/images/robots/eclipse.jpg",
    blurb: "A full redesign of the drivetrain and arm for the University Rover Challenge.",
  },
  {
    name: "Horizon",
    year: "2019",
    competition: "URC 2019",
    image: "/images/robots/horizon.jpg",
    blurb: "Refined suspension and a more capable science payload.",
  },
  {
    name: "Ascent MkII",
    year: "2018",
    competition: "URC 2018",
    image: "/images/robots/ascent mkII.jpg",
    blurb: "Second-generation Ascent platform with an upgraded manipulator.",
  },
  {
    name: "Ascent",
    year: "2017",
    competition: "URC 2017",
    image: "/images/robots/ascent.jpg",
    blurb: "A lighter chassis built for the Utah terrain.",
  },
  {
    name: "Insomnia",
    year: "2016",
    competition: "URC 2016",
    image: "/images/robots/insomnia.jpg",
    blurb: "Our first University Rover Challenge campaign.",
  },
];

export const outreachBots = [
  {
    name: "Rumblebot",
    image: "/images/robots/outreach_rumblebot.jpg",
    badge: "new",
    note: "Crowd-favorite demo bot",
  },
  {
    name: "Robotic Arm",
    image: "/images/robots/outreach_arm.jpg",
    note: "Teaches manipulation & kinematics",
  },
  {
    name: "Drawing Box",
    image: "/images/robots/outreach_drawingbox.jpg",
    note: "Plots art from code",
  },
  {
    name: "Bumblebot",
    image: "/images/robots/outreach_bumble.jpg",
    note: "Line-following intro build",
  },
  {
    name: "TankBot",
    image: "/images/robots/outreach_tank.jpg",
    badge: "retired",
    note: "Tracked outreach platform",
  },
  {
    name: "Atlas",
    image: "/images/robots/outreach_atlas.jpg",
    badge: "retired",
    note: "Experimental walker",
  },
  {
    name: "Turtlebot & Rocket",
    image: "/images/robots/outreach_turtle_and_rocket.jpg",
    badge: "retired",
    note: "Retired outreach platform",
  },
];

export const outreachEvents = [
  {
    name: "Engineering Expo",
    body: "Engineering Expo is an event hosted by the College of Engineering, showcasing various student organizations and engineering companies on the engineering campus. Usually hosted in the later half of the academic year's second semester, we use Expo as a great opportunity to show off our latest work.",
    images: ["/images/robots/outreach_expo.jpg"],
  },
  {
    name: "Maker Faire Milwaukee",
    body: 'Maker Faire Milwaukee is an annually held event, open to the Milwaukee public. Various exhibitors, known as "makers", are invited to show off their work. Wisconsin Robotics attends and demonstrates our current projects to the public.',
    images: [
      "/images/robots/outreach_makerfaire1.jpg",
      "/images/robots/outreach_makerfaire2.jpg",
    ],
  },
  {
    name: "Wisconsin Science Festival",
    body: "Wisconsin Science Festival is an annual event hosted by the Wisconsin Institute of Discovery, seeking to showcase various organizations and their work for the public to see. Wisconsin Robotics has regularly attended, having a booth to allow us to demonstrate our robots to the public.",
    images: [
      "/images/robots/outreach_sciencefest1.jpg",
      "/images/robots/outreach_sciencefest2.jpg",
    ],
  },
  {
    name: "Robot Block Party",
    body: "The Museum of Science and Industry in Chicago, IL hosts a yearly event called the Robot Block Party. Various robotic-based student organizations are invited to attend. Wisconsin Robotics brings our latest competition robot prototype and demonstrates it to the public.",
    images: ["/images/robots/outreach_blockparty.jpg"],
  },
  {
    name: "The Community",
    body: "In addition to our larger events, Wisconsin Robotics regularly hosts events with smaller groups, including girl scouts and K-12 students. We demonstrate our projects while also answering questions about the various fields of STEM, hoping to inspire younger students in the same way many of our members were when they were younger.",
    images: ["/images/robots/outreach_community.jpg"],
  },
];

export const otherRobots = [
  {
    name: "Prime",
    competition: "BotShot 2019",
    image: "/images/robots/prime.jpg",
  },
  {
    name: "Scorpio",
    competition: "RASC-AL 2014",
    image: "/images/robots/scorpio.jpg",
  },
  {
    name: "Singularity",
    competition: "IGVC 2013",
    image: "/images/robots/singularity.jpg",
  },
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
    { name: "George Vandersluis", role: "President", avatar: "/images/george.jpg", linkedin: li },
    { name: "Miles Sierra", role: "Vice President", avatar: "/images/miles.jpg", linkedin: li },
    { name: "Evan Tian", role: "Treasurer", avatar: "/images/evan-tian.jpg", linkedin: li },
    { name: "Devansh Gupta", role: "Project Director", avatar: "/images/devansh.jpg", linkedin: li },
  ],
  leads: [
    { name: "Amelia Stalter", role: "Mechanical", avatar: "/images/astalter.png", linkedin: li },
    { name: "Luke Olson", role: "Mechanical", avatar: "/images/lolson.jpg", linkedin: li },
    { name: "Evan Briggs", role: "Electrical", avatar: "/images/evan-briggs.jpg", linkedin: li },
    { name: "Joseph Cicalese", role: "Electrical", avatar: "/images/Jcicalese.jpg", linkedin: li },
    { name: "Aditya Dharap", role: "Software", avatar: "/images/adharap.jpg", linkedin: li },
    { name: "David Wang", role: "Software", avatar: "/images/dwang.jpg", linkedin: li },
    { name: "Landon Colaresi", role: "Science", avatar: "/images/lcolaresi.jpg", linkedin: li },
    { name: "Tessara Clark", role: "Science", avatar: "/images/tessera.jpg", linkedin: li },
    { name: "Vikram Bangalore", role: "Outreach", avatar: "/images/vikram.jpg", linkedin: li },
    { name: "Matthew Suri", role: "Outreach", avatar: "/images/msuri.jpg", linkedin: li },
    {
      name: "Abhinav Jain",
      role: "Technical",
      avatar: "/images/abhi.png",
      linkedin: "https://www.linkedin.com/in/abhinav-jain-9881b8296/",
    },
  ],
};

export const sponsorTiers = [
  {
    tier: "Diamond",
    accent: "#8ce9ff",
    items: [
      {
        name: "UW–Madison Department of Mechanical Engineering",
        href: "https://engineering.wisc.edu/departments/mechanical-engineering/",
        blurb:
          "The Mechanical Engineering department of UW-Madison has been a long-time supporter of Wisconsin Robotics. They have provided us with a workspace, travel expense funds, and mentorship to help us succeed. We are grateful for their continued support.",
      },
      {
        name: "UW–Madison Department of Electrical & Computer Engineering",
        href: "https://engineering.wisc.edu/departments/electrical-computer-engineering/",
        blurb:
          "The Electrical and Computer Engineering (ECE) department of UW-Madison has been a valuable supporter of Wisconsin Robotics. They have provided access to lab equipment and technical resources that have been instrumental in advancing our projects.",
      },
      {
        name: "Altium",
        href: "https://www.altium.com/",
        blurb:
          "Altium has generously provided our team with Altium Designer and Altium 365. We use Altium Designer to create our PCBs and Altium 365 to collaborate on our designs.",
      },
      {
        name: "Komatsu",
        href: "https://www.komatsu.com/",
        blurb:
          "Komatsu has been a generous industry partner to Wisconsin Robotics. Their contributions have helped us invest in high-quality components and enhance our technical capabilities. We are thankful for their continued support.",
      },
      {
        name: "Mastermold",
        href: "https://www.mastermold.com/",
        blurb:
          "MasterMold is a full-service OEM supplier of custom molded fiberglass reinforced composites with capabilities that include compression/sheet molding, robotic machining/bonding, and robotic painting as well as parts assembly.",
      },
    ],
  },
  {
    tier: "Gold",
    accent: "#ffd75a",
    items: [
      {
        name: "OshKosh",
        href: "https://www.oshkoshcorp.com/",
        blurb:
          "OshKosh Corporation is an industrial technology company that focuses on creating vehicles and equipment. They are a global organization known for their innovative products. They kindly gave a generous donation for the purposes of Wisconsin Robotics.",
      },
      {
        name: "Milwaukee Electric",
        href: "https://www.milwaukeeelectronics.com/",
        blurb:
          "Milwaukee Electronics is an electronic manufacturing company offering circuit board design, PCBA assembly, and on-demand manufacturing. They were kind enough to give a generous donation for the purposes of Wisconsin Robotics.",
      },
      {
        name: "Extreme Engineering Solutions",
        href: "https://www.xes-inc.com/",
        blurb:
          "Extreme Engineering Solutions is a leader in the design, manufacture, testing, and support of hardware and software solutions for the embedded computing market. They are a large employer in the UW-Madison area and have provided wonderful opportunities for some of our past and present members.",
      },
      {
        name: "Onshape",
        href: "https://www.onshape.com/",
        blurb:
          "Onshape is a cloud-native CAD software that we use to collaborate efficiently when designing and producing our mechanical systems. They graciously have supplied us with an Enterprise account which gives us access to advanced tools such as FEA and PCB integration.",
      },
      {
        name: "Polymaker",
        href: "https://www.polymaker.com/",
        blurb:
          "Polymaker creates top-of-the-line filaments for 3D printing. Polymaker graciously sponsors our team by providing high quality filament for all of our printing needs.",
      },
    ],
  },
  {
    tier: "Silver",
    accent: "#d6d8dd",
    items: [
      {
        name: "Protocase",
        href: "https://www.protocase.com/",
        blurb:
          "Protocase is a huge supporter of the University Rover Challenge, providing custom sheet metal enclosures and CNC machined parts to every team that competes. We greatly appreciate the support they have given to us, as well as the competition as a whole.",
      },
      {
        name: "GD&T Basics",
        href: "https://www.gdandtbasics.com/",
        blurb:
          "GD&T Basics is a company dedicated to simplifying and teaching Geometric Dimensioning and Tolerancing for professionals and teams in the engineering and manufacturing industries. They offer clear, practical training courses that break down complex GD&T concepts into easy-to-understand lessons.",
      },
      {
        name: "KHK Gears",
        href: "https://khkgears.net/",
        blurb:
          "KHK Gears is a gear manufacturing company, dedicated to high quality precision metric gears. They have generously discounted their product line for us.",
      },
      {
        name: "RoboDK",
        href: "https://robodk.com/",
        blurb:
          "RoboDK has provided generous use of their simulation software for the development of our arm.",
      },
    ],
  },
  {
    tier: "Bronze",
    accent: "#d69a5c",
    items: [
      {
        name: "Anderson Power",
        href: "https://www.andersonpower.com/",
        blurb:
          "Anderson Power is an international leader in high-powered, interconnect solutions. They generously donate a majority of the connectors we use in our robots, and continue to be a fantastic supporter of the team.",
      },
      {
        name: "Timken",
        href: "https://www.timken.com/",
        blurb:
          "Timken is a globally recognized industrial leader that specializes in friction management, power transmission, and material science. They have also been considered as one of the world's most ethical companies for 13 years. We are grateful for their continued sponsorship and support.",
      },
    ],
  },
];

export const pastSponsors = [
  {
    name: "Land O'Lakes Inc.",
    href: "https://www.landolakesinc.com/",
    blurb:
      "Land O'Lakes, Inc. hosted Land O'Lakes Bot Shot, challenging STEM talent to design and build robots to shoot basketballs and square off in a game of H-O-R-S-E. Wisconsin Robotics tied for 1st place in this competition, both teams winning a prize of $10,000!",
  },
  {
    name: "Snap-On Inc.",
    href: "https://www.snapon.com/",
    blurb:
      "Snap-on has donated the majority of the tools that Wisconsin Robotics uses in manufacturing and assembly of our various projects. About two thirds of all fabrication work that we do can be done in-house thanks to Snap-on.",
  },
  {
    name: "Yaskawa America",
    href: "https://www.yaskawa.com/",
    blurb:
      "Yaskawa is a global leader in industrial automation and robotics known for quality and performance in the production of AC Inverter Drives, Servo and Motion Control, and Robotics Automation Systems. They have also given some of our members invaluable employment experience in the fields of mechanical and electrical engineering.",
  },
  {
    name: "Findorff",
    href: "https://www.findorff.com/",
    blurb:
      "Findorff is an industry-leading construction company that is working on many projects in the Madison area, including for the University of Wisconsin-Madison. They have generously contributed to the success of the team for the 2023 season.",
  },
  {
    name: "bb7",
    href: "https://www.bb7.com/",
    blurb:
      "bb7 is a comprehensive design and product development firm with a rich history in innovation and testing. They have kindly offered us their services, including opportunities to speak with qualified engineers to gain insight into design fundamentals that help us improve our robots.",
  },
];

export const specialThanks = [
  "Clear Water Composites",
  "Knapp Bequest",
  "Cubermars",
  "Send Cut Send",
  "O-Drive Robotics",
  "Tramp Boards (Vescs)",
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
