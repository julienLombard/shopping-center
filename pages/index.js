import { Layout } from '../components/Layout';
import { Shop } from '../components/Shop';
import { data } from '../utils/data';

export default function Home() {
  return (
    <Layout title="Shopping Center">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-col-4">
        {data.shops.map((shop) => (
          <Shop shop={shop} key={shop.slug}></Shop>
        ))}
      </div>
    </Layout>
  );
}
