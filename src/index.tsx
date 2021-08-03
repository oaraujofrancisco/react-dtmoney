import { createServer, Model } from "miragejs";
import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";

createServer({
  models: {
    transaction: Model,
  },
  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: "teste 1",
          type: "deposit",
          category: "teste",
          amount: 5000,
          createAt: new Date("2021-02-02 01:00:00"),
        },
        {
          id: 2,
          title: "teste 2",
          type: "withdraw",
          category: "teste",
          amount: 3000,
          createAt: new Date("2021-02-10 10:00:00"),
        },
      ],
    });
  },
  routes() {
    this.namespace = "api";

    this.get("/transactions", () => {
      return this.schema.all("transaction");
    });

    this.post("/trasactions", (schema, request) => {
      const data = JSON.parse(request.requestBody);

      return schema.create("transaction", data);
    });
  },
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
