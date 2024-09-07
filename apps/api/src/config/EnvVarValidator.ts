import { IsNumber, IsString } from 'class-validator';

export class EnvVarValidator {
  @IsString()
  YAGNA_APPKEY!: string;

  @IsNumber()
  PRICING_MAX_START_PRICE!: number;

  @IsNumber()
  PRICING_MAX_CPU_PER_HOUR_PRICE!: number;

  @IsNumber()
  PRICING_MAX_ENV_PER_HOUR_PRICE!: number;
}
