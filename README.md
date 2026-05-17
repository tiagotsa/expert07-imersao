# JSExpertMax Gesture Controller

## Visão Geral do Projeto

[![NPM](https://img.shields.io/npm/l/react)](https://github.com/tiagotsa/expert07-imersao/blob/main/LICENSE)

O projeto **JSExpertMax Gesture Controller** é uma demonstração avançada de como a visão computacional e o Machine Learning podem ser aplicados em aplicações web para criar experiências de usuário inovadoras e acessíveis. Desenvolvido como parte da Semana Javascript Expert 7.0, este aplicativo explora o controle de navegação de uma lista de títulos através de gestos de mão.

## Regras de Negócio e Funcionalidades

### 1. Controle de Navegação por Gestos de Mão (Lista de Títulos)

Esta seção do aplicativo permite aos usuários interagir com uma lista de conteúdo (títulos) utilizando gestos de mão capturados pela webcam. As principais regras de negócio e funcionalidades incluem:

*   **Reconhecimento de Gestos:** O sistema é capaz de identificar três gestos distintos:
    *   **Scroll Down:** Detectado quando a palma da mão está fechada (punho cerrado) ✊.
    *   **Scroll Up:** Detectado quando a palma da mão está aberta 🖐.
    *   **Clique:** Acionado por um gesto de pinça 🤏🏻, simulando um clique no elemento da interface mais próximo às coordenadas do gesto.
*   **Interação Não Intrusiva:** As mãos do usuário são desenhadas em um canvas sobreposto à interface, mas os elementos subjacentes permanecem clicáveis e interativos com o mouse, garantindo uma experiência de usuário fluida e sem bloqueios.
*   **Otimização de Eventos:** Para evitar disparos excessivos e garantir uma interação suave, o sistema implementa mecanismos de *debounce* e *throttle* para os eventos de scroll (200 ms) e clique (300 ms).
*   **Feedback Visual:** O aplicativo fornece feedback visual em tempo real, desenhando as mãos detectadas e os *landmarks* na tela, além de exibir emojis correspondentes aos gestos reconhecidos.

## Arquitetura e Tecnologias Utilizadas

O projeto é construído sobre uma base de tecnologias web modernas, com foco em performance e interatividade:

*   **Linguagem:** JavaScript (ESM)
*   **Ambiente de Execução:** Node.js
*   **Servidor de Desenvolvimento:** `browser-sync` (com opção de `http-server` para Windows)
*   **Machine Learning e Visão Computacional:**
    *   `fingerpose`: Biblioteca para reconhecimento de gestos de mão.
    *   `@tensorflow/tfjs-core` e `@tensorflow/tfjs-backend-webgl`: Core do TensorFlow.js e backend para aceleração via GPU.
*   **Estrutura:** Arquitetura modular com separação de responsabilidades (Controllers, Services, Views, Factories) para facilitar a manutenção e escalabilidade.
*   **Otimização:** Utilização de *Web Workers* para processamento assíncrono de tarefas de ML, garantindo a fluidez da interface.

## Como Executar o Projeto

Para configurar e executar o projeto localmente, siga os passos abaixo:

### Pré-requisitos

*   Node.js (versão v19.6 ou superior recomendada).
*   Ambiente Unix-like (Linux ou WSL no Windows) é preferível devido aos comandos utilizados nas aulas.

### Instalação e Execução

1.  **Navegue até o diretório da aula:**
    ```bash
    cd expert07-imersao/classes/class02
    ```
2.  **Instale as dependências:**
    ```bash
    npm ci
    ```
3.  **Inicie o servidor de desenvolvimento:**
    ```bash
    npm start
    ```
4.  **Acesse no navegador:** Abra seu navegador e navegue para `http://localhost:3000`.

### Solução de Problemas (Windows)

Se `browser-sync` apresentar erros no Windows, você pode substituí-lo por `http-server`:

1.  **Instale `http-server`:**
    ```bash
    npm i -D http-server
    ```
2.  **Edite o `package.json`:** Substitua o comando `start` por:
    ```json
    "start": "npx http-server ."
    ```
3.  **Acesse no navegador:** O projeto estará disponível em `http://localhost:8080`.
    *Nota: Com `http-server`, as alterações no código exigirão um recarregamento manual da página (F5).* 

## Créditos

*   **Desenvolvedor:** Tiago Almeida
*   **Tutoria:** Imersão Semana JS Expert 7.0 (Professor Erick Wendel)
*   **Layout Base:** Interface inspirada no projeto [Streaming Service](https://codepen.io/Gunnarhawk/pen/vYJEwoM) de [gunnarhawk](https://github.com/Gunnarhawk).

## Referências

Para uma lista completa de links e recursos utilizados no desenvolvimento, consulte o arquivo [referencias.md](./referencias.md).
