const fakeAuth = {
  isAuthenticated: false,
  login(cb) {
    this.isAuthenticated = true;
    // setTimeout(cb, 0);
  },
  logOut(cb) {
    this.isAuthenticated = false;
    // setTimeout(cb, 0)
  }
};

export default fakeAuth;
