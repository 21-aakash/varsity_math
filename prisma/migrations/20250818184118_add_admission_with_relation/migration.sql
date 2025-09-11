-- CreateTable
CREATE TABLE "Admission" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "userId" INTEGER NOT NULL,
    "class" TEXT NOT NULL,
    "board" TEXT NOT NULL,
    "medium" TEXT NOT NULL,
    "school" TEXT NOT NULL,
    "admissionDate" DATETIME NOT NULL,
    "profilePic" TEXT,
    "paymentProof" TEXT,
    "admission" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "Admission_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Admission_userId_key" ON "Admission"("userId");
