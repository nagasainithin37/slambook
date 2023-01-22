import './friends.css'
function Friends({ users }) {
    return (
        <div>


            <div className="container p-3">

                <table className="table table-sm table-dark">
                    <thead>
                        <tr>
                            <th scope="col">FIrst Name</th>
                            <th scope="col">Last Name</th>
                            <th scope="col">Mobile Number</th>
                            <th scope="col">Email</th>
                            <th scope="col">More Details</th>
                        </tr>
                    </thead>
                    <tbody >
                        {
                            users.map((obj, index) => <tr key={index} >
                                <td className="ps-2">{obj.firstname}</td>
                                <td>{obj.lastname}</td>
                                <td>{obj.pno}</td>
                                <td>{obj.email}</td>
                                <td>


                                    {/* <!-- Button trigger modal --> */}
                                    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                        View More
                                    </button>

                                    {/* <!-- Modal --> */}
                                    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                        <div class="modal-dialog">
                                            <div class="modal-content">
                                                <div class="modal-header modhead">
                                                    <h5 class="modal-title  " id="exampleModalLabel">Full details</h5>
                                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                </div>
                                                <div class="modal-body modbody">
                                                    <div className="contianer  ">
                                                        <div className="card inside ps-5 rounded-5 shadow-5 ">
                                                            <p>Firstname : {obj.firstname}</p>
                                                            <p>Lastname : {obj.lastname}</p>
                                                            <p>I call you as : {obj.i_call_you_as}</p>
                                                            <p>You like to call me as : {obj.You_like_to_call_me_as}</p>
                                                            <p>Birth day : {obj.dob}</p>
                                                            <p>Email : {obj.email}</p>
                                                            <p>Contact Number : {obj.pno}</p>
                                                            <p>Dedicate a song : {obj.song}</p>
                                                            <p>Secret Crush : {obj.crush}</p>
                                                            <p>Bestfriend Name : {obj.bestie}</p>
                                                            <p>Your Hobbies : {obj.hobbies}</p>
                                                            <p>Define our friendship : {obj.def_our_friendship}</p>
                                                            <p>Describe me in your words : {obj.desc}</p>
                                                        </div>
                                                    </div>



                                                </div>

                                            </div>
                                        </div>
                                    </div>



                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>






        </div>
    );
}

export default Friends;