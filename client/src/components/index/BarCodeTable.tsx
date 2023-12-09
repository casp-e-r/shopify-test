import {
  IndexTable,
  SkeletonBodyText,
  SkeletonThumbnail,
  Text,
} from '@shopify/polaris'
import { useState } from 'react'
import BarCodeTableRow from './BarCodeTableRow'
import ProductModal from './ProductModal'

interface Props {
  isLoading: boolean
  previewProducts: any[]
}

function BarCodeTable({ isLoading, previewProducts }: Props) {

  const [selectedProduct, setSelectedProduct] = useState<any | null>(null)

  const resourceName = {
    singular: 'Barcode',
    plural: 'Barcodes',
  }

  const emptyStateMarkup = isLoading ? (
    <div className="flex flex-col justify-around">
      <div className="flex flex-row justify-between p-1 items-center">
        <div className="mr-1">
          <SkeletonThumbnail size="small" />
        </div>
        <SkeletonBodyText lines={2} />
      </div>
      <div className="flex flex-row justify-between p-1 items-center">
        <div className="mr-1">
          <SkeletonThumbnail size="small" />
        </div>
        <SkeletonBodyText lines={2} />
      </div>
      <div className="flex flex-row justify-between p-1 items-center">
        <div className="mr-1">
          <SkeletonThumbnail size="small" />
        </div>
        <SkeletonBodyText lines={2} />
      </div>
    </div>
  ) : (
    <div className="flex flex-col gap-1 items-center justify-center">
      <Text as="h1" variant="headingLg">
        The current inventory lacks barcode information for products.
      </Text>
    </div>
  )

  return (
    <>
      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          handleModal={setSelectedProduct}
        />
      )}
      <IndexTable
        headings={[
          { title: '' },
          { title: 'Product ID' },
          { title: 'Title' },
          { title: 'variants count' },
        ]}
        loading={isLoading}
        resourceName={resourceName}
        itemCount={previewProducts ? previewProducts.length : 0}
        selectable={true}
        emptyState={emptyStateMarkup}
      >
        {previewProducts &&
          previewProducts?.map((product, index: number) => (
            <BarCodeTableRow
              product={product}
              index={index}
              key={product?.id}
              setSelectedProduct={setSelectedProduct}
            />
          ))}
      </IndexTable>
    </>
  )
}

export default BarCodeTable
