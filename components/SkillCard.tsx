interface SkillCardProps {
  title: string;
  skills: string[];
}

export default function SkillCard({ title, skills }: SkillCardProps) {
  return (
    <div className="bg-white dark:bg-gray-800/40 border border-gray-100 dark:border-gray-700/60 rounded-xl shadow-sm p-6 mb-4 hover:shadow-md transition-shadow duration-200">
      <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3 tracking-tight">
        {title}
      </h3>
      
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <span 
            key={index} 
            className="inline-block px-3 py-1 bg-blue-50 dark:bg-blue-950/40 text-blue-700 dark:text-blue-400 text-xs font-semibold rounded-full border border-blue-100/60 dark:border-blue-900/40 tracking-wide"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}
