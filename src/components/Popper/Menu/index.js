import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';

import { Wrapper as PopperWrapper } from '~/components/Popper';
import styles from './Menu.module.scss';
import MenuItem from './MenuItem';

const cx = classNames.bind(styles);


const Menu = ({ children, items = [] }) => {

    const renderItems = () => {
        return items.map((item, index) => {
            return <MenuItem key={index} data={item} />
        })
    }

    return (
        <Tippy
            interactive
            placement='bottom-end'
            delay={[0, 3000]}
            render={attrs => (
                <div className={cx('setting-items')} tabIndex="-1" {...attrs}>
                    <PopperWrapper>
                        {renderItems()}
                    </PopperWrapper>
                </div>
            )}
        >
            {children}
        </Tippy>
    )
}

export default Menu;