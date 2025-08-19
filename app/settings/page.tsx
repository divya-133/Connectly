"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  User,
  Lock,
  Bell,
  Palette,
  Shield,
  HelpCircle,
  ChevronRight,
  Moon,
  Sun,
  Monitor,
  Check,
  LogOut,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
} from "@/components/ui/card";

const Settings = () => {
  const router = useRouter();
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [theme, setTheme] = useState("system");
  const [notifications, setNotifications] = useState({
    likes: true,
    comments: true,
    follows: true,
    messages: true,
    mentions: true,
    posts: false,
  });
  const [security, setSecurity] = useState({
    twoFactor: false,
    loginAlerts: true,
  });

  const [editingField, setEditingField] = useState<string | null>(null);

  const user = {
    name: "Alex Johnson",
    username: "alexj",
    email: "alex.johnson@email.com",
    avatar: "https://i.pravatar.cc/150?img=32",
  };

  const settingSections = [
    {
      id: "account",
      title: "Account",
      description: "Manage your account details",
      icon: User,
    },
    {
      id: "privacy",
      title: "Privacy",
      description: "Control who can see your content",
      icon: Shield,
    },
    {
      id: "notifications",
      title: "Notifications",
      description: "Manage your notification preferences",
      icon: Bell,
    },
    {
      id: "appearance",
      title: "Appearance",
      description: "Customize your app experience",
      icon: Palette,
    },
    {
      id: "security",
      title: "Security",
      description: "Password and security settings",
      icon: Lock,
    },
    {
      id: "help",
      title: "Help & Support",
      description: "Get help and contact support",
      icon: HelpCircle,
    },
  ];

  const toggleSection = (id: string) => {
    setActiveSection((prev) => (prev === id ? null : id));
  };

  // Account section with editable fields
  const AccountSettings = () => {
    const accountFields = [
      { label: "Display Name", value: user.name },
      { label: "Username", value: `@${user.username}` },
      { label: "Email", value: user.email },
    ];

    return (
      <div className="space-y-6">
        <h2 className="text-lg font-semibold mb-2">Account Information</h2>
        <p className="text-sm text-muted-foreground mb-4">
          Update your account details
        </p>

        {accountFields.map(({ label, value }) => (
          <Card key={label}>
            <CardContent className="p-4 flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <div>
                  <Label className="font-medium">{label}</Label>
                  <p className="text-sm text-muted-foreground">{value}</p>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={(e) => {
                    e.stopPropagation(); // Prevent toggle
                    setEditingField(editingField === label ? null : label);
                  }}
                >
                  {editingField === label ? "Cancel" : "Edit"}
                </Button>
              </div>

              {editingField === label && (
                <form
                  onClick={(e) => e.stopPropagation()} // Prevent toggle
                  onSubmit={(e) => {
                    e.preventDefault();
                    alert(`Updated ${label}`);
                    setEditingField(null);
                  }}
                >
                  <input
                    type="text"
                    defaultValue={value}
                    className="w-full rounded border border-gray-300 dark:border-gray-600 p-2 text-black dark:text-white"
                    required
                  />
                  <div className="mt-2 flex gap-2 justify-end">
                    <Button type="submit" variant="default" size="sm">
                      Save
                    </Button>
                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                      onClick={() => setEditingField(null)}
                    >
                      Cancel
                    </Button>
                  </div>
                </form>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    );
  };

  const PrivacySettings = () => (
    <div className="space-y-6" onClick={(e) => e.stopPropagation()}>
      <h2 className="text-lg font-semibold mb-2">Privacy Settings</h2>
      <p className="text-sm text-muted-foreground mb-4">
        Manage your privacy preferences
      </p>
      <Card>
        <CardContent className="p-4 flex items-center justify-between">
          <Label htmlFor="profileVisibility" className="font-medium">
            Profile Visibility
          </Label>
          <Switch
            id="profileVisibility"
            checked={true}
            onClick={(e) => e.stopPropagation()}
            onCheckedChange={(checked) =>
              alert(`Profile Visibility changed to ${checked}`)
            }
          />
        </CardContent>
      </Card>
    </div>
  );

  const NotificationSettings = () => (
    <div className="space-y-6" onClick={(e) => e.stopPropagation()}>
      <h2 className="text-lg font-semibold mb-2">Notifications</h2>
      <p className="text-sm text-muted-foreground mb-4">
        Choose what notifications you want to receive
      </p>
      <div className="space-y-4">
        {Object.entries(notifications).map(([key, value]) => (
          <div key={key} className="flex items-center justify-between">
            <div>
              <Label htmlFor={key} className="font-medium capitalize">
                {key === "posts" ? "New Posts from Following" : key}
              </Label>
              <p className="text-sm text-muted-foreground">
                {key === "likes" && "When someone likes your posts"}
                {key === "comments" && "When someone comments on your posts"}
                {key === "follows" && "When someone follows you"}
                {key === "messages" && "When you receive new messages"}
                {key === "mentions" && "When someone mentions you"}
                {key === "posts" && "When people you follow share new posts"}
              </p>
            </div>
            <Switch
              id={key}
              checked={value}
              onClick={(e) => e.stopPropagation()}
              onCheckedChange={(checked) =>
                setNotifications((prev) => ({ ...prev, [key]: checked }))
              }
            />
          </div>
        ))}
      </div>
    </div>
  );

  const AppearanceSettings = () => (
    <div className="space-y-6" onClick={(e) => e.stopPropagation()}>
      <h2 className="text-lg font-semibold mb-2">Appearance</h2>
      <p className="text-sm text-muted-foreground mb-4">
        Choose your preferred app appearance
      </p>
      <div className="space-y-3">
        {[
          { id: "light", label: "Light", icon: Sun },
          { id: "dark", label: "Dark", icon: Moon },
          { id: "system", label: "System", icon: Monitor },
        ].map((option) => (
          <Card
            key={option.id}
            className={`cursor-pointer transition-colors ${
              theme === option.id ? "ring-2 ring-primary" : "hover:bg-muted/50"
            }`}
            onClick={(e) => {
              e.stopPropagation();
              setTheme(option.id);
            }}
          >
            <CardContent className="p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <option.icon className="w-5 h-5" />
                <span className="font-medium">{option.label}</span>
              </div>
              {theme === option.id && <Check className="w-5 h-5 text-primary" />}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );

  const SecuritySettings = () => (
    <div className="space-y-6" onClick={(e) => e.stopPropagation()}>
      <h2 className="text-lg font-semibold mb-2">Security</h2>
      <p className="text-sm text-muted-foreground mb-4">
        Manage your password and security settings
      </p>
      <Card>
        <CardContent className="p-4 flex items-center justify-between">
          <Label className="font-medium">Change Password</Label>
          <Button
            variant="outline"
            size="sm"
            onClick={(e) => {
              e.stopPropagation();
              alert("Navigate to change password");
            }}
          >
            Update
          </Button>
        </CardContent>
      </Card>
      <Card>
        <CardContent className="p-4 flex items-center justify-between">
          <Label className="font-medium">Two-Factor Authentication</Label>
          <Switch
            id="2fa"
            checked={security.twoFactor}
            onClick={(e) => e.stopPropagation()}
            onCheckedChange={(checked) =>
              setSecurity((prev) => ({ ...prev, twoFactor: checked }))
            }
          />
        </CardContent>
      </Card>
      <Card>
        <CardContent className="p-4 flex items-center justify-between">
          <Label className="font-medium">Login Alerts</Label>
          <Switch
            id="loginAlerts"
            checked={security.loginAlerts}
            onClick={(e) => e.stopPropagation()}
            onCheckedChange={(checked) =>
              setSecurity((prev) => ({ ...prev, loginAlerts: checked }))
            }
          />
        </CardContent>
      </Card>
    </div>
  );

  const HelpSettings = () => (
    <div className="space-y-6" onClick={(e) => e.stopPropagation()}>
      <h2 className="text-lg font-semibold mb-2">Help & Support</h2>
      <p className="text-sm text-muted-foreground mb-4">
        Get help and contact support
      </p>
      <ul className="list-disc list-inside space-y-2 text-muted-foreground cursor-pointer">
        <li onClick={() => alert("Report a Problem")}>Report a Problem</li>
        <li onClick={() => alert("FAQs")}>FAQs</li>
        <li onClick={() => alert("Contact Support")}>Contact Support</li>
        <li onClick={() => alert("Guidelines")}>Guidelines</li>
      </ul>
    </div>
  );

  const renderSectionContent = (id: string) => {
    switch (id) {
      case "account":
        return <AccountSettings />;
      case "privacy":
        return <PrivacySettings />;
      case "notifications":
        return <NotificationSettings />;
      case "appearance":
        return <AppearanceSettings />;
      case "security":
        return <SecuritySettings />;
      case "help":
        return <HelpSettings />;
      default:
        return (
          <p className="text-muted-foreground p-4">
            This section is under development.
          </p>
        );
    }
  };

  const handleSignOut = () => {
    router.push("/login");
  };

  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b">
        <div className="max-w-4xl mx-auto px-4 py-3 flex items-center gap-4">
          <h1 className="text-xl font-semibold">Settings</h1>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 py-6 space-y-4">
        {settingSections.map(({ id, title, description, icon: Icon }) => (
          <Card
            key={id}
            className="cursor-pointer hover:bg-muted/50 transition-colors"
            onClick={() => toggleSection(id)}
          >
            <CardContent className="p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Icon className="w-5 h-5 text-muted-foreground" />
                <div>
                  <h3 className="font-medium">{title}</h3>
                  <p className="text-sm text-muted-foreground">{description}</p>
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-muted-foreground" />
            </CardContent>

            {activeSection === id && (
              <div className="border-t border-gray-200 dark:border-gray-700">
                <CardContent>{renderSectionContent(id)}</CardContent>
              </div>
            )}
          </Card>
        ))}
      </div>

      <div className="max-w-4xl mx-auto px-4 py-6">
        <Card className="border-destructive/20">
          <CardContent className="p-4">
            <Button
              variant="ghost"
              className="w-full justify-start text-destructive hover:text-destructive hover:bg-destructive/10"
              onClick={handleSignOut}
            >
              <LogOut className="w-5 h-5 mr-3" />
              Sign Out
            </Button>
          </CardContent>
        </Card>
      </div>
    </main>
  );
};

export default Settings;

