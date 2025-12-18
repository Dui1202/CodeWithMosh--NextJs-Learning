"use client";

import { useRouter } from "next/navigation";
import React from "react";

const NewUserPage = () => {
  const router = useRouter();

  return (
    <div>
      <h1 className="pb-5">NewUserPage</h1>
      <button
        className="btn btn-primary"
        onClick={() => {
          router.push("/users");
        }}
      >
        Create User
      </button>
    </div>
  );
};

export default NewUserPage;
