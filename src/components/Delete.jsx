



const Delete = ({setDeleteModal}) => {
  return (
    <div className="fixed inset-0 flex justify-center items-center z-50">
          <div className="bg-white p-6 space-y-6 rounded-lg shadow-xl text-black">
            <p className="mb-4">Are you sure you want to delete this note?</p>
            <div className="flex gap-1">
              <button onClick={() => setDeleteModal(false)}
                className="px-4 py-1 w-[50%] bg-gray-300 text-black rounded-[20px] hover:bg-gray-400">
                Cancel
              </button>
              <button onClick={() => {
                  // Add delete logic here
                  setDeleteModal(false);
                }}
                className="px-4 py-1 w-[50%] bg-red-500 text-white rounded-[20px] hover:bg-red-600">
                Delete
              </button>
            </div>
          </div>
    </div>
  )
}



export default Delete
