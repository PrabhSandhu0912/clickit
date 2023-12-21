import {
  Avatar,
  Box,
  Button,
  Card,
  CardHeader,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Pagination,
  Select,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

import React from "react";
import { dressPage1 } from "../../../Data/dress/page1";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteProduct, findProducts } from "../../../Redux/Customers/Product/Action";

const ProductsTable = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { customersProduct } = useSelector((store) => store);
  const [filterValue, setFilterValue] = useState({
    availability: "",
    category: "",
    sort: "",
  });

  // query 
  const searchParams = new URLSearchParams(location.search);
  const availability = searchParams.get("availability");
  const category = searchParams.get("category");
  const sort = searchParams.get("sort");
  const page = searchParams.get("page");


  const handlePaginationChange = (event, value) => {
    searchParams.set("page", value-1);
    const query = searchParams.toString();
    navigate({ search: `?${query}` });
  };

  useEffect(() => {
    // setFilterValue({ availability, category, sort });
    const data = {
      category:category || "",
      colors: [],
      sizes: [],
      minPrice: 0,
      maxPrice: 100000,
      minDiscount: 0,
      sort: sort || "price_low",
      pageNumber:page || 1,
      pageSize: 1000000,
      stock: availability,
    };
    dispatch(findProducts(data));
  }, [availability, category, sort,page,customersProduct.deleteProduct]);

  const handleFilterChange = (e, sectionId) => {
    console.log(e.target.value, sectionId);
    setFilterValue((values) => ({ ...values, [sectionId]: e.target.value }));
    searchParams.set(sectionId, e.target.value);
    const query = searchParams.toString();
    navigate({ search: `?${query}` });
  };

  const handleDeleteProduct=(productId)=>{
    console.log("delete product ",productId)
    dispatch(deleteProduct(productId))
  }

  return (
    <Box width={"100%"}>
      <Card className="p-3">
        <CardHeader
          title="Sort"
          sx={{
            pt: 0,
            alignItems: "center",
            "& .MuiCardHeader-action": { mt: 0.6 },
          }}
        />
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Category</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={filterValue.category}
                label="Category"
                onChange={(e) => handleFilterChange(e, "category")}
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
          <Grid item xs={4}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">
                Availability
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={filterValue.availability}
                label="Availability"
                onChange={(e) => handleFilterChange(e, "availability")}
              >
                <MenuItem value={"All"}>All</MenuItem>
                <MenuItem value={"in_stock"}>Instock</MenuItem>
                <MenuItem value={"out_of_stock"}>Out Of Stock</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={4}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">
                Sort By Price
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={filterValue.sort}
                label="Sort By Price"
                onChange={(e) => handleFilterChange(e, "sort")}
              >
                <MenuItem value={"price_high"}>Heigh - Low</MenuItem>
                <MenuItem value={"price_low"}>Low - Heigh</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>
      </Card>
      <Card className="mt-2">
        <CardHeader
          title="All Products"
          sx={{
            pt: 2,
            alignItems: "center",
            "& .MuiCardHeader-action": { mt: 0.6 },
          }}
        />
        <TableContainer>
          <Table sx={{ minWidth: 800 }} aria-label="table in dashboard">
            <TableHead>
              <TableRow>
                <TableCell>Image</TableCell>
                <TableCell>Title</TableCell>
                <TableCell sx={{ textAlign: "center" }}>Category</TableCell>
                <TableCell sx={{ textAlign: "center" }}>Price</TableCell>
                <TableCell sx={{ textAlign: "center" }}>Quantity</TableCell>
                <TableCell sx={{ textAlign: "center" }}>Delete</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {customersProduct?.products?.content?.map((item) => (
                <TableRow
                  hover
                  key={item.name}
                  sx={{ "&:last-of-type td, &:last-of-type th": { border: 0 } }}
                  
                >
                  <TableCell>
                    {" "}
                    <Avatar alt={item.titel} src={item.imageUrl} />{" "}
                  </TableCell>

                  <TableCell
                    sx={{ py: (theme) => `${theme.spacing(0.5)} !important` }}
                  >
                    <Box sx={{ display: "flex", flexDirection: "column" }}>
                      <Typography
                        sx={{
                          fontWeight: 500,
                          fontSize: "0.875rem !important",
                        }}
                      >
                        {item.title}
                      </Typography>
                      <Typography variant="caption">{item.brand}</Typography>
                    </Box>
                  </TableCell>
                  <TableCell sx={{ textAlign: "center" }}>{item.category.name}</TableCell>
                  <TableCell sx={{ textAlign: "center" }}>{item.discountedPrice}</TableCell>
                  <TableCell sx={{ textAlign: "center" }}>{item.quantity}</TableCell>
              
                  <TableCell sx={{ textAlign: "center" }}>
                    <Button variant="text" onClick={()=>handleDeleteProduct(item._id)}>Delete</Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Card>
      <Card className="mt-2 border">
        {/* <Pagination
          className="py-5 border w-auto"
          size="large"
          count={10}
          color="primary"
          onChange={handlePaginationChange}
        /> */}

        <div className="mx-auto px-4 py-5 flex justify-center shadow-lg rounded-md">
          <Pagination
            count={customersProduct.products?.totalPages}
            color="primary"
            className=""
            onChange={handlePaginationChange}
            // value={page}
          />
        </div>
      </Card>
    </Box>
  );
};

export default ProductsTable;
