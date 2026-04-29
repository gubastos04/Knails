# API - Site Nail Designer 💅

API REST desenvolvida para gerenciamento completo de um sistema de agendamento para Nail Designers. A plataforma permite que clientes consultem serviços, profissionais e horários disponíveis, além de realizarem agendamentos online de forma prática e intuitiva.

No painel administrativo, é possível gerenciar serviços, profissionais, agenda, datas indisponíveis e acompanhar todos os agendamentos em tempo real.

## Funcionalidades

- Consulta de serviços disponíveis
- Listagem de profissionais por serviço
- Verificação de horários disponíveis
- Criação de agendamentos
- Consulta de agendamentos pelo cliente
- Gerenciamento completo de serviços
- Cadastro e manutenção de profissionais
- Controle de agenda e carga horária
- Bloqueio de datas específicas
- Atualização de status dos agendamentos

## Rotas

### Públicas — Fluxo do Cliente

| Método | Endpoint | Descrição |
|--------|----------|-----------|
| GET | `/services` | Lista todos os serviços ativos |
| GET | `/professionals?serviceId=` | Lista profissionais por serviço |
| GET | `/availability?professionalId=&date=` | Retorna horários disponíveis em uma data |
| POST | `/appointments` | Cria um novo agendamento |
| GET | `/appointments?phone=` | Busca agendamentos pelo telefone |

---

### Administrativas — Protegidas por Middleware

#### Serviços

| Método | Endpoint |
|--------|----------|
| GET | `/admin/services` |
| POST | `/admin/services` |
| PUT | `/admin/services/:id` |
| DELETE | `/admin/services/:id` |

#### Profissionais

| Método | Endpoint |
|--------|----------|
| GET | `/admin/professionals` |
| POST | `/admin/professionals` |
| PUT | `/admin/professionals/:id` |
| DELETE | `/admin/professionals/:id` |

#### Agendamentos

| Método | Endpoint | Descrição |
|--------|----------|-----------|
| GET | `/admin/appointments` | Lista agendamentos com filtros |
| PATCH | `/admin/appointments/:id/status` | Atualiza status do agendamento |

Filtros disponíveis:

- `date`
- `status`
- `professionalId`

Status permitidos:

- `pending`
- `confirmed`
- `completed`
- `cancelled`

#### Agenda / Carga Horária

| Método | Endpoint |
|--------|----------|
| GET | `/admin/schedule/:professionalId` |
| PUT | `/admin/schedule/:professionalId` |

#### Datas Bloqueadas

| Método | Endpoint |
|--------|----------|
| GET | `/admin/blocked-dates` |
| POST | `/admin/blocked-dates` |
| DELETE | `/admin/blocked-dates/:id` |