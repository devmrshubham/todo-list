import React, { useState } from "react";

import BackspaceIcon from "@mui/icons-material/Backspace";

const Todos = () => {
    const [initialData, setIntialData] = useState("");
    const [Data, setData] = useState([]);
    console.log(Data.length);

    const getInput = (e) => {
        if (e.target.value !== "" || Data.length !== 0) {
            setIntialData(e.target.value);
        }
    };

    const getData = () => {
        if (initialData.length === 0) {
            alert("please type input value");
        } else {
            let storeData = [...Data, initialData];
            setIntialData("");
            setData(storeData);
        }
    };

    const DeleteData = (i) => {
        let filterData = Data.filter((curElem, index) => {
            return index != i
        })

        setData(filterData)
    }
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-sm-12  my-4">
                        <input
                            type="text"
                            placeholder="Enter Your task"
                            value={initialData}
                            className="form-control "
                            onChange={getInput}
                        />
                        <button className="btn btn-primary" onClick={getData}>
                            Add
                        </button>
                    </div>

                    <div className="row">
                        {Data.map((d, i) => {
                            return (
                                <>
                                    <div key={i} className="TastDiv">
                                        <p>
                                            {d}
                                            <BackspaceIcon
                                                titleAccess="delete"
                                                className="i"
                                                onClick={() => DeleteData(i)}
                                            />
                                        </p>
                                    </div>
                                </>
                            );
                        })}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Todos;
