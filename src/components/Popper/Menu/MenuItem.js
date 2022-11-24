
import Button from "~/components/Button";
import classNames from "classnames/bind";
import styles from './Menu.module.scss';

const cx = classNames.bind(styles);

const MenuItem = ({ data }) => {
    return <Button leftIcon={data.icon} to={data.to} linkBtn className={cx('menu-item')} >

        <span>{data.title}</span>
    </Button>
}

export default MenuItem;