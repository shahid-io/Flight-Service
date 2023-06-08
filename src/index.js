const express = require("express");
const { ServerConfig, Logger } = require("./config");
const apiRoutes = require("./routes");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", apiRoutes);

app.listen(ServerConfig.PORT, () => {
  console.log(
    `server started successfully\nserving at - http://localhost:${ServerConfig.PORT}`
  );
  /*
  const { Airport, City } = require("./models");
  const city = await City.findByPk(1);
  // const airport = await Airport.create({name: "Kempegodwa Airport", code: "BLR",});
  const airport = await city.createAirport({
    name: "Kempegodwa Airport",
    code: "BLR",
  });
  console.log(city);
  console.log(airport);
 
  const { Airport, City } = require("./models");
  await City.destroy({
    where: {
      id: 4,
    },
  });
 */
  // Logger.info("Successfully started server", {});
});
