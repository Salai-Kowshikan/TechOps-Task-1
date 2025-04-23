import { DefaultSession } from "next-auth";
import { JWT } from "next-auth/jwt";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      email: string;
      name: string;
      type: string;
      is_admin: boolean;
      token?: string;
      phoneNumber?: string;
    } & DefaultSession["user"];
  }

  interface User {
    id: string;
    email: string;
    name: string;
    type: string;
    is_admin: boolean;
    token?: string;
    phoneNumber?: string;
    image?: string | null;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id: string;
    email: string;
    name: string;
    type: string;
    is_admin: boolean;
    token?: string;
    phoneNumber?: string;
    tempName?: string;
    tempEmail?: string;
  }
}
