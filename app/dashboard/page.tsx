import { fetchRevenue, fetchLatestInvoices, fetchCardData } from '@/app/lib/data';

export default async function Page() {
  const revenue = await fetchRevenue(); // 売上データを取得
  const latestInvoices = await fetchLatestInvoices(); // 最新5件の請求書を取得
  const {
    numberOfInvoices,
    numberOfCustomers,
    totalPaidInvoices,
    totalPendingInvoices,
  } = await fetchCardData(); // カード用の集計データを取得
}