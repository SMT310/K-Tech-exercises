import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  useGetProductByIdQuery,
  useUpdateProductMutation,
} from "../../api/productApi";

const ProductEdit = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { data: productData, isLoading, error } = useGetProductByIdQuery(id!);
  const [updateProduct] = useUpdateProductMutation();
  const [formState, setFormState] = useState({
    name: "",
    price: "",
    brand: "",
    category: "",
  });
  const [formError, setFormError] = useState<string | null>(null);

  useEffect(() => {
    if (productData) {
      setFormState({
        name: productData.name || "",
        price: productData.price || "",
        brand: productData.brand || "",
        category: productData.category || "",
      });
    }
  }, [productData]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
    setFormError(null); // Xóa lỗi khi người dùng bắt đầu nhập
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!id) {
      setFormError("Invalid product ID");
      return;
    }
    if (
      !formState.name.trim() ||
      !formState.price.trim() ||
      !formState.brand.trim() ||
      !formState.category.trim()
    ) {
      setFormError("Please fill in all fields");
      return;
    }

    try {
      await updateProduct({ id, data: formState }).unwrap();
      alert("Product updated successfully!");
      navigate("/");
    } catch (error) {
      setFormError(
        "Failed to update product: " +
          (error instanceof Error ? error.message : "Unknown error")
      );
    }
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="border-gray-300 h-12 w-12 animate-spin rounded-full border-4 border-t-blue-600" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto p-6 bg-gray-50 min-h-screen">
        <p className="text-red-500 text-center text-lg font-medium bg-red-100 p-4 rounded-md">
          Failed to load product.
        </p>
        <div className="flex justify-center mt-6">
          <button
            onClick={() => navigate("/")}
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-200"
          >
            Return to Product List
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-6 bg-gray-50 min-h-screen">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Edit Product</h2>
      {formError && (
        <p className="text-red-500 text-center text-lg font-medium bg-red-100 p-4 rounded-md mb-6">
          {formError}
        </p>
      )}
      <form
        onSubmit={handleSubmit}
        className="max-w-lg mx-auto bg-white shadow-md rounded-lg p-6 space-y-4"
      >
        <div>
          <label className="block text-sm font-medium text-gray-700">Name</label>
          <input
            type="text"
            name="name"
            value={formState.name}
            onChange={handleChange}
            placeholder="Enter product name"
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Price</label>
          <input
            type="text"
            name="price"
            value={formState.price}
            onChange={handleChange}
            placeholder="Enter product price"
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Brand</label>
          <input
            type="text"
            name="brand"
            value={formState.brand}
            onChange={handleChange}
            placeholder="Enter product brand"
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Category
          </label>
          <input
            type="text"
            name="category"
            value={formState.category}
            onChange={handleChange}
            placeholder="Enter product category"
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="flex justify-end space-x-3">
          <button
            type="button"
            onClick={() => navigate("/")}
            className="bg-gray-300 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-400 transition duration-200"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-200"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProductEdit;