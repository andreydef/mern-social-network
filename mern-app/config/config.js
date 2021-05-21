const config = {
  env: process.env.NODE_ENV || 'development',
  port: process.env.PORT || 3000,
  jwtSecret: process.env.JWT_SECRET || "secret",
  mongoUri: 'mongodb+srv://test:1234@cluster0.mfrb1.mongodb.net/Test?retryWrites=true&w=majority'
}

export default config
