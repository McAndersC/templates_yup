import { BasketContextProvider } from "@/context/basket.context";

export default function siteLayout({ children }) {
    return <div>
        <BasketContextProvider>
        {children}
        </BasketContextProvider>
    </div>
}