import * as graphql from "@nestjs/graphql";
import { EvaluateLoanEligibilityInput } from "../decisionEngine/EvaluateLoanEligibilityInput";
import { EvaluateLoanEligibilityOutput } from "../decisionEngine/EvaluateLoanEligibilityOutput";
import { DecisionEngineService } from "./decisionengine.service";

export class DecisionEngineResolver {
  constructor(protected readonly service: DecisionEngineService) {}

  @graphql.Mutation(() => EvaluateLoanEligibilityOutput)
  async EvaluateLoanEligibility(
    @graphql.Args()
    args: EvaluateLoanEligibilityInput
  ): Promise<EvaluateLoanEligibilityOutput> {
    return this.service.EvaluateLoanEligibility(args);
  }
}
