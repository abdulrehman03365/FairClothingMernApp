class ShirtDesign {
    constructor(public CustomerNumber: number, public Website: string, public images: string[] = ['https://PSL.png']) {}

    clone(newImages: string[]): ShirtDesign {
        return new ShirtDesign(this.CustomerNumber, this.Website, [...this.images, ...newImages]);
    }
}

const baseShirtDesign = new ShirtDesign(12, "");
const LQShirt = baseShirtDesign.clone(['https://lqimage_logo.png']);
const KKShirt = baseShirtDesign.clone(['https://KKimage_logo.png']);

console.log("Base Shirt", baseShirtDesign);
console.log("LQ Shirt", LQShirt);
console.log("KK SHIRT", KKShirt);
