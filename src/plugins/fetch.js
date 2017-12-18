let baseUrl;

export async function $fetch(url, options){
  const finalOptions = Object.assign({}, {
    headers: {
      'Content-Type' : 'application/json'
    },
    credentials: 'include'
  }, options);
  const response = await fetch(`${baseUrl}${url}`, finalOptions);
  if (response.ok) {
    const data = await response.json()
    return data
  } else {
    const message = response.text();
    const error = new Error(message);
    error.response = response;
    throw error
  }
}

export default {
  install(Vue, options) {
    console.log('hello world');
    baseUrl = options.baseUrl;
    Vue.prototype.$fetch = $fetch
  }
}
