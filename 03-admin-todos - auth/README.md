# Development 

Paso para levantgar la app en desarrollo 

1. Levantar la base de datos 

```
docker compose up -d
```

## Nota: 
__usuario__: test1@gmail.com
__password__: 123qwe

2. Renombrear el .env.template a .env
3. Reemplazar las variables de entorno
4. Ejecutar el seed para [crear la base de datos](http://localhost:3000/api/seed)
5. Ejecutar el comando ``` npm install ``` 
6. Ejecutar estos comentod de prsimas
``` npx prisma migrate dev 
    npx prisma generate ```

# Prism commands

```
npx prisma init
npx prisma migrate dev 
npx prisma generate 
npx prisma db pull  -- Get table from database
```
# Prod

# Stage


