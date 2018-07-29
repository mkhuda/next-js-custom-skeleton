import { action, observable } from 'mobx'

let store = null

class BaseStore {
  @observable usersLastUpdate = 0
  @observable users = ["A USER", "B USER"]

  constructor (isServer, usersLastUpdate) {
    this.usersLastUpdate = usersLastUpdate
  }

  @action setUser = (value) => {
    console.log(this.users)
    this.users.push(value)
  }

}

export function initializeStore (isServer, usersLastUpdate = Date.now()) {
  if (isServer) {
    return new BaseStore(isServer, usersLastUpdate)
  } else {
    if (store === null) {
      store = new BaseStore(isServer, usersLastUpdate)
    }
    return store
  }
}
