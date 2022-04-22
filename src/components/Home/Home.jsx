import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { callToAPI } from "./homeSlice";
import { Grid, Card, CardMedia, CardContent, Typography, Button, TextField } from "@mui/material";

function Home() {
    const [quantity, setQuantity] = useState()
  const dispatch = useDispatch();
  const data = useSelector((state) => state);
  const newData = data.products;
  useEffect(() => {
    dispatch(callToAPI());
  }, []);
  return (
    <>
      {newData.map((product) => {
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            height="140"
            image={product.image}
            alt="green iguana"
          />
          <Typography gutterBottom variant="h5" component="div">
            {product.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {product.description}
          </Typography>
          <Typography variant="h2" color="text.secondary">
            $ {product.price}
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <Button
                variant="contained"
                onClick={() => setQuantity((prev) => prev + 1)}
              >
                One More
              </Button>
            </Grid>
            <Grid item xs={4}>
              <TextField disabled value={quantity} />
            </Grid>
            <Grid item xs={4}>
              <Button
                onClick={() =>
                  setQuantity((prev) => (prev < 1 ? prev : prev - 1))
                }
                variant="contained"
              >
                {" "}
                Minus one
              </Button>
            </Grid>
          </Grid>
          {/* <Button
            fullWidth
            onClick={() =>
              setTocart((prev) => [
                ...prev,
                { title: title, price: price, quantity: quantity },
              ])
            }
          >
            Add To Card
          </Button> */}
        </Card>;
      })}
      ;
    </>
  );
}
export default Home;
