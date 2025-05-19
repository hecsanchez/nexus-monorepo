import React, { useState } from "react";
import {
  Card,
  CardContent,
  Button,
  Input,
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
} from "@nexus/ui";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { FaTrash } from "react-icons/fa";
import Layout from "../components/Layout";
import { useApiMutation, useApiQuery } from "../hooks/useApi";
import { useNavigate } from "react-router";
import { toast } from "@nexus/ui";

// Simple Checkbox wrapper
const Checkbox = React.forwardRef<
  HTMLInputElement,
  React.ComponentProps<typeof CheckboxPrimitive.Root>
>(({ children, ...props }, ref) => (
  <CheckboxPrimitive.Root
    ref={ref}
    {...props}
    className="w-4 h-4 border rounded flex items-center justify-center data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground focus:ring-2 focus:ring-ring"
  >
    <CheckboxPrimitive.Indicator className="text-primary-foreground">
      ✓
    </CheckboxPrimitive.Indicator>
  </CheckboxPrimitive.Root>
));
Checkbox.displayName = "Checkbox";

const departmentsInitial = [""];

export default function NewClient() {
  const [companyName, setCompanyName] = useState("");
  const [companyUrl, setCompanyUrl] = useState("");
  const [departments, setDepartments] = useState<string[]>(departmentsInitial);
  const [users, setUsers] = useState([
    {
      name: "",
      email: "",
      phone: "",
      department: "",
      exceptions: { email: false, sms: false },
      access: { billing: false, admin: false },
    },
  ]);
  const [engineers, setEngineers] = useState([{ id: "", name: "", email: "" }]);

  const navigate = useNavigate();
  const createClientMutation = useApiMutation("/clients", "post");

  // Fetch SEs from the backend
  type SE = { id: string; name: string; email: string };
  const {
    data: solutionsEngineers = [],
    isLoading: seLoading,
    isError: seError,
  } = useApiQuery<SE[]>(
    "solutions-engineers",
    "/users/ses"
  );

  // Handlers for dynamic rows (add/remove)
  const addUser = () =>
    setUsers([
      ...users,
      {
        name: "",
        email: "",
        phone: "",
        department: "",
        exceptions: { email: false, sms: false },
        access: { billing: false, admin: false },
      },
    ]);
  const removeUser = (idx: number) =>
    setUsers(users.filter((_, i) => i !== idx));
  const updateUser = (idx: number, field: string, value: any) => {
    setUsers(users.map((u, i) => (i === idx ? { ...u, [field]: value } : u)));
  };
  const updateUserNested = (
    idx: number,
    group: string,
    field: string,
    value: boolean
  ) => {
    setUsers(
      users.map((u, i) =>
        i === idx ? { ...u, [group]: { ...u[group], [field]: value } } : u
      )
    );
  };

  const addEngineer = () => setEngineers([...engineers, { id: "", name: "", email: "" }]);

  const removeEngineer = (idx: number) =>
    setEngineers(engineers.filter((_, i) => i !== idx));

  const updateEngineer = (idx: number, engineer: SE) => {
    console.log('updateEngineer', idx, engineer);
    setEngineers(
      engineers.map((e, i) => (i === idx ? engineer : e))
    );
  };

  const removeDepartment = (dept: string) =>
    setDepartments(departments.filter((d) => d !== dept));

  const handleCreateClient = () => {
    if (!companyName.trim() || !companyUrl.trim()) {
      alert("Please enter both company name and URL.");
      return;
    }
    // Prepare departments
    const departmentPayload = departments
      .filter((d) => d.trim() !== "")
      .map((d) => ({ name: d }));
    // Prepare users
    const usersPayload = users.map((u) => ({
      name: u.name,
      email: u.email,
      phone: u.phone,
      department: u.department,
      exceptions: u.exceptions,
      access: u.access,
    }));
    // Prepare assigned SEs
    const assignedSEsPayload = engineers
      .filter((e) => e.id.trim() !== "")
      .map((e) => ({ seId: e.id, name: e.name, email: e.email }));
    createClientMutation.mutate(
      {
        name: companyName,
        url: companyUrl,
        departments: departmentPayload,
        users: usersPayload,
        assignedSEs: assignedSEsPayload,
      },
      {
        onSuccess: () => {
          navigate('/');
          toast.success('Client created!');
        },
        onError: () => {
          alert("Failed to create client");
        },
      }
    );
  };

  return (
    <Layout title="Add New Client">
      <Card>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Company Info */}
            <div className="space-y-4">
              <label className="block text-sm font-medium">Company Name*</label>
              <Input
                placeholder="Enter company name"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
              />
              <label className="block text-sm font-medium mt-4">
                Company URL*
              </label>
              <Input
                placeholder="https://"
                value={companyUrl}
                onChange={(e) => setCompanyUrl(e.target.value)}
              />
            </div>
            {/* Departments */}
            <div className="space-y-2 bg-[#FAF9F8] p-4 rounded-lg">
              <label className="block text-sm font-medium">
                Manage Departments
              </label>
              <div className="flex flex-col gap-2">
                {departments.map((dept, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <Input
                      placeholder="Department name"
                      value={dept}
                      onChange={e => {
                        const newDepts = [...departments];
                        newDepts[idx] = e.target.value;
                        setDepartments(newDepts);
                      }}
                      className="flex-1"
                    />
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => removeDepartment(dept)}
                      className="text-destructive"
                      tabIndex={-1}
                    >
                      <FaTrash className="text-[#CE4343] w-4 h-4" />
                    </Button>
                  </div>
                ))}
                <Button
                  variant="outline"
                  className="w-full flex items-center justify-center gap-2 mt-2"
                  onClick={() => setDepartments([...departments, ""])}
                >
                  <span className="text-lg">+</span> Add Department
                </Button>
              </div>
            </div>
          </div>
          {/* Users Table */}
          <div className="mt-8">
            <div className="font-semibold mb-2">Users</div>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Phone</TableHead>
                  <TableHead>Department</TableHead>
                  <TableHead>Exceptions</TableHead>
                  <TableHead>Access</TableHead>
                  <TableHead></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {users.map((user, idx) => (
                  <TableRow key={idx}>
                    <TableCell>
                      <Input
                        value={user.name}
                        placeholder="Full name"
                        onChange={(e) =>
                          updateUser(idx, "name", e.target.value)
                        }
                      />
                    </TableCell>
                    <TableCell>
                      <Input
                        value={user.email}
                        placeholder="Email"
                        onChange={(e) =>
                          updateUser(idx, "email", e.target.value)
                        }
                      />
                    </TableCell>
                    <TableCell>
                      <Input
                        value={user.phone}
                        placeholder="Phone"
                        onChange={(e) =>
                          updateUser(idx, "phone", e.target.value)
                        }
                      />
                    </TableCell>
                    <TableCell>
                      <Select
                        value={user.department}
                        onValueChange={(val) =>
                          updateUser(idx, "department", val)
                        }
                      >
                        <SelectTrigger className="w-36">
                          {user.department || "Select Department"}
                        </SelectTrigger>
                        <SelectContent>
                          {departments.filter(dept => dept !== "").map((dept) => (
                            <SelectItem key={dept} value={dept}>
                              {dept}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </TableCell>
                    <TableCell>
                      <div className="flex gap-2 items-center">
                        <label className="flex items-center gap-1 text-xs">
                          <Checkbox
                            checked={user.exceptions.email}
                            onCheckedChange={(val) =>
                              updateUserNested(
                                idx,
                                "exceptions",
                                "email",
                                !!val
                              )
                            }
                          />{" "}
                          Email
                        </label>
                        <label className="flex items-center gap-1 text-xs">
                          <Checkbox
                            checked={user.exceptions.sms}
                            onCheckedChange={(val) =>
                              updateUserNested(idx, "exceptions", "sms", !!val)
                            }
                          />{" "}
                          SMS
                        </label>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex gap-2 items-center">
                        <label className="flex items-center gap-1 text-xs">
                          <Checkbox
                            checked={user.access.billing}
                            onCheckedChange={(val) =>
                              updateUserNested(idx, "access", "billing", !!val)
                            }
                          />{" "}
                          Billing Access
                        </label>
                        <label className="flex items-center gap-1 text-xs">
                          <Checkbox
                            checked={user.access.admin}
                            onCheckedChange={(val) =>
                              updateUserNested(idx, "access", "admin", !!val)
                            }
                          />{" "}
                          Admin Access
                        </label>
                      </div>
                    </TableCell>
                    <TableCell>
                      {users.length > 1 && (
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => removeUser(idx)}
                        >
                          <FaTrash className="text-[#CE4343] w-4 h-4" />
                        </Button>
                      )}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            <Button variant="outline" className="mt-2" onClick={addUser}>
              + Add User
            </Button>
          </div>
          {/* Solutions Engineers Table */}
          <div className="mt-8">
            <div className="font-semibold mb-2">Assign Solutions Engineers</div>
            {seLoading && <div>Loading SEs...</div>}
            {seError && <div className="text-red-500">Failed to load SEs</div>}
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {engineers.map((eng, idx) => (
                  <TableRow key={idx}>
                    <TableCell>
                      <Select
                        value={eng.id}
                        onValueChange={(val) => {
                          console.log('val', val);
                          const seObj = solutionsEngineers.find((se) => se.id === val);
                          console.log('seObj', seObj);
                          updateEngineer(idx, { id: seObj ? seObj.id : "", name: seObj ? seObj.name : "", email: seObj ? seObj.email : "" });
                        }}
                      >
                        <SelectTrigger className="w-40">
                          {solutionsEngineers.find((se) => se.id === eng.id)?.name || eng.name || "Select SE"}
                        </SelectTrigger>
                        <SelectContent>
                          {(solutionsEngineers as SE[]).map((se: SE) => (
                            <SelectItem key={se.email} value={se.id}>
                              {se.name}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </TableCell>
                    <TableCell>
                      <span>{eng.email}</span>
                    </TableCell>
                    <TableCell>
                      {engineers.length > 1 && (
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => removeEngineer(idx)}
                        >
                          <FaTrash className="text-[#CE4343] w-4 h-4" />
                        </Button>
                      )}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            <Button variant="outline" className="mt-2" onClick={addEngineer}>
              + Add Solutions Engineer
            </Button>
          </div>
          {/* Actions */}
          <div className="flex justify-end gap-2 mt-8">
            <Button variant="outline">Cancel</Button>
            <Button
              variant="default"
              onClick={handleCreateClient}
              disabled={createClientMutation.isPending}
            >
              {createClientMutation.isPending ? "Creating..." : "Create Client"}
            </Button>
          </div>
        </CardContent>
      </Card>
    </Layout>
  );
}
