interface SkillCardProps {
  title: string;
  skills: string[];
}

export default function SkillCard({ title, skills }: SkillCardProps) {
  return (
    <div className="bg-white border border-gray-100 rounded-xl shadow-sm p-6 mb-4 hover:shadow-md transition-shadow duration-200">
      <h3 className="text-lg font-bold text-gray-900 mb-3 tracking-tight">
        {title}
      </h3>
      
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <span 
            key={index} 
            className="inline-block px-3 py-1 bg-blue-50 text-blue-700 text-xs font-semibold rounded-full border border-blue-100/60 tracking-wide"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}
