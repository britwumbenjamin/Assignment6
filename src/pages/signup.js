import { useState } from 'react';
import { Route, Switch, useHistory, Link} from 'react-router-dom';

function SignupComponent (){

    const history = useHistory()
  const [values, setvalues] = useState({})


  const onchange = (e) => {
    setvalues({...values, [e.target.name]: e.target.value})
  }

  function submit(e){
    e.preventDefault();
  
    fetch('http://localhost:4000/api/v1/signup', 
    {
      method: 'POST',
      body: JSON.stringify(values),
      headers: {
        'Content-Type': 'application/json'
      },
    })
    .then(response => response.json())
    .then(responseData => {
      console.log(responseData);
    })

  }

    return(
        <div className='signmain'>

            <div className='formmain'>

                <div className='let'>
                    <h1>Sign Up</h1>
                    
                </div>

                <div className='form1'>

                <form >        
                        <div className='form-group' >
                            <label className='bel'>Username</label>
                            <input type='text' name='username' className='form-field' onChange={onchange} />
                        </div>

                        <div className='form-group' >
                            <label className='bel'>Email</label>
                            <input type='Email' name='email' className='form-field' onChange={onchange}  />
                        </div>

                        <div className='form-group' >
                            <label className='bel'>Password </label>                             
                            <input type='Password' name='password' className='form-field' onChange={onchange}  />
                        </div>

                        <div className='form-group' >
                            <label className='bel'>Confirm Password</label>
                            <input type='Password' name='confirm_password' className='form-field' onChange={onchange}  />
                        </div>

                        <div className='down'>
                            <Link to='/' className='link'>Already have an account</Link>
                            <button onClick={submit} >Sign Up</button>
                        </div>
                                    
                    </form>
                </div>
            </div>

              
            
        </div>
    )
}
export default SignupComponent;
