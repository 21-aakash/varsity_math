import { PrismaClient } from "@prisma/client";

const globalForPrisma = global as unknown as { prisma: PrismaClient };

export const prisma =
  globalForPrisma.prisma ||
  new PrismaClient({
    log: ["query"],
  });

  import { z } from "zod";

export const AdmissionSchema = z.object({
  id: z.number(),
  class: z.string(),
  board: z.string(),
  medium: z.string(),
  school: z.string(),
  admissionDate: z.string(),
  profilePic: z.string().nullable(),
  paymentProof: z.string().nullable(),
  admission: z.boolean(),
});

export const StudentSchema = z.object({
  id: z.number(),
  name: z.string(),
  email: z.string().email(),
  phone: z.string(),
  admission: AdmissionSchema.nullable(), // if not admitted yet
});

export type Student = z.infer<typeof StudentSchema>;


if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

export default prisma;
