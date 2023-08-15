import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
import { Document, SchemaOptions } from 'mongoose';

const options: SchemaOptions = {
  timestamps: true,
};

@Schema(options)
export class Cat extends Document {
  @ApiProperty({
    example: 'qweqwe123@kakao.com',
    description: 'email',
    required: true,
  })
  @Prop({
    // default가 required: false 이다.
    required: true,
    unique: true,
  })
  // 이메일 형식인지 확인하는 validator
  @IsEmail()
  // 비어있는지 확인하는 validator
  @IsNotEmpty()
  email: string;

  @ApiProperty({
    example: 'elice',
    description: 'name',
    required: true,
  })
  @Prop({
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    example: '1111',
    description: 'password',
    required: true,
  })
  @Prop({
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  password: string;

  @Prop()
  @IsString()
  imgUrl: string;

  readonly readOnlyData: { id: string; email: string; name: string };
}

export const CatSchema = SchemaFactory.createForClass(Cat);

// 클라이언트나 사용자에게 password를 보여주지 않기 위해서
// 가상의 필드를 만들어서 보여준다.
CatSchema.virtual('readOnlyData').get(function (this: Cat) {
  return {
    id: this.id,
    email: this.email,
    name: this.name,
  };
});
