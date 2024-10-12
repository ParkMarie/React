import { useParams } from "react-router-dom"
import { useFetchProducts } from "../../api/product"
import Category from "./category"
import ProductItem from "./item"
import { Link } from "react-router-dom";

export default function RouterCatalog() {
  const { category } = useParams();
  const { data, isLoading } = useFetchProducts({ category })
  if (isLoading) {
    return (
      <span className="loading loading-dots loading-lg"></span>
    )
  }

  return (
    <div className="grid grid-cols-6 gap-6">
      <aside>
        <div className="sticky top-2">
          <Category />
        </div>
      </aside>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 col-span-5">
        {data.products.map(q => <article key={q.id}><Link to={`/product/${q.id}`} className="hover:text-primary"><ProductItem product={q} /></Link></article>)}
      </div>
    </div>
  )
}
