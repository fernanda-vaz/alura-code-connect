# Code Connect

**Code Connect** é um projeto desenvolvido durante o curso da **Alura**: Next.js: Construindo com Server Actions, e aqui estão todas as informações necessárias para configurar e executar a aplicação.

---

## 🚀 Começando

Siga as instruções abaixo para configurar o projeto em sua máquina local.

### Pré-requisitos

Antes de começar, certifique-se de ter instalado:

- [Node.js](https://nodejs.org/) (v18 ou superior)
- [Docker](https://www.docker.com/) (para o banco de dados PostgreSQL)
- [Git](https://git-scm.com/)

### Clonando o Repositório

Clone o repositório do projeto usando o seguinte comando:

```bash
git clone git@github.com:fernanda-vaz/alura-code-connect.git
```

### Instalando as Dependências

```bash
cd alura-code-connect
npm install
```

### Configuração do Banco de Dados

1. Certifique-se de que o Docker está em execução.

2. Inicie o container do PostgreSQL com o seguinte comando:

```bash
docker compose up -d
```

3. Execute as migrations e o seeder para configurar o banco de dados:

```bash
npx prisma generate && npx prisma migrate dev && npx prisma db seed
```

### Executando a Aplicação:

```bash
npm run dev
```

### 🛠️ Tecnologias Utilizadas

- **Next.js**: Framework React para renderização do lado do servidor (SSR) e geração de sites estáticos (SSG).

- **Prisma**: ORM para Node.js e TypeScript, utilizado para gerenciar o banco de dados PostgreSQL.

- **PostgreSQL**: Banco de dados relacional para armazenar posts, usuários e comentários.

- **Docker**: Para containerização e execução do banco de dados.

- **CSS Modules**: Para estilização modularizada dos componentes.

### 📝 Licença
Este projeto está licenciado sob a licença MIT. Consulte o arquivo LICENSE para mais detalhes.