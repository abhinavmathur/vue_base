let baseUrl;

export async function $fetch(url){
  const response = await fetch(`${baseUrl}${url}`)
  if (response.ok) {
    const data = await response.json()
    return data
  } else {
    throw new Error('error')
  }
}

export default {
  install(Vue, options) {
    console.log('hello world')
    baseUrl = options.baseUrl
    Vue.prototype.$fetch = $fetch
  }
}
