import ListPage from "../pages/ListPage";
import house1 from "/src/assets/house1.jpg";
// import house2 from "/src/assets/house2.jpg";
// import house3 from "/src/assets/house3.jpg";
// import house4 from "/src/assets/house4.jpg";
// import house5 from "/src/assets/house5.jpg";
// import house6 from "/src/assets/house6.jpg";

const Home = () => {
  return (
    <div className="px-12 ">
      <div className="relative">
        <img
          src={house1}
          alt=""
          className="w-full object-fill h-[450px] rounded-3xl"
        />
        <div className="flex gap-6 w-full absolute -mt-24 px-6 ">
          <div className="bg-[#F3f4f5] w-2/3  rounded-3xl px-6 py-12">
            <ListPage />
          </div>
          <div className="bg-[#F3f4f5] w-1/3  rounded-3xl">
            <h1>B</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
