import styles from './card.module.css';

const Card = (props) => {

    const classes = ' ' + props.className;

  return (
      <div className={styles.card + classes}>
          {props.children}
      </div>
  )
};

export default Card;