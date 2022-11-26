import UserCard from './UserCard.vue'
import RadioBar from './RadioBar.vue'
import FileUploader from './FileUploader.vue'
import Input from './Input.vue'

export default function install(app) {
  app.component(UserCard.name, UserCard)
  app.component(RadioBar.name, RadioBar)
  app.component(FileUploader.name, FileUploader)
  app.component(Input.name, Input)
}