interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  link?: string;
}
        
export default function ProjectCard({ title, description, technologies, link }: ProjectCardProps) {
  return (
    <article className="flex flex-col justify-between p-6 bg-white border border-gray-100 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200">
      <div>
        <h3 className="text-xl font-bold text-gray-900 mb-2 tracking-tight">
          {title}
        </h3>
        
        <p className="text-gray-600 text-sm leading-relaxed mb-4">
          {description}
        </p>
        
        <div className="flex flex-wrap gap-1.5 mb-6">
          {technologies.map((tech) => (
            <span 
              key={tech} 
              className="inline-block px-2.5 py-0.5 bg-gray-100 text-gray-700 text-xs font-medium rounded-md"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {link && (
        <div className="pt-2 border-t border-gray-50">
          <a 
            href={link} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex items-center text-sm font-semibold text-blue-600 hover:text-blue-800 transition-colors"
          >
            View Project 
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      )}
    </article>
  );
}
