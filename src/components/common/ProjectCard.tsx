import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import type { Project } from "@/types/content";
import { projectCategoryLabel, projectStatusLabel } from "@/data/projects";
import { ImageWithFallback } from "./ImageWithFallback";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group bg-paper border border-border hover:border-ink rounded transition-colors overflow-hidden">
      <Link to={`/projects/${project.slug}`} className="block">
        <ImageWithFallback
          src={project.heroImage}
          alt=""
          aspect="3/2"
          className="group-hover:brightness-95 transition-[filter]"
        />
      </Link>
      <div className="p-6">
        <div className="flex items-center gap-2 mb-3 text-xs">
          <span className="chip-green">
            {projectCategoryLabel[project.category]}
          </span>
          <span className="chip">{projectStatusLabel[project.status]}</span>
        </div>
        <h3 className="text-lg font-semibold leading-snug">
          <Link
            to={`/projects/${project.slug}`}
            className="hover:text-brand-green-dark"
          >
            {project.title}
          </Link>
        </h3>
        <p className="mt-2 text-sm text-text-muted leading-relaxed">
          {project.summary}
        </p>
        <Link
          to={`/projects/${project.slug}`}
          className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-ink hover:text-brand-green-dark"
        >
          View project
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </Link>
      </div>
    </article>
  );
}
