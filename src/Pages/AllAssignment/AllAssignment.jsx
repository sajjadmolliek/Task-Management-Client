import { useEffect, useState } from "react";
import useCustomeHook from "../../Hooks/useCustomeHook";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import useAxiosHook from "../../Hooks/AxiosHook/useAxiosHook";



const AllAssignment = () => {
  const [levelValue, setLevelValue] = useState("All");
  const [level, setLevel] = useState("All");
  const [assignments, setAssignments] = useState([]);
  const { user } = useCustomeHook();
  const axiosSecure = useAxiosHook();
  const currentUser = user?.email || "No user";
  //  <---------------Work For Pagination------------->
  const [count, setCount] = useState(0);

  const [itemsPerPage, setItemsPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);
  const numberOfPage = Math.ceil(count / itemsPerPage);
  const pages = [];
  for (let i = 1; i < numberOfPage + 1; i++) {
    pages.push(i);
  }
  //  <---------------End Work For Pagination------------->

  // data loading By Query
  const link1 = `/AddAssignmentQuery?level=${level}&page=${currentPage}&size=${itemsPerPage}`;
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
        const link2 = `/delete/${id}`;
        axiosSecure.delete(link2, id).then((data) => {
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

  //  <---------------Work For Pagination------------->

  useEffect(() => {
    fetch(`https://online-study-explore.vercel.app/AddAssignmentCount`)
      .then((res) => res.json())
      .then((data) => setCount(data.count));
  }, []);

  const handleChangePage = (e) => {
    const valueOfChangePage = parseInt(e.target.value);
    setItemsPerPage(valueOfChangePage);
    setCurrentPage(1);
  };
  const handlePageClick = (page) => {
    setCurrentPage(page);
  };
  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  const handleNext = () => {
    if (currentPage < numberOfPage) {
      setCurrentPage(currentPage + 1);
    }
  };

  //  <---------------End Work For Pagination------------->


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
          <option value="Easy">Easy</option>
          <option value="Medium">Medium</option>
          <option value="Hard">Hard</option>
        </select>

        <div className="w-[85%] mx-auto my-20">
       
          <div className="products-container justify-center items-center lg:w-[80rem] grid grid-cols-1 lg:grid-cols-2 gap-20">
            {assignments?.map((assignment) => (
              <div
                key={assignment._id}
                className="md:card md:flex-row  card-side bg-base-100 shadow-xl"
              >
                <figure>
                  <img src={assignment.photo} alt="Assignment" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">
                    {assignment.Tittle}
                    <div className="badge bg-[#FE834C] text-white p-3">
                      {assignment.level}
                    </div>
                  </h2>
                  <p>Total Marks: {assignment.Marks}</p>
                  <p>Last Date: {assignment.Date} at 11:59pm</p>
                  <div className="flex justify-center items-center gap-8">
                    <Link to={`/details/${assignment._id}`}>
                      <button className="btn bg-[#FE834C] text-white">
                        View
                      </button>
                    </Link>
                    <Link to={`/update/${assignment._id}`}>
                      <button className="btn bg-[#FE834C] text-white">
                        Update
                      </button>
                    </Link>
                    {currentUser === assignment.PostedUser ? (
                      <>
                        <button
                          onClick={() => handleDelete(assignment._id)}
                          className="btn bg-[#FE834C] text-white"
                        >
                          Delete
                        </button>
                      </>
                    ) : (
                      <>
                        <button
                          onClick={desableDeleteBttn}
                          className="btn bg-[#FE834C]  text-white"
                        >
                          Delete
                        </button>
                      </>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* //  <--------------- Work For Pagination-------------> */}
          <div className="pagination flex flex-wrap justify-center items-center mt-20">
            <button
              onClick={handlePrevious}
              className="btn bg-[#FE834C] text-white mr-1"
            >
              Previous
            </button>
            <div className="mx-1 inline">
              {pages?.map((page) => (
                <button
                  className={
                    page == currentPage
                      ? "btn selected bg-[#2F0F00] text-white mx-2"
                      : "btn bg-[#FE834C] text-white mx-2"
                  }
                  onClick={() => handlePageClick(page)}
                  key={page}
                >
                  {page}
                </button>
              ))}
            </div>
            <button
              onClick={handleNext}
              className="btn bg-[#FE834C] text-white mr-3 ml-1"
            >
              Next
            </button>
            <select
              value={itemsPerPage}
              onChange={handleChangePage}
              className="btn border-[#FE834C] hover:border-[#FE834C] bg-transparent hover:bg-transparent text-[#FE834C]"
            >
              <option value="4">4</option>
              <option value="8">8</option>
              <option value="12">12</option>
            </select>
          </div>

          {/* //  <---------------End Work For Pagination-------------> */}
        </div>
      </div>
    );
  }
};

export default AllAssignment;
