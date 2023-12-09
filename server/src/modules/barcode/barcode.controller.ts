import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BarcodeService } from './barcode.service';
import { CreateBarcodeDto } from './dto/create-barcode.dto';
import { UpdateBarcodeDto } from './dto/update-barcode.dto';
import { Session } from '@shopify/shopify-api'
import { ShopSession } from '@/decorators/shop-session.decorator';


@Controller('barcode')
export class BarcodeController {
  constructor(private readonly barcodeService: BarcodeService) {}

  @Post()
  create(@Body() createBarcodeDto: any[]) {;
    return this.barcodeService.create(createBarcodeDto);
  }

  @Get()
  findAll(
    @ShopSession() session: Session,
  ) {
    return this.barcodeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.barcodeService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBarcodeDto: UpdateBarcodeDto) {
    return this.barcodeService.update(+id, updateBarcodeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.barcodeService.remove(+id);
  }
}
