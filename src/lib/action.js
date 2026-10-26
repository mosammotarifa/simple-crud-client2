"use server";

import { revalidatePath } from "next/cache";

import { redirect } from "next/navigation";

export const deleteUser = async (usersId) => {
  const res = await fetch(`http://localhost:5000/users/${usersId}`, {
    method: "DELETE",
  });
  if (!res.ok) {
    throw new Error(" failed to fetched delete usere");
  }
  const data = await res.json();
  revalidatePath("/users");
  return data;
};

export const createUser = async (formData) => {
  const newUsers = Object.fromEntries(formData.entries());
  const res = await fetch("http://localhost:5000/users", {
    method: "POST",
    headers: {
      "content-type": " application/json",
    },
    body: JSON.stringify(newUsers),
  });
  if (!res.ok) {
    throw new Error("failed to fetch in Create data");
  }
  const data = await res.json();
  console.log(data);
  revalidatePath("/users");
  redirect('/users')
};

 export const updatedData =async(usersId,formData)=>{
  const updatedNewData = Object .fromEntries(formData.entries())

  const res = await fetch(`http://localhost:5000/users/${usersId}`,{
    method:"PATCH",
    headers:{
      'content-type':'application/json'
    },
  body:JSON.stringify(updatedNewData)
  })
  if(!res.ok){
    throw new Error("failed to fetched updated Data ")
  }
  const data = await res.json()
  console.log(data)
  revalidatePath('/users')
  redirect('/users')
 
} 