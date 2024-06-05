import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";

@ObjectType("EvaluateLoanEligibilityOutputObject")
class EvaluateLoanEligibilityOutput {
    @Field(() => Number)
    @ApiProperty({
        required: true,
        type: () => Number
    })
    @Type(() => Number)
    allocatedAmount!: number;
}

export { EvaluateLoanEligibilityOutput as EvaluateLoanEligibilityOutput };