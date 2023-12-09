import { useApi } from "@/hooks/useApi"
import { useQuery } from "@tanstack/react-query"

const useFetchBarCodeProducts = () => {
    const api = useApi()

    const query = useQuery(["barcode_products"], async() => {
        const res = await api.get<any>(`/barcode/`)
        return res?.data
      },
    )
    return query
  }
  export default useFetchBarCodeProducts