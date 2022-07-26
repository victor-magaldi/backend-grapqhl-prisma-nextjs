import { Resolvers } from "./resolvers-types";

export const resolvers: Resolvers = {
  Query: {
    links: async (parent, args, ctx) => {
      const results = await ctx.prisma.link.findMany();

      return results;
    },
  },
};
