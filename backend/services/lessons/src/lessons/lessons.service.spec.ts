import { Test, TestingModule } from '@nestjs/testing';
import { PrismaService } from '../prisma/prisma.service';
import { LessonsService } from './lessons.service';

describe('LessonsService', () => {
  let service: LessonsService;
  let prisma: PrismaService;

  const mockLesson = {
    id: 1,
    title: 'Test Lesson',
    description: 'Test Description',
    videoUrl: 'http://example.com',
    duration: 20,
    completed: false,
    createdAt: new Date(),
    updatedAt: new Date(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        LessonsService,
        {
          provide: PrismaService,
          useValue: {
            lesson: {
              findMany: jest.fn().mockResolvedValue([mockLesson]),
              findUnique: jest.fn().mockResolvedValue(mockLesson),
              update: jest.fn().mockResolvedValue(mockLesson),
            },
          },
        },
      ],
    }).compile();

    service = module.get<LessonsService>(LessonsService);
    prisma = module.get<PrismaService>(PrismaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should find all lessons', async () => {
    expect(await service.findAll()).toEqual([mockLesson]);
    expect(prisma.lesson.findMany).toHaveBeenCalled();
  });

  it('should find one lesson', async () => {
    expect(await service.findOne(1)).toEqual(mockLesson);
    expect(prisma.lesson.findUnique).toHaveBeenCalledWith({ where: { id: 1 } });
  });

  it('should update a lesson', async () => {
    const updatedLesson = { ...mockLesson, title: 'Updated Lesson' };
    jest.spyOn(prisma.lesson, 'update').mockResolvedValue(updatedLesson);

    expect(await service.update(1, { title: 'Updated Lesson' })).toEqual(
      updatedLesson,
    );
    expect(prisma.lesson.update).toHaveBeenCalledWith({
      where: { id: 1 },
      data: { title: 'Updated Lesson' },
    });
  });
});
