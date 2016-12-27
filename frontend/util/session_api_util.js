export const login = user =>{
    const opts = {
      method: 'POST',
      headers: new Headers({
	  'Content-Type': 'application/json'
      }),
      body: JSON.stringify({ user })
    };
    const req = new Request('http://localhost:3000/session', opts)
    return fetch(req, opts).then( r => r.json()).catch(e => e);  
};

export const signup = user => {
    const opts = {
      method: 'POST',
      headers: new Headers({
	  'Content-Type': 'application/json'
      }),
      body: JSON.stringify({ user })
    };
    const req = new Request('http://localhost:3000/users', opts)
    return fetch(req, opts).then( r => r.json()).catch(e => e);
};
