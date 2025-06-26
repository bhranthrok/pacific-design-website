'use client';
import { useEffect } from 'react';

const REVIEWS = [
  {
    id: 'qqeX9LCgEM5AOKwYA2uH9Q',
    user: {
      name: 'Yuanqing Z.',
      profile: 'https://www.yelp.com/user_details?userid=AL6VB8gY0YkKm2fYrIF2Qg',
    },
    biz: {
      name: 'Pacific Design',
      url: 'https://www.yelp.com/biz/tsCIkwjvk-0AcN44xUCCew',
    },
    reviewUrl: 'https://www.yelp.com/biz/pacific-design-cupertino-4?hrid=qqeX9LCgEM5AOKwYA2uH9Q',
  },
  {
    id: 'UEc0D5XDvyeV0FCB-WNv3Q',
    user: {
      name: 'Kwai L',
      profile: 'https://www.yelp.com/user_details?userid=KYqrP47aH8GgMu2GJAuNGA',
    },
    biz: {
      name: 'Pacific Design',
      url: 'https://www.yelp.com/biz/tsCIkwjvk-0AcN44xUCCew',
    },
    reviewUrl: 'https://www.yelp.com/biz/pacific-design-cupertino-4?hrid=UEc0D5XDvyeV0FCB-WNv3Q',
  },
  {
    id: 'ktf5GSChx9DhsX0X7d65Qw',
    user: {
      name: 'Chin B.',
      profile: 'https://www.yelp.com/user_details?userid=EJhdpcfTflUrg4RR4vjDDA',
    },
    biz: {
      name: 'Pacific Design',
      url: 'https://www.yelp.com/biz/tsCIkwjvk-0AcN44xUCCew',
    },
    reviewUrl: 'https://www.yelp.com/biz/pacific-design-cupertino-4?hrid=ktf5GSChx9DhsX0X7d65Qw',
  },
  {
    id: '3P2p6q5WGy_giA-KxyuvXQ',
    user: {
      name: 'Fu-Ning H.',
      profile: 'https://www.yelp.com/user_details?userid=s51MCkUcKuYns3lmBcPhpA',
    },
    biz: {
      name: 'Pacific Design',
      url: 'https://www.yelp.com/biz/tsCIkwjvk-0AcN44xUCCew',
    },
    reviewUrl: 'https://www.yelp.com/biz/pacific-design-cupertino-4?hrid=3P2p6q5WGy_giA-KxyuvXQ',
  },
];

export default function YelpReviews() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://www.yelp.com/embed/widgets.js';
    script.async = true;
    document.body.appendChild(script);
    return () => {document.body.removeChild(script);
    }
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:pl-10">
      {REVIEWS.map((review) => (
        <span
          key={review.id}
          className="yelp-review"
          data-review-id={review.id}
          data-hostname="www.yelp.com"
        >
          Read{' '}
          <a href={review.user.profile} rel="nofollow noopener">
            {review.user.name}
          </a>
          &apos;s{' '}
          <a href={review.reviewUrl} rel="nofollow noopener">
            review
          </a>{' '}
          of{' '}
          <a href={review.biz.url} rel="nofollow noopener">
            {review.biz.name}
          </a>{' '}
          on{' '}
          <a href="https://www.yelp.com" rel="nofollow noopener">
            Yelp
          </a>
        </span>
      ))}
    </div>
  );
}
