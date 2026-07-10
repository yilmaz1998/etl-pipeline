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

  export type CustomerFeedbackRecord = {
    feedback_date: string;
    customer_type: string;
    rating: number;
    nps_score: number;
    customer_sentiment: string;
    delivery_experience: string;
    product_quality: string;
    returned: boolean;
};

export type InventoryRecord = {
  inventory_date: string;
  warehouse_location: string;
  product_category: string;
  stock_quantity: number;
  is_out_of_stock: boolean;
  restock_days: number;
  supplier_delay_days: number;
  damaged_item_count: number;
};