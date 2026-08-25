export default function home(){
    return(
        <div className=' flex min-h-screen bg-cyan-700 items-center justify-center'>
            <button></button>
            <div className="bg-amber-600 w-100 p-8  justify-center rounded-lg shadow-lg ">
            <h1 className="text-2xl font-bold text-center mb-6">
          SGPA Calculator
        </h1>
        <form>
          {/* Total Subjects with credits including practical */}
          <div className="mb-6">
            <label className="block mb-2 font-medium">
              Total Subjects with credits including practical 
            </label>

            <input
              type='number'
              min={0}
              placeholder="Enter total number of subjects "
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
          >
            Submit
          </button>
        </form>
            </div>
        </div>
       
        
    )
}