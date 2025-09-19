export const blogPosts = [
  {
    id: 1,
    title: "Digital Transformation in Telecommunications: Lessons from 20 Years",
    excerpt: "Exploring the evolution of telco platforms and how digital architecture has transformed customer experiences in the telecommunications industry.",
    content: `
      <p>Over the past two decades, I've witnessed firsthand the massive digital transformation that has reshaped the telecommunications industry. From legacy OSS systems to modern cloud-native architectures, the journey has been both challenging and rewarding.</p>

      <h3>The Legacy Challenge</h3>
      <p>When I started working with British Telecom's OSS stack, we were dealing with monolithic systems that were difficult to scale and maintain. Network elements from vendors like Alcatel, Cisco, Huawei, and Fujitsu all had different interfaces and protocols.</p>

      <h3>Cloud-First Approach</h3>
      <p>The shift to cloud-first architectures has been revolutionary. At OneNZ (formerly Spark), we've successfully migrated critical e-commerce platforms to AWS, resulting in:</p>
      <ul>
        <li>99.9% uptime improvement</li>
        <li>50% reduction in infrastructure costs</li>
        <li>Faster time-to-market for new features</li>
      </ul>

      <h3>Key Learnings</h3>
      <p>Digital transformation isn't just about technology—it's about people, processes, and culture. The most successful projects I've led have always prioritized user experience and business value over technical complexity.</p>
    `,
    author: "Vaibhav Ajmera",
    date: "2024-01-15",
    category: "Digital Architecture",
    tags: ["Digital Transformation", "Telecommunications", "Cloud Architecture", "AWS"],
    readTime: "8 min read",
    featured: true
  },
  {
    id: 2,
    title: "Building Scalable E-commerce Platforms with SAP Hybris and Adobe AEM",
    excerpt: "A comprehensive guide to architecting enterprise e-commerce solutions using SAP Hybris for commerce and Adobe AEM for content management.",
    content: `
      <p>In today's competitive digital marketplace, creating seamless customer experiences requires robust, scalable e-commerce platforms. My experience with SAP Hybris and Adobe AEM has shown how these enterprise solutions can work together to deliver exceptional results.</p>

      <h3>The Perfect Partnership</h3>
      <p>SAP Hybris (now SAP Commerce) excels at handling complex commerce scenarios, while Adobe AEM provides powerful content management capabilities. Together, they create a comprehensive digital experience platform.</p>

      <h3>Architecture Patterns</h3>
      <p>When designing these solutions, I follow several key principles:</p>
      <ul>
        <li>Microservices architecture for scalability</li>
        <li>API-first design for flexibility</li>
        <li>Headless commerce for omnichannel experiences</li>
        <li>Cloud-native deployment for reliability</li>
      </ul>

      <h3>Real-World Implementation</h3>
      <p>At Spark New Zealand, we successfully implemented this stack to serve millions of customers, handling peak loads during major sales events without performance degradation.</p>
    `,
    author: "Vaibhav Ajmera",
    date: "2024-02-20",
    category: "E-commerce",
    tags: ["SAP Hybris", "Adobe AEM", "E-commerce", "Enterprise Architecture"],
    readTime: "12 min read",
    featured: false
  },
  {
    id: 3,
    title: "AWS Certification Journey: From Cloud Practitioner to Solutions Architect",
    excerpt: "My path through AWS certifications and practical insights on leveraging cloud services for enterprise digital transformation projects.",
    content: `
      <p>Earning AWS certifications has been instrumental in my journey as a Digital Architect. Each certification has provided deep insights into cloud services and best practices that I apply in real-world projects.</p>

      <h3>The Learning Path</h3>
      <p>I started with the Cloud Practitioner certification to build foundational knowledge, then progressed through Associate and Professional levels:</p>
      <ul>
        <li>AWS Certified Cloud Practitioner (2021)</li>
        <li>AWS Certified Developer - Associate (2022)</li>
        <li>AWS Certified Solutions Architect - Professional (2023)</li>
        <li>AWS Certified DevOps Engineer - Professional (2023)</li>
      </ul>

      <h3>Practical Applications</h3>
      <p>These certifications aren't just theoretical—I've applied the knowledge in designing scalable, secure, and cost-effective solutions for telecommunications and e-commerce platforms.</p>

      <h3>Study Tips</h3>
      <p>For those pursuing AWS certifications, I recommend hands-on practice, real-world projects, and understanding the "why" behind architectural decisions, not just the "how".</p>
    `,
    author: "Vaibhav Ajmera",
    date: "2024-03-10",
    category: "Cloud Computing",
    tags: ["AWS", "Certification", "Cloud Architecture", "Professional Development"],
    readTime: "6 min read",
    featured: true
  },
  {
    id: 4,
    title: "Agile Digital Architecture: Balancing Innovation with Stability",
    excerpt: "How to implement agile methodologies in enterprise architecture while maintaining system stability and security requirements.",
    content: `
      <p>Implementing agile methodologies in enterprise architecture presents unique challenges. How do you move fast and innovate while maintaining the stability and security that enterprise systems require?</p>

      <h3>The Challenge</h3>
      <p>Traditional enterprise architecture favors stability and thorough planning, while agile methodologies emphasize rapid iteration and responsiveness to change. Finding the right balance is crucial.</p>

      <h3>Agile Architecture Principles</h3>
      <ul>
        <li>Design for change, not just current requirements</li>
        <li>Implement minimal viable architecture (MVA)</li>
        <li>Use automated testing and continuous integration</li>
        <li>Embrace evolutionary design patterns</li>
      </ul>

      <h3>Lessons from the Field</h3>
      <p>Leading Agile transformation at Spark New Zealand taught me that success comes from cultural change as much as technical practices. Teams need to feel empowered to make architectural decisions within clear guidelines.</p>
    `,
    author: "Vaibhav Ajmera",
    date: "2024-04-05",
    category: "Architecture",
    tags: ["Agile", "Digital Architecture", "Enterprise", "Team Leadership"],
    readTime: "10 min read",
    featured: false
  }
];

export const blogCategories = [
  "All",
  "Digital Architecture",
  "Cloud Computing",
  "E-commerce",
  "Architecture",
  "Professional Development"
];