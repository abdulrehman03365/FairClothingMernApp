class PaymentStrategy{
    processPayment(payment)
    {
        if(payment<0.00)
        {console.log("Error Invalid amount is enterd");}
    }
}

   class StripePaymentStrategy extends PaymentStrategy{
       
    processPayment()
    {
       // Process Stripe payment
    }
   
}

     
class PaypalPaymentStrategy extends PaymentStrategy{
       
    processPayment()
    {
         // Process PaypalPayment
    }
} 


class PaymentGateway {


    constructor(PaymentStrategy){
      this.PaymentStrategy=PaymentStrategy
    }


    processPayment(amount){
       return this.PaymentStrategy.processPayment(amount)
    }


}

const paymentGateway =new PaymentGateway(new PaypalPaymentStrategy());
paymentGateway.PaymentStrategy.processPayment(-9);


