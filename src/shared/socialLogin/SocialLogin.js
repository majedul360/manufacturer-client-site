import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import auth from "../../firebase/Firebase.int";
const SocialLogin = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

  return (
    <div className="p-4">
      <div
        className="flex items-center justify-center btn rounded-full btn-outline"
        onClick={() => signInWithGoogle()}
      >
        <img src="images/google.png" className="w-[2rem] mr-4" alt="" />
        <span className="text-lg">continue with google</span>
      </div>
      <div class="divider">Or</div>
    </div>
  );
};

export default SocialLogin;
