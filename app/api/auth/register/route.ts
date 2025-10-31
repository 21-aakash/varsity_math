// import { NextResponse } from "next/server";
// import { PrismaClient } from "@prisma/client";
// import bcrypt from "bcrypt";
// import { z } from "zod";

// // Initialize Prisma Client for database operations
// const prisma = new PrismaClient();

// // Define the expected shape and validation for registration data using Zod
// const RegisterSchema = z.object({
//   name: z.string(),
//   email: z.string().email(),
//   phone: z.string().min(7), // Phone must be at least 7 characters
//   password: z.string().min(6), // Password must be at least 6 characters
// });

// // Handle POST requests to /api/auth/register
// export async function POST(req: Request) {
//   try {
//     // Parse the incoming JSON body
//     const body = await req.json();

//     // Validate the request body against the schema
//     const parse = RegisterSchema.safeParse(body);

//     // If validation fails, return a 400 error with details
//     if (!parse.success) {
//       return NextResponse.json(
//         { message: "Invalid input", errors: parse.error },
//         { status: 400 }
//       );
//     }

//     // Destructure validated data
//     const { name, email, phone, password } = parse.data;

//     // Check if a user with the same email already exists
//     const existingUser = await prisma.user.findUnique({ where: { email } });
//     if (existingUser) {
//       return NextResponse.json(
//         { message: "User already exists" },
//         { status: 400 }
//       );
//     }

//     // Hash the password before saving to the database
//     const hashedPassword = await bcrypt.hash(password, 10);

//     // Create the new user in the database
//     const user = await prisma.user.create({
//       data: { name, email, phone, password: hashedPassword },
//     });

//     // Respond with success and the created user (omit password in production)
//     return NextResponse.json(
//       { message: "User registered successfully", user },
//       { status: 201 }
//     );
//   } catch (error) {
//     // Catch any unexpected errors and return a 500 error
//     return NextResponse.json(
//       { message: "Server error", error: (error as Error).message },
//       { status: 500 }
//     );
//   }

// }