import { Gated } from 'gates.wtf';

const demo = () => {
  /* API call
    Endpoint: https://goweather.herokuapp.com/weather/Bogota
    JSON selector: description
    Expected response: Partly cloudy
  */

  return (
    <Gated gateId="16">
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/Vhh_GeBPOhs"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </Gated>
  );
};

export default demo;
