import React, {useContext, useState, useRef, useEffect} from 'react'
import { v4 as uuidv4 } from "uuid"

import "./individual-item.styles.css"
import { ShopProductsContext } from "../../context/shopProducts/shopProductsContext"
import IndividualItemRightSide from '../individual-item-right-side/individual-item-right-side.component';
import ProductDetails from '../product-details/product-details.component';
import ArrowImageRight from '../arrow-image-right/arrow-image-right.component';
import ArrowImageLeft from '../arrow-image-left/arrow-image-left.component';


export default function IndividualItem({ match, location: {state} }) {
    let countForArrow = 0;
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
                            
                            <ArrowImageLeft arrowImageLeft={arrowImageLeft} />
                            
                            {largeImage.map((img, i) => (
                                <img ref={el => largeImageRef.current[i] = el} key={img.id} id={img.id} src={img.largeImage} alt="large product"/>
                            ))}

                            <ArrowImageRight arrowImageRight={arrowImageRight} />
                            
                        </div>
                        <div className="small-image-container">
                            {smallImage.map((img, i) => (
                               <img ref={el => smallImageRef.current[i] = el} onClick={() => getLargeImage(img)} key={img.id} id={img.id} className="mx-3" src={img.smallImage} alt="small product"/>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="col-md-5">
                        <IndividualItemRightSide state={state} />

                        <ul className="list-of-product-details-ul">
                            {state.item[0].productDetails.map(proDetails => (
                                <ProductDetails key={uuidv4()} proDetails={proDetails} />
                            ))}
                        </ul>
                </div>
            </div>
        </div>
    )
}
