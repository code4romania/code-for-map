const req = require.context('./assets/svg', true, /\.svg$/)

export default req.keys()
