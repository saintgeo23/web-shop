import { serverUrl } from './const';

interface Credentials {
  email: string;
  password: string;
  commandId?: string;
}

export type AuthResult = {
  token: string;
};

export default {
  login(loginData: Credentials): Promise<AuthResult> {
    return new Promise((resolve, reject) => {
      fetch(`${serverUrl}/signin`, {
        method: 'POST',
        body: JSON.stringify(loginData),
      })
        .then(response => response.json())
        .then(resolve)
        .catch(reject)
    })
  },

  register(registerData: Credentials): Promise<AuthResult> {
    return new Promise((resolve, reject) => {
      fetch(`${serverUrl}/signup`, {
        method: 'POST',
        body: JSON.stringify(registerData),
      })
        .then(response => response.json())
        .then(resolve)
        .catch(reject)
    })
  },
}
