import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { profile } from "@/content/site-data";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/projects", label: "Projects" },
  { to: "/experience", label: "Experience" },
  { to: "/writing", label: "Writing" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link to="/" className="font-display text-lg font-semibold tracking-tight text-foreground">
          Abhijeet<span className="text-primary">.</span>
        </Link>
        <nav className="hidden gap-1 text-sm md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="rounded-md px-3 py-1.5 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              activeProps={{ className: "text-foreground bg-muted" }}
              activeOptions={{ exact: link.to === "/" }}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <a
          href={`mailto:${profile.email}`}
          className="hidden rounded-full border border-primary/40 bg-primary/10 px-4 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-primary/20 md:inline-flex"
        >
          Get in touch
        </a>
      </div>
      <nav className="flex gap-1 overflow-x-auto px-4 pb-3 text-sm md:hidden">
        {navLinks.map((link) => (
          <Link
            key={link.to}
            to={link.to}
            className="whitespace-nowrap rounded-md px-3 py-1.5 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            activeProps={{ className: "text-foreground bg-muted" }}
            activeOptions={{ exact: link.to === "/" }}
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border/60">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-10 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between">
        <p>
          © {new Date().getFullYear()} {profile.name}. Built in {profile.location}.
        </p>
        <div className="flex gap-4">
          <a href={profile.links.github} className="hover:text-foreground">
            GitHub
          </a>
          <a href={profile.links.linkedin} className="hover:text-foreground">
            LinkedIn
          </a>
          <a href={`mailto:${profile.email}`} className="hover:text-foreground">
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">{children}</main>
      <SiteFooter />
    </div>
  );
}
