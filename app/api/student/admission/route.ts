// import { NextResponse } from "next/server";
// import prisma from "@/lib/prisma";

// export async function POST(req: Request) {
//   try {
//     const formData = await req.formData();

//     // Parse fields
//     const name = formData.get("name") as string;
//     const phone = formData.get("phone") as string;
//     const email = formData.get("email") as string;
//     const studentClass = formData.get("class") as string;
//     const board = formData.get("board") as string;
//     const medium = formData.get("medium") as string;
//     const school = formData.get("school") as string;
//     const admissionDate = formData.get("admissionDate") as string;

//     // Files (you’ll need to upload these to S3/Supabase or save path)
//     const profilePic = formData.get("profilePic") as File | null;
//     const paymentProof = formData.get("paymentProof") as File | null;

//     // 🔑 TODO: get `userId` from JWT auth (example)
//     const userId = 1; // hardcoded for now

//     const admission = await prisma.admission.create({
//       data: {
//         userId,
//         class: studentClass,
//         board,
//         medium,
//         school,
//         admissionDate: new Date(admissionDate),
//         profilePic: profilePic ? profilePic.name : null,   // store file name or uploaded URL
//         paymentProof: paymentProof ? paymentProof.name : null,
//         admission: true,
//       },
//     });
//     return NextResponse.json(admission);
//   } catch (err) {
//     console.error("Admission form error:", err);
//     return NextResponse.json({ error: "Invalid request" }, { status: 400 });
//   }
// }
