# Prompt para Implementação do Frontend Colorashin

---

Preciso implementar o frontend completo de um projeto React chamado Colorashin. O projeto transforma fotos em desenhos para colorir em PDF.

## Stack Técnica
- React 19 pra cima com JavaScript (não TypeScript)
- React Router DOM para roteamento
- Tailwind CSS para estilização
- Axios para requisições HTTP
- React Hook Form + Zod para formulários e validação

## Base URL da API
http://localhost:8080/{recurso}

Exemplos de endpoints esperados:
- POST /auth/login
- POST /auth/register  
- GET /auth/profile
- POST /orders (criar pedido)
- GET /orders (listar pedidos)
- GET /orders/:id (detalhe do pedido)
- POST /transform/upload (upload de imagem)
- GET /transform/status/:jobId (verificar status)

## Páginas a Implementar

### 1. HomePage (/)
- Navbar com logo Colorashin, botões Login/Registre-se
- Modal de autenticação (Login/Cadastro com switch)
- Hero section com título animado "Transforme Imagem em DESENHOS COLORIDOS"
- Seção "Por que escolher Colorashin?" com 4 cards de benefícios
- Seção "Como Funciona" com 3 passos
- CTA final "Experimentar Grátis"
- Footer com links
- Botão flutuante de scroll animado

### 2. TransformPage (/transform)
- Upload de imagens com drag & drop (múltiplos arquivos)
- Preview das imagens selecionadas
- Botão "Transformar Imagem"
- Loading state durante processamento
- Redirecionamento para página do pedido após transformação

### 3. AccountPage (/account)
- Header com email do usuário e botão "Nova Requisição"
- Cards de estatísticas (Total pedidos, Concluídos, Em andamento)
- Lista de histórico de pedidos com:
  - Imagem thumbnail
  - ID do pedido
  - Status badge (Concluído/Processando)
  - Data
  - Preço
  - Botões de ação

### 4. OrderDetailPage (/orders/:id)
- Detalhes do pedido (ID, status, preço)
- Preview da imagem transformada
- Botões: Baixar PDF, Baixar Imagem, Compartilhar

## Componentes Reutilizáveis Needed
- Button (variants: primary, secondary, ghost)
- Input (com validação)
- Modal (auth, alerts)
- Card
- Badge (status: success, processing, error)
- Dropzone
- ImagePreview
- Loader/Spinner
- Navbar (com states: loggedIn, loggedOut)
- Footer
- ScrollIndicator

## Autenticação
- Context API para gerenciar estado de autenticação
- Token JWT em localStorage
- Rotas protegidas (Transform, Account, Orders requerem login)
- Redirect para Home se não autenticado

## Diretrizes
- Usar Tailwind para todos os estilos (seguir o design dos templates HTML originais)
- Manter as cores da marca: rosa (#ff4081), amarelo (#ffd700), verde (#00e676), azul (#2979ff)
- Fonte: Chango para títulos, Arial para corpo
- Implementar tratamento de erros com toast notifications
- Usar React Query ou similar para server state e caching
- Código limpo, componentizado e reutilizável
- Responsivo (mobile-friendly)

## Observações
- Templates HTML/CSS/JS originais estão em src/templates/
- O backend ainda será definido, considerar sempre localhost:8080
- Implementar gradualmente se necessário
