import { NavLink } from "react-router-dom"

import { useFetchCart } from '../../api/cart'

export default function HeaderCart() {
	const { data, isLoading } = useFetchCart()

	if (isLoading) return;

	return (
		<div className="dropdown dropdown-end">
			<div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
				<div className="indicator">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-5 w-5"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor">
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
					</svg>
					<span className="badge badge-sm indicator-item">{data.totalProducts}</span>
				</div>
			</div>
			<div
				tabIndex={0}
				className="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow">
				<div className="card-body">
					<span className="text-lg font-bold">{data.totalProducts} товаров</span>
					<span className="text-info">Сумма: ${data.total}</span>
					<div className="card-actions">
						<NavLink to='/cart' className="btn btn-primary btn-block">Корзина</NavLink>
					</div>
				</div>
			</div>
		</div>
	)
}