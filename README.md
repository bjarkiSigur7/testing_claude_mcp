# Crypto Price Tracker

A modern, real-time cryptocurrency price tracking application built with Next.js 13 App Router and Tailwind CSS. Track prices, view detailed market information, and search for your favorite cryptocurrencies with ease.

![Crypto Price Tracker Screenshot](https://raw.githubusercontent.com/bjarkiSigur7/testing_claude_mcp/main/screenshot.png)

## 🚀 Features

- **Real-time Cryptocurrency Data**: Track live prices, market caps, and 24h changes
- **Detailed Coin Information**: View comprehensive data for each cryptocurrency
- **Search Functionality**: Find specific cryptocurrencies quickly
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Server-Side Rendering**: Fast page loads and optimal SEO
- **Error Handling**: Graceful error handling and retry mechanisms
- **Rate Limit Handling**: Smart handling of API rate limits
- **Pagination**: Browse through large datasets efficiently

## 🛠️ Tech Stack

- **Framework**: Next.js 13 (App Router)
- **Styling**: Tailwind CSS
- **Data**: CoinGecko API
- **Deployment**: Vercel
- **Language**: TypeScript

## 📦 Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/bjarkiSigur7/testing_claude_mcp.git
   cd testing_claude_mcp
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) with your browser.

## 🌐 API Usage

The application uses the CoinGecko API for cryptocurrency data. No API key is required for basic usage, but be aware of rate limits:

- 10-30 calls/minute
- Implemented retry mechanism with exponential backoff
- Cache implemented to minimize API calls

## 📁 Project Structure

```
├── app/
│   ├── coins/
│   │   ├── [coinId]/
│   │   │   ├── page.js       # Individual coin page
│   │   │   ├── error.js      # Coin-specific error handling
│   │   │   └── loading.js    # Coin page loading state
│   │   ├── components/       # Shared coin components
│   │   ├── search/          # Search functionality
│   │   ├── page.js          # Main coins listing
│   │   └── loading.js       # Main page loading state
│   ├── layout.js            # Root layout
│   └── page.js              # Home page
├── public/                  # Static assets
└── package.json            # Project dependencies
```

## 🔑 Key Features Explained

### Real-time Price Updates
- Data revalidation every 60 seconds
- Optimistic UI updates
- Smooth price change animations

### Search Implementation
- Client-side filtering
- Server-side search capabilities
- Debounced search input
- Loading states for better UX

### Error Handling
- Comprehensive error boundaries
- Retry mechanism for failed requests
- User-friendly error messages
- Recovery options for users

## 🚧 Known Limitations

1. CoinGecko API Rate Limits
   - Free tier has limited calls per minute
   - Implement caching if needed for higher usage

2. Price Update Frequency
   - Data refreshes every 60 seconds
   - Real-time WebSocket updates not implemented

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Data provided by [CoinGecko](https://www.coingecko.com/en/api)
- Built with [Next.js](https://nextjs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)

## 📬 Contact

For questions or feedback, please:
- Open an issue
- Submit a pull request
- Contact the maintainer

## 🔮 Future Plans

- [ ] Add cryptocurrency price alerts
- [ ] Implement portfolio tracking
- [ ] Add price history charts
- [ ] Enable user watchlists
- [ ] Add more market indicators
- [ ] Implement WebSocket for real-time updates