import React,{ useEffect,useState, useContext } from 'react'

import HeroSection from '../../components/heroSection/heroSection.component'
import Directory from '../../components/directory/directory.component'
import Heading from '../../components/Heading/heading.component'
import "./homepage.styles.css"
import WithSpinner from "../../components/with-spinner/with-spinner.component"
import { firestore,convertShopProductsSnapshotToMap } from "../../firebase/firebase.utils"
import { updateShopProducts } from "../../context/reducers/products-reducer/products-actions"
import { ShopProductsContext } from "../../context/shopProducts/shopProductsContext"

export default function Homepage() {
    const [loading ,setLoading] = useState(true);
    const { dispatchProducts } = useContext(ShopProductsContext);
    const DirectorySpinner = WithSpinner(Directory);

    useEffect(() => {
        const  collectionRef = firestore.collection("shopProducts").orderBy("id");
        const snapshotCollectionRef = collectionRef.onSnapshot(async snapshot => {
            const shopProductsMap = await convertShopProductsSnapshotToMap(snapshot);
            updateShopProducts(dispatchProducts, shopProductsMap);
            setLoading(false);
        })
        return () => {
          snapshotCollectionRef();
        }
    },[dispatchProducts])

    return (
        <div>
            <HeroSection/>
            <div id="shopNow">
                <Heading title="Shop By Department" display="display-3" h1="homepage-h1" />
            </div>
            <DirectorySpinner isLoading={loading} />
        </div>
    )
}
