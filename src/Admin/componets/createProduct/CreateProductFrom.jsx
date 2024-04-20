import { useState } from "react";
import { Typography } from "@mui/material";
import {
  Grid,
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";

import { Fragment } from "react";
import "./CreateProductForm.css";
import { useDispatch } from "react-redux";
import { createProduct } from "../../../Redux/Customers/Product/Action";


const initialSizes = [
  { name: "S", quantity: 0 },
  { name: "M", quantity: 0 },
  { name: "L", quantity: 0 },
];

const CreateProductForm = () => {
  
  const [productData, setProductData] = useState({
    imageUrl: "",
    brand: "",
    title: "",
    color: "",
    discountedPrice: "",
    price: "",
    discountPersent: "",
    size: initialSizes,
    quantity: "",
    topLavelCategory: "",
    secondLavelCategory: "",
    thirdLavelCategory: "",
    description: "",
  });
const dispatch=useDispatch();
const jwt=localStorage.getItem("jwt")

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSizeChange = (e, index) => {
    let { name, value } = e.target;
    name==="size_quantity"?name="quantity":name=e.target.name;

    const sizes = [...productData.size];
    sizes[index][name] = value;
    setProductData((prevState) => ({
      ...prevState,
      size: sizes,
    }));
  };

  const handleAddSize = () => {
    const sizes = [...productData.size];
    sizes.push({ name: "", quantity: "" });
    setProductData((prevState) => ({
      ...prevState,
      size: sizes,
    }));
  };

  // const handleRemoveSize = (index) => {
  //   const sizes = [...productData.size];
  //   sizes.splice(index, 1);
  //   setProductData((prevState) => ({
  //     ...prevState,
  //     size: sizes,
  //   }));
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createProduct({data:productData,jwt}))
    console.log(productData);
  };

  // const handleAddProducts=(data)=>{
  //   for(let item of data){
  //     const productsData={
  //       data:item,
  //       jwt,
  //     }
  //     dispatch(createProduct(productsData))
  //   }
  // }

  return (
    <Fragment className="createProductContainer ">
      <Typography
        variant="h3"
        sx={{ textAlign: "center" }}
        className="py-10 text-center "
      >
        Add New Product
      </Typography>
      <form
        onSubmit={handleSubmit}
        className="createProductContainer min-h-screen"
      >
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Image URL"
              name="imageUrl"
              value={productData.imageUrl}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Brand"
              name="brand"
              value={productData.brand}
              onChange={handleChange}
            />
          </Grid>
        
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Title"
              name="title"
              value={productData.title}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Color"
              name="color"
              value={productData.color}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Quantity"
              name="quantity"
              value={productData.quantity}
              onChange={handleChange}
              type="number"
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              label="Price"
              name="price"
              value={productData.price}
              onChange={handleChange}
              type="number"
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              label="Discounted Price"
              name="discountedPrice"
              value={productData.discountedPrice}
              onChange={handleChange}
              type="number"
            />
          </Grid>
          
          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              label="Discount Percentage"
              name="discountPersent"
              value={productData.discountPersent}
              onChange={handleChange}
              type="number"
            />
          </Grid>
          <Grid item xs={6} sm={4}>
            <FormControl fullWidth>
              <InputLabel>Top Level Category</InputLabel>
              <Select
                name="topLavelCategory"
                value={productData.topLavelCategory}
                onChange={handleChange}
                label="Top Level Category"
              >
                <MenuItem value="Men">Men</MenuItem>
                <MenuItem value="Women">Women</MenuItem>
                <MenuItem value="home">Home Living & Electronics</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={6} sm={4}>
            <FormControl fullWidth>
              <InputLabel>Second Level Category</InputLabel>
              <Select
                name="secondLavelCategory"
                value={productData.secondLavelCategory}
                onChange={handleChange}
                label="Second Level Category"
              >
                <MenuItem value="Clothing">Clothing</MenuItem>
                <MenuItem value="Accessories">Accessories</MenuItem>
                <MenuItem value="Beauty and Personal">Beauty and Personal (women)</MenuItem>
                <MenuItem value="Personal Care"> Personal Care(men)</MenuItem>
                <MenuItem value="bed">Home Decoration</MenuItem>
                <MenuItem value="mobile">Mobiles & Electronics</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={6} sm={4}>
            <FormControl fullWidth>
              <InputLabel>Third Level Category</InputLabel>
              <Select
                name="thirdLavelCategory"
                value={productData.thirdLavelCategory}
                onChange={handleChange}
                label="Third Level Category"
              >
                <MenuItem value="#">W O M E N</MenuItem>
                <MenuItem value="#">(CLOTHING SECTION)</MenuItem>
                <MenuItem value="top">Tops</MenuItem>
                <MenuItem value="women_dress">Dresses</MenuItem>
                <MenuItem value="t-shirts">T-Shirts</MenuItem>
                <MenuItem value="women_jeans">Jeans </MenuItem>
                <MenuItem value="saree">Saree</MenuItem>
                <MenuItem value="kurta">Kurtas </MenuItem>
                <MenuItem value="gouns">Gouns</MenuItem>
                <MenuItem value="ethnic_wear">Ethnic Wear </MenuItem>
                <MenuItem value="winter_wear">Winter Wear</MenuItem>
                <MenuItem value="western_wear">Western Wear</MenuItem>
                <MenuItem value="#">(ACCESSORIES SECTION)</MenuItem>
                <MenuItem value="watch">watches</MenuItem>
                <MenuItem value="wallet">Wallets</MenuItem>
                <MenuItem value="bag">Bags, Caps & Hats</MenuItem>
                <MenuItem value="sunglasses">Sunglasses & Hair Accessories</MenuItem>
                <MenuItem value="socks">Socks & Handercheif</MenuItem>
                <MenuItem value="jewellery">Jewellery</MenuItem>
                <MenuItem value="#">(Beauty and Personal Section)</MenuItem>
                <MenuItem value="makeup">Makeup & Beauty Kits + Combos</MenuItem>
                <MenuItem value="fragrence">Fragrence</MenuItem>
                <MenuItem value="appliances">Beauty Appliances</MenuItem>
                <MenuItem value="body_care">Body & Hair Care</MenuItem>
                <MenuItem value="health">Health & Wellness</MenuItem>
                <MenuItem value="#">M E N</MenuItem>
                <MenuItem value="#">(CLOTHING SECTION)</MenuItem>
                <MenuItem value="mens_kurta">Mens Kurta</MenuItem>
                <MenuItem value="ethnic_jackets">Ethnic Jackets</MenuItem>
                <MenuItem value="shirt">Shirt</MenuItem>
                <MenuItem value="mens_jeans">Jeans,cargo,shorts,formal&casual trousers</MenuItem>
                <MenuItem value="winter">Winter Wear</MenuItem>
                <MenuItem value="t-shirt">T-Shirt</MenuItem>
                <MenuItem value="active_wear">Activewear</MenuItem>
                <MenuItem value="casual_sports_shoes">Casual&Sports Shoes</MenuItem>
                <MenuItem value="formal_shoes">Formal Shoes</MenuItem>
                <MenuItem value="boots">Boots</MenuItem>
                <MenuItem value="socks">Socks & Handercheif & Ties</MenuItem>
                <MenuItem value="#">(ACCESSORIES SECTION)</MenuItem>
                <MenuItem value="watches">Watches</MenuItem>
                <MenuItem value="wallets">Wallets</MenuItem> 
                <MenuItem value="bags">Bags</MenuItem>
                <MenuItem value="glasses">Sunglasses & Frames</MenuItem>
                <MenuItem value="hats">Caaps & Hats</MenuItem>
                <MenuItem value="belt">Belts</MenuItem> 
                <MenuItem value="#">(PERSONAL CARE SECTION)</MenuItem>
                <MenuItem value="beard">Beard Care</MenuItem>
                <MenuItem value="men_grooming">Men Grooming</MenuItem>
                <MenuItem value="perfumes">Men Perfumes</MenuItem>
                <MenuItem value="oral_care">Oral Care</MenuItem>
                <MenuItem value="body_care">Body Care</MenuItem>
                <MenuItem value="#">HOME LIVING AND ELECTRONICS</MenuItem>
                <MenuItem value="#">(HOME DECORATION SECTION)</MenuItem>
                <MenuItem value="double">Double bedsheets</MenuItem>
                <MenuItem value="single">Single bedsheet</MenuItem>
                <MenuItem value="bedding_set">Bedding Set</MenuItem>
                <MenuItem value="dining">Kitchen & Dining</MenuItem>
                <MenuItem value="decoration">Decoration Appliances</MenuItem>
                <MenuItem value="table">Tables & Chairs</MenuItem>
                <MenuItem value="wardrobe">Wardrobe & Drawers</MenuItem>
                <MenuItem value="curtains">Curtains</MenuItem>
                <MenuItem value="#">(MOBILES & ELECTRONICS SECTION)</MenuItem>
                <MenuItem value="mobile_tablet">Mobile & Tablet Accessories</MenuItem>
                <MenuItem value="smart">Smart Wearable Tech</MenuItem>
                <MenuItem value="home_entertainment">Home Entertianment</MenuItem>
                <MenuItem value="tv_home">TV & Home Appliances</MenuItem>
                <MenuItem value="laptop">Laptop & Desktop Accessories</MenuItem>
                <MenuItem value="accessories">Camera Accessories</MenuItem>
                <MenuItem value="musical">Musical Instruments</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              id="outlined-multiline-static"
              label="Description"
              multiline
              name="description"
              rows={3}
              onChange={handleChange}
              value={productData.description}
            />
          </Grid>
          {productData.size.map((size, index) => (
            <Grid container item spacing={3} >
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Size Name"
                  name="name"
                  value={size.name}
                  onChange={(event) => handleSizeChange(event, index)}
                  required
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Quantity"
                  name="size_quantity"
                  type="number"
                  onChange={(event) => handleSizeChange(event, index)}
                  required
                  fullWidth
                />
              </Grid> </Grid>
            
          ))}
          <Grid item xs={12} >
            <Button
              variant="contained"
              sx={{ p: 1.8 }}
              className="py-20"
              size="large"
              type="submit"
            >
              Add New Product
            </Button>
            {/* <Button
              variant="contained"
              sx={{ p: 1.8 }}
              className="py-20 ml-10"
              size="large"
              onClick={()=>handleAddProducts(dressPage1)}
            >
              Add Products By Loop
            </Button> */}
          </Grid>
        </Grid>
      </form>
    </Fragment>
  );
};

export default CreateProductForm;
