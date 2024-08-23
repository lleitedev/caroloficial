import { aboutInfosData } from "../constants";
import { Gradient } from "./design/Services";
import Heading from "./Heading";
import { InfoAbout } from "./InfoABout";
import Section from "./Section";

const Services = () => {
  return (
    <Section id="how-to-use">
      <div className="container">
        <Heading
          title="Sobre a Carol."
          text="Conheça uma pequena parte da minha grande historia."
        />

        {aboutInfosData.map(item => (
          <InfoAbout num={item.id} texto={item.texto} key={item.id} img={item.foto}/>
        ))}

        <Gradient />
      </div>
    </Section>
  );
};

export default Services;
