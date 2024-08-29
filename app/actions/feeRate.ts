import { queryOptions } from "@tanstack/react-query"

async function getTitle() {
  console.log("getFeeRate fetch")
  return fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then((r) => r.json())
    .then((r) => r.title) as Promise<string>
}

export const getTitleQuery = queryOptions({
  queryKey: ["feeRate"],
  queryFn: () => {
    console.log("getFeeRate useQuery")
    return getTitle()
  },
  staleTime: 1000, // 2 minutes
})
