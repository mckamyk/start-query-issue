import { createRootRouteWithContext } from "@tanstack/react-router"
import { Outlet, ScrollRestoration } from "@tanstack/react-router"
import { Body, Head, Html, Meta, Scripts } from "@tanstack/start"

// @ts-expect-error
import css from "../index.css?url"
import type { QueryClient } from "@tanstack/react-query"

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  meta: () => [
    {
      charSet: "utf-8",
    },
    {
      name: "viewport",
      content: "width=device-width, initial-scale=1",
    },
    {
      title: "Tanstack Start",
    },
  ],
  links: () => [{ rel: "stylesheet", href: css }],
  component: RootComponent,
})

function RootComponent() {
  return (
    <RootDocument>
      <Outlet />
    </RootDocument>
  )
}

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <Html>
      <Head>
        <Meta />
      </Head>
      <Body>
        <div className="flex h-screen flex-col items-center justify-center bg-stone-900 text-white">{children}</div>
        <ScrollRestoration />
        <Scripts />
      </Body>
    </Html>
  )
}
