export interface Coin {
  id: string;
  name: string;
  symbol: string;
  image: string;
  current_price: number;
  price_change_percentage_24h: number;
  market_cap: number;
  total_volume: number;
}

export interface SearchParams {
  page?: string;
}

export interface PaginationProps {
  currentPage: number;
}

export interface HomeProps {
  searchParams: SearchParams;
}