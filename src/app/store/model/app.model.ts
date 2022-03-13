export interface IAppState{
    stage: number;
}

export interface IShippingState{
    shippingFullName: string;
    shippingPhone: string;
    shippingAddress: string;
    shippingApt: string;
    shippingCity: string;
    shippingCountry: string;
    shippingZip: string;
}
export interface IBillingState{
    billingFullName: string;
    billingPhone: string;
    billingAddress: string;
    billingApt: string;
    billingCity: string;
    billingCountry: string;
    billingZip: string;
}
export interface IPaymentState{
    paymentName: string;
    paymentNumber: string;
    paymentExpire: string;
    paymentCode: string;
}