import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../../contexts/Authprovider/AuthProvider';

const SocialLogin = () => {

const {googleSignIn} = useContext(AuthContext);

const handleGoogleSignIn = () =>{
    googleSignIn()
    .then(result => {
        const user = result.user;
        console.log(user);
    })
    .catch(error => console.error(error))
}

    return (
        <div>
            <p className='text-center'><small>Social Media Login:</small></p>
            <p className='text-center'>
                <button onClick={handleGoogleSignIn} className='btn btn-circle'>Google</button>
            </p>
        </div>
    );
};

export default SocialLogin;