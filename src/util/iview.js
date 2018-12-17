import Vue from 'vue'
import {
  Row,
  Col,
  Submenu,
  Header,
  Icon,
  Input,
  Layout,
  Sider,
  Button,
  Menu,
  MenuItem,
  Notice,
  Content,
  Alert
} from 'iview'

Vue.prototype.$Notice = Notice

Vue.component('Input', Input)
Vue.component('Col', Col)
Vue.component('Row', Row)
Vue.component('Submenu', Submenu)
Vue.component('Button', Button)
Vue.component('Alert', Alert)
Vue.component('Layout', Layout)
Vue.component('Sider', Sider)
Vue.component('Menu', Menu)
Vue.component('MenuItem', MenuItem)
Vue.component('Icon', Icon)
Vue.component('Header', Header)
Vue.component('Content', Content)
