import { IndexTable, Text } from '@shopify/polaris'
import { ImageMajor } from '@shopify/polaris-icons'

function BarCodeTableRow({ product, index, setSelectedProduct }: any) {
  const thumbMarkup =
    product?.image?.src  ? (
      <img
        className="h-[100%] w-[100%] rounded-lg object-cover"
        alt=""
        src={product?.image?.src}
      />
    ) : (
      <ImageMajor fill="#8A8A8A" height={'35px'} width={'40px'} />
      )

  return (
    <IndexTable.Row
      id={product.id}
      key={product.id}
      position={index}
      onNavigation={() => setSelectedProduct(product)}
    >
      <IndexTable.Cell className="w-[6%]">{thumbMarkup}</IndexTable.Cell>
      <IndexTable.Cell>
        {product.id}
      </IndexTable.Cell>
      <IndexTable.Cell>{product.title}</IndexTable.Cell>
      <IndexTable.Cell>{product.variants?.length}</IndexTable.Cell>
    </IndexTable.Row>
  )
}

export default BarCodeTableRow
