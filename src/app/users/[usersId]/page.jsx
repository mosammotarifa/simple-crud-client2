import { getDataById } from '@/lib/data';
import React from 'react';

const UserDetail = async({params}) => {
    const{usersId} =await params;
    const userDetail =await getDataById(usersId)
    console.log(userDetail)
    return (
  <div className="mx-auto mt-12 max-w-md overflow-hidden rounded-3xl border border-indigo-100 bg-white shadow-xl shadow-indigo-100">
  {/* Profile Header */}
  <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 px-6 py-10 text-center">
    <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full border-4 border-white/50 bg-white text-3xl font-bold text-indigo-600 shadow-lg">
      {userDetail.name?.charAt(0).toUpperCase()}
    </div>

    <h2 className="text-2xl font-bold text-white">
      {userDetail.name}
    </h2>

    <span className="mt-3 inline-block rounded-full bg-white/20 px-4 py-1 text-sm font-medium text-white">
      {userDetail.position}
    </span>
  </div>

  {/* User Information */}
  <div className="space-y-4 p-6">
    <div className="rounded-xl bg-indigo-50 p-4">
      <p className="text-xs font-semibold uppercase tracking-wider text-indigo-500">
        Full Name
      </p>
      <p className="mt-1 font-semibold text-gray-900">
        {userDetail.name}
      </p>
    </div>

    <div className="rounded-xl bg-purple-50 p-4">
      <p className="text-xs font-semibold uppercase tracking-wider text-purple-500">
        Email Address
      </p>
      <p className="mt-1 break-all font-medium text-gray-900">
        {userDetail.email}
      </p>
    </div>

    <div className="rounded-xl bg-pink-50 p-4">
      <p className="text-xs font-semibold uppercase tracking-wider text-pink-500">
        Position
      </p>
      <p className="mt-1 font-medium text-gray-900">
        {userDetail.position}
      </p>
    </div>
  </div>
</div>
    );
};

export default UserDetail;