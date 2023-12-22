import { useEffect, useState } from "react";
import useCustomeHook from "../../Hooks/useCustomeHook";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import useAxiosHook from "../../Hooks/AxiosHook/useAxiosHook";



const Complete = () => {
  const [levelValue, setLevelValue] = useState("All");
  const [level, setLevel] = useState("All");
  const [assignments, setAssignments] = useState([]);
  const { user } = useCustomeHook();
  const axiosSecure = useAxiosHook();
  const currentUser = user?.email || "No user";


  // data loading By Query
  const link1 = `/AddTaskQuery?level=${level}`;
  useEffect(() => {
    axiosSecure.get(link1).then((data) => setAssignments(data.data));
  }, [axiosSecure, level, link1]);

  // Level change to find by query
  const handleChangeLevel = (e) => {
    const LevelValue = e.target.value;
    const lowerCaseValue = LevelValue;
    setLevelValue(LevelValue);
    setLevel(lowerCaseValue);
  };

  // Delete Assignment and change state
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) { 
        axiosSecure.delete(`/delete?id=${id}`,).then((data) => {
         
          const remain = assignments.filter((datas) => datas._id !== id);
          if (data.data.acknowledged) {
            setAssignments(remain);
            Swal.fire("Deleted!", "Your file has been deleted.", "success");
          }
        });
      }
    });
  };

  // desable Delete Button WIth SweetAlert
  const desableDeleteBttn = () => {
    Swal.fire(
      "Oops!",
      "Your are not Valid User To Delete This Assignment",
      "error"
    );
  };




  if (assignments.length === 0) {
    return (
      <div>
        <select
          value={levelValue}
          onChange={handleChangeLevel}
          className="input input-bordered w-full"
        >
          <option value="All">All</option>
          <option value="Easy">Easy</option>
          <option value="Medium">Medium</option>
          <option value="Hard">Hard</option>
        </select>
        <p className="text-xl md:text-4xl font-bold italic text-center p-20">
          No Relevant Assignment Published Yet.
        </p>
      </div>
    );
  } else {
    return (
      <div>
        <select
          value={levelValue}
          onChange={handleChangeLevel}
          className="input input-bordered w-full px-10"
        >
          <option value="All">All</option>
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>

        <div className="w-[85%] mx-auto my-20">
       
          <div className="products-container justify-center items-center lg:w-[80rem] grid grid-cols-1 lg:grid-cols-2 gap-20">
          {assignments?.map((assignment) =>
              assignment.status === "complete" ? (
                <div
                  key={assignment._id}
                  className="md:card md:flex-row  card-side bg-[#C6C6C6] shadow-xl"
                >
                  <div className="card-body">
                    <h2 className="card-title">
                      {assignment.Tittle}
                      <div className="badge bg-[#38697f] text-white p-3">
                        {assignment.level}
                      </div>
                    </h2>

                    <p>Description: {assignment.description}</p>
                    <p>Deadline: {assignment.Date} at 11:59pm</p>
                    <div className="flex justify-center items-center gap-8">
                      <button className="btn bg-[#38697f] text-white">
                        Move to on-going
                      </button>

                      <Link to={`/update/${assignment._id}`}>
                        <button className="btn bg-[#38697f] text-white">
                          Edit
                        </button>
                      </Link>
                      {currentUser === assignment.PostedUser ? (
                        <>
                          <button
                            onClick={() => handleDelete(assignment._id)}
                            className="btn bg-[#38697f] text-white"
                          >
                            Delete
                          </button>
                        </>
                      ) : (
                        <>
                          <button
                            onClick={desableDeleteBttn}
                            className="btn bg-[#38697f]  text-white"
                          >
                            Delete
                          </button>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              ) : (
                ""
              )
            )}
          </div>

        </div>
      </div>
    );
  }
};



export default Complete;