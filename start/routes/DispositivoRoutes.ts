// start/routes.ts

import Route from '@ioc:Adonis/Core/Route'
Route.group(()=> {
  Route.get('/', 'DispositivosController.index');
  Route.post('/', 'DispositivosController.store');
  Route.get('/:id', 'DispositivosController.show');
  Route.delete('/:id', 'DispositivosController.destroy');
  Route.post('/creardispositivo','DispositivosController.creardispositivo');
}).prefix('/api/dispositivos').middleware('auth:api')


