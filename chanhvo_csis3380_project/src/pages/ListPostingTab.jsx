
const ListPostingTab = ({listPet =[], adminDeletePost}) => {

    return ( 
        <>
            <div className="row text-center">
                <h3>Posting List</h3>
            </div>

            <div className="m-5">
                <table className="table table-hover fs-4 m-4 p-5">
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Name</th>
                            <th scope="col">Breed</th>
                            <th scope="col">Age</th>
                            <th scope="col">Gender</th>
                            <th scope="col">Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {listPet.length === 0 ? ((<p>There is no user in database </p>)): ""}
                        {
                            listPet.filter(post => post.status === "Active")
                            .map((post, index) => {                                               
                                    return (
                                        <tr className="m-4 p-3" key={index}>
                                            <th scope="row">{index + 1}</th>
                                            <td>{post.petName}</td>
                                            <td>{post.breed}</td>
                                            <td>{post.age}</td>
                                            <td>{post.gender}</td>
                                            <td>
                                                <button className="btn btn-danger"
                                                    onClick={() => adminDeletePost(post.id)}
                                                >Delete</button>
                                            </td>
                                        </tr>
                                    )
                            })
                        }

                    </tbody>
                </table>
            </div>
            
        </>
     );
}
 
export default ListPostingTab;