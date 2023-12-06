// Decorator pattern let us extend the functionality of  object by creating decorators  that wrap  the concrete classses.


interface Product {
    getPrice(): number;
  }
  
  class Cloth implements Product {
    constructor(public price: number) {}
  
    getPrice() {
      return this.price;
    }
  }
  
  abstract class ProductDecorator implements Product {
    constructor(protected product: Product) {}
  
    abstract getPrice(): number;
  }
  
  class DiscountDecorator extends ProductDecorator {
    constructor(product: Product, private discountPrice: number) {
      super(product);
    }
  
    getPrice(): number {
      return this.product.getPrice() - this.discountPrice;
    }
  }
  
  const originalCloth = new Cloth(1000);
  const discountedCloth = new DiscountDecorator(originalCloth, 20);
  
  console.log("Original Price:", originalCloth.getPrice());
  console.log("Discounted Price:", discountedCloth.getPrice());
  

