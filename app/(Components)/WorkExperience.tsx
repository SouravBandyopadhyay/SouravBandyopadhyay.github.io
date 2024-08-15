export default function WorkExperienceSection() {
  return (
    <section
      id="work-experience"
      className="w-full py-12 md:py-24 lg:py-32 bg-muted"
    >
      <div className="container px-4 md:px-6 flex flex-col items-center justify-center space-y-8">
        <div className="space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter">
            Work Experience
          </h2>
          <p className="max-w-[700px] text-muted-foreground">
            Here is an overview of my professional journey, highlighting the key
            roles and responsibilities I&apos;ve undertaken.
          </p>
        </div>
        <div className="flex flex-col space-y-8">
          <WorkExperienceItem
            companyName="Detroit Software Consultant India Pvt Ltd."
            position="Software Developer"
            period="April 2023 - Present"
            responsibilities={[
              "Developing and maintaining web applications using React and Node.js.",
              "Collaborating with cross-functional around the globe on day-to-day teams to define, design, and ship new features.",
              "Implementing responsive UI/UX designs and ensuring optimal performance.",
              "Responsible for building POCs and microservices for clients and internal use",
            ]}
          />
        </div>
      </div>
    </section>
  );
}

interface WorkExperienceItemProps {
  companyName: string;
  position: string;
  period: string;
  responsibilities: string[];
}
function WorkExperienceItem({
  companyName,
  position,
  period,
  responsibilities,
}: WorkExperienceItemProps) {
  return (
    <div className="space-y-2">
      <h3 className="text-2xl font-semibold">{companyName}</h3>
      <div className="flex flex-col md:flex-row md:items-center md:justify-between text-sm text-muted-foreground">
        <span>{position}</span>
        <span>{period}</span>
      </div>
      <ul className="list-disc list-inside space-y-2 text-muted-foreground">
        {responsibilities.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
