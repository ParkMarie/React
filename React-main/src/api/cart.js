import useSWR from 'swr'
import useSWRMutation from 'swr/mutation'
import fetcher from './fetch'

export function useFetchCart() {
  return useSWR('https://dummyjson.com/carts/1', fetcher)
}
async function updateCart(url, { arg }) {
  return await fetch(url, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ merge: true, products: arg })
  }).then(res => res.json())
}
export function useFetchCartAdd() {
  return useSWRMutation('https://dummyjson.com/carts/1', updateCart)
}
