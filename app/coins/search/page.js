'use client';

import { useState, useCallback } from 'react';
import Link from 'next/link';

export default function SearchPage() {
  const [query, setQuery] = useState('');
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const searchCoins = useCallback(async () => {
    if (!query.trim()) return;

    setLoading(true);
    setError(null);

    try {
      const res = await fetch(
        `https://api.coingecko.com/api/v3/search?query=${encodeURIComponent(query)}`
      );

      if (!res.ok) throw new Error('Failed to search coins');

      const data = await res.json();
      setCoins(data.coins);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, [query]);

  return (
    <div className="max-w-4xl mx-auto py-8">
      <div className="flex items-center gap-4 mb-8">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for a cryptocurrency..."
          className="flex-1 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          onKeyDown={(e) => e.key === 'Enter' && searchCoins()}
        />
        <button
          onClick={searchCoins}
          className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
          disabled={loading}
        >
          {loading ? 'Searching...' : 'Search'}
        </button>
      </div>

      {error && (
        <div className="p-4 bg-red-50 text-red-600 rounded-lg mb-6">
          {error}
        </div>
      )}

      <div className="space-y-4">
        {coins.map((coin) => (
          <Link 
            key={coin.id} 
            href={`/coins/${coin.id}`}
            className="block p-4 border rounded-lg hover:bg-gray-50 transition-colors"
          >
            <div className="flex items-center gap-4">
              <img
                src={coin.large}
                alt={coin.name}
                className="w-12 h-12"
                width={48}
                height={48}
              />
              <div>
                <h2 className="font-semibold">{coin.name}</h2>
                <p className="text-sm text-gray-600">{coin.symbol.toUpperCase()}</p>
              </div>
              {coin.market_cap_rank && (
                <div className="ml-auto text-sm text-gray-600">
                  Market Cap Rank: #{coin.market_cap_rank}
                </div>
              )}
            </div>
          </Link>
        ))}
        {query && !loading && coins.length === 0 && (
          <div className="text-center py-8 text-gray-600">
            No cryptocurrencies found matching your search.
          </div>
        )}
      </div>
    </div>
  );
}