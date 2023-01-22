import { useForm } from 'react-hook-form';
import { useState } from 'react';
function Form(props) {

    const { register, handleSubmit, formState: { errors } } = useForm()


    const onFormSubmit = (userobj) => {
        props.setUsers([...props.users, userobj]);
       
    }



    return (
        <div className="containe pt-5 ">

            <form className="w-75 mx-auto p-3 mb-5 " onSubmit={handleSubmit(onFormSubmit)}>

                <h1 className='font-weight-bold text-light'>Sweet Memories</h1>
                <p className='lead text-light shadow'>SANTHAI KEERTHANA</p>
                {/* horizantal line */}
                <hr className='divider py-0 mt-4' />
                {/*  fill  */}
                <p className='lead text-light'>Fill out My Slam Book Friends... :)</p>
                <hr className='divider py-0 mt-4' />
                {/* actual form */}

                {/* name */}
                <div className="card pt-2 pb-2 ps-4 w-100 c1  ">
                    <div className="form-group">
                        <label for="name" className="">Full Name</label>
                        <div className="row justify-content-around gap-3 pe-3">
                            <input type="text" className="form-control col-lg mt-3 " id="name" placeholder="First Name" {...register("firstname", { required: true })} />

                            <input type="text" className="form-control col-lg mt-3 " id="name" placeholder="Last Name" {...register("lastname", { required: true })} />
                            {errors.firstname?.type === 'required' && <p className='text-danger'>* First Name is Required</p>}
                            {errors.lastname?.type === 'required' && <p className='text-danger'>* Last Name is Required</p>}
                        </div>
                    </div>
                </div>

                {/* BOX ONE */}
                <div className="row gap-3 mt-4 ps-2 pe-2">
                    {/* i call you as */}
                    <div className="col-lg col-11 rounded-2 pt-2 pb-2 c2 ">
                        <div className="form-group">
                            <label for="nickname" className="">I Call You As</label>
                            <input type="text" className="form-control w-75 mt-3 " id="nickname" placeholder="Nick Name" {...register("i_call_you_as", { required: true })} />
                            {errors.i_call_you_as?.type === 'required' && <p className='text-danger'>* Field is Required</p>}
                        </div>
                    </div>

                    {/* friends call you as */}

                    <div className="col-lg col-11 rounded-2 pt-2 pb-2  c22 ">
                        <div className="form-group">
                            <label for="nickname" className="">You like to call me as</label>
                            <input type="text" className="form-control w-75 mt-3 " id="nickname" placeholder="Nick Name" {...register("You_like_to_call_me_as", { required: true })} />
                            {errors.You_like_to_call_me_as?.type === 'required' && <p className='text-danger'>* Field is Required</p>}
                        </div>
                    </div>
                </div>

                {/* BOX TWO */}
                <div className="row gap-3 mt-4 ps-2 pe-2">
                    {/* i call you as */}
                    <div className="col-lg col-11 rounded-2 pt-2 pb-2 c3 ">
                        <div className="form-group">
                            <label for="date" className="">Birth day</label>
                            <input type="date" className="form-control w-75 mt-3 " id="date" {...register("dob", { required: true })} />
                            {errors.dob?.type === 'required' && <p className='text-danger'>* Date of birth  is Required</p>}
                        </div>
                    </div>

                    {/* friends call you as */}

                    <div className="col-lg col-11 rounded-2 pt-2 pb-2  c4 ">
                        <div className="form-group">
                            <label for="Email" className="">Email</label>
                            <input type="email" className="form-control w-75 mt-3 " id="Email" placeholder="Email" {...register("email", { required: true })} />
                            {errors.email?.type === 'required' && <p className='text-danger'>* Email is Required</p>}
                        </div>
                    </div>
                </div>
                {/* BOX THREE */}
                <div className="row gap-3 mt-4 ps-2 pe-2">
                    {/* i call you as */}
                    <div className="col-lg col-11 rounded-2 pt-2 pb-2 c5 ">
                        <div className="form-group">
                            <label for="cno" className="">Contact Number</label>
                            <input type="number" className="form-control w-75 mt-3 " id="cno" placeholder="XXXXX - XXXXX" {...register("pno", { required: true, minlength: 10, maxLength: 10 })} />
                            {errors.pno?.type === 'required' && <p className='text-danger'>* Phone number is Required</p>}
                            {errors.pno?.type === 'minLength' && <p className='text-danger'>* Phone number should contain 10 numbers only</p>}
                            {errors.pno?.type === 'maxLength' && <p className='text-danger'>* Phone number should contain 10 numbers only</p>}

                        </div>
                    </div>

                    {/* friends call you as */}

                    <div className="col-lg col-11 rounded-2 pt-2 pb-2  c6 ">
                        <div className="form-group">
                            <label for="favsong" className="">Dedicate a song</label>
                            <input type="text" className="form-control w-75 mt-3 " id="nfavsong" placeholder="Song name" {...register("song")} />
                        </div>
                    </div>
                </div>
                {/* BOX FOUR */}
                <div className="row gap-3 mt-4 ps-2 pe-2">
                    {/* i call you as */}
                    <div className="col-lg col-11 rounded-2 pt-2 pb-2 c3 ">
                        <div className="form-group">
                            <label for="sc" className="">Secret Crush</label>
                            <input type="text" className="form-control w-75 mt-3 " id="sc" placeholder="Crush Name" {...register("crush", { required: true })} />
                            {errors.crush?.type === 'required' && <p className='text-danger'>* Field is Required</p>}
                        </div>
                    </div>

                    {/* friends call you as */}

                    <div className="col-lg col-11 rounded-2 pt-2 pb-2  c1 ">
                        <div className="form-group">
                            <label for="bfn" className="">Bestfriend Name</label>
                            <input type="text" className="form-control w-75 mt-3 " id="bfn" placeholder="Bestie Name" {...register("bestsie", { required: true })} />
                            {errors.bestie?.type === 'required' && <p className='text-danger'>* Field is Required</p>}
                        </div>
                    </div>
                </div>
                {/* BOX FIVE */}


                <div className="row gap-3 mt-4 ps-2 pe-2">
                    {/* i call you as */}
                    <div className="col-lg col-11 rounded-2 pt-2 pb-2 c4 ">
                        <div className="form-group">
                            <label for="yh" className="">Your Hobbies</label>
                            <input type="text" className="form-control w-75 mt-3 " id="yh " placeholder="Hobbies" {...register("hobbies")} />
                        </div>
                    </div>

                    {/* friends call you as */}

                    <div className="col-lg col-11 rounded-2 pt-2 pb-2  c6 ">
                        <div className="form-group">
                            <label for="df" className="">Define our friendship</label>
                            <input type="text" className="form-control w-75 mt-3 " id="df" placeholder="Rating" {...register("def_our_friendship")} />
                        </div>
                    </div>
                </div>



                {/* BOX SIX */}
                <div className="row p-2 tao m-3">

                    <div className="form-floating mt-3 ta">
                        <textarea style={{ height: 130 }} className="form-control" placeholder="Leave a comment here" id="floatingTextarea2" {...register("desc")} />
                        <label className="ms-4" for="floatingTextarea2">Describe me in your words</label>
                    </div>
                </div>


                <hr className='divider py-0 mt-4' />


                <div className="d-block text-center">
                    <button type="submit" className="btn btn-primary">Sign in</button>
                </div>
            </form>
        </div>
    );
}

export default Form;