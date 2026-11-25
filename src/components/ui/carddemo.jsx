
import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function CardDemo() {
  return (
    <Card className="w-full max-w-sm bg-white text-blue-950 border-blue-500 shadow-lg">
      <CardHeader>
        <CardTitle className="text-blue-700">
          Create Your Account
        </CardTitle>

        <CardDescription className="text-gray-600">
          Enter your details to get started
        </CardDescription>

        <CardAction>
          <Button variant="link" className="text-blue-600">
            Sign In
          </Button>
        </CardAction>
      </CardHeader>

      <CardContent>
        <form>
          <div className="flex flex-col gap-4">

            <div className="grid gap-2">
              <Label htmlFor="name">Full Name</Label>
              <Input id="name" type="text" placeholder="Enter your name" required />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="username">Username</Label>
              <Input id="username" type="text" placeholder="Enter username" required />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="m@example.com" required />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="phone">Phone Number</Label>
              <Input id="phone" type="tel" placeholder="Enter phone number" required />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" placeholder="Enter password" required />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="confirmPassword">Confirm Password</Label>
              <Input id="confirmPassword" type="password" placeholder="Confirm password" required />
            </div>

          </div>
        </form>
      </CardContent>

      <CardFooter className="flex-col gap-2">
        <Button className="w-full bg-blue-600 text-white hover:bg-blue-700">
          Sign Up
        </Button>

        <Button variant="outline" className="w-full border-blue-500 text-blue-600 hover:bg-blue-50">
          Sign Up with Google
        </Button>
      </CardFooter>
    </Card>
  )
}

export default CardDemo
