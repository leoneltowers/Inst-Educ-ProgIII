# Institucion educativa
# PROYECTO FINAL PROGRAMACION III -  2023

Institución Educativa


# Características

1. Opciones de Administrador, Profesor y Estudiante Totalmente Funcionales
2. El administrador puede actualizar los detalles del perfil, la contraseña en la sección de perfil, de los profesores y alumonos.
3. El administrador puede agregar eliminar u obtener cualquier curso, estudiante o profesor
4. El administrador puede editar cualquier curso y asociarle materias
5. El profesor puede actualizar los detalles del perfil, la contraseña en la sección de perfil
6. El profesor puede calificar a los alumnos asociados.
7. El estudiante puede actualizar los detalles del perfil, la contraseña en la sección de perfil
8. El estudiante puede verificar su calificacion y generar su boletin

# Login
ADMIN:
EMAIL: admin@gmail.com
PASS:123456

PROFESOR:
EMAIL: profesor@gmail.com
PASS:123456

ALUMNO:
EMAIL: alumno@gmail.com
PASS:123456


# To run project local Server

```
npm run dev
```

# To run project local Client

```
npm run dev
```


# To run migrations local

```

migrate-mongo init
migrate-mongo up  

```

.env 

```

NODE_ENV=development
PORT=3000
MONGO_URL= mongodb://127.0.0.1:27017/
MONGO_DB='Institucion-educativa'


```

