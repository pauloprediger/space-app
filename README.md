# 🚀 Projeto: Galeria de Fotos do Espaço

Este projeto é uma aplicação React que exibe uma galeria de fotos do espaço. Ele permite que os usuários filtrem, visualizem fotos em zoom e marquem suas imagens favoritas. O layout é estilizado com **styled-components** para oferecer uma experiência visual moderna e responsiva.

---

## 🖥️ Tecnologias Utilizadas

- **React**: Biblioteca JavaScript para construir interfaces de usuário.
- **Styled-components**: Biblioteca para estilização de componentes React com CSS-in-JS.
- **JavaScript**: Linguagem principal para lógica do aplicativo.
- **JSON**: Para armazenar os dados das fotos.
- **Webpack/Vite** (assumido como empacotador do projeto).

---
## 🧩 Funcionalidades

### 1. **Exibição de Fotos**
   - Galeria responsiva com imagens carregadas a partir de um arquivo JSON.

### 2. **Filtragem de Fotos**
   - Filtragem por:
     - **Título**: Busca baseada no título da foto.
     - **Tag**: Categorias específicas.

### 3. **Favoritar Fotos**
   - Os usuários podem marcar/desmarcar fotos como favoritas.

### 4. **Modal de Zoom**
   - Clicar em uma foto exibe uma visualização ampliada com mais detalhes.

### 5. **Layout Responsivo**
   - Design adaptável para diferentes tamanhos de tela.

---

## 📦 Como Rodar o Projeto

### Pré-requisitos
- Node.js (v16 ou superior)
- Gerenciador de pacotes npm ou yarn

### Passo a Passo

1. **Clone o repositório:**
   ```bash
   git clone <url-do-repositorio>
   cd <nome-do-repositorio>

2. **Instale as dependências:**
    ```bash
    npm install
    # ou
    yarn install

3. **Execute o projeto:**
    ```bash
    npm start
    # ou
    yarn start


## ✨ Componentes

### **1. Cabecalho**
- Exibe o campo de busca e permite filtrar fotos por título.

### **2. BarraLateral**
- Oferece opções de filtro por tags.

### **3. Galeria**
- Lista as fotos da galeria com base nos filtros aplicados.

### **4. ModalZoom**
- Mostra a foto em tamanho ampliado com a opção de marcar como favorita.

### **5. Banner**
- Apresenta um banner estilizado com uma mensagem de boas-vindas.

### **6. Rodape**
- Informações adicionais no final da página.

---

## 🌌 Personalização

- **Fotos**: Altere o arquivo `fotos.json` para adicionar, remover ou modificar as fotos exibidas na galeria.
- **Estilos**: Os estilos são definidos com **styled-components** e podem ser ajustados nos componentes ou adicionados no `EstilosGlobais.jsx`.

