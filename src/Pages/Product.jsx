import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import Breadcrum from '../Components/Breadcrum/Breadcrum';
import { useParams } from 'react-router-dom';
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';
import DescriptionBox from '../Components/DescriptionBox/DescriptionBox';
import Newsletter from '../Components/NewsLetter/Newsletter';
import RelatedProducts from '../Components/RelatedProducts/RelatedProducts';

const Product = () => {
  const {all_product}= useContext(ShopContext);
  const {productId} = useParams();
  const product = all_product.find((e)=> e.id === Number(productId))
  return (
    <div>
      <Breadcrum product={product}/>
      <ProductDisplay product={product}/>
      <DescriptionBox/>
      <RelatedProducts/>
      <Newsletter/>
    </div>
  )
}

export default Product
