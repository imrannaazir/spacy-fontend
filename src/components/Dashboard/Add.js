
import axios from 'axios';
import toast from 'react-hot-toast';
import { useForm } from 'react-hook-form';
import { useNavigate } from "react-router-dom"
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';


const Add = () => {
    const navigate = useNavigate()
    const [user] = useAuthState(auth)


    const {
        register,
        formState: { errors },
        handleSubmit,
        reset,
    } = useForm({ mode: onchange });



    const onSubmit = (data) => {
        console.log(data);
        const newProduct = { ...data, email: user?.email }
        console.log(newProduct);
        (async function () {
            const { data } = await axios.post('https://limitless-beach-86891.herokuapp.com/rockets', newProduct)
            console.log(data);
        })();
        reset();
        navigate('/my-items');
        toast.success('Successfully uploaded!')
    };

    return (
        <div className='w-full min-h-screen bg-base-200'>
            <p className='bg-primary h-16 text-2xl font-semibold text-base-100 pl-6 flex items-center sticky top-0 left-0 z-50 '>Add New Product</p>
            <form onSubmit={handleSubmit(onSubmit)} class="flex flex-col bg-base-100 my-4 mx-6  p-4">

                {/* Product name */}
                <div className="form-control flex gap-2 max-w-xs lg:max-w-md ">
                    <label class="input-group font-semibold">
                        Product Name
                    </label>
                    <input
                        {...register("name", {
                            required: {
                                value: true,
                                message: "Product name is required",
                            },
                        })}
                        type="text"
                        placeholder="Enter product name."
                        class="input input-bordered rounded-sm"
                    />
                    <label class="label">
                        {errors.name?.type === "required" && (
                            <span class="label-text-alt text-error">
                                {errors.name.message}
                            </span>
                        )}
                    </label>
                </div>
                {/* Product category */}
                <div className="form-control flex gap-2 max-w-xs lg:max-w-md ">
                    <label class="input-group font-semibold">
                        Product Category
                    </label>
                    <input
                        {...register("category", {
                            required: {
                                value: true,
                                message: "Product category is required",
                            },
                        })}
                        type="text"
                        placeholder="Enter product category."
                        class="input input-bordered rounded-sm"
                    />
                    <label class="label">
                        {errors.category?.type === "required" && (
                            <span class="label-text-alt text-error">
                                {errors.category.message}
                            </span>
                        )}
                    </label>
                </div>
                {/* Product description */}
                <div className="form-control flex gap-2 max-w-xs lg:max-w-md ">
                    <label class="input-group font-semibold">
                        Product Description
                    </label>
                    <textarea
                        {...register("description", {
                            required: {
                                value: true,
                                message: "Product description is required",
                            },
                        })}
                        type="text"
                        placeholder="Enter description"
                        class="input input-bordered rounded-sm h-40"
                    />
                    <label class="label">
                        {errors.description?.type === "required" && (
                            <span class="label-text-alt text-error">
                                {errors.description.message}
                            </span>
                        )}
                    </label>
                </div>

                {/* Product img */}
                <div className="form-control flex gap-2 max-w-xs lg:max-w-md ">
                    <label class="input-group font-semibold">
                        Product URL
                    </label>
                    <input
                        {...register("img", {
                            required: {
                                value: true,
                                message: "product url is required",
                            },
                        })}
                        type="text"
                        placeholder="Enter product image url"
                        class="input input-bordered rounded-sm"
                    />
                    <label class="label">
                        {errors.img?.type === "required" && (
                            <span class="label-text-alt text-error">
                                {errors.img.message}
                            </span>
                        )}
                    </label>
                </div>
                {/* Product name */}
                <div className="form-control flex gap-2 max-w-xs lg:max-w-md ">
                    <label class="input-group font-semibold">
                        Supplier Name
                    </label>
                    <input
                        {...register("supplier", {
                            required: {
                                value: true,
                                message: "supplier name is required",
                            },
                        })}
                        type="text"
                        placeholder="Enter Supplier name"
                        class="input input-bordered rounded-sm"
                    />
                    <label class="label">
                        {errors.supplier?.type === "required" && (
                            <span class="label-text-alt text-error">
                                {errors.supplier.message}
                            </span>
                        )}
                    </label>
                </div>
                {/* Product name */}
                <div className="form-control flex gap-2 max-w-xs lg:max-w-md ">
                    <label class="input-group font-semibold">
                        Quantity
                    </label>
                    <input
                        {...register("quantity", {
                            required: {
                                value: true,
                                message: "quantity is required",
                            },
                        })}
                        type="number"
                        placeholder="Enter quantity"
                        class="input input-bordered rounded-sm"
                    />
                    <label class="label">
                        {errors.quantity?.type === "required" && (
                            <span class="label-text-alt text-error">
                                {errors.quantity.message}
                            </span>
                        )}
                    </label>
                </div>

                <button className='btn w-48 btn-primary text-white font-semibold rounded-sm'>Upload Product</button>
            </form>
        </div>
    );
};

export default Add;