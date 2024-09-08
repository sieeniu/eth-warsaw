import { IsInt, IsNumber, IsString } from 'class-validator';

export class EnvVarValidator {
  @IsString()
  YAGNA_APPKEY!: string;

  @IsNumber()
  PRICING_MAX_START_PRICE!: number;

  @IsNumber()
  PRICING_MAX_CPU_PER_HOUR_PRICE!: number;

  @IsNumber()
  PRICING_MAX_ENV_PER_HOUR_PRICE!: number;

  @IsString()
  DB_HOST!: string;

  @IsInt()
  DB_PORT!: number;

  @IsString()
  DB_USER!: string;

  @IsString()
  DB_PASSWORD!: string;

  @IsString()
  DB_NAME!: string;
}
