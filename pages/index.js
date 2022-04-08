import Link from 'next/link';
import CoinItem from '../components/coin/coin-item';
import { getAllCoins } from '../lib/api';

const HomePage = (props) => {
  const { coins } = props.response.data;

  return (
    <ul>
      {coins &&
        coins.map((coin) => {
          return (
            <Link href={`/${coin.uuid}`}>
              <a>
                <CoinItem
                  name={coin.name}
                  iconUrl={coin.iconUrl}
                  change={coin.change}
                />
              </a>
            </Link>
          );
        })}
    </ul>
  );
};

export default HomePage;

export const getServerSideProps = async () => {
  const response = await getAllCoins();
  return {
    props: { response },
  };
};
