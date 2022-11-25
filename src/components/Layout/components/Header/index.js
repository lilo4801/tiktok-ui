import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment, faUser } from '@fortawesome/free-regular-svg-icons';
import { faCircleXmark, faMagnifyingGlass, faSpinner, faPlus, faEllipsisVertical, faEarthAsia, faCircleQuestion, faKeyboard, faCloudArrowUp, faLocationArrow, faGear, faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import HeadlessTippy from '@tippyjs/react/headless';
import Tippy from '@tippyjs/react';
import { useState } from 'react';
import 'tippy.js/dist/tippy.css'; // optional

import styles from './header.module.scss'
import images from '~/assets/images';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountItem from '~/components/AccountItem';
import Menu from '~/components/Popper/Menu';
import Button from '~/components/Button';
import { faBitcoin } from '@fortawesome/free-brands-svg-icons';
import Image from '~/components/Image';



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

    const [searchResult, setSearchResult] = useState([]);

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
            <Image src={images.logo} alt="Tiktok" />
            <HeadlessTippy
                visible={searchResult.length > 0}
                interactive
                render={attrs => (
                    <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                        <PopperWrapper>
                            <h4 className={cx('search-title')}>
                                Accounts
                            </h4>
                            <AccountItem />
                            <AccountItem />
                            <AccountItem />
                        </PopperWrapper>
                    </div>
                )}
            >
                <div className={cx('search')}>
                    <input placeholder="Search accounts and videos" spellCheck={false} />
                    <button className={cx('clear')}>
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </button>
                    <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />

                    <button className={cx('search-btn')}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                </div>

            </HeadlessTippy>
            <div className={cx('actions')}>
                {
                    !currentUser &&
                    <>
                        <Button leftIcon={<FontAwesomeIcon icon={faPlus} />} linkBtn><span>Upload</span></Button>
                        <Button primary>
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