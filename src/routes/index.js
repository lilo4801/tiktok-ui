import Home from '~/pages/Home'
import Following from '~/pages/Following'
import Upload from '~/pages/Upload'
import { HeaderOnly } from '~/components/Layout'

const publicRoutes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/following',
        component: Following
    }
    ,
    {
        path: '/upload',
        component: Upload,
        layout: HeaderOnly
    }
    ,
    {
        path: '/search',
        component: Upload,
        layout: null
    },
    {
        path: '/@:nickname',
        component: Upload
    }
]

const privateRoutes = [

]

export { privateRoutes, publicRoutes }