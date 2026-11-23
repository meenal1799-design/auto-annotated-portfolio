import classNames from 'classnames';
import { useRef } from 'react';

import Action from '@/components/atoms/Action';
import { mapStylesToClassNames as mapStyles } from '@/utils/map-styles-to-class-names';
import Section from '../Section';
import FeaturedItem from './FeaturedItem';

export default function FeaturedItemsSection(props) {
    const {
        elementId,
        colors,
        title,
        subtitle,
        actions = [],
        items = [],
        carousel = false,
        columns = 3,
        spacingX = 16,
        spacingY = 16,
        styles = {}
    } = props;
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
            {items.length > 0 && carousel && (
                <PlaylistCarousel
                    items={items}
                    title={title}
                    elementId={elementId}
                    className={classNames({ 'mt-12': title || subtitle })}
                />
            )}
            {items.length > 0 && !carousel && (
                <div
                    className={classNames('grid', mapColStyles(columns), {
                        'mt-12': title || subtitle
                    })}
                    style={{
                        columnGap: spacingX ? `${spacingX}px` : null,
                        rowGap: spacingY ? `${spacingY}px` : null
                    }}
                >
                    {items.map((item, index) => (
                        <FeaturedItem key={index} {...item} headingLevel={title ? 'h3' : 'h2'} />
                    ))}
                </div>
            )}
            {actions?.length > 0 && (
                <div
                    className={classNames('flex flex-wrap items-center gap-4 mt-10', {
                        'justify-center': sectionAlign === 'center',
                        'justify-end': sectionAlign === 'right'
                    })}
                >
                    {actions.map((action, index) => (
                        <Action key={index} {...action} />
                    ))}
                </div>
            )}
        </Section>
    );
}

function PlaylistCarousel({ items, title, elementId, className }) {
    const carouselRef = useRef<HTMLDivElement | null>(null);
    const carouselId = elementId ? `${elementId}-carousel` : 'playlist-carousel';

    function scroll(direction: -1 | 1) {
        const carousel = carouselRef.current;
        if (!carousel) return;
        carousel.scrollBy({ left: direction * carousel.clientWidth * 0.8, behavior: 'smooth' });
    }

    return (
        <div className={className}>
            <div className="mb-5 flex justify-end gap-3">
                <button
                    type="button"
                    aria-label="Previous playlists"
                    aria-controls={carouselId}
                    onClick={() => scroll(-1)}
                    className="inline-flex h-12 w-12 items-center justify-center rounded-full border-2 border-current text-2xl transition hover:-translate-y-1 hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-4"
                >
                    ‹
                </button>
                <button
                    type="button"
                    aria-label="Next playlists"
                    aria-controls={carouselId}
                    onClick={() => scroll(1)}
                    className="inline-flex h-12 w-12 items-center justify-center rounded-full border-2 border-current text-2xl transition hover:-translate-y-1 hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-4"
                >
                    ›
                </button>
            </div>
            <div
                ref={carouselRef}
                id={carouselId}
                role="region"
                aria-label={title || 'YouTube playlists'}
                tabIndex={0}
                className="flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth pb-4 focus-visible:outline-2 focus-visible:outline-offset-4"
            >
                {items.map((item, index) => {
                    const action = item.actions?.[0];
                    const image = item.featuredImage;
                    if (!action?.url || !image?.url) return null;
                    return (
                        <a
                            key={index}
                            href={action.url}
                            target="_blank"
                            rel="noreferrer"
                            className="group w-[86%] shrink-0 snap-start sm:w-[72%] md:w-[58%]"
                        >
                            <div className="relative aspect-video overflow-hidden rounded-xl border border-current/20">
                                <img
                                    src={image.url}
                                    alt={image.altText || item.title || 'YouTube playlist thumbnail'}
                                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                                    loading="lazy"
                                />
                                <span className="absolute bottom-4 right-4 rounded-full bg-black/80 px-4 py-2 text-sm font-medium text-white">
                                    ▶ Playlist
                                </span>
                            </div>
                            {item.title && <h3 className="mt-5 text-2xl sm:text-3xl">{item.title}</h3>}
                            {item.subtitle && <p className="mt-2 text-base opacity-80">{item.subtitle}</p>}
                            <span className="mt-4 inline-flex items-center gap-2 uppercase underline underline-offset-4 transition group-hover:gap-3">
                                {action.label || 'Watch playlist'} <span aria-hidden="true">↗</span>
                            </span>
                        </a>
                    );
                })}
            </div>
        </div>
    );
}

function mapColStyles(columns) {
    switch (columns) {
        case 4:
            return 'md:grid-cols-4';
        case 3:
            return 'md:grid-cols-3';
        case 2:
            return 'md:grid-cols-2';
        default:
            return null;
    }
}
