import Swal from "sweetalert2";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import useCustomeHook from "../../Hooks/useCustomeHook";
import useAxiosHook from "../../Hooks/AxiosHook/useAxiosHook";

const AddNewTask = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [level, setLevel] = useState("Low");
  const { user } = useCustomeHook();
  const axiosSecure = useAxiosHook();
  const PostedUser = user?.email;

  const handleChangePage = (e) => {
    setLevel(e.target.value);
  };

  const handleAdd = (e) => {
    e.preventDefault();
    const form = e.target;
    const Tittle = form.tittle.value;
    const description = document.getElementById("Textarea").value;
    const Date = document.getElementById("date").value;
    const status = "todo";
    const fullForm = {
      PostedUser,
      Tittle,
      level,
      Date,
      description,
      startDate,
      status
    };
    const isNotEmpty = Object.values(fullForm).some((value) => value === "");

    if (!isNotEmpty) {
      const link = `/AddTask`;
      axiosSecure.post(link, fullForm).then((res) => {
        if (res.data.acknowledged) {
          form.reset();
          Swal.fire("Yeahh!", "Successfully added Task", "success");
        } else {
          Swal.fire("OPPS!!", "Failed to add the Task", "error");
        }
      });
    } else {
      Swal.fire("Opps!", "You should fill in the entire form", "error");
    }
  };

  return (
    <div>
      <h1 className="text-[#38697f] text-2xl md:text-4xl font-bold text-center font-serif my-10">
        Posting Assignment{" "}
      </h1>
      <form
        onSubmit={handleAdd}
        className="lg:w-3/5 mx-auto bg-[#38697f33] p-10 my-10 rounded-lg"
      >
        <div className=" flex flex-col lg:flex-row gap-12 mb-10">
          <label className="input-group md:w-4/5 lg:w-full mx-auto input-group-md">
            <span className="w-[10rem] bg-[#38697f] text-white font-bold">
              Tittle
            </span>
            <input
              name="tittle"
              type="text"
              placeholder="Tittle"
              className="input input-bordered w-full"
            />
          </label>
        </div>

        <div className="  flex flex-col lg:flex-row gap-12 mb-10">
          <label className="input-group md:w-4/5 lg:w-1/2 mx-auto lg:input-group-md">
            <span className="lg:w-[31%] md:w-[23%] w-[33%] bg-[#38697f] text-white font-bold">
              Date
            </span>
            <DatePicker
              id="date"
              className="input input-bordered lg:w-[17rem] md:w-[27rem] w-[15rem] rounded-tl-none rounded-bl-none text-[#a8a6a6]"
              selected={startDate}
              onChange={(date) => setStartDate(date)}
            />
          </label>
          <label className="input-group md:w-4/5 lg:w-1/2 mx-auto lg:input-group-md">
            <span className="w-[10rem] bg-[#38697f] text-white font-bold">
              Priority
            </span>
            <select
              value={level}
              onChange={handleChangePage}
              className="input input-bordered w-full"
            >
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
            </select>
          </label>
        </div>

        <div className=" flex flex-col lg:flex-row gap-12 mb-10">
          <label className="input-group md:w-4/5 lg:w-full mx-auto input-group-md">
            <span className="w-[10rem] bg-[#38697f] text-white font-bold">
              Description
            </span>
            <textarea
              id="Textarea"
              className="textarea w-full"
              placeholder="Enter your description"
            ></textarea>
          </label>
        </div>

        <input
          className="w-full text-center btn text-white text-bold text-lg bg-[#38697f]"
          type="submit"
          value="Add Task"
        />
      </form>
    </div>
  );
};

export default AddNewTask;
