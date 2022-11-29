import Home from '~/pages/Home'
import Following from '~/pages/Following'
import Upload from '~/pages/Upload'
import { HeaderOnly } from '~/layouts'
import config from '~/config'

const publicRoutes = [
    {
        path: config.routes.home,
        component: Home
    },
    {
        path: config.routes.following,
        component: Following
    }
    ,
    {
        path: config.routes.upload,
        component: Upload,
        layout: HeaderOnly
    }
    ,
    {
        path: config.routes.search,
        component: Upload,
        layout: null
    },
    {
        path: config.routes.profile,
        component: Upload
    }
]

const privateRoutes = [

]

export { privateRoutes, publicRoutes }