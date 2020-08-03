import * as React from 'react';
import classnames from 'classnames';
import { CSSTransition } from 'react-transition-group';
import { createNS, withDefaultProps } from '../utils';
import { preventDefault } from '../utils/dom/event';
import { View } from './style';

const [bem] = createNS('overlay');

const noop = function () {};

function preventTouchMove(event: any) {
    preventDefault(event, true);
}

interface Props extends React.HTMLAttributes<HTMLDivElement> {
    show?: boolean;
    zIndex?: number | string;
    duration: number | string | null;
    className?: any;
    lockScroll?: boolean;
    customStyle?: Record<string, unknown>;
    onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

const defaultProps = {
    show: false,
    zIndex: 1,
    lockScroll: true,
    duration: 300,
};

export type OverlayProps = Props & typeof defaultProps;

const Overlay: React.FC<React.PropsWithChildren<OverlayProps>> = (props: OverlayProps) => {
    const { zIndex, onClick, show, lockScroll, duration } = props;

    const style: React.CSSProperties = {
        zIndex,
        ...props.customStyle,
    };

    const handleClick = (event: React.MouseEvent<HTMLDivElement>): void => {
        onClick && onClick(event);
    };

    if (show) {
        return (
            <CSSTransition unmountOnExit in={show} timeout={duration} classNames="mul-fade">
                <View
                    className={classnames([bem(), props.className])}
                    style={style}
                    onClick={handleClick}
                    onTouchMove={lockScroll ? preventTouchMove : noop}
                >
                    {props.children}
                </View>
            </CSSTransition>
        );
    }
    return null;
};

export default withDefaultProps(React.memo(Overlay), defaultProps);
