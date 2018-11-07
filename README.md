# Grupo-J 
## "Dagor Dagorath: El legado de Iluvatar"

**- DESCRIPCIÓN DE LA HISTORIA -**

* La Dagor Dagorath es la batalla final en la que se enfrentaran Morgoth y su sequito de seres malignos (como Saurom, los nueve Nazgul, orcos, trolls, dragones, balrog...) contra los Valar junto a su ejército y los Pueblos Libres de la Tierra Media (Elfos, Hombres y Enanos). Según se cuenta en la leyenda original, los Valar conseguirán acabar con Morgoth y Saurom tras arduas batallas y Arda quedara destruida. Nuevamente los Ainur (los primeros seres que fueron creados por Iluvatar, espíritus inmortales cambiaforma que se dividen en Valar y Maiar) cantaran junto a Elfos y Hombres el tema que será conocido como Arda Redimida, creando así el nuevo mundo. 

* [Información extra del Dagor Dagorath](http://esdla.wikia.com/wiki/Dagor_Dagorath)

**- IN-GAME -**

* Hablando del juego y sus mecánicas, nuestro objetivo como jugador será destruir la base enemiga. Para ello contaremos con una serie de tropas las cuales costarán un valor x según la calidad de la tropa y tendrán un tiempo x de recarga que dependerá de la tropa de igual manera. Nosotros como jugador lo que podemos hacer es elegir la tropa que queremos lanzar al combate, administrar el dinero que ganamos y mejorar las tropas que tenemos, ya que el combate en si es automático, conforme nuestras tropas van encontrando adversarios van atacándose mutuamente. Podremos jugar en solitario o en línea contra otro jugador,
* La estetica del juego sera pixelart y las mejoras de las tropas cambiaran la apariencia de las mismas.

**- FAQ -**

***¿Podremos jugar con Morgoth y con los Valar?*** 

* En un principio solo podremos jugar con el bando de los Pueblos Libres y demostrar si somos capaces de derrotar a las fuerzas de Morgoth.  

* [Información extra de los Valar](http://esdla.wikia.com/wiki/Valar)
 

***¿Habrá más de una fase o edad, o solo se podrá jugar una misma batalla(fase)?*** 

* Podremos jugar una sola batalla, la batalla final en la que se decidirá el destino de Arda y de sus moradores. 

 

***¿Cuál será la moneda de cambio con la que se pagaran las tropas?***

* Aunque en Arda existan monedas de cobre, de hierro, de oro o de mithril, en el juego dispondremos de una moneda neutra con la que podremos comprar nuestras tropas y/o mejorarlas.  

 

***¿Habrá un ataque especial, en caso afirmativo, cual es el de cada uno?***

* Ataque especial como tal no habrá, pero si tendremos una tropa especial más fuerte y, por tanto, más cara, que podremos usar el número de veces que queramos, aunque limitado por el tiempo de carga de la tropa y del dinero del que dispongamos en ese momento. 

 

***¿Qué tropas tendrá cada ejército (jinete, espadachín y arquero)?***

* Para el ejercito que en un principio manejaremos nosotros, el de los Valar, tendremos un enano que blandirá un hacha (ataque cuerpo a cuerpo), un elfo que disparará un arco (ataque a distancia) y un rohirrim con lanza (humano a caballo). La tropa especial de nuestro ejército será un Ent (árbol inteligente capaz de desplazarse). 

* [Rohirrim](http://esdla.wikia.com/wiki/Rohirrim)

* [Ent](http://esdla.wikia.com/wiki/Ents)

* Para el ejército de Morgoth tendremos, primero un trasgo con espada (cuerpo a cuerpo), un haradrim, morador del desierto, con un arco (a distancia) y un orco montado en un huargo (ataca el huargo). La tropa especial del ejercito obscuro será un troll de las cavernas. 

* [Huargo](http://esdla.wikia.com/wiki/Huargos)

* [Troll de las cavernas](http://esdla.wikia.com/wiki/Troll_de_las_cavernas)
 

***¿Podremos mejorar nuestras tropas o, podremos desbloquear más tropas?***

* En principio podremos mejorar nuestras tropas. Usando monedas que vamos ganando durante la batalla, podremos subir los stats de nuestras tropas, tanto el ataque como la vida o el tiempo de carga de la tropa, por lo que tendrás que administrar bien tu dinero.
---
***- INTEGRANTES DEL EQUIPO DE DESARROLLO -***

|Nombre y Apellidos       |Correo de la universidad         |Cuenta de GitHub       |
|-------------------------|---------------------------------|-----------------------|
| Jorge Martinez Sepulveda|j.martinezse.2016@alumnos.urjc.es|JorgeMartinezSepulveda |
| Jesus Ayala Matarín     |j.ayala.2016@alumnos.urjc.es     |JesusAyalaMatarin      |
| Ruben Velasco Jimenez   |r.velasco.2016@alumnos.urjc.es   |rubenvj                |

## Fase 2

* En la esta segunda fase hemos implementado una parte del juego que permite al jugador controlas las tropas alidas de los Valar contra el ejercito del malvado Morgoth.
 Lo primer nada mas iniciar el juego es el menu principal donde se pueden observar tres opciones, jugar , online y controles. La funcion online aun no esta programada se usara para futuras fases en la parte de servidor.
 
 ![futyk](https://user-images.githubusercontent.com/43203256/48100780-f3b18e80-e224-11e8-8304-b74fe16c48b6.PNG)
 
 * El menu tiene una animacion de fondo con el mapa de arda moviendose por la pantalla, y tambien incluye la referencia al creador de la musica utilizada en el menu y la posterior animacion. (https://www.youtube.com/user/unholydoom23).
 
 * Al hacer click en controles se muestra una pestaña explicativa de los controles basicos.
 
 ![sadrh](https://user-images.githubusercontent.com/43203256/48100956-a5e95600-e225-11e8-8bd3-54dcc7b2c596.PNG)
 
 * Al pulsar jugar, empezara una animacion con una pequeña descripcion de la historia del juego, esta animacion see puede saltar en case de no querer verla, en la flecha situada en la parte superior derecha de la pantalla.
 
 ![sdfgh](https://user-images.githubusercontent.com/43203256/48101069-185a3600-e226-11e8-9a55-6f59c686f389.PNG)

 * Una vez termina la animacion, o el jugador la salta, empieza el juego. El escenario tiene un estilo pixel art como los personajes y tiene representa las dos fortalezas, la aliada de los Valar (Minas Tirith) y la enemiga de Morgoth (Minas Morgul).
 
 Minas Tirith

![erh](https://user-images.githubusercontent.com/43203256/48100580-2dce6080-e224-11e8-83d0-4f5321ddc0cf.PNG)

Minas Morgul

![shd](https://user-images.githubusercontent.com/43203256/48101254-ac2c0200-e226-11e8-873c-df57ac30269b.PNG)

* En esta version del juego solo es posible existen dos tropas, los enanos del bando de los Valar y los trasgos de parte de Morgoth.

![enano_andando_sheet](https://user-images.githubusercontent.com/43203256/48101676-24df8e00-e228-11e8-9f6e-f621002fa3a9.png)

![trasgo_andando_sheet](https://user-images.githubusercontent.com/43203256/48101756-8142ad80-e228-11e8-8153-5f71fa2d312a.png)

* En la ventana de juego se puede apreciar un boton de pause que lleva al menu principal y permite reiniciar la partida, el dinero del que dispone le jugador, que usara para sacar tropas y mejorarlas, un boton para comprar enanos y otro para mejorarlos, y si pone el cursor encima de una base indicara su vida.

![rwtj](https://user-images.githubusercontent.com/43203256/48101424-42f8be80-e227-11e8-84e5-9b605963ea61.PNG)

* La musica durante el juego es:
Canción: Dark Ages (Choir)-Extreme Music
Artista: Nick Phoenix / Thomas Bergersen
Álbum: Nemesis Vol.1 Action
(https://www.youtube.com/watch?v=rl7i_YxDl-8)

* En futuras fases se pretende mejorar el sitema de combate para que sea mas fluido y ampliar el numero de tropas del juego (tanto de los Valar como de Morgoth).
