import { Product as ProductType } from "../../../slices/products.slice";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useAppSelector } from "../../../app/hooks";
import { selectIsUserLogged } from "../../../slices/app.slice";

interface ProductProps {
    product: ProductType
}

const Product: React.FC<ProductProps> = ({ product: { name, price, description, photos } }) => {
    const isUserLogged = useAppSelector(selectIsUserLogged)
    return <>
        <Card sx={{ maxWidth: 300 }}>
            <CardMedia
                sx={{ height: 240 }}
                image={photos[0].url}
                title="sample"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {name}
                </Typography>
                <Typography variant="body1" color="text.primary">
                    Price: {price}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {description}
                </Typography>
            </CardContent>
            <CardActions>
                {isUserLogged && <Button size="small">Add to Cart</Button>}
            </CardActions>
        </Card>
    </>
}

export default Product;