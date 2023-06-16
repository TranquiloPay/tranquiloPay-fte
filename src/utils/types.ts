export interface ICondition {
    condition: (row: Record<string, any>) => boolean;
    message: string;
  }