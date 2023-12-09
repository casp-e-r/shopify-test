import { Divider, Modal, Text } from '@shopify/polaris'
import { useCallback } from 'react'
import BarCode from './Barcode'

interface Props {
  product: any
  handleModal: React.Dispatch<React.SetStateAction<any | null>>
}
function ProductModal({ product, handleModal }: Props) {
  console.log(product)

  const handleChange = useCallback(() => handleModal(null), [product])
  return (
    <Modal
      open={product ? true : false}
      onClose={handleChange}
      title={product?.title}
    >
      <Modal.Section>
        <img src={product?.image?.src} className="flex mx-auto my-3 w-20" />
        <Divider />
        <div className="space-y-3">
          {product?.variants?.map((variant: any) => (
            <div>
               <span className="font-bold">{variant.title}</span>
               <span>
                <BarCode id={variant.id}/>
               </span>
            </div>
          ))}
        </div>

      </Modal.Section>
    </Modal>
  )
}

export default ProductModal
