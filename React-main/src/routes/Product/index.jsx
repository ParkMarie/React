import { useParams } from "react-router-dom"
import { useFetchProduct } from "../../api/product";

export default function RouterProductItem() {
  const { id } = useParams();
  const { data, isLoading } = useFetchProduct(id)
  if (isLoading) {
    return (
      <span className="loading loading-dots loading-lg"></span>
    )
  }

  console.log(data)
  return (
    <div>
      <h1 className="text-3xl font-semibold">{data.title}</h1>
      <div className="flex items-center gap-4 flex-wrap">
        {data.images.map((q, i) =>
          <img src={q} key={i} className="w-96" loading='lazy' />
        )}
      </div>

      {JSON.stringify(data)}
    </div>
  )
}
