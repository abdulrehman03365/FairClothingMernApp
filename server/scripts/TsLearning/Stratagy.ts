namespace PaymentStrategyPattern{
    export interface Strategy{
        execute(): void
    }
}

class Paypal implements PaymentStrategyPattern.Strategy  {
execute() :void
{
console.log("Paypal is implemented ");

}



}

class Stripe implements PaymentStrategyPattern.Strategy{

    execute(): void {
        console.log("Stripe is selected as payment Strategy");
        
    }
}

class Pay  {
    
    private strategy : PaymentStrategyPattern.Strategy

    constructor(strategy : PaymentStrategyPattern.Strategy){
        this.strategy = strategy

    }
     
    executePayment(){
    this.strategy.execute()    
    }


}

new Pay(new Paypal).executePayment()