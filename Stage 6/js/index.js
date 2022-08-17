const routes = {
  '/about': 'Explorer/Stage%206/pages/about.html',
  '/contact': 'Explorer/Stage%206/pages/contact.html',
  404: 'Explorer/Stage%206/pages/404.html',
  '/': 'Explorer/Stage%206/pages/home.html'
}
function route(event) {
  event = event || window.event
  event.preventDefault()
  window.history.pushState({}, '', event.target.href)
  handle()
}

function handle() {
  const { pathname } = window.location
  const route = routes[pathname] || routes[404]

  fetch(route)
    .then(data => data.text())
    .then(html => {
      document.querySelector('#app').innerHTML = html
    })

  console.log(route)
}
handle()
window.onpopstate = () => handle()
window.route=()=>route()
