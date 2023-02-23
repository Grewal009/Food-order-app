



const Header = () => {
  return (
    <div className="bg-slate-200 shadow-lg px-5 py-2 flex justify-between">
      <h1 className="font-extrabold flex justify-center items-center">FoodApp</h1>

      <ul className="flex font-bold justify-center items-center ">
        <li className="mx-2 px-4 py-1 rounded-full text-white bg-indigo-500 hover:bg-indigo-700 active:bg-indigo-800 active:ring-1 ">Home</li>
        <li className="mx-2 px-4 py-1 rounded-full text-white bg-indigo-500 hover:bg-indigo-800 ">About</li>
        <li className="mx-2 px-4 py-1 rounded-full text-white bg-indigo-500 hover:bg-indigo-800 ">Contact</li>
        <li className="mx-2 px-4 py-1 rounded-full text-white bg-indigo-500 hover:bg-indigo-800 ">Cart</li>
      </ul>
      
      <div>
      <button className="mx-2 px-4 py-2 bg-orange-400 rounded-md  text-slate-50 font-bold hover:bg-orange-600">Login</button>
      <button className="mx-2 px-4 py-2 bg-orange-400 rounded-md  text-slate-50 font-bold hover:bg-orange-600">Signup</button>
      </div>

    </div>
  )
}

export default Header;