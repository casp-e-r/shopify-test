import { Injectable } from '@nestjs/common';
import { CreateBarcodeDto } from './dto/create-barcode.dto';
import { UpdateBarcodeDto } from './dto/update-barcode.dto';
import { PrismaService } from '@/shared/services/prisma.service';

@Injectable()
export class BarcodeService {
  constructor(
    private readonly prismaService: PrismaService,
  ) {}

  async create(createBarcodeDto: any[]) {
    try {
      const result = await this.prismaService.barCodeProduct.createMany({
        data:createBarcodeDto
      })
      return result
    } catch (error) {
      console.log(error)
    }
  }

  async findAll() {
    try {
      const result = await this.prismaService.barCodeProduct.findMany({})
      return result
    } catch (error) {
      console.log(error)
      throw error
    }  }

  findOne(id: number) {
    return `This action returns a #${id} barcode`;
  }

  update(id: number, updateBarcodeDto: UpdateBarcodeDto) {
    return `This action updates a #${id} barcode`;
  }

  remove(id: number) {
    return `This action removes a #${id} barcode`;
  }
}
