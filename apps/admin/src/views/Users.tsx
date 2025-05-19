import React, { useState } from "react";
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

interface User {
  name: string;
  email: string;
  phone: string;
  costRate: number;
  billRate: number;
  avatar?: string;
  assignedClients: string[];
}

const adminUsers: User[] = [
  {
    name: "John Smith",
    email: "john@example.com",
    phone: "+1 234 567 8900",
    costRate: 75,
    billRate: 150,
    avatar: undefined,
    assignedClients: ["Client A", "Client B"],
  },
];

const seUsers: User[] = [];

const tabDefs = [
  { label: "Admin Users", value: "admin" },
  { label: "SE Users", value: "se" },
];

const Users = () => {
  const [tab, setTab] = useState<string>("admin");
  const users = tab === "admin" ? adminUsers : seUsers;

  return (
    <Layout title="User Manager">
      <div className="flex items-center justify-between pb-2">
      <div className="text-lg font-medium">Manage Users</div>
        <Button className="bg-black text-white" size="sm">+ Add New User</Button>
      </div>
      <div className="">
        <Card>
          <CardContent className="pt-6">
            <div className="flex gap-2 mb-4">
              {tabDefs.map((t) => (
                <button
                  key={t.value}
                  className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors border ${tab === t.value ? "bg-black text-white border-black" : "bg-muted text-foreground border-transparent hover:bg-accent"}`}
                  onClick={() => setTab(t.value)}
                  type="button"
                >
                  {t.label}
                </button>
              ))}
            </div>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead></TableHead>
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
                    <TableCell colSpan={8} className="text-center text-muted-foreground py-8">
                      No users found.
                    </TableCell>
                  </TableRow>
                ) : (
                  users.map((user) => (
                    <TableRow key={user.email}>
                      <TableCell>
                        <Avatar>
                          {user.avatar ? (
                            <AvatarImage src={user.avatar} alt={user.name} />
                          ) : (
                            <AvatarFallback>{user.name.split(" ").map((n: string) => n[0]).join("")}</AvatarFallback>
                          )}
                        </Avatar>
                      </TableCell>
                      <TableCell>{user.name}</TableCell>
                      <TableCell>{user.email}</TableCell>
                      <TableCell>{user.phone}</TableCell>
                      <TableCell>${user.costRate}/hr</TableCell>
                      <TableCell>${user.billRate}/hr</TableCell>
                      <TableCell>
                        <div className="flex gap-1 flex-wrap">
                          {user.assignedClients.map((c: string) => (
                            <Badge key={c} variant="secondary">{c}</Badge>
                          ))}
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex gap-2">
                          <Button variant="ghost" size="icon" aria-label="Edit">
                            <MdEdit className="w-5 h-5" />
                          </Button>
                          <Button variant="ghost" size="icon" aria-label="Delete">
                            <MdDelete className="w-5 h-5 text-red-500" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default Users;   