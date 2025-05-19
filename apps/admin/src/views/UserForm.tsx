import React, { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  Button,
  Input,
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
} from "@nexus/ui";
import Layout from "@/components/Layout";
import { useApiQuery, useApiMutation } from "../hooks/useApi";
import { useNavigate, useParams } from "react-router";

interface Client {
  id: string;
  name: string;
}

interface UserData {
  id: string;
  name: string;
  email: string;
  phone?: string;
  role: "ADMIN" | "SE";
  costRate?: number;
  billRate?: number;
  assignedClients?: { clientId: string }[];
}

interface UserFormValues {
  name: string;
  email: string;
  phone: string;
  role: "ADMIN" | "SE";
  costRate?: string;
  billRate?: string;
  assignedClients: string[]; // client IDs
  password?: string; // only for new user
}

const defaultValues: UserFormValues = {
  name: "",
  email: "",
  phone: "",
  role: "ADMIN",
  costRate: "",
  billRate: "",
  assignedClients: [],
  password: "",
};

const UserForm = () => {
  const { id } = useParams();
  const idStr = typeof id === "string" ? id : "";
  const isEdit = Boolean(idStr);
  const navigate = useNavigate();
  const [values, setValues] = useState<UserFormValues>(defaultValues);
  const [error, setError] = useState<string | null>(null);

  const { data: userData } = useApiQuery<UserData>(
    isEdit ? ["user", idStr] : ["user-new"],
    isEdit ? `/users/${idStr}` : ""
  );

  // Fetch clients for SE assignment
  const { data: clients = [] } = useApiQuery<Client[]>("clients", "/clients");

  useEffect(() => {
    if (isEdit && userData) {
      setValues({
        name: userData.name || "",
        email: userData.email || "",
        phone: userData.phone || "",
        role: userData.role || "ADMIN",
        costRate: userData.costRate ? String(userData.costRate) : "",
        billRate: userData.billRate ? String(userData.billRate) : "",
        assignedClients: userData.assignedClients?.map((c) => c.clientId) || [],
        password: "",
      });
    }
  }, [isEdit, userData]);

  // Mutations
  const createUser = useApiMutation("/users", "post", {
    onSuccess: () => navigate("/users"),
    onError: (err: unknown) => setError((err as Error)?.message || "Failed to create user"),
  });
  const updateUser = useApiMutation("/users/:id", "patch", {
    onSuccess: () => navigate("/users"),
    onError: (err: unknown) => setError((err as Error)?.message || "Failed to update user"),
  });

  const handleChange = (field: keyof UserFormValues, value: string | string[]) => {
    setValues((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    const payload = {
      name: values.name,
      email: values.email,
      phone: values.phone,
      role: values.role,
      costRate: values.role === "SE" ? Number(values.costRate) : undefined,
      billRate: values.role === "SE" ? Number(values.billRate) : undefined,
      assignedClients: values.role === "SE" ? values.assignedClients : [],
    };
    if (!isEdit) (payload as { [key: string]: unknown }).password = values.password;
    if (isEdit && idStr) {
      updateUser.mutate({ id: idStr, ...payload });
    } else {
      createUser.mutate(payload);
    }
  };

  // For SE assigned clients table
  const handleAddClientRow = () => {
    handleChange("assignedClients", [...values.assignedClients, ""]);
  };
  const handleRemoveClientRow = (idx: number) => {
    handleChange(
      "assignedClients",
      values.assignedClients.filter((_, i) => i !== idx)
    );
  };
  const handleUpdateClientRow = (idx: number, clientId: string) => {
    handleChange(
      "assignedClients",
      values.assignedClients.map((cid, i) => (i === idx ? clientId : cid))
    );
  };

  return (
    <Layout title={isEdit ? "Edit User" : "Add New User"}>
      <Card>
        <CardContent>
          <form className="max-w-xl mx-auto space-y-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium">Name</label>
                <Input
                  value={values.name}
                  onChange={(e) => handleChange("name", e.target.value)}
                  placeholder="Full name"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Email</label>
                <Input
                  type="email"
                  value={values.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                  placeholder="Email"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Phone</label>
                <Input
                  value={values.phone}
                  onChange={(e) => handleChange("phone", e.target.value)}
                  placeholder="Phone"
                />
              </div>
              <div>
                <label className="block text-sm font-medium">User Type</label>
                <Select
                  value={values.role}
                  onValueChange={(val) => handleChange("role", val as "ADMIN" | "SE")}
                >
                  <SelectTrigger className="w-full">{values.role}</SelectTrigger>
                  <SelectContent>
                    <SelectItem value="ADMIN">Admin</SelectItem>
                    <SelectItem value="SE">SE</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              {values.role === "SE" && (
                <>
                  <div>
                    <label className="block text-sm font-medium">Hourly Rate: Cost</label>
                    <Input
                      type="number"
                      value={values.costRate}
                      onChange={(e) => handleChange("costRate", e.target.value)}
                      placeholder="$ per hour"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium">Hourly Rate: Billable</label>
                    <Input
                      type="number"
                      value={values.billRate}
                      onChange={(e) => handleChange("billRate", e.target.value)}
                      placeholder="$ per hour"
                    />
                  </div>
                  <div className="md:col-span-2 mt-4">
                    <label className="block text-sm font-medium mb-1">Assigned Clients</label>
                    <div className="overflow-x-auto">
                      <table className="min-w-full border rounded">
                        <thead>
                          <tr className="bg-[#FAF9F8]">
                            <th className="text-left px-3 py-2 font-normal">Client</th>
                            <th></th>
                          </tr>
                        </thead>
                        <tbody>
                          {values.assignedClients.map((cid, idx) => (
                            <tr key={idx}>
                              <td className="px-3 py-2">
                                <Select
                                  value={cid}
                                  onValueChange={(val) => handleUpdateClientRow(idx, val)}
                                >
                                  <SelectTrigger className="w-64">
                                    {clients.find((c) => c.id === cid)?.name || "Select Client"}
                                  </SelectTrigger>
                                  <SelectContent>
                                    {clients
                                      .filter((c) =>
                                        c.id === cid || !values.assignedClients.includes(c.id)
                                      )
                                      .map((c) => (
                                        <SelectItem key={c.id} value={c.id}>
                                          {c.name}
                                        </SelectItem>
                                      ))}
                                  </SelectContent>
                                </Select>
                              </td>
                              <td>
                                {values.assignedClients.length > 1 && (
                                  <Button
                                    variant="ghost"
                                    size="icon"
                                    onClick={() => handleRemoveClientRow(idx)}
                                    aria-label="Remove"
                                  >
                                    ×
                                  </Button>
                                )}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                    <Button variant="outline" className="mt-2" type="button" onClick={handleAddClientRow}>
                      + Add Client
                    </Button>
                  </div>
                </>
              )}
              {!isEdit && (
                <div>
                  <label className="block text-sm font-medium">Password</label>
                  <Input
                    type="password"
                    value={values.password}
                    onChange={(e) => handleChange("password", e.target.value)}
                    placeholder="Password"
                    required
                  />
                </div>
              )}
            </div>
            {error && <div className="text-red-500 text-sm mt-2">{error}</div>}
            <div className="flex justify-end gap-2 mt-8">
              <Button variant="outline" type="button" onClick={() => navigate("/users")}>Cancel</Button>
              <Button variant="default" type="submit" disabled={createUser.isPending || updateUser.isPending}>
                {isEdit ? (updateUser.isPending ? "Saving..." : "Save Changes") : (createUser.isPending ? "Creating..." : "Create User")}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </Layout>
  );
};

export default UserForm; 