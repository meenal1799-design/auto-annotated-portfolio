import { Annotated } from '@/components/Annotated';
import { withBasePath } from '@/utils/asset-url';

export default function ImageBlock(props) {
    const { elementId, className, url, altText = '' } = props;
    if (!url) {
        return null;
    }

    const resolvedUrl = withBasePath(url);

    return (
        <Annotated content={props}>
            <img id={elementId || null} className={className} src={resolvedUrl} alt={altText} />
        </Annotated>
    );
}
