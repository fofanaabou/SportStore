import {Injectable, Signal, WritableSignal, computed, signal} from "@angular/core";
import {Product} from "./Product";

@Injectable()
export class CartModel {

  public linesSignal: WritableSignal<CartLine[]>;
  public summary: Signal<CartSummary>;
  public lines: Signal<CartLine[]>;

  constructor() {
    this.linesSignal = signal([]);

    this.summary = computed(() => {
      let newSummary = new CartSummary();
      this.linesSignal().forEach(l => {
        newSummary.itemCount += l.quantity;
        newSummary.cartPrice += l.lineTotal;
      });
      return newSummary;
    });

    this.lines = computed(() => {
      return this.linesSignal()
    })

  }



  public addLine(product: Product, quantity: number = 1) {
    this.linesSignal.update((array: CartLine[]) => {
      let lines = [...array];
      let line = lines.find(l => l.product.id === product.id);
      if (line != undefined) {
        line.quantity += quantity;
      } else {
        lines.push(new CartLine(product, quantity))
      }
      return lines;
    });
  }

  public updateQuantity(product: Product, quantity: number) {
    this.linesSignal.update((array: any[]) => {
      let lines = [...array];
      let line = lines.find(l => l.product.id == product.id);
      if (line != undefined) {
        line.quantity = Number(quantity);
      }
      return lines;
    });
  }

  public removeLine(id: number) {
    this.linesSignal.update((lines: CartLine[]) => {
      let index = lines.findIndex(l => l.product.id == id);
      lines.splice(index, 1);
      return [...lines];
    })
  }

  public clear() {
    this.linesSignal.set([]);
  }
}

export class CartLine {

  constructor(public product: Product, public quantity: number) {
  }

  get lineTotal() {
    return this.quantity * (this.product.price ?? 0)
  }
}

export class CartSummary {
  itemCount: number = 0;
  cartPrice: number = 0;
}
