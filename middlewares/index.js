const env = process.env.NODE_ENV;
// ('static');
const handlersList = [env === 'development' && 'logger', 'errorsHandler', 'bodyParser'];

module.exports = handlersList.reduce((acc, handler) => {
  return handler ? [...acc, require(`./${handler}`)] : acc;
}, []);
