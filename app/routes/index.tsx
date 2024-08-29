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
  staleTime: 1000,
})

function Home() {
  const { data } = useQuery(getTitleQuery)
  const router = useRouter()

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <div>Look at browser console and server console logs.</div>
      <div>
        useQuery data: <span className="text-yellow-800">{data}</span>
      </div>
      <button
        className="bg-stone-700 rounded-md hover:bg-stone-600 transition-colors px-2 py-1"
        onClick={() => router.invalidate()}
      >
        Invalidate
      </button>
      <div className="max-w-[400px] text-center">
        I set the staleTime on both the query and route to 1000ms. Long enough
        to not be stale by the time the client loads, but long enough you can
        hit revalidate and it'll trigger.
      </div>
    </div>
  )
}
