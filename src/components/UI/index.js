import UserCard from './UserCard.vue'
import RadioBar from './RadioBar.vue'
import FileUploader from './FileUploader.vue'

export default function install(app) {
  app.component(UserCard.name, UserCard)
  app.component(RadioBar.name, RadioBar)
  app.component(FileUploader.name, FileUploader)
}