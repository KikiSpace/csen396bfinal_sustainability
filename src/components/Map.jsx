import Section from "./Section";
import Heading from "./Heading";
import Covid19 from "./map/Covid19";
const Map = () => {
  return (
    <div>
      <Section id="map">
        <div className="container relative z-2">
          <Heading
            className="md:max-w-md lg:max-w-2xl"
            title="Toxic Heat Map Over Years"
          />
          <Covid19></Covid19>
        </div>
      </Section>
    </div>
  );
};

export default Map;
