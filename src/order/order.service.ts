import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { OrderRepository } from './order.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { OrderEntity } from './entities/order.entity';

@Injectable()
export class OrderService {
  constructor(
    // Khai báo Repository để kết nối db
    @InjectRepository(OrderEntity)
    private readonly orderRepo:OrderRepository,
  ) {}
  async create(order: CreateOrderDto){
   
    return await this.orderRepo.createByOrder(order);
    
  }

  async findOne(id: number) {
    return this.orderRepo.findOneBy({id: id});
  }

  async findOneByType(type: string) {
    return this.orderRepo.findOneBy({type: type});
  }

 async findOneById(id: number){
    return await this.orderRepo.findOneBy({id: id});
  }

  update(id: number, updateOrderDto: UpdateOrderDto) {
    return `This action updates a #${id} order`;
  }

  async remove(id: number) {
    return await this.orderRepo.delete({id: id});
  }


  async createOrder(Order: OrderEntity): Promise< any >{
      return await this.orderRepo.save(Order);
  }

  async findAll() {
    return await this.orderRepo.find();
  }

}
