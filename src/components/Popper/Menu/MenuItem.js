import PropTypes from 'prop-types';
import Button from "~/components/Button";
import classNames from "classnames/bind";
import styles from './Menu.module.scss';

const cx = classNames.bind(styles);

const MenuItem = ({ data, onClick }) => {

    const classes = cx('menu-item', {
        separate: data.separate
    })

    return <Button leftIcon={data.icon} to={data.to} linkBtn className={classes} onClick={onClick}>
        <span>{data.title}</span>
    </Button>
}
MenuItem.propTypes = {
    data: PropTypes.object.isRequired,
    onClick: PropTypes.func
}

export default MenuItem;