import { mongo } from "./infra/mongodb";
import { app } from "./infra/server";
import { HydrateFactory } from "./main/factories/useCases/hydrate-factory";

(async () => {
  await mongo.connect(
    (process.env.MONGO as string) || "mongodb://db:27017/vaga-backend"
  );
  await HydrateFactory().hydrate();
  const port = process.env.PORT || 3000;
  app.listen(port);
  console.log("Server running on port " + port);
})();
