import ProjectInfos from "../../components/projects/ProjectInfos";
import { getProjectBySlug, projects } from "../../data/projects";

export function generateStaticParams() {
    return projects.map((project) => ({ slug: project.slug }));
}

export function generateMetadata({ params }) {
    const project = getProjectBySlug(params.slug);

    return {
        title: project ? `${project.title} | Project Infos` : "Project Infos",
    };
}

export default function ProjectPage({ params }) {
    const project = getProjectBySlug(params.slug);

    return <ProjectInfos project={project} />;
}