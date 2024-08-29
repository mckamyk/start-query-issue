import { queryOptions } from "@tanstack/react-query"

async function getNumber() {
  console.log("randomNumber generated")
  const r = Math.random()
  console.log(r)
  return r
}

async function getTitle() {
  console.log("getTitle")
  const data = await fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then((res) => res.json())
    .then((data) => data.title)

  return data
}

export const getNumberQuery = queryOptions({
  queryKey: ["randomNumber"],
  queryFn: () => {
    console.log("randomNumber useQuery")
    return getNumber()
  },
  staleTime: 1000, // 2 minutes
})

export const getTitleQuery = queryOptions({
  queryKey: ["getTitle"],
  queryFn: () => {
    console.log("getTitle useQuery")
    return getTitle()
  },
  staleTime: 1000, // 2 minutes
})
