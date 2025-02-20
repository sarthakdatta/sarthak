import ServiceUi from "../ui/ServiceUi";
import Heading from "../ui/Heading";

export default function Services() {
  const expertiseItems = [
    "Web Development",
    "App Development",
    "API Development",
    "Large Language Models",
  ];

  const toolBoxItems = [
    "JavaScript",
    "Python",
    "NodeJS",
    "ReactJS",
    "TailwindCSS",
  ];

  return (
    <section id="services" className="my-[10%]" aria-label="services">
      <Heading title="services" />
      <div className="space-y-14">
        <ServiceUi
          title="my expertises."
          description="I specialize in crafting visually appealing and user-friendly web experiences, combining backend integration, front-end development, and innovative solutions to create seamless digital products."
          items={expertiseItems.map(item => (
            <li className="list-none group text-cream-600 hover:text-black transition-transform duration-300 transform hover:scale-105">{item}</li>
          ))}
        />
        <ServiceUi
          title="my digital tool box."
          description="My go to tech stack to make any projects happen. I am always eager of learning more about my current stack, and new tech that could expand my horizons."
          items={toolBoxItems.map(item => (
            <li className="list-none group text-cream-600 hover:text-black transition-transform duration-300 transform hover:scale-105">{item}</li>
          ))}
        />
      </div>
    </section>
  );
}
