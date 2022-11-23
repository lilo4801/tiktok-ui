import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faMagnifyingGlass, faSpinner, faPlus, faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

import styles from './header.module.scss'
import images from '~/assets/images';

const cx = classNames.bind(styles);

const Header = () => {
    return <header className={cx('wrapper')}>
        <div className={cx('inner')}>
            <img src={images.logo} alt="Tiktok" />
            <div className={cx('search')}>
                <input placeholder="Search accounts and videos" spellCheck={false} />
                <button className={cx('clear')}>
                    <FontAwesomeIcon icon={faCircleXmark} />
                </button>
                {/* <FontAwesomeIcon className={cx('loading')} icon={faSpinner} /> */}

                <button className={cx('search-btn')}>
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>
            </div>
            <div className={cx('actions')}>
                <button className={cx('upload-btn')}>

                    <Link to='/upload'><FontAwesomeIcon icon={faPlus} />
                        <span>Upload</span></Link>

                </button>
                <button className={cx('login-btn')}>
                    Log In
                </button>
                <div className={cx('setting')}>
                    <FontAwesomeIcon icon={faEllipsisVertical} />
                </div>
            </div>
        </div>
    </header>
}

export default Header;