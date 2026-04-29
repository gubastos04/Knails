import mongoose from 'mongoose';
// função para conectar ao banco de dados MongoDB utilizando o Mongoose

// a URI do MongoDB é obtida da variável de ambiente MONGO_URI, que deve ser definida no arquivo .env
// a função é assíncrona e utiliza try/catch para lidar com erros de conexão

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    process.exit(1);
  }
};

// exportando a função de conexão para ser usada em outros arquivos, como o server.js
export default connectDB;