import JsBarcode from 'jsbarcode'
import { useEffect, useRef } from 'react'

interface Props {
  id: number
}

function BarCode({ id }: Props) {
  const ref = useRef<HTMLDivElement>(null)
  const cont = useRef(0)

  useEffect(() => {
    if (ref.current) {
      const canvas = document.createElement('canvas')
      JsBarcode(canvas, `${id}`)
      ref.current.appendChild(canvas)
      cont.current = cont.current + 1
      console.log(cont)
    }
  }, [ref])
  return <div ref={ref}></div>
}

export default BarCode
