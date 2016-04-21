export declare class AutocompleteItem {
    id: string;
    name: string;
    children: Array<AutocompleteItem>;
    parent: AutocompleteItem;
    constructor(source: any);
    fillChildrenHash(optionsMap: Map<string, number>, startIndex: number): number;
    hasChildren(): boolean;
    getSimilar(): AutocompleteItem;
}