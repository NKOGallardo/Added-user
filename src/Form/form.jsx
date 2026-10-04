import { useState } from "react";
import "./form.css";

function Form() {
    
    const formData = useState({
        name:"",
        job:"",
        salary:"",
    });

    const handleSubmit = (e) => {
        e.preventDafault();
        console.log("hi there", formData)
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    required
                />
                <label htmlFor="job">Job</label>
                <input
                    type="text"
                    id="job"
                    name="job"
                    value={formData.job}
                    required
                />
                <label htmlFor="salary">Salary</label>
                <input
                    type="number"
                    id="salary"
                    name="salary"
                    value={formData.salary}
                    required
                />
                <br />
                <button type="submit">Add</button>
            </form>
        </>
    )
}

export default Form;