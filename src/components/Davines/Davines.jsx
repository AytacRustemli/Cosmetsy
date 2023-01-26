import axios from "axios";
import React, { useEffect, useState } from "react";
import { BASE_URL } from "../../api/config";
import "../Davines/davines.scss";

function Davines() {
  const [APIData, setAPIData] = useState([]);

    const getDavines = async () => {
      axios.get(BASE_URL + "davines/getall").then((response) => {
        setAPIData(response.data);
      });
    };

    useEffect(() => {
        getDavines();
    }, []);

  return (
    <div>
      <section id="davines">
        <div className="containerr">
          <div className="row justify-content-between">
            {
              APIData &&
              APIData.map((data) =>(
                <div className="col-lg-2 col-6 col-sm-4">
                  <img
                    src={data.picture}
                    alt=""
                  />
                </div>
              ))
            }
            
            
          </div>
        </div>
      </section>
    </div>
  );
}

export default Davines;
