import { Card, Page, Layout, Button, Frame } from '@shopify/polaris'
import { useCallback, useEffect, useState } from 'react'
import { useApi } from '@/hooks/useApi'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import { ResourcePicker, useToast } from '@shopify/app-bridge-react'
import { SelectPayload } from '@shopify/app-bridge/actions/ResourcePicker'
import BarCodeTable from '@/components/index/BarCodeTable'
import useCreateBarCode from '@/api-client/useCreateBarCode'
import useFetchBarCodeProducts from '@/api-client/useFetchBarCodeProducts'

export default function HomePage() {
  const api = useApi()
  const [openResourcePikcer, setOpenResourcePicker] = useState(false)
  const [displayProducts, setDisplayProducts] = useState<any | null>(null);

  const queryClient = useQueryClient();

  const { data, isLoading } = useQuery(['products'], () => {
    return api.get(`/products`)
  })

  const { data: barcodeProducts, isFetching } = useFetchBarCodeProducts()
  const { mutateAsync: createBarCodeAPI, isLoading: isCreating } =
    useCreateBarCode()

  const { show: showToast } = useToast()

  const products = data?.data || []

  useEffect(() => {
    console.log('Data Fetched', products)
  }, [products])
  useEffect(() => {
    if (barcodeProducts?.length > 0) {
      const previewProducts = products?.filter((p:any)=> {        
        return barcodeProducts?.some((p1:any)=> p1.productId === p?.admin_graphql_api_id)
      })
      setDisplayProducts(previewProducts)
    }
  }, [barcodeProducts,products])
  

  const toggleResourcePicker = useCallback(() => {
    setOpenResourcePicker((setPopoverActive) => !setPopoverActive)
  }, [])

  return (
    <Page >
      <Layout>
        <Layout.Section>
          <Frame>          
          <Card>
            <h1 className="text-3xl font-eOpenxtrabold mb-5">
              Bar Code Labelled Inventory
            </h1>
            <div className="grid ">
              <Button onClick={toggleResourcePicker}>
                Create Barcode label
              </Button>
            </div>

            <ResourcePicker
              open={openResourcePikcer}
              onCancel={toggleResourcePicker}
              resourceType="Product"
              showVariants={false}
              selectMultiple={true}
              initialSelectionIds={[]}
              onSelection={async (selectPayload: SelectPayload) => {
                try {
                  const updatedIds = selectPayload.selection.map((p) =>{ return {productId:p.id,productName:p.title}})     
                  const create = await createBarCodeAPI(updatedIds)
                  if (create?.data?.count > 0) {
                    await queryClient.refetchQueries(['barcode_products'])
                    showToast('Barcode created')
                  }
                } catch (error) {}
              }}
            />
            <BarCodeTable isLoading={isFetching} previewProducts={displayProducts} />
          </Card>
          </Frame>
        </Layout.Section>
      </Layout>
    </Page>
  )
}
