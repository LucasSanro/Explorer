import Router from './routers.js'

const router= new Router()

router.add('/about',"Explorer/Stage%206/pages/about.html")
router.add('/contact','Explorer/Stage%206/pages/contact.html')
router.add(404,'Explorer/Stage%206/pages/404.html')
router.add('/','Explorer/Stage%206/pages/home.html')

router.handle()
window.onpopstate = () => router.handle()
window.route=()=>router.route()
