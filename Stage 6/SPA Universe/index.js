import Router from './routers.js'

const router = new Router()

router.add('/universo', 'Explorer/Stage%206/SPA%20Universe/pages/universo.html')
router.add(
  '/exploracao',
  'Explorer/Stage%206/SPA%20Universe/pages/exploracao.html'
)
router.add('/', 'Explorer/Stage%206/SPA%20Universe/pages/home.html')

router.handle()
window.onpopstate = () => router.handle()
window.route = () => router.route()
