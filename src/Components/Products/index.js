import  { ProductsContainer, 
        ProductsHeading,
        ProductsWrapper,
        ProductCard,
        ProductImg,
        ProductInfo,
        ProductTitle,
        ProductDescr,
        ProductPrice,
        ProductButton } from './ProductElements';

const Products = ({ heading, data }) => {
    return (
        <ProductsContainer>
            <ProductsHeading>
                {heading}s
            </ProductsHeading>
            <ProductsWrapper>
                {data.map(( product, index ) => {
                    return (
                        <ProductCard key={index}>
                            <ProductImg src={product.img} alt={product.alt} />
                            <ProductInfo>
                                <ProductTitle>{product.name}</ProductTitle>
                                <ProductDescr>{product.descr}</ProductDescr>
                                <ProductPrice>{product.price}</ProductPrice>
                                <ProductButton>{product.button}</ProductButton>
                            </ProductInfo>
                        </ProductCard>
                    )
                })}
            </ProductsWrapper>
        </ProductsContainer>
    );
}
 
export default Products;