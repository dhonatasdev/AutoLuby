import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Funcionario from 'App/Models/Funcionario'
import Veiculo from 'App/Models/Veiculo'
import VeiculosReservado from 'App/Models/VeiculosReservado'
import VeiculosVendido from 'App/Models/VeiculosVendido'

export default class FuncionarioSeeder extends BaseSeeder {
  
  public static developmentOnly = true
  
  public async run() {
    
    await Funcionario.create({
      cpf: 08879532145,
      nome: 'joao',
      email: 'joao@lubinho.com.br',
      senha: 'joazinho',
      biografia: 'alguma coisa',
    })
    
    await Veiculo.createMany([
      {
        chassi: 'hae25g2e',
        marca: 'Honda',
        modelo: 'Civic',
        ano: 2019,
        km: '45000km',
        cor: 'cinza',
        status: 'disponivel',
        preco_comprado: 94000,
      },
      {
        chassi: 't120oi98',
        marca: 'Volkswagen',
        modelo: 'Jetta',
        ano: 2022,
        km: '0km',
        cor: 'preto',
        status: 'vendido',
        preco_comprado: 205810,
      },
      {
        chassi: 't220ui98',
        marca: 'Toyota',
        modelo: 'Corolla',
        ano: 2020,
        km: '30000km',
        cor: 'branco',
        status: 'reservado',
        preco_comprado: 110000,
      },
    ])
    
    await VeiculosVendido.create({
      veiculo_id: 2,
      valor_vendido: 205810,
      vendedor_id: 1,
    })
    
    await VeiculosReservado.create({
      veiculo_id: 3,
      valor_reservado: 110000,
      vendedor_id: 1,
    })
  }
}
