/* eslint-disable no-unreachable */
import React from 'react'
import './Home.css'
import './Product/Product.css'
import { useNavigate } from 'react-router-dom';
export default function Home(props) {
  const navigation = useNavigate();
  let arr = [];
  arr.push({
    name: "Milk",
    price: "9",
    imgUrl: "https://www.cardiosmart.org/images/default-source/news-article-images/70545718.jpg?sfvrsn=b5c370e0_2",
    shop: "Shufersal",
    secImgUrl: "https://images.immediate.co.uk/production/volatile/sites/30/2020/02/Glass-and-bottle-of-milk-fe0997a.jpg",
    description: "This is milk with 5% fat"
  });
  arr.push({
    name: "Bread",
    price: "6",
    imgUrl: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Assorted_bread.jpg",
    shop: "Mega",
    secImgUrl: "https://houseofnasheats.com/wp-content/uploads/2022/02/French-Bread-1.jpg",
    description: "This is white bread sorry",
  });
  arr.push({
    name: "Daily Newspaper",
    price: "1",
    imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVxgO0AuV9hBpHS4Tm9h2tzLHXZ0pcPo2DfYh9mvGlUWfcRkG3GmGeYZ7NtwcvNmy-FpM&usqp=CAU",
    shop: "Mega",
    secImgUrl: "https://kavimvenekudot.files.wordpress.com/2013/11/d793d791d7a8-d799d7a8d797-1969-1.jpg",
    description: "Daily newspaper from yesterday...",
  });
  arr.push({
    name: "Pringles",
    price: '12',
    imgUrl: "https://images.heb.com/is/image/HEBGrocery/002083687?fit=constrain,1&wid=800&hei=800&fmt=jpg&qlt=85,0&resMode=sharp2&op_usm=1.75,0.3,2,0",
    shop: "Yeinot Bitan",
    secImgUrl: "https://www.pringles.com/content/global/pringles/he_IL/pages/home/jcr:content/gridSystem/par/Copy%20of%20Copy%20of%20feature/slideData/jcr:content/par/inuitgrid/par/inuitgrid_975246484/par/responsiveimage.img.png/1646381809402.png",
    description: "Make your cans wider"
  })
  const nav = (name,description,shop,url) => {
    props.setName(name);
    props.setDesc(description);
    props.setShop(shop);
    props.setUrl(url)
    navigation("/more");
  }
  return (
    <div>
      <h1 style={{textAlign:'center'}}>List Of Products</h1>
      { 
          arr.map(product=>
            <div className='expense-item' onClick={()=>nav(product.name, product.description,product.shop,product.secImgUrl)}>
              <h4 className='expense-item_description'>{product.name}<br />{product.price}₪</h4>
              <img style={{ border: '1px solid' }} src={product.imgUrl} alt={product.name} width="70dp" height="70dp"/>
            </div>
          )

      }
    </div>
  )
  // eslint-disable-next-line no-lone-blocks
  {/* arr.map(product=>
        <Product
          name={product.name}
          price={product.price}
          url={product.imgUrl}
          shop={product.shop}
          />
        ) */}
}


