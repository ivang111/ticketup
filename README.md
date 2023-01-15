# TICKET UP

> El ticket es una herramienta de gestión que permite mantene con vida el sistema de información de una compañía. Es el medio formal que una organización utilizará para plasmar los hallazgos en materia de desvíos a las normas y a las buenas prácticas. El **ticket up** como tal, es una herramienta de excelencia y lleva a la aplicación de las mejores prácticas en la resolución de problemas.

## Funcionamiento y conceptos

El ticket permite evidenciar un hallazgo en un área determinada, bajos ciertos criterios de buenas prácticas y con ciertas condiciones de aceptabilidad y comunicar al área involucrada el desvío, inclusive con el soporte de una imágen. Además de salvarse en la base de datos de la herramienta para su consulta posterior, este hallazgo se convierte en un aviso por email al o a los destinatarios del sistema y del área concerniente.
A partir de allí, se tiene la posibilidad de que jefatura o supervisión asignen la responsabilidad de dar solución y seguimiento a algún colaborador, de seguir temas favoritos, de consultar el estatus y de interactuar por medio de comentarios, todo esto brinda un potencial de gestión inigualable.
Los tickets emitos tiene el carácter de declaración jurada, siendo que nadie puede editar su contenido, ni siquiera algún usuario con facultades de super o de admin.
Como plus para la gestión, puede analizarse el funcionamiento de la organización en materia de comunicación horizontal o vertical a través de indicadores precisos o de disponibilizar de una **API** para luego ser consumida por los `analistas` dentro de un Power BI.

### Proceso y ciclo

El proceso es simple y rápido, con la posibilidad de tenerlo en una tablet o movil, el colaborador ingresa y cuenta con dos opciones, `consultar`y `emitir un ticket`, en pocos pasos y un par de minutos el ticket ya está levantado y la notificación llegará por email al área `notificada`. Ahora todos los usuarios y responsables del área son notificados por email, si corresponde una jefatura asignará el ticket a uno de sus colaboradores y podrá anexar comentarios. Los colaboradores ejecutantes pueden ir comentando los avances. Al terminar las acciones que fueron necesarias según el hallazgo, el colaborador asignado **cierra** el ticket y fin del ciclo.

### Tipos de Usuarios

#### **Usuario**:

Todos los usuarios son aquellos que tienen la posibilidad de levantar un ticket, hacer un comentario o consultarlos de acuerdo al área que pertenece.
Cuando el ticket es levantado este llega como notificación por email al **área notificada** y necesitará de un supervisor para que pueda ser _asignado_ a un colaborador determinado. No se puede asignar la responsabilidad a varios colaboradores. El colaborador asignado a la realización o seguimiento del ticket es el que tiene la potestad de cerrarlo al finalizar el mismo.
Todos los usuarios tienen acceso a chequear los tieckets que recibió su área y en especial los que ya le fueran asignados.

#### **Super Usuario**:

Aquellos colaboradores que dentro de la organización, tienen una responsabilidad de mando y deciden por la asignación o cierre de un ticket serán los llamados _super usuarios_ y tendrán la capacidad de **asignar** o cambiar la asignación de un ticket, a un colaborador de su equipo o del `área notificada`.

#### **Super Admin**:

Este usuario tiene la capacidad de tener acceso a dashboard operativos para la **configuración** del sistema. El `super admin`podrá realizar las siguientes operaciones:

- Validar usuarios.
- Editar usuarios.
- Desactivar cualquier registro de cualquier tabla por medio de `activar/desactivar`.
- Transformar un usuario en `Super Usuario` o en `Super Admin` y viceversa.
- Cargar la tabla de emails, editarla y desactivar emails.
- Crear usuarios **analistas** y desactivarlos.
- Acceso a todas las consultas y a todos los tickets.
- No puede editar el contenido de los tickets.

## **Atributos y tablas**

### **Áreas**

Áreas es una propiedad o atributo que tienen todos los usuarios, y son aquellas que correspondan a la comapañía en las que se pueda dividir y asignar las responsabilidades. Las áreas podrán ser las `notificadas`o aquellas que `notifiquen`. El super admin será el encargado de editar, activar o desactivar estas áreas. Los datos se almacenan en la tabla **areas**.

