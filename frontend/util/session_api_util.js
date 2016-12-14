export const login = user => (
  $.ajax({
    method: 'POST',
    url: '/api/session',
    data: { auth: { user } },
  })
);

export const signup = user => (
  $.ajax({
    method: 'POST',
    url: '/api/user',
    data: user,
  })
);
