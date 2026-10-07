import type { Category } from "./types";

export default function LinkSection({ title, links }: Category) {
    return (
        <section>
            <h2>{title}</h2>
            <ul>
                {links.map((link) => (
                    <li key={link.url}>
                        <a href={link.url} target="_blank"
                        rel="noopener noreferrer">{link.label}</a>
                    </li>
                ))}
            </ul>
        </section>
    );
}
