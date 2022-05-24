import React, { useState } from "react";
import auth from "../../firebase/Firebase.int";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import UpdateProfileModal from "./UpdateProfileModal";

const MyProfile = () => {
  const [user] = useAuthState(auth);
  const [modalOpen, setModalOpen] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    const profileData = {
      name: user?.displayName,
      email: user?.email,
      education: data.education,
      location: data.loaction,
      phone: data.phone,
      link: data.link,
    };
    fetch("http://localhost:5000/myProfile", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(profileData),
    })
      .then((res) => res.json())
      .then((result) => {
        reset();
      });
  };

  return (
    <div class="hero ">
      <div class="hero-content text-center">
        <div>
          <h3 className="text-xl">Name: {user?.displayName}</h3>
          <h3 className="text-lg mt-4">Email: {user?.email}</h3>

          <div class="card max-w-[40rem] md:w-[35rem] mx-auto bg-base-100 shadow-xl mt-8">
            <div class="card-body">
              <form onSubmit={handleSubmit(onSubmit)}>
                <input
                  {...register("education", { required: true })}
                  type="text"
                  placeholder="Enter your educational quality"
                  class="input w-full input-bordered my-2"
                />
                <br />
                {errors.education?.type === "required" && (
                  <span className="text-red-500">Required</span>
                )}
                <input
                  {...register("loaction", { required: true })}
                  type="text"
                  placeholder="Enter your loaction city/district"
                  class="input w-full input-bordered my-2"
                />
                <br />
                {errors.loaction?.type === "required" && (
                  <span className="text-red-500">Required</span>
                )}
                <input
                  {...register("phone", { required: true })}
                  type="number"
                  placeholder="Enter your phone number"
                  class="input w-full input-bordered my-2"
                />
                <br />
                {errors.phone?.type === "required" && (
                  <span className="text-red-500">Required</span>
                )}
                <input
                  {...register("link", { required: true })}
                  type="text"
                  placeholder="Enter your linkedin profail link"
                  class="input w-full input-bordered my-2"
                />
                <br />
                {errors.link?.type === "required" && (
                  <span className="text-red-500">Required</span>
                )}

                <input
                  type="submit"
                  value="upload profail"
                  className="btn  mt-2 md:mr-8"
                />
                <label
                  for="update-profile-modal"
                  className="btn  mt-2 bg-accent text-black hover:bg-accent"
                  onClick={() => setModalOpen(true)}
                >
                  update profile
                </label>
              </form>
            </div>
          </div>
        </div>
      </div>

      {modalOpen && <UpdateProfileModal setModalOpen={setModalOpen} />}
    </div>
  );
};

export default MyProfile;
