import * as authorization from './rest/authorization'
import * as users from './rest/users'

import config from './conig.js'

export default {
    authorization,
    users,
    setToken: config.setToken,
}

