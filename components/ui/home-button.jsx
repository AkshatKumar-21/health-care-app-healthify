"use-client";

import React from "react";
import { Button } from "./button";

import { getPatient, getUser } from "@/lib/actions/patient.actions";
// import Router from "next/router";

// import { useRouter } from "next/navigation";

const Homebutton = async ({ userId }) => {
  const patient = await getPatient(userId);
  // const router = useRouter();

  // const handleClick = () => {
  //   router.push(`/patients/${userId}/new-appointment`);
  // };

  return (
    <div className="flex flex-col gap-6 xl:flex-row">
      {patient ? (
        <Button
          // type="submit"
          // disabled={isLoading}
          className={"shad-primary-btn w-full"}
          // onClick= {router.push(`/patients/${userId}/new-appointment`}
          // onClick={handleClick()}
        >
          <div>New Appointment</div>
        </Button>
      ) : (
        <Button className={"shad-primary-btn w-full"}>
          <div>Register Now</div>
        </Button>
      )}
    </div>
  );
};

export default Homebutton;
