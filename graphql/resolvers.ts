export const resolvers = {
  Query: {
    links: async (parent, args, ctx) => await ctx.prisma.link.findMany();
  },
};
