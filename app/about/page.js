export default function About() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-6">About Crypto Price Tracker</h1>
      <div className="space-y-6">
        <p className="text-lg">This application helps you track cryptocurrency prices in real-time using the CoinGecko API. Stay updated with the latest market trends and make informed decisions.</p>
        
        <div className="bg-gray-50 p-6 rounded-lg border">
          <h2 className="text-2xl font-semibold mb-4">How it works</h2>
          <p className="mb-4">Our application fetches real-time data from CoinGecko's comprehensive cryptocurrency API, providing you with accurate and up-to-date information about:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Current prices in USD</li>
            <li>24-hour price changes</li>
            <li>Market capitalization</li>
            <li>Trading volumes</li>
            <li>Historical data and trends</li>
          </ul>
        </div>
      </div>
    </div>
  );
}