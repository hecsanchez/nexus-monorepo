import React, { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent, Input, Button, Select, SelectTrigger, SelectContent, SelectItem } from "@nexus/ui";

// Mock users
const users = [
  { name: "Robert Wilson", email: "robert@company.com", credits: 1200 },
  { name: "Emily Brown", email: "emily@company.com", credits: 800 },
  { name: "Alice Smith", email: "alice@example.com", credits: 500 },
];

const ApplyCreditsTab = () => {
  const [selectedUser, setSelectedUser] = useState(users[0].email);
  const [credits, setCredits] = useState("");
  const user = users.find(u => u.email === selectedUser);

  return (
    <Card className="max-w-md">
      <CardHeader>
        <CardTitle>Apply Credits</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="mb-4">
          <span className="text-sm text-muted-foreground">Select User</span>
          <Select value={selectedUser} onValueChange={setSelectedUser}>
            <SelectTrigger className="w-full mt-1 mb-2">
              {user ? `${user.name} (${user.email})` : "Select user"}
            </SelectTrigger>
            <SelectContent>
              {users.map(u => (
                <SelectItem key={u.email} value={u.email}>
                  {u.name} ({u.email})
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="mt-4">
            <span className="text-sm text-muted-foreground">Enter Amount</span>
            <div className="flex gap-2 items-end">
            <Input
                type="number"
                placeholder="Amount"
                value={credits}
                onChange={e => setCredits(e.target.value)}
            />
            <Button disabled={!credits || !selectedUser}>Apply Credits</Button>
            </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ApplyCreditsTab; 