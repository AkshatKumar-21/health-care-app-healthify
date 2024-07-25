import Image from "next/image";
import Link from "next/link";

import { PatientForm } from "@/components/forms/PatientForm";
import { PasskeyModal } from "@/components/PasskeyModal";
import { Shapes } from "@/components/ui/Shapes";

const Home = ({ searchParams }: SearchParamProps) => {
  const isAdmin = searchParams?.admin === "true";

  return (
    <div className=" h-screen max-h-screen">
      {isAdmin && <PasskeyModal />}

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

            <PatientForm />

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

export default Home;
