import React, { MouseEventHandler } from 'react';

type Props = {
    active: boolean | false;
    label: string | null;
    onClick: MouseEventHandler;
};

function Tab(props: Props): JSX.Element {
    const { active, label, onClick } = props;

    return (
        <li className={active ? 'tab-active' : ''}>
            <button type="button" className="tab" onClick={onClick}>
                {label}
            </button>
        </li>
    );
}

export default Tab;
