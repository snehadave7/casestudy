import React from "react";
import { useForm, useFieldArray } from "react-hook-form";
import "./AddAddressForm.css";

const AddAddressForm = () => {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      addresses: [{ address: "", city: "", pincode: "", phone: "", notes: "" }],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "addresses",
  });

  const onSubmit = (data) => {
    console.log("Address Data: ", data);
    // Integrate API call to save address here
  };

  return (
    <div className="add-address-container">
      <h2>Add Address</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        {fields.map((item, index) => (
          <div key={item.id} className="address-block">
            <h3>Address {index + 1}</h3>

            {/* Address Field */}
            <input
              type="text"
              placeholder="Address"
              {...register(`addresses.${index}.address`, {
                required: "Address is required.",
              })}
            />
            {errors?.addresses?.[index]?.address && (
              <span className="error">
                {errors.addresses[index].address.message}
              </span>
            )}

            {/* City Field */}
            <input
              type="text"
              placeholder="City"
              {...register(`addresses.${index}.city`, {
                required: "City is required.",
              })}
            />
            {errors?.addresses?.[index]?.city && (
              <span className="error">
                {errors.addresses[index].city.message}
              </span>
            )}

            {/* Pincode Field */}
            <input
              type="text"
              placeholder="Pincode"
              {...register(`addresses.${index}.pincode`, {
                required: "Pincode is required.",
                pattern: {
                  value: /^[0-9]{6}$/,
                  message: "Pincode must be a 6-digit number.",
                },
              })}
            />
            {errors?.addresses?.[index]?.pincode && (
              <span className="error">
                {errors.addresses[index].pincode.message}
              </span>
            )}

            {/* Phone Field */}
            <input
              type="text"
              placeholder="Phone"
              {...register(`addresses.${index}.phone`, {
                required: "Phone number is required.",
                pattern: {
                  value: /^[0-9]{10}$/,
                  message: "Phone number must be a 10-digit number.",
                },
              })}
            />
            {errors?.addresses?.[index]?.phone && (
              <span className="error">
                {errors.addresses[index].phone.message}
              </span>
            )}

            {/* Notes Field */}
            <textarea
              placeholder="Notes (Optional)"
              {...register(`addresses.${index}.notes`)}
            />

            {/* Remove Button */}
            {fields.length > 1 && (
              <button
                type="button"
                className="remove-btn"
                onClick={() => remove(index)}
              >
                Remove Address
              </button>
            )}
          </div>
        ))}

        {/* Add More Address Button */}
        <button
          type="button"
          className="add-btn"
          onClick={() =>
            append({ address: "", city: "", pincode: "", phone: "", notes: "" })
          }
        >
          Add More Address
        </button>

        {/* Submit Button */}
        <button type="submit" className="submit-btn">
          Save Addresses
        </button>
      </form>
    </div>
  );
};

export default AddAddressForm;
