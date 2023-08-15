import { ApiProperty, PickType } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
import { Cat } from '../cats.schema';

// 타입 또는 인터페이스로 하지 않고 클래스로 사용하는 이유는
// 데코레이터 패턴을 적용할 수도 있고
// 상속을 하여 재사용성을 증가시킬 수 있기 때문이다.
export class CatRequestDto extends PickType(Cat, [
  'email',
  'name',
  'password',
] as const) {}
