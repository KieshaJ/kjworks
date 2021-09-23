import React, { MouseEventHandler } from 'react';

type Props = {
    active?: boolean;
    label: string;
    onClick?: MouseEventHandler;
    children: JSX.Element;
};

const Tab = (props: Props): JSX.Element => {
    const { active, label, onClick } = props;

    return (
        <li className={active ? 'tab-active' : ''}>
            <button
                type="button"
                className='tab'
                onClick={onClick}
            >
                {label}
            </button>
        </li>
    );
};

export default Tab;
