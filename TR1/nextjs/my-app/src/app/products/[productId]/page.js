export const generateMetadata = ({ params })=>{
    return  {
        title : `Product ${params.productId}`
    }
}

export default function ProductId({params}){
    return <h1>Product-Id - {params.productId}</h1>
}