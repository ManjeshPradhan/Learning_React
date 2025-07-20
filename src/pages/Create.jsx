import Navbar from "./components/Navbar"


function Create(){
    return(
        <div>
            <Navbar />
            <div>
  <div className="container mx-auto p-4">
    {/* Page Title */}
    <h1 className="text-3xl font-bold text-[black] mb-6">Create blog</h1>
    <form className="grid grid-cols-1 gap-6">
      {/* Title */}
      <div className="p-2">
        <input type="text" id="title" name="title" placeholder="Title" className="block w-full rounded-md border-gray-300 shadow-sm focus:border-[#8c0327] focus:ring-[#8c0327] focus:ring-opacity-50 p-2" style={{backgroundColor: '#f6f6f6'}} />
      </div>

      {/* Subtitle */}
      <div className="p-2">
        <input type="text" id="Sub_title" name="Sub_title" placeholder="Sub Title" className="block w-full rounded-md border-gray-300 shadow-sm focus:border-[#8c0327] focus:ring-[#8c0327] focus:ring-opacity-50 p-2" style={{backgroundColor: '#f6f6f6'}} />
      </div>
      {/* Description and Image Upload */}
      <div className="p-2 grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Description */}
        <div>
          <textarea id="description" name="description" rows={3} placeholder="Description" className="block w-full h-48 rounded-md border-gray-300 shadow-sm focus:border-[#8c0327] focus:ring-[#8c0327] focus:ring-opacity-50 p-2" style={{backgroundColor: '#f6f6f6'}} defaultValue={""} />
        </div>
        {/* Image Upload */}
        <div>
          <label htmlFor="image-upload" className="block w-full h-48 border-2 border-dashed border-gray-300 rounded-md cursor-pointer flex flex-col items-center justify-center bg-[#f6f6f6] hover:bg-gray-50">
            <div className="text-center">
              <div className="mb-2">
                <button type="button" className="bg-[#8c0327] hover:bg-[#6b0220] text-white rounded-full py-2 px-4">Select from the computer</button>
              </div>
              <p className="text-gray-500">or drag photo here</p>
              <p className="text-gray-500 text-sm mt-1">PNG, JPG, SVG</p>
            </div>
          </label>
          <input id="image-upload" name="image" type="file" accept="image/*" className="sr-only" />
        </div>
      </div>
      {/* Create Blog Button */}
      <div className="col-span-full mt-6 p-2">
        <button type="submit" className="block w-full bg-[#8c0327] hover:bg-[#6b0220] text-white font-bold py-3 px-4 rounded-full">
          Create Blog
        </button>
      </div>
    </form>
  </div>
</div>

        </div>
    )
}

export default Create