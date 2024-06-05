import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { DecisionEngineService } from "./decisionengine.service";
import { EvaluateLoanEligibilityInput } from "../decisionEngine/EvaluateLoanEligibilityInput";
import { EvaluateLoanEligibilityOutput } from "../decisionEngine/EvaluateLoanEligibilityOutput";

@swagger.ApiTags("decisionEngines")
@common.Controller("decisionEngines")
export class DecisionEngineController {
  constructor(protected readonly service: DecisionEngineService) {}

  @common.Post("/evaluate-loan-eligibility")
  @swagger.ApiOkResponse({
    type: EvaluateLoanEligibilityOutput
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async EvaluateLoanEligibility(
    @common.Body()
    body: EvaluateLoanEligibilityInput
  ): Promise<EvaluateLoanEligibilityOutput> {
        return this.service.EvaluateLoanEligibility(body);
      }
}
