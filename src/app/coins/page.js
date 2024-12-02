import Link from 'next/link';

async function getCoins() {
  const res = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false');
  if (!res.ok) throw new Error('Failed to fetch coins');
  return res.json();
}

export default async function Coins() {
  const coins = await getCoins();

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Cryptocurrency Prices</h1>
      <div className="grid gap-4">
        {coins.map((coin) => (
          <Link key={coin.id} href={`/coins/${coin.id}`} className="p-4 border rounded hover:bg-gray-50">
            <div className="flex items-center gap-4">
              <img src={coin.image} alt={coin.name} className="w-8 h-8" />
              <h2 className="font-bold">{coin.name}</h2>
              <p>${coin.current_price.toFixed(2)}</p>
              <p className={coin.price_change_percentage_24h > 0 ? 'text-green-500' : 'text-red-500'}>
                {coin.price_change_percentage_24h.toFixed(2)}%
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}