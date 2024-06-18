export type CartCardProps = {
    name: string;
    image: string;
    quantity: number;
    mutateCount: (action: string) => void;
}

export type QuantityButton = {
    count: number;
    addCount: any;
    removeCount: any;
}
