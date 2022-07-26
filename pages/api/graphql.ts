import { ApolloServer } from "apollo-server-micro";
import Cors from "micro-cors";

import { typeDefs } from "../../graphql/typeDefs";
import { resolvers } from "../../graphql/resolvers";
import { context } from "../../graphql/context";
import { NextApiHandler } from "next";
import { RequestHandler } from "micro";

const cors = Cors();

export const config = {
  api: {
    bodyParser: false,
  },
};

const apolloServer = new ApolloServer({ typeDefs, resolvers, context });
const startServer = apolloServer.start();

const handler: NextApiHandler = async (req, res) => {
  if (req.method === "OPTIONS") {
    return res.end();
  }

  await startServer;
  const apolloHandler = await apolloServer.createHandler({
    path: "/api/graphql",
  });
  return apolloHandler(req, res);
};

export default cors(handler as RequestHandler);
