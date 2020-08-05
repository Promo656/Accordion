import React from "react";

type SelectProps = {
    value?: any
    onChange: (value: any) => void
    item: ItemProps[]
}

type ItemProps = {
    title: string
    value: any
}

export function Select(props: SelectProps) {
    const selectedItem = props.item.find(i => i.value === props.value)

    return (
        <div>
            <h3>{selectedItem && selectedItem.title}</h3>
            {props.item.map(i => <div key={props.value}>{i.title}</div>)}
        </div>
    )
}

