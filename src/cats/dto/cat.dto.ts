import { ApiProperty, PickType } from '@nestjs/swagger';
import { Cat } from '../cats.schema';

export class readOnlyCatDto extends PickType(Cat, ['email', 'name'] as const) {
  @ApiProperty({
    example: 'w51er32qw1er65qw4er',
    description: 'id',
    required: true,
  })
  id: string;
}
