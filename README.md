# Nest.js DDD template

This repo is a simple boilertaple to use nest.js with DDD (domain driven design) and Clean Architecture

[A quick introduction to clean architecture](https://www.freecodecamp.org/news/a-quick-introduction-to-clean-architecture-990c014448d2/)

![alt text](https://cdn-media-1.freecodecamp.org/images/oVVbTLR5gXHgP8Ehlz1qzRm5LLjX9kv2Zri6)

## Getting Started

```
git clone git@github.com:geraldojrcg/nestjs-ddd-template.git
```

### Structure
```
./src/
├── data
│   └── my-context
│       ├── repositories
│       ├── services
│       └── *.module.ts
├── domain
│   └── my-context
│       ├── entities
│       └── usecases
├── infra
│   └── mysql
│       ├── mysql.module.ts
│       └── repositories
└── presentation
    └── my-context
        ├── dtos
        ├── *.module.ts
        └── *.controller.ts
├── app.module.ts
└── main.ts

```

### Prerequisites
- docker
- node >= 14

### Runing

```bash
$ docker-compose up -d
```

