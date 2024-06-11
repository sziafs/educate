-- CreateTable
CREATE TABLE "Course" (
    "id" SERIAL NOT NULL,
    "description" TEXT NOT NULL,
    "backgroundImage" TEXT NOT NULL,
    "qtdModules" INTEGER NOT NULL,
    "qtdLessons" INTEGER NOT NULL,
    "qtdLessonsCompleted" INTEGER NOT NULL,
    "percentageCompleted" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Course_pkey" PRIMARY KEY ("id")
);
