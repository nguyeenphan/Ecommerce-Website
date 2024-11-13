import React from 'react';
import './DescriptionBox.css';

function DescriptionBox(props) {
    return (
        <div className='descriptionbox'>
            <div className='descriptionbox-navigator'>
                <div className='descriptionbox-nav-box'>Description</div>
                <div className='descriptionbox-nav-box fade'>Reviews (122)</div>
            </div>
            <div className='descriptionbox-description'>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Adipisci at corporis dolorum hic nemo perferendis recusandae
                    soluta ullam. Aliquam dolore hic iure officiis. Aliquam doloremque
                    iure pariatur perspiciatis sed vitae!</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem commodi
                    cum dignissimos distinctio, eaque explicabo id incidunt laboriosam
                    laudantium magni molestiae nulla obcaecati omnis perspiciatis quam
                    quibusdam rem veritatis voluptatem?</p>
            </div>
        </div>
    );
}

export default DescriptionBox;