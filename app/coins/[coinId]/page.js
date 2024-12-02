import React from 'react';

async function getCoin(id) {
  const res = await fetch(
    `https://api.coingecko.com/api/v3/coins/${id}?localization=false&tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=false`,
    { next: { revalidate: 60 } }
  );
  
  if (!res.ok) {
    throw new Error('Failed to fetch coin data');
  }
  
  return res.json();
}

export default async function CoinPage({ params }) {
  const coin = await getCoin(params.coinId);

  return (
    <div className="max-w-6xl mx-auto py-8">
      <div className="flex items-center gap-6 mb-8">
        <img 
          src={coin.image?.large} 
          alt={coin.name} 
          className="w-16 h-16 rounded-full"
          width={64}
          height={64}
        />
        <div>
          <h1 className="text-3xl font-bold">{coin.name}</h1>
          <p className="text-gray-600">{coin.symbol?.toUpperCase()}</p>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 mb-8">
        <div className="p-6 border rounded-lg bg-white shadow-sm">
          <h2 className="font-bold text-xl mb-4">Price Information</h2>
          <div className="space-y-4">
            <div>
              <p className="text-gray-600 mb-1">Current Price</p>
              <p className="text-3xl font-semibold">
                ${coin.market_data?.current_price?.usd?.toLocaleString()}
              </p>
            </div>
            <div>
              <p className="text-gray-600 mb-1">24h Change</p>
              <p className={`text-lg font-semibold ${coin.market_data?.price_change_percentage_24h > 0 ? 'text-green-600' : 'text-red-600'}`}>
                {coin.market_data?.price_change_percentage_24h > 0 ? '↑' : '↓'}
                {Math.abs(coin.market_data?.price_change_percentage_24h).toFixed(2)}%
              </p>
            </div>
          </div>
        </div>

        <div className="p-6 border rounded-lg bg-white shadow-sm">
          <h2 className="font-bold text-xl mb-4">Market Stats</h2>
          <div className="space-y-4">
            <div>
              <p className="text-gray-600 mb-1">Market Cap</p>
              <p className="text-xl font-semibold">
                ${coin.market_data?.market_cap?.usd?.toLocaleString()}
              </p>
            </div>
            <div>
              <p className="text-gray-600 mb-1">Trading Volume (24h)</p>
              <p className="text-xl font-semibold">
                ${coin.market_data?.total_volume?.usd?.toLocaleString()}
              </p>
            </div>
          </div>
        </div>

        <div className="p-6 border rounded-lg bg-white shadow-sm">
          <h2 className="font-bold text-xl mb-4">Price Range (24h)</h2>
          <div className="space-y-4">
            <div>
              <p className="text-gray-600 mb-1">Low</p>
              <p className="text-xl font-semibold">
                ${coin.market_data?.low_24h?.usd?.toLocaleString()}
              </p>
            </div>
            <div>
              <p className="text-gray-600 mb-1">High</p>
              <p className="text-xl font-semibold">
                ${coin.market_data?.high_24h?.usd?.toLocaleString()}
              </p>
            </div>
          </div>
        </div>

        <div className="p-6 border rounded-lg bg-white shadow-sm">
          <h2 className="font-bold text-xl mb-4">Supply Information</h2>
          <div className="space-y-4">
            <div>
              <p className="text-gray-600 mb-1">Circulating Supply</p>
              <p className="text-xl font-semibold">
                {coin.market_data?.circulating_supply?.toLocaleString()} {coin.symbol?.toUpperCase()}
              </p>
            </div>
            {coin.market_data?.max_supply && (
              <div>
                <p className="text-gray-600 mb-1">Max Supply</p>
                <p className="text-xl font-semibold">
                  {coin.market_data.max_supply.toLocaleString()} {coin.symbol?.toUpperCase()}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      {coin.description?.en && (
        <div className="p-6 border rounded-lg bg-white shadow-sm">
          <h2 className="font-bold text-xl mb-4">About {coin.name}</h2>
          <div 
            className="prose max-w-none" 
            dangerouslySetInnerHTML={{ __html: coin.description.en }}
          />
        </div>
      )}
    </div>
  );
}