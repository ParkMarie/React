import { useFetchCartAdd } from "../../api/cart"

export default function ProductItem({ product }) {
  const { trigger, data, isMutating } = useFetchCartAdd();

  const onAdd = (event) => {
    event.preventDefault();
    trigger([{ id: product.id, quantity: 1 }])
  }

  return (
    <div className="card bg-base-200 shadow-xl mb-4">
      <figure>
        <img src={product.thumbnail} alt={product.title} loading='lazy' />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{product.title}</h2>
        <p className="mb-2">{product.description}</p>
        <div className="card-actions mb-2">
          {product.tags.map((q, i) => (
            <span className="badge badge-outline" key={i}>{q}</span>
          ))}
          <span className="badge badge-secondary">{product.availabilityStatus}</span>
        </div>

        <button type="button" disabled={isMutating || data} onClick={onAdd} className="btn btn-primary">Buy ${product.price}</button>
      </div>
    </div>
  )
}

ProductItem.propTypes = {
  product: {
  }
}
