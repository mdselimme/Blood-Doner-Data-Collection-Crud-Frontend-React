import Swal from "sweetalert2";

const EnterBloodInformation = () => {
  const bloodGroup = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];

  const handleSubmitBloodData = (e) => {
    e.preventDefault();
    const target = e.target;
    const name = target.username.value;
    const email = target.email.value;
    const phoneNumber = target.phonenumber.value;
    const weight = target.weight.value;
    const height = target.height.value;
    const age = target.age.value;
    const gender = target.gender.value;
    const bloodGroup = target.bloodgroup.value;
    const birthDate = target.dateofbirth.value;
    const address = target.address.value;
    const termCondition = target.condition.checked;

    const donorsData = {
      name,
      email,
      phone: phoneNumber,
      weight,
      height,
      age,
      gender,
      blood_group: bloodGroup,
      dob: birthDate,
      termCondition,
      address,
    };

    fetch("http://localhost:5000/donors", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(donorsData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            title: "Your Data is Saved",
            icon: "success",
            draggable: true,
          });
        }
      })
      .catch((error) => console.log(error.message));

    e.target.reset();
  };
  return (
    <div className="container mx-auto">
      <div className="p-8 rounded-3xl mt-10 shadow-2xl bg-white">
        <h1 className="text-center py-8 text-3xl font-bold text-[#1B2247]">
          Enter your Information Here
        </h1>
        <div className="text-center w-3/4 mx-auto">
          <form onSubmit={handleSubmitBloodData}>
            <div className="grid grid-cols-2 gap-10 mb-4">
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
            <div className="grid grid-cols-2 gap-10 mb-4">
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
            <div className="grid grid-cols-2 gap-10 mb-4">
              <input
                type="text"
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
            <div className="grid grid-cols-2 gap-10 mb-4">
              <select
                name="gender"
                defaultValue="Gender"
                className="select select-bordered w-full"
              >
                <option value={"Gender"} disabled>
                  Gender
                </option>
                <option value={"Male"}>Male</option>
                <option value={"Female"}>Female</option>
                <option value={"Third Gender"}>Third Gender</option>
              </select>
              <select
                name="bloodgroup"
                className="select select-bordered w-full"
                defaultValue={"Blood Group"}
              >
                <option value={"Blood Group"} disabled>
                  Blood Group
                </option>
                {bloodGroup.map((ele, idx) => (
                  <option value={ele} key={idx}>
                    {ele}
                  </option>
                ))}
              </select>
            </div>
            <div className="grid grid-cols-2 gap-10 mb-4">
              <input
                type="date"
                name="dateofbirth"
                placeholder="Enter your Date of birth"
                className="input input-bordered w-full"
              />
              <textarea
                className="textarea textarea-bordered w-full resize-none h-5"
                placeholder="Enter your address"
                name="address"
              ></textarea>
            </div>
            <div className="flex items-center justify-center py-3">
              <input
                name="condition"
                type="checkbox"
                className="checkbox border-orange-400 [--chkbg:theme(colors.indigo.600)] [--chkfg:orange] checked:border-indigo-800"
              />{" "}
              <span className="ms-5">Agree with our term & condition</span>
            </div>
            <div>
              <button
                type="submit"
                className="btn w-1/2 text-white mt-5 btn-primary"
              >
                Submit your Blood Data
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EnterBloodInformation;
