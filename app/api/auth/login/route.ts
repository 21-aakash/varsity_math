import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { z } from "zod";

// Initialize Prisma Client for database operations
const prisma = new PrismaClient();
// Secret key for JWT token generation (should be stored securely in production)
const JWT_SECRET = process.env.JWT_SECRET || "supersecretkey";

// Define the expected shape and validation for login data using Zod
const LoginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(1, "Password is required"),
});


// Handle POST requests to /api/auth/login
export async function POST(req: Request) {
  try {
    // Parse the incoming JSON body
    const body = await req.json();

    // Validate the request body against the schema
    const parse = LoginSchema.safeParse(body);

    // If validation fails, return a 400 error with details
    if (!parse.success) {
      return NextResponse.json(
        { message: "Invalid input", errors: parse.error },
        { status: 400 }
      );
    }

    // Destructure validated data
    const { email, password } = parse.data;

    // Find user by email in the database
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) {
      // If user not found, return error
      return NextResponse.json({ message: "Invalid credentials" }, { status: 400 });
    }

    // Compare provided password with hashed password in database
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      // If password does not match, return error
      return NextResponse.json({ message: "Invalid credentials" }, { status: 400 });
    }

    // Generate JWT token for authenticated user
    const token = jwt.sign({ userId: user.id }, JWT_SECRET, { expiresIn: "1d" });

    // Respond with token and user info (never send password)
    return NextResponse.json({
      message: "Login successful",
      token,
      user: { id: user.id, name: user.name, email: user.email },
    });

    
  } catch (error) {
    // Catch any unexpected errors and return a 500 error
    return NextResponse.json(
      { message: "Server error", error: (error as Error).message },
      { status: 500 }
    );
  }
}