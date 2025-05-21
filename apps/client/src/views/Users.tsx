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
  CardHeader,
} from "@nexus/ui";
import Layout from "@/components/Layout";
import { useApiQuery } from "../hooks/useApi";
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
  assignedClients?: { id: string; name: string }[];
  client?: { id: string; name: string };
  canBilling?: boolean;
  isAdmin?: boolean;
  notes?: string;
}

const Users = () => {
  const { data: user } = useApiQuery<User>("me", "/me");
  const { data: users = [] } = useApiQuery<User[]>(
    "users",
    `/clients/${user?.client?.id}/users`
  );
  const navigate = useNavigate();

  return (
    <Layout>
        <Card className="lg:col-span-2 p-0 gap-0">
          <CardHeader className="px-6 py-5 gap-0 flex items-center justify-between">
            <div className="font-medium text-lg">Manage Users</div>
            <Button className="bg-black text-white antialiased" size="sm" onClick={() => navigate("/users/new")}>
              <FaPlus className="w-3 h-3 mr-2" /> Add New User
            </Button>
          </CardHeader>
          <CardContent className="p-0">
            <Table>
              <TableHeader className="bg-[#FAF9F8] border-t">
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Phone</TableHead>
                  <TableHead>Billing</TableHead>
                  <TableHead>Admin</TableHead>
                  <TableHead>Notes</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {users.length === 0 && (
                  <TableRow>
                    <TableCell colSpan={6}>No client users found.</TableCell>
                  </TableRow>
                )}
                {users.map((user: User) => (
                  <TableRow key={user.email}>
                    <TableCell>{user.name}</TableCell>
                    <TableCell>{user.email}</TableCell>
                    <TableCell>{user.phone || "—"}</TableCell>
                    <TableCell>{user.canBilling ? "✓" : "—"}</TableCell>
                    <TableCell>{user.isAdmin ? "✓" : "—"}</TableCell>
                    <TableCell>{user.notes || ""}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
    </Layout>
  );
};

export default Users;
