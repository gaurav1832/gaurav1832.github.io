import AchievementRow from "@/components/AchievementRow";
import Label from "@/components/Label";
import ProjectCard from "@/components/ProjectCard";
import { skills } from "@/data/data";

export default function ProjectsPage() {
  return (
    <>
      {/* Projects */}
      <section style={{ marginBottom: 40 }}>
        <Label style={{ marginTop: 0 }}>Projects</Label>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 12,
          }}
        >
          <ProjectCard
            title="Cl_AI_mate"
            tech="Python · Prophet · AI/ML · Streamlit"
            desc="Time series forecasting for climate change — 90%+ accuracy for heatwaves & AQI in Telangana."
            href="https://github.com/HarshHrs24/Team-cl_AI_mate"
            img="https://camo.githubusercontent.com/19bfb03c8edd4d6da2a77a40f80a65d612afa10d234bd2340273a53e9b1b2abe/68747470733a2f2f64726976652e676f6f676c652e636f6d2f75633f6578706f72743d766965772669643d314276585973637878426237714e7a65484b4e416f737454716a6834796d5f4f73"
          />
          <ProjectCard
            title="AutoInbox"
            tech="React · Node · Google API · BullMQ"
            desc="Email management app with AI-driven analysis and automated replies via Google & Outlook APIs."
            href="https://github.com/gaurav1832/autoinbox"
            img="https://github.com/gaurav1832/autoinbox/blob/main/src/utils/Screenshot%202026-08-15%20at%2013.23.18.png?raw=true"
          />
        </div>
        <br />
        <br />
        <Label style={{ marginTop: 0 }}>Publications</Label>

        <div
          style={{
            marginTop: 12,
            background: "#fafafa",
            border: "1px solid #ebebeb",
            borderRadius: 8,
            padding: "14px 16px",
          }}
        >
          <p style={{ fontSize: 15, fontWeight: 500, margin: "0 0 2px" }}>
            Multifaceted Analysis of Climate Trends and Air Quality in Indian
            Metropolises: A Machine Learning and Time Series Forecasting
            Approach
          </p>
          <p style={{ fontSize: 14, color: "#aaa", margin: "0 0 6px" }}>
            Machine Intelligence, Tools &amp; Applications — Springer Conference
            Paper
          </p>
          <a
            target="_blank"
            href="https://link.springer.com/chapter/10.1007/978-3-031-65392-6_7"
            style={{ fontSize: 12, color: "#555" }}
          >
            <br />
            <img
              height={24}
              width={96}
              src="https://ida2023.org/wp-content/uploads/2020/11/springer-logo.png"
              alt=""
            />
            <br />
            View on Springer →
          </a>
        </div>
      </section>

      {/* Skills */}
      <section style={{ marginBottom: 8 }}>
        <Label>Skills</Label>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
          {skills.map((s: string) => (
            <span
              key={s}
              style={{
                fontSize: 14,
                padding: "4px 10px",
                borderRadius: 20,
                background: "#f5f5f5",
                border: "1px solid #e8e8e8",
                color: "#444",
              }}
            >
              {s}
            </span>
          ))}
        </div>
      </section>

      {/* Achievements */}
      <section style={{ marginTop: 28 }}>
        <Label>Achievements</Label>
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          <AchievementRow
            title="Academic Grand Challenge on Climate Change"
            desc="Winner among 7,500+ teams · Prize ₹5,00,000"
            link="https://www.linkedin.com/posts/gaurav1832_winners-taim-hackathon-activity-7043313463275728896-_LZx?utm_source=share&utm_medium=member_desktop&rcm=ACoAADOQcD8BwRD-dSJVZHJNskTXGpHnjqKMCGs"
          />
          <AchievementRow
            title="Amazon ML Summer School"
            desc="Top 3,500 selected out of thousands"
            link="https://www.linkedin.com/posts/gaurav1832_amazon-amazonmlsummerschool-machinelearning-activity-7108970319020777472-bw7p?utm_source=share&utm_medium=member_desktop&rcm=ACoAADOQcD8BwRD-dSJVZHJNskTXGpHnjqKMCGs"
          />
        </div>
      </section>
    </>
  );
}
