const baseURL = process.env.BASE_URL

async function fetchAPI(path, params = null) {
    let url

    if(params !== null) {
        url = `${ baseURL }/${ path }/${ params }`
    } else {
        url = `${ baseURL }/${ path }`
    }

    const response = await fetch(`${ url }`)
    const data = await response.json()
    return data
}

export { baseURL, fetchAPI }
