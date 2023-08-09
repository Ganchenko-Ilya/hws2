import React from 'react'
import iconDown from '../../down.png';
import iconUp from '../../up.png';
import iconNone from '../../noneSortIcon.png';


// добавить в проект иконки и импортировать
const downIcon = iconDown
const upIcon = iconUp
const noneIcon = iconNone

export type SuperSortPropsType = {
    id?: string
    sort: string
    value: string
    onChange: (newSort: string) => void
}

export const pureChange = (sort: string, down: string, up: string) => {
    // пишет студент, sort: (click) => down (click) => up (click) => '' (click) => down ...
    
    return sort === down ? up : sort === up ? '' : down  // исправить
}

const SuperSort: React.FC<SuperSortPropsType> = (
    {
        sort, value, onChange, id = 'hw15',
    }
) => {
    const up = '0' + value
    const down = '1' + value

    const onChangeCallback = () => {
        onChange(pureChange(sort, down, up))
    }

    const icon = sort === down
        ? downIcon
        : sort === up
            ? upIcon
            : noneIcon
    

    return (
        <span
            id={id + '-sort-' + value}
            onClick={onChangeCallback}
        >
            {/* сделать иконку*/}
            {/*<img*/}
            {/*    id={id + '-icon-' + sort}*/}
            {/*    src={icon}*/}
            {/*/> */}
        <img src={icon}  alt="" />
            
        </span>
    )
}

export default SuperSort
