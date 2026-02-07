import { withBasePath } from '@/utils/asset-url';
import { mapStylesToClassNames as mapStyles } from '@/utils/map-styles-to-class-names';
import classNames from 'classnames';

export default function BackgroundImage(props) {
    const { url, className, backgroundSize, backgroundPosition, backgroundRepeat, opacity } = props;
    if (!url) {
        return null;
    }
    const resolvedUrl = withBasePath(url);
    return (
        <div
            className={classNames(
                'fixed',
                'inset-0',
                mapStyles({
                    backgroundSize: backgroundSize ?? 'cover',
                    backgroundPosition: backgroundPosition ?? 'center',
                    backgroundRepeat: backgroundRepeat ?? 'no-repeat'
                }),
                className
            )}
            style={{
                backgroundImage: `url('${resolvedUrl}')`,
                opacity: (opacity ?? 100) * 0.01
            }}
        />
    );
}
