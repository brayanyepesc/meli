export const GenerateOrder = ({ cart, clearCart }: { cart: any, clearCart: () => void }) => {
    const orderData = {
      products: cart.map((item: any) => ({
        id: item.id,
        title: item.title,
        quantity: item.quantity,
        price: item.price,
        total_price: item.quantity * item.price,
      })),
      total_order_price: cart.reduce((acc: number, item: any) => acc + item.quantity * item.price, 0),
    }
    const jsonData = new Blob([JSON.stringify(orderData, null, 2)], { type: "application/json" })
    const url = URL.createObjectURL(jsonData)
    const link = document.createElement("a")
    link.href = url
    link.setAttribute("download", "order.json")
    document.body.appendChild(link)
    link.click()
    clearCart();
    URL.revokeObjectURL(url);
    document.body.removeChild(link);
}