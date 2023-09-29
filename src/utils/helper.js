export function filterData(restaurants, searchText) {
  const data = restaurants?.filter((restaurant) =>
    restaurant.info?.name?.toLowerCase().includes(searchText.toLowerCase())
  )
  return data
}