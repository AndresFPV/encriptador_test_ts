import {Encriptador} from "../Encriptador"

describe("ESC1", () => {
    it("Comprobacion password", () => {
        let cad = ""
        let encriptador = new Encriptador()
        let resEsperado = "c60580980424b7112df8d5b652b977f3"

        //flag encontrado
        let encontrado : boolean = false
        
        for (let i=48; i< 123; i++)
        {
            for (let j=48; j< 123; j++)
            {
                for (let k=48; k< 123; k++)
                {
                    for (let l=48; l< 123; l++)
                    {
                        cad += String.fromCharCode(i)
                        cad += String.fromCharCode(j)
                        cad += String.fromCharCode(k)
                        cad += String.fromCharCode(l)

                        let resObtenido = new String(encriptador.encrypt(cad))

                        //encontrado = resEsperado == resObtenido
                        if (resObtenido == resEsperado)
                        {
                            encontrado = true
                            break;
                        }else
                        {
                            cad = ""
                        }
                    }

                    if (encontrado) break;
                }

                if (encontrado) break;
            }

            if (encontrado) break;
        }

        //asserts
        expect(encontrado).toEqual(true)
    })
})