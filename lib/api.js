const options = () => {
  return {
    method: 'GET',
    headers: {
      'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com',
      'X-RapidAPI-Key': '443dfb2898mshf811f4ce550574bp136540jsnf2247128cf74',
    },
  };
};

export const getAllCoins = async () => {
  const response = await fetch(
    'https://coinranking1.p.rapidapi.com/coins?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=24h&tiers=1&orderBy=marketCap&orderDirection=desc&limit=50&offset=0',
    options()
  );
  const allCoins = await response.json();
  return allCoins;
};

export const getCoinDetails = async (id) => {
  const response = await fetch(
    `https://coinranking1.p.rapidapi.com/coin/${id}?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=24h`,
    options()
  );
  const coinDetails = await response.json();
  return coinDetails;
};

export const getCoinIds = async () => {
  const allCoins = await getAllCoins();
  const coinIds = allCoins.data.coins.map((coin) => coin.uuid);
  return coinIds;
};
