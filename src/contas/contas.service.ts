import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateContaDto } from './dto/create-conta.dto';
import { UpdateContaDto } from './dto/update-conta.dto';
import { Conta, ContaDocument } from './entities/conta.entity';

@Injectable()
export class ContasService {
  constructor(
    @InjectModel(Conta.name) private contaModel: Model<ContaDocument>,
  ) {}

  create(createContaDto: CreateContaDto) {
    const conta = new this.contaModel(createContaDto);
    return conta.save();
  }

  findAll() {
    return this.contaModel.find();
  }

  findOne(id: number) {
    return this.contaModel.findById(id);
  }

  update(id: number, updateContaDto: UpdateContaDto) {
    return this.contaModel.findByIdAndUpdate(
      {
        _id: id,
      },
      {
        $set: updateContaDto,
      },
      {
        new: true,
      },
    );
  }

  remove(id: number) {
    return this.contaModel
      .deleteOne({
        _id: id,
      })
      .exec();
  }
}
