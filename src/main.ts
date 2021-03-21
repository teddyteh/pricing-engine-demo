import * as Koa from "koa";
import * as koaBody from "koa-body";
import * as KoaRouter from "@koa/router";
import { RegisterRoutes } from "../build/routes";

const port = process.env.PORT || 3000;

const app = new Koa();

const router = new KoaRouter();
RegisterRoutes(router);

app
  .use(koaBody())
  .use(router.routes())
  .use(router.allowedMethods());

app.listen(port, () =>
  console.log(`Listening at http://localhost:${port}`)
);