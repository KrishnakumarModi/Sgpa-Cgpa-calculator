import { useState } from "react";
import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;
export default function Home() {
  const [subjectCount, setSubjectCount] = useState("");
  const [subjects, setSubjects] = useState([]);
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  // Create dynamic subject fields
  const handleSubmit = (e) => {
    e.preventDefault();

    const count = Number(subjectCount);

    if (!count || count < 1) {
      setError("Please enter a valid number of subjects.");
      return;
    }

    setError("");
    setResult(null);

    setSubjects(
      Array.from({ length: count }, () => ({
        grade: "",
        credit: "",
      }))
    );
  };

  // Update grade
  const handleGradeChange = (index, value) => {
    setSubjects((previousSubjects) =>
      previousSubjects.map((subject, i) =>
        i === index
          ? { ...subject, grade: value }
          : subject
      )
    );
  };

  // Update credit
  const handleCreditChange = (index, value) => {
    setSubjects((previousSubjects) =>
      previousSubjects.map((subject, i) =>
        i === index
          ? { ...subject, credit: value }
          : subject
      )
    );
  };

  // Send data to FastAPI
  const calculateSGPA = async () => {
    setError("");
    setResult(null);

    // Check if all subjects are filled
    for (let i = 0; i < subjects.length; i++) {
      if (!subjects[i].grade) {
        setError(`Please select a grade for Subject ${i + 1}.`);
        return;
      }

      if (
        subjects[i].credit === "" ||
        Number(subjects[i].credit) <= 0
      ) {
        setError(`Please enter a valid credit for Subject ${i + 1}.`);
        return;
      }
    }

    try {
      const response = await axios.post(
        `${API_URL}/calculate-sgpa`,
        {
          subjects: subjects.map((subject) => ({
            grade: subject.grade,
            credit: Number(subject.credit),
          })),
        }
      );

      setResult(response.data);

    } catch (error) {
      console.error(error);

      if (error.response) {
        setError(
          error.response.data?.detail ||
          `Server error: ${error.response.status}`
        );
      } else if (error.request) {
        setError(
          "Cannot connect to FastAPI. Make sure your FastAPI server is running."
        );
      } else {
        setError("Something went wrong while sending the request.");
      }
    }
  };

  return (
    <div className="flex min-h-screen bg-cyan-700 items-center justify-center p-5">

      <div className="bg-amber-600 w-full max-w-2xl p-8 rounded-lg shadow-lg">

        <h1 className="text-2xl font-bold text-center mb-6">
          SGPA Calculator
        </h1>

        {/* Number of Subjects */}

        <form onSubmit={handleSubmit}>

          <input
            type="number"
            min="1"
            value={subjectCount}
            onChange={(e) => setSubjectCount(e.target.value)}
            className="w-full border border-gray-300 rounded-lg p-3 mb-4"
            placeholder="Enter number of subjects including practical"
          />

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition duration-200"
          >
            Submit
          </button>

        </form>


        {/* Error */}

        {error && (
          <div className="mt-5 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg">
            <strong>Error:</strong> {error}
          </div>
        )}


        {/* Dynamic Subject Fields */}

        {subjects.length > 0 && (

          <div className="mt-8 space-y-4">

            {subjects.map((subject, index) => (

              <div
                key={index}
                className="grid grid-cols-3 gap-4 text-clip"
              >

                {/* Subject Number */}

                <div className="font-semibold text-white text-center pt-4">
                  Subject {index + 1}
                </div>


                {/* Grade */}

                <select
                  value={subject.grade}
                  onChange={(e) =>
                    handleGradeChange(index, e.target.value)
                  }
                  className="w-full border border-gray-300 rounded-lg p-3 mb-4"
                >

                  <option value="">
                    Select Grade
                  </option>

                  <option value="A+">A+</option>
                  <option value="A">A</option>
                  <option value="B+">B+</option>
                  <option value="B">B</option>
                  <option value="C+">C+</option>
                  <option value="C">C</option>
                  <option value="F">F</option>

                </select>


                {/* Credit */}

                <input
                  type="number"
                  min="1"
                  value={subject.credit}
                  onChange={(e) =>
                    handleCreditChange(index, e.target.value)
                  }
                  placeholder="Credit"
                  className="w-full border border-gray-300 rounded-lg p-3 mb-4"
                />

              </div>

            ))}


            {/* Calculate Button */}

            <button
              type="button"
              onClick={calculateSGPA}
              className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition duration-200 mt-4"
            >
              Calculate SGPA
            </button>


            {/* Result */}

            {result && (

              <div className="mt-6 bg-white rounded-lg p-5 text-center">

                <h2 className="text-xl font-bold">
                  Your SGPA
                </h2>

                <p className="text-4xl font-bold text-green-600 mt-2">
                  {result.sgpa}
                </p>

                <p className="mt-2">
                  Total Credits: {result.total_credits}
                </p>

              </div>

            )}

          </div>

        )}

      </div>

    </div>
  );
}