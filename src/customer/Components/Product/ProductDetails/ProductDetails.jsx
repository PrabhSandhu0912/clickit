import * as React from "react";
import { useState } from "react";
import { RadioGroup } from "@headlessui/react";
import { useNavigate, useParams } from "react-router-dom";
import ProductReviewCard from "./ProductReviewCard";
import { Box, Button, Grid, Rating } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { findProductById } from "../../../../Redux/Customers/Product/Action";
import { addItemToCart } from "../../../../Redux/Customers/Cart/Action";
import { getAllReviews } from "../../../../Redux/Customers/Review/Action";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
const product = {
  name: "Basic Tee 6-Pack",
  price: "₹996",
  href: "#",
  breadcrumbs: [
    { id: 1, name: "Men", href: "#" },
    { id: 2, name: "Clothing", href: "#" },
  ],
  images: [
    {
      src: "https://cdn.shopify.com/s/files/1/0399/0231/4646/files/sassafras-fashion-1655444284850_600x600.png?v=1657862529",
      alt: "Two each of gray, white, and black shirts laying flat.",
    },
    {
      src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANMAAAB7CAMAAADZlkVoAAAADFBMVEX////8/Pz5+fn09PR3TokLAAABfUlEQVR4nO3b0W6DMAyFYcze/50nQWnDBIUME+yT/5O2q03zIYmTMHUYgLzs6QI8TWFMKhIAAAAAAIFxCQfcKa4qxUxIiInYi/5GWjGxYiZAV5MV27wt0IfQjuKbFRufrgAnCc4+pKDY+IAcsi2+M/XmymSSDVAxkxbJace8Azz1c4VfbcQZ+8hWzSkzVRSaJlNJc+u9KspTsXlWTV//rOng16x5Vnt9hq7tX73ZPDp1G1SUSbbLbPjesmsSBAj7KdcilONqSvR9PI725DiKtrd826lzv3w7+oHGrBifqy0wWgMdL9cSZh6u/k84F+V37YgScuFRT5RM9vN0BU5uuSX1c3WOJcrqcBJt43FQu/MESj9uH4uqKgyz8S62p9jJA3vQ+Rm0rEusHBORbO9LxzDIZMqcY/XG+N5O1ewp7cdw7xKPHPr+BuDkmV24I0IpdHHVpMJU6DV3ClpLbK0uWoIHoTxYC5U3fdDTw/oD4K+f1tFPUgBpKDYmMsX1C0KvAMMKDK2rAAAAAElFTkSuQmCC",
      alt: "",
    },
  ],
  colors: [
    { name: "White", class: "bg-white", selectedClass: "ring-gray-400" },
    { name: "Gray", class: "bg-gray-200", selectedClass: "ring-gray-400" },
    { name: "Black", class: "bg-gray-900", selectedClass: "ring-gray-900" },
  ],
  sizes: [
    { name: "XS", inStock: true },
    { name: "S", inStock: true },
    { name: "M", inStock: true },
    { name: "L", inStock: true },
    { name: "XL", inStock: true },
    { name: "XXL", inStock: true },
    { name: "UK4", inStock: true },
    { name: "UK5", inStock: true },
    { name: "UK6", inStock: true },
    { name: "UK7", inStock: true },
    { name: "UK8", inStock: true },
    { name: "UK9", inStock: true },
    { name: "UK10", inStock: true },
    { name: "UK11", inStock: true },
    { name: "UK12", inStock: true },
    { name: "EURO39", inStock: true },
    { name: "EURO40", inStock: true },
    { name: "EURO41", inStock: true },
    { name: "EURO42", inStock: true },
    { name: "EURO43", inStock: true },
    { name: "EURO44", inStock: true },
    { name: "EURO46", inStock: true },
    { name: "EURO47", inStock: true },
  ],
  description:
    'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.',
  highlights: [
    "Hand cut and sewn locally",
    "Dyed with our proprietary colors",
    "Pre-washed & pre-shrunk",
    "Ultra-soft 100% cotton",
  ],
  details:
    'The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.',
};
const reviews = { href: "#", average: 4, totalCount: 117 };

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function ProductDetails() {
  const [selectedSize, setSelectedSize] = useState();
  const [activeImage, setActiveImage] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { customersProduct, review } = useSelector((store) => store);
  const { productId } = useParams();
  const jwt = localStorage.getItem("jwt");
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  // console.log("param",productId,customersProduct.product)

  const handleSetActiveImage = (image) => {
    setActiveImage(image);
  };

  const handleSubmit = () => {
    const data = { productId, size: selectedSize.name };
    dispatch(addItemToCart({ data, jwt }));
    navigate("/cart");
  };

  useEffect(() => {
    const data = { productId: productId, jwt };
    dispatch(findProductById(data));
    dispatch(getAllReviews(productId));
  }, [productId]);

  // console.log("reviews ",review)

  return (
    <div className="bg-white lg:px-20">
      <div className="pt-6">
        <nav aria-label="Breadcrumb">
          <ol
            role="list"
            className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8"
          >
            {product.breadcrumbs.map((breadcrumb) => (
              <li key={breadcrumb.id}>
                <div className="flex items-center">
                  <a
                    href={"/"}
                    className="mr-2 text-sm font-medium text-gray-900"
                  >
                    {breadcrumb.name}
                  </a>
                  <svg
                    width={16}
                    height={20}
                    viewBox="0 0 16 20"
                    fill="currentColor"
                    aria-hidden="true"
                    className="h-5 w-4 text-gray-300"
                  >
                    <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                  </svg>
                </div>
              </li>
            ))}
            <li className="text-sm">
              <a
                href={product.href}
                aria-current="page"
                className="font-medium text-gray-500 hover:text-gray-600"
              >
                {product.name}
              </a>
            </li>
          </ol>
        </nav>

        {/* product details */}
        <section className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-2 px-4 pt-10">
          {/* Image gallery */}
          <div className="flex flex-col items-center ">
            <div className=" overflow-hidden rounded-lg max-w-[30rem] max-h-[35rem]">
              <img
                src={activeImage?.src || customersProduct.product?.imageUrl}
                alt={product.images[0].alt}
                className="h-full w-full object-cover object-center"
              />
            </div>
            <div className="flex flex-wrap space-x-5 justify-center">
              {product.images.map((image) => (
                <div
                  onClick={() => handleSetActiveImage(image)}
                  className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg max-w-[5rem] max-h-[5rem] mt-4"
                >
                  <img
                    src={image.src}
                    alt={product.images[1].alt}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Product info */}
          <div className="lg:col-span-1 mx-auto max-w-2xl px-4 pb-16 sm:px-6  lg:max-w-7xl  lg:px-8 lg:pb-24">
            <div className="lg:col-span-2">
              <h1 className="text-lg lg:text-xl font-semibold tracking-tight text-gray-900  ">
                {customersProduct.product?.brand}
              </h1>
              <h1 className="text-lg lg:text-xl tracking-tight text-gray-900 opacity-60 pt-1">
                {customersProduct.product?.title}
              </h1>
            </div>

            {/* Options */}
            <div className="mt-4 lg:row-span-3 lg:mt-0">
              <h2 className="sr-only">Product information</h2>
              <div className="flex space-x-5 items-center text-lg lg:text-xl tracking-tight text-gray-900 mt-6">
                <p className="font-semibold">
                  ₹{customersProduct.product?.discountedPrice}
                </p>
                <p className="opacity-50 line-through">
                  ₹{customersProduct.product?.price}
                </p>
                <p className="text-green-600 font-semibold">
                  {customersProduct.product?.discountPersent}% Off
                </p>
              </div>

              {/* Reviews */}
              <div className="mt-6">
                <h3 className="sr-only">Reviews</h3>

                <div className="flex items-center space-x-3">
                  <Rating
                    name="read-only"
                    value={4.6}
                    precision={0.5}
                    readOnly
                  />

                  <p className="opacity-60 text-sm">42807 Ratings</p>
                  <p className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500">
                    {reviews.totalCount} reviews
                  </p>
                </div>
              </div>

              <form className="mt-10" onSubmit={handleSubmit}>
                {/* Sizes */}
                <div className="mt-10">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-medium text-gray-900">Size</h3>
                  </div>

                  <RadioGroup
                    value={selectedSize}
                    onChange={setSelectedSize}
                    className="mt-4"
                  >
                    <RadioGroup.Label className="sr-only">
                      Choose a size
                    </RadioGroup.Label>
                    <div className="grid grid-cols-4 gap-4 sm:grid-cols-8 lg:grid-cols-7">
                      {customersProduct.product?.sizes.map((size) => (
                        <RadioGroup.Option
                          key={size.name}
                          value={size}
                          disabled={size.inStock}
                          className={({ active }) =>
                            classNames(
                              size.inStock
                                ? "cursor-pointer"
                                : "cursor-pointer",
                              active ? "ring-1 ring-indigo-500" : "",
                              "group relative flex items-center justify-center rounded-md border py-1 px-1 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6"
                            )
                          }
                        >
                          {({ active, checked }) => (
                            <>
                              <RadioGroup.Label as="span">
                                {size.name}
                              </RadioGroup.Label>
                              {size.inStock ? (
                                <span
                                  className={classNames(
                                    active ? "border" : "border-2",
                                    checked
                                      ? "border-indigo-500"
                                      : "border-transparent",
                                    "rounded-md"
                                  )}
                                  aria-hidden="true"
                                />
                              ) : (
                                <span
                                  aria-hidden="true"
                                  className=""
                                >
                                
                                </span>
                              )}
                            </>
                          )}
                        </RadioGroup.Option>
                      ))}
                      <Button onClick={handleOpen}>Size Chart</Button>
                      <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                      >
                        <Box sx={style}>
                          <img src="data:image/jpeg;base64,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" />
                        </Box>
                      </Modal>
                    </div>
                  </RadioGroup>
                </div>

                <Button
                  variant="contained"
                  type="submit"
                  sx={{ padding: ".8rem 2rem", marginTop: "2rem" }}
                >
                  Add To Cart
                </Button>
              </form>
            </div>

            <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
              {/* Description and details */}
              <div>
                <h3 className="font-bold pb-5">Description</h3>

                <div className="space-y-10">
                  <p className="text-base text-gray-900">
                    {customersProduct.product?.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* rating and review section */}
        <section className="">
          <h1 className="font-semibold text-lg pb-4">
            Recent Review & Ratings
          </h1>

          <div className="border p-5">
            <Grid container spacing={7}>
              <Grid item xs={7}>
                <div className="space-y-5">
                  {review.reviews?.map((item, i) => (
                    <ProductReviewCard item={item} />
                  ))}
                </div>
              </Grid>
            </Grid>
          </div>
        </section>

        {/* similer product */}
      </div>
    </div>
  );
}
