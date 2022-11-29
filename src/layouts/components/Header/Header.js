import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment, faUser } from '@fortawesome/free-regular-svg-icons';
import {
    faPlus,
    faEllipsisVertical,
    faEarthAsia,
    faCircleQuestion,
    faKeyboard,
    faCloudArrowUp,
    faLocationArrow,
    faGear,
    faRightFromBracket
} from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react';
import { useState } from 'react';
import 'tippy.js/dist/tippy.css'; // optional

import styles from './header.module.scss'
import images from '~/assets/images';
import Menu from '~/components/Popper/Menu';
import Button from '~/components/Button';
import { faBitcoin } from '@fortawesome/free-brands-svg-icons';
import Image from '~/components/Image';
import Search from '../Search';
import { Link } from 'react-router-dom';
import config from '~/config';


const cx = classNames.bind(styles);
const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'English',
        childrenItem: {
            title: 'Language',
            data: [
                {
                    code: 'en',
                    title: 'English'
                },
                {
                    code: 'vi',
                    title: 'Tieng Viet'
                },
                {
                    code: 'Jpn',
                    title: 'Japan'
                },
                {
                    code: 'en',
                    title: 'English'
                },
                {
                    code: 'vi',
                    title: 'Tieng Viet'
                },
                {
                    code: 'Jpn',
                    title: 'Japan'
                }
                ,
                {
                    code: 'en',
                    title: 'English'
                },
                {
                    code: 'vi',
                    title: 'Tieng Viet'
                },
                {
                    code: 'Jpn',
                    title: 'Japan'
                }
                ,
                {
                    code: 'en',
                    title: 'English'
                },
                {
                    code: 'vi',
                    title: 'Tieng Viet'
                },
                {
                    code: 'Jpn',
                    title: 'Japan'
                }
                ,
                {
                    code: 'en',
                    title: 'English'
                },
                {
                    code: 'vi',
                    title: 'Tieng Viet'
                },
                {
                    code: 'Jpn',
                    title: 'Japan'
                },
                {
                    code: 'en',
                    title: 'English'
                },
                {
                    code: 'vi',
                    title: 'Tieng Viet'
                },
                {
                    code: 'Jpn',
                    title: 'Japan'
                },
                {
                    code: 'en',
                    title: 'English'
                },
                {
                    code: 'vi',
                    title: 'Tieng Viet'
                },
                {
                    code: 'Jpn',
                    title: 'Japan'
                },
                {
                    code: 'en',
                    title: 'English'
                },
                {
                    code: 'vi',
                    title: 'Tieng Viet'
                },
                {
                    code: 'Jpn',
                    title: 'Japan'
                },
                {
                    code: 'en',
                    title: 'English'
                },
                {
                    code: 'vi',
                    title: 'Tieng Viet'
                },
                {
                    code: 'Jpn',
                    title: 'Japan'
                },
                {
                    code: 'en',
                    title: 'English'
                },
                {
                    code: 'vi',
                    title: 'Tieng Viet'
                },
                {
                    code: 'Jpn',
                    title: 'Japan'
                },
                {
                    code: 'en',
                    title: 'English'
                },
                {
                    code: 'vi',
                    title: 'Tieng Viet'
                },
                {
                    code: 'Jpn',
                    title: 'Japan'
                },
                {
                    code: 'en',
                    title: 'English'
                },
                {
                    code: 'vi',
                    title: 'Tieng Viet'
                },
                {
                    code: 'Jpn',
                    title: 'Japan'
                }


            ]
        }
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Feeback and help',
        to: '/feedback'
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboard shortcuts',
    },
]
const Header = () => {


    const [currentUser, setCurrentUser] = useState(true);



    const handleMenuChange = (menuItem) => {
        console.log(menuItem);
    }

    const userMenu = [
        {
            icon: <FontAwesomeIcon icon={faUser} />,
            title: 'View profile',
            to: '/profile'
        },
        {
            icon: <FontAwesomeIcon icon={faBitcoin} />,
            title: 'Get coins',
            to: '/get-coin'
        },
        {
            icon: <FontAwesomeIcon icon={faGear} />,
            title: 'Setting',
            to: '/setting'
        },
        ...MENU_ITEMS,
        {
            icon: <FontAwesomeIcon icon={faRightFromBracket} />,
            title: 'Log out',
            to: '/logout',
            separate: true,
        },
    ]
    return <header className={cx('wrapper')}>
        <div className={cx('inner')}>
            <Link className={cx('logo-link')} to={config.routes.home}><Image src={images.logo} alt="Tiktok" /></Link>
            {/* search */}
            <Search />
            <div className={cx('actions')}>
                {
                    !currentUser &&
                    <>
                        <Button leftIcon={<FontAwesomeIcon icon={faPlus} />} linkBtn><span>Upload</span></Button>
                        <Button primary >
                            Log In
                        </Button>

                        <Menu
                            items={MENU_ITEMS}
                            onChange={handleMenuChange}
                        >
                            <button className={cx('setting')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        </Menu>
                    </>
                }

                {
                    currentUser &&
                    <>
                        <Tippy content="Upload Video" placement='bottom'>
                            <button className={cx('icon-btn')} ><FontAwesomeIcon icon={faCloudArrowUp} /></button>
                        </Tippy>
                        <Tippy content="Comment... Video" placement='bottom'>
                            <button className={cx('icon-btn')} ><FontAwesomeIcon icon={faComment} /></button>
                        </Tippy>
                        <Tippy content="Go~~" placement='bottom'>
                            <button className={cx('icon-btn')} ><FontAwesomeIcon icon={faLocationArrow} /></button>
                        </Tippy>

                        <Menu
                            items={userMenu}>
                            <Image
                                className={cx('header-avatar')}
                                src='https://35express.org/wp-content/uploads/2021/05/cac-tinh-cach-cua-luffy-mu-rom-2-35express.jpg' alt='avatar'
                            />
                        </Menu>
                    </>
                }


            </div>
        </div>
    </header>
}

export default Header;