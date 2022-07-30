module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'ff4e55bb8cecd3288c5d030b860f6d4d'),
  },
});
