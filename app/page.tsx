import ProjectList from "@/components/ProjectList";

const projects = [
  {
    title: "Weather API Application",
    description:
      "A JavaScript application that fetches live weather data from an external API and displays current conditions with dynamic UI updates.",
    technologies: ["JavaScript", "HTML", "CSS", "Weather API"],
    link: "https://github.com/sterlingwebsite/WDD330FinalProject",
  },
  {
    title: "Vite + Render Deployment",
    description:
      "A modern frontend project built with Vite and deployed on Render. Features modular JavaScript, optimized builds, and fast hosting.",
    technologies: ["Vite", "JavaScript", "Render"],
    link: "https://github.com/sterlingwebsite/WDD330",
  },
];

export default function Home() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-12 w-full">
      
      <section className="text-center py-8 md:py-12 border-b border-gray-100 mb-10">
        <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 mb-4 sm:text-5xl">
          My Portfolio
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
          I'm a full‑stack developer learning Next.js and React. Here are some of
          the projects I've built recently, showcasing my experience with modern
          web technologies and deployment workflows.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-6 tracking-tight text-center md:text-left">
          Featured Projects
        </h2>
        <ProjectList projects={projects} />
      </section>
      
    </main>
  );
}
