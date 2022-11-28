import HeadlessTippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountItem from '~/components/AccountItem';
import { faCircleXmark, faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './Search.module.scss';
import { useEffect, useRef, useState } from 'react';

const cx = classNames.bind(styles);

const Search = () => {

    const [searchResult, setSearchResult] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const [showResult, setShowResult] = useState(true);
    const [loadding, setLoadding] = useState(false);

    const inputSearch = useRef();

    useEffect(() => {
        if (!searchValue.trim()) {
            setSearchResult([]);
            return;
        }
        setLoadding(true);
        fetch(`https://tiktok.fullstack.edu.vn/api/users/search?q=${encodeURIComponent(searchValue)}&type=less`)
            .then(res => res.json())
            .then(res => {
                setLoadding(false)
                setSearchResult(res.data)
            })
            .catch(() => {
                setLoadding(false)
            })
    }, [searchValue])

    const handleHideResult = () => {
        setShowResult(false);
    }

    return (
        <HeadlessTippy
            visible={searchResult.length > 0 && showResult}
            interactive
            onClickOutside={handleHideResult}
            render={attrs => (
                <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                    <PopperWrapper>
                        <h4 className={cx('search-title')}>
                            Accounts
                        </h4>
                        {
                            searchResult.map((item) => {
                                return <AccountItem key={item.id} account={item} />
                            })
                        }

                    </PopperWrapper>
                </div>
            )}
        >
            <div className={cx('search')}>
                <input
                    ref={inputSearch}
                    placeholder="Search accounts and videos"
                    spellCheck={false}
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                    onFocus={() => setShowResult(true)}
                />

                {
                    !!searchValue && !loadding &&
                    <button
                        className={cx('clear')}
                        onClick={() => {
                            setSearchResult([])
                            setSearchValue('')
                            inputSearch.current.focus()
                        }}
                    >
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </button>
                }
                {loadding && <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />}

                <button className={cx('search-btn')}>
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>
            </div>
        </HeadlessTippy>
    )
}

export default Search;