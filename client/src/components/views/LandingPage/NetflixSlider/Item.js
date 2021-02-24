import React from 'react';
import SliderContext from './context'
import './Item.scss'
import ItemAtom from './ItemAtom'

function Item({ card, onItemHover }) {
    const handleHover = (e) => {
        const data = {
            // offsetHeight : e.currentTarget.parentElement.children[card.id-1].offsetHeight,
            // offsetWidth : e.currentTarget.parentElement.children[card.id-1].offsetWidth,
            // sliderOffsetWidth : e.currentTarget.parentElement.offsetWidth,
            // sliderOffsetHeight : e.currentTarget.parentElement.offsetHeight,
            // sliderOffsetX : e.currentTarget.parentElement.parentElement.parentElement.offsetLeft,
            // sliderOffsetY : e.currentTarget.parentElement.parentElement.parentElement.offsetTop,
            rect: e.currentTarget.parentElement.children[card.id-1].getBoundingClientRect(),
        }
        onItemHover(data)
    }
    return (
        <SliderContext.Consumer>
            {({ elementRef }) => {
                let isHovering = false;
                return (
                    <div
                        ref={elementRef}
                        className={'item'}
                        onMouseOver={handleHover}
                        onMouseOut={() => {
                            isHovering = false;
                            console.log(isHovering)
                        }}
                    >
                        <a href={`/mapinfo/${card.id}`}>
                            <img src={card.image} alt="" />
                        </a>
                    </div>
                );
            }}
        </SliderContext.Consumer>
    )
}

export default Item
