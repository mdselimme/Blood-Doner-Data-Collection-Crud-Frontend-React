const Home = () => {
  return (
    <div className="container mx-auto">
      <h1 className="text-center py-8 text-3xl font-bold text-[#1B2247]">
        Enter your Information Here
      </h1>
      <div className="text-center w-3/4 mx-auto">
        <form>
          <div className="grid grid-cols-2 gap-10 mb-8">
            <input
              type="text"
              name="username"
              placeholder="Enter your full name"
              className="input input-bordered w-full"
            />
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="input input-bordered w-full"
            />
          </div>
          <div className="grid grid-cols-2 gap-10 mb-10">
            <input
              type="number"
              name="phonenumber"
              placeholder="Enter your phone number"
              className="input input-bordered w-full"
            />
            <input
              type="number"
              name="weight"
              placeholder="Enter your Weight"
              className="input input-bordered w-full"
            />
          </div>
          <div className="grid grid-cols-2 gap-10 mb-10">
            <input
              type="number"
              name="height"
              placeholder="Enter your Height"
              className="input input-bordered w-full"
            />
            <input
              type="number"
              name="age"
              placeholder="Enter your age 18 - 50"
              className="input input-bordered w-full"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Home;
