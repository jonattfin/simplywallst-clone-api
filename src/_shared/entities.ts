import { ObjectType, Field, Int, ID } from '@nestjs/graphql';

@ObjectType()
export class Company {
  @Field(() => Int)
  id: number;

  @Field()
  readonly name: string;

  @Field()
  readonly description: string;

  @Field(() => [Reward], { nullable: false })
  readonly rewards: Reward[];

  @Field(() => [Risk], { nullable: false })
  readonly risks: Risk[];

  @Field(() => [Stock], { nullable: false })
  readonly stocks: Stock[];

  @Field(() => [Company], { nullable: false })
  readonly competitors: Company[];

  @Field(() => [News], { nullable: false })
  readonly news: News[];

  @Field()
  readonly snowflakeValueJson: string;

  @Field()
  readonly radialBarValueJson: string;
}

@ObjectType()
export class Reward {
  @Field(() => Int)
  id: number;

  @Field()
  readonly description: string;
}

@ObjectType()
export class Risk {
  @Field(() => Int)
  id: number;

  @Field()
  readonly description: string;
}

@ObjectType()
export class Stock {
  @Field(() => Int)
  id: number;

  @Field()
  companyId: number;

  @Field()
  readonly ticker: string;

  @Field()
  readonly exchangeName: string;

  @Field()
  readonly lastPrice: number;

  @Field()
  readonly marketCap: number;

  @Field()
  readonly priceSevenDays: number;

  @Field()
  readonly priceOneYear: number;

  @Field()
  readonly lastUpdated: string;

  @Field()
  readonly priceHistoryJson: string;
}

@ObjectType()
export class News {
  @Field(() => Int)
  id: number;

  @Field(() => Int)
  companyId: number;

  @Field()
  readonly date: string;

  @Field()
  readonly description: string;
}

@ObjectType()
export class Portfolio {
  @Field(() => Int)
  id: number;

  @Field()
  readonly name: string;

  @Field()
  readonly currency: string;

  @Field()
  readonly image: string;

  @Field()
  readonly created: string;

  @Field()
  readonly description: string;

  @Field()
  readonly snowflakeValueJson: string;

  @Field(() => [CompanyPortfolio], { nullable: false })
  readonly companies: CompanyPortfolio[];
}

@ObjectType()
export class CompanyPortfolio {
  @Field(() => Int)
  id: number;

  @Field(() => Int)
  holding: number;

  @Field(() => Int)
  annualDividendYield: number;

  @Field(() => Int)
  annualDividendContribution: number;

  @Field()
  readonly company: Company;
}
