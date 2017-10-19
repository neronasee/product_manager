module.exports = {
  port: 8000,
  publicRoot: `${process.cwd()}/client/build`,
  mongoose: {
    uri: 'mongodb://localhost/products',
    options: {
      useMongoClient: true,
    },
  },
};
