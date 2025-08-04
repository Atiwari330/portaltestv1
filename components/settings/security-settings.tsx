'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Switch } from '@/components/ui/switch'
import { Badge } from '@/components/ui/badge'
import { Shield, Smartphone, Key, AlertCircle } from 'lucide-react'
import { toast } from 'sonner'

export function SecuritySettings() {
  const handlePasswordChange = () => {
    toast.success('Password change email sent')
  }

  const handleEnable2FA = () => {
    toast.info('Opening 2FA setup...')
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Security Settings</CardTitle>
          <CardDescription>
            Manage your account security and authentication methods
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Shield className="h-5 w-5 text-muted-foreground" />
              <div className="flex-1">
                <h3 className="text-sm font-medium">Account Security Status</h3>
                <p className="text-sm text-muted-foreground">
                  Your account security level
                </p>
              </div>
              <Badge variant="warning">Medium</Badge>
            </div>

            <div className="rounded-lg border border-warning/50 bg-warning/10 p-4">
              <div className="flex gap-3">
                <AlertCircle className="h-5 w-5 text-warning" />
                <div className="space-y-1">
                  <p className="text-sm font-medium">
                    Improve your account security
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Enable two-factor authentication for better protection
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4 border-t pt-6">
            <div className="space-y-2">
              <Label>Password</Label>
              <div className="flex gap-2">
                <Input
                  type="password"
                  value="••••••••••••"
                  disabled
                  className="flex-1"
                />
                <Button variant="outline" onClick={handlePasswordChange}>
                  Change Password
                </Button>
              </div>
              <p className="text-sm text-muted-foreground">
                Last changed 45 days ago
              </p>
            </div>
          </div>

          <div className="space-y-4 border-t pt-6">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <Smartphone className="h-4 w-4" />
                  <Label>Two-Factor Authentication</Label>
                </div>
                <p className="text-sm text-muted-foreground">
                  Add an extra layer of security to your account
                </p>
              </div>
              <Switch id="2fa" />
            </div>
            <Button 
              variant="outline" 
              size="sm"
              onClick={handleEnable2FA}
            >
              Setup 2FA
            </Button>
          </div>

          <div className="space-y-4 border-t pt-6">
            <h3 className="text-sm font-medium">Login Activity</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between rounded-lg border p-3">
                <div className="space-y-1">
                  <p className="text-sm font-medium">Current Session</p>
                  <p className="text-xs text-muted-foreground">
                    Chrome on Windows • New York, NY
                  </p>
                </div>
                <Badge variant="success">Active</Badge>
              </div>
              <div className="flex items-center justify-between rounded-lg border p-3">
                <div className="space-y-1">
                  <p className="text-sm font-medium">iPhone</p>
                  <p className="text-xs text-muted-foreground">
                    Safari on iOS • 2 days ago
                  </p>
                </div>
                <Button variant="ghost" size="sm">
                  Revoke
                </Button>
              </div>
            </div>
          </div>

          <div className="space-y-4 border-t pt-6">
            <h3 className="text-sm font-medium">Security Preferences</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <Label htmlFor="login-alerts">Login Alerts</Label>
                <Switch id="login-alerts" defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="auto-logout">Auto-logout after 30 minutes</Label>
                <Switch id="auto-logout" defaultChecked />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}