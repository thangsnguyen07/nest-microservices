export default () => ({
  auth: {
    domain: process.env.AUTH0_DOMAIN,
    audience: process.env.AUTH0_AUDIENCE,
    clientId: process.env.AUTH0_ONE_CLIENT_ID,
    clientSecret: process.env.AUTH0_CLIENT_SECRET,
    m2mClientId: process.env.AUTH0_M2M_CLIENT_ID,
    m2mClientSecret: process.env.AUTH0_M2M_CLIENT_SECRET,
  },
})
