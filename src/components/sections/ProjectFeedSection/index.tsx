import classNames from 'classnames';
import dayjs from 'dayjs';

import { Action, Link } from '@/components/atoms';
import ImageBlock from '@/components/molecules/ImageBlock';
import ArrowUpRightIcon from '@/components/svgs/arrow-up-right';
import { mapStylesToClassNames as mapStyles } from '@/utils/map-styles-to-class-names';
import Section from '../Section';

export default function ProjectFeedSection(props) {
    const { elementId, colors, variant = 'variant-a', title, subtitle, actions = [], styles = {}, ...rest } = props;
    const sectionAlign = styles.self?.textAlign ?? 'left';
    return (
        <Section elementId={elementId} colors={colors} styles={styles.self}>
            {title && (
                <h2 className={classNames('text-4xl sm:text-5xl', mapStyles({ textAlign: sectionAlign }))}>{title}</h2>
            )}
            {subtitle && (
                <p
                    className={classNames('text-lg sm:text-xl', mapStyles({ textAlign: sectionAlign }), {
                        'mt-6': title
                    })}
                >
                    {subtitle}
                </p>
            )}
            {variant === 'variant-d' ? (
                <ProjectList {...rest} hasTopMargin={!!(title || subtitle)} headingLevel={title ? 'h3' : 'h2'} />
            ) : (
                <ProjectGrid
                    {...rest}
                    variant={variant}
                    hasTopMargin={!!(title || subtitle)}
                    headingLevel={title ? 'h3' : 'h2'}
                />
            )}
            {actions?.length > 0 && (
                <div
                    className={classNames(
                        'flex flex-wrap items-center gap-4 mt-10',
                        sectionAlign === 'center' ? 'justify-center' : 'justify-end'
                    )}
                >
                    {actions.map((action, index) => (
                        <Action key={index} {...action} />
                    ))}
                </div>
            )}
        </Section>
    );
}

function ProjectGrid(props) {
    const {
        variant,
        projects = [],
        showDate,
        showDescription,
        showFeaturedImage,
        showReadMoreLink,
        hasTopMargin,
        headingLevel
    } = props;
    if (projects.length === 0) {
        return null;
    }
    const TitleTag = headingLevel;
    return (
        <div
            className={classNames('grid gap-y-12', {
                'md:grid-cols-2': variant === 'variant-a',
                'md:grid-cols-3': variant === 'variant-b',
                'justify-center': variant === 'variant-c',
                'gap-x-6 lg:gap-x-8': variant !== 'variant-c',
                'mt-12': hasTopMargin
            })}
        >
            {projects.map((project, index) => (
                <Link key={index} href={project} className="block max-w-3xl pb-10 border-b border-current group">
                    {showFeaturedImage && project.featuredImage && (
                        <div className="w-full mb-6 overflow-hidden aspect-3/2">
                            <ImageBlock
                                {...project.featuredImage}
                                className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                            />
                        </div>
                    )}
                    {showDate && project.date && (
                        <div className="mb-3">
                            <ProjectDate date={project.date} />
                        </div>
                    )}
                    <TitleTag className="text-3xl sm:text-4xl">{project.title}</TitleTag>
                    {showDescription && project.description && <p className="mt-5 text-lg">{project.description}</p>}
                    {showReadMoreLink && (
                        <div className="mt-8">
                            <span className="inline-flex text-xl transition rounded-full p-4 border-2 border-current group-hover:bottom-shadow-6 group-hover:-translate-y-1.5">
                                <ArrowUpRightIcon className="fill-current w-icon h-icon" />
                            </span>
                        </div>
                    )}
                </Link>
            ))}
        </div>
    );
}

function ProjectList(props) {
    const {
        projects = [],
        showDate,
        showDescription,
        showFeaturedImage,
        showReadMoreLink,
        hasTopMargin,
        headingLevel
    } = props;
    if (projects.length === 0) {
        return null;
    }
    const TitleTag = headingLevel;
    return (
        <div
            className={classNames('grid gap-y-12', {
                'mt-12': hasTopMargin
            })}
        >
            {projects.map((project, index) => (
                <Link key={index} href={project} className="block pb-6 border-b border-current group md:pb-8 md:px-4">
                    <div className="flex flex-row items-start gap-4 sm:gap-6">
                        {showFeaturedImage && project.featuredImage && (
                            <div className="w-28 shrink-0 sm:w-36 md:w-44">
                                <div className="w-full overflow-hidden aspect-3/2">
                                    <ImageBlock
                                        {...project.featuredImage}
                                        className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                                    />
                                </div>
                            </div>
                        )}
                        <div className="md:grow">
                            {showDate && project.date && (
                                <div className="mb-3">
                                    <ProjectDate date={project.date} />
                                </div>
                            )}
                            <TitleTag className="text-xl sm:text-2xl">{project.title}</TitleTag>
                            {showDescription && project.description && (
                                <p className="mt-2 text-sm sm:text-base">{project.description}</p>
                            )}
                        </div>
                        {showReadMoreLink && (
                            <div className="ml-auto hidden sm:block sm:pl-2">
                                <span className="inline-flex text-xl transition rounded-full p-3 border-2 border-current group-hover:bottom-shadow-6 group-hover:-translate-y-1.5">
                                    <ArrowUpRightIcon className="fill-current w-icon h-icon" />
                                </span>
                            </div>
                        )}
                    </div>
                </Link>
            ))}
        </div>
    );
}

function ProjectDate({ date }) {
    const dateTimeAttr = dayjs(date).format('YYYY-MM-DD HH:mm:ss');
    const formattedDate = dayjs(date).format('YYYY-MM-DD');
    return <time dateTime={dateTimeAttr}>{formattedDate}</time>;
}
