import { Injectable } from "@nestjs/common";
import { EvaluateLoanEligibilityInput } from "../decisionEngine/EvaluateLoanEligibilityInput";
import { EvaluateLoanEligibilityOutput } from "../decisionEngine/EvaluateLoanEligibilityOutput";

@Injectable()
export class DecisionEngineService {
  constructor() {}
  async EvaluateLoanEligibility(args: EvaluateLoanEligibilityInput): Promise<EvaluateLoanEligibilityOutput> {
    throw new Error("Not implemented");
  }
}
