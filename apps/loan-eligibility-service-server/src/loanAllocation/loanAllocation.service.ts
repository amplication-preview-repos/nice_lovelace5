import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { LoanAllocationServiceBase } from "./base/loanAllocation.service.base";

@Injectable()
export class LoanAllocationService extends LoanAllocationServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
