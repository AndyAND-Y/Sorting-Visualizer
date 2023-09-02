import { useLoadingStore } from "../state/loadingState";

export default function useLoadingState(): [boolean, (newValue: boolean) => void] {
    const isLoading = useLoadingStore((state) => state.isLoading);
    const change = useLoadingStore((state) => state.setIsLoading);

    const setIsLoading = (newValue: boolean) => {
        change(newValue);
    }

    return [isLoading, setIsLoading];

}