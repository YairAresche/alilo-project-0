import { memo } from 'react';
import Item from '../Item/Item';
import './ItemList.css'

const ItemList = memo(({ productos }) => {

    return (
        <div className='itemList'>
            {
                productos.map(product => <Item key={product.id} id={product.id} name={product.name} category={product.category} price={product.price} img={product.img} />)
            }
        </div>
    )
})

export default ItemList