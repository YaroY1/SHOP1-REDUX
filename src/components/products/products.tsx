import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { useEffect } from 'react'
import { getProductsAsync, selectProducts } from "../../slices/products.slice";
import Container from "@mui/material/Container";
import Product from "./product/product";
import Grid from '@mui/material/Grid';
import Filters from "./filters/filters";


const Products: React.FC = () => {
    const dispatch = useAppDispatch();
    const products = useAppSelector(selectProducts)

    useEffect(() => {
        dispatch(getProductsAsync())
    }, [])

    return <>
        <Container>
            <h1>Products:</h1>
            <Filters />
            <Grid container spacing={2}>
                {products.map(product => (
                    <Grid item>
                        <Product key={product.id} product={product} />
                    </Grid>
                ))}
            </Grid>
        </Container>
    </>
}

export default Products;