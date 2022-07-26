import { ApolloServer } from "apollo-server-micro";
import Cors from "micro-cors";

import { typeDefs } from "../../graphql/typeDefs";
import { resolvers } from "../../graphql/resolvers";
import { context } from "../../graphql/context";

const cors = Cors();

export const config = {
  api: {
    bodyParser: false,
  },
};

const apolloServer = new ApolloServer({ typeDefs, resolvers, context });
