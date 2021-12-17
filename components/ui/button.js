import styles from './button.module.css';
import Link from "next/link";

const Button = (props) => {

    if (props.link){
        return (
            <Link href={props.link}>
                <a className={styles.btn}>
                    {props.children}
                </a>
            </Link>
        )
    }

    return (
        <button onClick={props.onClick} className={props.btn}>
            {props.children}
        </button>
    )
};

export default Button;