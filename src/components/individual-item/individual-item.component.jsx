import React, {useContext, useState, useRef, useEffect} from 'react'

import "./individual-item.styles.css"
import { ShopProductsContext } from "../../context/shopProducts/shopProductsContext"
import Heading from "../Heading/heading.component"

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
        
    }, [largeImage])
    
    const getLargeImage = (image) => {
        let mainLargeImg = state.item[0].largeImage.filter(img => img.id === image.id);
        if(!largeImage.map(largeImg => largeImg.id).includes(image.id)) {
            setLargeImage([{
                id: mainLargeImg[0].id,
                largeImage: mainLargeImg[0].largeImage
            }])
        }
    }


    return ( 
        <div className="containe-fluid">
            <div className="row">
                <div className="col-md-7">
                    <div className="individual-item-left-container">
                        <div className="individual-item-big-img-container text-center">
                            {largeImage.map((img, i) => (
                                <img ref={el => largeImageRef.current[i] = el} key={img.id} id={img.id} src={img.largeImage} alt="large product"/>
                            ))}
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
