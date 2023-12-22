import { useLoaderData, } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useAxiosHook from "../../Hooks/AxiosHook/useAxiosHook";

const GiveMarks = () => {
  const SubmittedAssignment = useLoaderData();
  const axiosSecure = useAxiosHook();
  const { _id, Url, Note, Marks } = SubmittedAssignment;

  const handleSubmitButton = (e) => {
    e.preventDefault();
    const form = e.target;
    const ObtainMarks = form.givenMarks.value;
    const Feedback = document.getElementById("Textarea").value;
    const assignmentSubmitData = { ObtainMarks, Feedback };

    const link = `/SubmitAssignment/${_id}`;
    axiosSecure.patch(link, assignmentSubmitData)
    .then((data) => {
      if (data.data.acknowledged) {
        form.reset();
        toast.success(" Given Marks Successfully");
      } else {
        toast.error("Failed To Give Marks");
      }
    });
  };

  return (
    <form
      onSubmit={handleSubmitButton}
      className="my-10 w-[25rem] md:w-[40rem] lg:w-[50rem] mx-auto border-[2px] p-12 rounded-lg shadow-lg md:shadow-[#FE834C]"
    >
      <p className="text-2xl font-bold overflow-clip w-[20rem] md:w-full">
        <span className="text-lg font-semibold w-full ">Assignment Link:</span>
        <a href={Url} target="blank">
          {Url}
        </a>
      </p>
      <p className="text-xl font-bold">
        <span className="text-lg font-semibold">Note:</span> {Note}
      </p>
      <label className="input-group md:w-4/5 lg:w-full mx-auto input-group-md my-8">
        <span className="w-[10rem] bg-[#FE834C] text-white font-bold">
          Give Marks
        </span>
        <input
          name="givenMarks"
          type="text"
          placeholder={`given Marks Out Of ${Marks}`}
          className="input input-bordered w-full"
          required
        />
      </label>
      <label className="input-group md:w-4/5 lg:w-full mx-auto input-group-md">
        <span className="w-[10rem] bg-[#FE834C] text-white font-bold">
          Feedback
        </span>
        <textarea
          id="Textarea"
          className="textarea textarea-bordered w-full"
          placeholder="Enter your feedback here ..."
          required
        ></textarea>
      </label>
      <div className="flex justify-center items-center mt-10">
        <button className="btn bg-[#FE834C] text-white" type="submit">
          Submit
        </button>
      </div>
      <ToastContainer />
    </form>
  );
};

export default GiveMarks;
