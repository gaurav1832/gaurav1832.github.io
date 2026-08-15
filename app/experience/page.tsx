import Label from "@/components/Label";
import TimelineItem from "@/components/TimelineItem";

export default function ExperiencePage() {
  return (
    <section style={{ marginBottom: 40 }}>
      <Label style={{ marginTop: 0 }}>Experience</Label>
      <TimelineItem
        role="Assistant Manager (Systems)"
        org="State Bank of India"
        period="Jul 2025 – Present"
        bullets={[
          "Developed enterprise-grade Angular components and customer-facing journeys for YONO Business.",
          "Integrated secure REST APIs and collaborate with backend, QA, UX, and business teams.",
          "Participation in code reviews, debugging, defect resolution, and performance optimization.",
          "Apply skills such as development, refactoring, and documentation, validating outputs through peer review and secure coding standards.",
        ]}
      />
      <br />
      <TimelineItem
        role="Software Developer"
        org="123 Of AI"
        period="Sep 2024 – Jul 2025"
        bullets={[
          "Built full-stack applications using Next.js, Node.js, and Azure.",
          "Containerized services with Docker and deployed to Azure using CI/CD pipelines.",
          "Resolved production issues and delivered scalable features.",
        ]}
      />

      <br />

      <Label style={{ marginTop: 28 }}>Education</Label>
      <TimelineItem
        role="B.Tech, Computer Science And Engineering · CGPA 8.06"
        org="Vellore Institute of Technology, Bhopal"
        period="2020 – 2024"
        bullets={[]}
      />
    </section>
  );
}
