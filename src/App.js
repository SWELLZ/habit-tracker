
function App() {
  return (
    <div className="min-h-screen grid place-items-center bg-amber-50">
      <form
        className="bg-amber-200 rounded-md shadow-lg flex flex-col items-center w-[500px] h-[500px] justify-evenly"
        onSubmit={(e) => e.preventDefault()}
      >
        <h2 className="text-2xl font-bold">Sign Up!</h2>

        <label className="w-4/5">
          <p>Email:</p>
          <input className="w-full bg-amber-50 py-1 px-1 rounded-sm shadow-sm" type="email" required />
        </label>

        <label className="w-4/5">
          <p>Password:</p>
          <input className="w-full bg-amber-50 py-1 px-1 rounded-sm shadow-sm" type="password" required />
        </label>

        <label className="w-4/5">
          <p>Confirm Password:</p>
          <input className="w-full bg-amber-50 py-1 px-1 rounded-sm shadow-sm" type="password" required />
        </label>

        <div className="w-4/5 flex flex-col gap-2 items-center">
          <button
            className="py-2 w-full bg-[#6ADBA6] px-4 rounded-sm shadow"
            type="submit"
          >
            Sign Up
          </button>
          <a href="#" className="underline">
            Already have an account? Sign In!
          </a>
        </div>
      </form>
    </div>
  );
}

export default App;
