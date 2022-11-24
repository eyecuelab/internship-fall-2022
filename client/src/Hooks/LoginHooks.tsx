import React from 'react';
import { useGoogleLogin } from 'react-google-login';
import { refreshTokenSetup } from './utils/refreshToken';
// import endpoints from '../../endpoints.config';

const clientId = ``;

function LoginHooks() {
  const onSuccess = (res: any) => {
    console.log('Login Success: currentUser:', res.profileObj);
    refreshTokenSetup(res);
  };

  const onFailure = (res: any) => {
    console.log('Login failed: res:', res);
  };

  const { signIn } = useGoogleLogin({
    onSuccess,
    onFailure,
    clientId,
    isSignedIn: true,
    accessType: 'offline',
  });

  return (
		<>
      <button onClick={signIn} className="button">
        <img src="icons/google.svg"></img>
        <span className="buttonText">Sign in with Google</span>
      </button>
		</>
  );
}

export default LoginHooks;