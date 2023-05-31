import axios from "axios"
import { Link } from "react-router-dom";
import { useEffect,useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'datatables.net-bs5/css/dataTables.bootstrap5.min.css';


export default function ListUser(){
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");

        const [users,setUsers] = useState([]);

        useEffect(() => {
            getUsers();
        }, []);
        
        
        function getUsers() {
            axios.get('http://localhost:80/api/users/').then(function(response){
            console.log(response.data);
            setUsers(response.data);
            });
            }
            const deleteUser = (ID) => {
                axios.delete(`http://localhost:80/api/user/${ID}/delete`).then(function(response){
                console.log(response.data);
                getUsers();
                });
            }
        
    return(
      <div>
        
  <table id="example" className="table table-striped table-dark" style={{ width: '100%' }}>
    <thead>
    <th className="btn btn-dark text-white rounded-0 me-2 btn-lg"  onClick={() => setSortOrder(sortOrder === "asc" ? "desc" : "asc")}>Rikiuoti</th>
    <th><input
  type="text"
  className="form-control-dark me-2"
  placeholder="Search by name"
  value={searchTerm}
  onChange={(e) => setSearchTerm(e.target.value)}
/></th>
      <tr>
        <th>Name</th>
        <th>Type</th>
        <th>Year</th>
        <th>Edit</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>
      {users
  .filter((user) =>
    user.Name.toLowerCase().includes(searchTerm.toLowerCase())
  )
  .sort((a, b) => {
    if (sortOrder === "asc") {
      return a.Name.localeCompare(b.Name);
    } else {
      return b.Name.localeCompare(a.Name);
    }
  })
  .map((user, key) => (
    // Existing code for rendering table rows
        <tr key={key} className="table-row">
          <td>{user.Name}</td>
          <td>{user.Type}</td>
          <td>{user.Year}</td>
          <td>
            <Link to={`user/${user.ID}/edit`}>
              <img src="..//..//EditButton.png" alt="" width="30px" height="30px" />
            </Link>
          </td>
          <td>
            <button className="button" onClick={() => deleteUser(user.ID)}>
              <img src="..\\..\\..\\DeleteButton.png" alt="" width="30px" height="30px" />
            </button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>

    )
}