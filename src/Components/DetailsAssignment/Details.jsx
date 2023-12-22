import { useLoaderData } from "react-router-dom";
import useCustomeHook from "../../Hooks/useCustomeHook";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useAxiosHook from "../../Hooks/AxiosHook/useAxiosHook";

const Details = () => {
  // const { id } = useParams();
  const Assignments = useLoaderData();
  const { user } = useCustomeHook();
  const axiosSecure = useAxiosHook();
  const currentUser = user.email;
  const SubmitterName = user.displayName;
  const { _id, PostedUser, Tittle, level, Marks, Date, description, photo } =
    Assignments;

  const handleSubmitButton = (e) => {
    e.preventDefault();
    const form = e.target;
    const Url = form.Url.value;
    const Note = document.getElementById("Textarea").value;
    const assignmentSubmitData = {
      currentUser,
      Tittle,
      Marks,
      SubmitterName,
      Url,
      Note,
    };

    const link = "/SubmitAssignment";
    axiosSecure.post(link, assignmentSubmitData).then((data) => {
      if (data.data.acknowledged) {
        form.reset();
        toast.success(" Assignment Submitted Successfully");
      } else {
        toast.error("Failed to add the product");
      }
    });
  };

  return (
    <div>
      <div key={_id}>
        <div className="md:card md:flex-row card-side bg-base-100 my-20 p-10 shadow-xl md:shadow-[#FE834C] w-[22rem] md:w-[45rem] lg:w-[55rem] mx-auto">
          <figure>
            <img className="md:w-[30rem]" src={photo} alt="Assignment" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {Tittle.toUpperCase()}
              <div className="badge bg-[#FE834C] text-white p-4">{level}</div>
            </h2>
            <p>{description}</p>
            <p>Total Marks: {Marks}</p>
            <p>Submission Last Date: {Date} at 11:59pm</p>
            {/* Modal Opened */}

            <dialog id="my_modal_3" className="modal">
              <div className="modal-box">
                <form method="dialog">
                  <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                    ✕
                  </button>
                </form>
                <form onSubmit={handleSubmitButton} className="my-10">
                  <label className="input-group md:w-4/5 lg:w-full mx-auto input-group-md mb-8">
                    <span className="w-[10rem] bg-[#FE834C] text-white font-bold">
                      Url
                    </span>
                    <input
                      name="Url"
                      type="text"
                      placeholder="Upload Your Assignment Google Drive Link"
                      className="input input-bordered w-full"
                      required
                    />
                  </label>
                  <label className="input-group md:w-4/5 lg:w-full mx-auto input-group-md">
                    <span className="w-[10rem] bg-[#FE834C] text-white font-bold">
                      Note
                    </span>
                    <textarea
                      id="Textarea"
                      className="textarea textarea-bordered w-full"
                      placeholder="Enter your text here ..."
                      required
                    ></textarea>
                  </label>
                  <div className="flex justify-center items-center mt-10">
                    <button
                      className="w-full btn bg-[#FE834C] text-white"
                      type="submit"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </dialog>

            {/* Modal Closed */}

            <div className="flex justify-start items-center gap-8">
              {currentUser === PostedUser ? (
                ""
              ) : (
                <button
                  className="btn bg-[#FE834C] text-white"
                  onClick={() =>
                    document.getElementById("my_modal_3").showModal()
                  }
                >
                  Take Assignment
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Details;
