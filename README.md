# Ecommerce 

#### `Dev - Agustina Denis y Ezequiel Bonadeo.`

## Descripción

<div>
<p>
Este proyecto proporciona una API REST que permite gestionar productos y usuarios, almacenando los datos en memoria y archivos. Todo fue probado y modificado utilizando la aplicación de Postman.
</p>
</div>

### Gestión de Productos y Usuarios

Con el método POST creamos un nuevo producto o usuario, le realizamos su validación, y si es exitosa, lo guardamos y devolvemos su nuevo id.

El método GET lo utilizamos tanto para leer todos los productos o usuarios como para traer uno en específico con su ID.

Para modificar y actualizar propiedades de usuarios o productos, utilizamos el método PUT, con las siguientes rutas:

/api/products/:pid

/api/users/:uid

Si todo es correcto, me devuelve el objecto modificado.

Con DELETE, eliminamos un objeto mediante el uso de su id. Si es exitoso, me devuelve el producto o usurio eliminado.

### Manejo de Errores

Se implementan middleware para manejar errores, rutas no encontradas y validaciones. De este modo, se proporciona una respuesta clara para cada tipo de error.











