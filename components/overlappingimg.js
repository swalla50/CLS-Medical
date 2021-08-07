import React from 'react'
import '../styles/overlappingimg.module.css'


function Overlappingimg() {
    return (
        <div className='container'>
                <div className="image-stack">
                    <div className="image-stack__item image-stack__item--top">
                        <img src="../images/services-medical.jpg" alt="folded-arms"/>
                    </div>
                    <div className="image-stack__item image-stack__item--bottom">
                        <img src="../images/services-military.jpg" alt="military"/>
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
                        
                        .image-stack__item > img {
                            width: 100%;
                            display: block;
                            border-radius: 30px;
                            box-shadow: 0 38px 20px rgb(0 0 0 / 13%);
                        }
                        `}
                    </style>
        </div>
    )
}

export default Overlappingimg



