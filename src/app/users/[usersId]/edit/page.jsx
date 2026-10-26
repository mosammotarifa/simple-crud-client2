import { updatedData } from "@/lib/action";
import { getDataById } from "@/lib/data";
import { Button, Input, Label, TextField } from "@heroui/react";
import React from "react";

const EditingPage = async ({ params }) => {
  const { usersId } = await params;
  const userEdit = await getDataById(usersId)
  const editUpdatedData =async(formData)=>{
    'use server'
    await updatedData(usersId,formData)
  }

  return (
    <div>
      <form action={editUpdatedData} className="flex flex-col gap-4">
        <TextField
          className="w-full"
          name="name"
          type="text"
          variant="secondary"
          defaultValue={userEdit.name}
        >
          <Label>Name</Label>
          <Input placeholder="Enter your name" />
        </TextField>
        <TextField
          className="w-full"
          name="email"
          type="email"
          variant="secondary"
          defaultValue={userEdit.email}
        >
          <Label>Email</Label>
          <Input placeholder="Enter your email" />
        </TextField>
        <TextField
          className="w-full"
          name="position"
          type="text"
          variant="secondary"
          defaultValue= {userEdit.position}
        >
          <Label>Position</Label>
          <Input placeholder="Enter your Position number" />
        </TextField>

        <Button type="button" slot="close" variant="secondary">
          Cancel
        </Button>
        <Button type="submit">Create User</Button>
      </form>
    </div>
  );
};

export default EditingPage;
