

const onvif = require("node-onvif");

export default {
  async showCamera({req, res, params}) {
      console.log("==================\n IP camera solicitado:", params.id, "\n==================")
    const addressCamera =`http://${params.id}`;
    console.log("==================\n varriáveis de ambiente:", process.env.ADMIN, "\n==================")

    let device = new onvif.OnvifDevice({
      xaddr: `http://${params.id}/onvif/device_service`,
      user: process.env.ADMIN,
      pass: process.env.PASSWORD,
    });

    // Initialize 
    device.init().then((info) => {
     // console.log("")
      // Show the detailed information of the device.
      console.log(JSON.stringify(info, null, '  '));
      let url =  device.getUdpStreamUrl();
      console.log(url);
      return res.json( { url_solicitado: url} );
    }).catch((error) => {
      console.error(error);
      return res.json({erro: error})});

   
  },
};
