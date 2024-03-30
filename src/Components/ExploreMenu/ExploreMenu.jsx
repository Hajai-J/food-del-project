import React from 'react'
import './ExploreMenu.css'
import { menu_list } from '../../assets/assets'

const ExploreMenu = ({category, setCategory}) => {
  return (
    <div className='explore-menu' id='explore-menu'>
        <h1>Explore our menu</h1>
        <p className='explore-menu-text'>Choose from a diverse menu featuring a delectable array of dishes.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat perferendis vero architecto, consectetur veniam hic, eaque facilis provident ut quo ullam pariatur, sint unde a commodi! Ipsa atque doloremque eveniet!</p>
        <div className="explore-menu-list">
            {menu_list.map((item, index) => {
                return (
                    <div className='explore-menu-list-item' onClick={() => setCategory(prev=>prev === item.menu_name ? "All" : item.menu_name)} key={index}>
                        <img className={category === item.menu_name?"active":""} src={item.menu_image} alt="menuitem" />
                        <p>{item.menu_name}</p>
                    </div>
                )
            })}
        </div>
        <hr />
    </div>
  )
}

export default ExploreMenu