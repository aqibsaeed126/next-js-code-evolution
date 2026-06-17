'use client';

// RSC Example
type Props = {
  params: Promise<{ articleId: string }>;
  searchParams: Promise<{ lang?: 'en' | 'fr' }>;
};

// export default async function ArticlesPage({params, searchParams}: Props) {
//   // return <div>News Article Page ENglish</div>;
//   debugger;
//     const articleId  = (await params).articleId;
//     const {lang = 'en'}  = await searchParams;
//     return <div>News Article :  {articleId} for Language {lang}</div>;
//   }

// RCC Example

import { use } from 'react';

export default function ArticlesPage({ params, searchParams }: Props) {
  // return <div>News Article Page ENglish</div>;
  debugger;
  const { articleId } = use(params);
  const { lang = 'en' } = use(searchParams);
  return (
    <div>
      News Article : {articleId} for Language {lang}
    </div>
  );
}
