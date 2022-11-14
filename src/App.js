
function App() {
  return (
    <div className="min-h-screen grid place-items-center">
      <form
        className="bg-yellow-200 flex flex-col items-center w-[500px] h-[500px] justify-evenly"
        onSubmit={(e) => e.preventDefault()}
      >
        <h2 className="text-2xl font-bold">Sign Up!</h2>

        <label className="w-4/5">
          <p>Email:</p>
          <input className="w-full" type="email" required />
        </label>

        <label className="w-4/5">
          <p>Password:</p>
          <input className="w-full" type="password" required />
        </label>

        <label className="w-4/5">
          <p>Confirm Password:</p>
          <input className="w-full" type="password" required />
        </label>

        <div className="w-4/5 flex gap-4 items-center">
          <button
            className="py-2 bg-white px-4 rounded-sm shadow"
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
