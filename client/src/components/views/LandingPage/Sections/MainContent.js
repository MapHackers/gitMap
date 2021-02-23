import React from 'react'
import AwesomeSlider from 'react-awesome-slider'
import CoreStyles from 'react-awesome-slider/src/core/styles.scss'
import AwesomeSliderStyles from 'react-awesome-slider/src/styled/scale-out-animation/scale-out-animation.scss'

function MainContent() {
    return (
        <div style={{height: '100%', width: '100%', maxWidth: '1000px', display:'block', position:'relative', marginLeft: 'auto', marginRight: 'auto'}}>
            <AwesomeSlider 
            cssModule={[AwesomeSliderStyles, CoreStyles]}
            animation="scaleOutAnimation"
            >
                <div data-src='/images/mainContent1.png' />
                <div data-src='/images/mainContent2.jpeg' />
                <div data-src='/images/mainContent3.jpg' />
            </AwesomeSlider>
        </div>
    )
}

export default MainContent
