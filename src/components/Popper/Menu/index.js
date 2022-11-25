import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import { useState } from 'react';

import { Wrapper as PopperWrapper } from '~/components/Popper';
import Header from './Header';
import styles from './Menu.module.scss';
import MenuItem from './MenuItem';

const cx = classNames.bind(styles);


const Menu = ({ children, items = [], onChange = () => { } }) => {

    const [history, setHistory] = useState([{
        data: items
    }]);

    const current = history[history.length - 1];

    const renderItems = () => {
        return current.data.map((item, index) => {
            const isParent = !!item.childrenItem
            return <MenuItem onClick={() => {

                if (isParent) {
                    setHistory(prev => [
                        ...prev,
                        item.childrenItem
                    ])
                } else {
                    onChange(item)
                }
            }} key={index} data={item} />
        })
    }
    return (
        <Tippy
            interactive
            placement='bottom-end'
            delay={[0, 1000]}
            render={attrs => (
                <div className={cx('setting-items')} tabIndex="-1" {...attrs}>
                    <PopperWrapper>
                        {current.title &&
                            <Header onBack={() => {
                                setHistory(prev => prev.slice(0, prev.length - 1))
                            }} title={current.title} />}
                        {renderItems()}
                    </PopperWrapper>
                </div>
            )}
            onHide={() => setHistory(prev => prev.slice(0, 1))}
        >
            {children}
        </Tippy>
    )
}

export default Menu;