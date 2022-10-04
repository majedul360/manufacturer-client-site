import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import auth from "../../firebase/Firebase.int";

const UpdateProfileModal = ({ setModalOpen }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const [user] = useAuthState(auth);

  const onSubmit = (data) => {
    const updatedProfile = {
      education: data.education,
      location: data.loaction,
      phone: data.phone,
      link: data.link,
    };
    fetch(
      `https://menufacturer-server-side-h26rnk2hy-majedul360.vercel.app/updateProfile/${user?.email}`,
      {
        method: "PUT",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(updatedProfile),
      }
    )
      .then((res) => res.json())
      .then((result) => {
        setModalOpen(false);
        reset();
      });
  };
  return (
    <div>
      <input
        type="checkbox"
        id="update-profile-modal"
        className="modal-toggle"
      />
      <div className="modal">
        <div className="modal-box">
          <div className="card-body">
            <form onSubmit={handleSubmit(onSubmit)}>
              <input
                disabled
                type="text"
                defaultValue={user?.displayName}
                className="input w-full input-bordered my-2"
              />
              <br />

              <input
                type="email"
                disabled
                defaultValue={user?.email}
                className="input w-full input-bordered my-2"
              />
              <br />

              <input
                {...register("education", { required: true })}
                type="text"
                placeholder="Enter your educational quality"
                className="input w-full input-bordered my-2"
              />
              <br />
              {errors.education?.type === "required" && (
                <span className="text-red-500">Required</span>
              )}
              <input
                {...register("loaction", { required: true })}
                type="text"
                placeholder="Enter your loaction city/district"
                className="input w-full input-bordered my-2"
              />
              <br />
              {errors.loaction?.type === "required" && (
                <span className="text-red-500">Required</span>
              )}
              <input
                {...register("phone", { required: true })}
                type="number"
                placeholder="Enter your phone number"
                className="input w-full input-bordered my-2"
              />
              <br />
              {errors.phone?.type === "required" && (
                <span className="text-red-500">Required</span>
              )}
              <input
                {...register("link", { required: true })}
                type="text"
                placeholder="Enter your linkedin profail link"
                className="input w-full input-bordered my-2"
              />
              <br />
              {errors.link?.type === "required" && (
                <span className="text-red-500">Required</span>
              )}
              <input
                type="submit"
                defaultValue="update"
                className="btn w-full mt-2"
              />
            </form>
          </div>
          <div className="modal-action">
            <label htmlFor="update-profile-modal" className="btn bg-red-500">
              cancel
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateProfileModal;
