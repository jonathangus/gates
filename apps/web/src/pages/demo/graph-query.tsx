import { Gated } from 'gates.wtf';

const demo = () => {
  /* API call
    Endpoint: https://api.thegraph.com/subgraphs/name/ensdomains/ens
    query: {   domains(where: {name:"morke.eth"}) {     resolvedAddress {       id     }   } }
    selector: domains[0].resolvedAddress.id
    result: 0xf3476b36fc9942083049c04e9404516703369ef3
  */

  return (
    <Gated gateId="23">
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
