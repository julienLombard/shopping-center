import { Layout } from '../components/Layout';
import { ShopCard } from '../components/ShopCard';
import { shopList } from '../utils/shopList';

export default function Home() {
  return (
    <Layout title="Shopping Center">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-col-4">
        {shopList.shops.map((shop) => (
          <ShopCard shop={shop} key={shop.slug}></ShopCard>
        ))}
      </div>
    </Layout>
  );
}
