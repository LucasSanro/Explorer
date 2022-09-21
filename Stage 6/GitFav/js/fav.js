import { GithubUser } from './gitUser.js'

//classe que vai conter a logica dos dados
//com os dados serão estruturados

export class favorites {
  constructor(root) {
    this.root = document.querySelector(root)
    this.load()
  }

  load() {
    this.entries = JSON.parse(localStorage.getItem('@github-favorites:')) || []
  }

  save() {
    localStorage.setItem('@github-favorites:', JSON.stringify(this.entries))
  }

  async add(username) {
    try {
      const userExist = this.entries.find(entry => entry.login === username)

      if (userExist) {
        throw new Error('Usuario já cadastrado!')
      }

      const gitUser = await GithubUser.search(username)
      console.log(gitUser)
      if (gitUser.login === undefined) {
        throw new Error('Usuario não encontrado!!')
      }

      this.entries = [gitUser, ...this.entries]
      this.update()
      this.save()
    } catch (error) {
      alert(error.message)
    }
  }

  delete(user) {
    this.entries = this.entries.filter(entry => entry.login !== user.login)
    this.update()
    this.save()
  }
}

//classe que vai criar a visualização e eventos html
export class favoriteview extends favorites {
  constructor(root) {
    super(root)
    this.tbody = this.root.querySelector('table tbody')

    this.update()
    this.onAdd()
  }

  onAdd() {
    const searchBtn = this.root.querySelector('.searchCamp button')
    searchBtn.onclick = () => {
      const { value } = this.root.querySelector('.searchCamp input')

      this.add(value)
    }
  }

  update() {
    this.removeAllTr()

    this.entries.forEach(user => {
      const row = this.createRow()

      row.querySelector(
        '.user img'
      ).src = `https://github.com/${user.login}.png`
      row.querySelector('.user img').alt = `Imagem de ${user.name}`
      row.querySelector('.user p').textContent = user.name
      row.querySelector('.user a').href = `https://github.com/${user.login}`
      row.querySelector('.user span').textContent = user.login
      row.querySelector('.user p').textContent = user.name
      row.querySelector('.repositories').textContent = user.public_repos
      row.querySelector('.followers').textContent = user.followers

      row.querySelector('.remove').onclick = () => {
        const isOk = confirm('tem certeza que Deseja cancelar essa linha??')

        if (isOk) {
          this.delete(user)
        }
      }
      this.tbody.append(row)
    })
  }

  createRow() {
    const tr = document.createElement('tr')

    tr.innerHTML = `          
            <td class="user">
              <img src="https://github.com/LucasSanro.png" alt="" />
              <a href="https://github.com/LucasSanro"
                ><p>Lucas Santana</p>
                <span>/LucasSanro</span></a
              >
            </td>
            <td class="repositories">809</td>
            <td class="followers">9898</td>
            <td><button class="remove">Remove</button></td>
      
          `

    return tr
  }
  removeAllTr() {
    this.tbody.querySelectorAll('tr').forEach(tr => {
      tr.remove()
    })
  }
}

document.addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    var btn = document.querySelector('.searchCamp button')
    const text = document.querySelector('.searchCamp input')
    text.value = ''

    btn.click()
  }
})
