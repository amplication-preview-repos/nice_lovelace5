import { Module } from "@nestjs/common";
import { DecisionEngineService } from "./decisionengine.service";
import { DecisionEngineController } from "./decisionengine.controller";
import { DecisionEngineResolver } from "./decisionengine.resolver";

@Module({
  controllers: [DecisionEngineController],
  providers: [DecisionEngineService, DecisionEngineResolver],
  exports: [DecisionEngineService],
})
export class DecisionEngineModule {}
