"use client";

import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { signIn } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { toast } from "sonner";
import useUserDetailStore from "@/Store/userDetailStore";
import { useAdminStore } from "@/Store/useAdminStore";

const loginSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

type LoginFormData = z.infer<typeof loginSchema>;

export default function LoginForm() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const setUser = useUserDetailStore((state) => state.setUser);
  const setIsSuperAdmin = useAdminStore((state) => state.setIsSuperAdmin);
  const setModeratorCategoryAccess = useAdminStore((state) => state.setModeratorCategoryAccess);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({ resolver: zodResolver(loginSchema) });

  const onSubmit: SubmitHandler<LoginFormData> = async (data) => {
    setIsLoading(true);

    try {
      const result = await signIn("credentials", {
        email: data.email,
        password: data.password,
        redirect: false,
      });

      if (result?.error) {
        toast.error("Invalid email or password");
      } else if (result?.ok) {
        toast.success("Login successful!");
        const session = await fetch('/api/auth/session');
        const sessionData = await session.json();
        console.log("Session data:", sessionData);

        if (sessionData?.user) {
          setUser({
            id: sessionData.user.id,
            email: sessionData.user.email,
            name: sessionData.user.name,
            type: sessionData.user.type,
            is_admin: sessionData.user.is_admin,
            token: sessionData.user.token,
            phoneNumber: sessionData.user.phoneNumber,
          });
          
          if (sessionData.user.type === 'admin') {
            if (sessionData.user.is_admin === true) {
              setIsSuperAdmin(true);
              router.push("/admin/dashboard");
            } else {
              console.log("moderator");
              setIsSuperAdmin(false);
              
              try {
                const accessResponse = await fetch(`/api/auth/roles?id=${sessionData.user.id}`);
                
                if (accessResponse.ok) {
                  const accessData = await accessResponse.json();
                  console.log("Moderator access levels:", accessData);
                  const categoryAccess = [];
                  
                  if (accessData.accommodation && accessData.accommodation !== "no_access") {
                    categoryAccess.push({
                      category: 'accommodation',
                      access: accessData.accommodation === "read_write" ? "read/write" : "read"
                    });
                  }
                  
                  if (accessData.payments && accessData.payments !== "no_access") {
                    categoryAccess.push({
                      category: 'payments',
                      access: accessData.payments === "read_write" ? "read/write" : "read"
                    });
                  }
                  
                  if (accessData.events && accessData.events !== "no_access") {
                    categoryAccess.push({
                      category: 'events',
                      access: accessData.events === "read_write" ? "read/write" : "read"
                    });
                  }
                  
                  if (accessData.others && accessData.others !== "no_access") {
                    categoryAccess.push({
                      category: 'others',
                      access: accessData.others === "read_write" ? "read/write" : "read"
                    });
                  }
                  
                  // Set moderator category access in the store
                  setModeratorCategoryAccess(categoryAccess);
                } else {
                  console.error("Failed to fetch moderator access levels");
                }
              } catch (error) {
                console.error("Error fetching moderator access levels:", error);
              }
              
              router.push("/admin/dashboard");
            }
          } else {
            router.push("/user/dashboard");
          }
        }
      }
    } catch (err) {
      toast.error("An error occurred during login");
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    setIsLoading(true);

    try {
      await signIn("google", { callbackUrl: "/user/dashboard" });
      toast.success("Google login successful!");
    } catch (err) {
      toast.error("An error occurred during Google login");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="w-full max-w-md p-6 space-y-6 rounded-xl shadow-lg bg-card border">
      <div className="text-center space-y-2">
        <h1 className="text-2xl font-bold">Welcome Back 👋</h1>
        <p className="text-muted-foreground text-sm">
          Sign in to access your account
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <Input
            {...register("email")}
            placeholder="Email"
            className="bg-background"
          />
          {errors.email && (
            <p className="text-red-400 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>

        <div>
          <Input
            {...register("password")}
            type="password"
            placeholder="Password"
            className="bg-background"
          />
          {errors.password && (
            <p className="text-red-400 text-sm mt-1">
              {errors.password.message}
            </p>
          )}
        </div>

        <Button type="submit" disabled={isLoading} className="w-full">
          {isLoading ? "Logging in..." : "Login"}
        </Button>
      </form>

      <div>
        <Separator />
        <div className="text-sm text-center text-muted-foreground m-2">
          Or continue with
        </div>

        <Button
          variant="outline"
          onClick={handleGoogleSignIn}
          disabled={isLoading}
          className="mt-4 w-full"
        >
          Google
        </Button>
      </div>

      <div className="flex items-center justify-between text-sm mt-2">
        <Link
          href="/forgot-password"
          className="text-primary hover:underline font-medium"
        >
          Forgot password?
        </Link>
        <Link
          href="/register"
          className="text-primary hover:underline font-medium"
        >
          Create an account
        </Link>
      </div>
    </Card>
  );
}
