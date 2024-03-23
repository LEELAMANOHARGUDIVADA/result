import React from "react";
import resultData from '../assets/data/results.js'

const ResultPage = ({number}) => {
  const handlePrint = () => {
    window.print();
  }
 if (number !== resultData[0].hallticketnumber) 
  return <div className="w-full h-screen flex items-center justify-center">
    <h2 className="text-xl text-red-600">No details Found</h2>
  </div>

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center gap-10">
      <div className="md:w-2/3 w-full mt-[800px] lg:mt-72">
        <div className="w-full bg h-32 flex items-center justify-center rounded-t-2xl">
          <h2 className="text-white text-xl font-bold">Exam Results</h2>
        </div>
        <div className="w-full h-auto py-10 md:px-20  flex flex-col items-center justify-center border rounded-b-2xl gap-10">
          <div className="w-full flex items-center justify-around">
            <div>
              <h3 className="text-sm text-slate-500">Hall Ticket Number</h3>
              <h3 className="font-bold mt-2 text-sm">{resultData[0].hallticketnumber}</h3>
            </div>
            <div>
              <h3 className="text-sm text-slate-500">Student Name</h3>
              <h3 className="font-bold mt-2 text-sm">
                {resultData[0].name}
              </h3>
            </div>
            <div>
              <h3 className="text-sm text-slate-500">Program</h3>
              <h3 className="font-bold mt-2 text-sm">B.TECH in CSE</h3>
            </div>
          </div>

          <div>
            <h3 className="font-bold">Semester 5</h3>
          </div>
          
          <table className=" border-collapse w-full">
            <thead className="relative top-3">
              <tr>
                <th className="border border-black  px-4 bg-customBlue text-white text-sm font-medium py-1">S.No</th>
                <th className="border border-black px-4 bg-customBlue font-medium text-white text-sm py-1">Course Code</th>
                <th className="border border-black px-4 bg-customBlue font-medium text-white text-sm py-1">Course Name</th>
                <th className="border border-black px-4 bg-customBlue font-medium text-white text-sm py-1">Grade</th>
                <th className="border border-black px-4 bg-customBlue font-medium text-white text-sm py-1">Status</th>
                <th className="border border-black px-4 bg-customBlue font-medium text-white text-sm py-1">Credits</th>
              </tr>
            </thead>
            <tbody>
             {
              resultData[0].results.map((result, index) => (
                <tr key={index}>
                <td className="border border-black text-sm text-center py-1">{result.id}</td>
                <td className="border border-black text-sm text-center py-1">{result.course_code}</td>
                <td className="border border-black text-sm py-1 px-2">{result.course_name}</td>
                <td className="border border-black text-sm text-center py-1 px-2">{result.grade}</td>
                <td className="border border-black text-sm text-center py-1 px-2">{result.credits}</td>
                <td className={`border border-black text-sm text-center py-1 px-2 ${result.status === 'P' ? 'text-green-700' : 'text-red-700'}`}>{result.status}</td>
              </tr>
              ))
             }
             
            </tbody>
          </table>

          <div className="w-full flex items-center justify-evenly">
            <div className="bg-gray-100 px-4 py-4 rounded-lg font-semibold text-center text-xs">
              <h3>SGPA:--</h3>
            </div>
            <div className="bg-gray-100 px-4 py-4 rounded-lg font-semibold text-center text-xs">
              <h3>CGPA:--</h3>
            </div>
            <div className="bg-gray-100 px-4 py-4 rounded-lg font-semibold text-center text-xs">
              <h3>Total Secured Credits:: 15.5/21.5 <span></span></h3>
            </div>
          </div>


        </div>
      </div>
      <div className="mb-40">
        <button onClick={handlePrint} className="bg-customBlue px-10 py-4 rounded-xl text-white text-sm">Print</button>
      </div>
    </div>
  );
};

export default ResultPage;