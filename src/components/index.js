import Header from './Header.vue'
import Blocks from './Blocks'
import Forms from './Forms'
import UI from './UI'

export default function install(app) {
  app.component(Header.name, Header)

  app.use(Blocks)
  app.use(Forms)
  app.use(UI)
}