import CoinItem from '../components/coin/coin-item';
import { Markup } from 'interweave';
import { Fragment } from 'react';
import { getCoinDetails, getCoinIds } from '../lib/api';

const CoinDetail = (props) => {
  const { coin } = props;
  return (
    <Fragment>
      <CoinItem name={coin.name} iconUrl={coin.iconUrl}>
        <div>
          <Markup content={coin.description} />
        </div>
      </CoinItem>
    </Fragment>
  );
};

export const getStaticProps = async ({ params }) => {
  const id = params.uuid;
  const response = await getCoinDetails(id);
  const coin = response.data;
  return {
    props: coin,
  };
};

export const getStaticPaths = async () => {
  const ids = await getCoinIds();
  const paths = ids.map((id) => ({ params: { uuid: id } }));
  return { paths, fallback: false };
};

export default CoinDetail;
