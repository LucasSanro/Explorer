//classe que vai conter a logica dos dados
//com os dados serão estruturados

export class favorites {
  constructor(root) {
    this.root = document.querySelector(root)
  }
}

//classe que vai criar a visualização e eventos html
export class favoriteview extends favorites {
  constructor(root) {
    super(root)

    this.update()
  }

  update() {
    this.removeAllTr()
  }
  removeAllTr() {
    const tbody = this.root.querySelector('table tbody')
    tbody.querySelectorAll('tr').forEach(tr => {
      tr.remove()
    })
  }
}
