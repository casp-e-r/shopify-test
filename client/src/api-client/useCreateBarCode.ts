import { useApi } from "@/hooks/useApi"
import { useToast } from "@shopify/app-bridge-react"
import { useMutation } from "@tanstack/react-query"

const useCreateBarCode = () => {
    const api = useApi()
    const { show: showToast } = useToast()
      
    const mutation = useMutation(
      (data: any) => {
        return api.post<any>(`/barcode/`, data)
      },
      {
        onSuccess: (data) => {
          console.log('data: ', data)
          showToast('Barcode created')
        },
        onError: () => {
          showToast('Update failed', { isError: true })
        },
      }
    )
  
    return mutation
  }
  export default useCreateBarCode