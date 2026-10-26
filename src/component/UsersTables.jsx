"use client";
import React from "react";
import { Button, Table } from "@heroui/react";
import { AlertDialog } from "@heroui/react";
import Link from "next/link";

const UsersTables = ({ users, deleteuser }) => {
  const handleDelete = async (usersId) => {
    await deleteuser(usersId);
  };
  console.log(users);
  return (
    <div>
      <Table>
        <Table.ScrollContainer>
          <Table.Content aria-label="Team members" className="min-w-[600px]">
            <Table.Header>
              <Table.Column isRowHeader>Name</Table.Column>
              <Table.Column>Email</Table.Column>
              <Table.Column>Position</Table.Column>
              <Table.Column>Actions</Table.Column>
            </Table.Header>
            <Table.Body>
              {users.map((user) => (
                <Table.Row key={user._id}>
                  <Table.Cell>{user.name} </Table.Cell>
                  <Table.Cell>{user.email} </Table.Cell>
                  <Table.Cell>{user.position} </Table.Cell>
                  <Table.Cell>
                    <Link href={`/users/${user._id}`}>
                      {" "}
                      <Button>Details</Button>
                    </Link>
                    <Link href={`/users/${user._id}/edit`}>
                      <Button variant="danger-soft">Edit</Button>
                    </Link>
                    <AlertDialog>
                      <Button variant="danger">Delete User</Button>
                      <AlertDialog.Backdrop>
                        <AlertDialog.Container>
                          <AlertDialog.Dialog className="sm:max-w-[400px]">
                            <AlertDialog.CloseTrigger />
                            <AlertDialog.Header>
                              <AlertDialog.Icon status="danger" />
                              <AlertDialog.Heading>
                                Delete User permanently?
                              </AlertDialog.Heading>
                            </AlertDialog.Header>
                            <AlertDialog.Body>
                              <p>
                                This will permanently delete
                                <strong> {user.name} </strong> and all of its
                                data. This action cannot be undone.
                              </p>
                            </AlertDialog.Body>
                            <AlertDialog.Footer>
                              <Button slot="close" variant="tertiary">
                                Cancel
                              </Button>
                              <Button
                                slot="close"
                                onClick={() => handleDelete(user._id)}
                                variant="danger"
                              >
                                Delete User
                              </Button>
                            </AlertDialog.Footer>
                          </AlertDialog.Dialog>
                        </AlertDialog.Container>
                      </AlertDialog.Backdrop>
                    </AlertDialog>
                  </Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table.Content>
        </Table.ScrollContainer>
      </Table>
    </div>
  );
};

export default UsersTables;