### **Categorías**

Categorías es una propiedad o atributo del `ticket` y no de los usuarios y se refiere al concepto central sobre la razón de la emisión del ticket, por ejemplo _seguridad, calidad, servicios, otros_ .
El super admin será el encargado de editar, activar o desactivar las categorías. Los datos se almacenan en la tabla _categorias_.

### **Emails**

Emails es una propiedad única e irrepetible de cada usuario independientemente de su función en la compañía. El super admin será el encargado de editar, activar o desactivar estos emails. Los datos se almacenan en la tabla **emails** y tienen relación directa con la tabla de usuarios.

### **Criticidad**

Con el propósito de ordenar las prioridades de los hallazgos se utilizará el atributo de criticidad, por ejemplo _alta, media o baja_. El super admin será el encargado de editar, activar o desactivar estas criticidades. Los datos se almacenan en la tabla **critics**.

## **Resoluciones**

Con el propósito de dar un orden de urgencia en el tiempo se encuentra la tabla que lleva como nombre **resoluttions**, este corresponde a un atributo del ticket. A esta tabla tendrá acceso el super admin para crear, editar activar o desactivar el tipo de resolución, estas pueden ser por ejemplo _hoy, esta semana, planificarlo, otros_.

### **Funciones**

Las funciones son las que toda organización acostumbra tener por ejemplo _colaborador, jefe, supervisor, otros_ y establece el nivel de incumbencia de lickets. El super admin será el encargado de editar, activar o desactivar estas funciones. Los datos se almacenan en la tabla **functions**.

## **Usuarios**

Todas las personas que son dadas de alta en el sistema Ticket Up tienen acceso a la herramienta y se los considera usuarios del mismo sin importar su función o jererquía dentro de la organización.
El super admin será el encargado de editar, activar o desactivar estos usuarios. Los datos se almacenan en la tabla **users**. Esta tabla contiene los atributos necesarios para para participar de todas las funciones del ticket up.

## **Tickets**

Todos los comprenderán un registro único e irrepetible dentro de la tabla **tickets** y nadi puede intervenirla para modificar o eliminar cualquier dato allí colocado. Estos datos se registran en la tabla que lleva su nombre y se realiza una copia espejo en la tabla **r_tickets**.

## **Problemas**

Aquello que se detectado como un desvío del procesos observado o riesgos reales o potenciales serán registrado como problema y sus datos estarán salvados en la tabla **problems**. Estos registros no pueden ser alterados ni modificados por nadie y estarán vinculados a un único ticket.

## **Comentarios**

Cada hallazgo puede ser comentado con observaciones de cualquier usuario que tenga acceso al mismo, sus datos estarán salvados en la tabla **comments** y tiene una vinculación directa a cada ticket emitido. Estos comentarios no pueden ser editados por nadie.

## **Fotos**

Las imágenes serán salvadas en la tabla **fotos** y se vincularán a la cada ticket emitido.

## **Asignación**

Los hallazgos en forma de ticket pueden llegar a unárea notificada y ser resuelto por una o más personas y cerrado al fin de su ciclo, pero también un colaborador/usuario con función de mando puede asignar dicho ticket a uno de sus colaboradores para su seguimiento y conclusión. Esta relación de usuario y ticket será salvada en la tabla **asiggments** y nadie tendrá acceso a ella para su edición. De existir un error o problema de resolución en la asignación, el ticket deberá cerrarse con el comentario correspondiente y realizar uno nuevo.

### Sign Up

El proceso de registrarse se realiza de la siguiente forma. El usuario primero es parte de la organización y posee su cuenta de email corporativo que se encuentra en la tabla emails. Cuando se registra con sus datos la aplicación le enviará un email a su cuenta, otro al super admin y a su jefe inmediato como notificación de registración. El proceso termina cuando el usuario realiza la validación desde su cuenta de email. Si su email no estuviera en la tabla referida anteriormente debe contactar a su jefe inmediato para su solución.
De suceder todo correctamente el proceso concluye satisfactoriamente y el colaborador ya es parte del sistema ticket up.
