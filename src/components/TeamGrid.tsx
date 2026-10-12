import { team } from "@/content/site";
import Photo from "@/components/Photo";
import TeamIcon from "@/components/TeamIcon";

export default function TeamGrid({ limit }: { limit?: number }) {
  const members = typeof limit === "number" ? team.slice(0, limit) : team;
  return (
    <ul className={`team-grid${limit ? " team-grid-compact" : ""}`}>
      {members.map((member) => (
        <li key={member.name}>
          <div className="team-photo">
            <Photo base={member.base} alt={`Portrait of ${member.name}, ${member.role.toLowerCase()}`} ratio="4/5" sizes="(min-width: 1000px) 22vw, (min-width: 640px) 45vw, 92vw" className="arch" />
            <span className="team-icon" aria-hidden="true"><TeamIcon id={member.icon} /></span>
          </div>
          <h3>{member.name}</h3>
          <p className="role">{member.role}</p>
          <p className="specialty">{member.specialty}</p>
          <p className="muted">{member.bio}</p>
        </li>
      ))}
    </ul>
  );
}
