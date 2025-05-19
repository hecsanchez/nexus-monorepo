import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, Input, Button } from "@nexus/ui";
import { FaSlack, FaGithub, FaJira, FaSalesforce, FaAws } from "react-icons/fa";
import Layout from "@/components/Layout";

const services = [
  { name: "Slack", icon: <FaSlack />, connected: true },
  { name: "GitHub", icon: <FaGithub />, connected: false },
  { name: "Jira", icon: <FaJira />, connected: false },
  { name: "Salesforce", icon: <FaSalesforce />, connected: false },
  { name: "AWS", icon: <FaAws />, connected: false },
];

const Credentials = () => {
  const [selected, setSelected] = useState(0);
  const [form, setForm] = useState({
    workspace: "acme-corp.slack.com",
    token: "xoxb-************",
    secret: "********",
  });

  return (
    <Layout title="Acme Corporation">
      <div className="flex gap-6">
        {/* Services List */}
        <Card className="w-64 flex-shrink-0">
          <CardHeader>
            <CardTitle>Third Party Services</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-2">
            {services.map((s, idx) => (
              <Button
                key={s.name}
                variant={selected === idx ? "secondary" : "ghost"}
                className="flex items-center justify-between w-full"
                onClick={() => setSelected(idx)}
              >
                <span className="flex items-center gap-2">{s.icon} {s.name}</span>
                {s.connected && <span className="ml-2 text-green-600">●</span>}
              </Button>
            ))}
          </CardContent>
        </Card>
        {/* Credentials Form */}
        <Card className="flex-1">
          <CardHeader className="flex flex-row items-center justify-between">
            <div className="flex items-center gap-2">
              <FaSlack />
              <CardTitle>Slack Credentials</CardTitle>
            </div>
            <span className="text-green-600 flex items-center gap-1">
              ● Connected
            </span>
          </CardHeader>
          <CardContent className="max-w-lg">
            <div className="mb-4">
              <div className="mb-1 text-sm font-medium">Workspace URL</div>
              <Input value={form.workspace} readOnly />
            </div>
            <div className="mb-4">
              <div className="mb-1 text-sm font-medium">Bot User OAuth Token</div>
              <Input value={form.token} type="password" readOnly />
            </div>
            <div className="mb-4">
              <div className="mb-1 text-sm font-medium">Signing Secret</div>
              <Input value={form.secret} type="password" readOnly />
            </div>
            <Button>Save Changes</Button>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default Credentials; 