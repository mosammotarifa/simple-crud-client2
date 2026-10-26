import UsersTables from '@/component/UsersTables';
import { getData } from '@/lib/data';
import React from 'react';
import UserCreateModel from '@/component/UserCreateModel';
import { deleteUser } from '@/lib/action';
import { createUser } from '@/lib/action';

const UsersPage = async() => {
    const users = await getData()
    console.log(users)
    return (
        <div>
            <h2>users Mangement:{users.length} </h2>
         <div className='m-3'>  
               <UserCreateModel createUser={createUser} />
         </div>
            <UsersTables users ={users} deleteuser={deleteUser}
             />
        </div>
    );
};

export default UsersPage;