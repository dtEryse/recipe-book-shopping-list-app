export class Ingredient {
  constructor(public name: string, public amount: number) {}
}

/* This is equal to this:
  public name: string;
  public amount: number;

  constructor(name: string, amount: number) {
    this.name = name;
    this.amount = amount;
  }
 */
