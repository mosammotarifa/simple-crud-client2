export const getData = async () => {
  const res = await fetch("http://localhost:5000/users");
  if (!res.ok) {
    throw new Error("failed to fetched");
  }
  const data = await res.json();
  return data;
};
 export const getDataById =async(usersId)=>{
  const res = await fetch(`http://localhost:5000/users/${usersId}`)
  if(!res.ok){
    throw new Error("failed to fatch single data")
  }
  const data = await res .json()
  return data;
}
