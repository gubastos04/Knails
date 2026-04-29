import 'dotenv/config';
import app from './app.js';
import connectDB from './config/database.js';

// definindo a porta do servidor, utilizando a variável de ambiente PORT ou o valor padrão 3000
const PORT = process.env.PORT || 3000;

// conectando ao banco de dados antes de iniciar o servidor
connectDB();

// iniciando o servidor e ouvindo na porta definida
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});