import {
	siReact,
	siNextdotjs,
	siTypescript,
	siTailwindcss,
	siShadcnui,
	siRedux,
	siNodedotjs,
	siExpress,
	siPrisma,
	siPostgresql,
	siMysql,
	siDocker,
	siJenkins,
	siCoolify,
	siTraefikproxy,
	siSonarqubeserver,
	siPostman,
	siGit,
	siFigma,
	siStripe,
} from 'simple-icons';

// Only the icons actually used are imported by name so the bundle stays tiny
// (importing `* as si` pulls in the whole 3000+ icon set). Items absent from
// this map render as text only — either no brand mark (REST APIs, CI/CD) or
// simple-icons dropped/never had one (AWS, Playwright).
const ICONS: Record<string, string> = {
	React: siReact.path,
	'Next.js': siNextdotjs.path,
	TypeScript: siTypescript.path,
	'Tailwind CSS': siTailwindcss.path,
	ShadCN: siShadcnui.path,
	Redux: siRedux.path,
	'Node.js': siNodedotjs.path,
	'Express.js': siExpress.path,
	Prisma: siPrisma.path,
	PostgreSQL: siPostgresql.path,
	MySQL: siMysql.path,
	Docker: siDocker.path,
	Jenkins: siJenkins.path,
	Coolify: siCoolify.path,
	Traefik: siTraefikproxy.path,
	SonarQube: siSonarqubeserver.path,
	Postman: siPostman.path,
	Git: siGit.path,
	Figma: siFigma.path,
	Stripe: siStripe.path,
};

/** Returns the SVG path (`d`) for an item, or null for text-only items. */
export function iconPath(item: string): string | null {
	return ICONS[item] ?? null;
}
