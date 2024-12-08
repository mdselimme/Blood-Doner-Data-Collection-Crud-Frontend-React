const Home = () => {
  return (
    <div className="container mx-auto">
      <h1 className="text-center py-14">Enter your data Here</h1>
      <div className="text-center">
        <form>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
          />
        </form>
      </div>
    </div>
  );
};

export default Home;
