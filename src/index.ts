import Cookies from 'js-cookie'

const originalGet = Cookies.get
const originalSet = Cookies.set

const get = (key?: string) => {
  if (typeof document === 'undefined') {
    if (key) {
      return require('next/headers').cookies().get(key).value
    } else {
      return Object.fromEntries(require('next/headers').cookies().getAll().map((cookie: { name: string, value: string }) => [cookie.name, cookie.value]))
    }
  } else {
    if (key) {
      return originalGet(key)
    } else {
      return originalGet()
    }
  }
}

const set = (key: string, value: string) => {
  if (typeof document === 'undefined') {
    return require('next/headers').cookies().set(key, value)
  } else {
    return originalSet(key, value)
  }
}

Cookies.get = get
Cookies.set = set

export default Cookies
