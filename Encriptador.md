# Crack the password




Se tiene una contraseña encriptada con la clase Encriptador
````
c60580980424b7112df8d5b652b977f3
````
que usa la librería "ts-md5"




que ha sido usada para dar seguridad a una aplicación.
Se requiere usar Jasmine para poder probar que la clase Encriptador se encuentra
correctamente implementada.

Se sugiere utilizar la técnica de la __fuerza bruta__, esto es, probar todas las posibles
combinaciones. Caso que encuentre una, significa que la prueba está correcta.

Puntos a tomar enc uenta:
- descubrir la contraseña a través de fuerza bruta
y poder acceder a la aplicación.


La prueba termina cuando se encuentra la contraseña.
La contraseña puede estar conformada por letras mayúsculas y minúsculas y números.
- 
Su longitud máxima es de 4 caracteres.
- 
Solo se considera los siguientes caracteres de la tabla ASCII

Tips:
- "y" = String.fromCharCode(121)
- No imprimir las contraseñas fallidas.

code			char
48				0
49				1
50				2
51				3
52				4
53				5
54				6
55				7
56				8
57				9
65				A
66				B
67				C
68				D
69				E
70				F
71				G
72				H
73				I
74				J
75				K
76				L
77				M
78				N
79				O
80				P
81				Q
82				R
83				S
84				T
85				U
86				V
87				W
88				X
89				Y
90				Z
91				[
92				\
93				]
94				^
95				_
96				`
97				a
98				b
99				c
100				d
101				e
102				f
103				g
104				h
105				i
106				j
107				k
108				l
109				m
110				n
111				o
112				p
113				q
114				r
115				s
116				t
117				u
118				v
119				w
120				x
121				y


Tips:
"y" = String.fromCharCode(121)
No imprimir las contraseñas fallidas.
<!--stackedit_data:
eyJoaXN0b3J5IjpbMTI5MzQwNzQzMCwxNzQyNDIzODY2XX0=
-->