// "use client";

import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import { useRouter } from "next/navigation";

import { Shapes } from "@/components/ui/Shapes";
import { Button } from "@/components/ui/button";

import { getPatient, getUser } from "@/lib/actions/patient.actions";
import router from "next/router";
import { use } from "react";
import Homebutton from "@/components/ui/home-button";

const Homepage = async ({ params: { userId } }: SearchParamProps) => {
  //   const isAdmin = searchParams?.admin === "true";

  const user = await getUser(userId);
  const patient = await getPatient(userId);

  // const router = useRouter();

  return (
    <div className=" h-screen max-h-screen">
      {/* {isAdmin && <PasskeyModal />} */}

      <div className="grid min-h-[70vh] grid-cols-1 items-center md:grid-cols-2">
        <Shapes />

        <section className="remove-scrollbar container my-auto col-start-1 md:row-start-1">
          <div className="sub-container max-w-[496px]">
            <div className="flex justify-start">
              <Image
                src="/assets/icons/healthAppLogo.png"
                height={1000}
                width={1000}
                alt="patient"
                className="mb-12 h-10 w-fit"
              />
              <h1 className=" sub-header py-2 px-3 ">Healthify</h1>
            </div>

            {/* <PatientForm /> */}
            <p className="mb-10">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Molestias, fugit quibusdam rerum temporibus nam saepe magnam eum,
              ut nemo assumenda eos perspiciatis voluptate ab eius aspernatur
              incidunt id officia maxime. Aspernatur numquam delectus id,
              expedita quia accusamus quasi quaerat facilis quis sapiente amet,
              nihil, ducimus consequuntur eaque possimus ad?
            </p>

            {/* <div className="flex flex-col gap-6 xl:flex-row">
              
              <Button
                
                className={"shad-primary-btn w-full"}
                // onClick={() => redirect(`/patients/${userId}/new-appointment`)}
              >
                <div>click here</div>
              </Button>
              
              <Button className={"shad-primary-btn w-full"}>
                <div>click here too</div>
              </Button>
            </div> */}

            <Homebutton userId={userId} />

            <div className="text-14-regular mt-20 flex justify-between">
              <p className="justify-items-end text-dark-600 xl:text-left">
                © 2024 Healthify
              </p>
              <Link href="/?admin=true" className="text-green-500">
                Admin
              </Link>
            </div>
          </div>
        </section>
      </div>
      {/* <Image
        src="/assets/images/onboarding-img.png"
        height={1000}
        width={1000}
        alt="patient"
        className="side-img max-w-[50%]"
      /> */}
      {/* <div className="grid min-h-[70vh] grid-cols-1 items-center md:grid-cols-2">
        <Shapes />
      </div> */}
    </div>
  );
};

export default Homepage;
