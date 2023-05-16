import React from "react";
import './TodosEmpty.css';

function TodosEmpty(props) {
    return (
        <p className="no-results">No results found for your search</p>
    );
}

export { TodosEmpty };