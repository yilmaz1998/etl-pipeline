export type DataRow = {
    [key: string]: string | undefined;
  };

  export type SalesRecord = {
    sale_date: string;
    region: string;
    category: string;
    customer_type: string;
    sessions: number;
    order_count: number;
    total_revenue: number;
    average_order_value: number;
    ad_spend: number;
    mobile_conversion: number;
    desktop_conversion: number;
    refund_rate: number;
    support_tickets: number;
    inventory_score: number;
    shipping_delay: number;
    campaign: string | null;
  }