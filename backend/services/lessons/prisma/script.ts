import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const lessons = await prisma.lesson.createMany({
    data: [
      {
        title: 'Lesson Title',
        description: 'Lesson Description',
        videoUrl: 'http://example.com',
        duration: 60,
        completed: true,
      },
      {
        title: 'Lesson Title',
        description: 'Lesson Description',
        videoUrl: 'http://example.com',
        duration: 60,
        completed: false,
      },
    ],
    skipDuplicates: true,
  });
  console.log(lessons);

  const course = await prisma.course.create({
    data: {
      description: 'Course Description',
      backgroundImage: 'http://example.com',
      qtdModules: 5,
      qtdLessons: 10,
      qtdLessonsCompleted: 2,
      percentageCompleted: 20.0,
    },
  });
  console.log(course);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
