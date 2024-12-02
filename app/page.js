export default function Home() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-6">Welcome to Crypto Price Tracker</h1>
      <p className="text-lg mb-4">Track your favorite cryptocurrencies in real-time with our simple and intuitive interface.</p>
      <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
        <h2 className="text-xl font-semibold mb-3">Features</h2>
        <ul className="space-y-2">
          <li className="flex items-center">✓ Real-time cryptocurrency prices</li>
          <li className="flex items-center">✓ Detailed market information</li>
          <li className="flex items-center">✓ Price change tracking</li>
          <li className="flex items-center">✓ Market cap and volume data</li>
        </ul>
      </div>
    </div>
  );
}