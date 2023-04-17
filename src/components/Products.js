import React from 'react'
import ProductCard from './ProductCard'

export default function Products() {
  return (
    <div>
      <h1 className='text-4xl text-indigo-900	p-5 border-s-2 font-serif'>Products</h1>
      <hr></hr>
      <div className='flex mx-auto p-5 justify-evenly flex-wrap'>
    
          <ProductCard
          image='https://cdn.shopify.com/s/files/1/0045/4013/7545/products/j-bubs-bracelets-toree-gold-infinity-bracelet-27958571008087_d619fd0c-5bd7-4065-8226-86e0a13abab5_360x.jpg?v=1616023434'
          title='LANDIE 14k Gold Plated Matte Circle EarringsRegular price'
          price = '$38.50'
          />
          <ProductCard
          image='https://cdn.shopify.com/s/files/1/0045/4013/7545/products/j-bubs-rings-us-ring-size-5-margo-14k-gold-plated-infinity-ring-27958674686039_360x.png?v=1615975080'
          title='TOREE Gold Infinity Bracelet'
          price='$37.00'
          />
          <ProductCard
          image='https://cdn.shopify.com/s/files/1/0045/4013/7545/products/ai_tGz5FpAm_4x2_8185bcb7-a64c-48cd-85e7-57c7297157ea_360x.jpg?v=1675698466'
          title='TIFFANY 14k Gold Plated Sterling Silver 925 Dainty Heart Pendant Necklace'
          price='$42.00'
          />
          <ProductCard
          image='https://cdn.shopify.com/s/files/1/0045/4013/7545/products/j-bubs-earrings-landie-14k-gold-plated-matte-circle-earrings-27958576349271_360x.jpg?v=1616000159'
          title='LANDIE 14k Gold Plated Matte Circle Earrings'
          price='$28.00'
          />
          <ProductCard
          image='https://cdn.shopify.com/s/files/1/0045/4013/7545/products/MIYA14kGoldFilledLinkChainBracelet1_360x.png?v=1641986721'
          title='MIYA 14k Gold Filled Link Chain Bracelet'
          price= '$50.00'
          />
          <ProductCard
          image='https://cdn.shopify.com/s/files/1/0045/4013/7545/products/j-bubs-necklaces-justitia-18k-gold-plated-925-lady-justice-coin-necklace-27958667313239_360x.png?v=1675698992'
          title='JUSTITIA 18k Gold Plated 925 Lady Justice Coin Necklace'
          price='$25.00'
          />
          <ProductCard
          image='https://cdn.shopify.com/s/files/1/0045/4013/7545/products/JBS999601416055502-1_360x.jpg?v=1679736637'
          title= 'LUNA Sterling Silver 990 Thin Open Bangle Bracelet'
          price = '$59.00'
          />
          <ProductCard
          image='https://cdn.shopify.com/s/files/1/0045/4013/7545/products/imgl-5LzDmF9p_4x_b93ae5ee-7c56-41a4-8f61-0af267d653cd_360x.jpg?v=1660552037'
          title = 'KIKO 14k Gold Plated Molten Hoop Regular price'
          price='$28.00'
          />
          <ProductCard
          image='https://cdn.shopify.com/s/files/1/0045/4013/7545/products/j-bubs-earrings-tara-gold-chunky-hoop-earrings-27958469099607_360x.png?v=1616022394'
          title ='TARA 18k Gold-Plated Chunky Hoop Earrings Regular'
          price='$29.00'
          />
          <ProductCard
          image='https://cdn.shopify.com/s/files/1/0045/4013/7545/products/j-bubs-earrings-small-reese-slim-silver-hoop-earrings-27958605054039_1aea4434-1f59-4f89-a3de-d425516959bd_360x.png?v=1620025757'
          title='REESE Slim Silver Hoop Earrings Regular price'
          price='$18.00'
          />
      </div>
    </div>
  )
}
