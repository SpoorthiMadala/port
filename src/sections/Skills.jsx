export default function Skills() {
  const skills = ["React","Node","MongoDB","Docker","Python","AI/ML"];

  return (
    <section id="skills" className="py-24 text-center">
      <h2 className="text-4xl mb-10">Skills</h2>
      <div className="flex flex-wrap justify-center gap-6">
        {skills.map(skill => (
          <div key={skill}
            className="px-6 py-3 border border-white/10
            rounded-xl hover:border-neon transition">
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}
