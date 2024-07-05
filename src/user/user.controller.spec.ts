import { Test, TestingModule } from '@nestjs/testing';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { ModuleMocker, MockFunctionMetadata } from 'jest-mock';
const moduleMocker = new ModuleMocker(global);
describe('UserController', () => {
  let controller: UserController;
  let service: UserService;
  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      controllers: [UserController],
      providers:[UserService]
    }).useMocker((token) => {
      const results = ['test1', 'test2'];
      if (token === UserService) {
        return { findAll: jest.fn().mockResolvedValue(results) };
      }
      if (typeof token === 'function') {
        const mockMetadata = moduleMocker.getMetadata(token) as MockFunctionMetadata<any, any>;
        const Mock = moduleMocker.generateFromMetadata(mockMetadata);
        return new Mock();
      }
    }).compile();

    controller = moduleRef.get<UserController>(UserController);
    service =  moduleRef.get<UserService>(UserService);
  });

  describe('findAll', () => {
    it('should return an array of users', async () => {
      const result = 'test';
   // jest.spyOn(service, 'findAll').mockImplementation(() => result);

      expect(await controller.findAll()).toBe(result);
    });
  });
});
