const AxiosConfig = require('./axios')

class RecipesService extends AxiosConfig {


  constructor() {
    super()
  }

  async getRandomRecipes() {
    const response = await this.axios.get(`api/recipes/v2`, {
      params: {
        'random': 'true',
        'q': 'q',
        'type': 'public',
        'app_id': 'e50bc045',
        'app_key': 'b574867775831885724b7dc588c5e125'
      }
    })
    return response.data
  }

  async getRecipeByName(name) {
    const response = await this.axios.get(`api/recipes/v2`, {
      params: {
        'q': `${name}`,
        'type': 'public',
        'app_id': 'e50bc045',
        'app_key': 'b574867775831885724b7dc588c5e125'
      }
    })
    return response.data
  }

  async getRecipeByUri(uris) {
    const params = new URLSearchParams()
    params.append('type', 'public')
    params.append('app_id', 'e50bc045')
    params.append('app_key', 'b574867775831885724b7dc588c5e125')
    uris.forEach(uri => { params.append('uri', uri) });
    const response = await this.axios.get(`api/recipes/v2/by-uri`, {
      params
    },
    )
    return response.data
  }


}
const recipesService = new RecipesService();
module.exports = recipesService;