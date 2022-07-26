import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateLancamentoDto } from './dto/create-lancamento.dto';
import { UpdateLancamentoDto } from './dto/update-lancamento.dto';
import { Lancamento, LancamentoDocument } from './entities/lancamento.entity';

@Injectable()
export class LancamentosService {
  constructor(
    @InjectModel(Lancamento.name)
    private lancamentoModel: Model<LancamentoDocument>,
  ) {}

  create(createLancamentoDto: CreateLancamentoDto) {
    const lancamento = new this.lancamentoModel(createLancamentoDto);
    return lancamento.save();
  }

  findAll() {
    return this.lancamentoModel.find().populate('conta');
  }

  findOne(id: string) {
    return this.lancamentoModel.findById(id);
  }

  update(id: string, updateLancamentoDto: UpdateLancamentoDto) {
    return this.lancamentoModel.findByIdAndUpdate(
      {
        _id: id,
      },
      {
        $set: updateLancamentoDto,
      },
      {
        new: true,
      },
    );
  }

  remove(id: string) {
    return this.lancamentoModel
      .deleteOne({
        _id: id,
      })
      .exec();
  }
}
