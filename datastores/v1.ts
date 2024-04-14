export interface ListEntriesResponseItem {
    /** The url path for this datastore entry. */
    path: string;
    /** The id for this datastore entry. */
    id: string;
    /** 
     * The value of the datastore.
     * In the API docs, this is stated as a "number", but it returns as a string.
     */
    value: string;
}

export interface ListEntriesResponse {
    /** A list of ordered datastore entries. */
    entries: ListEntriesResponseItem[];
    /** A token to go to the next set of entries. */
    nextPageToken: string;
}