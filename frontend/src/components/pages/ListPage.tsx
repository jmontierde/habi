import Filter from "./Filter";

import house2 from "/src/assets/house2.jpg";
import bed from "/src/assets/bed.png";
import bath from "/src/assets/bath.png";
import message from "/src/assets/message.png";
import save from "/src/assets/save.png";
// import chat from "/src/assets/chat.png";

const ListPage = () => {
  return (
    <div className="flex flex-col ">
      <Filter />
      <div className="my-12 space-y-6">
        <h1 className="font-semibold text-3xl">Best Options</h1>

        <div className="flex flex-col space-y-6">
          <div className="flex  bg-[#fff] p-3 rounded-2xl">
            <div className="flex w-2/3  ">
              <div className=" w-full">
                <img
                  src={house2}
                  alt="house2"
                  className="w-full h-48 rounded-xl "
                />
              </div>
              <div className="flex flex-col justify-between   py-6  w-full h-full">
                <div className="px-6">
                  <h2 className="font-semibold text-lg">
                    3 rooms, modern apartment
                  </h2>
                  <p>4300 E 49th St, Valley View, OH 4412</p>
                </div>

                <div className="flex gap-3 px-6">
                  <div className="bg-[#E6EEF7] py-1 px-3 flex justify-center items-center space-x-3 rounded-lg">
                    <img src={bed} alt="bed" className="w-6 h-6 " />
                    <p>3</p>
                  </div>
                  <div className="bg-[#E6EEF7] py-1 px-3 flex  justify-center items-center space-x-3 rounded-lg">
                    <img src={bath} alt="bath" className="w-6 h-6 " />
                    <p>3</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-between items-end py-6 px-6  w-1/3">
              <p className="font-semibold text-xl">$500</p>
              <div className="flex justify-center items-center space-x-3 ">
                <img src={save} alt="save" className="w-6" />

                <img src={message} alt="message" className="w-6" />
              </div>
            </div>
          </div>

          <div className="flex  bg-[#fff] p-3 rounded-2xl">
            <div className="flex w-2/3  ">
              <div className=" w-full">
                <img
                  src={house2}
                  alt="house2"
                  className="w-full h-48 rounded-xl "
                />
              </div>
              <div className="flex flex-col justify-between   py-6  w-full h-full">
                <div className="px-6">
                  <h2 className="font-semibold text-lg">
                    3 rooms, modern apartment
                  </h2>
                  <p>4300 E 49th St, Valley View, OH 4412</p>
                </div>

                <div className="flex gap-3 px-6">
                  <div className="bg-[#E6EEF7] py-1 px-3 flex justify-center items-center space-x-3 rounded-lg">
                    <img src={bed} alt="bed" className="w-6 h-6 " />
                    <p>3</p>
                  </div>
                  <div className="bg-[#E6EEF7] py-1 px-3 flex  justify-center items-center space-x-3 rounded-lg">
                    <img src={bath} alt="bath" className="w-6 h-6 " />
                    <p>3</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-between items-end py-6 px-6  w-1/3">
              <p className="font-semibold text-xl">$500</p>
              <div className="flex justify-center items-center space-x-3 ">
                <img src={save} alt="save" className="w-6" />

                <img src={message} alt="message" className="w-6" />
              </div>
            </div>
          </div>
          {/* <div className="grid grid-cols-3 gap-3 p-3 place-items-center place-content-between bg-[#fff] rounded-2xl">
            <div className="w-full">
              <img
                src={house2}
                alt="house2"
                className="w-full h-48 rounded-xl "
              />
            </div>

            <div className="flex flex-col justify-center space-y-12 bg-slate-400 w-full h-full">
              <div>
                <h2 className="font-semibold">3 rooms, modern apartment</h2>
                <p>4300 E 49th St, Valley View, OH 4412</p>
              </div>

              <div className="flex gap-3  w-full">
                <div className="bg-[#E6EEF7] py-1 px-3 flex justify-center items-center space-x-3 rounded-lg">
                  <img src={bed} alt="bed" className="w-6 h-6 " />
                  <p>3</p>
                </div>
                <div className="bg-[#E6EEF7] py-1 px-3 flex  justify-center items-center space-x-3 rounded-lg">
                  <img src={bath} alt="bath" className="w-6 h-6 " />
                  <p>3</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center space-y-12 bg-slate-400 w-full h-full">
              <p>$500</p>
              <div className="flex space-x-2">
                <img src={save} alt="save" className="w-6" />

                <img src={message} alt="message" className="w-6" />
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default ListPage;
