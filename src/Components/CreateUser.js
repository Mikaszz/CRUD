import axios from "axios";
import {useState} from "react";
import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'datatables.net-bs5/css/dataTables.bootstrap5.min.css';


export default function CreateUser(){
    const navigate = useNavigate();
    const [inputs,setInputs] = useState({})
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}));
    }
    const handleSumbit = (event) => {
        event.preventDefault();

        axios.post('http://localhost:80/api/users/save', inputs).then(function(response){
        console.log(response.data);
        navigate('/');
    });

    }

    return (  
        <div id="SignIn-form">
        <h2>Sukurti filma!</h2>  
<form  onSubmit={handleSumbit} action="" method="post">
    <div class="form-group">
        <input type="text" name="Name" onChange={handleChange} style={{ padding: '5px' }} autocomplete="off" />
        <label for="Name">Pavadinimas</label>
    </div>
    <div class="form-group">
        <input type="text" name="Type" onChange={handleChange} style={{ padding: '5px' }} autocomplete="off" />
        <label for="Type">Žanras</label>
    </div>

    <div class="form-group">
        <input type="text" name="Year" onChange={handleChange} style={{ padding: '5px' }}  autocomplete="off" />
        <label for="Year">Metai</label>
    </div>

    <button>Saugoti!</button>
</form>
</div>

    )
}

