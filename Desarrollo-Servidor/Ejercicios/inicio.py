#Variables
opcion = ""
entrada = ""

#Abrimos el menú con opciones
while opcion != "b":
    opcion = input("\nSELECCIONA UNA OPCIÓN\n(Introduce su letra)\n\na) Número par o impar\nb) Terminar\n")

#Entramos al if que corresponda según la opción introducida
    if opcion == "a":
        print("\n- Comprueba si tu número es par o impar - \n(Introduce cualquier letra para salir)\n")

        while True:
            try:
                entrada = int(input("Introduce el número a comprobar (en cifras): "))

                if entrada == 0:
                    print("El número es 0")
                elif entrada%2 == 0:
                    print("El número es par")
                elif entrada%2 != 0:
                    print("El número es impar")
            except:
                break

    elif opcion == "b":
        break