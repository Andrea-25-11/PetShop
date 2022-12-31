
READ ME

El presente proyecto tiene la finalidad de desarrollar la página web del PetShop-Veterinaria Perros & Gatos una empresa dedicada a la prestación de servicios para mascotas especialmente gatos y perros y a la venta de insumos como comida, arenas, medicina, juguetes entre otros para los mismos. 

![AVISO NUEVO GATOS Y PERROS 170-1](https://user-images.githubusercontent.com/107644961/210124257-60642d6b-e7bd-4229-9318-2f6130022647.png)

Para tal finalidad se dio uso a herramientas como React y como editor de código Visual Studio Code, así mismo se manejo el mobile first y creación de componentes para la creación de la página.

La idea principal de la página se desarrollo en figma siendo el prototipo el siguiente:

![1](https://user-images.githubusercontent.com/107644961/210124393-07398bb5-af91-4ae0-b9f0-2e6ac8893add.png)

Para desarrollar la pagina se planteo la realización de diferentes componentes 

![2](https://user-images.githubusercontent.com/107644961/210124485-868cfa90-7933-44aa-a8d1-644836c11aa1.png)

Dentro de cada carpeta se creo el respectivo documento jsx y css para aplicar los estilos correspondientes.
Así mismo se descargaron diferentes dependencias para logras el correcto depsliegue de la plataforma. Entre ellas destaco redux para la creación del carrito de comprar, react whatsapp para conectar con el whatsapp del Pet Shop y remix icon para importar librerias de iconos.

En total estas fueron las dependencias a utilizar en el proyecto:

![4](https://user-images.githubusercontent.com/107644961/210124577-d357e679-022d-4486-8c34-59df74f6e484.png)

El componente principal de trataba del Home.
Es este componente se importaron la mayoría de los otros componentes, siendo la primera parte de él el importe de los otros componentes necesarios para armar el Home, entre ellos el Header, la bienvenida a la página, los cards de servicios, las marcas que se manejan en la tienda y los medios de contacto.

![3](https://user-images.githubusercontent.com/107644961/210124521-a23cba4f-0513-4349-a38e-c84ef105846d.png)

Otro componente importante fue el de servicios, ya que en este se utilizaron arrays mediante un JSON para traer la informacion de cada uno de los productos.  En dicho Json se asigno un Id, una imagen de portada, un texto del servicio, la descripcion del servicio, un icono del carrito de compras, el precio y la cantidad los cuales serían llamado postreriormente mediante su mapeo en el componente del home y la página de servicios

![5](https://user-images.githubusercontent.com/107644961/210124764-0db8a5a7-d50f-4960-a470-f88501418307.png)

El cart también fue un componente importante, mediante ese se utilizaron dos hooks de react, como lo es el useSelector y el useDispatch, medainte estos se crearon unas constantes que permitieran general la sumatoria o resta de la cantidad de servicios que deseara el cliente.

Para el componente primero se  creo el componente mediante el mapeo del JSON y mediente la creación de botones se agrego el evento de Onclick sobre el de suma resta y eliminar frente al servicio escogido por el cliente. Así mismo se agrego una funcion que calcularía el total del valor de los serivicios escogidos por el cliente y un botón gracias a react whatsapp que permitiera redirigirse al whatsapp de la empresa. 


Por ultimo el componente reducer. el cual nos permite mediante funciones el añadir, decrementar, eliminar los items teniendo en cuante la acción del cliente frente a los botones creados en el componente card.

![6](https://user-images.githubusercontent.com/107644961/210125331-a3a2cf77-ccf5-4acd-a15f-ae6bd9b75c00.png)

Para la aplicación de estilos no se hizo uso de ninguna librería, todos fueron aplicados según necesidad, así mismo las animaciones.
