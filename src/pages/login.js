import {Link, useHistory} from 'react-router-dom';
import { useState } from 'react';

function LoginComponet (){
    
    let history  = useHistory()

    const [user_name, setUsername] = useState('')
    const [pass_word, setPassword] = useState('')
    
    function goToPage(path){
        history.push(path)
    }
    function updateUsername(e){
        setUsername(e.target.value)
    }
    function updatePassword(e){
        setPassword(e.target.value)
    }

    function submit(e){
        e.preventDefault();
           
        let json_object = JSON.stringify({username: user_name, password: pass_word})
        fetch('http://localhost:5000/api/v1/login', {
            method: 'POST', 
            body: json_object,
            headers: {
                "Content-Type" : "application/json"
            }
        })
        .then(res => res.json())
        .then(data =>{
          console.log(data)
        })
    }     

    return(
        <div className='main'>
            <div className='form-body'>
                <form>                    
                    
                    <div className='form_grou'>
                        <input type="text" onChange={updateUsername} className="form-fiel" placeholder='Username'/>
                    </div>

                    <div className="form_grou">
                        <input type="password" onChange={updatePassword} className="form-fiel" placeholder='Password' />
                    </div >
                    <div className='btn'>
                    <button onClick={submit} className='yep'>Submit</button>
                    <button onClick={() => goToPage('/signup')} className='yep' > Signup</button>         
                    </div>
                </form>
            </div>

        </div>
    )

    
}
export default LoginComponet ;