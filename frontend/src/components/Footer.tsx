import * as React from 'react';

export const Footer: React.FunctionComponent = () => {
    return (
        <div className="footer">
            <div className="author">Author: Mark Bozsoki</div>
            <div className="icon-credit">
                Icons made by{' '}
                <a
                    href="https://www.flaticon.com/authors/smashicons"
                    title="Smashicons"
                >
                    Smashicons
                </a>{' '}
                from{' '}
                <a href="https://www.flaticon.com/" title="Flaticon">
                    www.flaticon.com
                </a>
            </div>
        </div>
    );
};
