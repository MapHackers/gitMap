import React, { Component, useState } from 'react'
import Slider from './NetflixSlider'
import MainContent from './Sections/MainContent'
import './LandingPage.scss'
import ItemAtom from './NetflixSlider/ItemAtom';
import styled from 'styled-components'

const cards = [
    {
        id: 1,
        image: '/images/img.jpg', // public 에 위치함
        title: '1983'
    },
    {
        id: 2,
        image: '/images/img2.jpg',
        title: 'Russian doll'
    },
    {
        id: 3,
        image: '/images/img3.jpeg',
        title: 'The rain',
    },
    {
        id: 4,
        image: '/images/img4.jpg',
        title: 'Sex education'
    },
    {
        id: 5,
        image: '/images/img.jpg',
        title: 'Elite'
    },
    {
        id: 6,
        image: '/images/img2.jpg',
        title: 'Black mirror'
    },
    {
        id: 7,
        image: '/images/img3.jpeg',
        title: 'Black mirror'
    },
    {
        id: 8,
        image: '/images/img4.jpg',
        title: 'Black mirror'
    },
    {
        id: 9,
        image: '/images/img4.jpg',
        title: 'Sex education'
    },
    {
        id: 10,
        image: '/images/img.jpg',
        title: 'Elite'
    },
    {
        id: 11,
        image: '/images/img2.jpg',
        title: 'Black mirror'
    },
    {
        id: 12,
        image: '/images/img3.jpeg',
        title: 'Black mirror'
    },
    {
        id: 13,
        image: '/images/img4.jpg',
        title: 'Black mirror'
    },
    {
        id: 14,
        image: '/images/img4.jpg',
        title: 'Sex education'
    },
    {
        id: 15,
        image: '/images/img.jpg',
        title: 'Elite'
    },
    {
        id: 16,
        image: '/images/img2.jpg',
        title: 'Black mirror'
    },
    {
        id: 17,
        image: '/images/img3.jpeg',
        title: 'Black mirror'
    },
    {
        id: 18,
        image: '/images/img4.jpg',
        title: 'Black mirror'
    }
];

function LandingPage() {

    const [popupData, setpopupData] = useState([
        {
            X: '',
            Y: '100',
            src: ''

        }
    ])

    const onItemHover = (data) => {
        console.log(data)
        setpopupData({
            X: data.rect.left,
            Y: data.rect.top + data.scrollY,
            scrollY: data.scrollY,
            src: '',
        })
    }

    return (
        <div className="LandingPage">
            <MainContent />
            <Slider title="Stared">
                {cards.map(card => (
                    <Slider.Item card={card} key={card.id} onItemHover={onItemHover}>item</Slider.Item>
                ))}
            </Slider>
            <Slider title="Category">
                {cards.map(card => (
                    <Slider.Item card={card} key={card.id} onItemHover={onItemHover}>item</Slider.Item>
                ))}
            </Slider>
            <div className="test" style={{ top: `${popupData.Y}px`, left: `${popupData.X}px`}}>
                box {popupData.Y} {popupData.X}
            </div>
        </div>
    )
}



export default LandingPage
