import { FC, useId } from "react"
import { CarouselProps } from "./types"

export const Carousel : FC<CarouselProps> = ({images, imageContainerStyle}) => {
    const id = useId();

    return (
        <div id={id} className="carousel slide">
            <div className="carousel-inner">
                {
                    images.map((image, index) => 
                        <div key={index} style={imageContainerStyle} className={`carousel-item ${index === 0 ? 'active' : ''}`} >
                            <img className="d-block" style={{width: "100%"}} src={image}/>
                        </div>           
                    )
                }
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target={'#'+id} data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target={'#'+id} data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>      
        </div>
    )
}