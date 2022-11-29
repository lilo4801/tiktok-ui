import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import styles from "./AccountItem.module.scss";
import PropTypes from "prop-types";
const cx = classNames.bind(styles);

const AccountItem = ({ account }) => {

    return (
        <Link to={`@${account.nickname}`} className={cx('wrapper')}>
            <img className={cx('avatar')} src={account.avatar} alt={account.nickname} />
            <div className={cx('infor')}>
                <p className={cx('name')}>
                    <span>{account.full_name}</span>
                    {
                        account.tick && <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                    }

                </p>
                <span className={cx('username')}>{account.nickname}</span>
            </div>
        </Link>
    )
}

AccountItem.propTypes = {
    account: PropTypes.object.isRequired
}

export default AccountItem;