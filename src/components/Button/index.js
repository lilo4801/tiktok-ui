import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import styles from './Button.module.scss';

const cx = classNames.bind(styles);

const Button = ({
    children,
    to,
    href,
    onClick,
    primary,
    outline,
    linkBtn,
    rounded,
    small,
    large,
    className,
    leftIcon,
    rightIcon,
    ...passProps
}) => {
    let Comp = 'button';
    const props = {
        onClick,
        ...passProps
    }
    if (to) {
        props.to = to
        Comp = Link
    } else if (href) {
        props.href = href
        Comp = 'a'
    }

    const classes = cx('wrapper', {
        [className]: [className],
        primary,
        outline,
        linkBtn,
        rounded,
        small,
        large
    });
    return (
        <Comp className={classes} {...props}>
            {
                leftIcon && <span className={cx('icon')}>{leftIcon}</span>
            }
            <span>{children}</span>
            {
                rightIcon && <span className={cx('icon')}>{rightIcon}</span>
            }
        </Comp>
    )
}

export default Button;