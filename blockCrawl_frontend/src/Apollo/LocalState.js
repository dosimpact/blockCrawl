export const defaults = {
  isLoggedIn: false,
};
export const resolvers = {
  Mutation: {
    logUserIn: (_, { token }, { cache }) => {
      console.log("Try LocalState Management log user in ");
      cache.writeData({
        data: {
          isLoggedIn: true,
        },
      });
    },
    logUserOut: (_, __, { cache }) => {
      console.log("Try LocalState Management log user out ");
      cache.writeData({
        data: {
          isLoggedIn: false,
        },
      });
    },
  },
};
