import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema } from '@ioc:Adonis/Core/Validator'
import Database from '@ioc:Adonis/Lucid/Database'

export default class ReservasController {
  public async update({ request, params }: HttpContextContract) {
    const veiculoId = await Database.rawQuery(
      'select `status`, `id` from `veiculos` where `id` = ? ',
      [params.veiculo_id]
    )

    const funcionarioId = await Database.rawQuery(
      'select `id` from `funcionarios` where `id` = ? ',
      [params.funcionario_id]
    )

    if (veiculoId[0].status !== 'disponivel') {
      return { message: 'o veiculo não encontra-se dispovel' }
    }

    const validatedData = await request.validate({
      schema: schema.create({
        valor_reserva: schema.number(),
      }),
      messages: {
        required: 'o campo {{ field }} é obrigatorio',
      },
    })
    const reservado = await Database.table('veiculos_reservados').insert({
      veiculo_id: veiculoId[0].id,
      valor_reservado: validatedData.valor_reserva,
      vendedor_id: funcionarioId[0].id,
      data: Date.now(),
    })

    const atualizado = await Database.from('veiculos')
      .where('id', params.veiculo_id)
      .update({ status: 'reservado' })

    return { reservado, atualizado }
  }
}
