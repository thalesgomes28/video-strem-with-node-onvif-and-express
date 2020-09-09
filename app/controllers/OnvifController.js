

const onvif = require("node-onvif");

export default {
  async showCamera({req, res, params}) {
      console.log("==================\n IP camera solicitado:", params.id, "\n==================")
    const addressCamera = params.id;
    console.log("==================\n varriáveis de ambiente:", process.env.ADMIN, "\n==================")
    let device = new onvif.OnvifDevice({
      xaddr: addressCamera,
      user: process.env.ADMIN,
      pass: process.env.PASSWORD,
    });
    console.log("==================\n Device Created:", device, "\n==================")
    // Initialize 
    device
      .init()
      .then(() => {
        // Get the UDP stream URL
        let url = device.getUdpStreamUrl();
        console.log('URL:===============', url)
        var resultado =
          url.substr(0, 7)  + url.substr(7, 300);
        console.log(resultado);
        stream = new Stream({
          name: "name",
          streamUrl: resultado,
          wsPort: 9000 + i,
        });

        //console.log("URL :"+url);
      })
      .catch((error) => {
        console.error(error);
      });

    return res.json("A sua requisição será processada");
  },
};
