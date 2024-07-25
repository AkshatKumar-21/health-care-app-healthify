import Image from "next/image";

import { AppointmentForm } from "@/components/forms/AppointmentForm";
import { getPatient } from "@/lib/actions/patient.actions";
import { ShapesTwo } from "@/components/ui/ShapesTwo";
// import { Shapes } from "@/components/ui/Shapes";

const Appointment = async ({ params: { userId } }: SearchParamProps) => {
  const patient = await getPatient(userId);

  return (
    <div className=" h-screen max-h-screen">
      <div className="grid min-h-[70vh] grid-cols-1 items-center md:grid-cols-2">
        {/* <Shapes /> */}
        <ShapesTwo />

        <section className="remove-scrollbar container my-auto col-start-1 md:row-start-1">
          <div className="sub-container max-w-[860px] flex-1 justify-between">
            {/* <Image
            src="/assets/icons/healthAppLogo.png"
            height={1000}
            width={1000}
            alt="logo"
            className="mb-12 h-10 w-fit"
          /> */}

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

            <AppointmentForm
              patientId={patient?.$id}
              userId={userId}
              type="create"
            />

            {/* <p className="copyright mt-10 py-12">© 2024 CarePluse</p> */}
          </div>
        </section>
      </div>

      {/* <Image
        src="/assets/images/appointment-img.png"
        height={1500}
        width={1500}
        alt="appointment"
        className="side-img max-w-[390px] bg-bottom"
      /> */}
      {/* <Shapes /> */}
    </div>
  );
};

export default Appointment;
