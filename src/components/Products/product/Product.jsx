import React,{useState} from 'react';
import "./Product.css"
import { data } from './data';

export const Product = () => {

  const [m, setM] = useState(0);
  // const d = m * data.price;
  console.log(m)
  

  return (
    <div>
      <div className='productpage_body'>
        <ul style={{ listStyleType: `none` }}>
          {
            data.map(dataitem => (
              <li key={dataitem.id}>
                <div className='product_page'>
                  <div className='first_img'>
                    <img className='img_' src={dataitem.src} />
                  </div>
                  <div className='second_imf'>
                    <h4 className='imf_1'>
                      {dataitem.S_name}
                    </h4>
                    <h6 className='imf_2'>
                      {dataitem.S_inf}
                    </h6>
                  </div>
                  <div className='third_cart'>
                    <ul className='ul_'>
                      <li className='li_'>item background</li>
                    </ul>
                    <p className='stock_'>
                      this item is in stock
                    </p>
                    <div className='price_qunt'>
                      <div className='adj_'>
                        <div className='price_'>
                          {dataitem.price} $
                        </div>
                        <div className='fair_'>
                          fair price
                        </div>

                      </div>
                      <div className='qunt_'>
                        <input onChange={(e)=>setM(e.target.value)} className='number_' type='number' min={1} max={99} name='count' id='item' />
                      </div>
                    </div>
                    <button className="addtocard_">Add to Cart</button>
                  </div>

                </div>
              </li>
            ))
          }
        </ul>
      </div>
    </div>
  )
}
