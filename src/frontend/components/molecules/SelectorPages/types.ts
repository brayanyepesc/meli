export type SelectorPagesProps = {
    currentPage: number;
    totalPagesInResults: number;
    handlePageChange: (page: number) => void;
};