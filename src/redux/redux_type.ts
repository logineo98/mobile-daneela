/**
 * SEARCH
 */
export type SEARCH_ITEM_TYPE = { key: string, value: string }

export type SEARCH_DATA_TYPE = {
    first_search: SEARCH_ITEM_TYPE
    second_search: SEARCH_ITEM_TYPE
}

export type SEARCH_REDUCER_TYPE = {
    first_search?: SEARCH_ITEM_TYPE
    second_search?: SEARCH_ITEM_TYPE
}