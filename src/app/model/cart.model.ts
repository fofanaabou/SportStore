import {Injectable, Signal, WritableSignal, computed, signal} from "@angular/core";
import {Product} from "./Product";

@Injectable()
export class CartModel {

   public linesSignal: WritableSignal<CartLine[]>;
   public summary: Signal<CartSummary>;
  constructor() {
    this.linesSignal = signal([]);

    this.summary = computed(() => {
      console.log("new prodcut:", "why not" )

      let newSummary = new CartSummary();
      this.linesSignal().forEach(l => {
        newSummary.itemCount += l.quantity;
        newSummary.cartPrice += l.lineTotal;
      });
      return newSummary;
    })
  }

  get lines(): Signal<CartLine[]> {
    return this.linesSignal.asReadonly();
  }

  public addLine(product: Product, quantity: number = 1) {
    console.log("oh lala")
    this.linesSignal.update((lineArray: CartLine[]) => {
      console.log("coucou")
      let line = lineArray.find(l => l.product.id == product.id);
      if (line != undefined) {
        line.quantity += quantity;
      } else {
        lineArray.push(new CartLine(product, quantity))
      }
      return [...lineArray];
    });
  }

  public updateQuantity(product: Product, quantity: number) {
    this.linesSignal.update((linesArray: any[]) => {
      let line = linesArray.find(l => l.product.id == product.id);
      if (line != undefined) {
        line.quantity = Number(quantity);
      }
      return linesArray;
    });
  }

  public removeLine(id: number) {
    this.linesSignal.update((lineArray: any[]) => {
      let index = lineArray.findIndex(l => l.product.id == id);
      lineArray.splice(index,1);
      return lineArray;
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
