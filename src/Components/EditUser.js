import axios from "axios";
import {useState, useEffect} from "react";
import { useNavigate,useParams } from "react-router-dom";

export default function EditUser(){
    const navigate = useNavigate();
    const [inputs,setInputs] = useState([]);
    const {ID} = useParams();

    useEffect(() => {
        getUser();
    }, []);
    
    
    function getUser() {
        axios.get(`http://localhost:80/api/user/${ID}`).then(function(response) {
          console.log(response.data);
            setInputs(response.data);
        });
      }
      

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}));
    }


    const handleSumbit = (event) => {
        event.preventDefault();

        axios.put(`http://localhost:80/api/user/${ID}/edit`, inputs).then(function(response){
        console.log(response.data);
        navigate('/');
    });

    }
    return (
        <div id="SignIn-form">
          <h2>Redaguoti filma!</h2>
          <form onSubmit={handleSumbit} action="" method="post">
                <div class="form-group">
                    <input type="text" name="Name" value={inputs.Name} onChange={handleChange} />
                    <label for="Name">Pavadinimas</label>
                </div>
                <div class="form-group">
                    <input type="text" name="Type" value={inputs.Type} onChange={handleChange} />
                    <label for="Type">Žanras</label>
                </div>

                <div class="form-group">
                    <input type="text" name="Year" value={inputs.Year} onChange={handleChange} />
                    <label for="Year">Metai</label>
                </div>

    <button>Saugoti!</button>
          </form>
        </div> 
        
        
      );


}