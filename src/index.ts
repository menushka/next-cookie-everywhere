import Cookies from 'js-cookie'

const get = (key: string) => {
  if (typeof document === 'undefined') {
    return require('next/headers').cookies().get(key).value
  } else {
    return Cookies.get(key)
  }
}

export default {
  ...Cookies,
  get
}
