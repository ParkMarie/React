import useSWR from 'swr'
import fetcher from './fetch'
import { useMemo } from 'react'

export function useFetchProducts({ category }) {
  const url = useMemo(() => {
    let d = 'https://dummyjson.com/products';
    if (category) {
      d = `${d}/category/${category}`
    }
    return d;
  }, [category])
  return useSWR(url, fetcher)
}

export function useFetchProduct(id) {
  return useSWR('https://dummyjson.com/products/' + id, fetcher)
}


export function useFetchCatergories() {
  return useSWR('https://dummyjson.com/products/categories', fetcher)
}

