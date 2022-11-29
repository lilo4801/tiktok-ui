import HeadlessTippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountItem from '~/components/AccountItem';
import { faCircleXmark, faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './Search.module.scss';
import { useEffect, useRef, useState } from 'react';
import { useDebounce } from '~/hooks';
import * as searchServices from '~/services/searchService';

const cx = classNames.bind(styles);

const Search = () => {

    const [searchResult, setSearchResult] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const [showResult, setShowResult] = useState(false);
    const [loadding, setLoadding] = useState(false);

    const debouncedValue = useDebounce(searchValue, 800);

    const inputSearch = useRef();

    useEffect(() => {
        if (!debouncedValue.trim()) {
            setSearchResult([]);
            return;
        }
        const fetchAPI = async () => {
            setLoadding(true);

            const result = await searchServices.search(debouncedValue);
            setSearchResult(result);

            setLoadding(false);
        }
        fetchAPI()
    }, [debouncedValue])

    const handleHideResult = () => {
        setShowResult(false);
    }

    const handleChangeInput = (e) => {
        const searchInput = e.target.value;
        if (searchInput.startsWith(' ')) {
            return;
        }
        setSearchValue(e.target.value)
    }

    return (
        // handle warning tippy js
        <div>
            <HeadlessTippy
                visible={searchResult.length > 0 && showResult}
                interactive
                onClickOutside={handleHideResult}
                placement="bottom"
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
                        onChange={(e) => handleChangeInput(e)}
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

                    <button className={cx('search-btn')} onMouseDown={e => e.preventDefault()}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                </div>
            </HeadlessTippy>
        </div>
    )
}

export default Search;