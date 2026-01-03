import React from "react";

function Category() {
  return (
    <div>
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-bold">ប្រភេទទិន្នន័យ</h1>
        <button className="btn btn-success rounded-xl">+បន្ថែមថ្មី</button>
      </div>
      <div className="bg-gray-300 p-4 rounded-xl mt-4">
        <div className="flex justify-between">
          <select className="select rounded-xl w-fit">
            <option value="10">10</option>
            <option value="40">40</option>
            <option value="100">100</option>
          </select>
          <input
            type="text"
            className="input rounded-xl"
            placeholder="ស្វែងរកឈ្មោះ"
          />
        </div>

        <div className="overflow-x-auto my-4">
          <table className="table table-zebra">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Job</th>
                <th>Favorite Color</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              <tr>
                <th>1</th>
                <td>Cy Ganderton</td>
                <td>Quality Control Specialist</td>
                <td>Blue</td>
              </tr>
              {/* row 2 */}
              <tr>
                <th>2</th>
                <td>Hart Hagerty</td>
                <td>Desktop Support Technician</td>
                <td>Purple</td>
              </tr>
              {/* row 3 */}
              <tr>
                <th>3</th>
                <td>Brice Swyre</td>
                <td>Tax Accountant</td>
                <td>Red</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="flex items-center justify-between">
              <p>ទំព័រ 1/10</p>
              <div className="join ">
                <button className="join-item btn btn-sm">«</button>
                <button className="join-item btn btn-sm">ទំព័រ 22</button>
                <button className="join-item btn btn-sm">»</button>
              </div>
        </div>

      </div>
    </div>
  );
}

export default Category;
