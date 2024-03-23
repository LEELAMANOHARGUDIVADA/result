import { useNavigate } from "react-router-dom";
import "../App.css";
import Header from "../components/Header";
import { useEffect, useState } from "react";
import { Hourglass } from "react-loader-spinner";
import resultData from "../assets/data/results";


const Home = ({number, setNumber}) => {
  const [semester, setSemester] = useState();
  const [formData, setFormData] = useState({
    number,
    semester,
  });
  const[loading,setLoading] = useState(false);

  useEffect(() => {
    console.log(formData);
  }, [formData]);
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
        setLoading(false)
    },[3000])
  }, [loading])

  const formHandler = (e) => {
    e.preventDefault();
    setFormData({
      hallTicketNumber: number,
      semester: semester,
    });
    setLoading(true);
    if (number === resultData[0].hallticketnumber) {
        setTimeout(() => {
            navigate(`/results/${number}`);
        }, 3000);
    } else {
        document.getElementById('error').textContent = 'No details Found'
    }
  };

  

  return (
    <>
      <Header />

      <div className="w-full h-screen flex items-center justify-center">
        <div className="w-[480px]">
          <div className="w-full bg h-32 flex items-center justify-center rounded-t-2xl">
            <h2 className="text-white text-xl font-bold">Exam Results</h2>
          </div>
          <div className="w-full h-auto py-10 px-10 flex items-center justify-center border rounded-b-2xl">
            <form
              onSubmit={formHandler}
              className="w-full flex flex-col items-center justify-center gap-7"
            >
              <div className="w-full">
                <h3 className="text-sm text-slate-500 mb-2">
                  Hall Ticket Number <span className="text-red-500">*</span>
                </h3>

                <input
                  type="text"
                  className="w-full border outline-none focus:border-blue-700 px-4 py-3 rounded-lg"
                  required
                  onChange={(e) => setNumber(e.target.value)}
                  value={number}
                />
              </div>
              <div className="w-full">
                <h3 className="text-sm text-slate-500 mb-2">
                  Select Exam Type <span className="text-red-500">*</span>
                </h3>
                <select
                  required
                  className="w-full border outline-none focus:border-blue-700 px-4 py-3 rounded-lg cursor-pointer"
                >
                  <option value=""></option>
                  <option value="general" className="w-full">
                    General
                  </option>
                  <option value="Honors and Minors">Hinors and Minors</option>
                </select>
              </div>
              <div className="w-full">
                <h3 className="text-sm text-slate-500 mb-2">
                  Select Semester <span className="text-red-500">*</span>
                </h3>
                <select
                  required
                  className="w-full border outline-none focus:border-blue-700 px-4 py-3 rounded-lg cursor-pointer"
                  onChange={(e) => setSemester(e.target.value)}
                  value={semester}
                >
                  <option value=""></option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                </select>
              </div>
              <div className="w-full">
                <button className="bg text-white w-full rounded-lg py-4 text-sm font-bold flex items-center justify-center">
                  {
                    !loading ? 'Get Result' : (
                    <Hourglass
                    visible={true}
                    height="32"
                    width="32"
                    ariaLabel="loading"
                    wrapperStyle={{}}
                    wrapperClass=""
                    colors={["#306cce", "#72a1ed"]}
                  />
                  )
                  }
                </button>
              </div>
                <h3 id="error" className="text-xl font-semibold text-red-500">
                  
                </h3>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
