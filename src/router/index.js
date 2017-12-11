import User from '../components/user/User'
import UserStart from '../components/user/UserStart'
import UserEdit from '../components/user/UserEdit'
import UserDetail from '../components/user/UserDetail'

export const routes = [
  {
    path: '/user',
    component: User,
    props: true,
    children: [
      {
        path: '', component: UserStart
      },
      {path: ':id', component: UserDetail},
      {path: ':id/edit', component: UserEdit}
    ]
  }
];
