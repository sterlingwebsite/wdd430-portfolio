import SkillCard from "@/components/SkillCard";

export default function About() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-12 w-full">
      <h2 className="text-3xl font-extrabold text-gray-900 mb-6 tracking-tight">
        About Me
      </h2>

      <div className="space-y-4 text-gray-600 text-lg leading-relaxed mb-10">
        <p>
          Hi, I&apos;m Sterling Steele — a full‑stack developer learning modern
          web technologies like Next.js, React, TypeScript, and Tailwind CSS.
          I enjoy building clean, efficient applications and exploring new tools
          that make development faster and more enjoyable.
        </p>

        <p>
          I have experience with JavaScript, HTML, CSS, API integration, GitHub
          Pages deployment, and Vite + Render hosting. This portfolio is part of
          my WDD 430 coursework, demonstrating reusable components, server
          components, file‑based routing, and deployment workflows.
        </p>
      </div>

      <section className="border-t border-gray-100 pt-8 mb-10">
        <h3 className="text-2xl font-bold mb-6 text-gray-900 tracking-tight">
          Technical Skills
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <SkillCard 
            title="Languages & Frameworks" 
            skills={["Next.js", "React", "TypeScript", "JavaScript", "HTML", "CSS"]} 
          />
          
          <SkillCard 
            title="Tools & Platforms" 
            skills={["Tailwind CSS", "GitHub Pages", "Vite", "Render hosting", "API Integration"]} 
          />
        </div>
      </section>

      <p className="text-base italic text-gray-500 border-l-2 border-blue-500 pl-4 py-1">
        Thanks for visiting — feel free to explore my projects on the home page.
      </p>
    </main>
  );
}
