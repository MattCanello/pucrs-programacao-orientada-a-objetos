//06a_consumidor.mjs

import { CarroComPlaca } from "./06a_CarroComPlaca.mjs";
import { Locadora } from "./06a_Locadora.mjs";

var locadora = new Locadora()
locadora.adicionaCarro(new CarroComPlaca("ABC-9I23")) // 1
locadora.adicionaCarro(new CarroComPlaca("DEF-0U74")) // 2
locadora.consultaCarros()
    // Carro placa (ABC-9I23); tq: 0 
    // Carro placa (DEF-0U74); tq: 0 

locadora.abasteceCarro(0, 30)
locadora.consultaCarros()
    // Carro placa (ABC-9I23); tq: 30 
    // Carro placa (DEF-0U74); tq: 0 

locadora.abasteceCarro(1, 30)
locadora.abasteceCarro(0, 30)
locadora.consultaCarros()
    // Carro placa (ABC-9I23); tq: 55 
    // Carro placa (DEF-0U74); tq: 30 