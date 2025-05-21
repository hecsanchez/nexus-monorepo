import {
  Card,
  CardContent,
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
  Button,
  Avatar,
  AvatarImage,
  AvatarFallback,
  Badge,
} from "@nexus/ui";
import { MdEdit, MdDelete } from "react-icons/md";
import Layout from "@/components/Layout";
import { useApiQuery, useApiMutation } from "../hooks/useApi";
import { useNavigate } from "react-router";
import { FaPlus } from "react-icons/fa";

interface User {
  id: string;
  name: string;
  email: string;
  phone?: string;
  role: "ADMIN" | "SE";
  costRate?: number;
  billRate?: number;
  avatar?: string;
  assignedClients?: { client: { id: string; name: string } }[];
}

const Users = () => {
  const {
    data: users = [],
    isLoading,
    error,
  } = useApiQuery<User[]>("users", "/users");
  const navigate = useNavigate();
  const deleteUser = useApiMutation("/users/:id", "delete", {
    onSuccess: () => window.location.reload(),
  });

  return (
    <Layout title="User Manager">
      <div className="flex items-center justify-between pb-2">
        <div className="text-2xl">Manage Users</div>
        <Button
          className="bg-black text-white h-10 text-base antialiased"
          size="sm"
          onClick={() => navigate("/users/new")}
        >
          <FaPlus className="w-4 h-4 mr-2" /> Add New User
        </Button>
      </div>
      <Card>
        <CardContent>
          {isLoading ? (
            <div>Loading...</div>
          ) : error ? (
            <div className="text-red-500">Failed to load users</div>
          ) : (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Phone</TableHead>
                  <TableHead>Cost Rate</TableHead>
                  <TableHead>Bill Rate</TableHead>
                  <TableHead>Assigned Clients</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {users.length === 0 ? (
                  <TableRow>
                    <TableCell
                      colSpan={7}
                      className="text-center text-muted-foreground py-8"
                    >
                      No users found.
                    </TableCell>
                  </TableRow>
                ) : (
                  users.map((user) => (
                    <TableRow key={user.id}>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <Avatar>
                            {user.avatar ? (
                              <AvatarImage src={user.avatar} alt={user.name} />
                            ) : (
                              <AvatarFallback>
                                {user.name
                                  .split(" ")
                                  .map((n: string) => n[0])
                                  .join("")}
                              </AvatarFallback>
                            )}
                          </Avatar>
                          <span className="text-sm font-medium">
                            {user.name}
                          </span>
                        </div>
                      </TableCell>
                      <TableCell>{user.email}</TableCell>
                      <TableCell>{user.phone || "-"}</TableCell>
                      <TableCell>
                        {user.costRate ? `$${user.costRate}/hr` : "-"}
                      </TableCell>
                      <TableCell>
                        {user.billRate ? `$${user.billRate}/hr` : "-"}
                      </TableCell>
                      <TableCell>
                        <div className="flex gap-1 flex-wrap">
                          {user.assignedClients?.map((c) => (
                            <Badge key={c.client.id} variant="secondary">
                              {c.client.name}
                            </Badge>
                          ))}
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex gap-2">
                          <Button
                            variant="ghost"
                            size="icon"
                            aria-label="Edit"
                            onClick={() => navigate(`/users/${user.id}/edit`)}
                          >
                            <MdEdit className="w-5 h-5" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="icon"
                            aria-label="Delete"
                            onClick={() => {
                              if (
                                window.confirm(
                                  "Are you sure you want to delete this user?"
                                )
                              ) {
                                deleteUser.mutate({ id: user.id });
                              }
                            }}
                          >
                            <MdDelete className="w-5 h-5 text-red-500" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
          )}
        </CardContent>
      </Card>
    </Layout>
  );
};

export default Users;
