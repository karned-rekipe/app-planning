import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"


export default function foodplanning() {
    return (
        <main>
            <Tabs defaultValue="week">
                <TabsList className="grid justify-items-center grid-cols-2 w-[400px]">
                    <TabsTrigger value="week">Semaine</TabsTrigger>
                    <TabsTrigger value="day">Jour</TabsTrigger>
                </TabsList>

                <TabsContent value="week">
                    <h2 className="text-center text-3xl mt-20">
                        Your food planning for the week
                    </h2>

                </TabsContent>

                <TabsContent value="day">
                    <Card>
                        <CardHeader>
                            <CardTitle>Password</CardTitle>
                            <CardDescription>
                            Change your password here. After saving, you'll be logged out.
                            </CardDescription>
                        </CardHeader>

                        <CardContent className="space-y-2">
                            <div className="space-y-1">
                                <Label htmlFor="current">Current password</Label>
                                <Input id="current" type="password" />
                            </div>
                            <div className="space-y-1">
                                <Label htmlFor="new">New password</Label>
                                <Input id="new" type="password" />
                            </div>
                        </CardContent>

                        <CardFooter>
                            <Button>Save password</Button>
                        </CardFooter>
                    </Card>
                                        <Card>
                        <CardHeader>
                            <CardTitle>Account</CardTitle>
                            <CardDescription>
                            Make changes to your account here. Click save when you're done.
                            </CardDescription>
                        </CardHeader>

                        <CardContent className="space-y-2">
                            <div className="space-y-1">
                                <Label htmlFor="name">Name</Label>
                                <Input id="name" defaultValue="Pedro Duarte" />
                            </div>

                            <div className="space-y-1">
                                <Label htmlFor="username">Username</Label>
                                <Input id="username" defaultValue="@peduarte" />
                            </div>
                        </CardContent>

                        <CardFooter>
                            <Button>Save changes</Button>
                        </CardFooter>
                    </Card>
                </TabsContent>
            </Tabs>
        </main>
    )
}
