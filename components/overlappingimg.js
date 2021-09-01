import React from 'react'
import '../styles/overlappingimg.module.css'
import Image from 'next/image'

function Overlappingimg() {
    return (
        <div className='container'>
                <div className="image-stack">
                    <div className="image-stack__item image-stack__item--top">
                        <Image src="/images/services-medical.jpg" id='service-top' alt="folded-arms" width='800px' height='500px'/>
                    </div>
                    <div className="image-stack__item image-stack__item--bottom">
                        <Image src="/images/services-military.jpg" alt="military" id='service-bottom' width='800px' height='500px'/>
                    </div>
                    
                </div>
                <style jsx>
                        {`
                        .container {
                            width: 100%;
                            margin: 0 auto;
                            max-width: 900px;
                        }
                        
                        
                        .image-stack {
                            display: grid;
                            position: relative; 
                            grid-template-columns: repeat(12, 1fr);
                        }
                        
                        .image-stack__item--bottom {
                            grid-column: 4 / -1;
                            grid-row: 1;
                        }
                        
                        .image-stack__item--top {
                            grid-row: 1;
                            grid-column: 1 / span 8;
                            padding-top: 45%; 
                            z-index: 1; 
                        }
                        .image-stack__item--middle {
                            grid-row: 1;
                            grid-column: 1 / span 8;
                            padding-top: 45%; 
                            z-index: 1; 
                        }
                        `}
                    </style>
        </div>
    )
}

export default Overlappingimg



