import Link from 'next/link';
import PaginationControls from './components/PaginationControls';
import { Coin, HomeProps } from '../types/coins';

async function getCoins(page = 1, perPage = 20): Promise<Coin[]> {
  const res = await fetch(
    `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=price_desc&per_page=${perPage}&page=${page}&sparkline=false`,
    { next: { revalidate: 60 } }
  );
  
  if (!res.ok) {
    throw new Error('Failed to fetch coins');
  }
  
  return res.json();
}

export default async function Coins({ searchParams }: HomeProps) {
  const page = Number(searchParams?.page) || 1;
  const perPage = 20;
  const coins = await getCoins(page, perPage);

  return (
    <div className="max-w-6xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Cryptocurrency Prices</h1>
        <Link 
          href="/coins/search"
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
        >
          Search Coins
        </Link>
      </div>

      <div className="overflow-x-auto bg-white rounded-lg shadow">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Rank</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Coin</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">24h Change</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Market Cap</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Volume (24h)</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {coins.map((coin, index) => (
              <tr key={coin.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {(page - 1) * perPage + index + 1}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <img 
                      src={coin.image} 
                      alt={coin.name} 
                      className="w-8 h-8 mr-3"
                      width={32}
                      height={32}
                    />
                    <div>
                      <div className="text-sm font-medium text-gray-900">{coin.name}</div>
                      <div className="text-sm text-gray-500">{coin.symbol.toUpperCase()}</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">
                    ${coin.current_price.toLocaleString()}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`inline-flex text-sm ${coin.price_change_percentage_24h > 0 ? 'text-green-600' : 'text-red-600'}`}>
                    {coin.price_change_percentage_24h > 0 ? '↑' : '↓'}
                    {Math.abs(coin.price_change_percentage_24h).toFixed(2)}%
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  ${coin.market_cap.toLocaleString()}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  ${coin.total_volume.toLocaleString()}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <Link
                    href={`/coins/${coin.id}`}
                    className="text-blue-600 hover:text-blue-900 bg-blue-50 px-3 py-1 rounded-full"
                  >
                    Details →
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-6">
        <PaginationControls currentPage={page} />
      </div>
    </div>
  );
}