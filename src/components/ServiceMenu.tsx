import { Palette, Scissors, Users } from "lucide-react";
import { serviceGroups } from "@/content/site";

const icons = { scissors: Scissors, palette: Palette, users: Users };
const money = (n: number, from?: boolean) => <>{from && <span className="from">from</span>}${n}</>;

export default function ServiceMenu() {
  return (
    <div className="menu">
      {serviceGroups.map((group) => {
        const Icon = icons[group.icon];
        return (
          <article key={group.id} className="menu-group">
            <h3><Icon size={22} strokeWidth={1.5} aria-hidden="true" />{group.title}</h3>
            <p className="muted">{group.blurb}</p>
            <ul>
              {group.items.map((service) => (
                <li key={service.name} className="row">
                  <span>{service.name}{service.note && <small>{service.note}</small>}</span>
                  <i className="leader" aria-hidden="true" />
                  <span className="price">{money(service.price, service.from)}</span>
                </li>
              ))}
            </ul>
          </article>
        );
      })}
    </div>
  );
}
