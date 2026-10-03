import { Article } from '../types';

export const DERRICK_PORTRAIT = '/src/assets/images/derrick_ngure_editorial_portrait_1790998318833.jpg';
export const ESSAY_SIMPLICITY_COVER = '/src/assets/images/essay_architecture_simplicity_1790998329870.jpg';
export const ESSAY_SAVANNAH_COVER = '/src/assets/images/essay_silicon_savannah_1790998340770.jpg';
export const ESSAY_PHYSICS_COVER = '/src/assets/images/apple_macbook_pro_m4_1790997979783.jpg';
export const ESSAY_EDGE_AI_COVER = '/src/assets/images/apple_iphone_titanium_hero_1790997966662.jpg';
export const ESSAY_SPATIAL_COVER = '/src/assets/images/apple_vision_pro_spatial_1790997992806.jpg';
export const ESSAY_ITERATION_COVER = '/src/assets/images/apple_watch_ultra_hero_1790998004011.jpg';

export const AUTHOR_INFO = {
  name: 'Derrick Ngure',
  handle: '@derrickngure',
  title: 'Software Architect & Creative Technologist',
  location: 'Nairobi & Worldwide',
  bio: 'Derrick Ngure designs high-performance distributed architectures, fluid spatial interfaces, and developer tooling. He explores the intersection of hardware constraints, software minimalism, and the emergent tech ecosystem across Africa.',
  principles: [
    'Subtract until only the inevitable remains.',
    'Fast software is a moral imperative; latency degrades human agency.',
    'Build interactive artifacts over abstract architecture decks.',
    'Decentralized systems with local-first data resilience.',
  ],
  stats: [
    { label: 'Published Essays', value: '48' },
    { label: 'Open Source Systems', value: '14' },
    { label: 'Monthly Readers', value: '82k' },
    { label: 'Years of Craft', value: '10+' },
  ],
};

