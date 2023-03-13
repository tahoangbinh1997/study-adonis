/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer''
|
*/

import Route from '@ioc:Adonis/Core/Route'

Route.get('/', async ({ view }) => {
  return view.render('welcome')
}).as('homePage')

// Route.get('/news', (ctx) => {
//   console.log(ctx)
//   return ctx.view.render('news.view')
// })

Route.on('/news').render('news.view').as('news.view')

Route.post('/news', ({ response }) => {
  // const { email, employeeCode } = request.body()
  // return { email, employeeCode }
  return response.redirect('/news')
}).as('news.post')

Route.patch('/news/:id', ({ params }) => {
  return { params }
})
  .where('id', {
    match: /^[0-9]+$/,
    cast: (id) => Number(id),
  })
  .as('news.update')

Route.delete('/news/:id', ({ params }) => {
  return { params, hello: 'a' }
})
  .where('id', {
    match: /^[0-9]+$/,
    cast: (id) => Number(id),
  })
  .as('news.delete')
