import React from 'react'
import './DescriptionBox.css'
export const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
        <div className="descriptionbox-navigator">
            <div className="descriptionbox-nav-box">Description</div>
            <div className="descriptionbox-nav-box fade">Reviews (122)</div>
        </div>
        <div className="descriptionbox-description">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Possimus saepe deserunt minima, veniam ex soluta et molestiae exercitationem 
                laudantium libero? Dolorum nulla magni, accusamus officiis provident eveniet earum rem 
                similique.
            </p>
            <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Possimus saepe deserunt minima, veniam ex soluta et molestiae exercitationem 
                laudantium libero? Dolorum nulla magni, accusamus officiis provident eveniet earum rem 
                similique.
            </p>
        </div>
    </div>
  )
}
