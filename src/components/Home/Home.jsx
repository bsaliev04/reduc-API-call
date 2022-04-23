import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { callToAPI } from "./homeSlice";
import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  TextField,
} from "@mui/material";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

function Home() {
  const [quantity, setQuantity] = useState(0);
  const [currentPage, setCurrentPage] = useState(0)
  const dispatch = useDispatch();
  const data = useSelector((state) => state);
  const newData = data.products;

const elementsPerPage = 8;
const start = currentPage * elementsPerPage;
const end = start + elementsPerPage;
const parcialData = newData.slice(start, end);
const howManyPages = Math.ceil(newData.length / elementsPerPage);
const arrayBtn = new Array(howManyPages).fill("buttonPage");


  useEffect(() => {
    dispatch(callToAPI());
  }, []);

  return (
    <>
      <input type="text" className="input" />
      <div className="render">
        {parcialData.map((user) => {
          return (
            <Card sx={{ maxWidth: 345 }} key={user.id}>
              <CardMedia
                component="img"
                height="140"
                image={user.image}
                alt="green iguana"
              />
              <div className="info">
                <Typography gutterBottom variant="h6" component="div">
                  {user.first_name}
                </Typography>
                <Typography variant="h6" color="text.secondary">
                  {user.last_name}
                </Typography>
                <Typography variant="h6" color="text.secondary">
                  {user.gender}
                </Typography>
                {/* <Typography variant="h6" color="text.secondary">
                  {car.made}
                </Typography> */}
              </div>
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
                    Minus one
                  </Button>
                </Grid>
              </Grid>
              <Button
                fullWidth
                onClick={() =>
                  setTocart((prev) => [
                    ...prev,
                    { title: title, price: price, quantity: quantity },
                  ])
                }
              >
                Add To Card
              </Button>
            </Card>
          );
        })}
      </div>
      <div className="all-btn">
        {
          arrayBtn.map((page, index) => {
            return (
            
            <button className="btn" key={page + index} onClick={() => setCurrentPage(index)}>{index + 1}</button>
            );
          })  
        }
      </div>
    </>
  );
}

export default Home;
