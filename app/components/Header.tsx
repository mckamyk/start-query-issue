import { useQuery } from "@tanstack/react-query"
import { getFeeRateQuery } from "../actions/feeRate"

export const Header = () => {
  const { data: feeRate } = useQuery(getFeeRateQuery)

  return <div>{feeRate}</div>
}
