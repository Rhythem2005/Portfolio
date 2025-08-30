import { Timeline } from "../components/Timeline";
import { experiences } from "../constants";

const Experiences = () => {
  return (
    <section className="w-full c-space py-20 md:py-32">
      <Timeline data={experiences} />
    </section>
  );
};

export default Experiences;