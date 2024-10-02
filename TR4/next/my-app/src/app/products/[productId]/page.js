import { notFound } from "next/navigation";

export default function ProductDetails({ params }){
    if(params.productId > 20){
        notFound();
    }
    return <h1>Product Detail - Product {params.productId}</h1>
}


// docs/feature/2/concept/10
