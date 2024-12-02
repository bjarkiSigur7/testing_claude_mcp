async function getCoin(id) {
  const res = await fetch(`https://api.coingecko.com/api/v3/coins/${id}?localization=false&tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=false`);
  if (!res.ok) throw new Error('Failed to fetch coin');
  return res.json();
}

export default async function CoinPage({ params }) {
  const coin = await getCoin(params['coin-id']);

  return (
    <div>
      <div className="flex items-center gap-4 mb-8">
        <img src={coin.image.large} alt={coin.name} className="w-16 h-16" />
        <h1 className="text-3xl font-bold">{coin.name}</h1>
      </div>

      <div className="grid gap-4">
        <div className="p-4 border rounded">
          <h2 className="font-bold mb-2">Price</h2>
          <p className="text-2xl">${coin.market_data.current_price.usd.toFixed(2)}</p>
          <p className={`${coin.market_data.price_change_percentage_24h > 0 ? 'text-green-500' : 'text-red-500'}`}>
            {coin.market_data.price_change_percentage_24h.toFixed(2)}% (24h)
          </p>
        </div>

        <div className="p-4 border rounded">
          <h2 className="font-bold mb-2">Market Cap</h2>
          <p>${coin.market_data.market_cap.usd.toLocaleString()}</p>
        </div>

        <div className="p-4 border rounded">
          <h2 className="font-bold mb-2">Trading Volume (24h)</h2>
          <p>${coin.market_data.total_volume.usd.toLocaleString()}</p>
        </div>

        <div className="p-4 border rounded">
          <h2 className="font-bold mb-2">Description</h2>
          <p>{coin.description.en}</p>
        </div>
      </div>
    </div>
  );
}