import React, { useState } from "react";
import { useForm } from "react-hook-form";

const Addproducts = () => {
  const [addColorinput, setColorInput] = useState([{}]);
  const [addSize, setsizeInput] = useState([{}]);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  //const imagekey = "b634d5060c463d4b586cce4566eef183";
  //New input filed for color
  const addnewcolorandquantyinput = () => {
    setColorInput([...addColorinput, {}]);
  };
  //Remove input filed for color
  const removecolorandquantyinput = (index) => {
    const inputList = [...addColorinput];
    const newimputlist = inputList.splice(index, 1);
    setColorInput(newimputlist);
  };
  //New input filed for Size
  const addsizeandquantyinput = () => {
    setsizeInput([...addSize, {}]);
  };
  //Remove input filed for size
  const removesizeandquantyinput = (index) => {
    const inputList = [...addSize];
    inputList.splice(index, 1);
    setsizeInput(inputList);
  };
  const hanglechangecolorandquantity = (e, index) => {
    const list = [...addColorinput];
    const { name, value } = e.target;
    list[index][name] = value;
    setColorInput(list);
  };

  const onSubmit = (data) => {
    const productimage = data.productimage[0];
    console.log(data);
    const formData = new FormData();
    formData.append("image", productimage);
    //const url = `https://api.imgbb.com/1/upload?expiration=600&key=${imagekey}`;

    // fetch(url, {
    //   method: "POST",
    //   body: formData,
    // })
    //   .then((res) => res.json())
    //   .then((imagedata) => {
    //     console.log(imagedata);
    //   });
  };
  return (
    <div className="flex justify-center mt-10">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-[#f7f7f7] w-[80%] px-10 py-5 grid md:grid-cols-1 lg:grid-cols-2"
      >
        {/* gird 1 */}
        <div>
          <div>
            <label
              htmlFor="productname"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Products Name <span className="text-red-500">*</span>
            </label>
            <input
              id="productname"
              className="w-8/12  p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500"
              {...register("productname", { required: true })}
              aria-invalid={errors.productname ? "true" : "false"}
            />
            {errors.productname?.type === "required" && (
              <p role="alert" className="text-xs text-red-700">
                Product name is required
              </p>
            )}
          </div>
          <div className="flex mt-3">
            <div className="mr-2">
              <label
                htmlFor="category"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Categoris <span className="text-red-500">*</span>
              </label>
              <select
                id="category"
                {...register("category", { required: true })}
                className="text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500"
                aria-invalid={errors.category ? "true" : "false"}
              >
                <option value="">Select...</option>
                <option value="men">Men's Fashion</option>
                <option value="women">Woman's Fashion</option>
              </select>
              {errors.category?.type === "required" && (
                <p role="alert" className="text-xs text-red-700">
                  Category is required
                </p>
              )}
            </div>
            <div className="mr-2">
              <label
                htmlFor="subcategory"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                SubCategoris
              </label>
              <select
                id="subcategory"
                {...register("subcategory")}
                className="text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">Select...</option>
                <option value="tshirt">T-shirt</option>
                <option value="pant">Pant</option>
              </select>
            </div>
            <div>
              <label
                htmlFor="brand"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Brand
              </label>
              <select
                id="brand"
                {...register("brand", { required: true })}
                className="text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">Select...</option>
                <option value="bata">Bata</option>
                <option value="apex">Apex</option>
                <option value="nobrand">No Brand</option>
              </select>
            </div>
          </div>
          <div>
            <label
              htmlFor="storename"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Store Name
            </label>
            <input
              id="storename"
              className="w-8/12  p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500"
              placeholder="S-trade"
              {...register("storename")}
            />
          </div>
          <div>
            <label
              htmlFor="productprice"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Product Price <span className="text-red-500">*</span>
            </label>
            <input
              id="small-input"
              className="w-8/12   p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500"
              {...register("productprice", { required: true })}
              aria-invalid={errors.productprice ? "true" : "false"}
            />
            {errors.productprice?.type === "required" && (
              <p role="alert" className="text-xs text-red-700">
                Product price is required
              </p>
            )}
          </div>
          <div>
            <label
              htmlFor="productdiscountpercentage"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Product Discount parcentage
            </label>
            <input
              id="productdiscountpercentage"
              className="w-8/12   p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500"
              {...register("productdiscountpercentage")}
            />
          </div>
          {addColorinput.map((color, index) => (
            <>
              <div key={index}>
                <label
                  htmlFor="color1"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Product Color {index + 1}
                </label>
                <div>
                  <input
                    id="color1"
                    name="color"
                    className="w-8/12   p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500"
                    {...register(`color${index + 1}`)}
                    onChange={(e) => hanglechangecolorandquantity(e, index)}
                  />
                  {addColorinput.length > 1 && (
                    <button
                      type="button"
                      className="bg-[#f7f7f7] border-2 focus:border-blue-400 py-1 px-2 rounded-lg ml-2"
                      onClick={() => removecolorandquantyinput(index)}
                    >
                      Remove
                    </button>
                  )}
                </div>
              </div>
              <div>
                <label
                  htmlFor="colorwisequantity1"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Color wise Stock {index + 1}
                </label>
                <div>
                  <input
                    name="quantity"
                    id="colorwisequantity1"
                    className="w-8/12   p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500"
                    {...register(`colorwisequantity${index + 1}`)}
                    onChange={(e) => hanglechangecolorandquantity(e, index)}
                  />
                </div>
              </div>
              <div>
                {addColorinput.length - 1 === index && (
                  <button
                    type="button"
                    className="bg-[#f7f7f7] border-2 focus:border-blue-400 py-1 px-2 rounded-lg my-2"
                    onClick={addnewcolorandquantyinput}
                  >
                    Add more color
                  </button>
                )}
              </div>
            </>
          ))}
          {/* size */}
        </div>
        {/* gird 1 */}
        {/* gird 2 */}
        <div>
          {addSize.map((size, index) => (
            <>
              <div key={index}>
                <label
                  htmlFor="productsize"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Product size {index + 1}
                </label>
                <div>
                  <input
                    id="productsize"
                    name="productsize"
                    className="w-8/12   p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500"
                    {...register(`size${index + 1}`)}
                    onChange={(e) => hanglechangecolorandquantity(e, index)}
                  />
                  {addSize.length > 1 && (
                    <button
                      type="button"
                      className="bg-[#f7f7f7] border-2 focus:border-blue-400 py-1 px-2 rounded-lg ml-2"
                      onClick={() => removesizeandquantyinput(index)}
                    >
                      Remove
                    </button>
                  )}
                </div>
              </div>
              <div>
                <label
                  htmlFor="sizewisequantity"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Size wise Stock {index + 1}
                </label>
                <div>
                  <input
                    name="sizewisequantity"
                    id="sizewisequantity"
                    className="w-8/12  p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500"
                    {...register(`sizewisequantity${index + 1}`)}
                    onChange={(e) => hanglechangecolorandquantity(e, index)}
                  />
                </div>
              </div>
              <div>
                {addSize.length - 1 === index && (
                  <button
                    type="button"
                    className="bg-[#f7f7f7] border-2 focus:border-blue-400 py-1 px-2 rounded-lg my-2"
                    onClick={addsizeandquantyinput}
                  >
                    Add more size
                  </button>
                )}
              </div>
            </>
          ))}
          <div>
            <label
              htmlFor="productweight"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Product Weight
            </label>
            <input
              id="productweight"
              className="w-8/12   p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500"
              {...register("productweight")}
            />
          </div>
          <div>
            <label
              htmlFor="productimage"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Product Image
            </label>
            <input {...register("productimage")} type="file" />
          </div>
          <div className="form-check mt-3">
            <label
              htmlFor="brand"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Select Delivery Types
            </label>
            <label htmlFor="FreeDelivery">
              <input
                {...register("delivery", { required: true })}
                type="radio"
                name="delivery"
                value="freeDelivery"
                className="form-check-input"
                id="FreeDelivery"
              />{" "}
              Free Delivery
            </label>
            <label htmlFor="ExpreesDelivery" className="ml-3">
              <input
                {...register("delivery", { required: true })}
                type="radio"
                name="delivery"
                value="expreesdelivery"
                className="form-check-input"
                id="ExpreesDelivery"
              />{" "}
              Express Delivery
            </label>
          </div>

          <div>
            <label
              htmlFor="productsdescription"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Products Description <span className="text-red-500">*</span>
            </label>
            <textarea
              id="productsdescription"
              className="w-8/12  p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500"
              {...register("productsdescription", { required: true })}
              placeholder="product description"
              aria-invalid={errors.productsdescription ? "true" : "false"}
            />
            {errors.productsdescription?.type === "required" && (
              <p role="alert" className="text-xs text-red-700">
                Product description is required
              </p>
            )}
          </div>
          <div>
            <label
              htmlFor="productsdescription"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Product Shipping Details
            </label>
            <textarea
              id="Shippingdescription"
              className="w-8/12   p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500"
              {...register("shippingdescription")}
              placeholder="Shipping description"
            />
          </div>
          <input
            className="bg-blue-400 py-2 px-3 text-white rounded-lg w-8/12  my-2"
            type="submit"
          />
        </div>
        {/* gird 2 */}
      </form>
    </div>
  );
};

export default Addproducts;
