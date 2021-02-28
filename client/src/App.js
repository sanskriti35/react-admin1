import { Admin, Resource } from 'react-admin'
import restProvider from 'ra-data-simple-rest'
import PostList from './components/PostList.js'
import PostCreate from './components/PostCreate.js'
import PostEdit from './components/PostEdit.js'
import UserList from './components/UserList.js'
import UserCreate from './components/UserCreate.js'
import UserEdit from './components/UserEdit.js'

function App() {
  return (
    <Admin dataProvider = {restProvider('http://localhost:3000')}>
      <Resource name = 'posts' list = {PostList} create = {PostCreate} edit = {PostEdit} />
      <Resource name = 'users' list = {UserList} create = {UserCreate} edit = {UserEdit} />
    </Admin>
  );
}

export default App;
