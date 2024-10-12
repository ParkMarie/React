import { useFetchCart } from '../../api/cart'

export default function RouterCart() {
	const { data, isLoading } = useFetchCart()
	return (
		<div className="overflow-x-auto">
			<h1 className='text-3xl mb-6'>Корзина</h1>
			{isLoading ? (
				<span className="loading loading-dots loading-lg"></span>
			) : (

				<table className="table">
					{/* head */}
					<thead>
						<tr>
							<th></th>
							<th>Название</th>
							<th>Количество</th>
							<th>Цена</th>
						</tr>
					</thead>
					<tbody>
						{data.products.map(q => (
							<tr key={q.id}>
								<td className='w-24'>
									<img src={q.thumbnail} className='w-24' loading='lazy' />
								</td>
								<td>{q.title}</td>
								<td>{q.quantity}</td>
								<td>{q.price}</td>
							</tr>
						))}
						<tr>
							<th colSpan={4} className='text-left text-2xl'>
								Сумма к оплате: {data.total}
							</th>
						</tr>
					</tbody>
				</table>
			)}
		</div>
	)
}
