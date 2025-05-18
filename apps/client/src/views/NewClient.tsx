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
  PageHeader,
} from "@nexus/ui";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { Trash2 } from "lucide-react";
import Layout from "../components/Layout";

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

const departmentsInitial = ["Engineering", "Sales"];
const solutionsEngineers = [
  { name: "Alice Smith", email: "alice@example.com" },
  { name: "Bob Jones", email: "bob@example.com" },
];

export default function NewClient() {
  const [companyName, setCompanyName] = useState("");
  const [companyUrl, setCompanyUrl] = useState("");
  const [departments, setDepartments] = useState<string[]>(departmentsInitial);
  const [newDept, setNewDept] = useState("");
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
  const [engineers, setEngineers] = useState([{ se: "", email: "" }]);

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

  const addEngineer = () => setEngineers([...engineers, { se: "", email: "" }]);
  const removeEngineer = (idx: number) =>
    setEngineers(engineers.filter((_, i) => i !== idx));
  const updateEngineer = (idx: number, field: string, value: any) => {
    setEngineers(
      engineers.map((e, i) => (i === idx ? { ...e, [field]: value } : e))
    );
  };

  const addDepartment = () => {
    if (newDept && !departments.includes(newDept)) {
      setDepartments([...departments, newDept]);
      setNewDept("");
    }
  };
  const removeDepartment = (dept: string) =>
    setDepartments(departments.filter((d) => d !== dept));

  return (
    <Layout>
      <PageHeader title="Add New Client" />
      <Card>
        <CardContent className="pt-6">
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
            <div className="space-y-2">
              <label className="block text-sm font-medium">
                Manage Departments
              </label>
              <div className="flex gap-2">
                <Input
                  placeholder="Department name"
                  value={newDept}
                  onChange={(e) => setNewDept(e.target.value)}
                />
                <Button variant="outline" onClick={addDepartment}>
                  + Add Department
                </Button>
              </div>
              <div className="space-y-1 mt-2">
                {departments.map((dept) => (
                  <div key={dept} className="flex items-center gap-2">
                    <span className="text-sm">{dept}</span>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => removeDepartment(dept)}
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                ))}
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
                          {departments.map((dept) => (
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
                          <Trash2 className="w-4 h-4" />
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
                        value={eng.se}
                        onValueChange={(val) => updateEngineer(idx, "se", val)}
                      >
                        <SelectTrigger className="w-40">
                          {eng.se || "Select SE"}
                        </SelectTrigger>
                        <SelectContent>
                          {solutionsEngineers.map((se) => (
                            <SelectItem key={se.email} value={se.name}>
                              {se.name}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </TableCell>
                    <TableCell>
                      <Input
                        value={eng.email}
                        placeholder="email@example.com"
                        onChange={(e) =>
                          updateEngineer(idx, "email", e.target.value)
                        }
                      />
                    </TableCell>
                    <TableCell>
                      {engineers.length > 1 && (
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => removeEngineer(idx)}
                        >
                          <Trash2 className="w-4 h-4" />
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
            <Button variant="default">Create Client</Button>
          </div>
        </CardContent>
      </Card>
    </Layout>
  );
}
