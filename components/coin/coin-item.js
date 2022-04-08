import Image from 'next/image';
import classes from './coin-item.module.css';

const CoinItem = (props) => {
  const { name, change, iconUrl } = props;

  return (
    <div className={classes.item}>
      <h1>{name}</h1>
      <Image src={iconUrl} width={200} height={200} alt={name} />
      <div>Change: {change}</div>
      {props.children}
    </div>
  );
};

export default CoinItem;
