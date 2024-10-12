import { NavLink } from "react-router-dom"
import { useFetchCatergories } from "../../api/product"

export default function Category() {
  const { data, isLoading } = useFetchCatergories()
  if (isLoading) {
    return (
      <span className="loading loading-dots loading-lg"></span>
    )
  }

  return (
    <div>
      <ul className="menu bg-base-200 rounded-box">
        <p className="p-2 font-bold text-xl">Категории:</p>
        <li>
          <NavLink className={({ isActive }) => `block hover:text-primary duration-300 ${isActive ? 'text-primary font-semibold' : ''}`} to='/catalog'>All</NavLink>
        </li>
        {data.map(q => (
          <li key={q.sluq}>
            <NavLink className={({ isActive }) => `block hover:text-primary duration-300 ${isActive ? 'text-primary font-semibold' : ''}`} to={`/catalog/${q.slug}`}>{q.name}</NavLink>
          </li>
        ))}
      </ul>
    </div>
  )
}
