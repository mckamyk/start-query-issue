import { createFileRoute, useRouter } from "@tanstack/react-router"
import { useQuery } from "@tanstack/react-query"
import { getTitleQuery } from "../actions/feeRate"

export const Route = createFileRoute("/")({
  component: Home,
  loader: async ({ context }) => {
    console.log("loader")
    context.queryClient.prefetchQuery(getTitleQuery)
    return {}
  },
  staleTime: 1000 * 60 * 2,
})

function Home() {
  const { data } = useQuery(getTitleQuery)
  const router = useRouter()

  return (
    <div>
      <div>Hello, world!</div>
      <div>Fee rate: {data?.toLocaleString()}</div>
      <button onClick={() => router.invalidate()}>Invalidate</button>
    </div>
  )
}
