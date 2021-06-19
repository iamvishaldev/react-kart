import commerce from './lib/commerce'

// Fetching Products
// export const fetchData = async () => {
//     commerce.products
// .list()
//         .then(async (productsResult) => {
//             console.log(productsResult.data);

//             const productsData = productsResult.data.map((product) => ({
//                 id: product.id,
//                 name: product.name,
//                 price: product.price.formatted_with_symbol,
//                 imageUrl: product.media.source,
//             }));

//             setProducts(productsData);
//         })
//         .catch((error) => {
//             console.log(error);
//         });
// };

export const fetchProducts = async () => {
    try {
        const productResult = await commerce.products.list()

        console.log(productResult);

        const productsData = productResult.data.map((singleProduct) => (
            {
                id: singleProduct.id,
                name: singleProduct.name,
                price: singleProduct.price.formatted_with_symbol,
                imageUrl: singleProduct.media.source
            }
        ))
        console.log(productsData)
        return productsData
    }
    catch (error) {
        console.log("error", error)
        return null
    }

    // return productsData

}

