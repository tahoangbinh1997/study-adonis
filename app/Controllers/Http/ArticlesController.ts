import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Database from '@ioc:Adonis/Lucid/Database'
import CreateArticleValidator from 'App/Validators/CreateArticleValidator'

export default class ArticlesController {
  public async index(ctx: HttpContextContract) {
    // fetch data from db
    const articles = await Database.query().from('articles').select('*')
    return ctx.view.render('news.view', { articles })
  }

  public async create({ view }: HttpContextContract) {
    return view.render('news.create')
  }

  public async store({ response, request }: HttpContextContract) {
    const payload = await request.validate(CreateArticleValidator)
    await Database.table('articles').insert({ ...payload })
    return response.redirect().back()
  }

  public async show({}: HttpContextContract) {}

  public async edit({}: HttpContextContract) {}

  public async update({}: HttpContextContract) {}

  public async destroy({}: HttpContextContract) {}
}
