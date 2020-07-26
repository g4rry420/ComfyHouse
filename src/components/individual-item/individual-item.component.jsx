import React, {useContext, useState, useRef, useEffect} from 'react'

import "./individual-item.styles.css"
import { ShopProductsContext } from "../../context/shopProducts/shopProductsContext"
import Heading from "../Heading/heading.component"

let countForArrow = 0;
export default function IndividualItem({ match, location: {state} }) {
    const { products, dispatch } = useContext(ShopProductsContext)
    // const individualItem = 
    //     products.find(({routeName}) => routeName === match.params.particularDepartment)
    //         .items.find(({id}) => id).items.find(({routeName}) => routeName === match.params.itemPreview)
    //         .items.find(({id}) => id.toString() === match.params.id)
    
    // const state = individualItem
    const [largeImage, setLargeImage] = useState([{
        id: state.item[0].id,
        largeImage: state.item[0].largeImage1
    }])
    const [smallImage, setSmallImage] = useState(state.item[0].smallImage);

    const smallImageRef = useRef();
    const largeImageRef = useRef();
    smallImageRef.current = new Array(smallImage.length)
    largeImageRef.current = new Array(largeImage.length)

    useEffect(() => {
        smallImageRef.current.filter(img => {
                   img.style.transform = "";
            return img.style.border = "";
        })

        let checkImage = smallImageRef.current.filter(img => img.id === largeImageRef.current[0].id);
        checkImage[0].style.border = "2px solid #f09d51";
        checkImage[0].style.transform = "scale(1.2)";

        countForArrow = parseInt(largeImage[0].id.toString().charAt(largeImage[0].id.toString().length - 1)) - 1;
        
    }, [largeImage])

    const getLargeImage = (image) => {
        let mainLargeImg = state.item[0].largeImage.find(img => img.id === image.id);
        if(!largeImage.map(largeImg => largeImg.id).includes(image.id) && mainLargeImg !== undefined) {
            setLargeImage([{
                id: mainLargeImg.id,
                largeImage: mainLargeImg.largeImage
            }])
        }
    }

    const arrowImageLeft = () => {
        if(countForArrow > 0){
            let mainImage = state.item[0].largeImage[countForArrow-=1]

            if(mainImage !== undefined){
                setLargeImage([{
                    id: mainImage.id,
                    largeImage: mainImage.largeImage
                }])
            }  
        }else{
            console.log("arrowImageLeft else is running")
        }
    }

    const arrowImageRight = () => {
        if(countForArrow < state.item[0].largeImage.length - 1){
            let mainImage = state.item[0].largeImage[countForArrow+=1]

            if(mainImage !== undefined){
                setLargeImage([{
                    id: mainImage.id,
                    largeImage: mainImage.largeImage
                }])
            }
        }else{
            console.log("arrowImageRight else is running")
        }

    } 


    return ( 
        <div className="containe-fluid">
            <div className="row">
                <div className="col-md-7">
                    <div className="individual-item-left-container">
                        <div className="individual-item-big-img-container text-center">
                            <div onClick={arrowImageLeft} className="arrow-left-circle">
                                <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-caret-left" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" d="M10 12.796L4.519 8 10 3.204v9.592zm-.659.753l-5.48-4.796a1 1 0 0 1 0-1.506l5.48-4.796A1 1 0 0 1 11 3.204v9.592a1 1 0 0 1-1.659.753z"/>
                                </svg>
                            </div>
                            
                            {largeImage.map((img, i) => (
                                <img ref={el => largeImageRef.current[i] = el} key={img.id} id={img.id} src={img.largeImage} alt="large product"/>
                            ))}

                            <div onClick={arrowImageRight} className="arrow-right-circle">
                                <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-caret-right" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" d="M6 12.796L11.481 8 6 3.204v9.592zm.659.753l5.48-4.796a1 1 0 0 0 0-1.506L6.66 2.451C6.011 1.885 5 2.345 5 3.204v9.592a1 1 0 0 0 1.659.753z"/>
                                </svg>
                            </div>
                        </div>
                        <div className="small-image-container">
                            {smallImage.map((img, i) => (
                               <img ref={el => smallImageRef.current[i] = el} onClick={() => getLargeImage(img)} key={img.id} id={img.id} className="mx-3" src={img.smallImage} alt="small product"/>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="col-md-5">
                    <div className="individual-item-right-side-container">
                        <Heading title={state.title} display="display-5"
                            h1="heading-in-individual-item"  />
                        <h4 className="display-4 text-center my-5 text-uppercase"> cad ${state.price}</h4>
                        <button className="btn btn-cart">
                            <div className="p-2">Add to cart</div>
                        </button>
                        <h5 className="display-4 my-5">Description</h5>
                        <p> {state.item[0].description} </p>
                        <h5 className="display-4 my-4">Product Details</h5>
                        <ul className="list-of-product-details-ul">
                            {state.item[0].productDetails.map(proDetails => (
                                <li> {proDetails} </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