export const ARTICLES: Article[] = [
  {
    id: 'architecture-of-simplicity',
    slug: 'architecture-of-simplicity',
    title: 'The Architecture of Simplicity: Why Less Code Feels Like Liquid Glass',
    subtitle: 'Why the highest form of engineering is the invisible deletion of complexity.',
    category: 'Design & Craft',
    date: 'October 2026',
    readTime: '7 min read',
    audioLength: '08:42',
    claps: 342,
    featured: true,
    coverImage: ESSAY_SIMPLICITY_COVER,
    summary:
      'We often mistake architectural bloat for sophistication. True engineering mastery is arriving at a system so stripped of ornamentation that it feels weightless, immediate, and inevitable.',
    content: [
      {
        type: 'paragraph',
        value:
          'In computing, there is a recurring temptation to equate architectural density with technical maturity. We stack abstractions upon abstractions, introduce state managers to oversee state managers, and congratulate ourselves on erecting elaborate cathedrals of indirection. Yet when you examine the tools that endure—the ones that feel like holding water or liquid glass in your palm—they are defined almost entirely by what has been excised.',
      },
      {
        type: 'quote',
        value:
          'Simplicity is not merely an aesthetic preference; it is a profound engineering discipline that resists the gravity of entropy.',
        extra: 'Derrick Ngure, On Digital Craft',
      },
      {
        type: 'heading',
        value: 'The Illusion of Protective Abstractions',
      },
      {
        type: 'paragraph',
        value:
          'Every layer of abstraction in your architecture demands a cognitive toll. When a user taps a surface, that tactile input travels through device drivers, render threads, event loops, component reconcilers, and network serialization. When each layer adds merely 5 milliseconds of hesitation, the magic evaporates. The human brain perceives latencies greater than 100ms not as a computer waiting, but as friction in the physical world.',
      },
      {
        type: 'callout',
        value:
          'The Goal: Aim for zero intermediate allocations on critical interaction loops. Treat frame budgets like physical laws, not soft guidelines.',
      },
      {
        type: 'heading',
        value: 'Designing for Inevitability',
      },
      {
        type: 'paragraph',
        value:
          'When you look at the titanium curvature of modern hardware or the fluid momentum scrolling of iOS, nothing screams for your attention. The tool gets out of the way so that the human intent translates instantly into creation. In our code, we must strive for this same tranquility: fewer models, fewer ceremonies, and zero dead code.',
      },
    ],
  },
  {
    id: 'silicon-savannah-renaissance',
    slug: 'silicon-savannah-renaissance',
    title: 'From Nairobi to the World: The Rise of the Silicon Savannah',
    subtitle: 'How decentralized talent and infrastructure leapfrogging are quietly building the next frontier of computing.',
    category: 'The Silicon Savannah',
    date: 'September 2026',
    readTime: '6 min read',
    audioLength: '07:15',
    claps: 289,
    featured: false,
    coverImage: ESSAY_SAVANNAH_COVER,
    summary:
      'Africa did not build landline networks before mobile phones; it skipped straight to cellular and mobile money. Today, engineers across Nairobi, Lagos, and Kigali are leapfrogging legacy cloud patterns into local-first, peer-to-peer resilience.',
    content: [
      {
        type: 'paragraph',
        value:
          'Walking through the tech corridors of Kilimani and Westlands in Nairobi, you witness a distinct brand of engineering that the West frequently misinterprets. Here, software is forged under real-world stress: intermittent connectivity, high mobile data sensitivity, and heterogeneous hardware. This creates a relentless pressure for hyper-efficient protocols.',
      },
      {
        type: 'quote',
        value:
          'Constraints do not restrict genius; they purify it. When you cannot assume infinite bandwidth or perpetual cloud uptime, your architecture becomes invincible.',
      },
      {
        type: 'heading',
        value: 'The Next Generation of Global Infrastructure',
      },
      {
        type: 'paragraph',
        value:
          'The Silicon Savannah is no longer merely consuming frameworks developed in Silicon Valley. From distributed offline CRDT databases to sovereign solar-powered edge computing nodes, African engineers are authoring solutions that resilient global infrastructure will rely on over the next two decades.',
      },
    ],
  },
  {
    id: 'physics-of-digital-micro-interactions',
    slug: 'physics-of-digital-micro-interactions',
    title: 'The Physics of Digital Micro-Interactions',
    subtitle: 'Why 120Hz refresh rates, spring physics, and compositor constraints define human emotional connection to screens.',
    category: 'Engineering',
    date: 'August 2026',
    readTime: '5 min read',
    audioLength: '06:30',
    claps: 412,
    featured: false,
    coverImage: ESSAY_PHYSICS_COVER,
    summary:
      'Easing curves like ease-in-out are relics of mechanical keyframe animation. Real organic objects possess mass, friction, and momentum. Here is how we engineer true spring mechanics into modern web viewports.',
    content: [
      {
        type: 'paragraph',
        value:
          'Linear and cubic-bezier transitions feel synthetic because physical objects in our universe do not start and stop at predetermined clock timestamps. When you flick a card, your finger imparts velocity; the card should decelerate under friction, not execute a predefined duration math problem.',
      },
      {
        type: 'heading',
        value: 'The Mathematical Beauty of Damped Springs',
      },
      {
        type: 'paragraph',
        value:
          'By modeling interactions with stiffness, damping ratio, and mass, software inherits the subtle, forgiving quality of high-end tactile hardware. A button with spring response feels pressed before your finger has even lifted.',
      },
      {
        type: 'callout',
        value:
          'Hardware Rule: Only touch CSS transforms and opacity on the compositor thread. Any layout reflow during an active gesture destroys tactile immersion.',
      },
    ],
  },
  {
    id: 'distributing-intelligence-edge-ai',
    slug: 'distributing-intelligence-edge-ai',
    title: 'Distributing Intelligence: Running Neural Models at the Edge',
    subtitle: 'Architectural blueprints for local neural inference on unified memory silicon without sending user bits to the cloud.',
    category: 'Engineering',
    date: 'July 2026',
    readTime: '8 min read',
    audioLength: '09:40',
    claps: 518,
    featured: false,
    coverImage: ESSAY_EDGE_AI_COVER,
    summary:
      'The cloud-monopoly model of AI is fragile, costly, and inherently hostile to privacy. With unified memory bandwidth exceeding 500GB/s on modern silicon, the future belongs to edge intelligence.',
    content: [
      {
        type: 'paragraph',
        value:
          'For the past three years, the tech industry has been obsessed with mega-datacenters and massive GPU clusters. But the most intimate human computing occurs on personal devices. When you execute neural inference directly on device silicon, latency drops to single-digit milliseconds and zero bytes leave the user’s enclave.',
      },
      {
        type: 'heading',
        value: 'Memory Bandwidth as the True Bottleneck',
      },
      {
        type: 'paragraph',
        value:
          'Autoregressive language models are fundamentally memory-bandwidth bound. Apple’s unified memory architecture—where the CPU, GPU, and Neural Engine share a single high-speed pool—makes laptops and phones surprisingly capable inference engines for quantized 3B to 8B parameter models.',
      },
    ],
  },
  {
    id: 'spatial-computing-next-decade',
    slug: 'spatial-computing-next-decade',
    title: 'Spatial Computing & The Next Decade of Human Interaction',
    subtitle: 'Dismantling the rectangular monitor: designing for eye tracking, micro-gestures, and depth planes.',
    category: 'Design & Craft',
    date: 'June 2026',
    readTime: '6 min read',
    audioLength: '07:50',
    claps: 230,
    featured: false,
    coverImage: ESSAY_SPATIAL_COVER,
    summary:
      'For fifty years, computing has lived inside a flat rectangular frame. When software expands into volumetric depth, traditional affordances like hover states, drop-shadows, and windows must be entirely re-invented.',
    content: [
      {
        type: 'paragraph',
        value:
          'Spatial computing is not virtual reality; it is the natural liberation of software into our physical geometry. Looking at an object to focus it, and tapping your thumb and index finger to select it, creates a sense of telepathy that no mouse or trackpad can ever replicate.',
      },
      {
        type: 'quote',
        value:
          'The screen is no longer a destination you visit; the room becomes the medium.',
      },
    ],
  },
  {
    id: 'focused-iteration-reality',
    slug: 'focused-iteration-reality',
    title: 'The Focused Iteration Reality: Lessons from 1,000 Prototypes',
    subtitle: 'Why the best engineers don’t debate in meeting rooms — they construct interactive artifacts.',
    category: 'Philosophy',
    date: 'May 2026',
    readTime: '5 min read',
    audioLength: '05:45',
    claps: 377,
    featured: false,
    coverImage: ESSAY_ITERATION_COVER,
    summary:
      'Architecture documents and speculative diagrams are comfortable hiding places for indecision. The fastest way to truth is building a disposable, interactive prototype you can touch within 24 hours.',
    content: [
      {
        type: 'paragraph',
        value:
          'Over my career building distributed applications and developer platforms, every protracted debate about architecture was instantly resolved the moment someone committed working code. A prototype changes the question from "Could this work?" to "How does this feel?"',
      },
      {
        type: 'heading',
        value: 'The Law of Tangible Feedback',
      },
      {
        type: 'paragraph',
        value:
          'When you touch an interactive artifact, your subconscious intuition kicks in. Flaws that were invisible in a 20-page specification become glaring in seconds. Keep your iteration cycles tight, ruthless, and tactile.',
      },
    ],
  },
];
