# Contratos de API - Ricardo POP Website

## Visão Geral
Este documento define os contratos de API entre frontend e backend para o website do Ricardo POP.

## Dados Mock Substituir
Os seguintes dados em `/frontend/src/data/mock.js` serão substituídos por dados reais do backend:

### 1. Informações do Artista
- `artistInfo`: Dados básicos do artista
- `biography`: Biografia e descrição
- `trajectory`: História da trajetória

### 2. Discografia 
- `discography`: Lista de álbums e faixas

### 3. Shows
- `shows`: Agenda de apresentações

### 4. Galeria
- `gallery`: Imagens com captions

### 5. Contato
- `contactInfo`: Informações de contato
- `socialLinks`: Links das redes sociais

## Endpoints de API

### GET /api/artist-info
**Descrição**: Retorna informações básicas do artista
**Resposta**:
```json
{
  "name": "RICARDO POP",
  "tagline": "Que mistura é essa!",
  "yearsActive": "15",
  "description": "..."
}
```

### GET /api/biography
**Descrição**: Retorna biografia completa
**Resposta**:
```json
{
  "title": "BIOGRAFIA", 
  "content": "...",
  "image": "url"
}
```

### GET /api/trajectory
**Descrição**: Retorna informações da trajetória
**Resposta**:
```json
{
  "title": "TRAJETÓRIA",
  "content": "..."
}
```

### GET /api/discography
**Descrição**: Lista todos os álbums
**Resposta**:
```json
[
  {
    "id": 1,
    "title": "...",
    "year": "2024",
    "type": "Álbum",
    "cover": "url",
    "tracks": ["..."]
  }
]
```

### GET /api/shows
**Descrição**: Lista próximos shows
**Resposta**:
```json
[
  {
    "id": 1,
    "date": "2025-08-15",
    "venue": "...",
    "location": "...",
    "time": "20:00",
    "status": "confirmed"
  }
]
```

### GET /api/gallery
**Descrição**: Lista imagens da galeria
**Resposta**:
```json
[
  {
    "id": 1,
    "url": "...",
    "caption": "..."
  }
]
```

### GET /api/contact-info
**Descrição**: Informações de contato
**Resposta**:
```json
{
  "email": "...",
  "phone": "...",
  "manager": "...",
  "city": "..."
}
```

### GET /api/social-links
**Descrição**: Links das redes sociais
**Resposta**:
```json
{
  "facebook": "...",
  "instagram": "...",
  "twitter": "...",
  "youtube": "...",
  "spotify": "..."
}
```

### POST /api/contact
**Descrição**: Envio de mensagem de contato
**Request Body**:
```json
{
  "name": "string",
  "email": "string", 
  "subject": "string",
  "message": "string"
}
```
**Resposta**:
```json
{
  "success": true,
  "message": "Mensagem enviada com sucesso",
  "id": "contact_id"
}
```

## Modelos de Dados (MongoDB)

### Artist Info Collection
```javascript
{
  _id: ObjectId,
  name: String,
  tagline: String, 
  yearsActive: String,
  description: String,
  createdAt: Date,
  updatedAt: Date
}
```

### Biography Collection
```javascript
{
  _id: ObjectId,
  title: String,
  content: String,
  image: String,
  createdAt: Date,
  updatedAt: Date
}
```

### Albums Collection  
```javascript
{
  _id: ObjectId,
  title: String,
  year: String,
  type: String,
  cover: String,
  tracks: [String],
  order: Number,
  createdAt: Date,
  updatedAt: Date
}
```

### Shows Collection
```javascript
{
  _id: ObjectId,
  date: Date,
  venue: String,
  location: String,
  time: String,
  status: String,
  description: String,
  createdAt: Date,
  updatedAt: Date
}
```

### Gallery Collection
```javascript
{
  _id: ObjectId,
  url: String,
  caption: String,
  order: Number,
  createdAt: Date,
  updatedAt: Date
}
```

### Contact Messages Collection
```javascript
{
  _id: ObjectId,
  name: String,
  email: String,
  subject: String,
  message: String,
  status: String, // "new", "read", "replied"
  createdAt: Date,
  updatedAt: Date
}
```

### Site Settings Collection
```javascript
{
  _id: ObjectId,
  key: String, // "contact_info", "social_links", "trajectory"
  data: Object,
  createdAt: Date,
  updatedAt: Date
}
```

## Integração Frontend-Backend

### Substituir Mock Data
1. Remover imports do `/data/mock.js`
2. Criar service functions para chamadas de API
3. Usar hooks do React para gerenciar estado
4. Implementar loading states e error handling

### Exemplo de Integração
```javascript
// Antes (mock)
import { artistInfo } from '../data/mock';

// Depois (API)
const [artistInfo, setArtistInfo] = useState(null);
const [loading, setLoading] = useState(true);

useEffect(() => {
  fetch(`${BACKEND_URL}/api/artist-info`)
    .then(res => res.json())
    .then(data => {
      setArtistInfo(data);
      setLoading(false);
    });
}, []);
```

## Considerações de Implementação
- Usar validação de dados com Pydantic
- Implementar cache para endpoints de leitura
- Adicionar paginação para galeria se necessário
- Tratamento de erros consistente
- Logs de auditoria para mensagens de contato