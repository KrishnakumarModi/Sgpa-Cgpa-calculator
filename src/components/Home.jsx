import { useState } from "react"

export default function home() {
  const [subjectCount, setSubjectCount] = useState("");
  const [subjects, setSubjects] = useState([]);
  

  const handleSubmit = (e) => {
    e.preventDefault();

    const count = Number(subjectCount);

    setSubjects(
      Array.from({ length: count }, () => ({
        name: "",
        grade: "",
        credit: "",
      }))
    );
  };
  return (
    <div className=' flex min-h-screen bg-cyan-700 items-center justify-center'>
      <div className="bg-amber-600 w-100 p-8  justify-center rounded-lg shadow-lg ">
        <h1 className="text-2xl font-bold text-center mb-6">
          SGPA Calculator
        </h1>

        <form onSubmit={handleSubmit}>
          <input
            type="number"
            min="1"
            value={subjectCount}
            onChange={(e) => setSubjectCount(e.target.value)}
            className="w-full border border-gray-300 rounded-lg p-3 mb-4"
            placeholder="Enter number of subjects"
          />

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg
                       hover:bg-blue-700 transition duration-200"
          >
            Submit
          </button>
        </form>
        {/* Dynamic Subject Fields */}
        <div className="mt-8 space-y-4">

          {subjects.map((subject, index) => (
            <div
              key={index}
              className="grid grid-cols-2 gap-4"
            >

              {/* Grade */}
              <select
                className="border border-gray-300 rounded-lg p-3"
              >
                <option value="">Select Grade</option>
                <option value="A+">A+</option>
                <option value="A">A</option>
                <option value="B+">B+</option>
                <option value="B">B</option>
                <option value="C">C</option>
                <option value="F">F</option>
              </select>

              {/* Credit */}
              <input
                type="number"
                min="0"
                placeholder="Credit"
                className="border border-gray-300 rounded-lg p-3"
              />
            </div>
          ))}

        </div>
      </div>
    </div>


  )
}