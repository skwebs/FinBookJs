export async function login(credentials) {
  const { data } = await axios.post("/login", {
    email,
    password,
    device_name: `${Platform.OS} ${Platform.Version}`
  });
}



export async function loadUser(credentials) {

}