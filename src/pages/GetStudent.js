import {useState} from "react";
import {Link} from "react-router-dom";
import OutputContainer from "../components/OutputContainer";
import {GetCall} from "../api/ApiCalls";

function GetStudent() {
    const [output, setOutput] = useState({nic: "", name: "", address: "", contact: ""});
    const [nic, setNic] = useState("");
    const [errMessage, setErrMessage] = useState("");
    const [responseMessage, setResponseMessage] = useState("");

    function handleChange(event) {
        setNic(event.target.value);
    }

    async function handleSubmit(event) {
        event.preventDefault();
        setErrMessage("");
        setResponseMessage("");
        if (!nic) {
            setErrMessage("Student NIC is required");
            return;
        }
        try {
            const data = await GetCall(nic);
            if (data.nic) {
                setOutput(data);
                setResponseMessage("Student details retrieved successfully.");
            } else {
                setErrMessage("No student found with that NIC.");
            }
        } catch (err) {
            setErrMessage(`Error: ${err.message}`);
        }
    }

    return (
        <div className={"centered-element"}>
            <img className="student-img" src={"https://cdn-icons-png.flaticon.com/512/5349/5349022.png"} width={"100px"} alt={"student-logo"}/>
            <div className="student-container">
                <h1>Get Student Details</h1>
                <form onSubmit={handleSubmit}>
                    <input onChange={handleChange} value={nic} id="nic" name="nic" placeholder="Enter NIC"/>
                    <button type="submit">Get Details</button>
                    <Link className={"back-link"} to='/dashboard'>Back</Link>
                </form>
                {errMessage && <h5>{errMessage}</h5>}
                {responseMessage && <h4>{responseMessage}</h4>}
                <OutputContainer {...output} />
            </div>
        </div>
    );
}

export default GetStudent;